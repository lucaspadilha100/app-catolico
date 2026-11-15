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
  ('10fde0c7-7626-54bc-a655-e2d7bf00c9e7'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 0::smallint, null::smallint[], '06:00'::time, ''),
  ('e5991289-03cc-5970-81b3-a746db3b8fef'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 0::smallint, null::smallint[], '09:30'::time, ''),
  ('d48c49c0-6f80-5334-a7bf-9eac37f879a1'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 0::smallint, null::smallint[], '17:00'::time, ''),
  ('d7bd9bb9-1ffe-5380-b1f1-27d885dba64e'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 0::smallint, null::smallint[], '19:00'::time, ''),
  ('246fd412-3c97-516c-ac89-3ff3814bad79'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 6::smallint, null::smallint[], '06:00'::time, ''),
  ('a20b3b2e-d58a-5644-9e9f-2676e572b34c'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 6::smallint, null::smallint[], '19:00'::time, ''),
  ('923386f9-86db-50e0-a70e-8bfdc3abfbbf'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 2::smallint, null::smallint[], '06:00'::time, ''),
  ('0c3e7411-56cd-5fe3-8854-9b644bf6594b'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 3::smallint, null::smallint[], '06:00'::time, ''),
  ('ceb65ce3-0e9e-5e79-bd17-379b231d570c'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 4::smallint, null::smallint[], '06:00'::time, ''),
  ('7cd33070-7516-5c2a-a625-cd52ebefe45f'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 5::smallint, null::smallint[], '06:00'::time, ''),
  ('54ea3efe-ceed-5db3-8da0-e24a5b2e838f'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '09:00'::time, 'Primeira sexta do mês'),
  ('ee98e365-76d4-5182-9832-fff05f709951'::uuid, '281ac5f6-25b1-58c2-9ce6-39f0ac04606a'::uuid, 'missa', 5::smallint, '{1}'::smallint[], '19:00'::time, 'Primeira sexta do mês'),
  ('ea05f55e-6ea2-5b86-98a5-49e70f53aade'::uuid, '3f69b4cd-d5e1-5bc7-aa41-a8e0d800f8db'::uuid, 'missa', 4::smallint, null::smallint[], '18:00'::time, ''),
  ('7a95cf71-b71c-56c9-ad86-8f90f83d999e'::uuid, '3f69b4cd-d5e1-5bc7-aa41-a8e0d800f8db'::uuid, 'missa', 0::smallint, null::smallint[], '09:30'::time, ''),
  ('409f60ec-ddb8-5305-8872-21bf22523729'::uuid, '3f69b4cd-d5e1-5bc7-aa41-a8e0d800f8db'::uuid, 'missa', 0::smallint, null::smallint[], '19:30'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
