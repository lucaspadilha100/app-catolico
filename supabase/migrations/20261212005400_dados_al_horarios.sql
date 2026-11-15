-- AL: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-al-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('dc861cc0-295e-5eb7-90bc-7e900dff2ae9'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 1::smallint, null::smallint[], '18:00'::time, ''),
  ('46c7677b-ef6e-56cc-b3e7-bac6005bb0e7'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 2::smallint, null::smallint[], '18:00'::time, ''),
  ('543194ce-3d28-529a-955b-76fedf971356'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 3::smallint, null::smallint[], '18:00'::time, ''),
  ('3659378d-a2e5-5b27-970d-0b9b55d7f466'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 4::smallint, null::smallint[], '18:00'::time, ''),
  ('7950d872-e1e5-5dc7-89f2-42be36bafb05'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 5::smallint, null::smallint[], '18:00'::time, ''),
  ('d438e2a0-e898-5d41-afd0-a98cd3af0e71'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('6161398b-e00a-5a8e-9369-08fe634a86d1'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('c1537aca-8efc-5581-a555-e9d0431ef309'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 0::smallint, null::smallint[], '12:00'::time, ''),
  ('69fd1a85-b74b-5b8a-a6a6-1ea286fc13a9'::uuid, '9697220b-b266-5965-832f-22ea12de0189'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('1d3267cc-5839-59ec-8e21-ff4987838331'::uuid, '8da957b6-a294-5dc8-b7c9-e324ca265361'::uuid, 'missa', 6::smallint, null::smallint[], '16:00'::time, ''),
  ('4b410f66-a437-543e-94ff-4dc75abca7ef'::uuid, '8da957b6-a294-5dc8-b7c9-e324ca265361'::uuid, 'missa', 0::smallint, null::smallint[], '16:00'::time, ''),
  ('2bae8912-a3d9-5df1-ae27-afa67d1b813b'::uuid, 'd4d96c7d-33ee-55ef-9f8c-8c643a5c4268'::uuid, 'missa', 6::smallint, null::smallint[], '17:00'::time, 'Santa Missa Dominical Vespertina'),
  ('81cd4756-a603-5d4a-9fc9-9cc26199f478'::uuid, 'd4d96c7d-33ee-55ef-9f8c-8c643a5c4268'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, 'Santa Missa Dominical com as crianças'),
  ('d99c6770-5fb0-5473-aeb8-acec19969713'::uuid, 'd4d96c7d-33ee-55ef-9f8c-8c643a5c4268'::uuid, 'missa', 0::smallint, null::smallint[], '19:30'::time, ''),
  ('762262b8-2c87-596e-8035-6c7d88707c5f'::uuid, 'd4d96c7d-33ee-55ef-9f8c-8c643a5c4268'::uuid, 'adoracao', 4::smallint, null::smallint[], '15:00'::time, 'Até 18h30'),
  ('771dad19-9e1e-5653-812d-3ffb9e4424a9'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('6418a61a-3e59-5341-a9a5-f58baa4986b4'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('453279ea-bb76-5d37-8ff8-49987213a605'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 6::smallint, null::smallint[], '06:30'::time, ''),
  ('d49c9145-7d46-5152-8d1e-297dd84b17b9'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('3e85d421-4dd9-5299-9536-3f3242ec8c2d'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 0::smallint, null::smallint[], '06:30'::time, ''),
  ('b137d0e5-1297-5e9e-9b64-147055fa47f2'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('93e101d8-8b87-5972-8921-a7b0aa17e134'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 0::smallint, null::smallint[], '16:00'::time, ''),
  ('fcd77330-df64-5a6a-86d3-2c5d66c69015'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('2aa1a21d-a9d0-50e6-a355-96ac4bcefaff'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '19:00'::time, ''),
  ('f4767dc5-6c69-5944-bd6d-efd26cb24f5e'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'confissao', 4::smallint, null::smallint[], '09:00'::time, 'Até 12h'),
  ('6297d39a-c57d-5343-99a9-5fa76be57595'::uuid, 'a3a6137c-900f-591a-a0c1-33ac0e3bfedd'::uuid, 'adoracao', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('4498a3ff-8f3a-5a93-8f37-ccfd1b9973aa'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('f95e117b-4628-5e29-b09f-abe26fd367e9'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('cb71783d-60e1-54d7-94be-a269c3022a8a'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('60cd0f2b-ef8b-555c-934e-98ded940f82d'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'missa', 0::smallint, null::smallint[], '09:30'::time, ''),
  ('3b5717b6-b78e-5f23-a46e-e827cbb70bf2'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('0bb0d80c-c7ee-5050-8412-3485e39d9f07'::uuid, '871caa71-d948-5182-8285-8f40f8ae4f82'::uuid, 'adoracao', 0::smallint, null::smallint[], '18:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
