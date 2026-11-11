create table if not exists public.ministerios (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(btrim(nome)) between 3 and 80),
  paroquia_id uuid references public.paroquias (id) on delete set null,
  dono_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  codigo text not null unique default substr(replace(gen_random_uuid()::text, '-', ''), 1, 10),
  ativo boolean not null default true,
  criado_em timestamptz not null default now()
);

create table if not exists public.ministerio_membros (
  ministerio_id uuid not null references public.ministerios (id) on delete cascade,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 2 and 60),
  coordena boolean not null default false,
  entrou_em timestamptz not null default now(),
  primary key (ministerio_id, usuario_id)
);

create index if not exists ministerio_membros_usuario on public.ministerio_membros (usuario_id);

create table if not exists public.escala (
  id uuid primary key default gen_random_uuid(),
  ministerio_id uuid not null references public.ministerios (id) on delete cascade,
  data date not null,
  hora time,
  celebracao text not null default '' check (char_length(celebracao) <= 80),
  funcao text not null check (char_length(btrim(funcao)) between 1 and 60),
  membro_id uuid references auth.users (id) on delete set null,
  troca_pedida boolean not null default false,
  observacao text not null default '' check (char_length(observacao) <= 200),
  criado_em timestamptz not null default now()
);

create index if not exists escala_do_ministerio on public.escala (ministerio_id, data);
create index if not exists escala_do_membro on public.escala (membro_id, data);

