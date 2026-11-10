create table if not exists public.tercos (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) between 3 and 120),
  paroquia_id uuid references public.paroquias (id) on delete set null,
  comunidade text not null default '' check (char_length(comunidade) <= 160),
  dia_semana smallint not null check (dia_semana between 0 and 6),
  semanas smallint[] check (semanas <@ array[1, 2, 3, 4, 5, 6]::smallint[]),
  hora time not null,
  endereco text not null default '' check (char_length(endereco) <= 240),
  bairro text not null default '' check (char_length(bairro) <= 120),
  cidade text not null check (char_length(cidade) between 2 and 120),
  uf char(2) not null check (uf ~ '^[A-Z]{2}$'),
  lat double precision check (lat between -35 and 6),
  lng double precision check (lng between -75 and -28),
  instagram text not null default '' check (instagram ~ '^[A-Za-z0-9._]{0,30}$'),
  whatsapp text not null default '' check (whatsapp ~ '^\d{0,13}$'),
  responsavel_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  situacao text not null default 'pendente' check (situacao in ('pendente', 'aprovado', 'recusado')),
  ativo boolean not null default true,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  busca text generated always as (public.sem_acento(nome || ' ' || comunidade || ' ' || bairro || ' ' || cidade)) stored
);

create index if not exists tercos_local on public.tercos (lat, lng) where situacao = 'aprovado' and ativo;
create index if not exists tercos_cidade on public.tercos (uf, cidade) where situacao = 'aprovado' and ativo;
create index if not exists tercos_responsavel on public.tercos (responsavel_id);
create index if not exists tercos_pendentes on public.tercos (criado_em) where situacao = 'pendente';

alter table public.tercos enable row level security;
revoke all on public.tercos from public, anon, authenticated;
grant select on public.tercos to anon, authenticated;
grant insert, update, delete on public.tercos to authenticated;

