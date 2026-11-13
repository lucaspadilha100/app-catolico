-- ES: gerado por scripts/paroquias/carregar_estado.py a partir de pesquisa-es-2026-11 (--correcao: paróquias de mesmo nome na mesma cidade, que a carga antiga juntou numa só)


insert into public.paroquias (id, nome, tipo, matriz_id, endereco, bairro, cidade, uf, lat, lng, padroeiro, telefone, whatsapp, instagram, site, email, diocese, fonte, fonte_oficial) values
  ('e6bcf3ab-1f15-51bf-827a-751e3e815e84', 'Paróquia de São Pedro', 'paroquia', null, 'Rua Santo André, 85', 'Vila Rubim', 'Vitória', 'ES', -20.318933, -40.349918, 'São Pedro', '27997744164', '', '', '', 'pvilarubim@hotmail.com', 'Arquidiocese de Vitória', 'https://www.aves.org.br/paroquias/sao-pedro-3/', false),
  ('0b036363-ae4e-5c8a-b7d8-ba64fe5309bc', 'Paróquia de São Francisco de Assis', 'paroquia', null, '', 'Porto de Santana', 'Cariacica', 'ES', -20.349537, -40.395337, 'São Francisco de Assis', '', '', '', '', '', 'Arquidiocese de Vitória', 'https://www.aves.org.br/paroquias/sao-francisco-de-assis-2/', false)
on conflict (id) do nothing;

insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values
  ('e6bcf3ab-1f15-51bf-827a-751e3e815e84', 'Sem horário publicado pela paróquia ou pela arquidiocese; a página da paróquia no site da arquidiocese traz só contatos e endereço.', '{"https://www.aves.org.br/paroquias/sao-pedro-3/"}', ''),
  ('0b036363-ae4e-5c8a-b7d8-ba64fe5309bc', 'Sem horário nem contato publicados; a página da paróquia no site da arquidiocese traz só notícias.', '{"https://www.aves.org.br/paroquias/sao-francisco-de-assis-2/"}', '')
on conflict (paroquia_id) do nothing;
