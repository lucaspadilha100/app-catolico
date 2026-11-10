drop function if exists public.cidades_com_paroquias(text, integer);

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
  cidades as (
    select p.cidade, p.uf, count(*)::int as total, avg(p.lat) as lat, avg(p.lng) as lng
    from public.paroquias p, termo
    where p.ativa
      and (termo.t = '' or position(termo.t in public.sem_acento(p.cidade)) > 0)
      and (termo.t <> '' or p_lat is null or (p.lat between p_lat - 1.5 and p_lat + 1.5 and p.lng between p_lng - 1.5 and p_lng + 1.5))
    group by p.cidade, p.uf
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

create or replace function public.horarios_do_periodo(
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
  quando timestamp, ate time, observacao text
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select p.id, p.nome, p.bairro, p.cidade,
      case when p_lat is null or p.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(p.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(p.lat)) * power(sin(radians(p.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.paroquias p
    where p.ativa
      and (coalesce(p_cidade, '') <> '' or p_lat is not null)
      and (coalesce(p_cidade, '') = '' or ((coalesce(p_uf, '') = '' or p.uf = upper(p_uf)) and public.sem_acento(p.cidade) = public.sem_acento(p_cidade)))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (p.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and p.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
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
  select v.paroquia_id, p.nome, p.bairro, p.cidade, p.distancia_km, (v.dia + v.hora)::timestamp, v.hora_fim, v.observacao
  from valendo v join perto p on p.id = v.paroquia_id
  where not v.cancelado
    and (v.dia + coalesce(v.hora_fim, v.hora)) >= p_inicio
    and (v.dia + v.hora) <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
    and (p_ate is null or (v.dia + v.hora) < p_ate);
$fn$;

revoke execute on function public.horarios_do_periodo(double precision, double precision, timestamp, integer, text, double precision, text, text, timestamp) from public, anon, authenticated;
grant execute on function public.horarios_do_periodo(double precision, double precision, timestamp, integer, text, double precision, text, text, timestamp) to anon, authenticated;

drop function if exists public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text);

create or replace function public.agenda_de_horarios(
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
  quando timestamp, ate time, observacao text, total integer
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  select h.paroquia_id, h.nome, h.bairro, h.cidade, h.distancia_km, h.quando, h.ate, h.observacao, (count(*) over ())::int
  from public.horarios_do_periodo(p_lat, p_lng, p_inicio, p_horas, p_tipo, p_raio_km, p_cidade, p_uf, p_ate) h
  order by h.quando, h.distancia_km nulls last, h.nome, h.paroquia_id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) from public, anon, authenticated;
grant execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) to anon, authenticated;

create or replace function public.igrejas_com_horarios(
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
  horarios jsonb, total integer
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  select h.paroquia_id, min(h.nome), min(h.bairro), min(h.cidade), min(h.distancia_km),
    jsonb_agg(jsonb_build_object('quando', h.quando, 'ate', h.ate, 'observacao', h.observacao) order by h.quando),
    (count(*) over ())::int
  from public.horarios_do_periodo(p_lat, p_lng, p_inicio, p_horas, p_tipo, p_raio_km, p_cidade, p_uf, p_ate) h
  group by h.paroquia_id
  order by min(h.distancia_km) nulls last, min(h.quando), min(h.nome), h.paroquia_id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.igrejas_com_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) from public, anon, authenticated;
grant execute on function public.igrejas_com_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text, integer, timestamp) to anon, authenticated;
