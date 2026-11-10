create or replace function public.procurar_paroquias(
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
  lat double precision, lng double precision, verificada boolean, confirmado_em timestamptz, distancia_km double precision
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select p.*,
      case when p_lat is null or p.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(p.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(p.lat)) * power(sin(radians(p.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.paroquias p
    where p.ativa
      and (coalesce(p_cidade, '') = '' or (public.sem_acento(p.cidade) = public.sem_acento(p_cidade) and (coalesce(p_uf, '') = '' or p.uf = upper(p_uf))))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (p.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and p.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
      and (coalesce(p_termo, '') = '' or not exists (
        select 1 from unnest(string_to_array(public.sem_acento(p_termo), ' ')) w
        where w <> '' and position(w in p.busca) = 0))
  )
  select b.id, b.nome, b.tipo, b.padroeiro, b.bairro, b.cidade, b.uf, b.lat, b.lng, b.verificada, b.confirmado_em, b.distancia_km
  from base b
  where coalesce(p_cidade, '') <> '' or b.distancia_km is null or b.distancia_km <= p_raio_km
  order by b.distancia_km nulls last, b.nome
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) from public, anon, authenticated;
grant execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) to anon, authenticated;

create or replace function public.agenda_de_horarios(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_tipo text default 'missa',
  p_raio_km double precision default 15,
  p_limite integer default 40,
  p_cidade text default '',
  p_uf text default ''
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
      and (coalesce(p_cidade, '') = '' or (public.sem_acento(p.cidade) = public.sem_acento(p_cidade) and (coalesce(p_uf, '') = '' or p.uf = upper(p_uf))))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (p.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and p.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
  ),
  perto as (
    select * from base b
    where coalesce(p_cidade, '') <> '' or (b.distancia_km is not null and b.distancia_km <= p_raio_km)
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
  order by 6, 5 nulls last, 2
  limit least(greatest(p_limite, 1), 300);
$fn$;

revoke execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text) from public, anon, authenticated;
grant execute on function public.agenda_de_horarios(double precision, double precision, timestamp, integer, text, double precision, integer, text, text) to anon, authenticated;

create or replace function public.cidades_com_paroquias(p_termo text default '', p_limite integer default 30)
returns table (cidade text, uf char(2), total integer, lat double precision, lng double precision)
language sql
stable
security invoker
set search_path = ''
as $fn$
  select p.cidade, p.uf, count(*)::int, avg(p.lat), avg(p.lng)
  from public.paroquias p
  where p.ativa
    and (coalesce(p_termo, '') = '' or position(public.sem_acento(p_termo) in public.sem_acento(p.cidade)) > 0)
  group by p.cidade, p.uf
  order by count(*) desc, p.cidade
  limit least(greatest(p_limite, 1), 100);
$fn$;

revoke execute on function public.cidades_com_paroquias(text, integer) from public, anon, authenticated;
grant execute on function public.cidades_com_paroquias(text, integer) to anon, authenticated;
