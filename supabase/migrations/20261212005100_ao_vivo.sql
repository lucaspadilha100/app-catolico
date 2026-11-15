alter table public.canais_video add column if not exists tv boolean not null default false;

create table if not exists public.transmissoes (
  canal_id text primary key references public.canais_video (id),
  video_id text check (video_id is null or video_id ~ '^[A-Za-z0-9_-]{11}$'),
  titulo text not null default '' check (char_length(titulo) <= 300),
  desde timestamptz,
  atualizado_em timestamptz not null default now()
);

alter table public.transmissoes enable row level security;
revoke all on public.transmissoes from public, anon, authenticated;
grant select on public.transmissoes to anon, authenticated;

drop policy if exists "todos leem as transmissoes" on public.transmissoes;
create policy "todos leem as transmissoes" on public.transmissoes for select to anon, authenticated using (true);

insert into public.canais_video (id, nome, youtube_id, regras, ordem, tv) values
  ('tv-aparecida', 'TV Aparecida', 'UCfYrK5JU5EznsnK3wQE7iIg', '[]', 10, true),
  ('cancao-nova', 'Canção Nova', 'UC6V9mqiVuzd-v3ozUfCtZFA', '[]', 11, true),
  ('tv-pai-eterno', 'TV Pai Eterno', 'UC84T8IgAYq-QPgD3aUPunCA', '[]', 12, true),
  ('rede-seculo-21', 'Rede Século 21', 'UCGm27Ndv8a-0yUJFVpRwkDQ', '[]', 13, true),
  ('vatican-news', 'Vatican News', 'UCGYSq4b4DXmtK4jyq6r-FYg', '[]', 14, true)
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
        '*/10 * * * *',
        $job$select net.http_post(url := 'https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/video', headers := '{"Content-Type": "application/json"}'::jsonb, body := '{}'::jsonb)$job$
      );
    exception when others then
      raise notice 'agendamento dos videos nao criado: %', sqlerrm;
    end;
  end if;
end
$cron$;