drop policy if exists "todos veem os aprovados" on public.tercos;
create policy "todos veem os aprovados" on public.tercos for select to anon, authenticated
  using ((situacao = 'aprovado' and ativo) or responsavel_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "quem tem conta cadastra" on public.tercos;
create policy "quem tem conta cadastra" on public.tercos for insert to authenticated
  with check (responsavel_id = (select auth.uid()) and situacao = 'pendente');

drop policy if exists "responsavel ou admin edita" on public.tercos;
create policy "responsavel ou admin edita" on public.tercos for update to authenticated
  using (responsavel_id = (select auth.uid()) or (select public.e_admin()))
  with check (responsavel_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "responsavel ou admin apaga" on public.tercos;
create policy "responsavel ou admin apaga" on public.tercos for delete to authenticated
  using (responsavel_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.terco_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    if (select count(*) from public.tercos t where t.responsavel_id = new.responsavel_id) >= 5 and not public.e_admin() then
      raise exception 'limite de terços cadastrados';
    end if;
    return new;
  end if;
  if not public.e_admin() then
    new.situacao := old.situacao;
    new.responsavel_id := old.responsavel_id;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.terco_protege() from public, anon, authenticated;

drop trigger if exists trg_terco_protege on public.tercos;
create trigger trg_terco_protege before insert or update on public.tercos
  for each row execute function public.terco_protege();

create table if not exists public.terco_encontros (
  id uuid primary key default gen_random_uuid(),
  terco_id uuid not null references public.tercos (id) on delete cascade,
  data date not null,
  misterios text not null check (misterios in ('gozosos', 'luminosos', 'dolorosos', 'gloriosos')),
  dezenas jsonb not null default '[]'::jsonb check (jsonb_typeof(dezenas) = 'array' and jsonb_array_length(dezenas) <= 5 and pg_column_size(dezenas) <= 8000),
  intencoes text not null default '' check (char_length(intencoes) <= 2000),
  avisos text not null default '' check (char_length(avisos) <= 2000),
  passo integer not null default 0 check (passo between 0 and 200),
  conta integer not null default 0 check (conta between 0 and 20),
  ao_vivo boolean not null default false,
  atualizado_em timestamptz not null default now(),
  unique (terco_id, data)
);

alter table public.terco_encontros enable row level security;
revoke all on public.terco_encontros from public, anon, authenticated;
grant select on public.terco_encontros to anon, authenticated;
grant insert, update, delete on public.terco_encontros to authenticated;

create or replace function public.conduz_o_terco(p_terco uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.e_admin() or exists (select 1 from public.tercos t where t.id = p_terco and t.responsavel_id = auth.uid());
$fn$;

revoke execute on function public.conduz_o_terco(uuid) from public, anon;
grant execute on function public.conduz_o_terco(uuid) to authenticated;

drop policy if exists "quem ve o terco ve o encontro" on public.terco_encontros;
create policy "quem ve o terco ve o encontro" on public.terco_encontros for select to anon, authenticated
  using (exists (select 1 from public.tercos t where t.id = terco_id));

drop policy if exists "responsavel cadastra encontro" on public.terco_encontros;
create policy "responsavel cadastra encontro" on public.terco_encontros for insert to authenticated
  with check ((select public.conduz_o_terco(terco_id)));

drop policy if exists "responsavel edita encontro" on public.terco_encontros;
create policy "responsavel edita encontro" on public.terco_encontros for update to authenticated
  using ((select public.conduz_o_terco(terco_id)))
  with check ((select public.conduz_o_terco(terco_id)));

drop policy if exists "responsavel apaga encontro" on public.terco_encontros;
create policy "responsavel apaga encontro" on public.terco_encontros for delete to authenticated
  using ((select public.conduz_o_terco(terco_id)));

create or replace function public.encontro_carimba()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.encontro_carimba() from public, anon, authenticated;

drop trigger if exists trg_encontro_carimba on public.terco_encontros;
create trigger trg_encontro_carimba before update on public.terco_encontros
  for each row execute function public.encontro_carimba();

create or replace function public.agenda_de_tercos(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_raio_km double precision default 10,
  p_limite integer default 30,
  p_cidade text default '',
  p_uf text default '',
  p_pular integer default 0,
  p_ate timestamp default null
)
returns table (
  terco_id uuid, nome text, bairro text, cidade text, distancia_km double precision,
  quando timestamp, observacao text, total integer
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with base as (
    select t.*, coalesce(p.nome, t.comunidade) as de_onde,
      case when p_lat is null or t.lat is null then null
        else 6371 * 2 * asin(sqrt(power(sin(radians(t.lat - p_lat) / 2), 2)
          + cos(radians(p_lat)) * cos(radians(t.lat)) * power(sin(radians(t.lng - p_lng) / 2), 2)))
      end as distancia_km
    from public.tercos t
    left join public.paroquias p on p.id = t.paroquia_id
    where t.situacao = 'aprovado' and t.ativo
      and (coalesce(p_cidade, '') <> '' or p_lat is not null)
      and (coalesce(p_cidade, '') = '' or ((coalesce(p_uf, '') = '' or t.uf = upper(p_uf)) and public.sem_acento(t.cidade) = public.sem_acento(p_cidade)))
      and (p_lat is null or coalesce(p_cidade, '') <> '' or (t.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and t.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
  ),
  perto as (
    select * from base b
    where coalesce(p_cidade, '') <> '' or (b.distancia_km is not null and b.distancia_km <= least(greatest(p_raio_km, 0.5), 100))
  ),
  dias as (
    select d::date as dia from generate_series(p_inicio::date, (p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168)))::date, interval '1 day') d
  ),
  ocorrencias as (
    select p.id, p.nome, p.bairro, p.cidade, p.distancia_km, (d.dia + p.hora)::timestamp as quando, p.de_onde
    from perto p join dias d on p.dia_semana = extract(dow from d.dia)
      and (p.semanas is null
        or ((extract(day from d.dia)::int - 1) / 7 + 1)::smallint = any (p.semanas)
        or (6::smallint = any (p.semanas) and extract(month from d.dia + 7) <> extract(month from d.dia)))
    where (d.dia + p.hora) >= p_inicio
      and (d.dia + p.hora) <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
      and (p_ate is null or (d.dia + p.hora) < p_ate)
  )
  select o.id, o.nome, o.bairro, o.cidade, o.distancia_km, o.quando, o.de_onde, (count(*) over ())::int
  from ocorrencias o
  order by o.quando, o.distancia_km nulls last, o.nome, o.id
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.agenda_de_tercos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer, timestamp) from public, anon, authenticated;
grant execute on function public.agenda_de_tercos(double precision, double precision, timestamp, integer, double precision, integer, text, text, integer, timestamp) to anon, authenticated;

do $pub$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
    and not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'terco_encontros') then
    alter publication supabase_realtime add table public.terco_encontros;
  end if;
end
$pub$;
