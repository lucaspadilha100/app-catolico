-- PB: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-pb-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('a720b028-c871-50a5-99e5-ebaebd0cd0f2'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 2::smallint, null::smallint[], '18:15'::time, ''),
  ('b87fdb5c-3a4b-5187-a42b-966609905b9a'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 3::smallint, null::smallint[], '18:15'::time, ''),
  ('79b5b016-2c07-58c5-9b82-dc9e7a1c425d'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 4::smallint, null::smallint[], '18:15'::time, ''),
  ('46f89e44-205d-58ab-a4c9-b1d046860f72'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 5::smallint, null::smallint[], '18:15'::time, ''),
  ('ad37ce3d-d7d7-5e2d-87a0-c5496c72754f'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 6::smallint, null::smallint[], '16:15'::time, ''),
  ('70320a4c-bdc9-5602-8286-8dd762ea9bf2'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 6::smallint, null::smallint[], '18:15'::time, ''),
  ('4dac2146-ca0f-5256-812d-cd95643ccb1e'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 0::smallint, null::smallint[], '07:00'::time, ''),
  ('1c914132-93c7-5272-9fa8-e96d3b1fda5b'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 0::smallint, null::smallint[], '09:15'::time, ''),
  ('016f3f71-001d-5e13-b8b9-509d0aeb7cf8'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 0::smallint, null::smallint[], '11:15'::time, ''),
  ('d3ec46df-9f9e-5804-8a3f-7b74a4f57cf1'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 0::smallint, null::smallint[], '17:00'::time, ''),
  ('4cb685bb-4ad3-552b-9f66-474fb6233a22'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('9408ce5a-ea99-5ce0-a5d0-ca726e97f56d'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'confissao', 2::smallint, null::smallint[], '15:00'::time, 'Até 17h30, confissões e Atendimentos'),
  ('2f53b086-53f8-583d-8a2c-6ab5e2d5095d'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'confissao', 3::smallint, null::smallint[], '15:00'::time, 'Até 17h30, confissões e Atendimentos'),
  ('1d14840b-185d-5066-a890-d1527b3b6caa'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'confissao', 4::smallint, null::smallint[], '15:00'::time, 'Até 17h30, confissões e Atendimentos'),
  ('5e971978-78a0-5441-9aa0-0308dd98e853'::uuid, '59f7c455-1efd-5e37-91ed-ed874ce5a6b9'::uuid, 'confissao', 5::smallint, null::smallint[], '15:00'::time, 'Até 17h30, confissões e Atendimentos'),
  ('d69a2ac1-c190-57cf-9463-926c2f1203c7'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 2::smallint, null::smallint[], '15:00'::time, 'Até 17h, no Seminário'),
  ('3878829b-b702-5013-afae-b8e404fb6c31'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 3::smallint, null::smallint[], '15:00'::time, 'Até 17h, no Seminário'),
  ('f773acc6-64bd-56c7-aadf-d50c5ebf0de6'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 4::smallint, null::smallint[], '14:30'::time, 'Até 17h, na igreja'),
  ('8ce022a0-e88c-56d1-85a5-938ceb17d3b4'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 5::smallint, null::smallint[], '14:30'::time, 'Até 17h, na igreja'),
  ('f196b670-84c8-51ec-813a-af3711a32777'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 1::smallint, null::smallint[], '18:30'::time, ''),
  ('8d3c68b7-1124-5562-957b-33d4ca5fdd0b'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 2::smallint, null::smallint[], '18:30'::time, ''),
  ('82703a53-265e-58de-bdef-336436ae9b70'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 3::smallint, null::smallint[], '18:30'::time, ''),
  ('95d72a7b-5882-59bc-85db-394014b2c540'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 4::smallint, null::smallint[], '18:30'::time, ''),
  ('5219db7b-db2a-5c28-84b7-829f254cb361'::uuid, '9da73d84-f456-50a4-bd26-3f5614b4f076'::uuid, 'confissao', 5::smallint, null::smallint[], '18:30'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
