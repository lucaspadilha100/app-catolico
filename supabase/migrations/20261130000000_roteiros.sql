create table if not exists public.roteiros (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique default substr(replace(gen_random_uuid()::text, '-', ''), 1, 10) check (codigo ~ '^[a-z0-9]{6,16}$'),
  dono_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  terco_id uuid references public.tercos (id) on delete set null,
  titulo text not null check (char_length(btrim(titulo)) between 3 and 120),
  data date,
  hora time,
  local text not null default '' check (char_length(local) <= 160),
  blocos jsonb not null default '[]'::jsonb check (jsonb_typeof(blocos) = 'array' and jsonb_array_length(blocos) <= 200 and pg_column_size(blocos) <= 200000),
  passo integer not null default 0 check (passo between 0 and 400),
  conta integer not null default 0 check (conta between 0 and 100),
  ao_vivo boolean not null default false,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create index if not exists roteiros_dono on public.roteiros (dono_id, criado_em desc);
create index if not exists roteiros_terco on public.roteiros (terco_id, data) where terco_id is not null;

alter table public.roteiros enable row level security;
revoke all on public.roteiros from public, anon, authenticated;
grant select, insert, update, delete on public.roteiros to authenticated;

create or replace function public.edita_o_roteiro(p_dono uuid, p_terco uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select p_dono = auth.uid() or public.e_admin() or (p_terco is not null and public.conduz_o_terco(p_terco));
$fn$;

revoke execute on function public.edita_o_roteiro(uuid, uuid) from public, anon, authenticated;
grant execute on function public.edita_o_roteiro(uuid, uuid) to authenticated;

drop policy if exists "quem edita ve o roteiro" on public.roteiros;
create policy "quem edita ve o roteiro" on public.roteiros for select to authenticated
  using (dono_id = (select auth.uid()) or public.edita_o_roteiro(dono_id, terco_id));

drop policy if exists "quem tem conta cria roteiro" on public.roteiros;
create policy "quem tem conta cria roteiro" on public.roteiros for insert to authenticated
  with check (dono_id = (select auth.uid()) and (terco_id is null or public.conduz_o_terco(terco_id)));

drop policy if exists "quem conduz edita o roteiro" on public.roteiros;
create policy "quem conduz edita o roteiro" on public.roteiros for update to authenticated
  using (public.edita_o_roteiro(dono_id, terco_id))
  with check (public.edita_o_roteiro(dono_id, terco_id));

drop policy if exists "dono apaga o roteiro" on public.roteiros;
create policy "dono apaga o roteiro" on public.roteiros for delete to authenticated
  using (dono_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.roteiro_protege()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    new.codigo := substr(replace(gen_random_uuid()::text, '-', ''), 1, 10);
    new.criado_em := now();
    new.ao_vivo := false;
    new.passo := 0;
    new.conta := 0;
    if (select count(*) from public.roteiros r where r.dono_id = new.dono_id) >= 100 then
      raise exception 'limite de roteiros';
    end if;
  else
    new.id := old.id;
    new.codigo := old.codigo;
    new.dono_id := old.dono_id;
    new.criado_em := old.criado_em;
    if new.terco_id is distinct from old.terco_id and new.terco_id is not null and not public.conduz_o_terco(new.terco_id) then
      new.terco_id := old.terco_id;
    end if;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.roteiro_protege() from public, anon, authenticated;

drop trigger if exists trg_roteiro_protege on public.roteiros;
create trigger trg_roteiro_protege before insert or update on public.roteiros
  for each row execute function public.roteiro_protege();

create or replace function public.roteiro_por_codigo(p_codigo text)
returns table (
  id uuid, codigo text, titulo text, data date, hora time, local text, blocos jsonb,
  passo integer, conta integer, ao_vivo boolean, terco_id uuid, terco text, atualizado_em timestamptz
)
language sql
stable
security definer
set search_path = ''
as $fn$
  select r.id, r.codigo, r.titulo, r.data, r.hora, r.local, r.blocos, r.passo, r.conta, r.ao_vivo, r.terco_id, t.nome, r.atualizado_em
  from public.roteiros r
  left join public.tercos t on t.id = r.terco_id
  where r.codigo = lower(btrim(p_codigo));
$fn$;

revoke execute on function public.roteiro_por_codigo(text) from public, anon, authenticated;
grant execute on function public.roteiro_por_codigo(text) to anon, authenticated;

create or replace function public.roteiro_estado(p_codigo text)
returns table (passo integer, conta integer, ao_vivo boolean, atualizado_em timestamptz)
language sql
stable
security definer
set search_path = ''
as $fn$
  select r.passo, r.conta, r.ao_vivo, r.atualizado_em from public.roteiros r where r.codigo = lower(btrim(p_codigo));
$fn$;

revoke execute on function public.roteiro_estado(text) from public, anon, authenticated;
grant execute on function public.roteiro_estado(text) to anon, authenticated;

create or replace function public.roteiros_do_terco(p_terco uuid)
returns table (codigo text, titulo text, data date, hora time, ao_vivo boolean)
language sql
stable
security definer
set search_path = ''
as $fn$
  select r.codigo, r.titulo, r.data, r.hora, r.ao_vivo
  from public.roteiros r
  join public.tercos t on t.id = r.terco_id and t.situacao = 'aprovado' and t.ativo
  where r.terco_id = p_terco and (r.ao_vivo or r.data >= (now() at time zone 'America/Sao_Paulo')::date)
  order by r.ao_vivo desc, r.data, r.hora
  limit 10;
$fn$;

revoke execute on function public.roteiros_do_terco(uuid) from public, anon, authenticated;
grant execute on function public.roteiros_do_terco(uuid) to anon, authenticated;
