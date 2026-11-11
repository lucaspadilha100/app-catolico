alter table public.intencoes add column if not exists graca_em timestamptz;
alter table public.intencoes add column if not exists graca_texto text not null default '';
alter table public.intencoes add column if not exists graca_avisada boolean not null default false;
alter table public.intencoes drop constraint if exists intencoes_graca_texto_check;
alter table public.intencoes add constraint intencoes_graca_texto_check check (char_length(graca_texto) <= 140);

create or replace function public.intencao_avisos_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if current_user <> 'service_role' then
    new.avisado := old.avisado;
    new.avisado_em := old.avisado_em;
    new.graca_avisada := old.graca_avisada;
  end if;
  return new;
end
$fn$;

revoke execute on function public.intencao_avisos_protege() from public, anon, authenticated;

create or replace function public.graca_alcancada(p_intencao uuid, p_texto text)
returns void
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  update public.intencoes
  set graca_em = coalesce(graca_em, now()),
      graca_texto = left(btrim(coalesce(p_texto, '')), 140),
      expira_em = greatest(expira_em, now() + interval '7 days')
  where id = p_intencao and autor_id = auth.uid();
  if not found then
    raise exception 'sem permissao';
  end if;
end
$fn$;

revoke execute on function public.graca_alcancada(uuid, text) from public, anon, authenticated;
grant execute on function public.graca_alcancada(uuid, text) to authenticated;

create or replace function public.gracas_a_avisar()
returns table (id uuid, nome text, graca_texto text, quem_rezou uuid[])
language sql
stable
security definer
set search_path = ''
as $fn$
  select i.id, i.nome, i.graca_texto, coalesce((select array_agg(o.usuario_id) from public.intencao_oracoes o where o.intencao_id = i.id), '{}')
  from public.intencoes i
  where i.graca_em is not null and not i.graca_avisada
  order by i.graca_em
  limit 100;
$fn$;

revoke execute on function public.gracas_a_avisar() from public, anon, authenticated;
grant execute on function public.gracas_a_avisar() to service_role;
