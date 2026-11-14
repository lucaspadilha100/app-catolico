alter table public.sugestoes_paroquia drop constraint if exists sugestoes_paroquia_tipo_check;
alter table public.sugestoes_paroquia add constraint sugestoes_paroquia_tipo_check
  check (tipo in ('confirmar', 'horario_errado', 'novo_horario', 'nova_paroquia', 'outro', 'local'));

drop function if exists public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer);

create function public.buscar_paroquias(
  p_termo text default '',
  p_lat double precision default null,
  p_lng double precision default null,
  p_raio_km double precision default 15,
  p_limite integer default 30,
  p_pular integer default 0
)
returns table (
  id uuid, nome text, tipo text, padroeiro text, bairro text, cidade text, uf char(2),
  lat double precision, lng double precision, verificada boolean, confirmado_em timestamptz, distancia_km double precision,
  aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select p.id, p.nome, p.tipo, p.padroeiro, p.bairro, p.cidade, p.uf, e.lat, e.lng, p.verificada, p.confirmado_em, e.aproximado,
      case when p_lat is null or e.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(e.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(e.lat)) * power(sin(radians(e.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.paroquias p
    left join public.paroquias m on m.id = p.matriz_id and p.lat is null
    cross join lateral (select coalesce(p.lat, m.lat) as lat, coalesce(p.lng, m.lng) as lng, (p.lat is null and m.lat is not null) as aproximado) e
    where p.ativa
      and (p_lat is null or (e.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and e.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
      and (coalesce(p_termo, '') = '' or not exists (
        select 1 from unnest(string_to_array(public.sem_acento(p_termo), ' ')) w
        where w <> '' and position(w in p.busca) = 0))
  )
  select b.id, b.nome, b.tipo, b.padroeiro, b.bairro, b.cidade, b.uf, b.lat, b.lng, b.verificada, b.confirmado_em, b.distancia_km, b.aproximado
  from base b
  where b.distancia_km is null or b.distancia_km <= p_raio_km
  order by b.distancia_km nulls last, b.aproximado, b.nome
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer) from public;
grant execute on function public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer) to anon, authenticated;

drop function if exists public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text);

create function public.procurar_paroquias(
  p_termo text default '',
  p_lat double precision default null,
  p_lng double precision default null,
  p_raio_km double precision default 15,
  p_limite integer default 30,
  p_pular integer default 0,
  p_cidade text default '',
  p_uf text default ''
)
returns table (
  id uuid, nome text, tipo text, padroeiro text, bairro text, cidade text, uf char(2),
  lat double precision, lng double precision, verificada boolean, confirmado_em timestamptz, distancia_km double precision,
  aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select p.id, p.nome, p.tipo, p.padroeiro, p.bairro, p.cidade, p.uf, e.lat, e.lng, p.verificada, p.confirmado_em, e.aproximado,
      case when p_lat is null or e.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(e.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(e.lat)) * power(sin(radians(e.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.paroquias p
    left join public.paroquias m on m.id = p.matriz_id and p.lat is null
    cross join lateral (select coalesce(p.lat, m.lat) as lat, coalesce(p.lng, m.lng) as lng, (p.lat is null and m.lat is not null) as aproximado) e
    where p.ativa
      and (coalesce(p_cidade, '') = '' or (public.sem_acento(p.cidade) = public.sem_acento(p_cidade) and (coalesce(p_uf, '') = '' or p.uf = upper(p_uf))))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (e.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and e.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
      and (coalesce(p_termo, '') = '' or not exists (
        select 1 from unnest(string_to_array(public.sem_acento(p_termo), ' ')) w
        where w <> '' and position(w in p.busca) = 0))
  )
  select b.id, b.nome, b.tipo, b.padroeiro, b.bairro, b.cidade, b.uf, b.lat, b.lng, b.verificada, b.confirmado_em, b.distancia_km, b.aproximado
  from base b
  where coalesce(p_cidade, '') <> '' or b.distancia_km is null or b.distancia_km <= p_raio_km
  order by b.distancia_km nulls last, b.aproximado, (b.tipo in ('capela', 'comunidade')), b.nome
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) from public, anon, authenticated;
grant execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) to anon, authenticated;

create or replace function public.cidades_com_paroquias(
  p_termo text default '',
  p_lat double precision default null,
  p_lng double precision default null,
  p_limite integer default 8
)
returns table (cidade text, uf char(2), total integer, distancia_km double precision)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with termo as (select trim(public.sem_acento(coalesce(p_termo, ''))) as t),
  pontos as (
    select p.cidade, p.uf, coalesce(p.lat, m.lat) as lat, coalesce(p.lng, m.lng) as lng
    from public.paroquias p
    left join public.paroquias m on m.id = p.matriz_id and p.lat is null
    where p.ativa
  ),
  vizinhas as (
    select distinct o.uf, o.cidade
    from pontos o
    where p_lat is not null
      and o.lat between p_lat - 1.5 and p_lat + 1.5 and o.lng between p_lng - 1.5 and p_lng + 1.5
  ),
  cidades as (
    select o.cidade, o.uf, count(*)::int as total, avg(o.lat) as lat, avg(o.lng) as lng
    from pontos o, termo
    where (termo.t = '' or position(termo.t in public.sem_acento(o.cidade)) > 0)
      and (termo.t <> '' or p_lat is null or (o.uf, o.cidade) in (select v.uf, v.cidade from vizinhas v))
    group by o.cidade, o.uf
  )
  select c.cidade, c.uf, c.total,
    case when p_lat is null or c.lat is null then null
      else 6371 * 2 * asin(sqrt(power(sin(radians(c.lat - p_lat) / 2), 2)
        + cos(radians(p_lat)) * cos(radians(c.lat)) * power(sin(radians(c.lng - p_lng) / 2), 2)))
    end as distancia_km
  from cidades c, termo
  order by
    case when termo.t <> '' and public.sem_acento(c.cidade) like termo.t || '%' then 0 else 1 end,
    case when termo.t = '' and p_lat is not null then 6371 * 2 * asin(sqrt(power(sin(radians(c.lat - p_lat) / 2), 2)
        + cos(radians(p_lat)) * cos(radians(c.lat)) * power(sin(radians(c.lng - p_lng) / 2), 2))) end nulls last,
    c.total desc, c.cidade
  limit least(greatest(p_limite, 1), 30);
$fn$;

revoke execute on function public.cidades_com_paroquias(text, double precision, double precision, integer) from public, anon, authenticated;
grant execute on function public.cidades_com_paroquias(text, double precision, double precision, integer) to anon, authenticated;

drop function if exists public.horarios_do_periodo(double precision, double precision, timestamp, integer, text, double precision, text, text, timestamp);

create function public.horarios_do_periodo(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer,
  p_tipo text,
  p_raio_km double precision,
  p_cidade text,
  p_uf text,
  p_ate timestamp
)
returns table (
  paroquia_id uuid, nome text, bairro text, cidade text, distancia_km double precision,
  quando timestamp, ate time, observacao text, aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select p.id, p.nome, p.bairro, p.cidade, e.aproximado,
      case when p_lat is null or e.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(e.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(e.lat)) * power(sin(radians(e.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.paroquias p
    left join public.paroquias m on m.id = p.matriz_id and p.lat is null
    cross join lateral (select coalesce(p.lat, m.lat) as lat, coalesce(p.lng, m.lng) as lng, (p.lat is null and m.lat is not null) as aproximado) e
    where p.ativa
      and (coalesce(p_cidade, '') <> '' or p_lat is not null)
      and (coalesce(p_cidade, '') = '' or ((coalesce(p_uf, '') = '' or p.uf = upper(p_uf)) and public.sem_acento(p.cidade) = public.sem_acento(p_cidade)))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (e.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and e.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
  ),
  perto as (
    select * from base b
    where coalesce(p_cidade, '') <> '' or (b.distancia_km is not null and b.distancia_km <= least(greatest(p_raio_km, 0.5), 100))
  ),
  dias as (
    select d::date as dia from generate_series(p_inicio::date, (p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168)))::date, interval '1 day') d
  ),
  candidatos as (
    select h.*, d.dia
    from dias d
    join public.horarios h on h.paroquia_id in (select id from perto) and h.tipo = p_tipo
      and (h.data = d.dia or (h.data is null and h.dia_semana = extract(dow from d.dia)
        and (h.semanas is null
          or ((extract(day from d.dia)::int - 1) / 7 + 1)::smallint = any (h.semanas)
          or (6::smallint = any (h.semanas) and extract(month from d.dia + 7) <> extract(month from d.dia)))))
  ),
  valendo as (
    select c.* from candidatos c
    where c.data is not null
      or not exists (select 1 from public.horarios e where e.paroquia_id = c.paroquia_id and e.tipo = c.tipo and e.data = c.dia)
  )
  select v.paroquia_id, p.nome, p.bairro, p.cidade, p.distancia_km, (v.dia + v.hora)::timestamp, v.hora_fim, v.observacao, p.aproximado
  from valendo v join perto p on p.id = v.paroquia_id
  where not v.cancelado
    and (v.dia + coalesce(v.hora_fim, v.hora)) >= p_inicio
    and (v.dia + v.hora) <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
    and (p_ate is null or (v.dia + v.hora) < p_ate);
$fn$;

revoke execute on function public.horarios_do_periodo(double precision, double precision, timestamp, integer, text, double precision, text, text, timestamp) from public, anon, authenticated;
grant execute on function public.horarios_do_periodo(double precision, double precision, timestamp, integer, text, double precision, text, text, timestamp) to anon, authenticated;

drop function if exists public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp);

create function public.agenda_de_horarios(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_tipo text default 'missa',
  p_raio_km double precision default 10,
  p_limite integer default 40,
  p_cidade text default '',
  p_uf text default '',
  p_pular integer default 0,
  p_ate timestamp default null
)
returns table (
  paroquia_id uuid, nome text, bairro text, cidade text, distancia_km double precision,
  quando timestamp, ate time, observacao text, total integer, aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  select h.paroquia_id, h.nome, h.bairro, h.cidade, h.distancia_km, h.quando, h.ate, h.observacao, (count(*) over ())::int, h.aproximado
  from public.horarios_do_periodo(p_lat, p_lng, p_inicio, p_horas, p_tipo, p_raio_km, p_cidade, p_uf, p_ate) h
  order by h.quando, h.distancia_km nulls last, h.aproximado, h.nome, h.paroquia_id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) from public, anon, authenticated;
grant execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) to anon, authenticated;

drop function if exists public.igrejas_com_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp);

create function public.igrejas_com_horarios(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_tipo text default 'missa',
  p_raio_km double precision default 10,
  p_limite integer default 20,
  p_cidade text default '',
  p_uf text default '',
  p_pular integer default 0,
  p_ate timestamp default null
)
returns table (
  paroquia_id uuid, nome text, bairro text, cidade text, distancia_km double precision,
  horarios jsonb, total integer, aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  select h.paroquia_id, min(h.nome), min(h.bairro), min(h.cidade), min(h.distancia_km),
    jsonb_agg(jsonb_build_object('quando', h.quando, 'ate', h.ate, 'observacao', h.observacao) order by h.quando),
    (count(*) over ())::int, bool_or(h.aproximado)
  from public.horarios_do_periodo(p_lat, p_lng, p_inicio, p_horas, p_tipo, p_raio_km, p_cidade, p_uf, p_ate) h
  group by h.paroquia_id
  order by min(h.distancia_km) nulls last, bool_or(h.aproximado), min(h.quando), min(h.nome), h.paroquia_id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.igrejas_com_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) from public, anon, authenticated;
grant execute on function public.igrejas_com_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) to anon, authenticated;

drop function if exists public.agenda_de_eventos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer);

create function public.agenda_de_eventos(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_raio_km double precision default 10,
  p_limite integer default 30,
  p_cidade text default '',
  p_uf text default '',
  p_pular integer default 0
)
returns table (
  publicacao_id uuid, paroquia_id uuid, titulo text, paroquia text, bairro text, cidade text,
  distancia_km double precision, quando timestamp, local text, total integer, aproximado boolean
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select e.id, e.paroquia_id, e.titulo, e.local, (e.evento_em at time zone 'America/Sao_Paulo') as quando,
      p.nome, p.bairro, p.cidade, o.aproximado,
      case when p_lat is null or o.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(o.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(o.lat)) * power(sin(radians(o.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.publicacoes_paroquia e
    join public.paroquias p on p.id = e.paroquia_id and p.ativa
    left join public.paroquias m on m.id = p.matriz_id and p.lat is null
    cross join lateral (select coalesce(p.lat, m.lat) as lat, coalesce(p.lng, m.lng) as lng, (p.lat is null and m.lat is not null) as aproximado) o
    where e.tipo = 'evento'
      and (e.evento_em at time zone 'America/Sao_Paulo') >= p_inicio
      and (e.evento_em at time zone 'America/Sao_Paulo') <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
      and (coalesce(p_cidade, '') <> '' or p_lat is not null)
      and (coalesce(p_cidade, '') = '' or ((coalesce(p_uf, '') = '' or p.uf = upper(p_uf)) and public.sem_acento(p.cidade) = public.sem_acento(p_cidade)))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (o.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and o.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
  )
  select b.id, b.paroquia_id, b.titulo, b.nome, b.bairro, b.cidade, b.distancia_km, b.quando, b.local, (count(*) over ())::int, b.aproximado
  from base b
  where coalesce(p_cidade, '') <> '' or (b.distancia_km is not null and b.distancia_km <= least(greatest(p_raio_km, 0.5), 100))
  order by b.quando, b.distancia_km nulls last, b.titulo, b.id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.agenda_de_eventos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer) from public, anon, authenticated;
grant execute on function public.agenda_de_eventos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer) to anon, authenticated;
