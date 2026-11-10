create table if not exists public.sincronizacao (
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  chave text not null check (chave ~ '^santinho-[a-z0-9-]{1,40}$'),
  valor text not null check (char_length(valor) <= 2000000),
  atualizado_em timestamptz not null default now(),
  primary key (usuario_id, chave)
);

alter table public.sincronizacao enable row level security;

revoke all on public.sincronizacao from public, anon, authenticated;
grant select, insert, update, delete on public.sincronizacao to authenticated;

drop policy if exists "dono lê" on public.sincronizacao;
create policy "dono lê" on public.sincronizacao for select to authenticated
  using (usuario_id = (select auth.uid()));

drop policy if exists "dono grava" on public.sincronizacao;
create policy "dono grava" on public.sincronizacao for insert to authenticated
  with check (usuario_id = (select auth.uid()));

drop policy if exists "dono atualiza" on public.sincronizacao;
create policy "dono atualiza" on public.sincronizacao for update to authenticated
  using (usuario_id = (select auth.uid()))
  with check (usuario_id = (select auth.uid()));

drop policy if exists "dono apaga" on public.sincronizacao;
create policy "dono apaga" on public.sincronizacao for delete to authenticated
  using (usuario_id = (select auth.uid()));

create or replace function public.apagar_minha_conta()
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if auth.uid() is null then
    raise exception 'sem sessão';
  end if;
  delete from auth.users where id = auth.uid();
end
$fn$;

revoke execute on function public.apagar_minha_conta() from public, anon;
grant execute on function public.apagar_minha_conta() to authenticated;

create table if not exists public.uso_diario (
  dia date not null,
  evento text not null,
  contagem integer not null default 0,
  primary key (dia, evento)
);

alter table public.uso_diario enable row level security;
revoke all on public.uso_diario from public, anon, authenticated;

create or replace function public.contar_uso(p_evento text)
returns void
language sql
security definer
set search_path = ''
as $fn$
  insert into public.uso_diario (dia, evento, contagem)
  select (now() at time zone 'America/Sao_Paulo')::date, p_evento, 1
  where p_evento in ('abertura', 'conta', 'terco', 'novena', 'biblia', 'liturgia')
  on conflict (dia, evento) do update set contagem = public.uso_diario.contagem + 1;
$fn$;

revoke execute on function public.contar_uso(text) from public;
grant execute on function public.contar_uso(text) to anon, authenticated;
