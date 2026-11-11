create or replace function public.contar_uso(p_evento text)
returns void
language sql
security definer
set search_path = ''
as $fn$
  insert into public.uso_diario (dia, evento, contagem)
  select (now() at time zone 'America/Sao_Paulo')::date, p_evento, 1
  where p_evento in ('abertura', 'conta', 'terco', 'novena', 'biblia', 'liturgia', 'reza-terco', 'reza-misericordia', 'reza-agora')
  on conflict (dia, evento) do update set contagem = public.uso_diario.contagem + 1;
$fn$;

revoke execute on function public.contar_uso(text) from public, anon, authenticated;
grant execute on function public.contar_uso(text) to anon, authenticated;

create or replace function public.rezando_hoje()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $fn$
  select jsonb_build_object(
    'terco', coalesce(sum(u.contagem) filter (where u.evento = 'reza-terco'), 0),
    'misericordia', coalesce(sum(u.contagem) filter (where u.evento = 'reza-misericordia'), 0),
    'agora', coalesce(sum(u.contagem) filter (where u.evento = 'reza-agora'), 0)
  )
  from public.uso_diario u
  where u.dia = (now() at time zone 'America/Sao_Paulo')::date and u.evento like 'reza-%';
$fn$;

revoke execute on function public.rezando_hoje() from public, anon, authenticated;
grant execute on function public.rezando_hoje() to anon, authenticated;
