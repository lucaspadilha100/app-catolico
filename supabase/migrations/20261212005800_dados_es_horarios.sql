-- ES: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-es-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('9d1a4bd0-67b5-5099-9aeb-0876367ac28b'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 1::smallint, null::smallint[], '12:00'::time, ''),
  ('4f5eef18-23a0-5828-92ef-f1d7c585a1d5'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 1::smallint, null::smallint[], '18:00'::time, ''),
  ('f1dc1e74-c810-56a7-9380-e1464fdb738f'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 2::smallint, null::smallint[], '12:00'::time, ''),
  ('855dc150-176f-5341-aea6-3703441da09a'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 2::smallint, null::smallint[], '18:00'::time, ''),
  ('06572c29-09c4-5f40-9235-3f7165bc2e62'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 3::smallint, null::smallint[], '12:00'::time, ''),
  ('1e3e3a41-d718-5ad4-bb66-674b93bf4620'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 3::smallint, null::smallint[], '18:00'::time, ''),
  ('0658ab00-674f-5f91-992a-4afae0c7783a'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 4::smallint, null::smallint[], '12:00'::time, ''),
  ('e5fa67e3-7ce9-599e-ad2a-d9269c11749d'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 4::smallint, null::smallint[], '18:00'::time, ''),
  ('768668af-3a45-587d-8bf0-8b3a57085cf8'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 5::smallint, null::smallint[], '12:00'::time, ''),
  ('25eb6a36-373a-5d41-9238-127ba8fb39de'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 5::smallint, null::smallint[], '18:00'::time, ''),
  ('169cb207-b8bb-5439-bad6-7896e0372f68'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('354a2dab-9a81-5060-84bc-a24cd70872c4'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('dd34405f-e90f-5f04-a932-9821604fc487'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 0::smallint, null::smallint[], '11:00'::time, ''),
  ('26df2a3b-5b2a-58c4-95db-65db03a83d0d'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('684b92d2-c146-5973-ad8d-6f0f246e0383'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'confissao', 2::smallint, null::smallint[], '14:00'::time, 'Até 17h, mediante agendamento'),
  ('54380bef-7541-5063-acd3-368b255f11cf'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'confissao', 3::smallint, null::smallint[], '14:00'::time, 'Até 17h, mediante agendamento'),
  ('8a3d6e3d-eb80-51b3-8ff0-3755a0ea1570'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'confissao', 4::smallint, null::smallint[], '14:00'::time, 'Até 17h, mediante agendamento'),
  ('d83a1635-1557-5f5c-b2ae-9522205e3736'::uuid, 'fcd0632e-ac0a-566a-a385-fec9e4b1e664'::uuid, 'confissao', 5::smallint, null::smallint[], '14:00'::time, 'Até 17h, mediante agendamento')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
