-- AP: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-ap-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('2c3a47a7-458d-5a75-8f8c-ba30a89f370e'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 1::smallint, null::smallint[], '19:30'::time, ''),
  ('7a38993f-0882-5317-bc49-8102af99a9d0'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, ''),
  ('cccd5ceb-8cb5-5ba6-9bf8-aa20b2d8cebe'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('6ae207e4-c1a3-58dd-ab45-6b5322a15d1a'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 5::smallint, null::smallint[], '19:30'::time, ''),
  ('0887ccaa-8c59-552b-bf6e-de3c5677884f'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 6::smallint, null::smallint[], '19:30'::time, ''),
  ('627941b1-5a06-5667-ada2-75cc1e7a05c4'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('b0ad35d1-275a-5e0b-b4fc-4cd9fe07fb00'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('ac68e4a5-cf0f-52ec-86e6-f37a3f7bfeeb'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
