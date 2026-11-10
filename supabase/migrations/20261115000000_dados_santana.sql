do $santana$
begin
  if not exists (
    select 1 from public.paroquias
    where id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21' and nome = 'Paróquia de Sant''Ana' and conferida_em is null
  ) then
    return;
  end if;

  alter table public.paroquias disable trigger trg_paroquia_protege;

  update public.paroquias set
    nome = 'Paróquia de Sant''Ana, Soledade II',
    padroeiro = 'Sant''Ana',
    endereco = 'Av. Ilha de São Paulo, 1110',
    bairro = 'Potengi',
    cidade = 'Natal',
    cep = '59129130',
    telefone = '8436152880',
    instagram = 'paroquiadesantanasoledadeii',
    confirmado_em = now(),
    conferida_em = now(),
    atualizado_em = now()
  where id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21';

  alter table public.paroquias enable trigger trg_paroquia_protege;

  update public.horarios as h set tipo = n.tipo, dia_semana = n.dia, semanas = n.semanas, hora = n.hora, hora_fim = n.fim, observacao = n.obs
  from (values
    ('bf1f86e3-34a9-5a25-960a-4de41379a0bc'::uuid, 'missa', 2::smallint, '{4}'::smallint[], '19:30'::time, null::time, 'Nas ruas'),
    ('f916e917-7053-5478-8259-11a53a7ace21'::uuid, 'confissao', 2::smallint, null, '15:00'::time, '16:50'::time, 'Por ordem de chegada, 15 fichas por dia, retiradas na secretaria'),
    ('3cb73c4b-1b95-5104-bd89-f54648ba40cd'::uuid, 'confissao', 3::smallint, null, '15:00'::time, '16:50'::time, 'Por ordem de chegada, 15 fichas por dia, retiradas na secretaria'),
    ('0e2e10cb-cfe7-585e-ab10-93031b78d9e7'::uuid, 'confissao', 4::smallint, null, '15:00'::time, '16:50'::time, 'Por ordem de chegada, 15 fichas por dia, retiradas na secretaria'),
    ('83c679ee-683d-5e50-8bbf-837f737bd7e1'::uuid, 'confissao', 5::smallint, null, '15:00'::time, '16:50'::time, 'Por ordem de chegada, 15 fichas por dia, retiradas na secretaria')
  ) as n (id, tipo, dia, semanas, hora, fim, obs)
  where h.id = n.id and h.paroquia_id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21';

  update public.notas_paroquia set
    texto = 'Separada da Sant''Ana de Capim Macio. Conferida pelo dono no Instagram oficial (paroquiadesantanasoledadeii): endereço, telefone, missas da matriz (ter a sáb 17h; 4ª terça 19h30 nas ruas; dom 7h, 17h e 19h) e confissões (ter a sex, 15h às 16h50). A paróquia tem várias capelas, ainda não cadastradas.',
    fontes = '{"https://www.instagram.com/paroquiadesantanasoledadeii/","https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-soledade-2-natal"}',
    confianca = 'alta',
    atualizado_em = now()
  where paroquia_id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21';

  insert into public.paroquias (id, nome, tipo, padroeiro, endereco, bairro, cidade, uf, cep, lat, lng, telefone, whatsapp, instagram, site, email, diocese, fonte, confirmado_em, conferida_em) values
    ('6485f907-417e-5a36-89aa-aa8d527f4a21', 'Paróquia de Sant''Ana, Capim Macio', 'paroquia', 'Sant''Ana', 'Rua Des. José Gomes da Costa, s/n', 'Capim Macio', 'Natal', 'RN', '59082150', -5.864580, -35.196694, '8420205323', '84998568056', 'paroquiadesantanacm', '', '', 'Arquidiocese de Natal', 'Instagram da paróquia', now(), now())
  on conflict (id) do nothing;

  insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, hora_fim, observacao) values
    ('77669e11-a1d1-5916-ac2e-e80879b9b1d4', '6485f907-417e-5a36-89aa-aa8d527f4a21', 'missa', 6, null, '17:00', null, ''),
    ('71e12973-4fbb-5a94-8507-0c1eecf542f3', '6485f907-417e-5a36-89aa-aa8d527f4a21', 'missa', 0, null, '10:00', null, ''),
    ('5a032c77-e831-5ff6-8228-f1913aebac78', '6485f907-417e-5a36-89aa-aa8d527f4a21', 'missa', 0, null, '17:00', null, '')
  on conflict (id) do nothing;

  insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values
    ('6485f907-417e-5a36-89aa-aa8d527f4a21', 'Separada da Sant''Ana de Soledade II. Conferida pelo dono no Instagram oficial (paroquiadesantanacm): endereço, contatos e missas (sáb 17h; dom 10h e 17h). A página da Arquidiocese fala também em missa de terça a quinta às 19h e sexta às 17h, que o Instagram não mostra: vale perguntar na secretaria.', '{"https://www.instagram.com/paroquiadesantanacm/","https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-capim-macio-natal"}', 'alta')
  on conflict (paroquia_id) do nothing;
end
$santana$;
