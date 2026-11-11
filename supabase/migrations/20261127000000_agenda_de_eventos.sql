create or replace function public.agenda_de_eventos(
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
  distancia_km double precision, quando timestamp, local text, total integer
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select e.id, e.paroquia_id, e.titulo, e.local, (e.evento_em at time zone 'America/Sao_Paulo') as quando,
      p.nome, p.bairro, p.cidade,
      case when p_lat is null or p.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(p.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(p.lat)) * power(sin(radians(p.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.publicacoes_paroquia e
    join public.paroquias p on p.id = e.paroquia_id and p.ativa
    where e.tipo = 'evento'
      and (e.evento_em at time zone 'America/Sao_Paulo') >= p_inicio
      and (e.evento_em at time zone 'America/Sao_Paulo') <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
      and (coalesce(p_cidade, '') <> '' or p_lat is not null)
      and (coalesce(p_cidade, '') = '' or ((coalesce(p_uf, '') = '' or p.uf = upper(p_uf)) and public.sem_acento(p.cidade) = public.sem_acento(p_cidade)))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (p.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and p.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
  )
  select b.id, b.paroquia_id, b.titulo, b.nome, b.bairro, b.cidade, b.distancia_km, b.quando, b.local, (count(*) over ())::int
  from base b
  where coalesce(p_cidade, '') <> '' or (b.distancia_km is not null and b.distancia_km <= least(greatest(p_raio_km, 0.5), 100))
  order by b.quando, b.distancia_km nulls last, b.titulo, b.id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.agenda_de_eventos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer) from public, anon, authenticated;
grant execute on function public.agenda_de_eventos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer) to anon, authenticated;
