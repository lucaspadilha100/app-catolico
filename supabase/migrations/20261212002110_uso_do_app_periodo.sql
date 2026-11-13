create or replace function public.uso_do_app(p_dias integer)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_hoje date := (now() at time zone 'America/Sao_Paulo')::date;
  v_dias integer := least(greatest(coalesce(p_dias, 30), 1), 366);
begin
  if not public.e_admin() then
    raise exception 'só o administrador';
  end if;
  return jsonb_build_object(
    'hoje', v_hoje,
    'dias', coalesce((
      select jsonb_agg(jsonb_build_object('dia', u.dia, 'aparelhos', u.contagem) order by u.dia)
      from public.uso_diario u
      where u.evento = 'abertura' and u.dia > v_hoje - v_dias
    ), '[]'::jsonb),
    'oracoes', coalesce((
      select jsonb_object_agg(s.evento, s.total)
      from (
        select u.evento, sum(u.contagem)::int as total
        from public.uso_diario u
        where u.dia > v_hoje - v_dias and u.evento like 'reza-%'
        group by u.evento
      ) s
    ), '{}'::jsonb),
    'contas', (select count(*) from auth.users)
  );
end;
$fn$;

revoke execute on function public.uso_do_app(integer) from public, anon, authenticated;
grant execute on function public.uso_do_app(integer) to authenticated;
