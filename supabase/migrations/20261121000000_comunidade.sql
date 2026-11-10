create table if not exists public.grupos (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) between 3 and 80),
  tipo text not null default 'oracao' check (tipo in ('familia', 'oracao', 'pastoral', 'outro')),
  dono_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  codigo text not null unique default substr(md5(random()::text || clock_timestamp()::text), 1, 8),
  criado_em timestamptz not null default now()
);

create table if not exists public.grupo_membros (
  grupo_id uuid not null references public.grupos (id) on delete cascade,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 2 and 30),
  papel text not null default 'membro' check (papel in ('dono', 'membro')),
  entrou_em timestamptz not null default now(),
  primary key (grupo_id, usuario_id)
);

create index if not exists grupo_membros_usuario on public.grupo_membros (usuario_id);

create or replace function public.meus_grupos()
returns setof uuid
language sql
stable
security definer
set search_path = ''
as $fn$
  select m.grupo_id from public.grupo_membros m where m.usuario_id = auth.uid();
$fn$;

revoke execute on function public.meus_grupos() from public, anon;
grant execute on function public.meus_grupos() to anon, authenticated;

create or replace function public.sou_dono(p_grupo uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (select 1 from public.grupos g where g.id = p_grupo and g.dono_id = auth.uid());
$fn$;

revoke execute on function public.sou_dono(uuid) from public, anon;
grant execute on function public.sou_dono(uuid) to authenticated;

alter table public.grupos enable row level security;
revoke all on public.grupos from public, anon, authenticated;
grant select, insert, update, delete on public.grupos to authenticated;

drop policy if exists "membro ve o grupo" on public.grupos;
create policy "membro ve o grupo" on public.grupos for select to authenticated
  using (dono_id = (select auth.uid()) or id in (select public.meus_grupos()));

drop policy if exists "quem tem conta cria grupo" on public.grupos;
create policy "quem tem conta cria grupo" on public.grupos for insert to authenticated
  with check (dono_id = (select auth.uid()));

drop policy if exists "dono edita o grupo" on public.grupos;
create policy "dono edita o grupo" on public.grupos for update to authenticated
  using (dono_id = (select auth.uid())) with check (dono_id = (select auth.uid()));

drop policy if exists "dono apaga o grupo" on public.grupos;
create policy "dono apaga o grupo" on public.grupos for delete to authenticated
  using (dono_id = (select auth.uid()));

create or replace function public.grupo_novo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if (select count(*) from public.grupos g where g.dono_id = new.dono_id) > 10 then
    raise exception 'limite de grupos';
  end if;
  insert into public.grupo_membros (grupo_id, usuario_id, nome, papel)
  values (new.id, new.dono_id, 'Eu', 'dono')
  on conflict do nothing;
  return new;
end
$fn$;

revoke execute on function public.grupo_novo() from public, anon, authenticated;

drop trigger if exists trg_grupo_novo on public.grupos;
create trigger trg_grupo_novo after insert on public.grupos
  for each row execute function public.grupo_novo();

create or replace function public.grupo_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  new.dono_id := old.dono_id;
  if new.codigo is distinct from old.codigo and new.codigo !~ '^[a-f0-9]{8}$' then
    new.codigo := old.codigo;
  end if;
  return new;
end
$fn$;

revoke execute on function public.grupo_protege() from public, anon, authenticated;

drop trigger if exists trg_grupo_protege on public.grupos;
create trigger trg_grupo_protege before update on public.grupos
  for each row execute function public.grupo_protege();

alter table public.grupo_membros enable row level security;
revoke all on public.grupo_membros from public, anon, authenticated;
grant select, update, delete on public.grupo_membros to authenticated;

drop policy if exists "membro ve os membros" on public.grupo_membros;
create policy "membro ve os membros" on public.grupo_membros for select to authenticated
  using (usuario_id = (select auth.uid()) or grupo_id in (select public.meus_grupos()));

drop policy if exists "membro muda o proprio nome" on public.grupo_membros;
create policy "membro muda o proprio nome" on public.grupo_membros for update to authenticated
  using (usuario_id = (select auth.uid())) with check (usuario_id = (select auth.uid()));

drop policy if exists "sai do grupo ou o dono tira" on public.grupo_membros;
create policy "sai do grupo ou o dono tira" on public.grupo_membros for delete to authenticated
  using (usuario_id = (select auth.uid()) or (select public.sou_dono(grupo_id)));

create or replace function public.membro_protege()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if tg_op = 'DELETE' then
    if old.papel = 'dono' and exists (select 1 from public.grupos g where g.id = old.grupo_id)
      and exists (select 1 from auth.users u where u.id = old.usuario_id) then
      raise exception 'o dono nao sai do grupo: apague o grupo';
    end if;
    return old;
  end if;
  new.papel := old.papel;
  new.grupo_id := old.grupo_id;
  new.usuario_id := old.usuario_id;
  return new;
end
$fn$;

revoke execute on function public.membro_protege() from public, anon, authenticated;

drop trigger if exists trg_membro_protege on public.grupo_membros;
create trigger trg_membro_protege before update or delete on public.grupo_membros
  for each row execute function public.membro_protege();

create or replace function public.entrar_no_grupo(p_codigo text, p_nome text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_grupo uuid;
begin
  if auth.uid() is null then
    raise exception 'entre na conta';
  end if;
  select g.id into v_grupo from public.grupos g where g.codigo = lower(btrim(p_codigo));
  if v_grupo is null then
    raise exception 'convite invalido';
  end if;
  if exists (select 1 from public.grupo_membros m where m.grupo_id = v_grupo and m.usuario_id = auth.uid()) then
    return v_grupo;
  end if;
  if (select count(*) from public.grupo_membros m where m.grupo_id = v_grupo) >= 200 then
    raise exception 'grupo cheio';
  end if;
  if (select count(*) from public.grupo_membros m where m.usuario_id = auth.uid()) >= 30 then
    raise exception 'limite de grupos';
  end if;
  insert into public.grupo_membros (grupo_id, usuario_id, nome) values (v_grupo, auth.uid(), btrim(p_nome));
  return v_grupo;
end
$fn$;

revoke execute on function public.entrar_no_grupo(text, text) from public, anon;
grant execute on function public.entrar_no_grupo(text, text) to authenticated;

create or replace function public.ver_convite(p_codigo text)
returns table (nome text, tipo text, membros integer)
language sql
stable
security definer
set search_path = ''
as $fn$
  select g.nome, g.tipo, (select count(*)::int from public.grupo_membros m where m.grupo_id = g.id)
  from public.grupos g where g.codigo = lower(btrim(p_codigo));
$fn$;

revoke execute on function public.ver_convite(text) from public, anon;
grant execute on function public.ver_convite(text) to authenticated;

create table if not exists public.grupo_terco (
  grupo_id uuid primary key references public.grupos (id) on delete cascade,
  misterios text not null check (misterios in ('gozosos', 'luminosos', 'dolorosos', 'gloriosos')),
  passo integer not null default 0 check (passo between 0 and 200),
  conta integer not null default 0 check (conta between 0 and 20),
  ao_vivo boolean not null default false,
  condutor_id uuid default auth.uid() references auth.users (id) on delete set null,
  atualizado_em timestamptz not null default now()
);

alter table public.grupo_terco enable row level security;
revoke all on public.grupo_terco from public, anon, authenticated;
grant select, insert, update on public.grupo_terco to authenticated;

drop policy if exists "membro ve o terco do grupo" on public.grupo_terco;
create policy "membro ve o terco do grupo" on public.grupo_terco for select to authenticated
  using (grupo_id in (select public.meus_grupos()));

drop policy if exists "membro comeca o terco do grupo" on public.grupo_terco;
create policy "membro comeca o terco do grupo" on public.grupo_terco for insert to authenticated
  with check (grupo_id in (select public.meus_grupos()));

drop policy if exists "membro conduz o terco do grupo" on public.grupo_terco;
create policy "membro conduz o terco do grupo" on public.grupo_terco for update to authenticated
  using (grupo_id in (select public.meus_grupos())) with check (grupo_id in (select public.meus_grupos()));

drop trigger if exists trg_grupo_terco_carimba on public.grupo_terco;
create trigger trg_grupo_terco_carimba before update on public.grupo_terco
  for each row execute function public.encontro_carimba();

create table if not exists public.intencoes (
  id uuid primary key default gen_random_uuid(),
  autor_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  tipo text not null check (tipo in ('saude', 'trabalho', 'familia', 'falecido', 'conversao', 'gratidao', 'estudos', 'gestacao', 'vocacao', 'paz')),
  nome text not null check (nome ~ '^[A-Za-zÀ-ÖØ-öø-ÿ]{2,20}$'),
  grupo_id uuid references public.grupos (id) on delete cascade,
  rezaram integer not null default 0,
  denuncias integer not null default 0,
  oculta boolean not null default false,
  criado_em timestamptz not null default now(),
  expira_em timestamptz not null default now() + interval '30 days'
);

create index if not exists intencoes_publicas on public.intencoes (criado_em desc, id) where grupo_id is null and not oculta;
create index if not exists intencoes_do_grupo on public.intencoes (grupo_id, criado_em desc) where grupo_id is not null;
create index if not exists intencoes_autor on public.intencoes (autor_id);

alter table public.intencoes enable row level security;
revoke all on public.intencoes from public, anon, authenticated;
grant select on public.intencoes to anon, authenticated;
grant insert, delete on public.intencoes to authenticated;
grant update on public.intencoes to authenticated;

drop policy if exists "todos veem as publicas" on public.intencoes;
create policy "todos veem as publicas" on public.intencoes for select to anon, authenticated
  using (
    (grupo_id is null and not oculta and expira_em > now())
    or autor_id = (select auth.uid())
    or grupo_id in (select public.meus_grupos())
    or (select public.e_admin())
  );

drop policy if exists "quem tem conta pede" on public.intencoes;
create policy "quem tem conta pede" on public.intencoes for insert to authenticated
  with check (autor_id = (select auth.uid()) and (grupo_id is null or grupo_id in (select public.meus_grupos())));

drop policy if exists "admin modera" on public.intencoes;
create policy "admin modera" on public.intencoes for update to authenticated
  using ((select public.e_admin())) with check ((select public.e_admin()));

drop policy if exists "autor ou admin apaga" on public.intencoes;
create policy "autor ou admin apaga" on public.intencoes for delete to authenticated
  using (autor_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.intencao_nova()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  new.rezaram := 0;
  new.denuncias := 0;
  new.oculta := false;
  new.criado_em := now();
  new.expira_em := now() + interval '30 days';
  if new.grupo_id is null and (select count(*) from public.intencoes i where i.autor_id = new.autor_id and i.grupo_id is null and i.expira_em > now()) >= 3 then
    raise exception 'limite de pedidos';
  end if;
  if (select count(*) from public.intencoes i where i.autor_id = new.autor_id and i.criado_em > now() - interval '1 day') >= 10 then
    raise exception 'limite de pedidos';
  end if;
  return new;
end
$fn$;

revoke execute on function public.intencao_nova() from public, anon, authenticated;

drop trigger if exists trg_intencao_nova on public.intencoes;
create trigger trg_intencao_nova before insert on public.intencoes
  for each row execute function public.intencao_nova();

create table if not exists public.intencao_oracoes (
  intencao_id uuid not null references public.intencoes (id) on delete cascade,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  primary key (intencao_id, usuario_id)
);

alter table public.intencao_oracoes enable row level security;
revoke all on public.intencao_oracoes from public, anon, authenticated;

create table if not exists public.denuncias (
  id uuid primary key default gen_random_uuid(),
  intencao_id uuid not null references public.intencoes (id) on delete cascade,
  autor_id uuid references auth.users (id) on delete set null,
  motivo text not null check (motivo in ('ofensivo', 'falso', 'pessoal', 'outro')),
  criado_em timestamptz not null default now()
);

create unique index if not exists denuncias_uma_por_pessoa on public.denuncias (intencao_id, autor_id) where autor_id is not null;

alter table public.denuncias enable row level security;
revoke all on public.denuncias from public, anon, authenticated;
grant select on public.denuncias to authenticated;

drop policy if exists "admin ve as denuncias" on public.denuncias;
create policy "admin ve as denuncias" on public.denuncias for select to authenticated
  using ((select public.e_admin()));

create or replace function public.pode_ver_intencao(p_intencao uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (
    select 1 from public.intencoes i
    where i.id = p_intencao and not i.oculta and i.expira_em > now()
      and (i.grupo_id is null or exists (select 1 from public.grupo_membros m where m.grupo_id = i.grupo_id and m.usuario_id = auth.uid()))
  );
$fn$;

revoke execute on function public.pode_ver_intencao(uuid) from public, anon, authenticated;

create or replace function public.rezei_por(p_intencao uuid)
returns integer
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_total integer;
begin
  if not public.pode_ver_intencao(p_intencao) then
    raise exception 'intencao indisponivel';
  end if;
  if auth.uid() is not null then
    insert into public.intencao_oracoes (intencao_id, usuario_id) values (p_intencao, auth.uid()) on conflict do nothing;
    if not found then
      select i.rezaram into v_total from public.intencoes i where i.id = p_intencao;
      return v_total;
    end if;
  end if;
  update public.intencoes set rezaram = rezaram + 1 where id = p_intencao returning rezaram into v_total;
  return v_total;
end
$fn$;

revoke execute on function public.rezei_por(uuid) from public, anon, authenticated;
grant execute on function public.rezei_por(uuid) to anon, authenticated;

create or replace function public.denunciar_intencao(p_intencao uuid, p_motivo text)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if not exists (select 1 from public.intencoes i where i.id = p_intencao) then
    return;
  end if;
  insert into public.denuncias (intencao_id, autor_id, motivo) values (p_intencao, auth.uid(), p_motivo) on conflict do nothing;
  if found and auth.uid() is not null then
    update public.intencoes set denuncias = denuncias + 1, oculta = oculta or denuncias + 1 >= 3 where id = p_intencao;
  end if;
end
$fn$;

revoke execute on function public.denunciar_intencao(uuid, text) from public, anon, authenticated;
grant execute on function public.denunciar_intencao(uuid, text) to anon, authenticated;

create table if not exists public.campanhas (
  id uuid primary key default gen_random_uuid(),
  titulo text not null check (char_length(titulo) between 3 and 120),
  oracao text not null check (oracao in ('terco', 'ave-maria', 'pai-nosso', 'misericordia', 'missa')),
  meta bigint not null check (meta > 0),
  inicio date not null,
  fim date not null check (fim >= inicio),
  contagem bigint not null default 0,
  criado_em timestamptz not null default now()
);

alter table public.campanhas enable row level security;
revoke all on public.campanhas from public, anon, authenticated;
grant select on public.campanhas to anon, authenticated;
grant insert, update, delete on public.campanhas to authenticated;

drop policy if exists "todos veem as campanhas" on public.campanhas;
create policy "todos veem as campanhas" on public.campanhas for select to anon, authenticated using (true);

drop policy if exists "admin cria campanha" on public.campanhas;
create policy "admin cria campanha" on public.campanhas for insert to authenticated with check ((select public.e_admin()));

drop policy if exists "admin edita campanha" on public.campanhas;
create policy "admin edita campanha" on public.campanhas for update to authenticated using ((select public.e_admin())) with check ((select public.e_admin()));

drop policy if exists "admin apaga campanha" on public.campanhas;
create policy "admin apaga campanha" on public.campanhas for delete to authenticated using ((select public.e_admin()));

create or replace function public.somar_na_campanha(p_campanha uuid, p_quantidade integer default 1)
returns bigint
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_total bigint;
begin
  update public.campanhas
  set contagem = contagem + least(greatest(p_quantidade, 1), 10)
  where id = p_campanha and (now() at time zone 'America/Sao_Paulo')::date between inicio and fim
  returning contagem into v_total;
  return v_total;
end
$fn$;

revoke execute on function public.somar_na_campanha(uuid, integer) from public, anon, authenticated;
grant execute on function public.somar_na_campanha(uuid, integer) to anon, authenticated;

do $pub$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
    and not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'grupo_terco') then
    alter publication supabase_realtime add table public.grupo_terco;
  end if;
end
$pub$;
