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
        $job$select net.http_post(url := 'https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/video', headers := '{"Content-Type": "application/json"}'::jsonb, body := '{}'::jsonb)$job$
      );
    exception when others then
      raise notice 'agendamento dos videos nao criado: %', sqlerrm;
    end;
  end if;
end
$cron$;
