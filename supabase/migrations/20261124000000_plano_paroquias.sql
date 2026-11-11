alter table public.paroquias add column if not exists pix_chave text not null default '';
alter table public.paroquias add column if not exists pix_nome text not null default '';
alter table public.paroquias add column if not exists pix_cidade text not null default '';
alter table public.paroquias add column if not exists pix_conferido boolean not null default false;
alter table public.paroquias drop constraint if exists paroquias_pix_check;
alter table public.paroquias add constraint paroquias_pix_check check (
  char_length(pix_chave) <= 77
  and pix_chave ~ '^(|\d{11}|\d{14}|\+55\d{10,11}|[^@\s]+@[^@\s]+\.[^@\s]+|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$'
  and char_length(pix_nome) <= 25
  and char_length(pix_cidade) <= 15
);

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
    if (new.pix_chave, new.pix_nome, new.pix_cidade) is distinct from (old.pix_chave, old.pix_nome, old.pix_cidade) then
      new.pix_conferido := false;
    else
      new.pix_conferido := old.pix_conferido;
    end if;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.paroquia_protege() from public, anon, authenticated;

create table if not exists public.turmas (
  id uuid primary key default gen_random_uuid(),
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  tipo text not null check (tipo in ('batismo', 'primeira_comunhao', 'crisma', 'catequese', 'noivos', 'outro')),
  titulo text not null check (char_length(btrim(titulo)) between 3 and 120),
  descricao text not null default '' check (char_length(descricao) <= 1500),
  inicio date,
  encerra date,
  vagas integer check (vagas between 1 and 5000),
  aberta boolean not null default true,
  criado_em timestamptz not null default now()
);

create index if not exists turmas_da_paroquia on public.turmas (paroquia_id, criado_em desc);

alter table public.turmas enable row level security;
revoke all on public.turmas from public, anon, authenticated;
grant select on public.turmas to anon, authenticated;
grant insert, update, delete on public.turmas to authenticated;

create or replace function public.tem_plano(p_paroquia uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select exists (select 1 from public.paroquias p where p.id = p_paroquia and p.ativa and p.plano <> 'gratis');
$fn$;

revoke execute on function public.tem_plano(uuid) from public, anon, authenticated;
grant execute on function public.tem_plano(uuid) to authenticated;

drop policy if exists "todos veem as turmas" on public.turmas;
create policy "todos veem as turmas" on public.turmas for select to anon, authenticated
  using (exists (select 1 from public.paroquias p where p.id = paroquia_id and p.ativa and p.plano <> 'gratis'));

drop policy if exists "equipe abre turma" on public.turmas;
create policy "equipe abre turma" on public.turmas for insert to authenticated
  with check (public.pode_editar(paroquia_id) and public.tem_plano(paroquia_id));

drop policy if exists "equipe edita turma" on public.turmas;
create policy "equipe edita turma" on public.turmas for update to authenticated
  using (public.pode_editar(paroquia_id)) with check (public.pode_editar(paroquia_id));

drop policy if exists "equipe apaga turma" on public.turmas;
create policy "equipe apaga turma" on public.turmas for delete to authenticated
  using (public.pode_editar(paroquia_id));

create or replace function public.turma_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  new.paroquia_id := old.paroquia_id;
  new.criado_em := old.criado_em;
  return new;
end
$fn$;

revoke execute on function public.turma_protege() from public, anon, authenticated;

drop trigger if exists trg_turma_protege on public.turmas;
create trigger trg_turma_protege before update on public.turmas
  for each row execute function public.turma_protege();

create table if not exists public.inscricoes (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references public.turmas (id) on delete restrict,
  paroquia_id uuid not null references public.paroquias (id) on delete cascade,
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 2 and 120),
  nascimento date check (nascimento between '1900-01-01' and '2100-01-01'),
  responsavel text not null default '' check (char_length(responsavel) <= 120),
  telefone text not null check (telefone ~ '^\d{10,13}$'),
  observacao text not null default '' check (char_length(observacao) <= 500),
  situacao text not null default 'recebida' check (situacao in ('recebida', 'confirmada', 'cancelada')),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create index if not exists inscricoes_da_turma on public.inscricoes (turma_id, criado_em);
create index if not exists inscricoes_do_usuario on public.inscricoes (usuario_id);
create index if not exists inscricoes_da_paroquia on public.inscricoes (paroquia_id);

alter table public.inscricoes enable row level security;
revoke all on public.inscricoes from public, anon, authenticated;
grant select, insert, update on public.inscricoes to authenticated;

drop policy if exists "quem se inscreve e a equipe veem" on public.inscricoes;
create policy "quem se inscreve e a equipe veem" on public.inscricoes for select to authenticated
  using (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id));

drop policy if exists "quem tem conta se inscreve" on public.inscricoes;
create policy "quem tem conta se inscreve" on public.inscricoes for insert to authenticated
  with check (usuario_id = (select auth.uid()));

drop policy if exists "quem se inscreve e a equipe mudam a situacao" on public.inscricoes;
create policy "quem se inscreve e a equipe mudam a situacao" on public.inscricoes for update to authenticated
  using (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id))
  with check (usuario_id = (select auth.uid()) or public.pode_editar(paroquia_id));

