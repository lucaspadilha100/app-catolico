-- ES: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-es-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('4d9ad549-77bd-542a-8e56-5e9e14d1cdff'::uuid, 'ba73c00b-31d0-51ec-8570-822b9840b860'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('cb495815-7b36-5a22-8217-8f211646e3cb'::uuid, 'ba73c00b-31d0-51ec-8570-822b9840b860'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('50b72d7e-ae30-5013-84fa-1742497db90c'::uuid, 'ba73c00b-31d0-51ec-8570-822b9840b860'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('7e4da0c6-5bab-5bcf-ad72-d259bec74554'::uuid, 'ba73c00b-31d0-51ec-8570-822b9840b860'::uuid, 'confissao', 4::smallint, null::smallint[], '08:00'::time, 'Até 11h'),
  ('92b8c49b-f546-5ab3-b610-c8d09f4c376a'::uuid, 'ba73c00b-31d0-51ec-8570-822b9840b860'::uuid, 'confissao', 4::smallint, null::smallint[], '14:00'::time, 'Até 17h, confissão e aconselhamento'),
  ('cefeb2c0-f3dc-5280-83ac-ec38f97aaa48'::uuid, 'b45cdde3-7579-59c0-9aa5-c2884f29b774'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('0caa18fe-7ac6-5a20-8e0c-c0800b56c2dc'::uuid, 'b45cdde3-7579-59c0-9aa5-c2884f29b774'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('ea4ed54d-c11a-5e14-a1a0-a4b94092cf6c'::uuid, 'b45cdde3-7579-59c0-9aa5-c2884f29b774'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('c1f907ba-0ae6-5c79-bf4f-84dd953b21c5'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 1::smallint, null::smallint[], '07:30'::time, 'Até 17h'),
  ('e655f775-1597-5f1f-821b-17af34165e08'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 2::smallint, null::smallint[], '07:30'::time, 'Até 17h'),
  ('f8c8cc76-ec53-5b20-b808-1cb2e52312f1'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 3::smallint, null::smallint[], '07:30'::time, 'Até 17h'),
  ('db704c9f-90fb-539b-981b-2b6075e548e5'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 4::smallint, null::smallint[], '07:30'::time, 'Até 17h'),
  ('e7c39d38-a24f-5bd3-963f-4d7d5114dd46'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 5::smallint, null::smallint[], '07:30'::time, 'Até 17h'),
  ('d7a8a52c-bb99-541a-b3b3-196e89598ee6'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 6::smallint, null::smallint[], '07:30'::time, 'Até 12h'),
  ('c9303afb-fbeb-59e8-9a2e-33c16d165f2c'::uuid, '9c4b6539-7791-5749-b708-dffa0eade7bb'::uuid, 'adoracao', 0::smallint, null::smallint[], '07:00'::time, 'Até 19h, capela do Santíssimo aberta'),
  ('1eb26882-0d91-5d25-8c2d-f5112a22a5a1'::uuid, '9621b3f0-17e3-516c-8e95-800b7d8e8ad9'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('10158042-9c0b-52a5-86c4-ecf810ad7db5'::uuid, '9621b3f0-17e3-516c-8e95-800b7d8e8ad9'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('1c313059-50d3-50c2-8d9f-7f2481dc3430'::uuid, 'ab6a3e6e-4f07-50ba-aecd-f3c4498ea4c3'::uuid, 'adoracao', 4::smallint, null::smallint[], '19:15'::time, ''),
  ('8541a1e7-193b-5382-b080-4fab52b8f36d'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 2::smallint, null::smallint[], '06:30'::time, ''),
  ('1c043c3f-2c53-5be4-8012-3aa9cd6d2db6'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 3::smallint, null::smallint[], '06:30'::time, ''),
  ('085cf53f-ed36-59fc-a6d1-d105c394dd4d'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 5::smallint, null::smallint[], '06:30'::time, ''),
  ('203821ed-407a-54f2-a2a7-76dce6ed6287'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 4::smallint, null::smallint[], '06:30'::time, ''),
  ('839b1c5c-1fe5-5479-98e5-22119d1cada7'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('3df8b349-25d1-5545-8ced-ad5ed5491df3'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('a36ea4e8-f4d5-57f6-8b82-e67ac9f678c2'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('f460a1f3-9282-5b33-acec-bd6c028ac018'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 0::smallint, null::smallint[], '10:30'::time, ''),
  ('82b67675-faf5-5acc-b3dc-5d22f6b30cba'::uuid, '41dd18a7-dfc7-58e6-8c9a-80ff67731bed'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('6daf64d9-c88f-5b10-8967-131b0dc75432'::uuid, 'dff4bf90-ee53-5bf4-9907-987fdcbd76e6'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('4782fa8d-127e-5f47-9224-f6f95a08a887'::uuid, 'dff4bf90-ee53-5bf4-9907-987fdcbd76e6'::uuid, 'missa', 0::smallint, '{1}'::smallint[], '19:30'::time, 'Missa da Juventude'),
  ('07ba023a-a11d-59d5-b40f-e9193036a50c'::uuid, 'dff4bf90-ee53-5bf4-9907-987fdcbd76e6'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, 'Missa e Novena Perpétua N. Sra. Desatadora dos Nós'),
  ('7c30d7c0-ba91-578b-9141-ec017446bf68'::uuid, 'dff4bf90-ee53-5bf4-9907-987fdcbd76e6'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '15:00'::time, 'Missa pela Saúde'),
  ('9496a070-c3e6-5fbc-a78c-c70df3a81b59'::uuid, 'afdaccbd-a53d-5552-a48b-18645e554166'::uuid, 'confissao', 4::smallint, null::smallint[], '17:00'::time, 'Até 19h'),
  ('59f4a588-b41b-5e72-9351-e0c1c5ae562d'::uuid, '034daf0b-eadd-5a1b-9108-d56bde99ef1e'::uuid, 'confissao', 2::smallint, null::smallint[], '08:00'::time, 'Até 10h30'),
  ('86b1db78-6c42-5402-8582-5e15fdc3b93c'::uuid, '034daf0b-eadd-5a1b-9108-d56bde99ef1e'::uuid, 'confissao', 2::smallint, null::smallint[], '19:00'::time, 'Até 21h'),
  ('4b71d273-0486-5b8b-a0fc-6e3b1c853011'::uuid, '034daf0b-eadd-5a1b-9108-d56bde99ef1e'::uuid, 'confissao', 4::smallint, null::smallint[], '14:00'::time, 'Até 16h'),
  ('54e434d2-eccd-56f7-a1d0-7913d19b6f86'::uuid, '32ba7a38-d51b-563b-8915-efdeba013502'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('e680034c-5b41-50fb-ad34-f9409b691684'::uuid, '32ba7a38-d51b-563b-8915-efdeba013502'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('716509e1-df1f-508a-80ee-977ea5db7627'::uuid, '32ba7a38-d51b-563b-8915-efdeba013502'::uuid, 'missa', 0::smallint, null::smallint[], '19:30'::time, ''),
  ('eb99b9ca-5eda-5b89-9a55-59aa6ff17a24'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'missa', 5::smallint, null::smallint[], '06:00'::time, ''),
  ('ea5fe6c1-340f-54e2-ace7-b6dd8ecea205'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('3ceb00c2-5f9d-5b04-8ea8-fb0840420799'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('a292be87-70ef-524b-8c10-63056c6147a9'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('decd1b2b-c1e2-5117-8153-fd6ccdceac4c'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'confissao', 5::smallint, null::smallint[], '09:00'::time, 'Até 11h'),
  ('43c01c44-c9dd-50a7-bdbf-153aa1a2f758'::uuid, 'bf98f55a-62cc-5ad5-86f7-29d1db558d2a'::uuid, 'confissao', 5::smallint, null::smallint[], '15:00'::time, 'Até 17h'),
  ('d910ce92-71e8-5306-ad87-478ab8682420'::uuid, 'b9961f51-4725-551c-ab93-4901b55238c4'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('293935f0-5776-543b-9ef8-9130a6de5290'::uuid, 'b9961f51-4725-551c-ab93-4901b55238c4'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('e1336399-9a9f-5ed2-9a3a-4579c972faf2'::uuid, 'b9961f51-4725-551c-ab93-4901b55238c4'::uuid, 'missa', 0::smallint, null::smallint[], '19:30'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
