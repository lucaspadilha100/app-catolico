alter table public.roteiros add column if not exists paroquia_id uuid references public.paroquias (id) on delete set null;

create index if not exists roteiros_paroquia on public.roteiros (paroquia_id, data) where paroquia_id is not null;

create or replace function public.publica_na_paroquia(p_paroquia uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select public.pode_editar(p_paroquia)
    or exists (select 1 from public.ministerios m where m.paroquia_id = p_paroquia and m.ativo and public.coordena_ministerio(m.id));
$fn$;

revoke execute on function public.publica_na_paroquia(uuid) from public, anon, authenticated;
grant execute on function public.publica_na_paroquia(uuid) to authenticated;

create or replace function public.mexe_no_roteiro(p_dono uuid, p_terco uuid, p_paroquia uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select p_dono = auth.uid() or public.e_admin()
    or (p_terco is not null and public.conduz_o_terco(p_terco))
    or (p_paroquia is not null and public.publica_na_paroquia(p_paroquia));
$fn$;

revoke execute on function public.mexe_no_roteiro(uuid, uuid, uuid) from public, anon, authenticated;
grant execute on function public.mexe_no_roteiro(uuid, uuid, uuid) to authenticated;

drop policy if exists "quem edita ve o roteiro" on public.roteiros;
create policy "quem edita ve o roteiro" on public.roteiros for select to authenticated
  using (dono_id = (select auth.uid()) or public.mexe_no_roteiro(dono_id, terco_id, paroquia_id));

drop policy if exists "quem tem conta cria roteiro" on public.roteiros;
create policy "quem tem conta cria roteiro" on public.roteiros for insert to authenticated
  with check (
    dono_id = (select auth.uid())
    and (terco_id is null or public.conduz_o_terco(terco_id))
    and (paroquia_id is null or public.publica_na_paroquia(paroquia_id))
  );

drop policy if exists "quem conduz edita o roteiro" on public.roteiros;
create policy "quem conduz edita o roteiro" on public.roteiros for update to authenticated
  using (public.mexe_no_roteiro(dono_id, terco_id, paroquia_id))
  with check (public.mexe_no_roteiro(dono_id, terco_id, paroquia_id));

create or replace function public.roteiro_protege()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if tg_op = 'INSERT' then
    new.codigo := substr(replace(gen_random_uuid()::text, '-', ''), 1, 10);
    new.criado_em := now();
    new.ao_vivo := false;
    new.passo := 0;
    new.conta := 0;
    if (select count(*) from public.roteiros r where r.dono_id = new.dono_id) >= 100 then
      raise exception 'limite de roteiros';
    end if;
  else
    new.id := old.id;
    new.codigo := old.codigo;
    new.dono_id := old.dono_id;
    new.criado_em := old.criado_em;
    if new.terco_id is distinct from old.terco_id and new.terco_id is not null and not public.conduz_o_terco(new.terco_id) then
      new.terco_id := old.terco_id;
    end if;
    if new.paroquia_id is distinct from old.paroquia_id and new.paroquia_id is not null and not public.publica_na_paroquia(new.paroquia_id) then
      new.paroquia_id := old.paroquia_id;
    end if;
  end if;
  new.atualizado_em := now();
  return new;
end
$fn$;

revoke execute on function public.roteiro_protege() from public, anon, authenticated;

create or replace function public.roteiros_da_paroquia(p_paroquia uuid)
returns table (codigo text, titulo text, data date, hora time, ao_vivo boolean)
language sql
stable
security definer
set search_path = ''
as $fn$
  select r.codigo, r.titulo, r.data, r.hora, r.ao_vivo
  from public.roteiros r
  join public.paroquias p on p.id = r.paroquia_id and p.ativa
  where r.paroquia_id = p_paroquia and (r.ao_vivo or r.data >= (now() at time zone 'America/Sao_Paulo')::date)
  order by r.ao_vivo desc, r.data, r.hora
  limit 10;
$fn$;

revoke execute on function public.roteiros_da_paroquia(uuid) from public, anon, authenticated;
grant execute on function public.roteiros_da_paroquia(uuid) to anon, authenticated;
