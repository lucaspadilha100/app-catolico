-- AP: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-ap-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('0cddb608-5303-5486-b62e-8c87e287edd8'::uuid, '1a21fe44-6d3a-5cc8-8758-0f1e13602c3c'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('37a6dbbe-eab6-5ad8-ae66-ad2f5c36a24f'::uuid, '6fe3b309-d1ff-55a8-9a0c-fd6a208f5489'::uuid, 'missa', 0::smallint, null::smallint[], '07:30'::time, ''),
  ('6de9cd2f-1150-5a17-a871-f6f28e2fb36b'::uuid, '6fe3b309-d1ff-55a8-9a0c-fd6a208f5489'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('58ccd70b-41f6-5481-ac41-eeaf53b6da0a'::uuid, 'af9795a5-fd59-5985-ac2f-339ba54cb39f'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('26bc59aa-4ad3-578b-a907-f30299435289'::uuid, 'af9795a5-fd59-5985-ac2f-339ba54cb39f'::uuid, 'missa', 1::smallint, null::smallint[], '19:00'::time, ''),
  ('af414510-a13e-54bc-9537-bc00bb366f63'::uuid, '4b378147-3685-5a8d-9d46-ba0f5d2bd178'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('d4239573-4185-5888-a7b0-7c69c8af2e38'::uuid, '4b378147-3685-5a8d-9d46-ba0f5d2bd178'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('55e8e05f-1ff6-5c7f-a6bc-dfd2e81b17cd'::uuid, 'cb82a72d-d635-5d57-b76e-a80ada35d3b5'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('ae43fb8b-99a2-5658-a7c8-eafb61068de4'::uuid, 'cb82a72d-d635-5d57-b76e-a80ada35d3b5'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('98012bb9-a0dd-595c-84c7-fed9f830f603'::uuid, 'f88466d4-5961-5cc0-b9e1-aad452242a90'::uuid, 'missa', 0::smallint, null::smallint[], '07:30'::time, ''),
  ('c430fc6d-bc01-5d0e-bbc3-ddab6413fe6a'::uuid, 'f88466d4-5961-5cc0-b9e1-aad452242a90'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('d74e1863-ccb4-5fc8-b87f-e2fb59f19158'::uuid, 'b03aa5e7-46f2-5487-9142-be920fd2d327'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('84e3c6b2-4145-510e-b59a-335216c4e4ad'::uuid, 'b03aa5e7-46f2-5487-9142-be920fd2d327'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('90456642-6545-570d-aa84-0eff2bf7a98d'::uuid, '7807212f-fd54-53d9-8788-31af5ed96cbb'::uuid, 'missa', 0::smallint, null::smallint[], '17:30'::time, ''),
  ('588afb0a-2378-593e-8fc6-3610bb2bcd6f'::uuid, '7807212f-fd54-53d9-8788-31af5ed96cbb'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('170432c0-51e7-58f2-b20b-cf77ab30c436'::uuid, '69b34b74-5de8-51f0-a506-a6b31133d6af'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('4590dae7-d4cf-5412-a6aa-825b1ccc2bba'::uuid, '69b34b74-5de8-51f0-a506-a6b31133d6af'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('2c3a47a7-458d-5a75-8f8c-ba30a89f370e'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 1::smallint, null::smallint[], '19:30'::time, ''),
  ('7a38993f-0882-5317-bc49-8102af99a9d0'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, ''),
  ('cccd5ceb-8cb5-5ba6-9bf8-aa20b2d8cebe'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('6ae207e4-c1a3-58dd-ab45-6b5322a15d1a'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 5::smallint, null::smallint[], '19:30'::time, ''),
  ('0887ccaa-8c59-552b-bf6e-de3c5677884f'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 6::smallint, null::smallint[], '19:30'::time, ''),
  ('627941b1-5a06-5667-ada2-75cc1e7a05c4'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('b0ad35d1-275a-5e0b-b4fc-4cd9fe07fb00'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('ac68e4a5-cf0f-52ec-86e6-f37a3f7bfeeb'::uuid, 'ba57a6f5-1bef-5042-a28b-75649a62af7c'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('deaf3ee4-6d19-5c60-a2fd-6737f9abbe35'::uuid, '7dd00e2f-f2c8-50e6-a5fd-438232c7d2d3'::uuid, 'missa', 0::smallint, null::smallint[], '07:30'::time, ''),
  ('1763aa50-d766-5cc1-ba8d-66bd904cacd4'::uuid, '365aa9a4-8069-5035-a2dc-7034d1815edd'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('20e14de5-b1b9-5c87-9298-11fba1418254'::uuid, '365aa9a4-8069-5035-a2dc-7034d1815edd'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('01d38e94-78e5-5ae7-8032-1ca907fe1050'::uuid, '365aa9a4-8069-5035-a2dc-7034d1815edd'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
