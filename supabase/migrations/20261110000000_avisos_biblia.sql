create table public.avisos_biblia (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  livro text not null check (livro ~ '^[1-3A-Z]{3}$'),
  capitulo smallint not null check (capitulo between 1 and 150),
  versiculo smallint not null check (versiculo between 1 and 200),
  arquivo text not null check (char_length(arquivo) <= 40),
  texto_versiculo text not null check (char_length(texto_versiculo) <= 2000),
  tipo text not null check (tipo in ('palavra', 'sentido', 'falta', 'outro')),
  comentario text not null default '' check (char_length(comentario) <= 1000),
  usuario_id uuid default auth.uid() references auth.users (id) on delete set null,
  resolvido_em timestamptz
);

create index avisos_biblia_abertos on public.avisos_biblia (livro, capitulo, versiculo) where resolvido_em is null;

alter table public.avisos_biblia enable row level security;

revoke all on public.avisos_biblia from public, anon, authenticated;
grant insert (livro, capitulo, versiculo, arquivo, texto_versiculo, tipo, comentario) on public.avisos_biblia to anon, authenticated;

create policy "qualquer pessoa avisa erro"
  on public.avisos_biblia for insert to anon, authenticated
  with check (resolvido_em is null and (usuario_id is null or usuario_id = auth.uid()));
