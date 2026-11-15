-- SP: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-sp-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('b2aa8ea9-7cf2-5ce7-acd9-1b3406115774'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, 'Intenções pelos fiéis defuntos'),
  ('95525266-2202-5018-bd66-9cfc458a1ca9'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 3::smallint, null::smallint[], '07:30'::time, 'Devoção à São José'),
  ('dfefe334-3b3b-50e3-be0f-b970be8af892'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('eb8fe24c-5761-56ae-87f1-25840ad30e44'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 5::smallint, null::smallint[], '07:30'::time, 'Bênção dos enfermos e objetos devocionais'),
  ('5d1976f6-b487-52db-b023-00fd25071a19'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 6::smallint, null::smallint[], '17:00'::time, 'Participação das crianças da catequese'),
  ('33a22463-5189-545b-ac39-37ce0510772a'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('0a06aeb7-22eb-5582-957d-59e69e93f4b7'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('c5a9ce66-289e-51c3-8952-da3fa6df92d7'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('02c9d4e7-9842-5d43-9373-566c32171a63'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'confissao', 3::smallint, null::smallint[], '14:00'::time, 'Até 16h'),
  ('db0390e9-a634-5988-b1aa-0841be3d3f66'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'confissao', 6::smallint, null::smallint[], '14:30'::time, 'Até 16h30'),
  ('5e27f353-14ed-57fc-a5c2-4cdaeb157fb1'::uuid, '5b55c3f2-30d7-5ccc-a170-cb81a5474fae'::uuid, 'confissao', 0::smallint, null::smallint[], '09:00'::time, 'Até 10h'),
  ('0564167b-4654-59cb-9e1e-0eb00a44dc41'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 2::smallint, null::smallint[], '06:45'::time, ''),
  ('c4238602-d3b6-5dd2-aa4f-9647a3e83329'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 3::smallint, null::smallint[], '06:45'::time, ''),
  ('3dadb228-cd67-5ef4-8430-5f2b45d807b1'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 4::smallint, null::smallint[], '06:45'::time, ''),
  ('51f7d9bf-104f-5c32-b42d-85e4b8c81ca6'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 5::smallint, null::smallint[], '06:45'::time, ''),
  ('afa5d697-61d1-578d-8c58-dc9b33dcd9ac'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, 'Missa da família'),
  ('d0201dff-fefc-5862-b25a-f6843c73b369'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 6::smallint, null::smallint[], '07:00'::time, ''),
  ('f79fd799-9221-5012-bb79-1c9c645d10d6'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 6::smallint, null::smallint[], '17:00'::time, ''),
  ('b936d03c-227f-5327-94e4-c2c9f16dbd61'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('06d4ed20-e269-5b72-be58-3795289496f1'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 0::smallint, null::smallint[], '08:30'::time, ''),
  ('9fcfcbc7-99c7-5d35-a0e5-1dd12aa51095'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('bc132ca7-6bba-53fb-822e-0501814e1a4a'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, 'Rito Bizantino'),
  ('042ec30f-77db-57b5-817e-6f6801f5a990'::uuid, '21017756-1677-5478-8422-6a82241eca2f'::uuid, 'adoracao', 0::smallint, '{1}'::smallint[], '16:30'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
