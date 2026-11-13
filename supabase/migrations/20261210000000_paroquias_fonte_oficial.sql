-- Pedido do dono (13/11/2026): o que veio de fonte oficial (página da
-- arquidiocese ou da diocese) não precisa esperar conferência manual.

alter table public.paroquias add column if not exists fonte_oficial boolean not null default false;

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
    new.fonte_oficial := old.fonte_oficial;
    new.plano := old.plano;
    if (new.pix_chave, new.pix_nome, new.pix_cidade) is distinct from (old.pix_chave, old.pix_nome, old.pix_cidade) then
      new.pix_conferido := false;
    else
      new.pix_conferido := old.pix_conferido;
    end if;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.paroquia_protege() from public, anon, authenticated;
