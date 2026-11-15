-- AM: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de pesquisa-am-2026-11
-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values
  ('be2869a3-3954-5d40-8665-a0f074cdd31e'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'missa', 2::smallint, null::smallint[], '18:30'::time, ''),
  ('338a3369-8b67-5726-aadb-3e3ebdcc9f57'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'missa', 5::smallint, null::smallint[], '18:30'::time, ''),
  ('36744f8d-60c2-5c11-8891-57dd0ee0f6a0'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'missa', 6::smallint, null::smallint[], '18:00'::time, ''),
  ('3a8c4807-aa48-51ea-96ef-a1e901846a77'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'missa', 0::smallint, null::smallint[], '09:00'::time, ''),
  ('a9d6d0c5-2f28-5c77-ad87-cd1be2356a1b'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'missa', 0::smallint, null::smallint[], '18:00'::time, ''),
  ('92f7d2b1-8a90-5dfc-921d-b7c47f0dd172'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'confissao', 1::smallint, null::smallint[], '15:00'::time, 'Até 17h'),
  ('9ed7b074-06c8-5ab5-b7f0-2eb1deb33550'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'confissao', 2::smallint, null::smallint[], '15:00'::time, 'Até 17h'),
  ('f1d9577a-5f16-5a66-9279-e961bcd9e81a'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'confissao', 4::smallint, null::smallint[], '15:00'::time, 'Até 17h'),
  ('d7b5fb4d-026a-5dc5-a8e4-6d2a7b7a49cd'::uuid, '955e5abd-9c82-5933-ab34-982be09d13f4'::uuid, 'confissao', 5::smallint, null::smallint[], '15:00'::time, 'Até 17h')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id
where not p.verificada and p.conferida_em is null
  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)
on conflict (id) do nothing;
