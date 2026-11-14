alter table public.paroquias add column if not exists matriz_id uuid references public.paroquias (id) on delete set null;

create index if not exists paroquias_matriz on public.paroquias (matriz_id) where matriz_id is not null;

alter table public.paroquias drop constraint if exists paroquias_tipo_check;
alter table public.paroquias add constraint paroquias_tipo_check
  check (tipo in ('paroquia', 'quase_paroquia', 'area_pastoral', 'area_missionaria', 'capela', 'comunidade', 'santuario', 'catedral', 'basilica', 'mosteiro'));

alter table public.paroquias drop constraint if exists paroquias_matriz_nao_ela_mesma;
alter table public.paroquias add constraint paroquias_matriz_nao_ela_mesma check (matriz_id is null or matriz_id <> id);

drop function if exists public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text);

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
  order by b.distancia_km nulls last, (b.tipo in ('capela', 'comunidade')), b.nome
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) from public, anon, authenticated;
grant execute on function public.procurar_paroquias(text, double precision, double precision, double precision, integer, integer, text, text) to anon, authenticated;