create or replace function public.coordena_ministerio(p_ministerio uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.e_admin()
    or exists (select 1 from public.ministerios m where m.id = p_ministerio and (m.dono_id = auth.uid() or (m.paroquia_id is not null and public.pode_editar(m.paroquia_id))))
    or exists (select 1 from public.ministerio_membros x where x.ministerio_id = p_ministerio and x.usuario_id = auth.uid() and x.coordena);
$fn$;

revoke execute on function public.coordena_ministerio(uuid) from public, anon, authenticated;
grant execute on function public.coordena_ministerio(uuid) to authenticated;

create or replace function public.participa_ministerio(p_ministerio uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.coordena_ministerio(p_ministerio)
    or exists (select 1 from public.ministerio_membros x where x.ministerio_id = p_ministerio and x.usuario_id = auth.uid());
$fn$;

revoke execute on function public.participa_ministerio(uuid) from public, anon, authenticated;
grant execute on function public.participa_ministerio(uuid) to authenticated;

alter table public.ministerios enable row level security;
alter table public.ministerio_membros enable row level security;
alter table public.escala enable row level security;
revoke all on public.ministerios, public.ministerio_membros, public.escala from public, anon, authenticated;
grant select, insert, update, delete on public.ministerios to authenticated;
grant select, update, delete on public.ministerio_membros to authenticated;
grant select, insert, update, delete on public.escala to authenticated;

drop policy if exists "quem participa ve o ministerio" on public.ministerios;
create policy "quem participa ve o ministerio" on public.ministerios for select to authenticated
  using (dono_id = (select auth.uid()) or public.participa_ministerio(id));

drop policy if exists "quem tem conta cria ministerio" on public.ministerios;
create policy "quem tem conta cria ministerio" on public.ministerios for insert to authenticated
  with check (dono_id = (select auth.uid()) and (paroquia_id is null or public.pode_editar(paroquia_id)));

drop policy if exists "quem coordena edita o ministerio" on public.ministerios;
create policy "quem coordena edita o ministerio" on public.ministerios for update to authenticated
  using (public.coordena_ministerio(id)) with check (public.coordena_ministerio(id));

drop policy if exists "dono apaga o ministerio" on public.ministerios;
create policy "dono apaga o ministerio" on public.ministerios for delete to authenticated
  using (dono_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.ministerio_protege()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    if (select count(*) from public.ministerios m where m.dono_id = new.dono_id) > 20 then
      raise exception 'limite de ministerios';
    end if;
    insert into public.ministerio_membros (ministerio_id, usuario_id, nome, coordena)
    values (new.id, new.dono_id, 'Coordenação', true)
    on conflict do nothing;
    return new;
  end if;
  new.id := old.id;
  new.dono_id := old.dono_id;
  new.codigo := old.codigo;
  new.criado_em := old.criado_em;
  if new.paroquia_id is distinct from old.paroquia_id and new.paroquia_id is not null and not public.pode_editar(new.paroquia_id) then
    new.paroquia_id := old.paroquia_id;
  end if;
  return new;
end
$fn$;

revoke execute on function public.ministerio_protege() from public, anon, authenticated;

drop trigger if exists trg_ministerio_protege on public.ministerios;
create trigger trg_ministerio_protege before update on public.ministerios
  for each row execute function public.ministerio_protege();

drop trigger if exists trg_ministerio_novo on public.ministerios;
create trigger trg_ministerio_novo after insert on public.ministerios
  for each row execute function public.ministerio_protege();

create or replace function public.ministerio_codigo()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  new.codigo := substr(replace(gen_random_uuid()::text, '-', ''), 1, 10);
  new.criado_em := now();
  return new;
end
$fn$;

revoke execute on function public.ministerio_codigo() from public, anon, authenticated;

drop trigger if exists trg_ministerio_codigo on public.ministerios;
create trigger trg_ministerio_codigo before insert on public.ministerios
  for each row execute function public.ministerio_codigo();

drop policy if exists "quem participa ve a equipe" on public.ministerio_membros;
create policy "quem participa ve a equipe" on public.ministerio_membros for select to authenticated
  using (usuario_id = (select auth.uid()) or public.participa_ministerio(ministerio_id));

drop policy if exists "membro ou coordenacao muda" on public.ministerio_membros;
create policy "membro ou coordenacao muda" on public.ministerio_membros for update to authenticated
  using (usuario_id = (select auth.uid()) or public.coordena_ministerio(ministerio_id))
  with check (usuario_id = (select auth.uid()) or public.coordena_ministerio(ministerio_id));

drop policy if exists "membro sai ou coordenacao tira" on public.ministerio_membros;
create policy "membro sai ou coordenacao tira" on public.ministerio_membros for delete to authenticated
  using (usuario_id = (select auth.uid()) or public.coordena_ministerio(ministerio_id));

create or replace function public.membro_do_ministerio_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  new.ministerio_id := old.ministerio_id;
  new.usuario_id := old.usuario_id;
  new.entrou_em := old.entrou_em;
  if not public.coordena_ministerio(old.ministerio_id) then
    new.coordena := old.coordena;
  end if;
  return new;
end
$fn$;

revoke execute on function public.membro_do_ministerio_protege() from public, anon, authenticated;

drop trigger if exists trg_membro_do_ministerio_protege on public.ministerio_membros;
create trigger trg_membro_do_ministerio_protege before update on public.ministerio_membros
  for each row execute function public.membro_do_ministerio_protege();

create or replace function public.ver_ministerio(p_codigo text)
returns table (id uuid, nome text, paroquia text)
language sql
stable
security definer
set search_path = ''
as $fn$
  select m.id, m.nome, p.nome
  from public.ministerios m
  left join public.paroquias p on p.id = m.paroquia_id
  where m.codigo = lower(btrim(p_codigo)) and m.ativo;
$fn$;

revoke execute on function public.ver_ministerio(text) from public, anon, authenticated;
grant execute on function public.ver_ministerio(text) to authenticated;

create or replace function public.entrar_no_ministerio(p_codigo text, p_nome text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v uuid;
begin
  if auth.uid() is null then
    raise exception 'sem conta';
  end if;
  select m.id into v from public.ministerios m where m.codigo = lower(btrim(p_codigo)) and m.ativo;
  if v is null then
    raise exception 'convite invalido';
  end if;
  if (select count(*) from public.ministerio_membros x where x.ministerio_id = v) >= 300 then
    raise exception 'limite de membros';
  end if;
  insert into public.ministerio_membros (ministerio_id, usuario_id, nome)
  values (v, auth.uid(), btrim(p_nome))
  on conflict (ministerio_id, usuario_id) do update set nome = excluded.nome;
  return v;
end
$fn$;

revoke execute on function public.entrar_no_ministerio(text, text) from public, anon, authenticated;
grant execute on function public.entrar_no_ministerio(text, text) to authenticated;

drop policy if exists "quem participa ve a escala" on public.escala;
create policy "quem participa ve a escala" on public.escala for select to authenticated
  using (membro_id = (select auth.uid()) or public.participa_ministerio(ministerio_id));

drop policy if exists "coordenacao monta a escala" on public.escala;
create policy "coordenacao monta a escala" on public.escala for insert to authenticated
  with check (public.coordena_ministerio(ministerio_id));

drop policy if exists "quem participa mexe na escala" on public.escala;
create policy "quem participa mexe na escala" on public.escala for update to authenticated
  using (public.participa_ministerio(ministerio_id)) with check (public.participa_ministerio(ministerio_id));

drop policy if exists "coordenacao apaga da escala" on public.escala;
create policy "coordenacao apaga da escala" on public.escala for delete to authenticated
  using (public.coordena_ministerio(ministerio_id));

create or replace function public.escala_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
declare
  v_eu uuid := auth.uid();
begin
  if tg_op = 'INSERT' then
    if new.membro_id is not null and not exists (select 1 from public.ministerio_membros x where x.ministerio_id = new.ministerio_id and x.usuario_id = new.membro_id) then
      raise exception 'pessoa fora do ministerio';
    end if;
    new.troca_pedida := false;
    new.criado_em := now();
    return new;
  end if;
  new.id := old.id;
  new.ministerio_id := old.ministerio_id;
  new.criado_em := old.criado_em;
  if public.coordena_ministerio(old.ministerio_id) then
    if new.membro_id is distinct from old.membro_id then
      if new.membro_id is not null and not exists (select 1 from public.ministerio_membros x where x.ministerio_id = old.ministerio_id and x.usuario_id = new.membro_id) then
        raise exception 'pessoa fora do ministerio';
      end if;
      new.troca_pedida := false;
    end if;
    return new;
  end if;
  new.data := old.data;
  new.hora := old.hora;
  new.celebracao := old.celebracao;
  new.funcao := old.funcao;
  new.observacao := old.observacao;
  if old.membro_id = v_eu and new.membro_id is not distinct from old.membro_id then
    return new;
  end if;
  if new.membro_id = v_eu and (old.membro_id is null or old.troca_pedida) then
    new.troca_pedida := false;
    return new;
  end if;
  new.membro_id := old.membro_id;
  new.troca_pedida := old.troca_pedida;
  return new;
end
$fn$;

revoke execute on function public.escala_protege() from public, anon, authenticated;

drop trigger if exists trg_escala_protege on public.escala;
create trigger trg_escala_protege before insert or update on public.escala
  for each row execute function public.escala_protege();
