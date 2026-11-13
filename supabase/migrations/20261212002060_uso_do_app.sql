create or replace function public.uso_do_app()
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_hoje date := (now() at time zone 'America/Sao_Paulo')::date;
begin
  if not public.e_admin() then
    raise exception 'só o administrador';
  end if;
  return jsonb_build_object(
    'dias', coalesce((
      select jsonb_agg(jsonb_build_object('dia', u.dia, 'aparelhos', u.contagem) order by u.dia desc)
      from public.uso_diario u
      where u.evento = 'abertura' and u.dia > v_hoje - 30
    ), '[]'::jsonb),
    'semana', coalesce((
      select jsonb_object_agg(s.evento, s.total)
      from (
        select u.evento, sum(u.contagem)::int as total
        from public.uso_diario u
        where u.dia > v_hoje - 7
        group by u.evento
      ) s
    ), '{}'::jsonb),
    'contas', (select count(*) from auth.users)
  );
end;
$fn$;

revoke execute on function public.uso_do_app() from public, anon, authenticated;
grant execute on function public.uso_do_app() to authenticated;
