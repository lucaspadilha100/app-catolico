create table if not exists public.canais_video (
  id text primary key check (id ~ '^[a-z0-9-]{2,40}$'),
  nome text not null check (char_length(nome) between 2 and 80),
  youtube_id text not null unique check (youtube_id ~ '^UC[A-Za-z0-9_-]{22}$'),
  regras jsonb not null default '[]'::jsonb check (jsonb_typeof(regras) = 'array' and pg_column_size(regras) <= 4000),
  ativo boolean not null default true,
  ordem integer not null default 0
);

alter table public.canais_video enable row level security;
revoke all on public.canais_video from public, anon, authenticated;
grant select on public.canais_video to anon, authenticated;

drop policy if exists "todos leem os canais" on public.canais_video;
create policy "todos leem os canais" on public.canais_video for select to anon, authenticated using (ativo or (select public.e_admin()));

create table if not exists public.videos (
  id text primary key check (id ~ '^[A-Za-z0-9_-]{11}$'),
  canal_id text not null references public.canais_video (id),
  tipo text not null check (tipo in ('homilia', 'missa', 'terco')),
  titulo text not null check (char_length(titulo) between 1 and 300),
  dia date not null,
  referencia text not null default '' check (char_length(referencia) <= 60),
  publicado_em timestamptz not null,
  embutivel boolean not null default true,
  escondido boolean not null default false,
  criado_em timestamptz not null default now()
);

alter table public.videos add column if not exists embutivel boolean not null default true;

create index if not exists videos_por_dia on public.videos (dia desc, publicado_em desc);

alter table public.videos enable row level security;
revoke all on public.videos from public, anon, authenticated;
grant select on public.videos to anon, authenticated;

drop policy if exists "todos leem os videos" on public.videos;
create policy "todos leem os videos" on public.videos for select to anon, authenticated using (not escondido or (select public.e_admin()));

create or replace function public.esconder_video(p_id text, p_escondido boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if not public.e_admin() then
    raise exception 'só o administrador esconde vídeos';
  end if;
  update public.videos set escondido = coalesce(p_escondido, true) where id = p_id;
end
$fn$;

revoke execute on function public.esconder_video(text, boolean) from public, anon, authenticated;
grant execute on function public.esconder_video(text, boolean) to authenticated;

insert into public.canais_video (id, nome, youtube_id, regras, ordem) values
  ('frei-gilson', 'Frei Gilson', 'UCbh6_TmFnAJLI56aAQeD3qw',
   '[{"tipo": "homilia", "contem": ["Meditação da Palavra"]}, {"tipo": "terco", "contem": ["Santo Rosário", "Rosário da Vitória"], "exigeData": true}]', 1),
  ('padre-paulo-ricardo', 'Padre Paulo Ricardo', 'UCP6L9TPS3pHccVRiDB_cvqQ',
   '[{"tipo": "homilia", "contem": ["Homilia Diária", "Homilia Dominical"], "exigeData": true}, {"tipo": "terco", "contem": ["Reze o terço hoje"], "exigeData": true}]', 2),
  ('padre-chrystian-shankar', 'Padre Chrystian Shankar', 'UCor5S_iO5hSl4WrRp5ROxVQ',
   '[{"tipo": "missa", "contem": ["SANTA MISSA"], "exigeData": true}]', 3)
on conflict (id) do nothing;

do $cron$
begin
  if exists (select 1 from pg_available_extensions where name = 'pg_cron')
    and exists (select 1 from pg_available_extensions where name = 'pg_net') then
    begin
      create extension if not exists pg_cron;
      create extension if not exists pg_net;
      if exists (select 1 from cron.job where jobname = 'videos') then
        perform cron.unschedule('videos');
      end if;
      perform cron.schedule(
        'videos',
        '7,37 * * * *',
        $job$select net.http_post(url := 'https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/videos', headers := '{"Content-Type": "application/json"}'::jsonb, body := '{}'::jsonb)$job$
      );
    exception when others then
      raise notice 'agendamento dos videos nao criado: %', sqlerrm;
    end;
  end if;
end
$cron$;
