create table if not exists public.terco_ajudantes (
  terco_id uuid not null references public.tercos (id) on delete cascade,
  usuario_id uuid not null references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now(),
  primary key (terco_id, usuario_id)
);

create index if not exists terco_ajudantes_usuario on public.terco_ajudantes (usuario_id);

alter table public.terco_ajudantes enable row level security;
revoke all on public.terco_ajudantes from public, anon, authenticated;
grant select on public.terco_ajudantes to authenticated;

drop policy if exists "ajudante ve a sua ajuda" on public.terco_ajudantes;
create policy "ajudante ve a sua ajuda" on public.terco_ajudantes for select to authenticated
  using (usuario_id = (select auth.uid()) or (select public.e_admin()));

create or replace function public.conduz_o_terco(p_terco uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.e_admin()
    or exists (select 1 from public.tercos t where t.id = p_terco and t.responsavel_id = auth.uid())
    or exists (select 1 from public.terco_ajudantes a where a.terco_id = p_terco and a.usuario_id = auth.uid());
$fn$;

revoke execute on function public.conduz_o_terco(uuid) from public, anon;
grant execute on function public.conduz_o_terco(uuid) to authenticated;

create or replace function public.adicionar_ajudante(p_terco uuid, p_email text)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_usuario uuid;
begin
  if not (public.e_admin() or exists (select 1 from public.tercos t where t.id = p_terco and t.responsavel_id = auth.uid())) then
    raise exception 'sem permissao';
  end if;
  select u.id into v_usuario from auth.users u where lower(u.email) = lower(btrim(p_email));
  if v_usuario is null then
    raise exception 'nenhuma conta com este e-mail';
  end if;
  if (select count(*) from public.terco_ajudantes a where a.terco_id = p_terco) >= 10 then
    raise exception 'limite de ajudantes';
  end if;
  insert into public.terco_ajudantes (terco_id, usuario_id) values (p_terco, v_usuario) on conflict do nothing;
end
$fn$;

revoke execute on function public.adicionar_ajudante(uuid, text) from public, anon, authenticated;
grant execute on function public.adicionar_ajudante(uuid, text) to authenticated;

create or replace function public.ajudantes_do_terco(p_terco uuid)
returns table (usuario_id uuid, email text)
language plpgsql
stable
security definer
set search_path = ''
as $fn$
begin
  if not (public.e_admin() or exists (select 1 from public.tercos t where t.id = p_terco and t.responsavel_id = auth.uid())) then
    return;
  end if;
  return query
    select a.usuario_id, u.email::text
    from public.terco_ajudantes a
    join auth.users u on u.id = a.usuario_id
    where a.terco_id = p_terco
    order by a.criado_em;
end
$fn$;

revoke execute on function public.ajudantes_do_terco(uuid) from public, anon, authenticated;
grant execute on function public.ajudantes_do_terco(uuid) to authenticated;

create or replace function public.remover_ajudante(p_terco uuid, p_usuario uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if not (public.e_admin() or p_usuario = auth.uid() or exists (select 1 from public.tercos t where t.id = p_terco and t.responsavel_id = auth.uid())) then
    raise exception 'sem permissao';
  end if;
  delete from public.terco_ajudantes where terco_id = p_terco and usuario_id = p_usuario;
end
$fn$;

revoke execute on function public.remover_ajudante(uuid, uuid) from public, anon, authenticated;
grant execute on function public.remover_ajudante(uuid, uuid) to authenticated;
