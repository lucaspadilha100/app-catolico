create table if not exists public.correntes (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique default substr(replace(gen_random_uuid()::text, '-', ''), 1, 10),
  dono_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  titulo text not null check (char_length(btrim(titulo)) between 3 and 120),
  descricao text not null default '' check (char_length(descricao) <= 1000),
  inicio timestamptz not null,
  horas integer not null check (horas between 1 and 720),
  intervalo integer not null default 60 check (intervalo in (15, 30, 60)),
  ativa boolean not null default true,
  criado_em timestamptz not null default now()
);

create index if not exists correntes_dono on public.correntes (dono_id, criado_em desc);

create table if not exists public.corrente_turnos (
  id uuid primary key default gen_random_uuid(),
  corrente_id uuid not null references public.correntes (id) on delete cascade,
  inicio timestamptz not null,
  nome text not null check (char_length(btrim(nome)) between 2 and 40),
  usuario_id uuid references auth.users (id) on delete set null,
  segredo uuid not null default gen_random_uuid(),
  criado_em timestamptz not null default now()
);

create index if not exists corrente_turnos_da_corrente on public.corrente_turnos (corrente_id, inicio);
create index if not exists corrente_turnos_do_usuario on public.corrente_turnos (usuario_id, inicio) where usuario_id is not null;

alter table public.correntes enable row level security;
alter table public.corrente_turnos enable row level security;
revoke all on public.correntes, public.corrente_turnos from public, anon, authenticated;
grant select, insert, update, delete on public.correntes to authenticated;
grant select on public.corrente_turnos to authenticated;

