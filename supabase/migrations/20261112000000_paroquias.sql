create table if not exists public.administradores (
  usuario_id uuid primary key references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now()
);

alter table public.administradores enable row level security;
revoke all on public.administradores from public, anon, authenticated;

create or replace function public.e_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (select 1 from public.administradores where usuario_id = auth.uid());
$fn$;

revoke execute on function public.e_admin() from public;
grant execute on function public.e_admin() to anon, authenticated;

create or replace function public.sem_acento(t text)
returns text
language sql
immutable
set search_path = ''
as $fn$
  select translate(lower(coalesce(t, '')), 'áàâãäéèêëíìîïóòôõöúùûüçñ', 'aaaaaeeeeiiiiooooouuuucn');
$fn$;

revoke execute on function public.sem_acento(text) from public;
grant execute on function public.sem_acento(text) to anon, authenticated;

create table if not exists public.paroquias (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) between 3 and 160),
  tipo text not null default 'paroquia' check (tipo in ('paroquia', 'capela', 'comunidade', 'santuario', 'catedral', 'basilica', 'mosteiro')),
  padroeiro text not null default '' check (char_length(padroeiro) <= 160),
  diocese text not null default '' check (char_length(diocese) <= 160),
  endereco text not null default '' check (char_length(endereco) <= 240),
  bairro text not null default '' check (char_length(bairro) <= 120),
  cidade text not null check (char_length(cidade) between 2 and 120),
  uf char(2) not null check (uf ~ '^[A-Z]{2}$'),
  cep text not null default '' check (cep ~ '^(\d{8})?$'),
  lat double precision check (lat between -35 and 6),
  lng double precision check (lng between -75 and -28),
  telefone text not null default '' check (telefone ~ '^\d{0,13}$'),
  whatsapp text not null default '' check (whatsapp ~ '^\d{0,13}$'),
  instagram text not null default '' check (instagram ~ '^[A-Za-z0-9._]{0,30}$'),
  site text not null default '' check (char_length(site) <= 200),
  email text not null default '' check (char_length(email) <= 160),
  ativa boolean not null default true,
  verificada boolean not null default false,
  confirmado_em timestamptz,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  busca text generated always as (public.sem_acento(nome || ' ' || padroeiro || ' ' || bairro || ' ' || cidade)) stored
);

create index if not exists paroquias_local on public.paroquias (lat, lng) where ativa;
create index if not exists paroquias_cidade on public.paroquias (uf, cidade) where ativa;

create table if not exists public.paroquia_gestores (
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  primary key (paroquia_id, usuario_id)
);

alter table public.paroquia_gestores enable row level security;
revoke all on public.paroquia_gestores from public, anon, authenticated;
grant select on public.paroquia_gestores to authenticated;

