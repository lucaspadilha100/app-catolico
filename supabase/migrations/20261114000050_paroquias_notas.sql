create table if not exists public.notas_paroquia (
  paroquia_id uuid primary key references public.paroquias (id) on delete cascade,
  texto text not null default '' check (char_length(texto) <= 4000),
  fontes text[] not null default '{}',
  confianca text not null default '' check (confianca in ('', 'alta', 'media')),
  atualizado_em timestamptz not null default now()
);

alter table public.notas_paroquia enable row level security;
revoke all on public.notas_paroquia from public, anon, authenticated;
grant select, insert, update on public.notas_paroquia to authenticated;

drop policy if exists "admin lê" on public.notas_paroquia;
create policy "admin lê" on public.notas_paroquia for select to authenticated using ((select public.e_admin()));

drop policy if exists "admin grava" on public.notas_paroquia;
create policy "admin grava" on public.notas_paroquia for insert to authenticated with check ((select public.e_admin()));

drop policy if exists "admin edita" on public.notas_paroquia;
create policy "admin edita" on public.notas_paroquia for update to authenticated using ((select public.e_admin())) with check ((select public.e_admin()));
