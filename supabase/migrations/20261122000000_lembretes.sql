create table if not exists public.lembrete_inscricoes (
  endpoint text primary key check (endpoint ~ '^https://' and char_length(endpoint) <= 1000),
  p256dh text not null check (char_length(p256dh) between 20 and 200),
  auth text not null check (char_length(auth) between 8 and 100),
  usuario_id uuid references auth.users (id) on delete cascade,
  fuso text not null default 'America/Sao_Paulo' check (char_length(fuso) <= 60),
  lembretes jsonb not null default '{}'::jsonb check (jsonb_typeof(lembretes) = 'object' and pg_column_size(lembretes) <= 6000),
  enviados jsonb not null default '{}'::jsonb,
  falhas integer not null default 0,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

alter table public.lembrete_inscricoes enable row level security;
revoke all on public.lembrete_inscricoes from public, anon, authenticated;

create or replace function public.salvar_lembretes(p_endpoint text, p_p256dh text, p_auth text, p_fuso text, p_lembretes jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_fuso text := coalesce(nullif(btrim(p_fuso), ''), 'America/Sao_Paulo');
begin
  if not exists (select 1 from pg_catalog.pg_timezone_names z where z.name = v_fuso) then
    v_fuso := 'America/Sao_Paulo';
  end if;
  insert into public.lembrete_inscricoes (endpoint, p256dh, auth, usuario_id, fuso, lembretes)
  values (p_endpoint, p_p256dh, p_auth, auth.uid(), v_fuso, coalesce(p_lembretes, '{}'::jsonb))
  on conflict (endpoint) do update
    set p256dh = excluded.p256dh,
        auth = excluded.auth,
        usuario_id = coalesce(excluded.usuario_id, public.lembrete_inscricoes.usuario_id),
        fuso = excluded.fuso,
        lembretes = excluded.lembretes,
        falhas = 0,
        atualizado_em = now();
end
$fn$;

revoke execute on function public.salvar_lembretes(text, text, text, text, jsonb) from public, anon, authenticated;
grant execute on function public.salvar_lembretes(text, text, text, text, jsonb) to anon, authenticated;

create or replace function public.remover_lembretes(p_endpoint text)
returns void
language sql
security definer
set search_path = ''
as $fn$
  delete from public.lembrete_inscricoes where endpoint = p_endpoint;
$fn$;

revoke execute on function public.remover_lembretes(text) from public, anon, authenticated;
grant execute on function public.remover_lembretes(text) to anon, authenticated;

do $cron$
begin
  if exists (select 1 from pg_available_extensions where name = 'pg_cron')
    and exists (select 1 from pg_available_extensions where name = 'pg_net') then
    begin
      create extension if not exists pg_cron;
      create extension if not exists pg_net;
      if exists (select 1 from cron.job where jobname = 'lembretes') then
        perform cron.unschedule('lembretes');
      end if;
      perform cron.schedule(
        'lembretes',
        '*/5 * * * *',
        $job$select net.http_post(url := 'https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/lembretes', headers := '{"Content-Type": "application/json"}'::jsonb, body := '{}'::jsonb)$job$
      );
    exception when others then
      raise notice 'agendamento dos lembretes nao criado: %', sqlerrm;
    end;
  end if;
end
$cron$;
