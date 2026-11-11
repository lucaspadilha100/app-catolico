alter table public.intencoes add column if not exists avisado integer not null default 0;
alter table public.intencoes add column if not exists avisado_em timestamptz;

create index if not exists intencoes_a_avisar on public.intencoes (avisado_em nulls first) where rezaram > avisado;

create or replace function public.intencao_nova()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  new.rezaram := 0;
  new.denuncias := 0;
  new.oculta := false;
  new.avisado := 0;
  new.avisado_em := null;
  new.criado_em := now();
  new.expira_em := now() + interval '30 days';
  if new.grupo_id is null and (select count(*) from public.intencoes i where i.autor_id = new.autor_id and i.grupo_id is null and i.expira_em > now()) >= 3 then
    raise exception 'limite de pedidos';
  end if;
  if (select count(*) from public.intencoes i where i.autor_id = new.autor_id and i.criado_em > now() - interval '1 day') >= 10 then
    raise exception 'limite de pedidos';
  end if;
  return new;
end
$fn$;

revoke execute on function public.intencao_nova() from public, anon, authenticated;

create or replace function public.intencao_avisos_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if current_user <> 'service_role' then
    new.avisado := old.avisado;
    new.avisado_em := old.avisado_em;
  end if;
  return new;
end
$fn$;

revoke execute on function public.intencao_avisos_protege() from public, anon, authenticated;

drop trigger if exists trg_intencao_avisos_protege on public.intencoes;
create trigger trg_intencao_avisos_protege before update on public.intencoes
  for each row execute function public.intencao_avisos_protege();

create or replace function public.intencoes_a_avisar()
returns table (id uuid, autor_id uuid, nome text, novas integer, rezaram integer)
language sql
stable
security definer
set search_path = ''
as $fn$
  select i.id, i.autor_id, i.nome, i.rezaram - i.avisado, i.rezaram
  from public.intencoes i
  where i.rezaram > i.avisado and (i.avisado_em is null or i.avisado_em < now() - interval '20 hours')
  order by i.avisado_em nulls first
  limit 300;
$fn$;

revoke execute on function public.intencoes_a_avisar() from public, anon, authenticated;
grant execute on function public.intencoes_a_avisar() to service_role;
