create table if not exists public.votacao_opcoes (
  id uuid primary key default gen_random_uuid(),
  titulo text not null check (char_length(btrim(titulo)) between 3 and 120),
  descricao text not null default '' check (char_length(descricao) <= 500),
  ativa boolean not null default true,
  criado_em timestamptz not null default now()
);

alter table public.votacao_opcoes enable row level security;
revoke all on public.votacao_opcoes from public, anon, authenticated;
grant select on public.votacao_opcoes to authenticated;
grant insert, update on public.votacao_opcoes to authenticated;

drop policy if exists "apoiadores e admin veem as opcoes" on public.votacao_opcoes;
create policy "apoiadores e admin veem as opcoes" on public.votacao_opcoes for select to authenticated
  using ((select public.e_admin()) or (ativa and exists (select 1 from public.apoiadores a where a.usuario_id = (select auth.uid()) and a.ate >= current_date)));

drop policy if exists "admin cadastra opcao" on public.votacao_opcoes;
create policy "admin cadastra opcao" on public.votacao_opcoes for insert to authenticated
  with check ((select public.e_admin()));

drop policy if exists "admin edita opcao" on public.votacao_opcoes;
create policy "admin edita opcao" on public.votacao_opcoes for update to authenticated
  using ((select public.e_admin())) with check ((select public.e_admin()));

create table if not exists public.votos (
  usuario_id uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  opcao_id uuid not null references public.votacao_opcoes (id) on delete cascade,
  em timestamptz not null default now()
);

create index if not exists votos_opcao on public.votos (opcao_id);

alter table public.votos enable row level security;
revoke all on public.votos from public, anon, authenticated;
grant select, insert, update on public.votos to authenticated;

drop policy if exists "quem vota ve o seu" on public.votos;
create policy "quem vota ve o seu" on public.votos for select to authenticated
  using (usuario_id = (select auth.uid()));

drop policy if exists "apoiador vota" on public.votos;
create policy "apoiador vota" on public.votos for insert to authenticated
  with check (
    usuario_id = (select auth.uid())
    and exists (select 1 from public.apoiadores a where a.usuario_id = (select auth.uid()) and a.ate >= current_date)
    and exists (select 1 from public.votacao_opcoes o where o.id = opcao_id and o.ativa)
  );

drop policy if exists "apoiador muda o voto" on public.votos;
create policy "apoiador muda o voto" on public.votos for update to authenticated
  using (usuario_id = (select auth.uid()))
  with check (
    usuario_id = (select auth.uid())
    and exists (select 1 from public.apoiadores a where a.usuario_id = (select auth.uid()) and a.ate >= current_date)
    and exists (select 1 from public.votacao_opcoes o where o.id = opcao_id and o.ativa)
  );

create or replace function public.resultado_da_votacao()
returns table (opcao_id uuid, votos integer)
language plpgsql
stable
security definer
set search_path = ''
as $fn$
begin
  if not (public.e_admin() or exists (select 1 from public.apoiadores a where a.usuario_id = auth.uid() and a.ate >= current_date)) then
    return;
  end if;
  return query
    select o.id, (select count(*)::integer from public.votos v where v.opcao_id = o.id)
    from public.votacao_opcoes o
    where o.ativa
    order by o.criado_em;
end
$fn$;

revoke execute on function public.resultado_da_votacao() from public, anon, authenticated;
grant execute on function public.resultado_da_votacao() to authenticated;
