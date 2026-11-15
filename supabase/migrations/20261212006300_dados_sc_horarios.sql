-- SC: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-sc-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('da6306da-0337-5211-b3bb-4a1c039c5061'::uuid, '41d095c2-4e91-539b-a89f-404ed58b35b3'::uuid, 'missa', 2::smallint, null::smallint[], '19:30'::time, ''),
  ('cc169cd4-2474-5ecb-8fb4-f40259f5d237'::uuid, '41d095c2-4e91-539b-a89f-404ed58b35b3'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('0747426b-48b7-50ad-a8ac-16476900a08d'::uuid, '41d095c2-4e91-539b-a89f-404ed58b35b3'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('03dc1dc9-591a-5367-81cd-02d2c483a17c'::uuid, '41d095c2-4e91-539b-a89f-404ed58b35b3'::uuid, 'missa', 0::smallint, null::smallint[], '19:30'::time, ''),
  ('aa7de6b3-a26f-54e9-a3cd-88e23e935526'::uuid, '5e784594-bb1f-5648-a166-fa0436bf81f4'::uuid, 'missa', 2::smallint, null::smallint[], '19:30'::time, ''),
  ('0e04859e-a150-5ddc-89bc-5d63a608c885'::uuid, '5e784594-bb1f-5648-a166-fa0436bf81f4'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('4fa1f9a3-0e4e-52af-8bd4-aba70a475f8b'::uuid, '5e784594-bb1f-5648-a166-fa0436bf81f4'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('6494b034-8069-53ec-ae66-4cdb2732725d'::uuid, '5e784594-bb1f-5648-a166-fa0436bf81f4'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('11698d99-642e-50c6-ac18-04832b8e5ff8'::uuid, '5e784594-bb1f-5648-a166-fa0436bf81f4'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('019ccb72-312a-5419-946c-1b063f983266'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 1::smallint, null::smallint[], '07:00'::time, ''),
  ('868ad6d5-ac52-5071-aa86-e2caee469dd7'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 2::smallint, null::smallint[], '07:00'::time, ''),
  ('6456f61d-937e-5f68-b3b3-a6d03c86a05e'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 2::smallint, null::smallint[], '19:00'::time, ''),
  ('9297c292-6283-5a1e-b6c8-31e0b6d2a5b0'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 3::smallint, null::smallint[], '07:00'::time, ''),
  ('21b833f3-3443-55e0-98df-d7b9504c24df'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 3::smallint, null::smallint[], '15:30'::time, ''),
  ('e73c1eb2-37a9-5175-9324-2022e1bcfc28'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 4::smallint, null::smallint[], '07:00'::time, ''),
  ('ad8fa285-42a4-5701-a436-682a6a3e4b7a'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 4::smallint, null::smallint[], '19:00'::time, ''),
  ('b1dae47f-954d-5b99-83f2-f69cf2b50ab4'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 5::smallint, null::smallint[], '07:00'::time, ''),
  ('fcc0518d-4a98-567b-b2bb-f23f33a16c75'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('6c058eeb-2063-5c0d-a7f1-9240b90546e2'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('935af01e-571f-5cf2-b849-22cf65d216c1'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('27b891aa-eacc-5f59-8388-658563955f30'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('5e3172fb-ee74-5a54-a410-ac8e0d68d21b'::uuid, '028b0020-a60c-5752-8233-f9f2b9d27d2b'::uuid, 'adoracao', 4::smallint, null::smallint[], '15:00'::time, 'Até 19h'),
  ('4cb70e1f-941f-5eb1-bfe7-da7adbb5f53d'::uuid, '2d5ef8e0-d343-55eb-b373-a2a73b30034f'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, 'Santa Missa e Novena a Nossa Senhora Desatadora dos Nós'),
  ('632ad111-1be3-55fa-a04d-df97832b0a92'::uuid, '2d5ef8e0-d343-55eb-b373-a2a73b30034f'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('b4449e2e-69b2-5584-a3a8-3ac93fd687ff'::uuid, '2d5ef8e0-d343-55eb-b373-a2a73b30034f'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('613d0834-0226-5fd9-a6b2-5b968da7befb'::uuid, '2d5ef8e0-d343-55eb-b373-a2a73b30034f'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('da50d0c7-ac7c-5bc7-94b6-4476c00afc15'::uuid, '783d1f74-8e6a-5ca7-9756-4a0b5ba52b68'::uuid, 'missa', 3::smallint, null::smallint[], '19:30'::time, ''),
  ('a2d1c797-926f-58bb-a5b3-4b2a6b9bb2ab'::uuid, '783d1f74-8e6a-5ca7-9756-4a0b5ba52b68'::uuid, 'missa', 6::smallint, null::smallint[], '19:30'::time, ''),
  ('44ad1587-c72c-593e-866b-deca37c207f1'::uuid, '783d1f74-8e6a-5ca7-9756-4a0b5ba52b68'::uuid, 'missa', 0::smallint, null::smallint[], '08:00'::time, ''),
  ('5fe24879-e578-5d28-aa33-58e12503627a'::uuid, '783d1f74-8e6a-5ca7-9756-4a0b5ba52b68'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '19:30'::time, ''),
  ('3de6007a-9b48-591a-b553-791949d3abde'::uuid, '0ca19bee-8996-5536-b97e-cdd922856b3e'::uuid, 'missa', 4::smallint, null::smallint[], '20:00'::time, ''),
  ('16237490-61af-53dd-8f61-dbf18888ac98'::uuid, '0ca19bee-8996-5536-b97e-cdd922856b3e'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
