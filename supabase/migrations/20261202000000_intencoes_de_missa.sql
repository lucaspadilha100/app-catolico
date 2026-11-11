alter table public.paroquias add column if not exists aceita_intencoes boolean not null default false;

create table if not exists public.intencoes_de_missa (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  tipo text not null check (tipo in ('falecido', 'aniversario', 'acao_de_gracas', 'saude', 'outra')),
  nome text not null check (char_length(btrim(nome)) between 2 and 120),
  texto text not null default '' check (char_length(texto) <= 300),
  data date not null,
  hora time,
  pedido_por text not null default '' check (char_length(pedido_por) <= 80),
  situacao text not null default 'recebida' check (situacao in ('recebida', 'confirmada', 'recusada', 'cancelada')),
  criado_em timestamptz not null default now()
);

create index if not exists intencoes_de_missa_da_paroquia on public.intencoes_de_missa (paroquia_id, data, hora);
create index if not exists intencoes_de_missa_do_usuario on public.intencoes_de_missa (usuario_id, data);

alter table public.intencoes_de_missa enable row level security;
revoke all on public.intencoes_de_missa from public, anon, authenticated;
grant select, insert, update on public.intencoes_de_missa to authenticated;

drop policy if exists "quem pede e a equipe veem" on public.intencoes_de_missa;
create policy "quem pede e a equipe veem" on public.intencoes_de_missa for select to authenticated
  using (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id));

drop policy if exists "quem tem conta pede a intencao" on public.intencoes_de_missa;
create policy "quem tem conta pede a intencao" on public.intencoes_de_missa for insert to authenticated
  with check (usuario_id = (select auth.uid()));

drop policy if exists "quem pede e a equipe mudam a situacao" on public.intencoes_de_missa;
create policy "quem pede e a equipe mudam a situacao" on public.intencoes_de_missa for update to authenticated
  using (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id))
  with check (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id));

create or replace function public.intencao_de_missa_nova()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if not exists (select 1 from public.paroquias p where p.id = new.paroquia_id and p.ativa and p.aceita_intencoes) then
    raise exception 'paroquia nao recebe intencoes';
  end if;
  if new.data < (now() at time zone 'America/Sao_Paulo')::date or new.data > (now() at time zone 'America/Sao_Paulo')::date + 120 then
    raise exception 'data invalida';
  end if;
  if (select count(*) from public.intencoes_de_missa i where i.usuario_id = new.usuario_id and i.criado_em > now() - interval '1 day') >= 15 then
    raise exception 'limite de intencoes';
  end if;
  new.situacao := 'recebida';
  new.criado_em := now();
  return new;
end
$fn$;

revoke execute on function public.intencao_de_missa_nova() from public, anon, authenticated;

drop trigger if exists trg_intencao_de_missa_nova on public.intencoes_de_missa;
create trigger trg_intencao_de_missa_nova before insert on public.intencoes_de_missa
  for each row execute function public.intencao_de_missa_nova();

create or replace function public.intencao_de_missa_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
declare
  v_situacao text := new.situacao;
begin
  new := old;
  if public.pode_editar(old.paroquia_id) then
    new.situacao := v_situacao;
  elsif v_situacao = 'cancelada' and old.situacao = 'recebida' then
    new.situacao := 'cancelada';
  end if;
  return new;
end
$fn$;

revoke execute on function public.intencao_de_missa_protege() from public, anon, authenticated;

drop trigger if exists trg_intencao_de_missa_protege on public.intencoes_de_missa;
create trigger trg_intencao_de_missa_protege before update on public.intencoes_de_missa
  for each row execute function public.intencao_de_missa_protege();
