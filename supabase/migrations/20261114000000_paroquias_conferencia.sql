alter table public.paroquias add column if not exists conferida_em timestamptz;

create or replace function public.paroquia_protege()
returns trigger
language plpgsql
set search_path = ''
as $fn$
begin
  if not public.e_admin() then
    new.verificada := old.verificada;
    new.ativa := old.ativa;
    new.conferida_em := old.conferida_em;
    new.fonte := old.fonte;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.paroquia_protege() from public, anon, authenticated;
