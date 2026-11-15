-- PE: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-pe-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('97d75bb4-c7fd-55eb-8849-31ddf1cd4473'::uuid, '414cc016-3721-5e53-82e8-881b9358af1f'::uuid, 'missa', 4::smallint, null::smallint[], '19:30'::time, ''),
  ('35bf4415-47b8-5409-aeb3-5fd1d7de732d'::uuid, '414cc016-3721-5e53-82e8-881b9358af1f'::uuid, 'missa', 0::smallint, null::smallint[], '07:30'::time, ''),
  ('b0ad6725-7787-5874-a36d-f0068fee75c6'::uuid, '414cc016-3721-5e53-82e8-881b9358af1f'::uuid, 'missa', 0::smallint, null::smallint[], '17:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
