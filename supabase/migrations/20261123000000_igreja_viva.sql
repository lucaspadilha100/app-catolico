alter table public.paroquias add column if not exists plano text not null default 'gratis';
alter table public.paroquias drop constraint if exists paroquias_plano_check;
alter table public.paroquias add constraint paroquias_plano_check check (plano in ('gratis', 'pioneira', 'paroquia'));

create or replace function public.paroquia_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if not public.e_admin() then
    new.verificada := old.verificada;
    new.ativa := old.ativa;
    new.conferida_em := old.conferida_em;
    new.fonte := old.fonte;
    new.plano := old.plano;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.paroquia_protege() from public, anon, authenticated;

create table if not exists public.pedidos_de_gestao (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 2 and 80),
  funcao text not null check (char_length(btrim(funcao)) between 2 and 80),
  contato text not null check (char_length(btrim(contato)) between 5 and 120),
  situacao text not null default 'pendente' check (situacao in ('pendente', 'aprovado', 'recusado')),
  criado_em timestamptz not null default now(),
  revisado_em timestamptz
);

create unique index if not exists pedidos_de_gestao_um_aberto on public.pedidos_de_gestao (paroquia_id, usuario_id) where situacao = 'pendente';
create index if not exists pedidos_de_gestao_pendentes on public.pedidos_de_gestao (criado_em) where situacao = 'pendente';

alter table public.pedidos_de_gestao enable row level security;
revoke all on public.pedidos_de_gestao from public, anon, authenticated;
grant select, insert on public.pedidos_de_gestao to authenticated;

drop policy if exists "quem pede ve o seu" on public.pedidos_de_gestao;
create policy "quem pede ve o seu" on public.pedidos_de_gestao for select to authenticated
  using (usuario_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "quem tem conta pede" on public.pedidos_de_gestao;
create policy "quem tem conta pede" on public.pedidos_de_gestao for insert to authenticated
  with check (usuario_id = (select auth.uid()) and situacao = 'pendente');

create or replace function public.pedido_de_gestao_novo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  new.situacao := 'pendente';
  new.revisado_em := null;
  if (select count(*) from public.pedidos_de_gestao p where p.usuario_id = new.usuario_id and p.situacao = 'pendente') >= 3 then
    raise exception 'limite de pedidos';
  end if;
  return new;
end
$fn$;

revoke execute on function public.pedido_de_gestao_novo() from public, anon, authenticated;

drop trigger if exists trg_pedido_de_gestao_novo on public.pedidos_de_gestao;
create trigger trg_pedido_de_gestao_novo before insert on public.pedidos_de_gestao
  for each row execute function public.pedido_de_gestao_novo();

create or replace function public.pedidos_de_gestao_abertos()
returns table (id uuid, paroquia_id uuid, paroquia text, cidade text, nome text, funcao text, contato text, email text, criado_em timestamptz)
language plpgsql
stable
security definer
set search_path = ''
as $fn$
begin
  if not public.e_admin() then
    return;
  end if;
  return query
    select g.id, g.paroquia_id, p.nome, p.cidade, g.nome, g.funcao, g.contato, u.email::text, g.criado_em
    from public.pedidos_de_gestao g
    join public.paroquias p on p.id = g.paroquia_id
    join auth.users u on u.id = g.usuario_id
    where g.situacao = 'pendente'
    order by g.criado_em
    limit 100;
end
$fn$;

revoke execute on function public.pedidos_de_gestao_abertos() from public, anon, authenticated;
grant execute on function public.pedidos_de_gestao_abertos() to authenticated;

create or replace function public.revisar_pedido_de_gestao(p_pedido uuid, p_aprovar boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v public.pedidos_de_gestao;
begin
  if not public.e_admin() then
    raise exception 'sem permissao';
  end if;
  select * into v from public.pedidos_de_gestao where id = p_pedido and situacao = 'pendente';
  if v.id is null then
    return;
  end if;
  if p_aprovar then
    insert into public.paroquia_gestores (paroquia_id, usuario_id) values (v.paroquia_id, v.usuario_id) on conflict do nothing;
    update public.paroquias set verificada = true where id = v.paroquia_id;
  end if;
  update public.pedidos_de_gestao set situacao = case when p_aprovar then 'aprovado' else 'recusado' end, revisado_em = now() where id = p_pedido;
end
$fn$;

revoke execute on function public.revisar_pedido_de_gestao(uuid, boolean) from public, anon, authenticated;
grant execute on function public.revisar_pedido_de_gestao(uuid, boolean) to authenticated;

create table if not exists public.publicacoes_paroquia (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  autor_id uuid default auth.uid() references auth.users (id) on delete set null,
  tipo text not null default 'aviso' check (tipo in ('aviso', 'evento')),
  titulo text not null check (char_length(btrim(titulo)) between 3 and 120),
  texto text not null default '' check (char_length(texto) <= 1500),
  link text not null default '' check (link = '' or (link ~ '^https://' and char_length(link) <= 300)),
  evento_em timestamptz,
  local text not null default '' check (char_length(local) <= 160),
  notificada boolean not null default false,
  criado_em timestamptz not null default now(),
  check (tipo <> 'evento' or evento_em is not null)
);

create index if not exists publicacoes_da_paroquia on public.publicacoes_paroquia (paroquia_id, criado_em desc);
create index if not exists publicacoes_a_notificar on public.publicacoes_paroquia (criado_em) where not notificada;
create index if not exists publicacoes_eventos on public.publicacoes_paroquia (evento_em) where tipo = 'evento';

alter table public.publicacoes_paroquia enable row level security;
revoke all on public.publicacoes_paroquia from public, anon, authenticated;
grant select on public.publicacoes_paroquia to anon, authenticated;
grant insert, update, delete on public.publicacoes_paroquia to authenticated;

drop policy if exists "todos veem o mural" on public.publicacoes_paroquia;
create policy "todos veem o mural" on public.publicacoes_paroquia for select to anon, authenticated
  using (exists (select 1 from public.paroquias p where p.id = paroquia_id and p.ativa));

drop policy if exists "equipe publica" on public.publicacoes_paroquia;
create policy "equipe publica" on public.publicacoes_paroquia for insert to authenticated
  with check (public.pode_editar(paroquia_id));

drop policy if exists "equipe edita" on public.publicacoes_paroquia;
create policy "equipe edita" on public.publicacoes_paroquia for update to authenticated
  using (public.pode_editar(paroquia_id)) with check (public.pode_editar(paroquia_id));

drop policy if exists "equipe apaga" on public.publicacoes_paroquia;
create policy "equipe apaga" on public.publicacoes_paroquia for delete to authenticated
  using (public.pode_editar(paroquia_id));

create or replace function public.publicacao_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    new.notificada := false;
    new.criado_em := now();
    new.autor_id := auth.uid();
    if (select count(*) from public.publicacoes_paroquia x where x.paroquia_id = new.paroquia_id and x.criado_em > now() - interval '1 day') >= 10 then
      raise exception 'limite de publicacoes';
    end if;
    return new;
  end if;
  if current_user <> 'service_role' then
    new.notificada := old.notificada;
  end if;
  new.paroquia_id := old.paroquia_id;
  new.criado_em := old.criado_em;
  new.autor_id := old.autor_id;
  return new;
end
$fn$;

revoke execute on function public.publicacao_protege() from public, anon, authenticated;

drop trigger if exists trg_publicacao_protege on public.publicacoes_paroquia;
create trigger trg_publicacao_protege before insert or update on public.publicacoes_paroquia
  for each row execute function public.publicacao_protege();