create or replace function public.inscricao_nova()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  t public.turmas;
begin
  select * into t from public.turmas where id = new.turma_id;
  if t.id is null or not t.aberta or not exists (select 1 from public.paroquias p where p.id = t.paroquia_id and p.ativa and p.plano <> 'gratis') then
    raise exception 'inscricoes encerradas';
  end if;
  if t.encerra is not null and t.encerra < (now() at time zone 'America/Sao_Paulo')::date then
    raise exception 'inscricoes encerradas';
  end if;
  if t.vagas is not null and (select count(*) from public.inscricoes i where i.turma_id = t.id and i.situacao <> 'cancelada') >= t.vagas then
    raise exception 'sem vagas';
  end if;
  if (select count(*) from public.inscricoes i where i.usuario_id = new.usuario_id and i.criado_em > now() - interval '1 day') >= 10 then
    raise exception 'limite de inscricoes';
  end if;
  new.paroquia_id := t.paroquia_id;
  new.situacao := 'recebida';
  new.criado_em := now();
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.inscricao_nova() from public, anon, authenticated;

drop trigger if exists trg_inscricao_nova on public.inscricoes;
create trigger trg_inscricao_nova before insert on public.inscricoes
  for each row execute function public.inscricao_nova();

create or replace function public.inscricao_protege()
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
  elsif v_situacao = 'cancelada' then
    new.situacao := 'cancelada';
  end if;
  if new.situacao is distinct from old.situacao then
    new.atualizado_em := now();
  end if;
  return new;
end
$fn$;

revoke execute on function public.inscricao_protege() from public, anon, authenticated;

drop trigger if exists trg_inscricao_protege on public.inscricoes;
create trigger trg_inscricao_protege before update on public.inscricoes
  for each row execute function public.inscricao_protege();

create or replace function public.turmas_da_paroquia(p_paroquia uuid)
returns table (id uuid, tipo text, titulo text, descricao text, inicio date, encerra date, vagas integer, aberta boolean, inscritos integer)
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_equipe boolean := auth.uid() is not null and public.pode_editar(p_paroquia);
  v_hoje date := (now() at time zone 'America/Sao_Paulo')::date;
begin
  if not v_equipe and not exists (select 1 from public.paroquias p where p.id = p_paroquia and p.ativa and p.plano <> 'gratis') then
    return;
  end if;
  return query
    select t.id, t.tipo, t.titulo, t.descricao, t.inicio, t.encerra, t.vagas, t.aberta,
      (select count(*)::integer from public.inscricoes i where i.turma_id = t.id and i.situacao <> 'cancelada')
    from public.turmas t
    where t.paroquia_id = p_paroquia
      and (v_equipe or (t.aberta and (t.encerra is null or t.encerra >= v_hoje)))
    order by t.aberta desc, t.criado_em desc
    limit 50;
end
$fn$;

revoke execute on function public.turmas_da_paroquia(uuid) from public, anon, authenticated;
grant execute on function public.turmas_da_paroquia(uuid) to anon, authenticated;

alter table public.publicacoes_paroquia add column if not exists alcance integer not null default 0;

create or replace function public.publicacao_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    new.notificada := false;
    new.alcance := 0;
    new.criado_em := now();
    new.autor_id := auth.uid();
    if (select count(*) from public.publicacoes_paroquia x where x.paroquia_id = new.paroquia_id and x.criado_em > now() - interval '1 day') >= 10 then
      raise exception 'limite de publicacoes';
    end if;
    return new;
  end if;
  if current_user <> 'service_role' then
    new.notificada := old.notificada;
    new.alcance := old.alcance;
  end if;
  new.paroquia_id := old.paroquia_id;
  new.criado_em := old.criado_em;
  new.autor_id := old.autor_id;
  return new;
end
$fn$;

revoke execute on function public.publicacao_protege() from public, anon, authenticated;

create or replace function public.numeros_da_paroquia(p_paroquia uuid)
returns table (recebem_avisos integer, contas_que_seguem integer, publicacoes_30_dias integer, alcance_30_dias integer, inscricoes_recebidas integer, inscricoes_confirmadas integer)
language plpgsql
stable
security definer
set search_path = ''
as $fn$
begin
  if not public.pode_editar(p_paroquia) then
    return;
  end if;
  return query select
    (select count(*)::integer from public.lembrete_inscricoes l where l.lembretes -> 'igrejas' ? p_paroquia::text and coalesce((l.lembretes ->> 'avisos')::boolean, true)),
    (select count(distinct s.usuario_id)::integer from public.sincronizacao s
      where (s.chave = 'santinho-igrejas-seguidas' and s.valor like '%' || p_paroquia::text || '%')
         or (s.chave = 'santinho-preferencias' and s.valor like '%"minhaParoquia":"' || p_paroquia::text || '"%')),
    (select count(*)::integer from public.publicacoes_paroquia x where x.paroquia_id = p_paroquia and x.criado_em > now() - interval '30 days'),
    (select coalesce(sum(x.alcance), 0)::integer from public.publicacoes_paroquia x where x.paroquia_id = p_paroquia and x.criado_em > now() - interval '30 days'),
    (select count(*)::integer from public.inscricoes i where i.paroquia_id = p_paroquia and i.situacao = 'recebida'),
    (select count(*)::integer from public.inscricoes i where i.paroquia_id = p_paroquia and i.situacao = 'confirmada');
end
$fn$;

revoke execute on function public.numeros_da_paroquia(uuid) from public, anon, authenticated;
grant execute on function public.numeros_da_paroquia(uuid) to authenticated;

create or replace function public.pix_para_conferir()
returns table (id uuid, nome text, cidade text, pix_chave text, pix_nome text, pix_cidade text)
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
    select p.id, p.nome, p.cidade, p.pix_chave, p.pix_nome, p.pix_cidade
    from public.paroquias p
    where p.pix_chave <> '' and not p.pix_conferido
    order by p.atualizado_em
    limit 100;
end
$fn$;

revoke execute on function public.pix_para_conferir() from public, anon, authenticated;
grant execute on function public.pix_para_conferir() to authenticated;
