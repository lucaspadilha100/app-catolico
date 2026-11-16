-- DF: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-df-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('ea00107a-4537-552f-b259-adf57606e1b0'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('985e310f-f792-5409-8bf3-a3782a5ade2b'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'missa', 0::smallint, null::smallint[], '10:00'::time, ''),
  ('00177a19-f34c-57f6-8946-38c2760022a8'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('d6e65604-627f-57c3-9dca-4e4bf002fd1d'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '19:00'::time, 'Missa do Sagrado Coração de Jesus'),
  ('4d7471c9-bdf8-5596-ac56-d3ebd8118993'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'confissao', 2::smallint, null::smallint[], '15:00'::time, 'Até 17h30'),
  ('ad976d76-48cc-5acf-8783-ea780a93eae9'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'confissao', 4::smallint, null::smallint[], '15:00'::time, 'Até 17h30'),
  ('9d05afbd-ec59-5286-a44e-899fcfaffe83'::uuid, 'b88d1b88-d05e-5972-bd60-a47e07d03fbc'::uuid, 'adoracao', 4::smallint, null::smallint[], '18:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
