-- PR: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-pr-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('e7c46aae-6ec0-5eb3-9dd6-2a166769ec77'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 3::smallint, null::smallint[], '19:00'::time, 'Missa com Novena a N. Sra. do Perpétuo Socorro'),
  ('d7df7f50-df15-5943-832e-ddc8dd98d1dd'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, 'Missa em louvor a São Guido Maria Conforti'),
  ('59f12c83-c614-5d8f-8705-a85f7ff2aea6'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 6::smallint, null::smallint[], '18:30'::time, ''),
  ('a6e1e344-f0c9-57db-bab1-e5d0dbb5efd9'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 0::smallint, null::smallint[], '10:30'::time, ''),
  ('95610851-934f-581e-af35-9eb0bb3b5344'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('a20365a2-3f15-5c9a-8ac2-7d779520ff7a'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '15:00'::time, 'Missa em devoção ao Sagrado Coração de Jesus'),
  ('c1bba372-72ae-50bb-8bf8-beb251509286'::uuid, '61fbc433-bb92-5df5-8b89-189f7398b658'::uuid, 'adoracao', 2::smallint, null::smallint[], '18:00'::time, 'Na Capela, ao lado do Centro Catequético'),
  ('cd51cfdf-90e6-52e1-a7cc-15a5beca8005'::uuid, 'a62b7820-a7ef-53cf-9172-b3853250f160'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, ''),
  ('8e249a11-24de-5d58-bfba-81b87772fac8'::uuid, 'a62b7820-a7ef-53cf-9172-b3853250f160'::uuid, 'missa', 5::smallint, null::smallint[], '19:30'::time, ''),
  ('0aa306d3-7b9c-5c5e-91a0-cb34bdd8f5b2'::uuid, 'a62b7820-a7ef-53cf-9172-b3853250f160'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('bfff9215-4865-5ef0-9941-45d7702786ef'::uuid, 'a62b7820-a7ef-53cf-9172-b3853250f160'::uuid, 'missa', 0::smallint, null::smallint[], '10:30'::time, ''),
  ('8c1bcc21-9a08-58df-8db5-7065da305e3c'::uuid, 'a62b7820-a7ef-53cf-9172-b3853250f160'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('538821be-497c-5ebb-9f7a-95a1a9710119'::uuid, 'f402ccb7-3240-5a3c-9fee-0b52653e166e'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, 'Missa e Novena a Nossa Senhora das Graças'),
  ('18b6f127-66e7-5f2f-9a1b-1f1926dd0e13'::uuid, 'f402ccb7-3240-5a3c-9fee-0b52653e166e'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('d3b51441-a6e1-53fe-b56f-6f3c8b68e599'::uuid, 'f402ccb7-3240-5a3c-9fee-0b52653e166e'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('dc0a0be3-0087-5b42-b51a-d78e3a141b1f'::uuid, 'f402ccb7-3240-5a3c-9fee-0b52653e166e'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('1a54fa4f-d02e-5d82-adab-7494b39f8e22'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 1::smallint, null::smallint[], '19:00'::time, ''),
  ('d9a0f1bc-8e0c-5581-bca5-e88d6cf1ebf1'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('26301484-00d8-565a-a002-1096ea49d084'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 3::smallint, null::smallint[], '19:00'::time, ''),
  ('de645beb-3bd7-558e-90ce-cf150c786fa3'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('49d7ca2c-f4be-502c-84b4-7a0a84ec60ab'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 5::smallint, null::smallint[], '19:00'::time, ''),
  ('ca963c61-5b5a-5d13-8565-7a0a1ed3e4f1'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('3492e8ee-4a8f-57f1-98af-0d59a0816a2a'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('4c23b859-f0d2-5c1f-9d28-fa050e84d883'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('9b002e14-31b2-5360-b90d-20ee828716d6'::uuid, 'ca15c36e-9532-5576-9088-488a916519e3'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('cd319cb3-2f6d-5755-b53e-d829334a6c28'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('105ca741-89f4-5f9c-958d-089fbd99da5c'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 3::smallint, null::smallint[], '19:00'::time, ''),
  ('0d337816-a6ea-5bf5-930c-2466cb662cdc'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('6279d2cd-26c6-520c-9ec5-0aeb527611a0'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 5::smallint, null::smallint[], '16:00'::time, ''),
  ('98662030-30c6-5695-834a-9e97774d9def'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('4c70dd83-7bee-5fd2-8714-45eb73102309'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('bf34be80-d3f1-5814-9f5f-174f810380b1'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('56d6dc10-3a7e-56d7-945f-b8a7ffe1eddd'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'adoracao', 4::smallint, null::smallint[], '18:00'::time, 'Exposição; Bênção 18h45'),
  ('1d8bd6c4-a323-53b5-b1b1-5ca183dfdee2'::uuid, '2584a95f-03d2-514b-9497-2222a16acc3c'::uuid, 'adoracao', 5::smallint, null::smallint[], '15:00'::time, 'Exposição; Bênção 15h45'),
  ('4ee7b6a9-b277-5155-b40f-8ba11622c3dd'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 2::smallint, null::smallint[], '07:30'::time, ''),
  ('bc0f2837-5694-554e-8752-f188b5ab627f'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 4::smallint, null::smallint[], '07:30'::time, ''),
  ('612489e9-1464-5e07-b3bb-4ed40307c4de'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 5::smallint, null::smallint[], '07:30'::time, ''),
  ('7c35cd31-313d-5623-927e-b9071a700c14'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 3::smallint, null::smallint[], '19:00'::time, 'Com novena'),
  ('90901ffc-4f93-5256-b2a8-5a538bad8932'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('5df8ec19-e267-5e35-85ac-b8815832244c'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 0::smallint, null::smallint[], '09:30'::time, ''),
  ('4a11c9c8-e5dd-5fc0-b335-05cebd202b52'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 0::smallint, null::smallint[], '11:00'::time, ''),
  ('065316c7-e899-5299-9469-1b9f6a740860'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('458780cc-654d-5356-a50e-85ff48d7d5eb'::uuid, 'cd8cba7e-c483-5cf8-942c-210f3dc9cbb4'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '15:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
