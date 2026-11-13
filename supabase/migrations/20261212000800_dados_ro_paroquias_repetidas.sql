-- RO: gerado por scripts/paroquias/carregar_estado.py a partir de pesquisa-ro-2026-11 (--correcao: paróquias de mesmo nome na mesma cidade, que a carga antiga juntou numa só)

delete from public.horarios where id in ('385ef894-4710-5ea7-a5a6-6b039aa67b88', '4ae58766-0726-58a7-a18e-90d430349b2f', '6111a30e-2a8a-5878-bd4a-b3a226a4542a', 'ecbfc1bd-2665-56c4-8d41-c43a8d5da172', 'f1ef6c11-3c4f-5b3b-a79a-ebcc05cf73f6');
delete from public.paroquias where id in ('122eeb54-6f62-5dae-8a2c-434c9d5e569d', '159b621f-92a7-52ba-b7ab-62f36f29012f', '5eb3c0f0-bc5f-533f-b6dd-30fbce373201', '66bd0c1e-fe9e-58c6-afeb-55657376ff6b', '9e1e7699-6a17-5a8c-a80f-9d7195635173', 'ce73b332-3ace-5825-837c-383c50284342', 'd9b8a922-6aa5-5538-89ff-71239b2bf987');

insert into public.paroquias (id, nome, tipo, matriz_id, endereco, bairro, cidade, uf, lat, lng, padroeiro, telefone, whatsapp, instagram, site, email, diocese, fonte, fonte_oficial) values
  ('7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'Paróquia Nossa Senhora do Perpétuo Socorro', 'paroquia', null, 'Av. Jorge Teixeira, s/n', 'Distrito de Vista Alegre do Abunã', 'Porto Velho', 'RO', -8.824864, -63.931, 'Nossa Senhora do Perpétuo Socorro', '6932511220', '', '', '', 'secretaria@paroquiansdops.org', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('77f703ba-fb5b-57fb-ab90-ad9820cbfb51', 'Comunidade São Jorge', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Vila Curuquetê', 'Lábrea', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('2e391d31-c1aa-56b6-bb06-9bffc0346702', 'Comunidade Nossa Senhora Auxiliadora', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Distrito de Abunã', 'Porto Velho', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('a47c0294-6cf4-5d57-b02d-cf20cb7781fd', 'Comunidade São Sebastião', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Distrito de Fortaleza do Abunã', 'Porto Velho', 'RO', -8.765479, -63.922341, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('6f237735-97f3-52b2-b444-062a2e818cb1', 'Comunidade Nossa Senhora Aparecida', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Ramal Castanheira, Vista Alegre', 'Porto Velho', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('796bca43-4d72-51c2-b9b9-170f258abc41', 'Comunidade São Lázaro', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Ramal Primavera, Abunã', 'Porto Velho', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('50efc7b2-fb42-55d0-a44a-2ae369c9cae7', 'Comunidade Nossa Senhora do Rosário', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Ramal 45, Vista Alegre', 'Porto Velho', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true),
  ('2d63b7e5-6b5f-5188-a659-1fe37b10f185', 'Comunidade Nossa Senhora Aparecida', 'comunidade', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', '', 'Ramal do Jequitibá', 'Porto Velho', 'RO', null, null, '', '', '', '', '', '', 'Arquidiocese de Porto Velho', 'https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/', true)
on conflict (id) do nothing;

insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao) values
  ('26921b99-b234-5782-9a33-e006aa6ed0c9', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'missa', 2, null::smallint[], '19:30', 'Novena perpétua da padroeira e missa'),
  ('985958b6-974b-569a-bf0d-0c05fa1b3009', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'missa', 4, '{1}'::smallint[], '19:30', 'Missa pelas famílias'),
  ('ff9dc276-72cf-56eb-a46f-f0edea8314f2', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'missa', 6, null::smallint[], '19:30', ''),
  ('90b6c044-a413-546e-ab6c-03535d9f35fd', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'missa', 0, '{4}'::smallint[], '08:00', 'Missa com as crianças'),
  ('c04124b3-5d5e-589b-898c-24823211dd99', '7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'confissao', 5, null::smallint[], '08:00', 'Até 17h')
on conflict (id) do nothing;

insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values
  ('7b42ed1f-a95c-5bc3-8e26-1e9c6caf05fb', 'Sede no distrito de Vista Alegre do Abunã, Porto Velho; a comunidade de Vila Curuquetê fica em Lábrea, AM.', '{"https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/","https://arquidiocesedeportovelho.org.br/paroquia/paroquia-nossa-senhora-do-perpetuo-socorro-2/"}', 'alta')
on conflict (paroquia_id) do nothing;
