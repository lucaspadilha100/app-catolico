alter table public.apoios_avisados alter column pago_em set default ((now() at time zone 'America/Sao_Paulo')::date);