drop policy if exists "dono ve a corrente" on public.correntes;
create policy "dono ve a corrente" on public.correntes for select to authenticated
  using (dono_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "quem tem conta cria corrente" on public.correntes;
create policy "quem tem conta cria corrente" on public.correntes for insert to authenticated
  with check (dono_id = (select auth.uid()));

drop policy if exists "dono edita a corrente" on public.correntes;
create policy "dono edita a corrente" on public.correntes for update to authenticated
  using (dono_id = (select auth.uid())) with check (dono_id = (select auth.uid()));

drop policy if exists "dono apaga a corrente" on public.correntes;
create policy "dono apaga a corrente" on public.correntes for delete to authenticated
  using (dono_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "quem pegou ve o seu turno" on public.corrente_turnos;
create policy "quem pegou ve o seu turno" on public.corrente_turnos for select to authenticated
  using (usuario_id = (select auth.uid()));

create or replace function public.corrente_protege()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    new.codigo := substr(replace(gen_random_uuid()::text, '-', ''), 1, 10);
    new.criado_em := now();
    if (select count(*) from public.correntes c where c.dono_id = new.dono_id and c.criado_em > now() - interval '1 day') >= 5 then
      raise exception 'limite de correntes';
    end if;
    return new;
  end if;
  new.id := old.id;
  new.codigo := old.codigo;
  new.dono_id := old.dono_id;
  new.criado_em := old.criado_em;
  return new;
end
$fn$;

revoke execute on function public.corrente_protege() from public, anon, authenticated;

drop trigger if exists trg_corrente_protege on public.correntes;
create trigger trg_corrente_protege before insert or update on public.correntes
  for each row execute function public.corrente_protege();

create or replace function public.corrente_por_codigo(p_codigo text)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $fn$
  select jsonb_build_object(
    'id', c.id, 'codigo', c.codigo, 'titulo', c.titulo, 'descricao', c.descricao, 'inicio', c.inicio,
    'horas', c.horas, 'intervalo', c.intervalo, 'ativa', c.ativa,
    'sou_dono', c.dono_id = auth.uid(),
    'turnos', coalesce((select jsonb_agg(jsonb_build_object('inicio', t.inicio, 'nome', t.nome, 'meu', t.usuario_id = auth.uid()) order by t.inicio, t.criado_em)
      from public.corrente_turnos t where t.corrente_id = c.id), '[]'::jsonb)
  )
  from public.correntes c
  where c.codigo = lower(btrim(p_codigo));
$fn$;

revoke execute on function public.corrente_por_codigo(text) from public, anon, authenticated;
grant execute on function public.corrente_por_codigo(text) to anon, authenticated;

create or replace function public.pegar_turno(p_codigo text, p_inicio timestamptz, p_nome text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  c public.correntes;
  v_segredo uuid;
  v_minutos integer;
begin
  select * into c from public.correntes where codigo = lower(btrim(p_codigo));
  if c.id is null or not c.ativa then
    raise exception 'corrente encerrada';
  end if;
  v_minutos := extract(epoch from (p_inicio - c.inicio))::integer / 60;
  if p_inicio < c.inicio or p_inicio >= c.inicio + make_interval(hours => c.horas) or v_minutos % c.intervalo <> 0 then
    raise exception 'horario invalido';
  end if;
  if p_inicio + make_interval(mins => c.intervalo) < now() then
    raise exception 'horario passado';
  end if;
  if (select count(*) from public.corrente_turnos t where t.corrente_id = c.id and t.inicio = p_inicio) >= 20 then
    raise exception 'horario cheio';
  end if;
  if (select count(*) from public.corrente_turnos t where t.corrente_id = c.id and t.criado_em > now() - interval '1 hour') >= 300 then
    raise exception 'limite de turnos';
  end if;
  insert into public.corrente_turnos (corrente_id, inicio, nome, usuario_id)
  values (c.id, p_inicio, btrim(p_nome), auth.uid())
  returning segredo into v_segredo;
  return v_segredo;
end
$fn$;

revoke execute on function public.pegar_turno(text, timestamptz, text) from public, anon, authenticated;
grant execute on function public.pegar_turno(text, timestamptz, text) to anon, authenticated;

create or replace function public.soltar_turno(p_codigo text, p_inicio timestamptz, p_segredo uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  delete from public.corrente_turnos t
  using public.correntes c
  where c.id = t.corrente_id and c.codigo = lower(btrim(p_codigo)) and t.inicio = p_inicio
    and ((p_segredo is not null and t.segredo = p_segredo) or (auth.uid() is not null and t.usuario_id = auth.uid()));
end
$fn$;

revoke execute on function public.soltar_turno(text, timestamptz, uuid) from public, anon, authenticated;
grant execute on function public.soltar_turno(text, timestamptz, uuid) to anon, authenticated;

create table if not exists public.grupo_novenas (
  id uuid primary key default gen_random_uuid(),
  grupo_id uuid not null references public.grupos (id) on delete cascade,
  novena text not null check (novena ~ '^[a-z0-9-]{2,60}$'),
  dias integer not null check (dias between 1 and 60),
  inicio date not null,
  criado_por uuid default auth.uid() references auth.users (id) on delete set null,
  criado_em timestamptz not null default now()
);

create index if not exists grupo_novenas_do_grupo on public.grupo_novenas (grupo_id, inicio desc);

create table if not exists public.grupo_novena_dias (
  grupo_novena_id uuid not null references public.grupo_novenas (id) on delete cascade,
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  dia integer not null check (dia between 1 and 60),
  em timestamptz not null default now(),
  primary key (grupo_novena_id, usuario_id, dia)
);

alter table public.grupo_novenas enable row level security;
alter table public.grupo_novena_dias enable row level security;
revoke all on public.grupo_novenas, public.grupo_novena_dias from public, anon, authenticated;
grant select, insert, delete on public.grupo_novenas to authenticated;
grant select, insert, delete on public.grupo_novena_dias to authenticated;

drop policy if exists "membro ve as novenas do grupo" on public.grupo_novenas;
create policy "membro ve as novenas do grupo" on public.grupo_novenas for select to authenticated
  using (grupo_id in (select public.meus_grupos()));

drop policy if exists "membro comeca novena no grupo" on public.grupo_novenas;
create policy "membro comeca novena no grupo" on public.grupo_novenas for insert to authenticated
  with check (grupo_id in (select public.meus_grupos()) and criado_por = (select auth.uid()));

drop policy if exists "quem comecou apaga a novena do grupo" on public.grupo_novenas;
create policy "quem comecou apaga a novena do grupo" on public.grupo_novenas for delete to authenticated
  using (criado_por = (select auth.uid()) or exists (select 1 from public.grupos g where g.id = grupo_id and g.dono_id = (select auth.uid())));

drop policy if exists "membro ve quem rezou" on public.grupo_novena_dias;
create policy "membro ve quem rezou" on public.grupo_novena_dias for select to authenticated
  using (grupo_novena_id in (select n.id from public.grupo_novenas n where n.grupo_id in (select public.meus_grupos())));

drop policy if exists "membro marca o proprio dia" on public.grupo_novena_dias;
create policy "membro marca o proprio dia" on public.grupo_novena_dias for insert to authenticated
  with check (usuario_id = (select auth.uid()) and grupo_novena_id in (select n.id from public.grupo_novenas n where n.grupo_id in (select public.meus_grupos())));

drop policy if exists "membro desmarca o proprio dia" on public.grupo_novena_dias;
create policy "membro desmarca o proprio dia" on public.grupo_novena_dias for delete to authenticated
  using (usuario_id = (select auth.uid()));

create or replace function public.grupo_novena_nova()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  new.criado_em := now();
  if (select count(*) from public.grupo_novenas n where n.grupo_id = new.grupo_id and n.criado_em > now() - interval '1 day') >= 5 then
    raise exception 'limite de novenas';
  end if;
  return new;
end
$fn$;

revoke execute on function public.grupo_novena_nova() from public, anon, authenticated;

drop trigger if exists trg_grupo_novena_nova on public.grupo_novenas;
create trigger trg_grupo_novena_nova before insert on public.grupo_novenas
  for each row execute function public.grupo_novena_nova();

create or replace function public.grupo_novena_dia_novo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  n public.grupo_novenas;
begin
  select * into n from public.grupo_novenas where id = new.grupo_novena_id;
  if new.dia > n.dias or n.inicio + (new.dia - 1) > (now() at time zone 'America/Sao_Paulo')::date then
    raise exception 'dia invalido';
  end if;
  new.em := now();
  return new;
end
$fn$;

revoke execute on function public.grupo_novena_dia_novo() from public, anon, authenticated;

drop trigger if exists trg_grupo_novena_dia_novo on public.grupo_novena_dias;
create trigger trg_grupo_novena_dia_novo before insert on public.grupo_novena_dias
  for each row execute function public.grupo_novena_dia_novo();
