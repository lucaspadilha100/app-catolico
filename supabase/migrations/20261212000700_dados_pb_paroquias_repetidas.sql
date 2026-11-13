-- PB: gerado por scripts/paroquias/carregar_estado.py a partir de pesquisa-pb-2026-11 (--correcao: paróquias de mesmo nome na mesma cidade, que a carga antiga juntou numa só)

delete from public.horarios where id in ('a24d0abb-bdcf-53f4-a28f-8aa472552c81', 'ab71c1b5-fe82-5871-8c9c-75e5d89821a2', 'c91eed78-2bdc-5c94-a9be-200cc6a35f32');

insert into public.paroquias (id, nome, tipo, matriz_id, endereco, bairro, cidade, uf, lat, lng, padroeiro, telefone, whatsapp, instagram, site, email, diocese, fonte, fonte_oficial) values
  ('e7b75b07-61ff-5e36-8bec-42afacf184a6', 'Paróquia São Francisco de Assis', 'paroquia', null, '', 'Mangabeira VII', 'João Pessoa', 'PB', -7.121598, -34.882028, 'São Francisco de Assis', '', '', '', '', '', 'Arquidiocese da Paraíba', 'https://arquidiocesepb.org.br/comunicado-22/', true),
  ('82dee08d-193a-5369-8526-6e12ba7b4517', 'Paróquia Nossa Senhora da Conceição Aparecida', 'paroquia', null, 'Rua Prefeito Severino Alves da Silveira, s/n', 'Colinas do Sul', 'João Pessoa', 'PB', -7.121598, -34.882028, 'Nossa Senhora da Conceição Aparecida', '', '', '', '', '', 'Arquidiocese da Paraíba', 'https://arquidiocesepb.org.br', true),
  ('670cd5c4-9453-540a-95d8-feeb1029caa8', 'Paróquia Nossa Senhora Aparecida', 'paroquia', null, 'Rua Carteiro Francisco Marques', 'Treze de Maio', 'João Pessoa', 'PB', -7.114101, -34.864365, 'Nossa Senhora Aparecida', '', '83989182283', 'paroquia13demaio', '', '', 'Arquidiocese da Paraíba', 'https://paraibabusiness.com.br/missas-deste-domingo-25-em-joao-pessoa-horarios-e-como-conciliar-com-a-votacao/', false),
  ('5b86028d-684c-59e5-a42f-12e88db02cbd', 'Paróquia de São José', 'paroquia', null, 'Rua João Miguel Leão, 187', 'Distrito de São José da Mata', 'Campina Grande', 'PB', -7.189458, -36.001621, 'São José', '8333141573', '', '', '', '', 'Diocese de Campina Grande', 'https://diocesecg.org/pagina/forania-cidade-oeste', true)
on conflict (id) do nothing;

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao) values
  ('c6c3272d-2324-577a-8622-8d7968b86d05', '670cd5c4-9453-540a-95d8-feeb1029caa8', 'missa', 0, null::smallint[], '08:15', ''),
  ('6e3469d5-f573-5c5c-a750-4fdec450060d', '670cd5c4-9453-540a-95d8-feeb1029caa8', 'missa', 0, null::smallint[], '11:00', ''),
  ('dccda19f-d229-5b4e-9aca-6a7614686f84', '670cd5c4-9453-540a-95d8-feeb1029caa8', 'missa', 0, null::smallint[], '18:00', '')
on conflict (id) do nothing;

insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values
  ('e7b75b07-61ff-5e36-8bec-42afacf184a6', 'Sem horário de missa publicado nas fontes consultadas em novembro de 2026. Ponto no mapa aproximado: centro da cidade.', '{"https://arquidiocesepb.org.br/comunicado-22/","https://arquidiocesepb.org.br/comunicacoes-5/"}', 'alta'),
  ('82dee08d-193a-5369-8526-6e12ba7b4517', 'Sem horário de missa publicado nas fontes consultadas em novembro de 2026. Ponto no mapa aproximado: centro da cidade.', '{"https://arquidiocesepb.org.br/festa-de-nossa-senhora-aparecida-e-celebrada-com-grande-devocao-em-toda-a-arquidiocese-da-paraiba/","https://arquidiocesepb.org.br/comunicado-17/"}', 'alta'),
  ('670cd5c4-9453-540a-95d8-feeb1029caa8', 'Horário de domingo apurado pela imprensa local; a paróquia pede confirmação.', '{"https://paraibabusiness.com.br/missas-deste-domingo-25-em-joao-pessoa-horarios-e-como-conciliar-com-a-votacao/","https://paraibabusiness.com.br/missas-deste-domingo-25-em-joao-pessoa-horarios-e-como-conciliar-com-a-votacao/","https://arquidiocesepb.org.br/festa-de-nossa-senhora-aparecida-e-celebrada-com-grande-devocao-em-toda-a-arquidiocese-da-paraiba/"}', 'media'),
  ('5b86028d-684c-59e5-a42f-12e88db02cbd', 'A diocese ainda não publica horários de missa.', '{"https://diocesecg.org/pagina/forania-cidade-oeste","https://diocesecg.org/pagina/paroquias-e-areas-pastorais/"}', 'alta')
on conflict (paroquia_id) do nothing;
