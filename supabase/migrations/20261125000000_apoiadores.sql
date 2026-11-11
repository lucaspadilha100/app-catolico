create table if not exists public.apoiadores (
  usuario_id uuid primary key references auth.users (id) on delete cascade,
  ate date not null,
  desde timestamptz not null default now()
);

alter table public.apoiadores enable row level security;
revoke all on public.apoiadores from public, anon, authenticated;
grant select on public.apoiadores to authenticated;

drop policy if exists "apoiador ve o seu" on public.apoiadores;
create policy "apoiador ve o seu" on public.apoiadores for select to authenticated
  using (usuario_id = (select auth.uid()) or (select public.e_admin()));

create table if not exists public.apoios_avisados (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  nome_no_pix text not null check (char_length(btrim(nome_no_pix)) between 2 and 80),
  valor numeric(10, 2) check (valor > 0 and valor <= 100000),
  pago_em date not null default current_date,
  situacao text not null default 'pendente' check (situacao in ('pendente', 'confirmado', 'descartado')),
  criado_em timestamptz not null default now(),
  revisado_em timestamptz
);

create index if not exists apoios_pendentes on public.apoios_avisados (criado_em) where situacao = 'pendente';
create index if not exists apoios_do_usuario on public.apoios_avisados (usuario_id);

alter table public.apoios_avisados enable row level security;
revoke all on public.apoios_avisados from public, anon, authenticated;
grant select, insert on public.apoios_avisados to authenticated;

drop policy if exists "quem avisa ve o seu" on public.apoios_avisados;
create policy "quem avisa ve o seu" on public.apoios_avisados for select to authenticated
  using (usuario_id = (select auth.uid()) or (select public.e_admin()));

drop policy if exists "quem tem conta avisa" on public.apoios_avisados;
create policy "quem tem conta avisa" on public.apoios_avisados for insert to authenticated
  with check (usuario_id = (select auth.uid()));

create or replace function public.apoio_avisado_novo()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  new.situacao := 'pendente';
  new.revisado_em := null;
  new.criado_em := now();
  if new.pago_em > (now() at time zone 'America/Sao_Paulo')::date or new.pago_em < (now() at time zone 'America/Sao_Paulo')::date - 90 then
    raise exception 'data invalida';
  end if;
  if (select count(*) from public.apoios_avisados a where a.usuario_id = new.usuario_id and a.situacao = 'pendente') >= 3 then
    raise exception 'limite de avisos';
  end if;
  return new;
end
$fn$;

revoke execute on function public.apoio_avisado_novo() from public, anon, authenticated;

drop trigger if exists trg_apoio_avisado_novo on public.apoios_avisados;
create trigger trg_apoio_avisado_novo before insert on public.apoios_avisados
  for each row execute function public.apoio_avisado_novo();

create or replace function public.apoios_para_conferir()
returns table (id uuid, nome_no_pix text, valor numeric, pago_em date, email text, apoiador_ate date, criado_em timestamptz)
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
    select a.id, a.nome_no_pix, a.valor, a.pago_em, u.email::text, s.ate, a.criado_em
    from public.apoios_avisados a
    join auth.users u on u.id = a.usuario_id
    left join public.apoiadores s on s.usuario_id = a.usuario_id
    where a.situacao = 'pendente'
    order by a.criado_em
    limit 100;
end
$fn$;

revoke execute on function public.apoios_para_conferir() from public, anon, authenticated;
grant execute on function public.apoios_para_conferir() to authenticated;

create or replace function public.revisar_apoio(p_aviso uuid, p_confirmar boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v public.apoios_avisados;
  v_hoje date := (now() at time zone 'America/Sao_Paulo')::date;
begin
  if not public.e_admin() then
    raise exception 'sem permissao';
  end if;
  select * into v from public.apoios_avisados where id = p_aviso and situacao = 'pendente';
  if v.id is null then
    return;
  end if;
  if p_confirmar then
    insert into public.apoiadores (usuario_id, ate) values (v.usuario_id, (v_hoje + interval '1 year')::date)
    on conflict (usuario_id) do update set ate = (greatest(public.apoiadores.ate, v_hoje) + interval '1 year')::date;
  end if;
  update public.apoios_avisados set situacao = case when p_confirmar then 'confirmado' else 'descartado' end, revisado_em = now() where id = p_aviso;
end
$fn$;

revoke execute on function public.revisar_apoio(uuid, boolean) from public, anon, authenticated;
grant execute on function public.revisar_apoio(uuid, boolean) to authenticated;
