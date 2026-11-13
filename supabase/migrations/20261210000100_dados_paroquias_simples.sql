-- Pedido do dono (13/11/2026): ou é paróquia ou é capela, e o que veio de
-- fonte oficial (página da arquidiocese ou da diocese) entra conferido.

alter table public.paroquias disable trigger trg_paroquia_protege;

update public.paroquias
set nome = regexp_replace(nome, '^(Área Pastoral|Área Missionária|Quase[- ][Pp]aróquia)( de| da| do)?\s+', 'Paróquia\2 ')
where tipo in ('area_pastoral', 'area_missionaria', 'quase_paroquia')
  and nome ~ '^(Área Pastoral|Área Missionária|Quase[- ][Pp]aróquia)';

update public.paroquias
set tipo = 'paroquia'
where tipo in ('area_pastoral', 'area_missionaria', 'quase_paroquia');

update public.paroquias p
set fonte_oficial = true
where not p.fonte_oficial
  and exists (select 1 from public.notas_paroquia n where n.paroquia_id = p.id and n.confianca = 'alta');

alter table public.paroquias enable trigger trg_paroquia_protege;