drop policy if exists "gestor vê a sua" on public.paroquia_gestores;
create policy "gestor vê a sua" on public.paroquia_gestores for select to authenticated
  using (usuario_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.pode_editar(p_paroquia uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.e_admin()
    or exists (select 1 from public.paroquia_gestores g where g.paroquia_id = p_paroquia and g.usuario_id = auth.uid());
$fn$;

revoke execute on function public.pode_editar(uuid) from public, anon;
grant execute on function public.pode_editar(uuid) to authenticated;

alter table public.paroquias enable row level security;
revoke all on public.paroquias from public, anon, authenticated;
grant select on public.paroquias to anon, authenticated;
grant insert, update on public.paroquias to authenticated;

drop policy if exists "todos veem as ativas" on public.paroquias;
create policy "todos veem as ativas" on public.paroquias for select to anon, authenticated
  using (ativa or (select public.e_admin()));

drop policy if exists "admin cadastra" on public.paroquias;
create policy "admin cadastra" on public.paroquias for insert to authenticated
  with check ((select public.e_admin()));

drop policy if exists "admin ou gestor edita" on public.paroquias;
create policy "admin ou gestor edita" on public.paroquias for update to authenticated
  using (public.pode_editar(id))
  with check (public.pode_editar(id));

create or replace function public.paroquia_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if not public.e_admin() then
    new.verificada := old.verificada;
    new.ativa := old.ativa;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.paroquia_protege() from public, anon, authenticated;

drop trigger if exists trg_paroquia_protege on public.paroquias;
create trigger trg_paroquia_protege before update on public.paroquias
  for each row execute function public.paroquia_protege();

create table if not exists public.horarios (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  tipo text not null check (tipo in ('missa', 'confissao', 'adoracao')),
  dia_semana smallint check (dia_semana between 0 and 6),
  semanas smallint[] check (semanas <@ array[1, 2, 3, 4, 5]::smallint[]),
  data date,
  hora time not null,
  hora_fim time,
  cancelado boolean not null default false,
  observacao text not null default '' check (char_length(observacao) <= 120),
  check ((dia_semana is null) <> (data is null)),
  check (hora_fim is null or hora_fim > hora)
);

create index if not exists horarios_paroquia on public.horarios (paroquia_id);
create index if not exists horarios_dia on public.horarios (dia_semana, hora) where data is null;
create index if not exists horarios_data on public.horarios (data) where data is not null;

alter table public.horarios enable row level security;
revoke all on public.horarios from public, anon, authenticated;
grant select on public.horarios to anon, authenticated;
grant insert, update, delete on public.horarios to authenticated;

drop policy if exists "todos veem" on public.horarios;
create policy "todos veem" on public.horarios for select to anon, authenticated
  using (exists (select 1 from public.paroquias p where p.id = paroquia_id and (p.ativa or (select public.e_admin()))));

drop policy if exists "admin ou gestor cadastra" on public.horarios;
create policy "admin ou gestor cadastra" on public.horarios for insert to authenticated
  with check (public.pode_editar(paroquia_id));

drop policy if exists "admin ou gestor edita" on public.horarios;
create policy "admin ou gestor edita" on public.horarios for update to authenticated
  using (public.pode_editar(paroquia_id))
  with check (public.pode_editar(paroquia_id));

drop policy if exists "admin ou gestor apaga" on public.horarios;
create policy "admin ou gestor apaga" on public.horarios for delete to authenticated
  using (public.pode_editar(paroquia_id));

create table if not exists public.avisos_paroquia (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  texto text not null check (char_length(texto) between 1 and 600),
  ate date not null,
  criado_em timestamptz not null default now()
);

alter table public.avisos_paroquia enable row level security;
revoke all on public.avisos_paroquia from public, anon, authenticated;
grant select on public.avisos_paroquia to anon, authenticated;
grant insert, update, delete on public.avisos_paroquia to authenticated;

drop policy if exists "todos veem" on public.avisos_paroquia;
create policy "todos veem" on public.avisos_paroquia for select to anon, authenticated
  using (exists (select 1 from public.paroquias p where p.id = paroquia_id and p.ativa and p.verificada));

drop policy if exists "gestor cadastra" on public.avisos_paroquia;
create policy "gestor cadastra" on public.avisos_paroquia for insert to authenticated
  with check (public.pode_editar(paroquia_id));

drop policy if exists "gestor edita" on public.avisos_paroquia;
create policy "gestor edita" on public.avisos_paroquia for update to authenticated
  using (public.pode_editar(paroquia_id)) with check (public.pode_editar(paroquia_id));

drop policy if exists "gestor apaga" on public.avisos_paroquia;
create policy "gestor apaga" on public.avisos_paroquia for delete to authenticated
  using (public.pode_editar(paroquia_id));

create table if not exists public.sugestoes_paroquia (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid references public.paroquias (id) on delete cascade,
  tipo text not null check (tipo in ('confirmar', 'horario_errado', 'novo_horario', 'nova_paroquia', 'outro')),
  texto text not null default '' check (char_length(texto) <= 1000),
  dados jsonb not null default '{}'::jsonb check (pg_column_size(dados) <= 4000),
  autor uuid default auth.uid() references auth.users (id) on delete set null,
  situacao text not null default 'pendente' check (situacao in ('pendente', 'aceita', 'recusada')),
  criado_em timestamptz not null default now(),
  revisado_em timestamptz,
  check (paroquia_id is not null or tipo = 'nova_paroquia')
);

create index if not exists sugestoes_pendentes on public.sugestoes_paroquia (criado_em) where situacao = 'pendente';

alter table public.sugestoes_paroquia enable row level security;
revoke all on public.sugestoes_paroquia from public, anon, authenticated;
grant select, insert on public.sugestoes_paroquia to authenticated;
grant update (situacao, revisado_em) on public.sugestoes_paroquia to authenticated;

drop policy if exists "fiel sugere" on public.sugestoes_paroquia;
create policy "fiel sugere" on public.sugestoes_paroquia for insert to authenticated
  with check (autor = (select auth.uid()) and situacao = 'pendente' and revisado_em is null);

drop policy if exists "fiel vê as suas, admin e gestor veem as da paróquia" on public.sugestoes_paroquia;
create policy "fiel vê as suas, admin e gestor veem as da paróquia" on public.sugestoes_paroquia for select to authenticated
  using (autor = (select auth.uid()) or (select public.e_admin()) or (paroquia_id is not null and public.pode_editar(paroquia_id)));

drop policy if exists "admin ou gestor revisa" on public.sugestoes_paroquia;
create policy "admin ou gestor revisa" on public.sugestoes_paroquia for update to authenticated
  using ((select public.e_admin()) or (paroquia_id is not null and public.pode_editar(paroquia_id)))
  with check ((select public.e_admin()) or (paroquia_id is not null and public.pode_editar(paroquia_id)));

create or replace function public.sugestao_limite()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if (select count(*) from public.sugestoes_paroquia s where s.autor = new.autor and s.criado_em > now() - interval '1 day') >= 20 then
    raise exception 'limite de sugestões por dia';
  end if;
  return new;
end
$fn$;

revoke execute on function public.sugestao_limite() from public, anon, authenticated;

drop trigger if exists trg_sugestao_limite on public.sugestoes_paroquia;
create trigger trg_sugestao_limite before insert on public.sugestoes_paroquia
  for each row execute function public.sugestao_limite();

create or replace function public.confirmar_paroquia(p_paroquia uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if not public.pode_editar(p_paroquia) then
    raise exception 'sem permissão';
  end if;
  update public.paroquias set confirmado_em = now() where id = p_paroquia;
end
$fn$;

revoke execute on function public.confirmar_paroquia(uuid) from public, anon;
grant execute on function public.confirmar_paroquia(uuid) to authenticated;

create or replace function public.adicionar_gestor(p_paroquia uuid, p_email text)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_usuario uuid;
begin
  if not public.e_admin() then
    raise exception 'sem permissão';
  end if;
  select id into v_usuario from auth.users where lower(email) = lower(trim(p_email));
  if v_usuario is null then
    raise exception 'nenhuma conta com este e-mail';
  end if;
  insert into public.paroquia_gestores (paroquia_id, usuario_id) values (p_paroquia, v_usuario) on conflict do nothing;
  update public.paroquias set verificada = true where id = p_paroquia;
end
$fn$;

revoke execute on function public.adicionar_gestor(uuid, text) from public, anon;
grant execute on function public.adicionar_gestor(uuid, text) to authenticated;

drop function if exists public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer);

create or replace function public.buscar_paroquias(
  p_termo text default '',
  p_lat double precision default null,
  p_lng double precision default null,
  p_raio_km double precision default 15,
  p_limite integer default 30,
  p_pular integer default 0
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
      and (p_lat is null or (p.lat between p_lat - p_raio_km / 111.0 and p_lat + p_raio_km / 111.0
        and p.lng between p_lng - p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2)) and p_lng + p_raio_km / (111.0 * greatest(cos(radians(p_lat)), 0.2))))
      and (coalesce(p_termo, '') = '' or not exists (
        select 1 from unnest(string_to_array(public.sem_acento(p_termo), ' ')) w
        where w <> '' and position(w in p.busca) = 0))
  )
  select b.id, b.nome, b.tipo, b.padroeiro, b.bairro, b.cidade, b.uf, b.lat, b.lng, b.verificada, b.confirmado_em, b.distancia_km
  from base b
  where b.distancia_km is null or b.distancia_km <= p_raio_km
  order by b.distancia_km nulls last, b.nome
  limit least(greatest(p_limite, 1), 100) offset greatest(p_pular, 0);
$fn$;

revoke execute on function public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer) from public;
grant execute on function public.buscar_paroquias(text, double precision, double precision, double precision, integer, integer) to anon, authenticated;

create or replace function public.agenda_perto(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_tipo text default 'missa',
  p_raio_km double precision default 15,
  p_limite integer default 40
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
  with perto as (
    select * from public.buscar_paroquias('', p_lat, p_lng, p_raio_km, 100, 0)
  ),
  dias as (
    select d::date as dia from generate_series(p_inicio::date, (p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168)))::date, interval '1 day') d
  ),
  candidatos as (
    select h.*, d.dia
    from dias d
    join public.horarios h on h.paroquia_id in (select id from perto) and h.tipo = p_tipo
      and (h.data = d.dia or (h.data is null and h.dia_semana = extract(dow from d.dia)
        and (h.semanas is null or ((extract(day from d.dia)::int - 1) / 7 + 1)::smallint = any (h.semanas))))
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
  order by 6, 5
  limit least(greatest(p_limite, 1), 100);
$fn$;

revoke execute on function public.agenda_perto(double precision, double precision, timestamp, integer, text, double precision, integer) from public;
grant execute on function public.agenda_perto(double precision, double precision, timestamp, integer, text, double precision, integer) to anon, authenticated;
