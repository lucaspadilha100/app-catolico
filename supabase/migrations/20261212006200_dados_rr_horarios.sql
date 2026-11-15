-- RR: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-rr-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('b46227fe-5b26-5cb2-adcd-4544dcfed1cd'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 1::smallint, null::smallint[], '19:00'::time, ''),
  ('856e7bbb-ede8-51d0-b54b-372c0e9420ed'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('1452515a-13f3-5197-989e-d53e1692279b'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 3::smallint, null::smallint[], '19:00'::time, ''),
  ('a165cbbe-76d0-506f-ba72-fd9a2bfee086'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('28fce8ab-d55b-5f92-9a9e-6b40f209e5d8'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('fbc34158-28c7-5a32-8181-7fb10d6b9be1'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('ff8dba14-6537-51de-815f-6ced72bf23a9'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('976268c8-0d74-58a2-b5f1-f1d9a69be234'::uuid, '0ec7de10-3ca0-547b-bebb-ed53ba3bfd2e'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
