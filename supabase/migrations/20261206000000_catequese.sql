create table if not exists public.turma_encontros (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references public.turmas (id) on delete cascade,
  data date not null,
  hora time,
  tema text not null check (char_length(btrim(tema)) between 2 and 120),
  material text not null default '' check (char_length(material) <= 3000),
  link text not null default '' check (link = '' or (link ~ '^https://' and char_length(link) <= 300)),
  criado_em timestamptz not null default now()
);

create index if not exists turma_encontros_da_turma on public.turma_encontros (turma_id, data);

create table if not exists public.turma_presencas (
  encontro_id uuid not null references public.turma_encontros (id) on delete cascade,
  inscricao_id uuid not null references public.inscricoes (id) on delete cascade,
  presente boolean not null default true,
  marcado_em timestamptz not null default now(),
  primary key (encontro_id, inscricao_id)
);

create or replace function public.equipe_da_turma(p_turma uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (select 1 from public.turmas t where t.id = p_turma and public.pode_editar(t.paroquia_id));
$fn$;

revoke execute on function public.equipe_da_turma(uuid) from public, anon, authenticated;
grant execute on function public.equipe_da_turma(uuid) to authenticated;

create or replace function public.familia_da_turma(p_turma uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (select 1 from public.inscricoes i where i.turma_id = p_turma and i.usuario_id = auth.uid() and i.situacao <> 'cancelada');
$fn$;

revoke execute on function public.familia_da_turma(uuid) from public, anon, authenticated;
grant execute on function public.familia_da_turma(uuid) to authenticated;

alter table public.turma_encontros enable row level security;
alter table public.turma_presencas enable row level security;
revoke all on public.turma_encontros, public.turma_presencas from public, anon, authenticated;
grant select, insert, update, delete on public.turma_encontros to authenticated;
grant select, insert, update, delete on public.turma_presencas to authenticated;

drop policy if exists "equipe e familias veem os encontros" on public.turma_encontros;
create policy "equipe e familias veem os encontros" on public.turma_encontros for select to authenticated
  using (public.equipe_da_turma(turma_id) or public.familia_da_turma(turma_id));

drop policy if exists "equipe marca encontro" on public.turma_encontros;
create policy "equipe marca encontro" on public.turma_encontros for insert to authenticated
  with check (public.equipe_da_turma(turma_id));

drop policy if exists "equipe edita encontro" on public.turma_encontros;
create policy "equipe edita encontro" on public.turma_encontros for update to authenticated
  using (public.equipe_da_turma(turma_id)) with check (public.equipe_da_turma(turma_id));

drop policy if exists "equipe apaga encontro" on public.turma_encontros;
create policy "equipe apaga encontro" on public.turma_encontros for delete to authenticated
  using (public.equipe_da_turma(turma_id));

drop policy if exists "equipe e familia veem a presenca" on public.turma_presencas;
create policy "equipe e familia veem a presenca" on public.turma_presencas for select to authenticated
  using (
    exists (select 1 from public.turma_encontros e where e.id = encontro_id and public.equipe_da_turma(e.turma_id))
    or exists (select 1 from public.inscricoes i where i.id = inscricao_id and i.usuario_id = (select auth.uid()))
  );

drop policy if exists "equipe marca presenca" on public.turma_presencas;
create policy "equipe marca presenca" on public.turma_presencas for insert to authenticated
  with check (exists (select 1 from public.turma_encontros e join public.inscricoes i on i.turma_id = e.turma_id where e.id = encontro_id and i.id = inscricao_id and public.equipe_da_turma(e.turma_id)));

drop policy if exists "equipe muda presenca" on public.turma_presencas;
create policy "equipe muda presenca" on public.turma_presencas for update to authenticated
  using (exists (select 1 from public.turma_encontros e where e.id = encontro_id and public.equipe_da_turma(e.turma_id)))
  with check (exists (select 1 from public.turma_encontros e where e.id = encontro_id and public.equipe_da_turma(e.turma_id)));

drop policy if exists "equipe apaga presenca" on public.turma_presencas;
create policy "equipe apaga presenca" on public.turma_presencas for delete to authenticated
  using (exists (select 1 from public.turma_encontros e where e.id = encontro_id and public.equipe_da_turma(e.turma_id)));
