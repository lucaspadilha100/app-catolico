create or replace function public.declarar_apoio()
returns date
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_usuario uuid := auth.uid();
  v_hoje date := (now() at time zone 'America/Sao_Paulo')::date;
  v_ate date;
begin
  if v_usuario is null then
    raise exception 'sem conta';
  end if;
  insert into public.apoiadores (usuario_id, ate) values (v_usuario, (v_hoje + interval '1 year')::date)
  on conflict (usuario_id) do update set ate = (greatest(public.apoiadores.ate, v_hoje) + interval '1 year')::date
  returning ate into v_ate;
  return v_ate;
end
$fn$;

revoke execute on function public.declarar_apoio() from public, anon, authenticated;
grant execute on function public.declarar_apoio() to authenticated;
