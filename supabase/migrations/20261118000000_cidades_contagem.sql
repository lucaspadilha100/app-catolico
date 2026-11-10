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
  vizinhas as (
    select distinct p.uf, p.cidade
    from public.paroquias p
    where p.ativa and p_lat is not null
      and p.lat between p_lat - 1.5 and p_lat + 1.5 and p.lng between p_lng - 1.5 and p_lng + 1.5
  ),
  cidades as (
    select p.cidade, p.uf, count(*)::int as total, avg(p.lat) as lat, avg(p.lng) as lng
    from public.paroquias p, termo
    where p.ativa
      and (termo.t = '' or position(termo.t in public.sem_acento(p.cidade)) > 0)
      and (termo.t <> '' or p_lat is null or (p.uf, p.cidade) in (select v.uf, v.cidade from vizinhas v))
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
