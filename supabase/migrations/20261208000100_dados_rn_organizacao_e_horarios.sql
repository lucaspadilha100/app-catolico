alter table public.paroquias disable trigger trg_paroquia_protege;
update public.paroquias set nome = 'Capela de Nossa Senhora de Fátima' where id = '00315f6c-611c-54f3-ae52-04990485a9c2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4376e8a6-7c30-58a2-9e6b-bd754d91115c'), nome = 'Capela de Nossa Senhora da Conceição' where id = '003747ed-139b-5258-ae30-198715dab49a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora das Graças', tipo = 'paroquia' where id = '00653e37-1798-5b8c-aa28-78a7d832ce2d' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de São Francisco' where id = '009528f3-5807-525d-9e96-3dc8a8c4d61a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de São Sebastião' where id = '00a12a2a-12c8-5e70-b736-baa6d2a8a401' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de São Cristóvão' where id = '00b2a51b-a4da-53e5-94a8-8a00d43bee8f' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia do Sagrado Coração de Jesus', tipo = 'paroquia' where id = '014ee4dd-663d-5565-bb85-0067c1d507ee' and not verificada and conferida_em is null;
update public.paroquias set email = 'santuarioesperanca@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'santuariodaesperanca', nome = 'Paróquia Santuário de Nossa Senhora da Esperança e Santo Inácio de Loyola', telefone = '8436152891', tipo = 'santuario', whatsapp = '8436152891' where id = '0154e5dc-fb39-5b0d-a4b4-10541669fe7d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'), nome = 'Capela de São Sebastião' where id = '01a08411-c308-5a08-b33d-07c353fe931f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Nossa Senhora das Graças' where id = '01bd673c-ec08-50e3-8463-0faef525f802' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '7a759a43-29cc-5878-8a59-653c663b1cee'), nome = 'Capela de São Mateus Moreira' where id = '01bf2352-7617-504f-afc7-d8682ba86911' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de São José Operário' where id = '0218f0be-a23a-5969-a373-a006cb9a0230' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-sagrado-cora%C3%A7%C3%A3o-de-jesus-riachuelo', nome = 'Paróquia do Sagrado Coração de Jesus', telefone = '84998443940', tipo = 'paroquia' where id = '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c87a685e-d14c-5093-9089-27ea09d94e73'), nome = 'Mosteiro de Nossa Senhora de Guadalupe (Clarissas)' where id = '02707a09-81ed-5027-8db5-af4b7c847b1d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'), nome = 'Capela de São Bartolomeu' where id = '02c372e8-65b9-5dab-b82d-c3481a47ce3f' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadesaopauloapostolopa@yahoo.com.br', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-paulo-ap%C3%B3stolo-pedro-avelino', instagram = 'pascom_pedroavelino', nome = 'Paróquia de São Paulo Apóstolo', tipo = 'paroquia' where id = '035302d1-a888-5083-935f-c2537b67e3b4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Nossa Senhora de Fátima' where id = '03631606-1cc5-5c2f-a22f-9c68ed3d030c' and not verificada and conferida_em is null;
update public.paroquias set email = 'livramentotaipu@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-livramento-taipu-rn', instagram = 'paroquiadolivramento.rn', nome = 'Paróquia de Nossa Senhora do Livramento', site = 'www.paroquiadolivramento.com.br', telefone = '8432642201', tipo = 'paroquia', whatsapp = '8432642201' where id = '03652466-9666-5d08-8e5a-bd31d66a138e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de São José' where id = '040c8c87-a907-5529-8d33-de1f77c6e0dc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '423c69d4-cab8-54cc-ad0c-14cbbc17c580'), nome = 'Santuário São José' where id = '0410c939-a222-514e-8447-9944fae03a8c' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '041fe9eb-f753-5856-a997-0c18ce7f52d1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Nossa Senhora das Graças' where id = '048b5c08-3aa1-598c-ad9b-6fa29e58f278' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f357a82d-5e42-5a9c-980b-9316e9cadc9f'), nome = 'Igreja de Santa Luzia' where id = '04be9e35-9d48-573a-98bb-7931277b4330' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Nossa Senhora da Conceição' where id = '05901239-dbec-5d25-b88b-79892c7a1172' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Santa Rita de Cássia' where id = '05a0069e-adfd-5bbc-b3f0-2946d14d1aae' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de São Pedro' where id = '05a4dfff-53c4-5d3f-bfb5-30d6c834fce1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'), nome = 'Comunidade de Santa Dulce dos Pobres' where id = '069c251e-d007-5efe-8d8c-a52adedd5853' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Capela de Nossa Senhora de Sant''Ana' where id = '06f88882-3aab-5cb0-9180-2a65f6a0385b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de São Joaquim' where id = '07009e36-7bd2-5105-b37a-2ed3b39456ad' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaomiguel23@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-s%C3%A3o-miguel-arcanjo-parnamirim', instagram = 'psmarcanjo', nome = 'Paróquia de São Miguel Arcanjo', telefone = '84997065358', tipo = 'paroquia' where id = '07141c5a-ab97-52fb-a309-92dd489ede82' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariapsantaluzia@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-luzia-boa-esperan%C3%A7a-natal', instagram = 'paroquiadesantaluzianatal', nome = 'Paróquia de Santa Luzia', telefone = '8421396892', tipo = 'paroquia' where id = '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Igreja de Nossa Senhora do Desterro' where id = '07a70d47-ccb8-56c4-9cdb-f28a28ad67b9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São Raimundo Nonato' where id = '07eadcdd-3004-58f8-a3b7-b9a26fa52265' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Capela de São José' where id = '0883702a-3cea-5163-a848-4d9d7dd408ba' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'dd3a61ed-5dbe-5dcc-99e6-a413dc567a58'), nome = 'Capela de Nossa Senhora da Conceição' where id = '092a5484-dfd2-5a5f-9723-70b490b06654' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Melancias', matriz_id = (select x.id from public.paroquias x where x.id = '8ea54890-b0dc-57bc-8fb1-bf5208dd8f03'), nome = 'Capela de São Sebastião' where id = '093585f2-97be-5e57-bea6-bff5b6bfeae0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela do Sagrado Coração de Jesus' where id = '093d972b-4f2c-541b-805c-208e30205c4e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f17fbccc-589f-5580-b75b-bc09ccada35f'), nome = 'Capela da Sagrada Família' where id = '0957c6de-f172-5e16-b15a-d865d7448645' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnscsaorafaelrn@outlook.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-s%C3%A3o-rafael', instagram = 'pascomsaorafaelrn', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84987792383', tipo = 'paroquia' where id = '09c403c5-bc31-51e3-b760-8af5e9449ab6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'), nome = 'Capela de Santo André' where id = '0a5c5a9d-a59f-5244-b0da-6bfc5c9b47c8' and not verificada and conferida_em is null;
update public.paroquias set instagram = 'paroquiasaopaulomossoro', nome = 'Paróquia de São Paulo Apóstolo', tipo = 'paroquia' where id = '0a6b06bc-0982-53d3-87ab-02c3b3adea07' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7463c48-9f4b-5b48-9a24-d3972dd3dd9f'), nome = 'Capela de São Pedro' where id = '0a7b765e-4b1d-54b6-a9bb-94e1fa05c78c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de São Francisco de Assis' where id = '0ac0e81b-0c6d-5487-9653-f9454d5f1ef1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'abd09155-be95-5b57-b4de-4dda7afe223f'), nome = 'Comunidade Baixa do Arroz' where id = '0ac83ceb-3a8d-590c-905e-06cf0ab43a65' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadetibaudosul@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-ant%C3%B4nio-de-lisboa-tibau-do-sul', instagram = 'paroquiadetibaudosul', nome = 'Paróquia de Santo Antônio de Lisboa', telefone = '8432464040', tipo = 'paroquia', whatsapp = '84998271666' where id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf' and not verificada and conferida_em is null;
update public.paroquias set email = 'stoantonioser@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-ant%C3%B4nio-serrinha', instagram = 'paroquiaserrinha.rn', nome = 'Paróquia de Santo Antônio', telefone = '84986119695', tipo = 'paroquia', whatsapp = '84986119695' where id = '0b75e4a2-a234-5810-b941-8868d95c65d9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '169b9d22-d338-5296-bb6f-b8b2c5b1be89'), nome = 'Capela do Imaculado Coração de Maria' where id = '0ba4905e-e6f7-52d5-90c9-c1e3062c3582' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Sant''Ana' where id = '0c57ab29-fd8c-58cb-9e92-46a4012e6895' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Sebastião e de São Miguel Arcanjo', tipo = 'paroquia' where id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de São José' where id = '0d59abb8-e201-5788-b314-1b94ab06d347' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Capela de São José' where id = '0d638450-58f5-5232-8fcc-9ee3c9c78d63' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd00e7f73-03a2-5a33-bfaa-e4f84f30db14'), nome = 'Igreja de Nossa Senhora do Perpétuo Socorro' where id = '0dc354d6-dc11-5c70-9252-19961fbb0282' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de Santo Antônio' where id = '0e094172-1f9d-5308-abb6-8cd7d680e684' and not verificada and conferida_em is null;
update public.paroquias set ativa = false where id = '0e9fad75-1eb2-5ebe-935a-3509392db133' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Igreja de Nossa Senhora do Rosário' where id = '0ecc72a9-6680-5041-b619-b89a0117324f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de São José' where id = '0ed0eff6-3dc3-581f-ad20-86dfb8f5b3ad' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de Nossa Senhora de Lourdes' where id = '0f3b7543-21ff-5dd1-bd9b-7b27e4d87acf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b5862952-1883-5f07-9e6d-1021c820fff9'), nome = 'Igreja de Santo Agostinho' where id = '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santos-reis-parnamirim', instagram = 'paroquiadesantosreis', nome = 'Paróquia de Santos Reis', tipo = 'paroquia' where id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), nome = 'Capela de São João Batista' where id = '0fddd969-8614-52b7-8fe9-ca276e4667ca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de São João Batista' where id = '1018a809-adbe-5cbe-88a7-2c67673811e7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São José Operário' where id = '107fd01a-d231-5884-abb3-ef0a8742b267' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São João Batista', tipo = 'paroquia' where id = '117d3285-54dd-5077-b588-05a66839845c' and not verificada and conferida_em is null;
update public.paroquias set tipo = 'area_pastoral' where id = '12914539-10ad-5cc6-8823-33bddad7019a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8a6d4ba3-9398-50bb-8de3-8f944921526a'), nome = 'Comunidade de São João Batista' where id = '12b08bbe-968c-56b5-8e6e-60b39f86a5f2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'), nome = 'Capela de Santa Luzia' where id = '12c4a476-a36d-5d22-9ac8-8f486581d028' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '410b13e3-4752-53b2-a38a-0ccfe03fc037'), nome = 'Igreja de São Vicente' where id = '12e9b72a-0eb9-5271-be39-eb6022dcd1fe' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariaparoquialpn@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'ritadosimpossiveis_pn', nome = 'Paróquia de Santa Rita de Cássia dos Impossíveis', telefone = '8436152840', tipo = 'paroquia', whatsapp = '84988964232' where id = '139ef87c-76a0-5dfa-bc31-09e6e06ff07c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela de São Vicente de Paulo' where id = '13a2b58c-7d98-519e-bd78-0347eecfa612' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de Lucrécia e Frutuoso Gomes', tipo = 'area_missionaria' where id = '13af422a-a5b4-5e8b-abb1-efeedf349ba1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Igreja de São Sebastião' where id = '13fe0e0d-4d35-5188-958f-ebf40e21f324' and not verificada and conferida_em is null;
update public.paroquias set ativa = false, tipo = 'area_pastoral' where id = '141b41b5-36d8-5228-af22-ea109ee76d95' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), nome = 'Capela de São Sebastião' where id = '148ddbfe-7c31-5270-ad06-b439395b2336' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Santuário do Sagrado Coração de Jesus', padroeiro = 'Sagrado Coração de Jesus', tipo = 'santuario' where id = '15468b7d-7d9e-5d18-906d-de837224f25c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capelinha dos Pescadores' where id = '1572c82c-68c6-5ca2-b437-ae6d1be5924f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de Santo Expedito' where id = '16082691-1821-5484-9f51-f16e936ad3b6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de Nossa Senhora da Salete' where id = '168b0df5-4510-5028-9da1-173b47e36151' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-lourdes-ipangua%C3%A7u', instagram = 'pascomipan', nome = 'Paróquia de Nossa Senhora de Lourdes', telefone = '84998688111', tipo = 'paroquia', whatsapp = '84998688111' where id = '169b9d22-d338-5296-bb6f-b8b2c5b1be89' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), nome = 'Capela de Nossa Senhora Aparecida' where id = '16aaede6-e3db-5535-81c3-641a98a20b9d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Nossa Senhora da Conceição' where id = '16d6a770-2f43-53f4-8df2-8e1e02375fea' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de Santa Luzia' where id = '179aa4ce-fe43-545b-8803-d033da9a8abc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de São José Operário' where id = '17bcbd99-dd6c-53fd-8ba4-062a0066509b' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiastabade@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-ant%C3%A3o-abade-s%C3%A3o-bento-do-norte', instagram = 'paroquiasantoantaoabade', nome = 'Paróquia de Santo Antão Abade', tipo = 'paroquia' where id = '18955105-ab97-5577-b1a1-c7dea3fa58bd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de São Cristóvão' where id = '18a65038-c4ea-556f-a7da-3fffed369b1c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'), nome = 'Capela de São Bento' where id = '1953de96-4966-545d-9f22-a57d2450e642' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9dd59b8c-8d3c-5efc-b4d4-d09a6cdc6c9d'), nome = 'Capela de Nossa Senhora do Carmo' where id = '19f060e5-03a8-5408-8f0a-4cfc88b52e0d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf'), nome = 'Capela de Santo Antônio' where id = '1a5dd32f-3d87-53a5-aa6f-917c250d24f5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'da7398b5-b14a-5e47-b930-b65411eec80c'), nome = 'Capela da Medianeira' where id = '1bdb10c6-5af0-529f-a4f1-9d29daba604f' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadenossasenhoradoamparo@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-amparo-coronel-ezequiel', instagram = 'pascomparoquiansdoamparo', nome = 'Paróquia de Nossa Senhora do Amparo', telefone = '84996658340', tipo = 'paroquia' where id = '1cda00e5-b816-5fc7-b1d3-ce8844310502' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ea8cb252-3da9-5b19-8d23-358decc8916b'), nome = 'Igreja de São Sebastião' where id = '1d35788f-b7c6-524a-ae4c-2f00c3692e92' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-e-s%C3%A3o-joaquim-s%C3%A3o-jos%C3%A9-de-mipibu', instagram = 'pascomsaojosedemipibu', nome = 'Paróquia de Sant''Ana e São Joaquim', telefone = '8420600210', tipo = 'paroquia' where id = '1d925f4d-a039-5a06-9913-f53082bc1d1f' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de Nossa Senhora Aparecida' where id = '1dd8a4e9-1fe2-53ca-92e1-b597ce675021' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c334ee45-5fff-544f-a27f-6f9fa5b43b86'), nome = 'Igreja de Nossa Senhora Auxiliadora' where id = '1ded071e-d3b2-5ee3-8d73-23f77dd96382' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de Nossa Senhora do Carmo' where id = '1e0ef046-3418-5127-aac7-d258fec3360b' and not verificada and conferida_em is null;
update public.paroquias set diocese = 'Arquidiocese de Natal', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-mateus-moreira-cidade-verde', instagram = 'paroquiadesaomateusmoreira', nome = 'Paróquia de São Mateus Moreira', site = 'http://paroquiamateusmoreira.com.br', telefone = '8420303381', tipo = 'paroquia' where id = '1e35909a-5fbe-4102-af36-6353c9faed20' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3e8d1d3a-ace5-5710-a426-78cef509aea1'), nome = 'Capela de Mãe Rainha' where id = '1e613b5f-edc5-5b19-8fde-a6f148028ef6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'faca2d7c-a29a-5391-9430-d64df7dd1cbd'), nome = 'Capela de São Sebastião' where id = '205f6ee6-8160-5e18-a82f-8e42b1692339' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade da Sagrada Família' where id = '20d01d98-a994-55ea-86e0-7daa95e23d77' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5fa417b2-81c0-595f-8750-2a71048f21cb'), nome = 'Capela de Nossa Senhora da Conceição' where id = '20d92896-05bb-577e-be26-b6ebe025ec3f' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '212f91f9-e78d-5ae6-9249-4433b314cd6b' and not verificada and conferida_em is null;
update public.paroquias set email = 'nossasenhoradapenharn@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-penha-monte-alegre', nome = 'Paróquia de Nossa Senhora da Penha', telefone = '84999018790', tipo = 'paroquia' where id = '21312229-c1da-5dec-9b85-8710d74d2be3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Nossa Senhora das Graças' where id = '2141c63c-64cb-5770-9a14-84b898205df6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de São Tarcísio' where id = '21f95fe0-e62a-5c07-bc0e-31b195118ee1' and not verificada and conferida_em is null;
update public.paroquias set email = 'pslucas1@live.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'psaolucas.sga.rn', nome = 'Paróquia de São Lucas', telefone = '8436152884', tipo = 'paroquia' where id = '22958298-2062-51f2-8de3-9f9a725615b4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela da Sagrada Família' where id = '229b2af1-8db1-5933-970c-b6226d68bf9c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São Cristóvão' where id = '22a535b8-43df-5d51-9358-da622d1bea46' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'), nome = 'Capela de Nossa Senhora das Vitórias' where id = '22a954ae-d079-55ac-9a85-c575c1564ca1' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de Santa Luzia e Nossa Senhora de Fátima', tipo = 'area_missionaria' where id = '2333ae04-376b-59d7-91e6-2750738c8b77' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ffe5a3a6-7b1d-55a7-84d0-d0be8639355a'), nome = 'Capela de São Sebastião' where id = '2368e1de-4917-5730-9a73-a889123b2736' and not verificada and conferida_em is null;
update public.paroquias set email = 'sfassisparoquia.satelite@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-francisco-de-assis-cidade-sat%C3%A9lite-natal', instagram = 'paroquiasfasatelite', nome = 'Paróquia de São Francisco de Assis', telefone = '8436152834', tipo = 'paroquia', whatsapp = '8436152834' where id = '239ed4e6-c778-5628-9263-699043801cdb' and not verificada and conferida_em is null;
update public.paroquias set email = 'pqnsaparecidabc@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-nossa-senhora-aparecida-s%C3%A3o-jos%C3%A9-de-mipibu', nome = 'Área Pastoral de Nossa Senhora Aparecida', telefone = '84987339162', tipo = 'area_pastoral' where id = '2452d2e5-4069-56f7-b2e6-f92755954be6' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia Sagrada Família', tipo = 'paroquia' where id = '2453b2a6-e61a-528c-97c0-f7b0043a8fe2' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de Santa Teresinha e Nossa Senhora das Graças', tipo = 'area_missionaria' where id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de São Francisco de Assis' where id = '2547bf9d-a857-5672-a8f4-74063a193206' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-sant-ana-do-matos', instagram = 'paroquiadesantanarn', nome = 'Paróquia Santuário de Sant''Ana', tipo = 'santuario', whatsapp = '84996694549' where id = '260a7c53-9b9d-556f-b429-1ecfd2da6b34' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-guamar%C3%A9', instagram = 'paroquiadeguamare', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84996299722', tipo = 'paroquia', whatsapp = '84996299722' where id = '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de Nossa Senhora do Rosário' where id = '268c1c3c-6d6e-5bc2-bf81-d8f4b5989e3c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de São Sebastião' where id = '27b6eb45-3823-5e73-a8a3-5e880ad33ed7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela Menino Jesus de Praga' where id = '27b9d314-d965-5316-baf7-673c5f5a7cca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f04f0c97-76fa-5d6b-b6f8-1e47995e2cb5'), nome = 'Capela de Santa Luzia' where id = '27cf84c3-469a-5f31-9ca5-d8f435f4a2fe' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de São Sebastião' where id = '288bb93c-f17b-5f0a-afa1-0c8e9a3dc662' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São Francisco de Assis' where id = '28c74d4d-d8f4-534e-bda1-49dd8d6dc51c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Nossa Senhora da Imaculada Conceição' where id = '28f4e0a9-a009-5b7b-a495-d36cb0b53ccb' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-nova-parnamirim', instagram = 'pnsdaconceicao_oficial', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '8436152833', tipo = 'paroquia', whatsapp = '84991329119' where id = '29882e93-936f-50f4-b43c-0c849f4895d1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de São José' where id = '29bf81d0-2d1c-5748-8e3a-ef1e53693cd1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Santa Maria Goretti' where id = '29e65406-ce79-523d-81b1-d36348fa709e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora dos Remédios', tipo = 'paroquia' where id = '2a68bc8e-859e-5c29-870f-eb37dab871ca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c3aa864e-8796-5c6b-b808-56aa88a1d633'), nome = 'Capela de São Sebastião' where id = '2b96726d-f7ce-5ce0-b990-127207f7d03a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), nome = 'Capela de Nossa Senhora do Carmo' where id = '2ba12d23-7b89-5370-869e-e99c8069b62f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de Nossa Senhora da Piedade' where id = '2bafcd6a-494a-5938-b11a-b06c11e38cd4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'), nome = 'Capela de São Francisco de Assis' where id = '2bb111c4-2fa3-58b3-9529-36cd4fc35c7c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/paroquiade_santana/', nome = 'Paróquia de Senhora Sant''Ana', tipo = 'paroquia' where id = '2c4136b3-f280-593c-ac42-f75081db0fc2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela Virgem dos Pobres' where id = '2c4557ff-6adf-5a36-8cdb-a956422de443' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'), nome = 'Igreja de São Francisco de Assis' where id = '2c517e66-a056-5cae-9cae-d08411877599' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiademacaiba@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-maca%C3%ADba', instagram = 'pnscmacaiba', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84991952682', tipo = 'paroquia' where id = '2c539d25-f854-5bcb-a358-b3727770077c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de São Vicente de Paulo' where id = '2cb37765-12c5-529d-a0b7-51a4020f15a0' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-bosco-gramor%C3%A9-natal', instagram = 'pardombosco', nome = 'Paróquia de São João Bosco', telefone = '84988618604', tipo = 'paroquia' where id = '2d07182f-6672-5619-9f87-78c1f40c5ce2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-rita-de-c%C3%A1ssia-santa-cruz', instagram = 'paroquiasantaritarn', nome = 'Paróquia de Santa Rita de Cássia', site = 'www.paroquiasantaritarn.com.br', telefone = '84988102112', tipo = 'paroquia' where id = '2d36241f-5c79-531c-bcdc-c8b9e0668232' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Nossa Senhora Aparecida' where id = '2d42ae8c-c76a-50c9-a4a9-927e780082fa' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquia.nisia@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-%C3%B3-n%C3%ADsia-floresta', instagram = 'paroquianisiafloresta', nome = 'Paróquia de Nossa Senhora do Ó', telefone = '84987511693', tipo = 'paroquia' where id = '2d52ea1a-fd98-5158-9388-9b86399fb75d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '18955105-ab97-5577-b1a1-c7dea3fa58bd'), nome = 'Igreja de São Pedro' where id = '2d9d7031-1583-5a1f-9772-18464e933d77' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-apresenta%C3%A7%C3%A3o-cidade-alta-natal', instagram = 'catedralmatriz', nome = 'Paróquia de Nossa Senhora da Apresentação', telefone = '8436152808', tipo = 'paroquia', whatsapp = '8436152808' where id = '2e592cb3-4309-5997-8ad6-d262eb5db22d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'), nome = 'Capela de Nossa Senhora Aparecida' where id = '2eb6fdf1-bfb2-5a08-a149-edee6e648328' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora do Ó', tipo = 'paroquia' where id = '2ef7a662-c3d1-5367-a719-836ce0158cc8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de Nossa Senhora Aparecida' where id = '2ef84f25-daf3-588a-a5de-9bfb6a619bf0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de São Francisco de Assis' where id = '2fb9ea50-f86a-5209-8555-dbe69ccd45d2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f17fbccc-589f-5580-b75b-bc09ccada35f'), nome = 'Capela de São Miguel Arcanjo' where id = '2fefa625-ddf1-5b70-b751-36937a1d98fe' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariaparoquialpnc@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-da-imaculada-concei%C3%A7%C3%A3o-nova-cruz', instagram = 'paroquiaimaculadaconceicaorn', nome = 'Paróquia da Imaculada Conceição', telefone = '84994016391', tipo = 'paroquia' where id = '3048a577-4134-5647-8dd4-d2db3a52e670' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de São Francisco e São Sebastião' where id = '3119d852-ff55-5929-9c9c-579a87696e0f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c87a685e-d14c-5093-9089-27ea09d94e73'), nome = 'Capela de São João Batista' where id = '315a53cc-a4ee-58b8-a44d-503a98505b93' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de Nossa Senhora da Guia' where id = '319eafb6-fccb-5ec3-88ef-d27c211d6697' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Nossa Senhora de Guadalupe' where id = '31fcf1d1-0aba-590f-9fdb-746eb4031b7d' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Área Pastoral de Nossa Senhora do Perpétuo Socorro', tipo = 'area_pastoral' where id = '32cf94c2-b824-58ed-98db-fde298700993' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3d9b1321-aa01-5b96-84fb-c07299279e51'), nome = 'Comunidade do Cristo Redentor' where id = '333bc8a4-3834-584f-a7e2-17a2bdbaafa0' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de São Sebastião' where id = '33b3abd5-e3ee-5ecd-93b9-e8e080a3fd68' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Santa Cecília' where id = '33f10954-11c7-5a7c-a470-b0189601fc78' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Perímetro Irrigado', matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São Pedro' where id = '341246cf-6637-5c3a-a3ed-3ba4d9a78460' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'abd09155-be95-5b57-b4de-4dda7afe223f'), nome = 'Igreja da Divina Misericórdia' where id = '344a6f57-a97f-5b0a-ad07-e2f150347860' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de São Sebastião' where id = '353d945e-4e27-578e-884a-3ccc6f0eaac8' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de São Pedro' where id = '358887f6-de46-5c9e-bd17-8babfcdf2c0d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santo Expedito' where id = '35aa19d9-d148-5471-b0b2-90fa36970464' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de Santo Antônio' where id = '3605c07a-df77-57ab-bdb0-1c9916d25319' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'), nome = 'Capela de Nossa Senhora de Fátima' where id = '36b387c8-c7c1-5f14-bbef-0ee10cd2bbdd' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaopedropescadorbf@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-pedro-pescador-ba%C3%ADa-formosa', instagram = 'saopedropescadorbf', nome = 'Paróquia de São Pedro Pescador', tipo = 'paroquia' where id = '37604de3-7f90-57bd-8060-be9ee91183a8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8eea7ae5-da37-573a-809a-7e4e653417d6'), nome = 'Capela de Santa Luzia' where id = '38069ce3-12ea-5d72-b825-29c278c5ae49' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'bd91bb5d-5833-513a-bdad-fbc27e449efe'), nome = 'Capela de São João Batista' where id = '384a0c50-5f4e-5bbb-b5cd-b1136f452688' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaotome@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-s%C3%A3o-tom%C3%A9', instagram = 'pascom_saotome', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84992314062', tipo = 'paroquia' where id = '38a92e98-2912-5985-9daa-15405f51ad0b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Santa Clara' where id = '38f67041-200c-58b0-a90c-c21575f9dfb0' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'arquidiocesedenatal.org.br', nome = 'Paróquia da Virgem e Mártir Santa Luzia', tipo = 'paroquia' where id = '399c4d41-ef1e-57cb-ac33-7dad4a9c6736' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'), nome = 'Santuário Arquidiocesano dos Santos Reis' where id = '39f883b7-536d-5929-9bbd-10f9474b4ce3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'), nome = 'Capela de Nossa Senhora Aparecida' where id = '3a14e5ce-13fe-5f1c-ade6-11b3214d5cac' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora das Vitórias' where id = '3a2f5fa9-07e5-5b6f-a875-03779e1dabd6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8cb629db-b787-5c7a-ae08-4922fa3d0528'), nome = 'Capela de Nossa Senhora das Vitórias' where id = '3a5826fb-491e-5a86-a2fb-28ebf45ca8db' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b4d6a69d-81d3-50cc-9d83-b5d27124e65e'), nome = 'Capela de Nossa Senhora de Fátima (Monte Alegre)' where id = '3a61ee44-6cc4-5df9-b84e-fe55bddad17c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'), nome = 'Capela de São José' where id = '3b0d4323-7e57-5eac-a3aa-baafb4de5621' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2e592cb3-4309-5997-8ad6-d262eb5db22d'), nome = 'Igreja de Santo Antônio' where id = '3b0f845a-5443-5232-a664-23a2ce75536f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), nome = 'Capela de São José Operário' where id = '3b8770dd-853a-5a52-b36d-c7b7075cbc96' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89115597-79cb-5bcc-8714-7d2c70450408'), nome = 'Capela de São Sebastião' where id = '3b8c69e8-3e3d-5b59-8dc3-9ea288a4185c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela de Nossa Senhora das Graças' where id = '3bdb0053-d06b-596a-b021-40df6f400df7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela Virgem dos Pobres' where id = '3c11b3d0-c484-5a3f-9552-b8d808a0c03e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b33e47df-0ac5-51fa-a428-9c9e90a24c39'), nome = 'Santuário Frei Damião', tipo = 'santuario' where id = '3c226218-e0d7-5361-87fa-05c9b7c4612a' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Panon II', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Igreja de Nossa Senhora de Fátima' where id = '3c421936-1c5c-55e5-b98a-77860965f596' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaopedroapostolosprn@yahoo.com.br', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-pedro-ap%C3%B3stolo-s%C3%A3o-pedro', instagram = 'paroquiasaopedrorn', nome = 'Paróquia de São Pedro Apóstolo', telefone = '84988308485', tipo = 'paroquia' where id = '3c6e0f17-4b08-5453-96fc-9034fcf23977' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora dos Navegantes' where id = '3c9ebab1-ddde-5730-bd68-4f90d31244ff' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Francisco das Chagas', tipo = 'paroquia' where id = '3cf34f57-e3f9-5112-8d8c-72c2f40ca52f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '51ffc886-8e24-5acc-b5fa-9cd65d785229'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = '3d0aae21-3186-55fa-b437-5113b17f66ce' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Santo Expedito' where id = '3d0d1aae-7136-592d-9a15-d8fd8a851eca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Comunidade de Barra do Cunhaú' where id = '3d80b5be-9163-584d-9f79-6dd4870b9e9c' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariaparoquialjanda@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jos%C3%A9-oper%C3%A1rio-janda%C3%ADra', instagram = 'paroquiadejandaira', nome = 'Paróquia de São José Operário', tipo = 'paroquia' where id = '3d8a1a77-4778-59ce-a343-55755a2b41e6' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasjbatista@yahoo.com.br', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-lagoa-seca-natal', instagram = 'saojoaonatal', nome = 'Paróquia de São João Batista', telefone = '8436152871', tipo = 'paroquia', whatsapp = '84999274343' where id = '3d9b1321-aa01-5b96-84fb-c07299279e51' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de São Francisco de Assis' where id = '3dccbe6a-93a1-5ace-a30c-e6e43d79cded' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de Nossa Senhora de Fátima' where id = '3dcd18e0-d687-5804-bf7d-5ce51bed5bd3' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '3e8d1d3a-ace5-5710-a426-78cef509aea1' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Fazenda Paraíso', matriz_id = (select x.id from public.paroquias x where x.id = '8622048e-33fb-5fac-977f-0b34f73e488c'), nome = 'Capela de Nossa Senhora da Piedade' where id = '3eb08d58-fbec-5ab2-80ea-8d50542d9354' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade de Muriú' where id = '3ec4fbee-4505-5a7a-b486-72fd1e75e0e0' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Sant''Ana', tipo = 'paroquia' where id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade de Caraúbas' where id = '3efbf51e-c146-5173-8f4d-48cb3ab80897' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora do Carmo' where id = '3f68fb84-4ea9-52a0-8a3b-619e493df60b' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Severino Mártir', tipo = 'paroquia' where id = '3f7e5004-438f-5258-aa42-3f43bae67c89' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '833059cc-8900-554f-95a9-25d6fbddae2b'), nome = 'Capela de São Judas Tadeu' where id = '3ff1183b-0eed-5c7f-acc1-8a55b8fa2f9f' and not verificada and conferida_em is null;
update public.paroquias set email = 'secparoquiasagradafamilia@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-da-sagrada-fam%C3%ADlia-rocas-natal', instagram = 'sagradafamilianatal', nome = 'Paróquia da Sagrada Família', telefone = '84991438842', tipo = 'paroquia' where id = '4082bfb0-8b61-5d6e-96ec-f7f8086103a7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '212f91f9-e78d-5ae6-9249-4433b314cd6b'), nome = 'Capela de São Sebastião' where id = '40cb3cea-a23d-5b30-aea5-7a0554ed6c99' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/paroquiasantaluziamossoro/', nome = 'Catedral de Santa Luzia', tipo = 'catedral' where id = '410b13e3-4752-53b2-a38a-0ccfe03fc037' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Nossa Senhora de Fátima' where id = '4130c1bf-fdaa-5282-81a2-7e23811dbb8a' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia da Imaculada Conceição', tipo = 'paroquia' where id = '41787583-85b5-5898-b376-365826bb9b40' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Sebastião e de Nossa Senhora das Graças', tipo = 'paroquia' where id = '41cd4f7c-0be1-5459-99af-8ed8f0924987' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Capela de Nossa Senhora das Graças' where id = '41e92fc1-a8a1-5881-a30a-582638e8a34c' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Santo Antônio', tipo = 'paroquia' where id = '423c69d4-cab8-54cc-ad0c-14cbbc17c580' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Capela de Santa Maria Goretti' where id = '42474f9b-6d3d-5094-96fa-0bd35fef71da' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade de Maracajaú' where id = '426ef105-438e-5361-bdea-cd8433b25829' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e2ef5c1e-c067-525f-b96d-d15427742c0a'), nome = 'Capela do Sagrado Coração de Jesus' where id = '42c63f81-1aa7-5b97-89cc-cef69f8b66c8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b829ec6c-d5e5-5a46-bc61-c147d760599a'), nome = 'Capela de São José' where id = '42c75445-2c1d-558e-a71e-2f7d46662a12' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Santuário de Santa Clara', tipo = 'santuario' where id = '43313a8e-e5c1-58ca-8973-8a4edb73b2ba' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaopauloapostolo1943@outlook.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-paulo-ap%C3%B3stolo-s%C3%A3o-paulo-do-potengi', instagram = 'paroquiasaopaulospp', nome = 'Paróquia de São Paulo Apóstolo', telefone = '84991594468', tipo = 'paroquia' where id = '4376e8a6-7c30-58a2-9e6b-bd754d91115c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '636be2b4-aa2d-5aeb-b800-59a1369b823f'), nome = 'Igreja de São Francisco de Assis' where id = '443d5be2-b788-57f1-8a1a-da7c4e2e1523' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3f7e5004-438f-5258-aa42-3f43bae67c89'), nome = 'Capela de Nossa Senhora da Conceição' where id = '44558d19-e488-5c8a-981b-a847f227ae65' and not verificada and conferida_em is null;
update public.paroquias set ativa = false where id = '44d86254-fc28-570f-8b0e-69fb2192935c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'), nome = 'Capela de São José' where id = '451e27f9-bc00-5df8-b7d3-960451ff1f04' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-sagrado-cora%C3%A7%C3%A3o-de-jesus-bom-jesus', instagram = 'pscjbomjesus', nome = 'Paróquia do Sagrado Coração de Jesus', telefone = '84987156527', tipo = 'paroquia', whatsapp = '84987156527' where id = '455b9a01-f386-57e6-b266-5483160fed5d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela da Casa de Evangelização RCC' where id = '459cacd2-e511-5b44-81a3-1bbbeda0588d' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/paroquiablsc/', nome = 'Paróquia Bem-Aventurada Lindalva e São Cristóvão', tipo = 'paroquia' where id = '45e5bcd7-54f8-50e7-a977-a8a08db64c2a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora das Dores', tipo = 'paroquia' where id = '45ef3c29-5e55-54a3-8c6b-40cde4138089' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-maxaranguape', instagram = 'pnsconceicaoo', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84998920085', tipo = 'paroquia' where id = '46200e8d-7aa9-5abe-bf08-231270b22973' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2d07182f-6672-5619-9f87-78c1f40c5ce2'), nome = 'Capela de São Felipe' where id = '463e350e-4e64-5a7a-8590-129e55c08e07' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santa Luzia' where id = '471fb207-1286-5650-85b5-777d40cbac1e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela da Virgem dos Pobres' where id = '47926a87-b876-5265-8a70-2b37d6bb5b4d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5472874b-c0a1-5dc4-b76e-c60f1439eda9'), nome = 'Comunidade Nossa Senhora de Fátima' where id = '47e25ee3-85a2-5aae-9e85-2b1659784eea' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de São José e Nossa Senhora do Perpétuo Socorro', tipo = 'area_missionaria' where id = '48454693-2f24-57b3-b774-b2b9831ae94f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela do Sagrado Coração de Jesus' where id = '48595a1a-e335-5040-8d3a-6d731b43764e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de São Pedro' where id = '493e82aa-139f-5da7-bb07-4f2ce4e176bf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São Benedito' where id = '498b5b1b-3476-5c3c-933c-dcba9a50fa7c' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiaextremoz@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-miguel-extremoz', instagram = 'paroquiaextremoz', nome = 'Paróquia de São Miguel Arcanjo', telefone = '8432792716', tipo = 'paroquia' where id = '4ab3cda0-1c84-5850-a2ca-18f304cf21a8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'), nome = 'Comunidade de São José Operário' where id = '4b3ca1db-548c-572d-9d7b-420324c41db5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Santa Luzia' where id = '4b51e320-bdc0-5d16-9ceb-c989cce70866' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de São João Lostau e São João Paulo II' where id = '4b7c1739-e58a-5b6a-956f-c48b191360a3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'dd3a61ed-5dbe-5dcc-99e6-a413dc567a58'), nome = 'Capela de São Vicente de Paulo' where id = '4bb5c798-2ae4-5be0-970e-b36f33240cdd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de Santo Expedito' where id = '4bebd6a3-4ff5-5fa4-a675-430a9ee96931' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de São Pedro' where id = '4c5ec76f-dbc2-509f-b9de-9c23448ff8c7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '18955105-ab97-5577-b1a1-c7dea3fa58bd'), nome = 'Capela de Santa Rita' where id = '4d300336-e013-5f43-b3a9-a93530adb8a8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Capela da Sagrada Família' where id = '4dcc6988-c97b-5163-98c4-7eb2478a5425' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de São Pedro' where id = '4ee6e429-f530-5c0f-8c4b-d582eaa53751' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Nossa Senhora de Lourdes' where id = '4fecebd6-5891-5365-b409-da4f69241a0a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2e592cb3-4309-5997-8ad6-d262eb5db22d'), nome = 'Capela do Sagrado Coração de Jesus' where id = '500851c2-c83b-50e5-aa4c-d1ab4e1caea3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de Santa Isabel' where id = '50cd37e0-8d69-511d-90ff-1d8398419859' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnslourdes.natal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-lourdes-areia-preta-natal', instagram = 'pnslnatal', nome = 'Paróquia de Nossa Senhora de Lourdes', telefone = '8436152860', tipo = 'paroquia', whatsapp = '84996310213' where id = '51cb7006-a30b-5d73-8883-a882a4e634a6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'), nome = 'Capela de São José' where id = '51ecc704-f11e-530e-b0ea-81214cb1a2f0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Capela de São Bento' where id = '51ee8040-7e24-5b02-901c-1778468ac137' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '51ffc886-8e24-5acc-b5fa-9cd65d785229' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Santo Antônio' where id = '52444b51-ad5b-51d2-88a2-88c3ef5b0ae7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'), nome = 'Capela de Nossa Senhora da Conceição e Divina Misericórdia' where id = '5251a354-c1f7-57be-8265-5464366316ff' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnspgoianinha@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-dos-prazeres-goianinha', instagram = 'pnspgoianinha', nome = 'Paróquia de Nossa Senhora dos Prazeres', telefone = '84992239573', tipo = 'paroquia', whatsapp = '84992239573' where id = '52678501-b7cd-55de-8ed4-049b960e7b84' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora das Graças' where id = '52800949-1100-581f-967c-0a9c7c6c1273' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de Santa Clara de Assis' where id = '52adf077-83d3-5e58-99e7-c2bf5efd7c2f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Nossa Senhora de Fátima' where id = '5339013e-3fcb-5333-95f2-83b6a640993e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Capela de São Francisco de Assis' where id = '534f175d-81c2-5c8a-8bc5-c35c63d0f897' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3d9b1321-aa01-5b96-84fb-c07299279e51'), nome = 'Igreja de Santo Antônio' where id = '53a2059b-0630-5ea8-8e27-836e99b88f47' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd00e7f73-03a2-5a33-bfaa-e4f84f30db14'), nome = 'Capela de Santa Filomena' where id = '53ce9205-bdf8-590f-bab4-d021c3da5970' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-assun%C3%A7%C3%A3o-guarapes', instagram = 'paroquiaassuncao_', nome = 'Paróquia de Nossa Senhora da Assunção', tipo = 'paroquia' where id = '541f6e5b-9b73-5830-af12-361a5762e789' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora Aparecida', tipo = 'paroquia' where id = '5472874b-c0a1-5dc4-b76e-c60f1439eda9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '51ffc886-8e24-5acc-b5fa-9cd65d785229'), nome = 'Capela do Sagrado Coração de Jesus' where id = '54fa5f58-d4ba-5f53-8f9c-5cb709f792e6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de São José' where id = '554568a9-e86c-583b-a05c-a835a0316cfd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'), nome = 'Capela de Nossa Senhora das Graças' where id = '5564ebeb-46ba-5344-8c09-d7e020a8313e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'), nome = 'Capela de São Pedro e São Paulo' where id = '5692f833-e0b7-5aaa-a5b9-f1be332fbee6' and not verificada and conferida_em is null;
update public.paroquias set email = 'psaotomeapostolo@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-tom%C3%A9-ap%C3%B3stolo-conj-cidade-do-sol-natal', instagram = 'saotomeapostolo', nome = 'Paróquia de São Tomé Apóstolo', telefone = '84996611174', tipo = 'paroquia' where id = '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'), nome = 'Capela de Nossa Senhora da Conceição' where id = '56df358b-1c1e-5f89-a3bd-cce83ae1d3c2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de Nossa Senhora da Conceição' where id = '57580b23-f20d-548d-9d0d-3d672635097d' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Linda Flor', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de São José' where id = '57cd4e5a-d949-56a7-98d3-51dce3a54cd5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8eea7ae5-da37-573a-809a-7e4e653417d6'), nome = 'Capela de Santa Teresinha' where id = '5831b771-aac2-5978-8cd5-52e61e28c951' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e477dcfa-cd9d-598e-8726-4bf327b1acca'), nome = 'Capela de São Paulo Apóstolo' where id = '5834313a-b867-5bff-a0c4-1b6f48776d32' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'), nome = 'Santuário de Nossa Senhora do Rosário', padroeiro = 'Nossa Senhora do Rosário', tipo = 'santuario' where id = '585cbfec-029a-5f7a-a93d-28694e3ae066' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'), nome = 'Capela do Santo Cristo Redentor' where id = '59e07032-a05f-5981-bcba-0832cd231dc4' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Salinópolis', matriz_id = (select x.id from public.paroquias x where x.id = '212f91f9-e78d-5ae6-9249-4433b314cd6b'), nome = 'Igreja Católica' where id = '59e6e9ae-d123-5336-912b-5167d3b2948f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela de Nossa Senhora de Lourdes' where id = '5bc9f784-53e8-5a3f-9510-66ec16232e00' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', instagram = 'paroquiasantacruzcaico', nome = 'Paróquia de Santa Cruz e Nossa Senhora das Dores', tipo = 'paroquia' where id = '5c1d543e-4862-5ff0-b944-eafd07daafb4' and not verificada and conferida_em is null;
update public.paroquias set email = 'matrizdenossasenhoradasaude@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-sa%C3%BAde-boa-sa%C3%BAde', instagram = 'pascomboasaude', nome = 'Paróquia de Nossa Senhora da Saúde', tipo = 'paroquia' where id = '5c7467df-a22d-597f-8375-0844d196529c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'), nome = 'Comunidade Sagrado Coração' where id = '5c96c792-3e0b-590f-b299-1c8298a0939e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de Santa Rita de Cássia' where id = '5c9b696d-d8ce-51f9-85ec-605884540b10' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santa Luzia' where id = '5d9f56d6-6bc7-5a3b-a642-f583df3a80e3' and not verificada and conferida_em is null;
update public.paroquias set email = 'santuariodefatimanatal@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'psnsfatimanatal', nome = 'Paróquia Santuário de Nossa Senhora de Fátima', telefone = '8421366390', tipo = 'santuario' where id = '5da20740-3e92-5fcd-a04a-b82f38e89b33' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de São Francisco de Assis' where id = '5e76e49d-a470-5dba-b02e-8885aec7f417' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Nossa Senhora do Desterro' where id = '5f2d2d77-9243-55ba-86b5-ae78d49b1457' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Santa Luzia' where id = '5f420431-9095-5b0b-a1ab-3479de96a102' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Retiro' where id = '5f608d38-9583-5f51-91e4-68d03b1ddca2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-santo-ambr%C3%B3sio-francisco-ferro-planalto', instagram = 'psambrosio_', nome = 'Paróquia de Santo Ambrósio Francisco Ferro', telefone = '8432187512', tipo = 'paroquia' where id = '5fa417b2-81c0-595f-8750-2a71048f21cb' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Santa Luzia' where id = '5fe5ffbd-6b0d-5ada-9326-bc4bad989fe9' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Mutamba da Caeira', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de São Pedro e São Paulo' where id = '60308057-4281-5fd9-9534-0b5c84969a02' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f357a82d-5e42-5a9c-980b-9316e9cadc9f'), nome = 'Igreja Católica de Olho-d''Água do Borges' where id = '607ad2a6-2aab-5c96-bcf3-9763578ac59c' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnsd.brejinho@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-das-dores-brejinho', instagram = 'paroquiansradasdores_', nome = 'Paróquia de Nossa Senhora das Dores', telefone = '8432832385', tipo = 'paroquia' where id = '6098c7df-3055-56e9-9430-a0478edf4e0a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São José' where id = '60a63187-47f0-515a-8f1e-ceb454a5cd13' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c8b2cc7d-2544-56a4-8bce-52c8a52ca107'), nome = 'Capela de São Francisco' where id = '60f7d746-cb29-5972-843b-6ba3da11c165' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela de Santo Antônio' where id = '61af1ec4-22eb-5f19-bcf8-73aacc6587f3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '169b9d22-d338-5296-bb6f-b8b2c5b1be89'), nome = 'Igreja de São Pedro' where id = '61f88331-f28a-5590-9942-1e67f86b748f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'), nome = 'Capela de São Francisco de Assis' where id = '62109d98-1837-56fc-83be-0fb3770b81e1' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadosoveral.financeiro@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-santo-andr%C3%A9-de-soveral-jardim-aeroporto', instagram = 'paroquiasantoandre', nome = 'Paróquia de Santo André de Soveral', telefone = '8436431355', tipo = 'paroquia' where id = '62153461-4305-5e52-bd18-51feef969385' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasmmnatal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-maria-m%C3%A3e-conj-santa-catarina-natal', instagram = 'paroquiadesantamariamae', nome = 'Paróquia de Santa Maria Mãe', telefone = '8436152886', tipo = 'paroquia' where id = '622a2179-0d32-5178-84f3-73cca1ab3b90' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia Sagrada Família', tipo = 'paroquia' where id = '626197c7-fd22-5813-8145-8660f36f999e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'), nome = 'Capela de São Francisco de Assis' where id = '630426d3-903e-544b-8b8a-bf1a530647b6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de São Rafael' where id = '6320f5df-73ad-5d05-824e-d6053aa8cf77' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade do Divino Espírito Santo' where id = '635244e8-26ac-5ac7-9438-c8e7f7cd3a39' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquianslourdescamporedondo@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-lourdes-campo-redondo', instagram = 'paroquianslourdesrn', nome = 'Paróquia de Nossa Senhora de Lourdes', telefone = '84996681598', tipo = 'paroquia' where id = '636be2b4-aa2d-5aeb-b800-59a1369b823f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd00e7f73-03a2-5a33-bfaa-e4f84f30db14'), nome = 'Igreja do Sagrado Coração de Jesus' where id = '63df5ff7-706b-5c61-a9a5-6907e999df2c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/joaopaulo_2210/', instagram = 'joaopaulo_2210', nome = 'Quase-Paróquia São João Paulo II', tipo = 'quase_paroquia' where id = '6400902b-7578-5b46-be6d-6097dd87876e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'), nome = 'Capela de São Geraldo Majella' where id = '64477daa-1297-58d5-b54f-9e606bc60f21' and not verificada and conferida_em is null;
update public.paroquias set email = 'psgamarante2013@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-gon%C3%A7alo-do-amarante', instagram = 'paroquiadesga', nome = 'Paróquia de São Gonçalo do Amarante', telefone = '8432782843', tipo = 'paroquia' where id = '64754544-82e0-52df-bd42-19fe16ee846b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São Judas Tadeu' where id = '64780a32-6e9f-5b58-9e12-8451801ed467' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasantanacm@yahoo.com.br', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-capim-macio-natal', instagram = 'paroquiadesantanacm', nome = 'Paróquia de Sant''Ana', telefone = '8420205323', tipo = 'paroquia' where id = '6485f907-417e-5a36-89aa-aa8d527f4a21' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fcdd864e-f767-5197-840f-bb394d14a874'), nome = 'Capela de Nossa Senhora da Conceição' where id = '6587438e-c7a2-5e3a-905f-8057c76d65e8' and not verificada and conferida_em is null;
update public.paroquias set email = 'virgemdasgracasab@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-das-gra%C3%A7as-afonso-bezerra', instagram = 'pnsdasgracasab', nome = 'Paróquia de Nossa Senhora das Graças', telefone = '84981486372', tipo = 'paroquia', whatsapp = '84981486372' where id = '65a6d60e-1628-539f-9af4-129a0b11dc3e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São Francisco de Assis' where id = '65b0f4d1-ad20-585d-828d-fcce615f006f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '718d4976-f9f4-5be4-b746-eebcc180c206'), nome = 'Capela de São Francisco de Assis' where id = '661dbf10-864b-58f6-995b-b57531e3e3ba' and not verificada and conferida_em is null;
update public.paroquias set email = 'sapnsconceicao@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-santo-ant%C3%B4nio', instagram = 'tvconceicao_', nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '669870ae-bd50-54b3-b4f7-50dc20ae76c2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5fa417b2-81c0-595f-8750-2a71048f21cb'), nome = 'Capela de São José Operário' where id = '6788c704-67f9-5751-adea-97dcf44d24a5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de Santa Luzia' where id = '67e499dd-db38-545e-9cf2-27a57255a637' and not verificada and conferida_em is null;
update public.paroquias set email = 'psaosebastiao@outlook.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-sebasti%C3%A3o-alecrim-natal', instagram = 'psaosebastiaonatal', nome = 'Paróquia de São Sebastião', telefone = '8436152874', tipo = 'paroquia' where id = '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b829ec6c-d5e5-5a46-bc61-c147d760599a'), nome = 'Capela de São Francisco de Assis' where id = '69149ae2-3f66-50b2-95af-193b60eae9d8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = '69c7ba8b-d911-5685-9118-810a9edbd96b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São Pedro' where id = '69f12726-3645-5a30-b7c6-b9b8643cc62e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89115597-79cb-5bcc-8714-7d2c70450408'), nome = 'Capela de Nossa Senhora da Conceição' where id = '6a6ec7d7-3176-5496-a75e-e5f298d6da0a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Jesus Menino' where id = '6b9f2e56-65e2-5eb1-b3d2-851e5b2a7607' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-pedro-ap%C3%B3stolo-v%C3%A1rzea', instagram = 'vemprarede.saopedro', nome = 'Paróquia de São Pedro Apóstolo', telefone = '84987025903', tipo = 'paroquia' where id = '6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São José', tipo = 'paroquia' where id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela N. S. de Lourdes' where id = '6cf26871-9708-55cc-a0ee-e6db657adeea' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-sant-ana-soledade-2-natal', instagram = 'paroquiadesantanasoledadeii', nome = 'Paróquia de Sant''Ana', telefone = '8436152880', tipo = 'paroquia' where id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-serra-caiada', instagram = 'paroquiadeserracaiada', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84986480403', tipo = 'paroquia' where id = '6d776938-09c2-57e2-aee3-88f9cbd61356' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de Nossa Senhora da Conceição' where id = '6d9f5548-b03f-51ec-ad8a-631f8af2b5f6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São Pedro' where id = '6da0ff36-e2ce-5c65-be1f-f96b1b780006' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Santa Rosa' where id = '6dcb3b47-9021-5eff-be93-d54fe84b725d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'dd3a61ed-5dbe-5dcc-99e6-a413dc567a58'), nome = 'Capela do Sítio Vaca Morta' where id = '6ddfa8be-70e7-5cc6-8075-a455341f6aa7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2e592cb3-4309-5997-8ad6-d262eb5db22d'), nome = 'Capela de São Félix' where id = '6e6c59a9-a526-5a58-bd8b-f1baeddbe8bd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de São José' where id = '6ecf6425-9d38-5594-97f2-621fc0046ca2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b'), nome = 'Capela de Nossa Senhora do Rosário' where id = '6f50e8c1-e97a-54c5-8310-1809e85ff30d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de São Francisco de Assis' where id = '6fc21cb8-fd7b-53dd-9d5c-e8512116b99a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'), nome = 'Capela de São Sebastião' where id = '715dc3e8-7fba-56c3-b095-32dc152295dc' and not verificada and conferida_em is null;
update public.paroquias set email = 'psantaclaranatal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-clara-pitimbu-natal', instagram = 'paroquiascnatal', nome = 'Paróquia de Santa Clara', telefone = '8436183113', tipo = 'paroquia' where id = '718d4976-f9f4-5be4-b746-eebcc180c206' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'bd91bb5d-5833-513a-bdad-fbc27e449efe'), nome = 'Capela de Santo Expedito' where id = '7282919a-533d-5f32-85bf-cef066c7bb41' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b'), nome = 'Capela de Nossa Senhora de Salete' where id = '72b58f7f-67e8-5e98-8cca-38f9fca00a31' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '212f91f9-e78d-5ae6-9249-4433b314cd6b'), nome = 'Santuário da Divina Misericórdia' where id = '72fdd1ab-d1b8-5636-b5e0-e8aa899d22ce' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Capela de Nossa Senhora das Candeias' where id = '7395fc65-caea-5184-a56d-958925eb868a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'), nome = 'Comunidade de São Miguel Arcanjo' where id = '740e90a1-6860-54f3-8be5-8bbd3cc9ee79' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela de Nossa Senhora Aparecida' where id = '7442961f-8bdb-5ca2-ade6-91aa4ae38bf9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '239ed4e6-c778-5628-9263-699043801cdb'), nome = 'Capela de Santa Luzia' where id = '74851423-4de7-597e-91a9-a7c8aa15025b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São João Batista' where id = '74b249ce-e9fb-5cb6-a37c-ca37df218fc0' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Manoel', tipo = 'paroquia' where id = '753586bc-01b5-55de-839a-f241a48b190b' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquianscpdp@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'paroquiadaconceicaopdp', nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '753d8f35-8033-5f10-91c5-98580308e290' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de Santa Luzia' where id = '75604410-a6d8-5699-95f8-3e8284ea07f1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '260a7c53-9b9d-556f-b429-1ecfd2da6b34'), nome = 'Capela de Nossa Senhora da Conceição' where id = '7567e573-7502-5085-9822-c8243d851639' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '856876df-264b-5cdd-8c6c-346b40411d2e'), nome = 'Igreja de São Francisco' where id = '75a124d6-75f9-5d9a-8444-59a82875d34c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9dd59b8c-8d3c-5efc-b4d4-d09a6cdc6c9d'), nome = 'Capela de Santo Antônio' where id = '75f90650-f9bf-5aa8-adad-9b9f915e75c9' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Santuário Nossa Senhora de Fátima', padroeiro = 'Nossa Senhora de Fátima', tipo = 'santuario' where id = '763b022f-bd74-5f16-a602-6b8d321f7594' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de Nossa Senhora da Conceição' where id = '7669f41f-940d-5678-84f0-dbe929f82b35' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São João Batista', tipo = 'paroquia' where id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Nossa Senhora da Conceição' where id = '77110c96-c001-5020-9fc4-772d11600a59' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8cb629db-b787-5c7a-ae08-4922fa3d0528'), nome = 'Capela da Mãe Peregrina' where id = '773940db-6adc-5bd5-a237-32973767ffa6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de Nossa Senhora da Conceição' where id = '77689aae-7a2f-5b5e-80ce-bb4614cc056e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2d07182f-6672-5619-9f87-78c1f40c5ce2'), nome = 'Capela de São Simão' where id = '778748bf-de40-535b-a5a3-8d16f2b0a059' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São José' where id = '787ec272-5892-5720-85a2-a259abf6c705' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de Nossa Senhora das Graças' where id = '7882aa65-9ea9-55f1-b3ec-811541953c4b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89115597-79cb-5bcc-8714-7d2c70450408'), nome = 'Capela de São Francisco' where id = '78d29ba1-334d-574b-be5f-e9df1085de94' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '455b9a01-f386-57e6-b266-5483160fed5d'), nome = 'Capela de Santa Rita de Cássia' where id = '79c4e609-3ca3-500b-adb8-d44c1ae2e19f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2e592cb3-4309-5997-8ad6-d262eb5db22d'), nome = 'Igreja de Nossa Senhora do Rosário' where id = '79c52f4c-91d4-5550-b17b-490c85b87279' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de São Francisco de Assis' where id = '79e0add3-8061-52d9-a347-025ec6447981' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-pureza-pureza', instagram = 'pnspureza', nome = 'Paróquia de Nossa Senhora da Pureza', telefone = '84991026974', tipo = 'paroquia' where id = '7a511675-97f4-50fd-bd59-c9af6d8e6c2c' and not verificada and conferida_em is null;
update public.paroquias set email = 'psjbpontanegra@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-vila-de-ponta-negra-natal', instagram = 'psjbpontanegra', nome = 'Paróquia de São João Batista', telefone = '84991565000', tipo = 'paroquia' where id = '7a759a43-29cc-5878-8a59-653c663b1cee' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de São José Operário' where id = '7a92081a-dc67-5d27-9631-143c9f66c58f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Nossa Senhora do Rosário' where id = '7abaaa02-fe57-57fe-9bd7-d96784afebe8' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Serra de João do Vale', matriz_id = (select x.id from public.paroquias x where x.id = '8622048e-33fb-5fac-977f-0b34f73e488c'), nome = 'Capela de Santa Rita' where id = '7ad5cbec-9207-5ab6-861d-7652ec632888' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Santa Clara' where id = '7bb89fff-0863-55ad-8f8c-e3bdea131e69' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de Nossa Senhora das Graças', tipo = 'area_missionaria' where id = '7c18cb79-5a16-57d9-911b-f1f2d0e08319' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de São Pedro' where id = '7c3904cd-43b6-5fac-8548-de0b5014134d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela dos Santos Reis' where id = '7c48f6c2-2302-586c-8869-652af6202e8a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Nossa Senhora Virgem dos Pobres' where id = '7ce15e9c-3010-5788-a582-18230e723c32' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '37604de3-7f90-57bd-8060-be9ee91183a8'), nome = 'Capela de Nossa Senhora da Conceição' where id = '7d0afa85-2734-5306-a9d7-45baa1ccbb5b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de Nossa Senhora de Fátima' where id = '7d7650df-f9a3-50c2-94e3-683a777ed10c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'), nome = 'Capela Santuário de Nossa Senhora da Conceição' where id = '7dc2e25c-0abc-540a-9b6d-fd7920d95421' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São Judas Tadeu' where id = '7df37807-2d71-5857-874b-857e9a40980a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '62153461-4305-5e52-bd18-51feef969385'), nome = 'Comunidade do Parque Industrial' where id = '7df9cdfc-fc9a-55ec-8fb4-a8ecddf5e74f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela de São José' where id = '7e48e766-eeca-5a4d-bbcd-cd6e17a7f0c7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2333ae04-376b-59d7-91e6-2750738c8b77'), nome = 'Capela de São Francisco' where id = '7e7122c1-5143-5e93-921d-7c44b91b1c5e' and not verificada and conferida_em is null;
update public.paroquias set instagram = 'paroquiadearez_', nome = 'Paróquia de São João Batista', tipo = 'paroquia' where id = '7f035d23-483e-528d-a511-a22b4eb85745' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Santuário Chama de Amor' where id = '7f5d248f-9cac-5fa5-9bfb-963f015301bd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora do Rosário' where id = '8043874e-f93a-59d4-b443-df2c1971ce32' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadenossasradasdores@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-de-nossa-senhora-das-dores-cear%C3%A1-mirim', instagram = 'nsadasdores', nome = 'Paróquia de Nossa Senhora das Dores', telefone = '84991148499', tipo = 'paroquia' where id = '80cd1cfc-fce5-519b-8918-d1d2cadf37b4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de Nossa Senhora das Vitórias' where id = '8157706d-0c38-5cf7-a1da-07b0ae16214a' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora dos Aflitos', tipo = 'paroquia' where id = '81dc8039-d795-5c4b-bfa5-9562c27ec132' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São Geraldo' where id = '8242b716-ca43-57bb-b1d2-71a1bd855d6b' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnsaparecidanatal@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-aparecida-ne%C3%B3polis-natal', instagram = 'nsaparecidanatal', nome = 'Paróquia de Nossa Senhora Aparecida', telefone = '8436152831', tipo = 'paroquia', whatsapp = '8436152831' where id = '833059cc-8900-554f-95a9-25d6fbddae2b' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquianossasenhoradospobress@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-virgem-dos-pobres-ema%C3%BAs', instagram = 'pnsvirgemdospobres', nome = 'Paróquia de Nossa Senhora Virgem dos Pobres', telefone = '84988448247', tipo = 'paroquia' where id = '833a77f5-ff04-5faa-b14c-826c937b32c2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'add373bb-9251-5361-bc23-79036a6db3dd'), nome = 'Capela da Beata Ana Rosa Gattorno' where id = '836a84c4-2d16-5774-9773-cc84111aca48' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora de Fátima' where id = '83bbe321-e3ee-5324-b4bb-e5d1b2cd31fe' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-cristo-rei-pirangi-natal', instagram = 'paroquiacristoreinatal', nome = 'Paróquia de Cristo Rei', telefone = '84988202830', tipo = 'paroquia' where id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2c4136b3-f280-593c-ac42-f75081db0fc2'), nome = 'Igreja de Nossa Senhora de Fátima' where id = '83d22d9b-d24f-5cc1-b21a-c887fb03f4bc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), nome = 'Capela de São José' where id = '85143885-726a-5d55-aa76-7318a2d00b1e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-nazar%C3%A9-parazinho', instagram = 'nazare_parazinhorn', nome = 'Paróquia de Nossa Senhora de Nazaré', tipo = 'paroquia' where id = '856876df-264b-5cdd-8c6c-346b40411d2e' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquia@paroquiadecandelaria.com.br', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-candel%C3%A1ria-candel%C3%A1ria-natal', instagram = 'pnscandelarianatal', nome = 'Paróquia de Nossa Senhora da Candelária', telefone = '84991619999', tipo = 'paroquia', whatsapp = '84991619999' where id = '85c0ad12-973f-531f-8b68-6e7b7f8ba241' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia do Divino Espírito Santo', tipo = 'paroquia' where id = '8622048e-33fb-5fac-977f-0b34f73e488c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de Nossa Senhora de Fátima' where id = '8693b459-7a5e-514f-80aa-cb90f0b2239f' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaofranciscodeassis62@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'paroquia__saofranciscodeassis', nome = 'Paróquia de São Francisco de Assis e São João Lostau Navarro', telefone = '84994702156', tipo = 'paroquia', whatsapp = '84994702156' where id = '89115597-79cb-5bcc-8714-7d2c70450408' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/nossasenhoradocarmonm/', instagram = 'nossasenhoradocarmonm', nome = 'Área Missionária Nossa Senhora do Carmo', tipo = 'area_missionaria' where id = '8916f275-4daf-51d0-bec0-5e1c9d79e265' and not verificada and conferida_em is null;
update public.paroquias set email = 'saopedroapostolo@yahoo.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-pedro-ap%C3%B3stolo-alecrim-natal', instagram = 'paroquia_saopedro', nome = 'Paróquia de São Pedro Apóstolo', telefone = '8436152816', tipo = 'paroquia' where id = '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89115597-79cb-5bcc-8714-7d2c70450408'), nome = 'Capela de Santa Luzia' where id = '8a1d9980-3d8b-5fe3-9c90-639b79c49573' and not verificada and conferida_em is null;
update public.paroquias set email = 'rainhadapaznovaparnamirim@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-rainha-da-paz-nova-parnamirim', instagram = 'paroquiarainhadapaz_np', nome = 'Paróquia de Nossa Senhora Rainha da Paz', telefone = '8421399520', tipo = 'paroquia', whatsapp = '8421399520' where id = '8a6d4ba3-9398-50bb-8de3-8f944921526a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária da Sagrada Família', tipo = 'area_missionaria' where id = '8a8acdbd-3c1c-5d01-b621-44857d2dcc3b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de Santa Luzia' where id = '8ab40aac-c61d-5e88-a238-82db900478a1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de Nossa Senhora de Fátima' where id = '8ac62213-eba1-5acb-9426-0c4f2f3e9860' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São Sebastião' where id = '8bf0c3df-5dfd-5364-b5af-7da2c1ae2f0b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de São João Batista e Santa Luzia' where id = '8c205247-b09a-50b0-bddd-153de4ccbb3b' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-da-imaculada-concei%C3%A7%C3%A3o-nova-alian%C3%A7a-natal', instagram = 'imaculadanatalzn', nome = 'Paróquia da Imaculada Conceição', telefone = '84987407850', tipo = 'paroquia' where id = '8cb629db-b787-5c7a-ae08-4922fa3d0528' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c87a685e-d14c-5093-9089-27ea09d94e73'), nome = 'Capela de Nossa Senhora da Glória' where id = '8ce65a5f-cd78-59db-8fb5-5876fbaae5f9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de Santa Rita de Cássia' where id = '8d0a7bf2-bb22-52e2-b744-411bddfc2b43' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), nome = 'Capela de Santo Antônio' where id = '8d67bc7c-9454-5621-b30e-de3beb9314c0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Nossa Senhora do Rosário' where id = '8e7bb855-c9d5-5799-be5e-b2ba69decdb5' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição e São João Batista', tipo = 'paroquia' where id = '8ea54890-b0dc-57bc-8fb1-bf5208dd8f03' and not verificada and conferida_em is null;
update public.paroquias set email = 'tesouraria.paroquiadeitaja@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-vicente-f%C3%A9rrer-itaj%C3%A1', instagram = 'paroquiadeitaja', nome = 'Paróquia de São Vicente Férrer', telefone = '84999910431', tipo = 'paroquia' where id = '8eea7ae5-da37-573a-809a-7e4e653417d6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Verruma' where id = '8f47fbfd-b4f7-5d32-bd2f-d2ced4dde036' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiansfatima_vilar@outlook.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-f%C3%A1tima-maca%C3%ADba', instagram = 'pnsfmacaiba', nome = 'Paróquia de Nossa Senhora de Fátima', telefone = '84991813019', tipo = 'paroquia', whatsapp = '84991813019' where id = '8f4904ad-3e5f-5560-9afa-c832bf237344' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '239ed4e6-c778-5628-9263-699043801cdb'), nome = 'Comunidade de São Frei Galvão' where id = '900889a8-dd9c-5de5-8ac2-76a0470d55ef' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Nossa Senhora das Graças' where id = '9067012d-39fb-5517-b433-0c4ece0c9b56' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Santo Antônio' where id = '907398ce-0dfb-5844-9b86-c8fb97513196' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e2ef5c1e-c067-525f-b96d-d15427742c0a'), nome = 'Igreja de São João Batista' where id = '90c17a30-029d-506e-be73-d1f98e61517e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'), nome = 'Capela de Nossa Senhora da Conceição' where id = '90dfaf7f-dca5-51e0-9789-7a8595060df0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de Sant''Ana' where id = '90f0527f-3c4f-59c4-ae13-aa48c443a71e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b829ec6c-d5e5-5a46-bc61-c147d760599a'), nome = 'Capela de Nossa Senhora Aparecida' where id = '91315d43-6a6d-5396-aa16-0914b22ce9fc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b9ab3886-2f0e-5c76-8891-1a2096127512'), nome = 'Capela de Nossa Senhora de Nazaré' where id = '91974767-89df-53fc-abd9-b2cb7def5fae' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de São Sebastião' where id = '91cc7e5f-11dd-5546-b7cf-fa9697790240' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aebd8271-e248-53ed-9705-495856e95b6d'), nome = 'Comunidade de Piquiri' where id = '91f7ead9-09b9-5195-b880-3eb9c751e130' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f04f0c97-76fa-5d6b-b6f8-1e47995e2cb5'), nome = 'Santuário de São João Batista' where id = '9299f78c-b291-50e1-baed-ab2e497cdbe0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b33e47df-0ac5-51fa-a428-9c9e90a24c39'), nome = 'Igreja de Santa Teresa' where id = '92cf107f-b9d0-5d08-a3aa-d727744ec937' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '014ee4dd-663d-5565-bb85-0067c1d507ee'), nome = 'Capela de São Vicente de Paulo' where id = '9387d404-7eb8-53b9-8bd6-4394facec67b' and not verificada and conferida_em is null;
update public.paroquias set email = 'saocamilo.natal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-camilo-de-l%C3%A9llis-lagoa-nova-natal', instagram = 'saocamilorn', nome = 'Paróquia de São Camilo de Léllis', telefone = '8436152859', tipo = 'paroquia' where id = '938c1feb-a66e-5bf1-b0f0-d908739abcc3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '48454693-2f24-57b3-b774-b2b9831ae94f'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = '93f068d5-51b5-5c57-bab2-cecb18e38920' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'), nome = 'Capela de Nossa Senhora do Rosário' where id = '9428a0b3-f8a8-5faf-b7a3-5c64baaf4f21' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1e35909a-5fbe-4102-af36-6353c9faed20'), nome = 'Capela de Nazaré' where id = '9441216f-43cf-5234-9756-53a6cbc0b6e9' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Mendubim', nome = 'Capela de Nossa Senhora de Lourdes' where id = '9515f384-6506-54e0-af99-9b87a535606b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8eea7ae5-da37-573a-809a-7e4e653417d6'), nome = 'Capela de São Francisco de Assis' where id = '95ab4184-39a6-5833-9a9e-f5e4a877c377' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Bom Futuro' where id = '95d5cd02-a4a5-5d5c-b374-dd70be331319' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'), nome = 'Capela da Imaculada Conceição' where id = '9641a92b-72ea-5876-bbf6-7f13a2c66bd7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ef3ecbb4-8ce7-5321-b1fe-4f6c77ee2eaf'), nome = 'Capela das Meninas das Covinhas' where id = '9649b91c-bf51-5041-b03e-ff2331d705d3' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = '970b138c-33eb-5bf9-8422-628ced28459c' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasantoexpeditosga@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-expedito-jardim-petr%C3%B3polis', instagram = 'paroquiadesantoexpedito.rn', nome = 'Paróquia de Santo Expedito', telefone = '8421395976', tipo = 'paroquia' where id = '9735edf0-bdef-5b35-84e1-3284c504a57c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Santuário Nossa Senhora de Fátima', padroeiro = 'Nossa Senhora de Fátima', tipo = 'santuario' where id = '9799ecf3-ff24-5526-86d4-7964e985137f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela da Beata Lindalva Justo' where id = '993cf7da-e2ea-552c-9ac8-a828823d5706' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de Nossa Senhora de Guadalupe' where id = '99a130df-68db-5ca0-8786-17df9037cc4a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São João Batista' where id = '99af2f85-9091-5d26-937f-eed7e7a136bd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade de Porto Mirim' where id = '99d0f2f5-1ade-527b-ab5f-2d575746f04e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f17fbccc-589f-5580-b75b-bc09ccada35f'), nome = 'Capela de São José' where id = '99ffde2b-799e-5dc4-8144-a87d6118367e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-francisco-de-assis-lagoa-de-pedras', instagram = 'pascompsfa', nome = 'Paróquia de São Francisco de Assis', telefone = '84987101312', tipo = 'paroquia' where id = '9a51395c-242a-51b6-93a0-5b2b2d450af7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fcdd864e-f767-5197-840f-bb394d14a874'), nome = 'Capela de São Pedro' where id = '9ac0c900-f066-5dee-80c8-b7c4877f0520' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santo Antônio' where id = '9ae99c30-66d6-58e3-9787-647aab231616' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de São José' where id = '9be88c30-9fbc-5863-a538-0ab85b5c18c0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela do Sagrado Coração de Jesus' where id = '9beabc1e-72b6-5ae7-aeea-e98fee6dc0e6' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquianscm@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-cear%C3%A1-mirim', instagram = 'nsconceicao', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '8432742042', tipo = 'paroquia', whatsapp = '8432742042' where id = '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora do Patrocínio', tipo = 'paroquia' where id = '9cd867c9-9633-5ebe-94d9-d366e38d1273' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Cristo Rei' where id = '9ce4bcda-4e0d-5f69-a236-6a58fd4d8fb5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade de Jacumã' where id = '9cfe11e7-a4f9-5478-acd3-1ab93fd8f6a9' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Santuário do Sagrado Coração de Jesus', tipo = 'santuario' where id = '9d32a7ca-6f17-585e-abdb-286d53e4006c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '51cb7006-a30b-5d73-8883-a882a4e634a6'), nome = 'Capela do Hospital Onofre Lopes' where id = '9da03cae-2ede-5510-8d6a-85fdbed71537' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'), nome = 'Capela de Santa Maria Madalena' where id = '9dcb264a-ecfd-5543-8be7-94b26b9e3922' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://app.wanderlog.com/place/details/279535', nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = '9dd59b8c-8d3c-5efc-b4d4-d09a6cdc6c9d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Nossa Senhora da Piedade' where id = '9e719365-8579-5aca-b9a5-0763ed509520' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '46200e8d-7aa9-5abe-bf08-231270b22973'), nome = 'Comunidade Dom Marcolino' where id = '9e8a271e-e0a8-5c0a-9032-c3524d093b07' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Nossa Senhora das Graças' where id = '9ed7ca61-f638-5092-a165-cc52dd7667f8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de São Sebastião' where id = '9f03cafe-0688-5dbe-957a-ac3d8856f0c1' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Senhora Sant''Ana', tipo = 'paroquia' where id = '9f7f7c2f-3a71-5a75-bdbd-052f57142790' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Nossa Senhora Aparecida' where id = '9fcbc74c-5c0c-573c-81b6-c75b7fa7359b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9cd867c9-9633-5ebe-94d9-d366e38d1273'), nome = 'Capela de Nossa Senhora das Dores' where id = 'a0028d31-d32a-5a89-8b0a-7114d8adbf81' and not verificada and conferida_em is null;
update public.paroquias set email = 'apnsnavegantes@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-de-nossa-senhora-dos-navegantes-rio-do-fogo', instagram = 'pascom.navegantes', nome = 'Paróquia de Nossa Senhora dos Navegantes', telefone = '84996333035', tipo = 'paroquia' where id = 'a0524485-70c7-5089-b47b-e098881138a5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9735edf0-bdef-5b35-84e1-3284c504a57c'), nome = 'Comunidade de São José, Esposo de Maria' where id = 'a0878748-4dad-50b8-89ee-fc19e1279caf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de Santa Rita de Cássia' where id = 'a13e6661-0d03-5b29-b3d2-5e61029797c3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'), nome = 'Capela de Nossa Senhora das Graças' where id = 'a1b74f3f-aca4-5faf-887f-3ec541893741' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '239ed4e6-c778-5628-9263-699043801cdb'), nome = 'Capela do Menino Jesus de Praga' where id = 'a2c444a2-4693-5bfb-89aa-521ee18c5a1b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'a3432c2a-f76e-55aa-a84e-77b18fdfe8e1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Livramento' where id = 'a3c24cb7-333f-5f95-82cb-b9345d653d9a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'a6a558fd-b5fc-5b27-aea8-0d2125449ba3'), nome = 'Igreja de São João Batista' where id = 'a3f54306-bc28-5da5-bb50-cd065a6fd0bc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3d8a1a77-4778-59ce-a343-55755a2b41e6'), nome = 'Capela de São Pedro' where id = 'a40adf5b-e555-5749-8ecd-230a33c9d3a9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Nossa Senhora Aparecida' where id = 'a45cf438-c1a4-5d5a-9e93-7d05d03547f1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e477dcfa-cd9d-598e-8726-4bf327b1acca'), nome = 'Capela de Santa Luzia' where id = 'a4969dd2-f3e8-5a22-bf9d-52abf0c88519' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de Santa Luzia' where id = 'a548bf2b-7b07-5026-b0f0-10ed4d8dbf52' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'), nome = 'Capela de Santa Luzia' where id = 'a5b16634-b0be-5d17-8a35-5ea0257417b4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'a5c96065-b8eb-5d29-928f-7640fbaf8328' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santa Rita de Cássia' where id = 'a67bf328-106f-5da8-9ca0-f8e770442a26' and not verificada and conferida_em is null;
update public.paroquias set email = 'pppsocorro@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-perp%C3%A9tuo-socorro-barcelona', instagram = 'pascomsocorro18', nome = 'Paróquia de Nossa Senhora do Perpétuo Socorro', telefone = '84981513249', tipo = 'paroquia', whatsapp = '84981513249' where id = 'a6a558fd-b5fc-5b27-aea8-0d2125449ba3' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '212f91f9-e78d-5ae6-9249-4433b314cd6b'), nome = 'Capela de São João Batista' where id = 'a7af2351-1a4e-5bfa-b964-640c821c6449' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Santo André' where id = 'a7d63dec-1e51-512b-8a0c-78850a3ea49f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9735edf0-bdef-5b35-84e1-3284c504a57c'), nome = 'Comunidade de Nossa Senhora Rosa Mística' where id = 'a8aef2bb-b5b7-5b10-a9ef-31387bdbb551' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'zona rural', nome = 'Igreja Católica' where id = 'a91636b8-8f61-5e02-8591-361b74a772b2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'da7398b5-b14a-5e47-b930-b65411eec80c'), nome = 'Capela de Santo Antônio' where id = 'ab061009-e202-565c-b1d0-51a4d96c1a35' and not verificada and conferida_em is null;
update public.paroquias set email = 'pscjnatal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-sagrado-cora%C3%A7%C3%A3o-de-jesus-morro-branco-natal', instagram = 'pscjnatal', nome = 'Paróquia do Sagrado Coração de Jesus e Nossa Senhora do Perpétuo Socorro', telefone = '8436152813', tipo = 'paroquia' where id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Santa Marta de Betânia', tipo = 'paroquia' where id = 'abd09155-be95-5b57-b4de-4dda7afe223f' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariabompastor@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-jesus-bom-pastor-bom-pastor-natal', instagram = 'paroquiajesusbompastor_', nome = 'Paróquia de Jesus Bom Pastor', telefone = '84991299333', tipo = 'paroquia' where id = 'ac9f0c84-304e-5afc-aee1-1c2df9b27921' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de Nossa Senhora das Dores' where id = 'aca619e9-de37-5f8e-a1a8-ed1a35d047e0' and not verificada and conferida_em is null;
update public.paroquias set email = 'saotiagonatal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-tiago-menor-santar%C3%A9m-natal-rn', instagram = 'paroquiasaotiagomenor', nome = 'Paróquia de São Tiago Menor', telefone = '8433465010', tipo = 'paroquia' where id = 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Santo Antônio e Santa Luzia' where id = 'ace1ae26-0ae5-5154-8cdc-2264b1ea728f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Santa Rita de Cássia' where id = 'acea2c20-4d84-5441-9447-0d7e56a2204f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Santa Edwiges' where id = 'acef7f85-9d47-5c06-9f08-675cb4678c8e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora Virgem dos Pobres' where id = 'acf8bcf0-1458-5360-8606-bd4efd19ed78' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Santa Teresa d''Ávila' where id = 'ad4a2c20-d8e3-5ff3-b441-1a31f3f52e69' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnsnavegantes.natal@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-dos-navegantes-redinha-natal', instagram = 'pnsnnavegantesredinha', nome = 'Paróquia de Nossa Senhora dos Navegantes', telefone = '84998494501', tipo = 'paroquia', whatsapp = '84998494501' where id = 'ad818ee0-6271-58b6-837a-85cf72c47b71' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-perp%C3%A9tuo-socorro-quintas-natal', instagram = 'pnsperpetuosocorrorn', nome = 'Paróquia de Nossa Senhora do Perpétuo Socorro', telefone = '8433010215', tipo = 'paroquia', whatsapp = '84994231504' where id = 'add373bb-9251-5361-bc23-79036a6db3dd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'), nome = 'Capela de São João Evangelista' where id = 'ae13f35a-407d-5c36-80c7-818141307226' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2d07182f-6672-5619-9f87-78c1f40c5ce2'), nome = 'Capela de São Domingos Sávio e Beata Laura Vicuña' where id = 'ae15f668-8f0e-5d39-9ddf-2721784386e1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Comunidade Nossa Senhora Aparecida' where id = 'ae47ab9b-59d7-5b06-a01e-a5425cee7116' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnsccangaretama@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-canguaretama', instagram = 'paroquiacanguaretama', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84992197918', tipo = 'paroquia' where id = 'aebd8271-e248-53ed-9705-495856e95b6d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4376e8a6-7c30-58a2-9e6b-bd754d91115c'), nome = 'Igreja de Nossa Senhora da Conceição' where id = 'aed193dd-5a50-5cb3-b035-260c6283f10f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Morada Nova' where id = 'af3588da-529d-5ae0-b861-985ad4453316' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'), nome = 'Capela de Nossa Senhora das Graças' where id = 'afc55423-78a3-583f-8d36-ef7479277122' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de São Judas Tadeu' where id = 'afc6008f-0840-56b0-8ddc-246a83683944' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-da-imaculada-concei%C3%A7%C3%A3o-lagoa-salgada', instagram = 'pascomlagoasalgada', nome = 'Paróquia da Imaculada Conceição', telefone = '84988661546', tipo = 'paroquia' where id = 'b0163325-740b-5ff2-ab3f-cb7d7823f1a9' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-f%C3%A1tima-passa-e-fica', instagram = 'igrejansradefatimapassaeficaof', nome = 'Paróquia de Nossa Senhora de Fátima', telefone = '84986866182', tipo = 'paroquia', whatsapp = '84986866182' where id = 'b0a96574-b9b8-52c0-b354-5afec7962aaf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3d9b1321-aa01-5b96-84fb-c07299279e51'), nome = 'Igreja de Nossa Senhora do Líbano' where id = 'b11a3526-b083-57db-8768-f56bc35702e9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9dd59b8c-8d3c-5efc-b4d4-d09a6cdc6c9d'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'b1c5a249-9a0a-534b-bf06-20e02f15b0e1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'bd91bb5d-5833-513a-bdad-fbc27e449efe'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'b2148968-aad7-51d0-a9df-8d389d86b9b4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Nossa Senhora Aparecida' where id = 'b23025fe-a1b8-55bc-9eaf-6ba2b66e6869' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de São José' where id = 'b27a7eea-d5eb-546a-a197-5269a9dc3c16' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2d36241f-5c79-531c-bcdc-c8b9e0668232'), nome = 'Santuário de Santa Rita de Cássia' where id = 'b299e385-c869-52da-ab33-70ec7ec1b7f9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5472874b-c0a1-5dc4-b76e-c60f1439eda9'), nome = 'Comunidade São João Paulo II' where id = 'b2a6950c-ca87-5c50-8c6d-ce32e6aec135' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), nome = 'Capela de São José' where id = 'b2b05224-446e-59a9-af78-7a69fef2447c' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia Menino Jesus de Praga', tipo = 'paroquia' where id = 'b2c2e9d7-7093-53cb-8d72-74e3a376983e' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Miguel Arcanjo', tipo = 'paroquia' where id = 'b33e47df-0ac5-51fa-a428-9c9e90a24c39' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São Francisco de Assis' where id = 'b3838210-3dd4-5319-b6f1-40c199562ff1' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Santo Antônio' where id = 'b3c55e34-75bc-5cb6-acd2-0d96b73980fd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'), nome = 'Capela do Mirante de São Francisco de Assis' where id = 'b3fd592e-027b-547d-a637-9bb37c872fc2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São João Batista', tipo = 'paroquia' where id = 'b45d1eee-543c-5c33-8f02-facf71384099' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de São João Batista' where id = 'b486562f-492f-5180-b7c8-afa46fa928e7' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Quase-Paróquia de Nossa Senhora do Sagrado Coração', tipo = 'quase_paroquia' where id = 'b4d6a69d-81d3-50cc-9d83-b5d27124e65e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de São José' where id = 'b4d8e778-e928-57b5-8b5f-0c035f05d99c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Capela de Nossa Senhora da Piedade' where id = 'b54a16cf-455b-5212-a3e4-4a819242eceb' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariasantoafonso@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-afonso-maria-de-lig%C3%B3rio-mirassol-natal', instagram = 'paroquiastoafonso_rn', nome = 'Paróquia de Santo Afonso Maria de Ligório', telefone = '8436152855', tipo = 'paroquia', whatsapp = '8436152855' where id = 'b5862952-1883-5f07-9e6d-1021c820fff9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), nome = 'Capela do Santíssimo Sacramento e Santa Luzia' where id = 'b5916c2b-b83e-520e-b326-1ea32401e6eb' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'b5d11859-e0c2-5e1f-9b7e-72aa418b7f48' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Seminário Diocesano Santo Cura d''Ars' where id = 'b5e35b59-ade3-56de-8581-1dacf83b4c2e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '169b9d22-d338-5296-bb6f-b8b2c5b1be89'), nome = 'Oratório de Nossa Senhora Aparecida' where id = 'b6387a9f-eb5d-5333-b627-c8a9616895cd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela da Sagrada Família' where id = 'b68ec4d1-92ea-539d-aa6e-d78928201067' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de São Roque' where id = 'b6e6ca21-5f6b-52bd-8c69-e47fd12fbf58' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6d776938-09c2-57e2-aee3-88f9cbd61356'), nome = 'Igreja de Nossa Senhora de Lourdes e São José' where id = 'b72daa51-2601-5851-86c1-6c9ae213d4a8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de São Judas Tadeu' where id = 'b7ddc03a-e030-541b-80d3-9573d49f7318' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Vicente Férrer', tipo = 'paroquia' where id = 'b829ec6c-d5e5-5a46-bc61-c147d760599a' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'arquidiocesedenatal.org.br', instagram = 'santuariodosmartires', nome = 'Paróquia do Santuário dos Santos Mártires de Cunhaú e Uruaçu', site = 'santuariodosmartires.com', telefone = '8420109828', tipo = 'santuario' where id = 'b9ab3886-2f0e-5c76-8891-1a2096127512' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'baf69c03-c5b6-5f04-80fe-bf67108dac67' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1cda00e5-b816-5fc7-b1d3-ce8844310502'), nome = 'Capela de São José' where id = 'bc733872-1e9e-5022-9e41-af7e6bf40a06' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Capela de Santa Luzia' where id = 'bcabc3c0-6ee3-53c1-8502-546bd69b9ed1' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasjb@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-montanhas', instagram = 'paroquiamontanhas', nome = 'Paróquia de São João Batista', telefone = '84933003218', tipo = 'paroquia' where id = 'bcacfea5-1423-5c70-9570-d262cc8572b9' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = 'bd91bb5d-5833-513a-bdad-fbc27e449efe' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-divino-esp%C3%ADrito-santo-vera-cruz', instagram = 'pascomdodivino', nome = 'Paróquia do Divino Espírito Santo', tipo = 'paroquia' where id = 'bda8bfba-4e08-5f4d-b801-f13e80585e40' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f342db39-28d1-577e-833c-70adde2ee46b'), nome = 'Capela de Nossa Senhora Aparecida' where id = 'bedf890b-ebb1-5718-84b2-9ac08ff813c9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e477dcfa-cd9d-598e-8726-4bf327b1acca'), nome = 'Capela de Nossa Senhora da Luz' where id = 'bf14e865-5a74-503d-8544-f4382fd06e9e' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São José', tipo = 'paroquia' where id = 'bf205a18-aa77-5b2f-b708-cd679ea80c6d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f357a82d-5e42-5a9c-980b-9316e9cadc9f'), nome = 'Igreja de São Francisco' where id = 'bf75d797-0c5e-501f-9313-67b52dc773df' and not verificada and conferida_em is null;
update public.paroquias set email = 'psjbpitangui@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-praia-de-pitangui', instagram = 'paroquiasaojoaobatistapitangui', nome = 'Paróquia de São João Batista', telefone = '84994553074', tipo = 'paroquia' where id = 'c004d647-3d82-5b81-be55-2a61d13d7b1a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela do Sagrado Coração de Jesus' where id = 'c06314b3-a0fc-5b54-932d-965d06c3fb37' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Nova Esperança', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Igreja de Nossa Senhora Imaculada' where id = 'c06e6647-17cd-5af2-89dc-08fc967bd6b0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1cda00e5-b816-5fc7-b1d3-ce8844310502'), nome = 'Igreja de Nossa Senhora de Fátima' where id = 'c10f4a4a-6613-5065-becd-13534328a29f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'add373bb-9251-5361-bc23-79036a6db3dd'), nome = 'Capela do Divino Espírito Santo' where id = 'c1656b74-8113-532b-8bba-2d439e5fecd7' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Poré', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de Santa Teresinha' where id = 'c1a24852-3add-5332-9a73-e0162cce0bd2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'), nome = 'Capela do Divino Pai Eterno' where id = 'c23b2eaa-09eb-5fbe-bee4-b72032eccd21' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9735edf0-bdef-5b35-84e1-3284c504a57c'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'c2855ccb-c4cb-58dc-b8ff-1e07d5be4e97' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8a6d4ba3-9398-50bb-8de3-8f944921526a'), nome = 'Comunidade de Nossa Senhora das Vitórias' where id = 'c2b04c68-b840-53b2-b997-edf720821bd0' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Santa Luzia', tipo = 'paroquia' where id = 'c334ee45-5fff-544f-a27f-6f9fa5b43b86' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = 'c3aa864e-8796-5c6b-b808-56aa88a1d633' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Santa Teresinha' where id = 'c3b724f7-2d85-54dd-b2a6-ea80c5a0b9e3' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Santa Luzia' where id = 'c3cecd10-cd77-5cfc-a79d-6dc651f06835' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de Santo Antônio' where id = 'c3d5133b-9bc2-50d6-903e-b8deda1e05c6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de Sant''Ana' where id = 'c3f0342c-209c-5d09-96d2-366fd422d86c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São José', tipo = 'paroquia' where id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'abd09155-be95-5b57-b4de-4dda7afe223f'), nome = 'Comunidade Vila Carlindo Dantas' where id = 'c44fbc3d-a964-5279-ad64-eb1f6b43355b' and not verificada and conferida_em is null;
update public.paroquias set email = 'cnsaojose@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jos%C3%A9-cidade-nova-natal', instagram = 'pascomdesaojose', nome = 'Paróquia de São José', telefone = '8421316228', tipo = 'paroquia' where id = 'c4a3b311-5163-5b87-b17e-e31812ae9fc0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fcdd864e-f767-5197-840f-bb394d14a874'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'c4d4a1d7-e03d-59e9-8096-ceffccd7d6f3' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiansdaconceicao@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-macau', instagram = 'paroquiademacau', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84981836624', tipo = 'paroquia' where id = 'c56fe41f-c256-5fc6-9617-075b27ba5e5a' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Cruzeiro dos Pagãos', matriz_id = (select x.id from public.paroquias x where x.id = '48454693-2f24-57b3-b774-b2b9831ae94f'), nome = 'Capela de São Francisco' where id = 'c60d2b6b-a1c1-5b02-9282-a924aa9f3add' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6098c7df-3055-56e9-9430-a0478edf4e0a'), nome = 'Igreja de Sant''Ana' where id = 'c612144b-ec58-5e25-a8c5-a51f76de9bab' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Capela de Santo Antônio' where id = 'c6c77f1b-2f6f-5d29-907c-30cf2a10c28e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Arrimo' where id = 'c6fe3cb5-0e35-5101-bac9-933c12d33dcc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'), nome = 'Capela de Santa Teresinha' where id = 'c8198012-7242-52c9-813b-2a1d6f5c7e16' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = 'c87a685e-d14c-5093-9089-27ea09d94e73' and not verificada and conferida_em is null;
update public.paroquias set email = 'psjb_pendencias@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-pend%C3%AAncias', instagram = 'pascompendencias', nome = 'Paróquia de São João Batista', telefone = '84999094766', tipo = 'paroquia' where id = 'c8b2cc7d-2544-56a4-8bce-52c8a52ca107' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'), nome = 'Capela de Nossa Senhora das Dores' where id = 'c8cf02e2-1e9f-5c6d-96a0-af0eca56c6b0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3d8a1a77-4778-59ce-a343-55755a2b41e6'), nome = 'Igreja de Nossa Senhora dos Navegantes' where id = 'ca201bcc-1938-54e5-8e26-1f46f46e1946' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela de São Paulo' where id = 'ca5e4d5d-85d1-51f5-847d-472e96e8d976' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-lajes', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84998943713', tipo = 'paroquia' where id = 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Sítio Serrota', matriz_id = (select x.id from public.paroquias x where x.id = 'd00e7f73-03a2-5a33-bfaa-e4f84f30db14'), nome = 'Santuário de Nossa Senhora da Conceição' where id = 'cb51b305-694a-50db-98e9-ad07289663a0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'), nome = 'Capela de São Judas Tadeu' where id = 'cb9ec572-af7f-5609-87fb-d6cd12589591' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de São Sebastião' where id = 'cba8de2a-ebe4-5671-bb1f-39cd07ac0be2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de São José' where id = 'ccb7c7a5-869d-58ba-b317-5208a5e1f0d9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'), nome = 'Capela de São José' where id = 'ccbe6d4e-bc47-5b4a-bf5a-cdb2c97498df' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c87a685e-d14c-5093-9089-27ea09d94e73'), nome = 'Capela de Santa Luzia' where id = 'ce0c6739-ac2e-584a-a758-058453a99008' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Santa Luzia' where id = 'ce182bf7-79aa-5dcb-bed5-30fc7c82e5ab' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Nossa Senhora da Penha' where id = 'ce360342-eb67-5cc8-9854-a574e3c7a4fa' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de São Francisco de Assis' where id = 'ce4c0d18-c2ca-53f2-bf85-5f91243ba221' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-santa-maria', instagram = 'imaculadaconceicao_santamaria', nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = 'ce4c3596-92db-5eff-a194-74705935f79b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'ce59044e-cf12-55c1-bc9b-0a099a970814' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'cee707b0-8fe4-5252-8ba6-c7b7c2eaef78' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8cb629db-b787-5c7a-ae08-4922fa3d0528'), nome = 'Capela de Nossa Senhora do Rosário' where id = 'cee80872-5c44-57bf-b82f-5ad5cc6220a8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São José' where id = 'cf54162f-eff8-5356-952e-6251c798b808' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'cf9365b1-a189-5ad8-9c5a-ef2e3cfc3b91' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e477dcfa-cd9d-598e-8726-4bf327b1acca'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'cfd7ae62-263e-5020-aa88-48c5bc664ba1' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = 'd00e7f73-03a2-5a33-bfaa-e4f84f30db14' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f54fd4d9-9c70-54c4-8488-be0a4d21843d'), nome = 'Igreja de Santo Antônio' where id = 'd025b39d-3726-5fd3-b62b-d2b7bdc448de' and not verificada and conferida_em is null;
update public.paroquias set email = 'areapastoralscj@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-do-sagrado-cora%C3%A7%C3%A3o-de-jesus', nome = 'Área Pastoral do Sagrado Coração de Jesus', telefone = '84994661892', tipo = 'area_pastoral' where id = 'd100ef5d-ce18-517b-8970-76e1f576579a' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'São Jacinto', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'd10a2cdb-5d5c-5c54-85d2-9a83083abdb0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '260a7c53-9b9d-556f-b429-1ecfd2da6b34'), nome = 'Capela de Santa Luzia' where id = 'd150fa5d-3f9b-565f-b606-28020936eb95' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.facebook.com/capelansdores/', nome = 'Paróquia de São João Batista', tipo = 'paroquia' where id = 'd1542bf7-8cbd-5a79-8cc5-e06af5dd2d1f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São João Bosco' where id = 'd19d7ac8-623d-5552-b3b4-cf53a4e211c8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Permissão' where id = 'd1b3206f-9c7b-5276-b52a-07320060acc7' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '9dd59b8c-8d3c-5efc-b4d4-d09a6cdc6c9d'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'd1fd32a8-c30e-5c4f-8c29-524e15e3beb9' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Sítio Madeira', matriz_id = (select x.id from public.paroquias x where x.id = '8622048e-33fb-5fac-977f-0b34f73e488c'), nome = 'Capela de São Sebastião' where id = 'd20ab8a6-664f-51f3-b512-2ec172e33849' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Serra de São Sebastião', matriz_id = (select x.id from public.paroquias x where x.id = 'dd3a61ed-5dbe-5dcc-99e6-a413dc567a58'), nome = 'Capela de São Sebastião' where id = 'd20f3bfc-95bc-5baf-bfa9-00a65d6b78b9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'), nome = 'Capela de São Sebastião' where id = 'd272ee85-9ea9-5cb6-b065-72a34555483a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6098c7df-3055-56e9-9430-a0478edf4e0a'), nome = 'Igreja de São José' where id = 'd3192233-a463-5ac3-89fc-9bc8e779358f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b4d6a69d-81d3-50cc-9d83-b5d27124e65e'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'd33f5b41-49a5-5a9a-867e-78ef943a5966' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Vila Caiçara', matriz_id = (select x.id from public.paroquias x where x.id = 'b4d6a69d-81d3-50cc-9d83-b5d27124e65e'), nome = 'Capela de São João Batista' where id = 'd365af08-2e95-5f74-80b0-a3ff508b0e10' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2d07182f-6672-5619-9f87-78c1f40c5ce2'), nome = 'Comunidade da Sagrada Família' where id = 'd41fc6f9-f148-5120-b300-17cf26a62792' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-de-s%C3%A3o-sebasti%C3%A3o-s%C3%ADtio-novo-rn', instagram = 'igrejasaosebastiaositionovorn', nome = 'Área Pastoral de São Sebastião', tipo = 'area_pastoral' where id = 'd47e935c-c37d-5724-a93a-ca626f7939a5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de Nossa Senhora da Piedade' where id = 'd4a40c83-f380-5f0e-8173-c667838362ca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ce4c3596-92db-5eff-a194-74705935f79b'), nome = 'Igreja de São Raimundo Nonato' where id = 'd4da5323-17ac-54c5-9dd1-6a7fff2e1c5a' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia' where id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'), nome = 'Igreja de São Joaquim' where id = 'd5f571bc-02be-5e96-af0d-bcdb27f5f5dc' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Santo Estêvão Diácono', tipo = 'paroquia' where id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de São João Batista' where id = 'd7403e20-65c6-5edb-8373-d485207d201c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/santuariodolimapatu/', instagram = 'santuariodolimapatu', matriz_id = (select x.id from public.paroquias x where x.id = '45ef3c29-5e55-54a3-8c6b-40cde4138089'), nome = 'Santuário de Nossa Senhora dos Impossíveis (Santuário do Lima)', tipo = 'santuario' where id = 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '51cb7006-a30b-5d73-8883-a882a4e634a6'), nome = 'Capela de Sant''Ana e São Joaquim' where id = 'd7d3aa4e-c702-55f6-ab3b-c1b9e4fb3b02' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'), nome = 'Capela de São Sebastião' where id = 'd8cd6fba-52e9-5bdd-aa28-54ba60db123f' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jos%C3%A9-angicos', instagram = 'pascomangicos', nome = 'Paróquia de São José', telefone = '84996048303', tipo = 'paroquia' where id = 'd8ff4b1e-4979-5ebf-9884-89de7725aa75' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-da-catedral-de-nossa-senhora-da-apresenta%C3%A7%C3%A3o-natal-1', instagram = 'paroquiadacatedraldenatal', nome = 'Catedral de Nossa Senhora da Apresentação', telefone = '8432014559', tipo = 'catedral', whatsapp = '8432014559' where id = 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadesantoantoniopotengi@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-ant%C3%B4nio-santo-ant%C3%B4nio-do-potengi', instagram = 'oantonio_sa', nome = 'Paróquia de Santo Antônio', tipo = 'paroquia' where id = 'da7398b5-b14a-5e47-b930-b65411eec80c' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora das Graças' where id = 'daa65da0-a74d-5a25-a9b4-0928c867fc95' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3048a577-4134-5647-8dd4-d2db3a52e670'), nome = 'Capela Mãe Rainha' where id = 'daf53f9b-8d42-5d5b-a794-8a7354ebbb8e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '169b9d22-d338-5296-bb6f-b8b2c5b1be89'), nome = 'Capela de Santo Expedito' where id = 'dbf35598-4363-523a-9444-8283ed5fe498' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaofranciscodeassispv@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-francisco-de-assis-pedro-velho', instagram = 'paroquiapedrovelho', nome = 'Paróquia de São Francisco de Assis', tipo = 'paroquia', whatsapp = '84981189110' where id = 'dc470cf1-099c-520d-ab08-d64140a1f31c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora dos Navegantes' where id = 'dcad37dc-2bc9-5de1-921e-949e70886d2d' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Santo Antônio', tipo = 'paroquia' where id = 'dd3a61ed-5dbe-5dcc-99e6-a413dc567a58' and not verificada and conferida_em is null;
update public.paroquias set email = 'areapastoralss@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-de-s%C3%A3o-sebasti%C3%A3o-cai%C3%A7ara-do-rio-do-vento', nome = 'Área Pastoral de São Sebastião', telefone = '84986878093', tipo = 'area_pastoral' where id = 'dd414025-9ec4-5d69-86e9-730a0f433a90' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.facebook.com/IgrejadeSaoPietro/', nome = 'Paróquia de Nossa Senhora de Fátima', tipo = 'paroquia' where id = 'dd5684b3-ea54-5037-b7f0-6aebba1d531c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora da Guia' where id = 'dd630248-af70-5d2b-8975-04d05c2b81cd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de São José' where id = 'de258196-c8a4-5228-8c8d-114a1bcdeff9' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-miguel-arcanjo-s%C3%A3o-miguel-do-gostoso', instagram = 'paroquiasaomiguelrn', nome = 'Paróquia de São Miguel Arcanjo', telefone = '84994015974', tipo = 'paroquia' where id = 'de294c3e-9d7c-5aad-a689-db9e2e6a4043' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de Santa Cecília' where id = 'de815d76-f860-55d6-b751-fd3e619634df' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2333ae04-376b-59d7-91e6-2750738c8b77'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'de88cb3d-d5d2-571b-8709-b14b1b4b12f2' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf'), nome = 'Santuário de Nossa Senhora das Vitórias e Santa Luzia', padroeiro = 'Nossa Senhora das Vitórias e Santa Luzia', tipo = 'santuario' where id = 'df668235-c024-5fe1-a432-f4102cf7da57' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiabomjesusdasdores@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-bom-jesus-das-dores-ribeira-natal', instagram = 'paroquiadobomjesus', nome = 'Paróquia do Bom Jesus das Dores', telefone = '8436152823', tipo = 'paroquia' where id = 'e047d977-9226-5a57-8513-a44e85791cea' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiastld@outlook.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-teresinha-lagoa-d-anta', instagram = 'paroquiastld', nome = 'Paróquia de Santa Teresinha', tipo = 'paroquia' where id = 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'), nome = 'Capela de São Francisco de Assis' where id = 'e085be6b-7dad-5b64-aa84-f0ddd0bd616d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'), nome = 'Capela de São Francisco de Assis' where id = 'e0c6b463-976c-54ed-83e3-38595740d461' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiapsjarn@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jos%C3%A9-de-anchieta-lagoa-nova-natal', instagram = 'psjarn', nome = 'Paróquia de São José de Anchieta', telefone = '8436152857', tipo = 'paroquia', whatsapp = '84994142311' where id = 'e0e45179-ab8e-5f00-b646-ee965eee1393' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-sra-dos-imposs%C3%ADveis-pitimbu-natal', instagram = 'paroquiansi', nome = 'Paróquia de Nossa Senhora dos Impossíveis', telefone = '8420103054', tipo = 'paroquia' where id = 'e135ca75-ad13-5126-9b9c-08ccb16db664' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e71305aa-4172-5a1f-bdb5-496554f1695f'), nome = 'Capela de São José' where id = 'e14e4925-5df1-5def-bbb4-f1563d299d40' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Santa Rita de Cássia' where id = 'e14e630d-2fa8-569b-9b07-09010fb4fa07' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de São João Paulo II' where id = 'e165df69-70da-500f-b0fa-2f7b1b0ae01b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '41787583-85b5-5898-b376-365826bb9b40'), nome = 'Capela de Santo Antônio' where id = 'e19ed99c-e083-5c68-8363-d37b41546321' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnsmhomens01@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-m%C3%A3e-dos-homens-jo%C3%A3o-c%C3%A2mara', instagram = 'paroquiamaedoshomens', nome = 'Paróquia de Nossa Senhora Mãe dos Homens', telefone = '84996532647', tipo = 'paroquia' where id = 'e2ef5c1e-c067-525f-b96d-d15427742c0a' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8cb629db-b787-5c7a-ae08-4922fa3d0528'), nome = 'Capela de São Francisco' where id = 'e33661e8-fcd2-5003-8b4e-75c8e921753b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'), nome = 'Capela de São José Operário' where id = 'e377b5c6-bfa7-56ee-9404-33bef75a3db9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'), nome = 'Capela de São José' where id = 'e3db5fe9-e838-5dfd-b586-ff6e88564786' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de São José', tipo = 'paroquia' where id = 'e477dcfa-cd9d-598e-8726-4bf327b1acca' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'e4be68cd-69e4-55c6-bfae-9cc0b8b9bb09' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'e5055c24-92d6-5c33-8f6f-501d6b4f4885' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-do-ros%C3%A1rio-alto-do-rodrigues', instagram = 'paroquiarosarioarg', nome = 'Paróquia de Nossa Senhora do Rosário', telefone = '84920019190', tipo = 'paroquia' where id = 'e6f4d246-d561-5840-9807-0bbe7e0f070f' and not verificada and conferida_em is null;
update public.paroquias set email = 'pnauxiliadora@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-auxiliadora-felipe-camar%C3%A3o-natal-rn', instagram = 'pnsauxiliadorafc', nome = 'Paróquia de Nossa Senhora Auxiliadora', telefone = '84998031549', tipo = 'paroquia' where id = 'e71305aa-4172-5a1f-bdb5-496554f1695f' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquianspiedade2015@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-piedade-esp%C3%ADrito-santo', instagram = 'santuariodapiedadeof', nome = 'Paróquia de Nossa Senhora da Piedade', tipo = 'paroquia' where id = 'e7e6b9ae-8f09-5d46-b948-e80706ca725a' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiasaojosecampestre@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jos%C3%A9-s%C3%A3o-jos%C3%A9-de-campestre', instagram = 'pascomparoquiasaojose', nome = 'Paróquia de São José', telefone = '84999470936', tipo = 'paroquia' where id = 'e8fcca3d-03f2-51b4-aeb3-025882289d91' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/%C3%A1rea-pastoral-do-sagrado-cora%C3%A7%C3%A3o-de-jesus-po%C3%A7o-branco', instagram = 'paroquia.sagrado_', nome = 'Paróquia do Sagrado Coração de Jesus', telefone = '84999047673', tipo = 'paroquia', whatsapp = '84999047673' where id = 'e8fdfdff-b2aa-5896-941c-e3d963586758' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2a68bc8e-859e-5c29-870f-eb37dab871ca'), nome = 'Capela de Santa Cruz e Santa Luzia' where id = 'e99f10e5-a35d-5d7b-bb2f-30f548f5f34c' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Nova Descoberta', matriz_id = (select x.id from public.paroquias x where x.id = '117d3285-54dd-5077-b588-05a66839845c'), nome = 'Capela de Santo Expedito' where id = 'e9b30ad8-3882-52e1-b464-4b734a477b68' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiadesaobentoabade2011@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-bento-abade-serra-de-s%C3%A3o-bento', instagram = 'pascom_abade', nome = 'Paróquia de São Bento Abade', telefone = '84999273630', tipo = 'paroquia' where id = 'ea8cb252-3da9-5b19-8d23-358decc8916b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Capela do Divino Espírito Santo' where id = 'eac44832-2354-54d1-955f-2c8c789ee42d' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '410b13e3-4752-53b2-a38a-0ccfe03fc037'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'ead7804e-e42d-5813-af54-1995151fe554' and not verificada and conferida_em is null;
update public.paroquias set email = 'secretariaparoquialpanfa@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-de-f%C3%A1tima-parnamirim', instagram = 'panfa.pascom', nome = 'Paróquia de Nossa Senhora de Fátima', telefone = '84994843658', tipo = 'paroquia' where id = 'eb6e0a83-5d23-528c-91f2-8c600929b68e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8ea54890-b0dc-57bc-8fb1-bf5208dd8f03'), nome = 'Capela da Praça São Francisco' where id = 'ebc6f577-1958-54b1-9ce5-0e9e57917311' and not verificada and conferida_em is null;
update public.paroquias set bairro = 'Florestal', matriz_id = (select x.id from public.paroquias x where x.id = 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'), nome = 'Comunidade de Nossa Senhora de Fátima' where id = 'ebf4e534-aa47-58e3-bf79-3aaf233924e9' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '3e8d1d3a-ace5-5710-a426-78cef509aea1'), nome = 'Capela da Sagrada Família' where id = 'ec5ac423-eff5-5af2-904d-5472a5262e75' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'ec6c077c-aa31-567c-93c8-df8e6e8ab636' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), nome = 'Comunidade de Nossa Senhora da Guia' where id = 'eca87ff1-2f61-5184-88e2-235653141d00' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'), nome = 'Capela de Nossa Senhora Aparecida' where id = 'eccdaa70-6d82-5247-8bf1-b4712f768b65' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora do Desterro e São Francisco de Assis' where id = 'ecd19e5e-1896-58f1-8a06-2a31e8a7ccd4' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '13af422a-a5b4-5e8b-abb1-efeedf349ba1'), nome = 'Igreja de Nossa Senhora do Carmo' where id = 'ecdcae4f-b4e7-533d-b203-87ca0a469770' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Capela de São Pedro e São Paulo' where id = 'ecf212a0-cafb-5cfe-bde9-44c3e653fc95' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ef3ecbb4-8ce7-5321-b1fe-4f6c77ee2eaf'), nome = 'Capela de São José' where id = 'ed036ce8-f638-592e-88ad-c339deec3a5e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Nossa Senhora das Graças' where id = 'ed0ff283-0856-5f09-b3ee-37662fd3bae5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de São José Operário' where id = 'ed24fccc-98e6-5a8e-baeb-0c71503c05fc' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '212f91f9-e78d-5ae6-9249-4433b314cd6b'), nome = 'Igreja Mãe Rainha' where id = 'ed50d1ad-7f75-55ed-b60c-bafce7e71529' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '07141c5a-ab97-52fb-a309-92dd489ede82'), nome = 'Comunidade de Santa Teresinha' where id = 'ed72df49-283e-5bac-86bc-2e92f299f866' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2646be41-25ae-5df5-96dc-9fa2b8e1add2'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'ed90202d-0f23-5489-8c95-fd5a484602a0' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b45d1eee-543c-5c33-8f02-facf71384099'), nome = 'Capela de Nossa Senhora da Esperança' where id = 'edd4938a-20d5-5d7d-bd6d-630f2b8c20d5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'b5862952-1883-5f07-9e6d-1021c820fff9'), nome = 'Capela do Campus' where id = 'ede1a8f3-6a14-505d-b391-01208948c13c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '51cb7006-a30b-5d73-8883-a882a4e634a6'), nome = 'Capela de São Francisco de Assis' where id = 'edf97cbc-8bc2-593c-af07-40b757d93460' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '041fe9eb-f753-5856-a997-0c18ce7f52d1'), nome = 'Capela de Nossa Senhora das Graças' where id = 'ee14ac38-56ed-5275-abba-415fa0b80d17' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf'), nome = 'Capela de São Francisco de Assis' where id = 'eea3d42a-94b5-5929-944d-59bc317364af' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = 'ef24146e-78d4-5f6d-a757-8a0f45d76e02' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de Nossa Senhora das Dores', tipo = 'paroquia' where id = 'ef3ecbb4-8ce7-5321-b1fe-4f6c77ee2eaf' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'ef3f2078-30fb-5e5b-8710-c0f1d47b2f8e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'), nome = 'Capela de Nossa Senhora Rainha da Paz e Santa Luzia' where id = 'ef4891c6-ed39-530d-a4cd-5f1cf6967cba' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = 'f04f0c97-76fa-5d6b-b6f8-1e47995e2cb5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'ad818ee0-6271-58b6-837a-85cf72c47b71'), nome = 'Capela de Santa Rita' where id = 'f05d6ee0-2996-59ec-aa8a-29251ef591ba' and not verificada and conferida_em is null;
update public.paroquias set ativa = false, tipo = 'area_pastoral' where id = 'f0c1b0ae-fabf-5cd0-9c97-83e90a3570db' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'f124048f-b170-521c-82a6-addcf590b8a4' and not verificada and conferida_em is null;
update public.paroquias set email = 'santuariodotirol@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-das-gra%C3%A7as-e-santa-teresinha-tirol-natal', instagram = 'santuariodotirol', nome = 'Paróquia de Nossa Senhora das Graças e Santa Teresinha', telefone = '8436152810', tipo = 'paroquia', whatsapp = '8436152810' where id = 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Pacuti' where id = 'f178d65a-1f74-56b4-9a82-5ac29baab072' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquiansdocarmorn@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'paroquiansdocarmorn', nome = 'Paróquia de Nossa Senhora do Carmo', telefone = '8420207663', tipo = 'paroquia' where id = 'f17fbccc-589f-5580-b75b-bc09ccada35f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5472874b-c0a1-5dc4-b76e-c60f1439eda9'), nome = 'Comunidade Divina Misericórdia' where id = 'f1de57f9-52ce-5bae-a676-cf9fda49faf8' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '260a7c53-9b9d-556f-b429-1ecfd2da6b34'), nome = 'Capela de Frei Galvão' where id = 'f280dcb0-4ff5-5df5-ac27-dcf9b2a47228' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8a6d4ba3-9398-50bb-8de3-8f944921526a'), nome = 'Comunidade de São Francisco de Assis' where id = 'f2c8432c-3e3c-5eea-8394-80ce513e0dc1' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', instagram = 'basilica_nossasenhoradaguia', nome = 'Basílica de Nossa Senhora da Guia', tipo = 'basilica' where id = 'f2df9f96-1efe-5d32-b19c-89aa262eb36c' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', matriz_id = (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), nome = 'Santuário de Nossa Senhora das Graças', padroeiro = 'Nossa Senhora das Graças', tipo = 'santuario' where id = 'f327e5a8-dbaf-5530-a92f-887818ce87fa' and not verificada and conferida_em is null;
update public.paroquias set email = 'paroquia.nsconceicao23@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-nossa-senhora-da-concei%C3%A7%C3%A3o-m%C3%A3e-luiza-natal', instagram = 'paroquiansradaconceicao_', nome = 'Paróquia de Nossa Senhora da Conceição', telefone = '84998431594', tipo = 'paroquia' where id = 'f342db39-28d1-577e-833c-70adde2ee46b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), nome = 'Capela de Santa Luzia' where id = 'f342f2a3-5278-511c-9c53-440fc4c54ea6' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia do Sagrado Coração de Jesus', tipo = 'paroquia' where id = 'f357a82d-5e42-5a9c-980b-9316e9cadc9f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '85c0ad12-973f-531f-8b68-6e7b7f8ba241'), nome = 'Capela da Mãe Peregrina' where id = 'f3cc3796-c949-547b-9b36-32a1a95ed35c' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'f3d7c80a-0173-5d90-b028-ce54d0e88f18' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '2ef7a662-c3d1-5367-a719-836ce0158cc8'), nome = 'Capela de Nossa Senhora da Conceição' where id = 'f44a9e9c-706f-5097-b957-9c74b076299b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '014ee4dd-663d-5565-bb85-0067c1d507ee'), nome = 'Capela de Santa Teresinha' where id = 'f48e3920-6d30-5080-953a-0fd426d12087' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'), nome = 'Capela de São Mateus' where id = 'f4bf156a-dc0d-5bc1-8484-c0da37717511' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia do Sagrado Coração de Jesus', tipo = 'paroquia' where id = 'f54fd4d9-9c70-54c4-8488-be0a4d21843d' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora da Conceição' where id = 'f5911dfc-41ff-57d3-80eb-cc9ba2bd5ce1' and not verificada and conferida_em is null;
update public.paroquias set email = 'psteresinhatangara@hotmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-teresinha-tangar%C3%A1', instagram = 'paroquiadesantateresinha', nome = 'Paróquia de Santa Teresinha', telefone = '84998020053', tipo = 'paroquia' where id = 'f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'), nome = 'Capela de São Francisco de Assis' where id = 'f5df4c51-1a55-5a3a-a78e-6a983df7fc3f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '423c69d4-cab8-54cc-ad0c-14cbbc17c580'), nome = 'Capela de São Sebastião' where id = 'f63e3ecf-b6c7-5641-b814-3c9325ecddfb' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Capela de Nossa Senhora Aparecida' where id = 'f703251a-558c-53c2-a7a2-293a6ee07cda' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia de Nossa Senhora de Fátima', tipo = 'paroquia' where id = 'f7262858-1801-5b28-9491-c8c93518aa77' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '6ce65111-06eb-5d35-a3b0-2109bcb685cf'), nome = 'Capela de Santa Rita de Cássia' where id = 'f73d751b-025c-518f-b9d8-70bf3586e640' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = 'f7463c48-9f4b-5b48-9a24-d3972dd3dd9f' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '970b138c-33eb-5bf9-8422-628ced28459c'), nome = 'Capela de Nossa Senhora Aparecida' where id = 'f95760d4-fb55-5ec3-9537-7b2735615a92' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '014ee4dd-663d-5565-bb85-0067c1d507ee'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'f9750b90-e4d6-500c-9874-265d2d124ca6' and not verificada and conferida_em is null;
update public.paroquias set email = 'psantoantoniodepadua13@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santo-ant%C3%B4nio-de-p%C3%A1dua-parque-dos-coqueiros-natal', instagram = 'psantodepadua', nome = 'Paróquia de Santo Antônio de Pádua', telefone = '8433431172', tipo = 'paroquia' where id = 'f98a2b5e-3e14-5f06-a277-d5fc77879495' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '09c403c5-bc31-51e3-b760-8af5e9449ab6'), nome = 'Capela de São Rafael' where id = 'f9a74f0a-9c89-5dfa-bc1d-bfb0e4f48c1e' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'e106ede3-03cf-5112-9927-69a4e5fc9b36'), nome = 'Capela de Nossa Senhora Aparecida' where id = 'f9c6d813-99fa-50b7-be50-b130c9110d6e' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.instagram.com/paroquia_de_martins/', nome = 'Paróquia de Nossa Senhora da Conceição', tipo = 'paroquia' where id = 'f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Catedral de Sant''Ana', tipo = 'catedral' where id = 'faca2d7c-a29a-5391-9430-d64df7dd1cbd' and not verificada and conferida_em is null;
update public.paroquias set email = 'carlosaguiar021@gmail.com', fonte = 'arquidiocesedenatal.org.br', instagram = 'n.s_de_fatima', nome = 'Paróquia de Nossa Senhora do Rosário de Fátima', tipo = 'paroquia' where id = 'fb5336f4-b216-5208-9a1b-8a33c8263ce2' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'), nome = 'Capela de Nossa Senhora de Fátima' where id = 'fb5b2c37-0526-539b-923a-e92e58348618' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), nome = 'Capela de São Francisco de Assis' where id = 'fb91e90b-b33d-54b8-871b-f6638fe91f6b' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '8622048e-33fb-5fac-977f-0b34f73e488c'), nome = 'Igreja do Sagrado Coração de Jesus' where id = 'fc5d1c25-47d6-5a4c-ada6-84d8ea87fa71' and not verificada and conferida_em is null;
update public.paroquias set email = 'bomjesusdosnavegantes@gmail.com', fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-do-bom-jesus-dos-navegantes-touros', instagram = '_pbomjesusdosnavegantes', nome = 'Paróquia do Bom Jesus dos Navegantes', telefone = '84994579430', tipo = 'paroquia' where id = 'fcdd864e-f767-5197-840f-bb394d14a874' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '13af422a-a5b4-5e8b-abb1-efeedf349ba1'), nome = 'Capela de Nossa Senhora do Perpétuo Socorro' where id = 'fceefd29-76e7-568c-a37b-cedb52e75b06' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '62153461-4305-5e52-bd18-51feef969385'), nome = 'Comunidade do Parque das Orquídeas' where id = 'fcf44e50-a20c-5125-80db-0ebf4c2597fd' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6'), nome = 'Capela de Nossa Senhora de Lourdes' where id = 'fd7e5b67-332b-5b7d-aa6e-7d9b1e823d75' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', nome = 'Paróquia do Divino Espírito Santo', tipo = 'paroquia' where id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Área Missionária de Nossa Senhora do Perpétuo Socorro', tipo = 'area_missionaria' where id = 'fe92b393-6c51-5860-bc91-6b1166d819eb' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://diocesecaico.com/horario-das-missas/', instagram = 'paroquiadesantanacnovos', nome = 'Paróquia de Sant''Ana', tipo = 'paroquia', whatsapp = '84991559974' where id = 'fed684d6-b533-5a0d-ade7-90a57478ecd6' and not verificada and conferida_em is null;
update public.paroquias set matriz_id = (select x.id from public.paroquias x where x.id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc'), nome = 'Comunidade de Trincheiras' where id = 'fef31e67-96aa-51a0-95d0-cf2acfaf73bb' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja Sagrada Família' where id = 'ffba0ac9-cb19-5203-bd1d-e392703a9640' and not verificada and conferida_em is null;
update public.paroquias set fonte = 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-sebasti%C3%A3o-japi', instagram = 'saosebastiaojapi', nome = 'Paróquia de São Sebastião', tipo = 'paroquia' where id = 'ffe5a3a6-7b1d-55a7-84d0-d0be8639355a' and not verificada and conferida_em is null;
alter table public.paroquias enable trigger trg_paroquia_protege;
insert into public.paroquias (id, nome, tipo, diocese, endereco, bairro, cidade, uf, matriz_id, fonte) values
  ('14940a9b-ea07-53c8-b1f7-6169ca811ce2', 'Capela Centenária', 'capela', 'Arquidiocese de Natal', '', '', 'Touros', 'RN', (select x.id from public.paroquias x where x.id = '399c4d41-ef1e-57cb-ac33-7dad4a9c6736'), 'arquidiocesedenatal.org.br'),
  ('9a0ddbb7-1dc6-5024-8292-c8cec0c6d25f', 'Comunidade da Praça do Alagamar', 'comunidade', 'Arquidiocese de Natal', 'Praça do Alagamar', 'Conjunto Alagamar', 'Natal', 'RN', (select x.id from public.paroquias x where x.id = '7a759a43-29cc-5878-8a59-653c663b1cee'), 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-s%C3%A3o-jo%C3%A3o-batista-vila-de-ponta-negra-natal'),
  ('e4c61273-ae1f-55f0-8895-c42049282992', 'Igreja de São Sebastião', 'capela', 'Arquidiocese de Natal', '', '', 'Sítio Novo', 'RN', (select x.id from public.paroquias x where x.id = 'f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b'), 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santa-teresinha-tangar%C3%A1'),
  ('cd387d76-4267-5880-874d-8a131cf35036', 'Casa da RCC', 'comunidade', 'Arquidiocese de Natal', '', '', 'Parnamirim', 'RN', (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santos-reis-parnamirim'),
  ('d5bfb39c-fe73-50dc-abbb-3b4e37ff90c3', 'Anunciada Caldas', 'comunidade', 'Arquidiocese de Natal', '', '', 'Parnamirim', 'RN', (select x.id from public.paroquias x where x.id = '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'), 'https://www.arquidiocesedenatal.org.br/post/par%C3%B3quia-de-santos-reis-parnamirim'),
  ('734e6050-ba0b-5aef-8706-993041e26f50', 'Ermida da Misericórdia', 'capela', 'Diocese de Caicó', '', '', 'Caicó', 'RN', (select x.id from public.paroquias x where x.id = 'f7262858-1801-5b28-9491-c8c93518aa77'), 'https://diocesecaico.com/horario-das-missas/'),
  ('72ddceb2-6ed9-5dc8-8051-736a123d3b44', 'Comunidade Vila II', 'comunidade', 'Diocese de Caicó', '', 'Vila II', 'Caicó', 'RN', (select x.id from public.paroquias x where x.id = '5c1d543e-4862-5ff0-b944-eafd07daafb4'), 'https://diocesecaico.com/horario-das-missas/'),
  ('d4155965-93c6-54a9-9fee-278d043e3815', 'Comunidade Maynard', 'comunidade', 'Diocese de Caicó', '', 'Bairro Maynard', 'Caicó', 'RN', (select x.id from public.paroquias x where x.id = 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'), 'https://diocesecaico.com/horario-das-missas/'),
  ('320124a0-b1de-5737-b5cb-0a1194434846', 'Capela do Bom Jesus Aparecido', 'capela', 'Diocese de Caicó', '', 'Ipueira Cercada', 'Florânia', 'RN', (select x.id from public.paroquias x where x.id = '41cd4f7c-0be1-5459-99af-8ed8f0924987'), 'https://diocesecaico.com/horario-das-missas/'),
  ('64e8ca7a-9a09-5a30-9906-eb4a75ff03c6', 'Capela da Casa das Irmãs', 'capela', 'Diocese de Caicó', '', 'Comunidade Madre Francisca Lechner', 'Jardim de Piranhas', 'RN', (select x.id from public.paroquias x where x.id = '81dc8039-d795-5c4b-bfa5-9562c27ec132'), 'https://diocesecaico.com/horario-das-missas/'),
  ('44564f3b-1003-51ba-a198-30d31261dd8a', 'Comunidade de Duas Ipueiras', 'comunidade', 'Diocese de Caicó', '', 'Duas Ipueiras', 'Ouro Branco', 'RN', (select x.id from public.paroquias x where x.id = 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'), 'https://diocesecaico.com/horario-das-missas/'),
  ('99568a3e-dda8-54ff-a5e7-e42f3e40d213', 'Comunidade de Verdes', 'comunidade', 'Diocese de Caicó', '', 'Verdes', 'Santana do Seridó', 'RN', (select x.id from public.paroquias x where x.id = '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'), 'https://diocesecaico.com/horario-das-missas/'),
  ('bee10172-3702-5518-9cd3-3da72ae5c2bf', 'Comunidade Caeira', 'comunidade', 'Diocese de Caicó', '', 'Caeira', 'São João do Sabugi', 'RN', (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), 'https://diocesecaico.com/horario-das-missas/'),
  ('4329c6ff-1a23-5884-8906-ad8f22b2f692', 'Comunidade Vila da Barra', 'comunidade', 'Diocese de Caicó', '', 'Vila da Barra', 'São João do Sabugi', 'RN', (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), 'https://diocesecaico.com/horario-das-missas/'),
  ('d41150b3-add2-5a55-9aca-c41f6c90ac29', 'Comunidade Jerusalém', 'comunidade', 'Diocese de Caicó', '', 'Jerusalém', 'São João do Sabugi', 'RN', (select x.id from public.paroquias x where x.id = '76cc15df-c1dd-5f29-b54c-cc38f3c00390'), 'https://diocesecaico.com/horario-das-missas/')
on conflict (id) do nothing;
delete from public.horarios h using public.paroquias p where p.id = h.paroquia_id and not p.verificada and p.conferida_em is null and h.data is null and (h.paroquia_id, h.tipo) in (values
  ('00b2a51b-a4da-53e5-94a8-8a00d43bee8f'::uuid, 'missa'),
  ('0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa'),
  ('01a08411-c308-5a08-b33d-07c353fe931f'::uuid, 'missa'),
  ('01bf2352-7617-504f-afc7-d8682ba86911'::uuid, 'missa'),
  ('025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'::uuid, 'missa'),
  ('02c372e8-65b9-5dab-b82d-c3481a47ce3f'::uuid, 'missa'),
  ('035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa'),
  ('03631606-1cc5-5c2f-a22f-9c68ed3d030c'::uuid, 'missa'),
  ('03652466-9666-5d08-8e5a-bd31d66a138e'::uuid, 'missa'),
  ('040c8c87-a907-5529-8d33-de1f77c6e0dc'::uuid, 'missa'),
  ('05a0069e-adfd-5bbc-b3f0-2946d14d1aae'::uuid, 'missa'),
  ('069c251e-d007-5efe-8d8c-a52adedd5853'::uuid, 'missa'),
  ('07009e36-7bd2-5105-b37a-2ed3b39456ad'::uuid, 'missa'),
  ('07141c5a-ab97-52fb-a309-92dd489ede82'::uuid, 'missa'),
  ('07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa'),
  ('07a70d47-ccb8-56c4-9cdb-f28a28ad67b9'::uuid, 'missa'),
  ('0883702a-3cea-5163-a848-4d9d7dd408ba'::uuid, 'missa'),
  ('093d972b-4f2c-541b-805c-208e30205c4e'::uuid, 'missa'),
  ('0957c6de-f172-5e16-b15a-d865d7448645'::uuid, 'missa'),
  ('09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa'),
  ('0a5c5a9d-a59f-5244-b0da-6bfc5c9b47c8'::uuid, 'missa'),
  ('0ac0e81b-0c6d-5487-9653-f9454d5f1ef1'::uuid, 'missa'),
  ('0b46743d-afe6-5287-bb47-e5cc1ddbabcf'::uuid, 'missa'),
  ('0b75e4a2-a234-5810-b941-8868d95c65d9'::uuid, 'missa'),
  ('0cf4a087-0296-5ee9-b9ae-688c0e4686c7'::uuid, 'missa'),
  ('0e094172-1f9d-5308-abb6-8cd7d680e684'::uuid, 'missa'),
  ('0ecc72a9-6680-5041-b619-b89a0117324f'::uuid, 'missa'),
  ('0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa'),
  ('0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'::uuid, 'missa'),
  ('1018a809-adbe-5cbe-88a7-2c67673811e7'::uuid, 'missa'),
  ('12b08bbe-968c-56b5-8e6e-60b39f86a5f2'::uuid, 'missa'),
  ('12c4a476-a36d-5d22-9ac8-8f486581d028'::uuid, 'missa'),
  ('139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa'),
  ('13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa'),
  ('148ddbfe-7c31-5270-ad06-b439395b2336'::uuid, 'missa'),
  ('14940a9b-ea07-53c8-b1f7-6169ca811ce2'::uuid, 'missa'),
  ('15468b7d-7d9e-5d18-906d-de837224f25c'::uuid, 'missa'),
  ('1572c82c-68c6-5ca2-b437-ae6d1be5924f'::uuid, 'missa'),
  ('16082691-1821-5484-9f51-f16e936ad3b6'::uuid, 'missa'),
  ('168b0df5-4510-5028-9da1-173b47e36151'::uuid, 'missa'),
  ('169b9d22-d338-5296-bb6f-b8b2c5b1be89'::uuid, 'missa'),
  ('16aaede6-e3db-5535-81c3-641a98a20b9d'::uuid, 'missa'),
  ('179aa4ce-fe43-545b-8803-d033da9a8abc'::uuid, 'missa'),
  ('17bcbd99-dd6c-53fd-8ba4-062a0066509b'::uuid, 'missa'),
  ('18955105-ab97-5577-b1a1-c7dea3fa58bd'::uuid, 'missa'),
  ('1953de96-4966-545d-9f22-a57d2450e642'::uuid, 'missa'),
  ('1a5dd32f-3d87-53a5-aa6f-917c250d24f5'::uuid, 'missa'),
  ('1bdb10c6-5af0-529f-a4f1-9d29daba604f'::uuid, 'missa'),
  ('1cda00e5-b816-5fc7-b1d3-ce8844310502'::uuid, 'missa'),
  ('1d35788f-b7c6-524a-ae4c-2f00c3692e92'::uuid, 'missa'),
  ('1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa'),
  ('1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'adoracao'),
  ('1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'confissao'),
  ('1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'missa'),
  ('1e0ef046-3418-5127-aac7-d258fec3360b'::uuid, 'missa'),
  ('1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa'),
  ('205f6ee6-8160-5e18-a82f-8e42b1692339'::uuid, 'missa'),
  ('20d92896-05bb-577e-be26-b6ebe025ec3f'::uuid, 'missa'),
  ('21312229-c1da-5dec-9b85-8710d74d2be3'::uuid, 'missa'),
  ('22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa'),
  ('22a954ae-d079-55ac-9a85-c575c1564ca1'::uuid, 'missa'),
  ('2368e1de-4917-5730-9a73-a889123b2736'::uuid, 'missa'),
  ('239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa'),
  ('2452d2e5-4069-56f7-b2e6-f92755954be6'::uuid, 'missa'),
  ('2547bf9d-a857-5672-a8f4-74063a193206'::uuid, 'missa'),
  ('260a7c53-9b9d-556f-b429-1ecfd2da6b34'::uuid, 'missa'),
  ('2646be41-25ae-5df5-96dc-9fa2b8e1add2'::uuid, 'missa'),
  ('2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'::uuid, 'missa'),
  ('268c1c3c-6d6e-5bc2-bf81-d8f4b5989e3c'::uuid, 'adoracao'),
  ('28c74d4d-d8f4-534e-bda1-49dd8d6dc51c'::uuid, 'missa'),
  ('28f4e0a9-a009-5b7b-a495-d36cb0b53ccb'::uuid, 'missa'),
  ('29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa'),
  ('29bf81d0-2d1c-5748-8e3a-ef1e53693cd1'::uuid, 'missa'),
  ('29e65406-ce79-523d-81b1-d36348fa709e'::uuid, 'missa'),
  ('2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'adoracao'),
  ('2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'missa'),
  ('2ba12d23-7b89-5370-869e-e99c8069b62f'::uuid, 'missa'),
  ('2bafcd6a-494a-5938-b11a-b06c11e38cd4'::uuid, 'missa'),
  ('2bb111c4-2fa3-58b3-9529-36cd4fc35c7c'::uuid, 'missa'),
  ('2c4136b3-f280-593c-ac42-f75081db0fc2'::uuid, 'missa'),
  ('2c517e66-a056-5cae-9cae-d08411877599'::uuid, 'missa'),
  ('2c539d25-f854-5bcb-a358-b3727770077c'::uuid, 'missa'),
  ('2cb37765-12c5-529d-a0b7-51a4020f15a0'::uuid, 'missa'),
  ('2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa'),
  ('2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa'),
  ('2d42ae8c-c76a-50c9-a4a9-927e780082fa'::uuid, 'missa'),
  ('2d52ea1a-fd98-5158-9388-9b86399fb75d'::uuid, 'missa'),
  ('2d9d7031-1583-5a1f-9772-18464e933d77'::uuid, 'missa'),
  ('2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa'),
  ('2eb6fdf1-bfb2-5a08-a149-edee6e648328'::uuid, 'missa'),
  ('2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'adoracao'),
  ('2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa'),
  ('2ef84f25-daf3-588a-a5de-9bfb6a619bf0'::uuid, 'missa'),
  ('2fefa625-ddf1-5b70-b751-36937a1d98fe'::uuid, 'missa'),
  ('3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa'),
  ('3119d852-ff55-5929-9c9c-579a87696e0f'::uuid, 'missa'),
  ('315a53cc-a4ee-58b8-a44d-503a98505b93'::uuid, 'missa'),
  ('319eafb6-fccb-5ec3-88ef-d27c211d6697'::uuid, 'missa'),
  ('31fcf1d1-0aba-590f-9fdb-746eb4031b7d'::uuid, 'missa'),
  ('320124a0-b1de-5737-b5cb-0a1194434846'::uuid, 'missa'),
  ('32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa'),
  ('333bc8a4-3834-584f-a7e2-17a2bdbaafa0'::uuid, 'missa'),
  ('33f10954-11c7-5a7c-a470-b0189601fc78'::uuid, 'missa'),
  ('37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa'),
  ('38069ce3-12ea-5d72-b825-29c278c5ae49'::uuid, 'missa'),
  ('38a92e98-2912-5985-9daa-15405f51ad0b'::uuid, 'missa'),
  ('399c4d41-ef1e-57cb-ac33-7dad4a9c6736'::uuid, 'missa'),
  ('39f883b7-536d-5929-9bbd-10f9474b4ce3'::uuid, 'missa'),
  ('3a14e5ce-13fe-5f1c-ade6-11b3214d5cac'::uuid, 'missa'),
  ('3a5826fb-491e-5a86-a2fb-28ebf45ca8db'::uuid, 'missa'),
  ('3b0d4323-7e57-5eac-a3aa-baafb4de5621'::uuid, 'missa'),
  ('3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa'),
  ('3b8770dd-853a-5a52-b36d-c7b7075cbc96'::uuid, 'missa'),
  ('3b8c69e8-3e3d-5b59-8dc3-9ea288a4185c'::uuid, 'missa'),
  ('3bdb0053-d06b-596a-b021-40df6f400df7'::uuid, 'missa'),
  ('3c6e0f17-4b08-5453-96fc-9034fcf23977'::uuid, 'missa'),
  ('3d80b5be-9163-584d-9f79-6dd4870b9e9c'::uuid, 'missa'),
  ('3d8a1a77-4778-59ce-a343-55755a2b41e6'::uuid, 'missa'),
  ('3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa'),
  ('3dccbe6a-93a1-5ace-a30c-e6e43d79cded'::uuid, 'missa'),
  ('3ec4fbee-4505-5a7a-b486-72fd1e75e0e0'::uuid, 'missa'),
  ('3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa'),
  ('3efbf51e-c146-5173-8f4d-48cb3ab80897'::uuid, 'missa'),
  ('3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'adoracao'),
  ('3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'missa'),
  ('3ff1183b-0eed-5c7f-acc1-8a55b8fa2f9f'::uuid, 'missa'),
  ('4082bfb0-8b61-5d6e-96ec-f7f8086103a7'::uuid, 'missa'),
  ('410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa'),
  ('41787583-85b5-5898-b376-365826bb9b40'::uuid, 'missa'),
  ('41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa'),
  ('42474f9b-6d3d-5094-96fa-0bd35fef71da'::uuid, 'missa'),
  ('426ef105-438e-5361-bdea-cd8433b25829'::uuid, 'missa'),
  ('4329c6ff-1a23-5884-8906-ad8f22b2f692'::uuid, 'missa'),
  ('4376e8a6-7c30-58a2-9e6b-bd754d91115c'::uuid, 'missa'),
  ('443d5be2-b788-57f1-8a1a-da7c4e2e1523'::uuid, 'missa'),
  ('44558d19-e488-5c8a-981b-a847f227ae65'::uuid, 'missa'),
  ('44564f3b-1003-51ba-a198-30d31261dd8a'::uuid, 'missa'),
  ('451e27f9-bc00-5df8-b7d3-960451ff1f04'::uuid, 'missa'),
  ('455b9a01-f386-57e6-b266-5483160fed5d'::uuid, 'missa'),
  ('45e5bcd7-54f8-50e7-a977-a8a08db64c2a'::uuid, 'adoracao'),
  ('45e5bcd7-54f8-50e7-a977-a8a08db64c2a'::uuid, 'missa'),
  ('46200e8d-7aa9-5abe-bf08-231270b22973'::uuid, 'missa'),
  ('471fb207-1286-5650-85b5-777d40cbac1e'::uuid, 'missa'),
  ('47926a87-b876-5265-8a70-2b37d6bb5b4d'::uuid, 'missa'),
  ('4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa'),
  ('4b3ca1db-548c-572d-9d7b-420324c41db5'::uuid, 'missa'),
  ('4b51e320-bdc0-5d16-9ceb-c989cce70866'::uuid, 'missa'),
  ('4dcc6988-c97b-5163-98c4-7eb2478a5425'::uuid, 'missa'),
  ('4ee6e429-f530-5c0f-8c4b-d582eaa53751'::uuid, 'missa'),
  ('4fecebd6-5891-5365-b409-da4f69241a0a'::uuid, 'missa'),
  ('500851c2-c83b-50e5-aa4c-d1ab4e1caea3'::uuid, 'missa'),
  ('50cd37e0-8d69-511d-90ff-1d8398419859'::uuid, 'missa'),
  ('51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa'),
  ('51ecc704-f11e-530e-b0ea-81214cb1a2f0'::uuid, 'missa'),
  ('52444b51-ad5b-51d2-88a2-88c3ef5b0ae7'::uuid, 'missa'),
  ('5251a354-c1f7-57be-8265-5464366316ff'::uuid, 'missa'),
  ('52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa'),
  ('52adf077-83d3-5e58-99e7-c2bf5efd7c2f'::uuid, 'missa'),
  ('53a2059b-0630-5ea8-8e27-836e99b88f47'::uuid, 'missa'),
  ('541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa'),
  ('5564ebeb-46ba-5344-8c09-d7e020a8313e'::uuid, 'missa'),
  ('5692f833-e0b7-5aaa-a5b9-f1be332fbee6'::uuid, 'missa'),
  ('56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'::uuid, 'missa'),
  ('56df358b-1c1e-5f89-a3bd-cce83ae1d3c2'::uuid, 'missa'),
  ('57580b23-f20d-548d-9d0d-3d672635097d'::uuid, 'missa'),
  ('5831b771-aac2-5978-8cd5-52e61e28c951'::uuid, 'missa'),
  ('5834313a-b867-5bff-a0c4-1b6f48776d32'::uuid, 'missa'),
  ('585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'adoracao'),
  ('585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'missa'),
  ('59e07032-a05f-5981-bcba-0832cd231dc4'::uuid, 'missa'),
  ('5bc9f784-53e8-5a3f-9510-66ec16232e00'::uuid, 'missa'),
  ('5c1d543e-4862-5ff0-b944-eafd07daafb4'::uuid, 'missa'),
  ('5c7467df-a22d-597f-8375-0844d196529c'::uuid, 'missa'),
  ('5c96c792-3e0b-590f-b299-1c8298a0939e'::uuid, 'missa'),
  ('5c9b696d-d8ce-51f9-85ec-605884540b10'::uuid, 'missa'),
  ('5d9f56d6-6bc7-5a3b-a642-f583df3a80e3'::uuid, 'missa'),
  ('5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa'),
  ('5e85833f-3ac1-5083-9fa2-1267fd5b74c9'::uuid, 'missa'),
  ('5f2d2d77-9243-55ba-86b5-ae78d49b1457'::uuid, 'missa'),
  ('5f420431-9095-5b0b-a1ab-3479de96a102'::uuid, 'missa'),
  ('5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa'),
  ('5fe5ffbd-6b0d-5ada-9326-bc4bad989fe9'::uuid, 'missa'),
  ('6098c7df-3055-56e9-9430-a0478edf4e0a'::uuid, 'missa'),
  ('60f7d746-cb29-5972-843b-6ba3da11c165'::uuid, 'missa'),
  ('61af1ec4-22eb-5f19-bcf8-73aacc6587f3'::uuid, 'missa'),
  ('62109d98-1837-56fc-83be-0fb3770b81e1'::uuid, 'missa'),
  ('62153461-4305-5e52-bd18-51feef969385'::uuid, 'missa'),
  ('622a2179-0d32-5178-84f3-73cca1ab3b90'::uuid, 'missa'),
  ('630426d3-903e-544b-8b8a-bf1a530647b6'::uuid, 'missa'),
  ('635244e8-26ac-5ac7-9438-c8e7f7cd3a39'::uuid, 'missa'),
  ('636be2b4-aa2d-5aeb-b800-59a1369b823f'::uuid, 'missa'),
  ('6400902b-7578-5b46-be6d-6097dd87876e'::uuid, 'missa'),
  ('64477daa-1297-58d5-b54f-9e606bc60f21'::uuid, 'missa'),
  ('64754544-82e0-52df-bd42-19fe16ee846b'::uuid, 'missa'),
  ('6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'confissao'),
  ('6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa'),
  ('64e8ca7a-9a09-5a30-9906-eb4a75ff03c6'::uuid, 'missa'),
  ('6587438e-c7a2-5e3a-905f-8057c76d65e8'::uuid, 'missa'),
  ('65a6d60e-1628-539f-9af4-129a0b11dc3e'::uuid, 'missa'),
  ('661dbf10-864b-58f6-995b-b57531e3e3ba'::uuid, 'missa'),
  ('669870ae-bd50-54b3-b4f7-50dc20ae76c2'::uuid, 'missa'),
  ('6788c704-67f9-5751-adea-97dcf44d24a5'::uuid, 'missa'),
  ('67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa'),
  ('6a6ec7d7-3176-5496-a75e-e5f298d6da0a'::uuid, 'missa'),
  ('6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2'::uuid, 'missa'),
  ('6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'adoracao'),
  ('6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'confissao'),
  ('6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'missa'),
  ('6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa'),
  ('6d776938-09c2-57e2-aee3-88f9cbd61356'::uuid, 'missa'),
  ('6d9f5548-b03f-51ec-ad8a-631f8af2b5f6'::uuid, 'missa'),
  ('6da0ff36-e2ce-5c65-be1f-f96b1b780006'::uuid, 'missa'),
  ('6e6c59a9-a526-5a58-bd8b-f1baeddbe8bd'::uuid, 'missa'),
  ('715dc3e8-7fba-56c3-b095-32dc152295dc'::uuid, 'missa'),
  ('718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa'),
  ('72ddceb2-6ed9-5dc8-8051-736a123d3b44'::uuid, 'missa'),
  ('734e6050-ba0b-5aef-8706-993041e26f50'::uuid, 'missa'),
  ('7395fc65-caea-5184-a56d-958925eb868a'::uuid, 'missa'),
  ('740e90a1-6860-54f3-8be5-8bbd3cc9ee79'::uuid, 'missa'),
  ('7442961f-8bdb-5ca2-ade6-91aa4ae38bf9'::uuid, 'missa'),
  ('74851423-4de7-597e-91a9-a7c8aa15025b'::uuid, 'missa'),
  ('753d8f35-8033-5f10-91c5-98580308e290'::uuid, 'missa'),
  ('75a124d6-75f9-5d9a-8444-59a82875d34c'::uuid, 'missa'),
  ('763b022f-bd74-5f16-a602-6b8d321f7594'::uuid, 'missa'),
  ('7669f41f-940d-5678-84f0-dbe929f82b35'::uuid, 'missa'),
  ('76cc15df-c1dd-5f29-b54c-cc38f3c00390'::uuid, 'missa'),
  ('77110c96-c001-5020-9fc4-772d11600a59'::uuid, 'missa'),
  ('773940db-6adc-5bd5-a237-32973767ffa6'::uuid, 'missa'),
  ('77689aae-7a2f-5b5e-80ce-bb4614cc056e'::uuid, 'missa'),
  ('787ec272-5892-5720-85a2-a259abf6c705'::uuid, 'missa'),
  ('7882aa65-9ea9-55f1-b3ec-811541953c4b'::uuid, 'missa'),
  ('78d29ba1-334d-574b-be5f-e9df1085de94'::uuid, 'missa'),
  ('79c4e609-3ca3-500b-adb8-d44c1ae2e19f'::uuid, 'missa'),
  ('79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa'),
  ('7a511675-97f4-50fd-bd59-c9af6d8e6c2c'::uuid, 'missa'),
  ('7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa'),
  ('7a92081a-dc67-5d27-9631-143c9f66c58f'::uuid, 'missa'),
  ('7abaaa02-fe57-57fe-9bd7-d96784afebe8'::uuid, 'missa'),
  ('7bb89fff-0863-55ad-8f8c-e3bdea131e69'::uuid, 'missa'),
  ('7c3904cd-43b6-5fac-8548-de0b5014134d'::uuid, 'missa'),
  ('7c48f6c2-2302-586c-8869-652af6202e8a'::uuid, 'missa'),
  ('7ce15e9c-3010-5788-a582-18230e723c32'::uuid, 'missa'),
  ('7d0afa85-2734-5306-a9d7-45baa1ccbb5b'::uuid, 'missa'),
  ('7dc2e25c-0abc-540a-9b6d-fd7920d95421'::uuid, 'missa'),
  ('7df9cdfc-fc9a-55ec-8fb4-a8ecddf5e74f'::uuid, 'missa'),
  ('7e48e766-eeca-5a4d-bbcd-cd6e17a7f0c7'::uuid, 'missa'),
  ('7f5d248f-9cac-5fa5-9bfb-963f015301bd'::uuid, 'missa'),
  ('80cd1cfc-fce5-519b-8918-d1d2cadf37b4'::uuid, 'missa'),
  ('81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa'),
  ('833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa'),
  ('833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa'),
  ('836a84c4-2d16-5774-9773-cc84111aca48'::uuid, 'missa'),
  ('83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa'),
  ('856876df-264b-5cdd-8c6c-346b40411d2e'::uuid, 'missa'),
  ('85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa'),
  ('89115597-79cb-5bcc-8714-7d2c70450408'::uuid, 'missa'),
  ('89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa'),
  ('8a1d9980-3d8b-5fe3-9c90-639b79c49573'::uuid, 'missa'),
  ('8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa'),
  ('8ab40aac-c61d-5e88-a238-82db900478a1'::uuid, 'missa'),
  ('8ac62213-eba1-5acb-9426-0c4f2f3e9860'::uuid, 'missa'),
  ('8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'confissao'),
  ('8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa'),
  ('8ce65a5f-cd78-59db-8fb5-5876fbaae5f9'::uuid, 'missa'),
  ('8d0a7bf2-bb22-52e2-b744-411bddfc2b43'::uuid, 'missa'),
  ('8d67bc7c-9454-5621-b30e-de3beb9314c0'::uuid, 'missa'),
  ('8eea7ae5-da37-573a-809a-7e4e653417d6'::uuid, 'missa'),
  ('8f4904ad-3e5f-5560-9afa-c832bf237344'::uuid, 'missa'),
  ('900889a8-dd9c-5de5-8ac2-76a0470d55ef'::uuid, 'missa'),
  ('907398ce-0dfb-5844-9b86-c8fb97513196'::uuid, 'missa'),
  ('90c17a30-029d-506e-be73-d1f98e61517e'::uuid, 'missa'),
  ('90dfaf7f-dca5-51e0-9789-7a8595060df0'::uuid, 'missa'),
  ('90f0527f-3c4f-59c4-ae13-aa48c443a71e'::uuid, 'missa'),
  ('91974767-89df-53fc-abd9-b2cb7def5fae'::uuid, 'missa'),
  ('91cc7e5f-11dd-5546-b7cf-fa9697790240'::uuid, 'missa'),
  ('91f7ead9-09b9-5195-b880-3eb9c751e130'::uuid, 'missa'),
  ('938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa'),
  ('9428a0b3-f8a8-5faf-b7a3-5c64baaf4f21'::uuid, 'missa'),
  ('9441216f-43cf-5234-9756-53a6cbc0b6e9'::uuid, 'missa'),
  ('95ab4184-39a6-5833-9a9e-f5e4a877c377'::uuid, 'missa'),
  ('9641a92b-72ea-5876-bbf6-7f13a2c66bd7'::uuid, 'missa'),
  ('970b138c-33eb-5bf9-8422-628ced28459c'::uuid, 'missa'),
  ('9735edf0-bdef-5b35-84e1-3284c504a57c'::uuid, 'missa'),
  ('9799ecf3-ff24-5526-86d4-7964e985137f'::uuid, 'missa'),
  ('993cf7da-e2ea-552c-9ac8-a828823d5706'::uuid, 'missa'),
  ('99568a3e-dda8-54ff-a5e7-e42f3e40d213'::uuid, 'missa'),
  ('99d0f2f5-1ade-527b-ab5f-2d575746f04e'::uuid, 'missa'),
  ('99ffde2b-799e-5dc4-8144-a87d6118367e'::uuid, 'missa'),
  ('9a0ddbb7-1dc6-5024-8292-c8cec0c6d25f'::uuid, 'missa'),
  ('9a51395c-242a-51b6-93a0-5b2b2d450af7'::uuid, 'missa'),
  ('9ac0c900-f066-5dee-80c8-b7c4877f0520'::uuid, 'missa'),
  ('9be88c30-9fbc-5863-a538-0ab85b5c18c0'::uuid, 'missa'),
  ('9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa'),
  ('9cd867c9-9633-5ebe-94d9-d366e38d1273'::uuid, 'missa'),
  ('9ce4bcda-4e0d-5f69-a236-6a58fd4d8fb5'::uuid, 'missa'),
  ('9cfe11e7-a4f9-5478-acd3-1ab93fd8f6a9'::uuid, 'missa'),
  ('9da03cae-2ede-5510-8d6a-85fdbed71537'::uuid, 'missa'),
  ('9dcb264a-ecfd-5543-8be7-94b26b9e3922'::uuid, 'missa'),
  ('9e719365-8579-5aca-b9a5-0763ed509520'::uuid, 'missa'),
  ('9e8a271e-e0a8-5c0a-9032-c3524d093b07'::uuid, 'missa'),
  ('9fcbc74c-5c0c-573c-81b6-c75b7fa7359b'::uuid, 'missa'),
  ('a0028d31-d32a-5a89-8b0a-7114d8adbf81'::uuid, 'missa'),
  ('a0524485-70c7-5089-b47b-e098881138a5'::uuid, 'missa'),
  ('a0878748-4dad-50b8-89ee-fc19e1279caf'::uuid, 'missa'),
  ('a1b74f3f-aca4-5faf-887f-3ec541893741'::uuid, 'missa'),
  ('a2c444a2-4693-5bfb-89aa-521ee18c5a1b'::uuid, 'missa'),
  ('a3432c2a-f76e-55aa-a84e-77b18fdfe8e1'::uuid, 'missa'),
  ('a3f54306-bc28-5da5-bb50-cd065a6fd0bc'::uuid, 'missa'),
  ('a4969dd2-f3e8-5a22-bf9d-52abf0c88519'::uuid, 'missa'),
  ('a5b16634-b0be-5d17-8a35-5ea0257417b4'::uuid, 'missa'),
  ('a6a558fd-b5fc-5b27-aea8-0d2125449ba3'::uuid, 'missa'),
  ('a8aef2bb-b5b7-5b10-a9ef-31387bdbb551'::uuid, 'missa'),
  ('ab061009-e202-565c-b1d0-51a4d96c1a35'::uuid, 'missa'),
  ('ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa'),
  ('ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa'),
  ('aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa'),
  ('acef7f85-9d47-5c06-9f08-675cb4678c8e'::uuid, 'missa'),
  ('ad818ee0-6271-58b6-837a-85cf72c47b71'::uuid, 'missa'),
  ('ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa'),
  ('add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa'),
  ('ae13f35a-407d-5c36-80c7-818141307226'::uuid, 'missa'),
  ('aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa'),
  ('aed193dd-5a50-5cb3-b035-260c6283f10f'::uuid, 'missa'),
  ('afc55423-78a3-583f-8d36-ef7479277122'::uuid, 'missa'),
  ('afc6008f-0840-56b0-8ddc-246a83683944'::uuid, 'missa'),
  ('b0163325-740b-5ff2-ab3f-cb7d7823f1a9'::uuid, 'missa'),
  ('b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa'),
  ('b11a3526-b083-57db-8768-f56bc35702e9'::uuid, 'missa'),
  ('b23025fe-a1b8-55bc-9eaf-6ba2b66e6869'::uuid, 'missa'),
  ('b299e385-c869-52da-ab33-70ec7ec1b7f9'::uuid, 'missa'),
  ('b3c55e34-75bc-5cb6-acd2-0d96b73980fd'::uuid, 'missa'),
  ('b3fd592e-027b-547d-a637-9bb37c872fc2'::uuid, 'missa'),
  ('b45d1eee-543c-5c33-8f02-facf71384099'::uuid, 'missa'),
  ('b4d8e778-e928-57b5-8b5f-0c035f05d99c'::uuid, 'missa'),
  ('b54a16cf-455b-5212-a3e4-4a819242eceb'::uuid, 'missa'),
  ('b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa'),
  ('b5916c2b-b83e-520e-b326-1ea32401e6eb'::uuid, 'missa'),
  ('b5d11859-e0c2-5e1f-9b7e-72aa418b7f48'::uuid, 'missa'),
  ('b6e6ca21-5f6b-52bd-8c69-e47fd12fbf58'::uuid, 'missa'),
  ('b72daa51-2601-5851-86c1-6c9ae213d4a8'::uuid, 'missa'),
  ('b7ddc03a-e030-541b-80d3-9573d49f7318'::uuid, 'missa'),
  ('b829ec6c-d5e5-5a46-bc61-c147d760599a'::uuid, 'missa'),
  ('b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa'),
  ('baf69c03-c5b6-5f04-80fe-bf67108dac67'::uuid, 'missa'),
  ('bc733872-1e9e-5022-9e41-af7e6bf40a06'::uuid, 'missa'),
  ('bcabc3c0-6ee3-53c1-8502-546bd69b9ed1'::uuid, 'missa'),
  ('bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa'),
  ('bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa'),
  ('bedf890b-ebb1-5718-84b2-9ac08ff813c9'::uuid, 'missa'),
  ('bee10172-3702-5518-9cd3-3da72ae5c2bf'::uuid, 'missa'),
  ('bf14e865-5a74-503d-8544-f4382fd06e9e'::uuid, 'missa'),
  ('c004d647-3d82-5b81-be55-2a61d13d7b1a'::uuid, 'missa'),
  ('c10f4a4a-6613-5065-becd-13534328a29f'::uuid, 'missa'),
  ('c1656b74-8113-532b-8bba-2d439e5fecd7'::uuid, 'missa'),
  ('c23b2eaa-09eb-5fbe-bee4-b72032eccd21'::uuid, 'missa'),
  ('c2855ccb-c4cb-58dc-b8ff-1e07d5be4e97'::uuid, 'missa'),
  ('c2b04c68-b840-53b2-b997-edf720821bd0'::uuid, 'missa'),
  ('c3d5133b-9bc2-50d6-903e-b8deda1e05c6'::uuid, 'missa'),
  ('c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa'),
  ('c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa'),
  ('c4d4a1d7-e03d-59e9-8096-ceffccd7d6f3'::uuid, 'missa'),
  ('c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa'),
  ('c612144b-ec58-5e25-a8c5-a51f76de9bab'::uuid, 'missa'),
  ('c6c77f1b-2f6f-5d29-907c-30cf2a10c28e'::uuid, 'missa'),
  ('c87a685e-d14c-5093-9089-27ea09d94e73'::uuid, 'missa'),
  ('c8b2cc7d-2544-56a4-8bce-52c8a52ca107'::uuid, 'missa'),
  ('c8cf02e2-1e9f-5c6d-96a0-af0eca56c6b0'::uuid, 'missa'),
  ('ca201bcc-1938-54e5-8e26-1f46f46e1946'::uuid, 'missa'),
  ('ca5e4d5d-85d1-51f5-847d-472e96e8d976'::uuid, 'missa'),
  ('ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa'),
  ('cb9ec572-af7f-5609-87fb-d6cd12589591'::uuid, 'missa'),
  ('cba8de2a-ebe4-5671-bb1f-39cd07ac0be2'::uuid, 'missa'),
  ('ccb7c7a5-869d-58ba-b317-5208a5e1f0d9'::uuid, 'missa'),
  ('cd387d76-4267-5880-874d-8a131cf35036'::uuid, 'missa'),
  ('ce0c6739-ac2e-584a-a758-058453a99008'::uuid, 'missa'),
  ('ce360342-eb67-5cc8-9854-a574e3c7a4fa'::uuid, 'missa'),
  ('ce4c3596-92db-5eff-a194-74705935f79b'::uuid, 'missa'),
  ('ce59044e-cf12-55c1-bc9b-0a099a970814'::uuid, 'missa'),
  ('cee80872-5c44-57bf-b82f-5ad5cc6220a8'::uuid, 'missa'),
  ('cf54162f-eff8-5356-952e-6251c798b808'::uuid, 'missa'),
  ('cfd7ae62-263e-5020-aa88-48c5bc664ba1'::uuid, 'missa'),
  ('d100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'adoracao'),
  ('d100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'confissao'),
  ('d100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'missa'),
  ('d150fa5d-3f9b-565f-b606-28020936eb95'::uuid, 'missa'),
  ('d272ee85-9ea9-5cb6-b065-72a34555483a'::uuid, 'missa'),
  ('d3192233-a463-5ac3-89fc-9bc8e779358f'::uuid, 'missa'),
  ('d41150b3-add2-5a55-9aca-c41f6c90ac29'::uuid, 'missa'),
  ('d4155965-93c6-54a9-9fee-278d043e3815'::uuid, 'missa'),
  ('d47e935c-c37d-5724-a93a-ca626f7939a5'::uuid, 'missa'),
  ('d4a40c83-f380-5f0e-8173-c667838362ca'::uuid, 'missa'),
  ('d4da5323-17ac-54c5-9dd1-6a7fff2e1c5a'::uuid, 'missa'),
  ('d5bfb39c-fe73-50dc-abbb-3b4e37ff90c3'::uuid, 'missa'),
  ('d5dea2a9-dbfd-5932-ad3b-0fa128c77977'::uuid, 'missa'),
  ('d5f571bc-02be-5e96-af0d-bcdb27f5f5dc'::uuid, 'missa'),
  ('d71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'adoracao'),
  ('d71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa'),
  ('d77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa'),
  ('d7d3aa4e-c702-55f6-ab3b-c1b9e4fb3b02'::uuid, 'missa'),
  ('d8cd6fba-52e9-5bdd-aa28-54ba60db123f'::uuid, 'missa'),
  ('d8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa'),
  ('d97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa'),
  ('da7398b5-b14a-5e47-b930-b65411eec80c'::uuid, 'missa'),
  ('daf53f9b-8d42-5d5b-a794-8a7354ebbb8e'::uuid, 'missa'),
  ('dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa'),
  ('dd414025-9ec4-5d69-86e9-730a0f433a90'::uuid, 'missa'),
  ('de294c3e-9d7c-5aad-a689-db9e2e6a4043'::uuid, 'missa'),
  ('df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'adoracao'),
  ('df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'confissao'),
  ('df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'missa'),
  ('e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa'),
  ('e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa'),
  ('e085be6b-7dad-5b64-aa84-f0ddd0bd616d'::uuid, 'missa'),
  ('e0c6b463-976c-54ed-83e3-38595740d461'::uuid, 'missa'),
  ('e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'adoracao'),
  ('e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa'),
  ('e106ede3-03cf-5112-9927-69a4e5fc9b36'::uuid, 'missa'),
  ('e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa'),
  ('e14e4925-5df1-5def-bbb4-f1563d299d40'::uuid, 'missa'),
  ('e165df69-70da-500f-b0fa-2f7b1b0ae01b'::uuid, 'missa'),
  ('e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa'),
  ('e33661e8-fcd2-5003-8b4e-75c8e921753b'::uuid, 'missa'),
  ('e377b5c6-bfa7-56ee-9404-33bef75a3db9'::uuid, 'missa'),
  ('e477dcfa-cd9d-598e-8726-4bf327b1acca'::uuid, 'missa'),
  ('e4be68cd-69e4-55c6-bfae-9cc0b8b9bb09'::uuid, 'missa'),
  ('e4c61273-ae1f-55f0-8895-c42049282992'::uuid, 'missa'),
  ('e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa'),
  ('e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa'),
  ('e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa'),
  ('e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa'),
  ('e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa'),
  ('ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa'),
  ('eac44832-2354-54d1-955f-2c8c789ee42d'::uuid, 'missa'),
  ('eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'confissao'),
  ('eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa'),
  ('ebf4e534-aa47-58e3-bf79-3aaf233924e9'::uuid, 'missa'),
  ('ec6c077c-aa31-567c-93c8-df8e6e8ab636'::uuid, 'missa'),
  ('eca87ff1-2f61-5184-88e2-235653141d00'::uuid, 'missa'),
  ('eccdaa70-6d82-5247-8bf1-b4712f768b65'::uuid, 'missa'),
  ('ecf212a0-cafb-5cfe-bde9-44c3e653fc95'::uuid, 'missa'),
  ('ed72df49-283e-5bac-86bc-2e92f299f866'::uuid, 'missa'),
  ('ede1a8f3-6a14-505d-b391-01208948c13c'::uuid, 'missa'),
  ('edf97cbc-8bc2-593c-af07-40b757d93460'::uuid, 'missa'),
  ('eea3d42a-94b5-5929-944d-59bc317364af'::uuid, 'missa'),
  ('ef4891c6-ed39-530d-a4cd-5f1cf6967cba'::uuid, 'missa'),
  ('f05d6ee0-2996-59ec-aa8a-29251ef591ba'::uuid, 'missa'),
  ('f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa'),
  ('f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa'),
  ('f280dcb0-4ff5-5df5-ac27-dcf9b2a47228'::uuid, 'missa'),
  ('f2c8432c-3e3c-5eea-8394-80ce513e0dc1'::uuid, 'missa'),
  ('f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa'),
  ('f327e5a8-dbaf-5530-a92f-887818ce87fa'::uuid, 'missa'),
  ('f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa'),
  ('f342f2a3-5278-511c-9c53-440fc4c54ea6'::uuid, 'missa'),
  ('f3cc3796-c949-547b-9b36-32a1a95ed35c'::uuid, 'missa'),
  ('f4bf156a-dc0d-5bc1-8484-c0da37717511'::uuid, 'missa'),
  ('f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b'::uuid, 'missa'),
  ('f5df4c51-1a55-5a3a-a78e-6a983df7fc3f'::uuid, 'missa'),
  ('f7262858-1801-5b28-9491-c8c93518aa77'::uuid, 'missa'),
  ('f73d751b-025c-518f-b9d8-70bf3586e640'::uuid, 'missa'),
  ('f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa'),
  ('f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b'::uuid, 'missa'),
  ('faca2d7c-a29a-5391-9430-d64df7dd1cbd'::uuid, 'missa'),
  ('fb5336f4-b216-5208-9a1b-8a33c8263ce2'::uuid, 'missa'),
  ('fb5b2c37-0526-539b-923a-e92e58348618'::uuid, 'missa'),
  ('fb91e90b-b33d-54b8-871b-f6638fe91f6b'::uuid, 'missa'),
  ('fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'confissao'),
  ('fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa'),
  ('fcf44e50-a20c-5125-80db-0ebf4c2597fd'::uuid, 'missa'),
  ('fd7e5b67-332b-5b7d-aa6e-7d9b1e823d75'::uuid, 'missa'),
  ('fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'adoracao'),
  ('fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'confissao'),
  ('fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'missa'),
  ('fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa'),
  ('ffe5a3a6-7b1d-55a7-84d0-d0be8639355a'::uuid, 'missa')
);
insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
select v.* from (values
  ('39dac716-bd96-51a7-bec2-ad94d4c03c44'::uuid, '00b2a51b-a4da-53e5-94a8-8a00d43bee8f'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('a6e01c7b-a540-5620-a6b3-27d1efefcd1e'::uuid, '00b2a51b-a4da-53e5-94a8-8a00d43bee8f'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('87c37730-9890-55cd-a8b0-cb56cf3fc6ab'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('4b75a061-3cb2-581b-a4c2-e9c84d13e427'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('c89dbfb3-a3b8-5624-ae57-f75c0b72403c'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('211d3501-42c8-5c83-b21b-bff8cbadfbbd'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('279d555f-ead3-5d0d-b346-c86fccf08aba'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('2e3a8278-b323-505c-b6cc-957193f00989'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('4b7e67e7-8e56-5f81-bb9b-9339232fa04c'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('68607b00-35eb-5d0b-bb2e-f2c4dd66f218'::uuid, '0154e5dc-fb39-5b0d-a4b4-10541669fe7d'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('5f70e394-c349-57c4-8f2f-0054323e5f08'::uuid, '01a08411-c308-5a08-b33d-07c353fe931f'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('ca03feda-f5ff-5b29-8265-af188490d3be'::uuid, '01a08411-c308-5a08-b33d-07c353fe931f'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('943acfde-c3b2-5b51-8f6f-2a70fae2036d'::uuid, '01bf2352-7617-504f-afc7-d8682ba86911'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('ea5f1eee-930d-50a1-bc85-5316b66205f2'::uuid, '01bf2352-7617-504f-afc7-d8682ba86911'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('19f00952-9a7b-55a3-aae2-0010a14fb27d'::uuid, '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('2d223502-500e-5f32-8a10-b0396a6daf9b'::uuid, '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('80e1c84a-1fd1-5bfc-9943-dd87611c71a8'::uuid, '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('922fd647-c34e-5867-bccd-70e749664d40'::uuid, '025b6f05-8ce8-5db4-9a4a-ed6ec09c5b02'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('830fee47-80e5-56bd-8a69-356492f5c503'::uuid, '02c372e8-65b9-5dab-b82d-c3481a47ce3f'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('62d26507-cdf7-5400-a705-6f62dcc3ff39'::uuid, '035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('c4c58ace-13f9-5c98-8796-e0c2fe467160'::uuid, '035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('154c1f99-85cb-523b-89b9-776bc47af416'::uuid, '035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('ea05d1e9-0f4d-5896-aaf5-987eb619fe71'::uuid, '035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('0b797a87-2dc8-5303-904d-e47502d20aa9'::uuid, '035302d1-a888-5083-935f-c2537b67e3b4'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('2f27260e-4fd6-595f-a84a-b8775dcdb298'::uuid, '03631606-1cc5-5c2f-a22f-9c68ed3d030c'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('c8145d09-6a5e-558a-b7df-751abf19b184'::uuid, '03652466-9666-5d08-8e5a-bd31d66a138e'::uuid, 'missa', 3, null::smallint[], '19:30'::time, ''),
  ('be9ef7b1-405c-531c-b3ca-31c2740cbb4c'::uuid, '03652466-9666-5d08-8e5a-bd31d66a138e'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('415b046e-e6bb-51a7-a1b1-ce61a584db76'::uuid, '03652466-9666-5d08-8e5a-bd31d66a138e'::uuid, 'missa', 5, null::smallint[], '19:30'::time, ''),
  ('87d808cb-33fe-58a9-a3cd-16b24c8e52c0'::uuid, '03652466-9666-5d08-8e5a-bd31d66a138e'::uuid, 'missa', 0, '{6}'::smallint[], '19:00'::time, 'Missa devocional a nossa senhora do livramento'),
  ('1f0f62cd-070d-5970-8899-e39d07a76e19'::uuid, '040c8c87-a907-5529-8d33-de1f77c6e0dc'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('ac60970e-825e-5aa3-9dd8-73ce94c8b7a7'::uuid, '05a0069e-adfd-5bbc-b3f0-2946d14d1aae'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('acc69825-fe07-5388-8f37-67416a53e425'::uuid, '069c251e-d007-5efe-8d8c-a52adedd5853'::uuid, 'missa', 6, '{2,4}'::smallint[], '09:00'::time, ''),
  ('b2b6838e-ad71-54c2-b628-7859e5730b58'::uuid, '07009e36-7bd2-5105-b37a-2ed3b39456ad'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('56e8a041-b3a0-5658-af9c-247242388b02'::uuid, '07009e36-7bd2-5105-b37a-2ed3b39456ad'::uuid, 'missa', 3, null::smallint[], '06:30'::time, ''),
  ('405df3f3-7f10-5a1e-8adb-4b0d3d168b9c'::uuid, '07009e36-7bd2-5105-b37a-2ed3b39456ad'::uuid, 'missa', 5, null::smallint[], '06:30'::time, ''),
  ('74050d2c-172c-52ee-bf99-0e3ed6aa6fe7'::uuid, '07141c5a-ab97-52fb-a309-92dd489ede82'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('0a0fc69d-bbc0-578a-90d6-1aa97c6adbed'::uuid, '07141c5a-ab97-52fb-a309-92dd489ede82'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('4fc5fc52-71d4-5994-a522-364c68f3b45c'::uuid, '07141c5a-ab97-52fb-a309-92dd489ede82'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('d4815364-6933-56a1-8628-e5e4678b737a'::uuid, '07141c5a-ab97-52fb-a309-92dd489ede82'::uuid, 'missa', 5, '{1}'::smallint[], '18:00'::time, ''),
  ('f12c3233-b4c3-589b-b560-df2e3b930445'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('be6487d7-c9b1-5d83-a0c6-22e13a20b641'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('139bea4b-955b-5b59-8104-f4a42caff4a4'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('da21ebf3-e3a0-5de5-aa6d-8e97234a2d2d'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('f9c2e7b6-0686-56fd-a2a9-9a116d3bcda2'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('4b90cef3-7853-5f4c-aabf-9c04090d2694'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('d7970fe8-5d50-584f-b302-859949d19cf0'::uuid, '07a5bb3d-a8d2-5ca8-af5b-ed5ee9977752'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('ba15092e-d35d-5a8b-8d36-50502e4d5e60'::uuid, '07a70d47-ccb8-56c4-9cdb-f28a28ad67b9'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('526597af-5d39-57a5-afd5-ad58eff0ff3e'::uuid, '0883702a-3cea-5163-a848-4d9d7dd408ba'::uuid, 'missa', 3, null::smallint[], '17:30'::time, 'Missa da Providência'),
  ('7bd8842a-a4c9-589e-8fa0-1ec35d923d32'::uuid, '093d972b-4f2c-541b-805c-208e30205c4e'::uuid, 'missa', 6, null::smallint[], '16:30'::time, ''),
  ('083bb1b0-095e-5f60-822b-2735f23c6349'::uuid, '0957c6de-f172-5e16-b15a-d865d7448645'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('8fd70838-48d6-5ded-822c-4f3df6fcc90b'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('887c6370-0da0-5d5a-b69e-c8d92fabaf0c'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('f9be4cb1-0484-5292-be4c-0b3c9c422983'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('c1952f6e-754b-5faa-9fcd-b1fe10e09466'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('c189f1c8-79cb-504b-a891-c635185c9f4f'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('68f91fd1-dc55-5340-8f09-152ef29b5cdf'::uuid, '09c403c5-bc31-51e3-b760-8af5e9449ab6'::uuid, 'missa', 6, '{3}'::smallint[], '09:00'::time, 'Missa das crianças'),
  ('b2557f75-21d1-56c1-b501-98ad2754dde4'::uuid, '0a5c5a9d-a59f-5244-b0da-6bfc5c9b47c8'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('58df7076-ec03-510c-b462-f793eda94628'::uuid, '0ac0e81b-0c6d-5487-9653-f9454d5f1ef1'::uuid, 'missa', 5, null::smallint[], '19:30'::time, ''),
  ('81f7aa4b-16e8-54e4-ac0f-083da4605235'::uuid, '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'::uuid, 'missa', 3, null::smallint[], '19:30'::time, 'Missa do pão de Santo Antônio'),
  ('7124b51a-7c19-5ccf-910c-ea2456e7224a'::uuid, '0b46743d-afe6-5287-bb47-e5cc1ddbabcf'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('8f146578-85fd-5208-a71c-426423ee089e'::uuid, '0b75e4a2-a234-5810-b941-8868d95c65d9'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('546c2fbc-7fee-56ad-a067-f1bea69645b4'::uuid, '0b75e4a2-a234-5810-b941-8868d95c65d9'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('cf5b7e2f-28be-5754-8b86-ca6960c8911d'::uuid, '0b75e4a2-a234-5810-b941-8868d95c65d9'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('3f0644a4-3cad-5462-9749-6f80bed4457e'::uuid, '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('1987a262-8d52-5087-bd9a-acddc5dc32db'::uuid, '0cf4a087-0296-5ee9-b9ae-688c0e4686c7'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('54c8456b-336c-512d-a848-5e7b05939fa2'::uuid, '0e094172-1f9d-5308-abb6-8cd7d680e684'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('ac16e70e-334c-59ed-9c19-74ff243d5655'::uuid, '0e094172-1f9d-5308-abb6-8cd7d680e684'::uuid, 'missa', 5, '{3}'::smallint[], '19:00'::time, 'Missa da juventude'),
  ('059cf707-a7fd-5623-a0a7-d291ab741186'::uuid, '0e094172-1f9d-5308-abb6-8cd7d680e684'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('ad03c628-55ba-5a15-8dcd-b968fac8ece1'::uuid, '0ecc72a9-6680-5041-b619-b89a0117324f'::uuid, 'missa', 1, null::smallint[], '19:30'::time, ''),
  ('b5e795af-5edc-5df7-a129-8b71f6694f9e'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('c8f439d0-31bd-5d25-998b-fb79739b6fd6'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 6, null::smallint[], '09:00'::time, ''),
  ('4fca14b1-441c-58e8-b6c0-46f43933f122'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('2ae5589c-21cc-518b-a4b4-6d460b893036'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('e4caf7d5-52c9-58d3-a940-dac40b38bc04'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('d8b0166d-01c9-57ea-8462-46fd11605bd7'::uuid, '0f4bcffe-6ec2-5ce1-a985-6a7afb9e270e'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('31417ed3-b4cd-5a1b-928f-1cc9abf43fee'::uuid, '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('870aeff6-6310-5743-ba0f-e0f597211370'::uuid, '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('b6bdd728-6e92-5d24-9b3a-dbd218f09cd7'::uuid, '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'::uuid, 'missa', 4, '{1,3}'::smallint[], '19:00'::time, ''),
  ('c39d820f-2066-5925-8612-c630fa4227ee'::uuid, '0f82e611-7ccd-5ef6-b1d9-1016103ed3ab'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, 'Missa votiva ao Sagrado Coração'),
  ('a361a6f7-27bd-5ab2-83db-b5340fa4b925'::uuid, '1018a809-adbe-5cbe-88a7-2c67673811e7'::uuid, 'missa', 6, '{3}'::smallint[], '19:00'::time, ''),
  ('c57b8e4e-f1a7-5e38-b7fb-dc226448bb9e'::uuid, '12b08bbe-968c-56b5-8e6e-60b39f86a5f2'::uuid, 'missa', 1, '{2,4}'::smallint[], '19:00'::time, ''),
  ('24491a0d-4098-5665-98ea-cda1c6274062'::uuid, '12c4a476-a36d-5d22-9ac8-8f486581d028'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('e291b118-5fca-5ec3-9c96-97e99527669b'::uuid, '12c4a476-a36d-5d22-9ac8-8f486581d028'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('cebfe9f4-e2d7-53e3-abc4-c74ddb120aeb'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 1, null::smallint[], '18:00'::time, ''),
  ('c9cd413a-0169-59b6-948d-cbc4853b6ef3'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('a6d6bdc2-3fba-5a29-bf76-12a78ca484dc'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('1359bb97-b0f8-552a-b735-75f7ecfed5ed'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('f3e7007f-ac42-5018-a246-f015f2089bbd'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('27f38919-6bab-5d55-8f61-d1cee53ef34e'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('0374b037-9226-5def-bc89-77888ff30534'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('0aad132a-909a-5685-9bb2-9b9ee090c9c2'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('6b973abb-0917-50c3-874e-0f50ec61a2f0'::uuid, '139ef87c-76a0-5dfa-bc31-09e6e06ff07c'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('cec340d2-2666-5c1c-80c9-3f8b1dc75b1c'::uuid, '13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa', 1, null::smallint[], '08:00'::time, ''),
  ('157b01ce-78e4-53ec-a2b4-94c93d808403'::uuid, '13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa', 4, null::smallint[], '08:00'::time, ''),
  ('2451b8c4-4ae8-5a93-9792-9fa33dc1a163'::uuid, '13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa', 5, '{1}'::smallint[], '08:00'::time, ''),
  ('b870a74c-836a-569a-9c0c-26681ad3b262'::uuid, '13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa', 6, '{1}'::smallint[], '16:00'::time, 'Missa das crianças'),
  ('927accb6-5691-50da-a894-41dec596f19f'::uuid, '13fe0e0d-4d35-5188-958f-ebf40e21f324'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('12e43dce-c912-57ab-9913-a0bb5bf31f19'::uuid, '148ddbfe-7c31-5270-ad06-b439395b2336'::uuid, 'missa', 6, '{3}'::smallint[], '19:00'::time, ''),
  ('d05d016d-af89-5f12-b2ef-6f5680a2c9e9'::uuid, '14940a9b-ea07-53c8-b1f7-6169ca811ce2'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('22890cd6-89f6-587e-ba1f-5594f05f0276'::uuid, '15468b7d-7d9e-5d18-906d-de837224f25c'::uuid, 'missa', 0, null::smallint[], '16:30'::time, ''),
  ('b9216cbf-e68f-55c0-8ce0-844c7cc28e99'::uuid, '15468b7d-7d9e-5d18-906d-de837224f25c'::uuid, 'missa', 4, null::smallint[], '19:00'::time, 'Adoração e missa'),
  ('a8545e7e-85e0-509f-8bbd-9a34806abed1'::uuid, '1572c82c-68c6-5ca2-b437-ae6d1be5924f'::uuid, 'missa', 2, '{3}'::smallint[], '19:30'::time, 'Missa dos pescadores'),
  ('c51e1c4c-4492-5184-9ce0-d0a4411dac98'::uuid, '16082691-1821-5484-9f51-f16e936ad3b6'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2db58342-12f6-54dd-9705-023783d7da23'::uuid, '168b0df5-4510-5028-9da1-173b47e36151'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('39baaac9-e2ea-58e9-bdd1-3d2a02a628e9'::uuid, '169b9d22-d338-5296-bb6f-b8b2c5b1be89'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('11071458-6513-5582-b800-02652d5697ef'::uuid, '169b9d22-d338-5296-bb6f-b8b2c5b1be89'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('cad883f2-c35d-5eca-ba55-395edea040ae'::uuid, '16aaede6-e3db-5535-81c3-641a98a20b9d'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('137ef18e-14a9-51db-a0d7-aad0ae89f671'::uuid, '179aa4ce-fe43-545b-8803-d033da9a8abc'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('2152cbcc-96cf-5693-81cc-284ad199e9d0'::uuid, '17bcbd99-dd6c-53fd-8ba4-062a0066509b'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('2073cd1a-c0fb-5b9a-a526-b2c3bb685c92'::uuid, '18955105-ab97-5577-b1a1-c7dea3fa58bd'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('bcd9f5c9-b120-5e36-9700-3d76f9b0be06'::uuid, '18955105-ab97-5577-b1a1-c7dea3fa58bd'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('78a85612-ec3b-521e-b310-63cbca39dc3a'::uuid, '1953de96-4966-545d-9f22-a57d2450e642'::uuid, 'missa', 6, '{1}'::smallint[], '19:00'::time, ''),
  ('1fa9192f-b685-5560-b924-3424fefcf43a'::uuid, '1a5dd32f-3d87-53a5-aa6f-917c250d24f5'::uuid, 'missa', 0, null::smallint[], '16:30'::time, ''),
  ('645fe9b5-0c6e-50e4-a5a5-b0def013b166'::uuid, '1bdb10c6-5af0-529f-a4f1-9d29daba604f'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('5febb131-106c-51ad-9119-ca346ccb7d34'::uuid, '1cda00e5-b816-5fc7-b1d3-ce8844310502'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('283467c9-04f0-52ac-bd96-e59182e84ecb'::uuid, '1cda00e5-b816-5fc7-b1d3-ce8844310502'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c921d7ff-b0a8-5dfe-921d-789f8d3b133d'::uuid, '1cda00e5-b816-5fc7-b1d3-ce8844310502'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('10203688-08f2-5d81-a9c6-14b609a373aa'::uuid, '1d35788f-b7c6-524a-ae4c-2f00c3692e92'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('dad0a678-d579-53a2-86bc-eda9dab514f3'::uuid, '1d35788f-b7c6-524a-ae4c-2f00c3692e92'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('8d379d8a-8c58-51c4-a835-713ddf73ac37'::uuid, '1d35788f-b7c6-524a-ae4c-2f00c3692e92'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('1f63ae60-2767-5901-bc2e-218a204ca1ba'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 2, null::smallint[], '07:00'::time, ''),
  ('ee5919dc-3f99-598c-af77-3090f5159b5f'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 3, null::smallint[], '07:00'::time, ''),
  ('37726317-995a-5fcb-ad79-8d021c0ba273'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('09670ab4-4c4e-506c-8b59-01825e71da1b'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('4c8d5ee4-2f67-57f1-a0dd-f6055e352806'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('a71ad572-1711-547d-bdc2-eb9dfb783dd5'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('fb38983e-990b-5aa1-ba5e-41cef5b514b6'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('6a5cd757-a93c-5263-9c58-ec044ddf57fb'::uuid, '1d925f4d-a039-5a06-9913-f53082bc1d1f'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c0d4efb6-9f0e-5676-b593-ee984a57d755'::uuid, '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('e05ebfbd-b135-5da8-90c7-7f03085dc79a'::uuid, '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('13104bd1-5121-5001-85eb-823abcc7b3aa'::uuid, '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'adoracao', 4, null::smallint[], '15:00'::time, ''),
  ('56cd03b5-28cb-52d7-b805-0cdb92cc337e'::uuid, '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'confissao', 4, null::smallint[], '15:00'::time, ''),
  ('836afa45-1c9b-5159-a556-b801778e5359'::uuid, '1dc72e74-bbd9-509f-b5ba-4ee82a3411cb'::uuid, 'missa', 4, '{6}'::smallint[], '16:30'::time, ''),
  ('d262d76b-dcc2-581e-be62-ef96ba97a420'::uuid, '1e0ef046-3418-5127-aac7-d258fec3360b'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('826e6412-4885-5b8b-8e16-4290d3176665'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('93771178-664c-589c-8a17-5e12b9fb123f'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('66f169d4-4fd5-5a33-9672-b9cf59e9bbe5'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('43b5b750-19ad-5429-82a2-03be7ec8efd4'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('ded4093b-5362-53f6-a189-8ec37309e799'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('3b4e94ea-1d33-5904-b5f8-dda533a7549e'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('99a11b72-61b7-51f6-b3cc-dcb185f7664a'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('1cd3d35b-9123-5c61-bd0f-f502ad8bcbbd'::uuid, '1e35909a-5fbe-4102-af36-6353c9faed20'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('48e25898-613f-571b-ac76-d64e4cbdb329'::uuid, '205f6ee6-8160-5e18-a82f-8e42b1692339'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('c12d7a2e-d87d-53e0-8f11-e1c66a160a03'::uuid, '20d92896-05bb-577e-be26-b6ebe025ec3f'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('72704531-798b-585f-9876-7d37bb4df152'::uuid, '21312229-c1da-5dec-9b85-8710d74d2be3'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('b0e48084-e0f6-59da-8a8b-43a033a95117'::uuid, '21312229-c1da-5dec-9b85-8710d74d2be3'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('743e27a9-2b20-5235-bd26-c50c7cadf283'::uuid, '21312229-c1da-5dec-9b85-8710d74d2be3'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('692eaf0c-ad0f-5aca-9f19-3c6f5e2d14e0'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('e56eafeb-b3b1-5c53-a071-724ddb1cd8c7'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('f40b4093-f58f-5a86-b8ee-795eebac4303'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('a82b4425-e500-5564-8014-8cd7304bcd72'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('b62d9dd3-423b-5b0d-810f-7b910d494be6'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('aff26b96-af6c-5180-890d-4429672cfe0b'::uuid, '22958298-2062-51f2-8de3-9f9a725615b4'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('0605f6ee-99fa-502e-a07a-e219c911012c'::uuid, '22a954ae-d079-55ac-9a85-c575c1564ca1'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('94ad61ae-8181-55a8-92d6-5d597cf824eb'::uuid, '2368e1de-4917-5730-9a73-a889123b2736'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('d38945d5-45c8-5246-b960-8be5343eff53'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('0f4516ab-3a78-5ef0-a62d-87eb599c51ef'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('57f8deea-6a4e-5cd3-91d1-957b201473ee'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('b8134c23-171d-58c7-a36c-f1b6a6e37d3d'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('5e6bf591-2b3b-59cb-8621-72a9b906e150'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('3cd4438f-7f87-51e8-81d1-cb9d7cd19a60'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('2db86da6-27eb-57a6-83e9-05a3c526d9a3'::uuid, '239ed4e6-c778-5628-9263-699043801cdb'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('aaf2651f-c182-5975-ad7a-840f398cb817'::uuid, '2452d2e5-4069-56f7-b2e6-f92755954be6'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('9d65e00c-1d23-598f-a959-280ca10fa341'::uuid, '2452d2e5-4069-56f7-b2e6-f92755954be6'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('cc9e9033-f7a2-5dd5-80d2-3534625e9294'::uuid, '2452d2e5-4069-56f7-b2e6-f92755954be6'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('52b90439-07dd-5ac9-b9eb-a07293d6cef1'::uuid, '2547bf9d-a857-5672-a8f4-74063a193206'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('64975828-ae47-5ca9-8e20-128375677e13'::uuid, '260a7c53-9b9d-556f-b429-1ecfd2da6b34'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('60f4c138-95d3-5a57-aad1-c993ff13717a'::uuid, '260a7c53-9b9d-556f-b429-1ecfd2da6b34'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('7ba70c6d-b1c9-55b1-8c64-61d18333f592'::uuid, '260a7c53-9b9d-556f-b429-1ecfd2da6b34'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, 'Missa votiva ao Sagrado Coração de Jesus'),
  ('91f8d6b0-5ad6-5e4f-8c86-f25f528a60d0'::uuid, '2646be41-25ae-5df5-96dc-9fa2b8e1add2'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('231a976c-2baa-58c1-b4fb-564b14d5de23'::uuid, '2646be41-25ae-5df5-96dc-9fa2b8e1add2'::uuid, 'missa', 6, null::smallint[], '16:30'::time, ''),
  ('60d1c694-5f22-5ac2-b5c8-67cf1be365e8'::uuid, '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('c0bd9d92-c669-515c-b089-978c1e4ff776'::uuid, '2687244b-bd42-59fa-b5c9-3b15fa0bd8b2'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('454637e6-4229-57d7-8c03-0c7f39970447'::uuid, '268c1c3c-6d6e-5bc2-bf81-d8f4b5989e3c'::uuid, 'adoracao', 4, null::smallint[], '19:00'::time, ''),
  ('14782ef5-4ab0-5840-ab36-6c59fe3980f0'::uuid, '28c74d4d-d8f4-534e-bda1-49dd8d6dc51c'::uuid, 'missa', 0, '{3}'::smallint[], '16:30'::time, ''),
  ('4730a2b8-9d51-5b34-9a02-7683b1e6abed'::uuid, '28f4e0a9-a009-5b7b-a495-d36cb0b53ccb'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('4074cf0e-56df-54c9-94bf-a7d0df2d17e0'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 1, null::smallint[], '06:00'::time, ''),
  ('23b4dea7-0cb4-5ae7-bba8-5db7cdb136b5'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 2, null::smallint[], '06:00'::time, ''),
  ('5d73304f-fd64-5d40-910f-252d9e056de8'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 3, null::smallint[], '06:00'::time, ''),
  ('db3f398e-079d-5927-a4a5-569198ad7b9b'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 4, null::smallint[], '06:00'::time, ''),
  ('fb38ee56-8575-59e3-90ec-1f9e5d3ff799'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 5, null::smallint[], '06:00'::time, ''),
  ('07e73266-d345-55b1-94ac-5abb09238845'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('44ce8030-0798-545a-8056-bd1979242104'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('d19ba792-700c-5437-850c-c23f4f005b97'::uuid, '29882e93-936f-50f4-b43c-0c849f4895d1'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('45992202-df99-5ac7-a813-215de7327a6c'::uuid, '29bf81d0-2d1c-5748-8e3a-ef1e53693cd1'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('b77f4f2a-6894-5e1f-9d61-3ac3d2b76118'::uuid, '29e65406-ce79-523d-81b1-d36348fa709e'::uuid, 'missa', 0, null::smallint[], '16:30'::time, ''),
  ('b39e283a-0a3b-5085-b884-b937d23243ef'::uuid, '29e65406-ce79-523d-81b1-d36348fa709e'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('d0fb80d4-f3d1-5abb-a4aa-055e467a7e60'::uuid, '29e65406-ce79-523d-81b1-d36348fa709e'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('32797eb7-28fc-5fb6-83ad-7ecb2ff3eb48'::uuid, '2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('1840d24e-7c8b-5c44-8cca-dea257487dff'::uuid, '2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('f0d7cdf3-3e99-526c-ab88-bdf42bd90a22'::uuid, '2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'adoracao', 4, null::smallint[], '16:00'::time, ''),
  ('ea4c20a8-6f1c-5faa-bf6a-1093278c1793'::uuid, '2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('d9754b54-48cc-5f52-ae9e-b88514458f61'::uuid, '2a68bc8e-859e-5c29-870f-eb37dab871ca'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('d07ede73-6ec6-5a50-93d6-6a768eea751e'::uuid, '2ba12d23-7b89-5370-869e-e99c8069b62f'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('fa684e01-0ade-5976-9758-3af8d073f721'::uuid, '2bafcd6a-494a-5938-b11a-b06c11e38cd4'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('ffe9aaa1-0d3c-5168-b14c-107d4d0aa904'::uuid, '2bb111c4-2fa3-58b3-9529-36cd4fc35c7c'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('94f6d036-7876-5ebb-86b9-0a0b55aafbeb'::uuid, '2c4136b3-f280-593c-ac42-f75081db0fc2'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('13a62c48-2526-5973-a146-ec91416a90be'::uuid, '2c4136b3-f280-593c-ac42-f75081db0fc2'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('4277b950-f8a0-59ce-a047-6231d4d040e2'::uuid, '2c517e66-a056-5cae-9cae-d08411877599'::uuid, 'missa', 4, null::smallint[], '18:30'::time, ''),
  ('27e9cb71-ce8d-5a68-9b33-2b220a8e6b7b'::uuid, '2c517e66-a056-5cae-9cae-d08411877599'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e56dcdb2-e110-52e7-92dc-c04ef29f299f'::uuid, '2c539d25-f854-5bcb-a358-b3727770077c'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('1a58f424-d36b-5798-97e1-813b6bdcfc14'::uuid, '2c539d25-f854-5bcb-a358-b3727770077c'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('ef8d9433-3705-5c3d-a963-aa227fb1707a'::uuid, '2c539d25-f854-5bcb-a358-b3727770077c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('73ccfa9d-e8b0-5243-9f45-d39002899cc1'::uuid, '2c539d25-f854-5bcb-a358-b3727770077c'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('bb96e7fc-adb7-59cd-83fe-45336721f093'::uuid, '2cb37765-12c5-529d-a0b7-51a4020f15a0'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('8275c99f-1750-516b-aff8-95a76d1dde4b'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 2, null::smallint[], '06:00'::time, ''),
  ('0495b4d9-51cc-5b6b-bdd0-91c382613cf2'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('9fd7e058-d54f-5503-b78e-45d1c082e878'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 3, null::smallint[], '06:00'::time, ''),
  ('0b6cd247-3b62-5fdc-bcd2-de4ef1813827'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('f69053ea-852f-55f3-adc0-a8fb4a27e5c4'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 4, null::smallint[], '06:00'::time, ''),
  ('048c8f50-9aa7-5273-a1eb-4b67c0d55c55'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('55de2b44-8985-5e50-9237-b2424950f646'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 5, null::smallint[], '06:00'::time, ''),
  ('1dfb2f09-5bcd-5136-ba23-fbffad4ac025'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('518c47d8-16cd-564e-b0ae-951adc6da8a5'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('e962643b-49c9-567d-9d29-edb30f4b61fc'::uuid, '2d07182f-6672-5619-9f87-78c1f40c5ce2'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('cf65bb45-01c2-5e3e-8bdc-a3cd34253e74'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('3ccc8852-52db-5092-9871-8e56adeeca94'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('3a7c1022-2611-538d-84c4-e7ba04cb16b7'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('560d9577-5462-5b9e-81ad-d9b5032ad20a'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('fb73fd27-3e9c-51c2-aba8-3f5aaf3fd26b'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 6, null::smallint[], '10:00'::time, ''),
  ('fff9d9fa-7236-5aab-8856-f7e38d64b722'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('5df07ce2-9345-5188-8741-b2dc00ed07c9'::uuid, '2d36241f-5c79-531c-bcdc-c8b9e0668232'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('12ac1058-d351-57b5-b522-49b42f82ca34'::uuid, '2d42ae8c-c76a-50c9-a4a9-927e780082fa'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('4d9c1f89-ec87-5932-b404-92fb9c52a8f7'::uuid, '2d42ae8c-c76a-50c9-a4a9-927e780082fa'::uuid, 'missa', 4, null::smallint[], '16:30'::time, 'Missa pelas famílias do Movimento das Capelinhas'),
  ('1a72a023-1b91-524a-bb63-83f488a8c0df'::uuid, '2d52ea1a-fd98-5158-9388-9b86399fb75d'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('92942df4-a764-54a9-a4a7-29828dcfc8f2'::uuid, '2d52ea1a-fd98-5158-9388-9b86399fb75d'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('1647a53b-564a-5d3e-b31c-292416e609e2'::uuid, '2d52ea1a-fd98-5158-9388-9b86399fb75d'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('3ae555b3-f6f4-5717-8f1d-c6eaf62bd78e'::uuid, '2d52ea1a-fd98-5158-9388-9b86399fb75d'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('ed904a16-e331-5f1b-9317-32ca27737196'::uuid, '2d9d7031-1583-5a1f-9772-18464e933d77'::uuid, 'missa', 4, null::smallint[], '07:30'::time, ''),
  ('b11db936-2288-512e-bfb7-64714fdefa06'::uuid, '2d9d7031-1583-5a1f-9772-18464e933d77'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('17f85c4b-75d7-58f1-b462-b26f1298fab0'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 1, null::smallint[], '07:30'::time, ''),
  ('45d8a4b5-589c-540a-9e4d-b3890ec1a769'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 1, null::smallint[], '17:30'::time, ''),
  ('70933dde-030a-59e2-aa4d-9be18f3b41c0'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 2, null::smallint[], '07:30'::time, ''),
  ('a8cbef84-e0e2-57dd-b634-c5dcd1c217d8'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('4afb53a5-acd7-5ca2-a3cd-bb39c3e1458f'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 3, null::smallint[], '07:30'::time, ''),
  ('b541453a-5e2e-5f37-9105-9eb860172f86'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('3afdc7a2-6c74-5cb0-a241-6aa923a79d29'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 4, null::smallint[], '07:30'::time, ''),
  ('85b222e8-22d4-5782-a5fb-2f1adbfd7e76'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('9a20cdac-ee3f-546d-bbf8-df5ef3d53095'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 5, null::smallint[], '07:30'::time, ''),
  ('345b29db-8592-52af-85de-0919c1eff664'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('503c48c8-08b0-5e0b-ae76-4fab46019529'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 6, null::smallint[], '07:30'::time, ''),
  ('959a48d7-72f9-5dee-8ed0-eb540b9cdd88'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('769cbb34-2071-590e-b475-e1cf99082aab'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('0cb7eb69-42d5-5c75-a48d-c514a1756ddd'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('b380baea-12ee-5aae-952e-6c9842241de7'::uuid, '2e592cb3-4309-5997-8ad6-d262eb5db22d'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('6c095515-59b9-5ae3-a528-2e3c8c146a61'::uuid, '2eb6fdf1-bfb2-5a08-a149-edee6e648328'::uuid, 'missa', 4, null::smallint[], '18:30'::time, ''),
  ('8479f6f9-c05f-540d-a658-dfb666d3ace9'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('795be7bc-a875-5bed-be35-52178db84518'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('e8b1b2af-7711-5d8f-8e3e-5cd2dec2a582'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('30b5f652-f6d8-53e8-a39d-04e6b8f54fa0'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('6859476e-adc1-5710-9d78-d8791af34555'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'adoracao', 4, null::smallint[], '16:00'::time, ''),
  ('b37f159e-ca8f-5e2e-afd8-230b65c840be'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 4, null::smallint[], '17:15'::time, ''),
  ('6f1b9895-114a-56f4-8ecd-330ad91a4d21'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('2a7ce96f-a354-5317-8f4c-12ce0f7efedd'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 6, '{2}'::smallint[], '09:00'::time, 'Missa das crianças'),
  ('86541810-ca1e-59ba-af3d-c92f79913baa'::uuid, '2ef7a662-c3d1-5367-a719-836ce0158cc8'::uuid, 'missa', 6, null::smallint[], '16:00'::time, 'Missa pelos fiéis defuntos'),
  ('f7e2df52-131f-5a1c-b2b3-b09398917bfb'::uuid, '2ef84f25-daf3-588a-a5de-9bfb6a619bf0'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('89612874-62a6-5b23-affa-88316d496d21'::uuid, '2fefa625-ddf1-5b70-b751-36937a1d98fe'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('3685e7ff-d899-51b0-b436-dc901da3842f'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('ee015d3a-d413-5282-978b-2c9f05a2ac37'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('250beea1-cc57-5459-8d02-9b55d4b7c57f'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 2, null::smallint[], '08:00'::time, ''),
  ('7da18d75-3886-5037-a55a-1200d58fdb97'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 3, null::smallint[], '08:00'::time, ''),
  ('cf3b9f2c-1156-546d-9c90-3a867c95aa03'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 5, null::smallint[], '08:00'::time, ''),
  ('5057bdc3-47a0-548b-b450-d7045dc7ce3c'::uuid, '3048a577-4134-5647-8dd4-d2db3a52e670'::uuid, 'missa', 6, null::smallint[], '08:00'::time, ''),
  ('6afd3c2e-890f-52df-9014-4260ec188a7f'::uuid, '3119d852-ff55-5929-9c9c-579a87696e0f'::uuid, 'missa', 0, '{3}'::smallint[], '17:00'::time, ''),
  ('eaf3a771-3553-5771-94e6-28006ddd942d'::uuid, '315a53cc-a4ee-58b8-a44d-503a98505b93'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('589445c8-4810-5e43-ae33-a730a1ec9e14'::uuid, '319eafb6-fccb-5ec3-88ef-d27c211d6697'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('4bffbedf-b427-5350-99ea-0178ff236737'::uuid, '31fcf1d1-0aba-590f-9fdb-746eb4031b7d'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('ba0439fb-84df-5f10-ab24-3e8cf5e103f3'::uuid, '320124a0-b1de-5737-b5cb-0a1194434846'::uuid, 'missa', 6, '{2}'::smallint[], '19:30'::time, ''),
  ('763e837d-b25c-55b1-8200-4e2a8d72a2f3'::uuid, '32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa', 0, null::smallint[], '09:00'::time, 'Missa da criança'),
  ('b0114a40-9a98-5d64-898f-758e6f703498'::uuid, '32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('41bffe1d-20ea-5bc4-9f52-e21c72a756f5'::uuid, '32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa', 3, null::smallint[], '19:00'::time, 'Missa em honra a Nossa Senhora do Perpétuo Socorro'),
  ('84e6b2fb-a6c6-5f05-b974-3bb21ea7db36'::uuid, '32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa', 4, null::smallint[], '07:00'::time, ''),
  ('06bd5b63-970d-5d3e-bd92-0a4cb97b18c4'::uuid, '32cf94c2-b824-58ed-98db-fde298700993'::uuid, 'missa', 6, null::smallint[], '17:00'::time, 'Missa pelos falecidos'),
  ('ca284d0f-e224-5a5a-af8c-bce90f45d034'::uuid, '333bc8a4-3834-584f-a7e2-17a2bdbaafa0'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('e2d98dac-18d3-5f9f-9607-71b970a4ba26'::uuid, '333bc8a4-3834-584f-a7e2-17a2bdbaafa0'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('352bcb0a-787a-589f-b22d-a62a9015cbb7'::uuid, '33f10954-11c7-5a7c-a470-b0189601fc78'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('8ede45f0-2d68-56cb-a9fd-41981421c2e1'::uuid, '37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('fba10df9-494f-5bda-81f0-8ea304245e76'::uuid, '37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7324d176-4582-5083-9426-4ac7ca4c0fe9'::uuid, '37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('7191235f-6cdf-52d5-b54e-4182ec56ebf3'::uuid, '37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('a040ae99-b010-590f-95f7-f8254005a152'::uuid, '37604de3-7f90-57bd-8060-be9ee91183a8'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('38d56fa0-ad66-533c-8138-62d0dac2bb07'::uuid, '38069ce3-12ea-5d72-b825-29c278c5ae49'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('6bfd0106-cba8-56ed-b219-3e836fed8d8b'::uuid, '38a92e98-2912-5985-9daa-15405f51ad0b'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('1ec47764-e642-512f-9299-3223d682cc43'::uuid, '38a92e98-2912-5985-9daa-15405f51ad0b'::uuid, 'missa', 6, null::smallint[], '08:30'::time, ''),
  ('87e61399-1ebc-5bfa-addc-1dc34890d2f7'::uuid, '38a92e98-2912-5985-9daa-15405f51ad0b'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('e526887d-7b29-5813-978f-6ef1d35ef464'::uuid, '38a92e98-2912-5985-9daa-15405f51ad0b'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('e2ad16d1-113f-5a48-9380-6578f86f3db1'::uuid, '399c4d41-ef1e-57cb-ac33-7dad4a9c6736'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('741ae1e4-6a97-545f-a041-a2e885ee831f'::uuid, '399c4d41-ef1e-57cb-ac33-7dad4a9c6736'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('0db3e0dd-9f56-50ae-9de4-0411f6852be0'::uuid, '39f883b7-536d-5929-9bbd-10f9474b4ce3'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('917e5318-a185-50ba-9734-fffcd012dd3d'::uuid, '3a14e5ce-13fe-5f1c-ade6-11b3214d5cac'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('af451120-f6c5-5a3b-a258-782a7730bd24'::uuid, '3a5826fb-491e-5a86-a2fb-28ebf45ca8db'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('744457e3-8237-5e14-881c-d883b94e8c03'::uuid, '3b0d4323-7e57-5eac-a3aa-baafb4de5621'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('c5325e0d-a821-5747-819c-6c3879a73b54'::uuid, '3b0d4323-7e57-5eac-a3aa-baafb4de5621'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7eefdf02-0a07-5d78-8998-972dbfcd7a02'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 1, null::smallint[], '06:30'::time, ''),
  ('2a94fe82-98a0-58f9-af81-302b0fb3e717'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 1, null::smallint[], '18:00'::time, ''),
  ('647e39ec-703b-5142-8fb5-d9e97867a477'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 6, null::smallint[], '06:30'::time, ''),
  ('3619217b-301d-58a1-a1a2-63c859efaaf5'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('27f44eb9-cc90-5180-8a68-14e3f492d607'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 2, null::smallint[], '06:30'::time, ''),
  ('2d524381-560d-5aec-bc15-1285f2e9c44f'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 2, null::smallint[], '11:30'::time, ''),
  ('a1977349-ee65-59af-8978-851482c82016'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('eed346f6-5dd6-555f-ab6b-393a3d3b7aa5'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 3, null::smallint[], '06:30'::time, ''),
  ('d0663abb-6f4f-5e66-a283-ffd9780fe4e1'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 3, null::smallint[], '11:30'::time, ''),
  ('de5ea11e-92ca-5d48-aa5b-b556c729a4ee'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('cb855d2a-4315-5f94-94ad-b0a2f2b02d3d'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 4, null::smallint[], '06:30'::time, ''),
  ('a271480e-8fab-50db-b733-017f2425182d'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 4, null::smallint[], '11:30'::time, ''),
  ('f0031693-79d3-5bd6-9826-2f2058843687'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('6c0fa08e-29c2-5086-ae75-2cc08a637a03'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 5, null::smallint[], '06:30'::time, ''),
  ('82ba532b-a22d-54dc-baee-a45ba8998d80'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 5, null::smallint[], '11:30'::time, ''),
  ('49e89bca-6f7a-5814-9194-d34f9eaab108'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('cc962614-2c29-50b2-b767-c77050730ffa'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('01c9364a-9ec4-534e-a970-ea2990e96df3'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('6b8fc5fb-c4ba-53fa-88af-08a05fd23070'::uuid, '3b0f845a-5443-5232-a664-23a2ce75536f'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('3921e905-9722-5103-b566-1b5f90df7468'::uuid, '3b8770dd-853a-5a52-b36d-c7b7075cbc96'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('219c905a-55e3-5410-8fea-d0ccad8166da'::uuid, '3b8c69e8-3e3d-5b59-8dc3-9ea288a4185c'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('93228d94-e5fe-564d-809f-6ab23ee9ab98'::uuid, '3b8c69e8-3e3d-5b59-8dc3-9ea288a4185c'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('63ce8858-50fe-5137-91ed-fd0c9ed0059d'::uuid, '3bdb0053-d06b-596a-b021-40df6f400df7'::uuid, 'missa', 0, null::smallint[], '17:00'::time, 'Nem sempre; confirmar com a paróquia'),
  ('4341d6d4-730d-5bc9-8a83-440240552d0b'::uuid, '3bdb0053-d06b-596a-b021-40df6f400df7'::uuid, 'missa', 6, null::smallint[], '17:00'::time, 'Nem sempre; confirmar com a paróquia'),
  ('a10390f7-e66d-5c09-a986-bb8fef2b5ea3'::uuid, '3c6e0f17-4b08-5453-96fc-9034fcf23977'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('86357fc2-9e14-5213-a758-3b3b22be3348'::uuid, '3c6e0f17-4b08-5453-96fc-9034fcf23977'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('09e161b1-077a-58a7-b09f-d1a74a872bb6'::uuid, '3c6e0f17-4b08-5453-96fc-9034fcf23977'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('d9fb02a0-6644-50b2-b377-0fd55f8a9553'::uuid, '3c6e0f17-4b08-5453-96fc-9034fcf23977'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('1436c893-6349-546f-ab96-0abc7cc39116'::uuid, '3d80b5be-9163-584d-9f79-6dd4870b9e9c'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('823f7558-4944-540c-8b8c-187c7f3cc7da'::uuid, '3d8a1a77-4778-59ce-a343-55755a2b41e6'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('bf4d49ee-01cd-5bb3-bc5d-de8f0b9fa00d'::uuid, '3d8a1a77-4778-59ce-a343-55755a2b41e6'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('c1059b8e-2240-532c-84ef-26a8b2684fd4'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('c5299d64-81fc-5f3b-a2fd-c6cde92caeb8'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('13c6fb5d-2cb5-5e0b-bf00-db2de83c5317'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('7ef4ad2a-f049-51ff-9e6e-baa2d426fbb0'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('168927bd-3594-5e63-a31b-aed1f1d0a49a'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('b8720764-eab1-55ef-a410-d5f567456070'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('ecb7f74d-d180-5fda-9425-d2d0335b9718'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('17134d04-f98c-5246-bdde-d6e5ba68c665'::uuid, '3d9b1321-aa01-5b96-84fb-c07299279e51'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('51fd211a-fa03-5295-915e-565bd4a0b180'::uuid, '3dccbe6a-93a1-5ace-a30c-e6e43d79cded'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('09c49e02-4796-5756-8a08-3af4e02faddb'::uuid, '3ec4fbee-4505-5a7a-b486-72fd1e75e0e0'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('93f8a226-edbc-5d32-9088-c135b0b4ca52'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 0, null::smallint[], '08:00'::time, 'Missa com as crianças'),
  ('2240ca90-e58f-533b-8840-e33a14d59617'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('38150f4e-63f4-593d-8a0c-222b233de776'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('34bcb9bc-a6b4-513c-ace0-7312d20ccb6a'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('d8b9ac24-e1df-55c1-9cb0-9f77f5e141ec'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('90c49024-e7d3-539b-9952-25e2feceacc8'::uuid, '3eca40cb-fd1c-5c98-b0cf-4a4fc327f190'::uuid, 'missa', 6, '{4}'::smallint[], '19:00'::time, 'Missa da juventude'),
  ('7be6063b-bec7-539f-b695-793f967ed5fc'::uuid, '3efbf51e-c146-5173-8f4d-48cb3ab80897'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('f524c314-7eb2-51e3-acd3-930c67c4b122'::uuid, '3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('f3904036-2b0e-5d90-b399-a3b112e2d196'::uuid, '3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('50bb5317-eab5-5cb3-a78d-9e69af32c738'::uuid, '3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'adoracao', 4, null::smallint[], '18:00'::time, ''),
  ('5a1dd658-1fbf-56d9-b8f1-6cc99eeea7d5'::uuid, '3f7e5004-438f-5258-aa42-3f43bae67c89'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('f6f2e0c1-9a8a-5cf2-9a48-bbc07b8d6ec4'::uuid, '3ff1183b-0eed-5c7f-acc1-8a55b8fa2f9f'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('99e69a4c-6dda-5e69-b72f-7c558bb46d56'::uuid, '3ff1183b-0eed-5c7f-acc1-8a55b8fa2f9f'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('b2483c2c-3ec6-5a3e-9450-138960075e00'::uuid, '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('02cc3243-c1cf-53de-932c-de52605b45e0'::uuid, '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('63c2ffae-206f-5760-bb8f-18867bbd1612'::uuid, '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('36b847c2-44c6-57e2-b743-eeb16df1f2b5'::uuid, '4082bfb0-8b61-5d6e-96ec-f7f8086103a7'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('d62ad3aa-c46c-5796-93d2-201f5c1016f0'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 0, null::smallint[], '06:00'::time, ''),
  ('879f75b8-efe5-5923-a00e-14d9850eb99a'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('623505a9-18e7-5ac2-b522-e056979a3681'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('c462dc98-c9bb-5461-b66e-05f7a109cbf1'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('0ae2a6e7-2b41-5115-8ea0-e3af30b823c2'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('73ecb509-c284-5349-a37e-002a8c4e4f47'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 1, null::smallint[], '17:30'::time, ''),
  ('5719ad9c-f211-5004-8a54-9efb1332a3d5'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('5aba6f39-f72d-5760-b18e-671a24014ae0'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('25e1b0d6-3862-5d58-b2a7-41f007af95d8'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('9df35ee6-b9a7-56d3-921f-0d3e423962cc'::uuid, '410b13e3-4752-53b2-a38a-0ccfe03fc037'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('5af320f4-8d11-5487-ad2b-777ae48d31bf'::uuid, '41787583-85b5-5898-b376-365826bb9b40'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('564eb42c-6f51-5045-b7cd-74ee9cbb1ce1'::uuid, '41787583-85b5-5898-b376-365826bb9b40'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('5a47753c-a62a-552c-b4c1-b10bb251bdc1'::uuid, '41787583-85b5-5898-b376-365826bb9b40'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('7cedfd5a-22db-5499-90a2-7f596a92ceb6'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('914b7c43-72b2-5416-bf07-675fdd8ef6d3'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('498442d7-c393-5a35-858b-5b092b5a9bdf'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 2, null::smallint[], '07:00'::time, ''),
  ('8c0082fb-0697-570b-af45-3b31209052e6'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 3, null::smallint[], '07:00'::time, ''),
  ('458f657e-d249-575e-892a-6916e7d7e341'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 4, null::smallint[], '07:00'::time, ''),
  ('86b5b5e6-ed86-5dfe-bdd3-42837a093ba0'::uuid, '41cd4f7c-0be1-5459-99af-8ed8f0924987'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('3ddea262-460a-5d18-829b-3dcd08f99f5a'::uuid, '42474f9b-6d3d-5094-96fa-0bd35fef71da'::uuid, 'missa', 6, '{2,4}'::smallint[], '19:30'::time, ''),
  ('c0fcefd4-ac33-53a3-b4de-b6c3468b869f'::uuid, '426ef105-438e-5361-bdea-cd8433b25829'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('45cfff35-72ee-5054-8760-a45480ea8f70'::uuid, '4329c6ff-1a23-5884-8906-ad8f22b2f692'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('9f77aef7-d280-56ca-9736-3648b908a579'::uuid, '4376e8a6-7c30-58a2-9e6b-bd754d91115c'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('5fa25555-ab14-5cfe-b49b-04ceb55defab'::uuid, '4376e8a6-7c30-58a2-9e6b-bd754d91115c'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('9986328f-2fe4-5feb-9786-2b62417aac87'::uuid, '4376e8a6-7c30-58a2-9e6b-bd754d91115c'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('c2f02284-a5d2-5531-85d1-de7c1f59896b'::uuid, '443d5be2-b788-57f1-8a1a-da7c4e2e1523'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('c8a87816-1ffe-5fb4-bd96-55932797dfe1'::uuid, '44558d19-e488-5c8a-981b-a847f227ae65'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('6073a066-0296-56ab-a42c-439365d8a02c'::uuid, '44564f3b-1003-51ba-a198-30d31261dd8a'::uuid, 'missa', 5, '{4}'::smallint[], '19:00'::time, ''),
  ('ac88fc91-53a5-55e6-a0d2-84a0f07070ff'::uuid, '451e27f9-bc00-5df8-b7d3-960451ff1f04'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('9d380b00-44c1-5b98-a2ee-28af9092ba2c'::uuid, '455b9a01-f386-57e6-b266-5483160fed5d'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('3f949691-80a3-580f-86cf-01d41c55cb4b'::uuid, '455b9a01-f386-57e6-b266-5483160fed5d'::uuid, 'missa', 0, null::smallint[], '18:30'::time, ''),
  ('697d7869-2b3f-5290-93c1-daad32069053'::uuid, '45e5bcd7-54f8-50e7-a977-a8a08db64c2a'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('5b851287-898d-56a0-a5fc-706baff3d8f6'::uuid, '45e5bcd7-54f8-50e7-a977-a8a08db64c2a'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('5c930297-fa21-5c2a-9513-38c68ba7899c'::uuid, '45e5bcd7-54f8-50e7-a977-a8a08db64c2a'::uuid, 'adoracao', 4, null::smallint[], '18:00'::time, ''),
  ('90bf6516-7f85-53ee-b204-78f2067698dc'::uuid, '46200e8d-7aa9-5abe-bf08-231270b22973'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('282741a4-c5a9-544f-b486-49492404a773'::uuid, '46200e8d-7aa9-5abe-bf08-231270b22973'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('88b35362-f69f-529e-9e01-815e58bfe281'::uuid, '46200e8d-7aa9-5abe-bf08-231270b22973'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('e3078bf3-9b66-522b-9205-fb313488d01b'::uuid, '471fb207-1286-5650-85b5-777d40cbac1e'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('2ce6d84e-d9c9-5d7c-bc1b-861b0f94bfa4'::uuid, '47926a87-b876-5265-8a70-2b37d6bb5b4d'::uuid, 'missa', 6, null::smallint[], '16:30'::time, ''),
  ('2af0ac17-1189-58cc-8f7a-003a6f62b676'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('65872787-7f13-581b-847d-b130ed20e5c8'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 0, null::smallint[], '18:30'::time, ''),
  ('9a8acd07-2c9a-519d-8b36-304b9f691d44'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('e61f2636-1d23-597e-b708-b0d9b10a814e'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('9c52b60c-750d-55e2-8885-9bddb25d29e6'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('6760e4ca-e624-51fc-8962-d6628f14d2a0'::uuid, '4ab3cda0-1c84-5850-a2ca-18f304cf21a8'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('c16300b3-f22e-5195-bb0b-9d18fb6d4607'::uuid, '4b3ca1db-548c-572d-9d7b-420324c41db5'::uuid, 'missa', 6, '{4}'::smallint[], '19:00'::time, ''),
  ('463e574a-c677-5bf2-9038-3e383dd5ba6f'::uuid, '4b51e320-bdc0-5d16-9ceb-c989cce70866'::uuid, 'missa', 1, null::smallint[], '17:30'::time, ''),
  ('d43ec7ab-be2c-5035-b842-fbf3d6400469'::uuid, '4dcc6988-c97b-5163-98c4-7eb2478a5425'::uuid, 'missa', 6, '{2}'::smallint[], '18:00'::time, ''),
  ('d3a2b8fa-1d31-5c32-b283-61ff6370efa8'::uuid, '4ee6e429-f530-5c0f-8c4b-d582eaa53751'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('07af39c8-7e81-53c5-aa57-a959c2216651'::uuid, '4fecebd6-5891-5365-b409-da4f69241a0a'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('7dc7d747-7b42-54e1-8f65-e09599bb7c18'::uuid, '500851c2-c83b-50e5-aa4c-d1ab4e1caea3'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('1fd75cbe-664c-533b-b131-504ae0eba2d6'::uuid, '50cd37e0-8d69-511d-90ff-1d8398419859'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('eff3bce0-4daa-5804-be3b-6437696e0d75'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('97f3d78f-15ab-5888-94c3-9f8605bc437d'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('3ee8460f-59e8-5fec-b831-0f930203cf7c'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('51c758a7-c8a8-5df7-a892-bc15794afe14'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('964031b5-41b7-58f0-9acb-39c950f592a8'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('16647b5f-655d-5cdb-a10b-b3565db7a088'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('d952648f-a84a-50b7-ae61-3ae0f96e33b9'::uuid, '51cb7006-a30b-5d73-8883-a882a4e634a6'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('9ceb22c5-b4da-59bb-94c4-11dff96e6b30'::uuid, '51ecc704-f11e-530e-b0ea-81214cb1a2f0'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('75397bf6-0d45-544a-a9ad-b382c2e50c5e'::uuid, '52444b51-ad5b-51d2-88a2-88c3ef5b0ae7'::uuid, 'missa', 6, '{1}'::smallint[], '19:00'::time, ''),
  ('e95b72ef-5c49-5b5c-927b-798cee9538f6'::uuid, '5251a354-c1f7-57be-8265-5464366316ff'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('0e0da6fb-2499-54fc-98c7-6f9c72f52276'::uuid, '52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('7a8788a0-5187-5205-b2bb-0ca4bf42b6e5'::uuid, '52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('5eb4fe60-df32-5578-8c50-58d0dd6ddbf6'::uuid, '52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa', 3, null::smallint[], '07:00'::time, ''),
  ('d9cac2e8-4338-5ae9-80fb-8190b4e09397'::uuid, '52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa', 4, null::smallint[], '07:00'::time, ''),
  ('0d1dbd4e-0013-5ceb-9224-4698104ea792'::uuid, '52678501-b7cd-55de-8ed4-049b960e7b84'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('4187dbe2-ae23-5c0b-a71a-773854f784d1'::uuid, '52adf077-83d3-5e58-99e7-c2bf5efd7c2f'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('b9438b0b-2c34-5017-a625-3aef2fe45c2c'::uuid, '53a2059b-0630-5ea8-8e27-836e99b88f47'::uuid, 'missa', 4, null::smallint[], '18:30'::time, ''),
  ('4822a29f-c4e6-537d-a738-f1e91236f9bc'::uuid, '53a2059b-0630-5ea8-8e27-836e99b88f47'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('636ed04f-1f34-5927-a22c-e754590e398d'::uuid, '53a2059b-0630-5ea8-8e27-836e99b88f47'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('3eebc71f-4f2e-5b5d-b9e0-3a6438e1fe95'::uuid, '541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('56c689bb-f937-5cad-8676-de1279209a30'::uuid, '541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('d41a1808-d1fa-5f2c-bf79-4c4060cc1186'::uuid, '541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('d15f2a45-c3c4-516e-a9db-2fbcad59ab10'::uuid, '541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('b6bb7bc8-bfd0-58de-9ccd-474ef1ef70a0'::uuid, '541f6e5b-9b73-5830-af12-361a5762e789'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('48b95e05-d96d-5c25-bc0e-b147bce9f460'::uuid, '5564ebeb-46ba-5344-8c09-d7e020a8313e'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('89ce3d02-83cd-5300-bebf-cc0da6d703c7'::uuid, '5564ebeb-46ba-5344-8c09-d7e020a8313e'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, 'Missa do Sagrado Coração de Jesus'),
  ('0e98d487-ab81-5ab6-8cf8-faccbbb31164'::uuid, '5692f833-e0b7-5aaa-a5b9-f1be332fbee6'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('65e99902-1bab-592e-804c-1c3b151bc186'::uuid, '5692f833-e0b7-5aaa-a5b9-f1be332fbee6'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('981886d7-c929-5a76-bf00-b6fc27b877ea'::uuid, '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('16b456b3-5d5f-5737-8c9d-71ca6149da72'::uuid, '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('35b1fe3c-cd6c-5006-aa07-e4ef9848492a'::uuid, '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'::uuid, 'missa', 5, null::smallint[], '18:30'::time, ''),
  ('2cb718e7-348c-5caa-b8d9-8abc97bf0283'::uuid, '56c4eeb3-f6f1-53a6-9d9f-4f9b8dee0c70'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('a3a161a5-a375-5e57-85fc-4f28dd08f9b6'::uuid, '56df358b-1c1e-5f89-a3bd-cce83ae1d3c2'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('d10be415-c4d1-5462-b2fc-9f5e33635cb4'::uuid, '57580b23-f20d-548d-9d0d-3d672635097d'::uuid, 'missa', 3, null::smallint[], '19:30'::time, ''),
  ('2aa07a40-ceb1-5829-88e0-204063b91397'::uuid, '5831b771-aac2-5978-8cd5-52e61e28c951'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('08e6f104-f304-5a7e-bf8c-562914c331db'::uuid, '5834313a-b867-5bff-a0c4-1b6f48776d32'::uuid, 'missa', 0, '{1}'::smallint[], '17:00'::time, ''),
  ('61aacb56-296e-5e31-9cad-cf7520d19910'::uuid, '585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('a09d4c75-3379-5b38-b1d3-3c2e8faf00d0'::uuid, '585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'adoracao', 4, null::smallint[], '07:00'::time, 'Até as 19h'),
  ('e8e1b28a-6189-5c46-b2c7-b2ab85731044'::uuid, '585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('4eb8d109-6d8c-519a-90d7-464f6becdd3a'::uuid, '585cbfec-029a-5f7a-a93d-28694e3ae066'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('eac4ddcf-7024-5a76-82e9-e03cf1e0f4e5'::uuid, '59e07032-a05f-5981-bcba-0832cd231dc4'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('f40c5a10-5c16-553f-950e-2552cee6753d'::uuid, '5bc9f784-53e8-5a3f-9510-66ec16232e00'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('456979dc-57cf-50b0-b232-a7d4dec75fab'::uuid, '5c1d543e-4862-5ff0-b944-eafd07daafb4'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('1045e500-0048-57ad-a7ba-eac074e11c91'::uuid, '5c1d543e-4862-5ff0-b944-eafd07daafb4'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('eabac6a6-3d0a-5f53-ae34-54bbaa43a912'::uuid, '5c7467df-a22d-597f-8375-0844d196529c'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('dd6844f1-7a3c-5b1c-b351-b665e6226172'::uuid, '5c7467df-a22d-597f-8375-0844d196529c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('04480ef9-0e5a-5773-b8e0-08bdcc2772f0'::uuid, '5c7467df-a22d-597f-8375-0844d196529c'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('f562b092-0a33-50f4-bb78-2a2a600aabdb'::uuid, '5c96c792-3e0b-590f-b299-1c8298a0939e'::uuid, 'missa', 6, '{2}'::smallint[], '17:30'::time, ''),
  ('ffaa88b9-623e-573b-8661-a71cc4fb76ce'::uuid, '5c9b696d-d8ce-51f9-85ec-605884540b10'::uuid, 'missa', 0, '{2}'::smallint[], '16:30'::time, ''),
  ('bdae4b33-8149-58f1-b5b9-9c9ea0669083'::uuid, '5d9f56d6-6bc7-5a3b-a642-f583df3a80e3'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('7365f087-9dd2-564d-843b-925d773e590b'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('762b96a9-f183-5656-b10c-ab637bdcd8ae'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('c7c6d182-26ad-5b35-901b-7c10b5e59f95'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a9061beb-8d3a-5dc4-b0d4-25f61df65207'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('5c93edbc-8d5a-535e-a992-f2a2a2f9f09f'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('5a5738ee-62eb-549b-a852-0fbb1322ea2c'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('396fa422-66d8-5a18-93f0-81e1800964d9'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('41c6e05d-a898-587c-963a-315c2e263507'::uuid, '5da20740-3e92-5fcd-a04a-b82f38e89b33'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('b1c65818-821c-5991-9033-2838b72434a1'::uuid, '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('82a693ba-ce70-58d3-b6aa-c558ac7ae6fb'::uuid, '5e85833f-3ac1-5083-9fa2-1267fd5b74c9'::uuid, 'missa', 5, '{1}'::smallint[], '15:00'::time, ''),
  ('26d6074e-06c1-5bfa-b5f3-f8826bfe7695'::uuid, '5f2d2d77-9243-55ba-86b5-ae78d49b1457'::uuid, 'missa', 6, '{6}'::smallint[], '19:00'::time, ''),
  ('adfd3231-6303-59f0-b4ea-e06fba6159d3'::uuid, '5f420431-9095-5b0b-a1ab-3479de96a102'::uuid, 'missa', 5, '{2,4}'::smallint[], '19:00'::time, ''),
  ('eb32c5a1-36b8-5c33-8f50-c98f61a266f7'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('067ef776-f1d6-5bea-93c3-22bd9057850a'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('a20526cf-903d-562d-9273-e52d16eb0915'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('8f81bd7a-4934-598c-9643-add8cdb217f6'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('95951419-c482-5080-992e-664eb4ee2642'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('6e233fac-dc5d-5ce9-89e4-5d60139e8bc5'::uuid, '5fa417b2-81c0-595f-8750-2a71048f21cb'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('10d856b1-f90b-5113-a76f-587bfc36e998'::uuid, '5fe5ffbd-6b0d-5ada-9326-bc4bad989fe9'::uuid, 'missa', 6, null::smallint[], '08:00'::time, ''),
  ('ec255793-e0d5-5cfb-a570-b6a2628bb79e'::uuid, '6098c7df-3055-56e9-9430-a0478edf4e0a'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('220f9f27-c940-5247-b014-71922a5b3b05'::uuid, '6098c7df-3055-56e9-9430-a0478edf4e0a'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('1a82aa5b-6600-5f5a-9e7d-1d08fd289d5a'::uuid, '60f7d746-cb29-5972-843b-6ba3da11c165'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('a16df3e5-3dea-50cf-8baa-00ccb97ed6f5'::uuid, '61af1ec4-22eb-5f19-bcf8-73aacc6587f3'::uuid, 'missa', 0, '{2}'::smallint[], '09:00'::time, ''),
  ('19532dd0-563a-54ec-8e74-93030e6e6407'::uuid, '61af1ec4-22eb-5f19-bcf8-73aacc6587f3'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('61318025-3b46-5c2e-a946-e72a804e898b'::uuid, '62109d98-1837-56fc-83be-0fb3770b81e1'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('5d54b27b-9ece-5a20-832a-1e35f5193f44'::uuid, '62153461-4305-5e52-bd18-51feef969385'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('c519bce9-01cb-5379-a00b-f1a8893169e3'::uuid, '62153461-4305-5e52-bd18-51feef969385'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('df5f5ac9-6dd1-5779-b9cd-a92c2f7699f5'::uuid, '62153461-4305-5e52-bd18-51feef969385'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('061a9963-80bf-58e6-b81b-c2ad8484535a'::uuid, '62153461-4305-5e52-bd18-51feef969385'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('1274898c-0a22-589d-a608-93bfff541046'::uuid, '622a2179-0d32-5178-84f3-73cca1ab3b90'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('385a7bcf-9644-5027-929c-72bf6b9c6730'::uuid, '622a2179-0d32-5178-84f3-73cca1ab3b90'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('180925bb-5ffd-5675-be58-c1dd699c8796'::uuid, '622a2179-0d32-5178-84f3-73cca1ab3b90'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('ec9c9d3a-d487-5f83-b0b8-2e4b22f9cfbe'::uuid, '622a2179-0d32-5178-84f3-73cca1ab3b90'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('643c16a0-4c47-59a6-9db8-b1235ea65df9'::uuid, '630426d3-903e-544b-8b8a-bf1a530647b6'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('581c50de-d9fe-5703-8e2d-26fa798f7f3c'::uuid, '630426d3-903e-544b-8b8a-bf1a530647b6'::uuid, 'missa', 6, null::smallint[], '17:00'::time, 'Missa de preceito dominical'),
  ('db4f6800-7701-5f9c-be4f-0c4d6668f2a1'::uuid, '635244e8-26ac-5ac7-9438-c8e7f7cd3a39'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('6c1061b5-b902-576e-8042-dd36074065a9'::uuid, '636be2b4-aa2d-5aeb-b800-59a1369b823f'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('efd49fe7-36f0-5a25-bce2-e2d38af9903a'::uuid, '636be2b4-aa2d-5aeb-b800-59a1369b823f'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('224131aa-8bcc-5e8f-a758-ea05bd9f532f'::uuid, '636be2b4-aa2d-5aeb-b800-59a1369b823f'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('72c36a8a-1405-522c-8ce9-9abe71489ce6'::uuid, '6400902b-7578-5b46-be6d-6097dd87876e'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('e1647703-9c1d-50f3-8608-1cbad0c01ee2'::uuid, '64477daa-1297-58d5-b54f-9e606bc60f21'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('dd3ebd8f-209e-52ef-ad31-492fa19c5719'::uuid, '64477daa-1297-58d5-b54f-9e606bc60f21'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('c3fc7344-5141-5a1c-a79d-7da1ab2efcce'::uuid, '64754544-82e0-52df-bd42-19fe16ee846b'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('1d0f6771-e5c3-5a15-b3ce-feac701b3720'::uuid, '64754544-82e0-52df-bd42-19fe16ee846b'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('84fd7587-0641-529d-8f55-1f66c6325701'::uuid, '64754544-82e0-52df-bd42-19fe16ee846b'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('99c03d96-b873-565a-96db-ae94b3164c96'::uuid, '64754544-82e0-52df-bd42-19fe16ee846b'::uuid, 'missa', 5, '{1}'::smallint[], '19:30'::time, ''),
  ('0ff88986-9e74-5917-ac4d-6ab24c3461c3'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('39777e85-a1b8-5b6f-8d6a-2d05c4a21a7e'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('48bdbb9b-48f5-57b4-97ab-23819dbf23e3'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('86878c27-557b-5bf3-a0fb-fec7eb0e231d'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('0c700cf3-7667-55f6-b68c-27a09cde9d05'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('1182d250-9fb9-5523-aba5-a6ede679f25e'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('c60d0678-2b3e-53b9-9acd-2b33371956c8'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('bb42fd98-593b-53b6-b284-3dc25d3fb428'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'confissao', 4, null::smallint[], '16:30'::time, ''),
  ('d2c53461-44e6-5dbe-8efc-4920cd2a2e56'::uuid, '6485f907-417e-5a36-89aa-aa8d527f4a21'::uuid, 'confissao', 5, null::smallint[], '15:30'::time, ''),
  ('3605e3e9-2426-5844-8ed0-cc9ed3f8fd34'::uuid, '64e8ca7a-9a09-5a30-9906-eb4a75ff03c6'::uuid, 'missa', 2, null::smallint[], '06:00'::time, ''),
  ('378f88bd-8a91-57c5-9e39-9063717eb270'::uuid, '64e8ca7a-9a09-5a30-9906-eb4a75ff03c6'::uuid, 'missa', 3, null::smallint[], '06:00'::time, ''),
  ('e249f7ca-69b8-5705-9c65-bdc16eac2187'::uuid, '64e8ca7a-9a09-5a30-9906-eb4a75ff03c6'::uuid, 'missa', 5, null::smallint[], '06:00'::time, ''),
  ('8b62c865-3caf-588f-9bbb-7aa1f93b035f'::uuid, '6587438e-c7a2-5e3a-905f-8057c76d65e8'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('fb80b32f-4c23-57de-8374-2bb045027776'::uuid, '65a6d60e-1628-539f-9af4-129a0b11dc3e'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('84683eb7-1465-5117-ad7d-1791b3b2d163'::uuid, '65a6d60e-1628-539f-9af4-129a0b11dc3e'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('644045bd-fef2-5163-a71f-7be20dd54c38'::uuid, '65a6d60e-1628-539f-9af4-129a0b11dc3e'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('834bbd40-01cd-55d8-b325-5d8236a58cca'::uuid, '65a6d60e-1628-539f-9af4-129a0b11dc3e'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('66f5fc60-aa93-5294-ada8-60bb88182e1a'::uuid, '661dbf10-864b-58f6-995b-b57531e3e3ba'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('b9cc6a18-f84a-507f-b671-4fe39ec43018'::uuid, '669870ae-bd50-54b3-b4f7-50dc20ae76c2'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('42f60ae5-d4fa-5b59-915a-8a4c02cb4ce6'::uuid, '669870ae-bd50-54b3-b4f7-50dc20ae76c2'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('bcc8deff-7359-50b9-bf11-6e0fe8277dfd'::uuid, '669870ae-bd50-54b3-b4f7-50dc20ae76c2'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('24922b2b-14d7-5b22-b955-4f47ad5ec925'::uuid, '669870ae-bd50-54b3-b4f7-50dc20ae76c2'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('272df0d4-9188-57e1-bb61-49d137a86cd9'::uuid, '6788c704-67f9-5751-adea-97dcf44d24a5'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('9c5965d9-a807-5e7f-9798-e3ab293f9c81'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('004d0927-7eff-5f11-8c08-313214b25e54'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 0, null::smallint[], '16:30'::time, ''),
  ('3f11fdb9-8088-5c3d-b649-f778683272da'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('bc91fa7f-35b9-5ba5-913d-2a585e446d98'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('96a14856-9681-5db9-b865-a54a5c56e91c'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('ff481de5-ad58-5806-8740-7f5e967224c1'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('f811e8e0-6486-59c0-b872-a5217b7be07b'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('0e71208f-1e27-50fe-9131-83286606bb7b'::uuid, '67e9f8f2-a6e7-573a-8b25-f14fb9e7d2f1'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('7b0d1e7d-c06b-56ec-ad8d-627fa51e3bb7'::uuid, '6a6ec7d7-3176-5496-a75e-e5f298d6da0a'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('2917c420-6be1-57fa-931f-1d6bbfc194ea'::uuid, '6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('9beb99b5-a10a-508d-98e6-d4748589a680'::uuid, '6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('1ce6cfc2-7104-5bd1-b7a5-34d7cc953645'::uuid, '6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('047f853b-7109-5ff2-ae4b-893daa1f244e'::uuid, '6c3ce8be-bd9c-54ef-afcc-3fa44ca601f2'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('a84feb8c-5f99-56ed-add5-ccc51d84da03'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7fd8bba9-e35f-53a2-b30d-6355cc7ad1ca'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('69a0d523-7791-539a-b786-4b50907c5313'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('240fac72-1625-5dda-88bb-68284a26c5c0'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'adoracao', 4, null::smallint[], '15:00'::time, ''),
  ('898c3854-db3c-5eb1-9f0d-1b71393d1155'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'confissao', 4, null::smallint[], '15:00'::time, ''),
  ('86f65e2c-ee04-5205-b6cc-a06c7b7574f3'::uuid, '6ce65111-06eb-5d35-a3b0-2109bcb685cf'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('652d07cd-3adc-5702-90f6-79dfbdd743e6'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('185eab0a-47b6-5eed-8a27-19e704fea515'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('cf9a6cb7-ae7f-51b6-a199-edc8522f96d7'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2bc370c6-6443-5cfa-8954-bd0a0cb8ac88'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('883d2cfb-b7f2-5060-af1a-6d265750a04d'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('3d8fbded-969f-5562-8701-7476c089ad98'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('9c03ee7d-7a59-5a70-95ac-a9f5eedcaf0e'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('32ec107a-00d8-50b9-9478-608d32319bbc'::uuid, '6d1d8e4d-22a2-5dc2-a666-c8cf0fbbad21'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('87490198-2a12-5262-a38b-608dcaaca58a'::uuid, '6d776938-09c2-57e2-aee3-88f9cbd61356'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('ca16b873-1756-5daa-8c83-9490fcd1f904'::uuid, '6d776938-09c2-57e2-aee3-88f9cbd61356'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('b035b26f-9469-5580-8946-51d883bd91d9'::uuid, '6d776938-09c2-57e2-aee3-88f9cbd61356'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('10baf401-aac5-5e3e-a2fb-bb663c1ff4f2'::uuid, '6d9f5548-b03f-51ec-ad8a-631f8af2b5f6'::uuid, 'missa', 6, '{3}'::smallint[], '19:30'::time, ''),
  ('8b4797f5-26b1-5c3a-a354-fe6dcb4a6258'::uuid, '6da0ff36-e2ce-5c65-be1f-f96b1b780006'::uuid, 'missa', 6, '{4}'::smallint[], '19:30'::time, ''),
  ('5c10bf5e-5a9e-506c-aa03-d63c4fc9b98b'::uuid, '6e6c59a9-a526-5a58-bd8b-f1baeddbe8bd'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('948edc6e-ff0f-5eb9-8f78-eaccf2c443d9'::uuid, '715dc3e8-7fba-56c3-b095-32dc152295dc'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('02b28fb4-a4a6-5acc-9fb2-9c98739f8d03'::uuid, '715dc3e8-7fba-56c3-b095-32dc152295dc'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('be188d77-f405-557b-8972-5b6ca961b56c'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 2, null::smallint[], '06:30'::time, ''),
  ('9b658329-2d25-5d9f-a802-9a0f067fd830'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 3, null::smallint[], '06:30'::time, ''),
  ('c7f8044a-e0c9-59a3-94f7-a7ffd3aee911'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 4, null::smallint[], '06:30'::time, ''),
  ('288d12bf-d585-5349-8cd7-965a2cf616ad'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 5, null::smallint[], '06:30'::time, ''),
  ('4ed640d6-0ad0-5943-8793-e070a31f284b'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('c00f15c6-b8f6-5491-b751-9095f44e5e29'::uuid, '718d4976-f9f4-5be4-b746-eebcc180c206'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('62cc6772-f56b-5614-9b2e-60c0e7c0e469'::uuid, '72ddceb2-6ed9-5dc8-8051-736a123d3b44'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('e5527f5d-fe02-5e6d-a455-a45818ba91a3'::uuid, '734e6050-ba0b-5aef-8706-993041e26f50'::uuid, 'missa', 3, null::smallint[], '19:00'::time, 'Missa da Família'),
  ('afc4c9b3-caf7-5787-884e-651d6349a8ee'::uuid, '734e6050-ba0b-5aef-8706-993041e26f50'::uuid, 'missa', 5, null::smallint[], '19:00'::time, 'Missa da Família'),
  ('87b3f2a4-23e7-5447-907f-22eafc1145f1'::uuid, '7395fc65-caea-5184-a56d-958925eb868a'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('459bd0ba-de02-5bc2-8160-16562f07027c'::uuid, '740e90a1-6860-54f3-8be5-8bbd3cc9ee79'::uuid, 'missa', 2, '{6}'::smallint[], '19:30'::time, ''),
  ('818f1808-078e-5c34-bb8c-6e79a19fd602'::uuid, '7442961f-8bdb-5ca2-ade6-91aa4ae38bf9'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('6537a4a6-56b1-5f27-b1d6-0e7c88a39ec0'::uuid, '74851423-4de7-597e-91a9-a7c8aa15025b'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('5fa73c16-0b3e-5528-890c-212919b409e8'::uuid, '753d8f35-8033-5f10-91c5-98580308e290'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('138b7349-9a66-5cf9-b48b-18b6962475fd'::uuid, '753d8f35-8033-5f10-91c5-98580308e290'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('44b1544c-678b-5657-b1e9-7f8e16406b2a'::uuid, '753d8f35-8033-5f10-91c5-98580308e290'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('2ac2fe8d-ca55-59f4-baad-12395660c2e4'::uuid, '75a124d6-75f9-5d9a-8444-59a82875d34c'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('345a9e94-c366-5a78-9996-f5bf293b76de'::uuid, '75a124d6-75f9-5d9a-8444-59a82875d34c'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('e91abbb0-97f1-56dc-999e-48fc09744997'::uuid, '763b022f-bd74-5f16-a602-6b8d321f7594'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('c110ac02-a4bd-500a-b58f-a213330524fb'::uuid, '7669f41f-940d-5678-84f0-dbe929f82b35'::uuid, 'missa', 6, '{4}'::smallint[], '19:00'::time, ''),
  ('f9441e61-d3aa-57a8-be11-9a7a5fc799c1'::uuid, '76cc15df-c1dd-5f29-b54c-cc38f3c00390'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a0ee9a22-3cd1-5f81-81f6-8b4b6ed10c32'::uuid, '76cc15df-c1dd-5f29-b54c-cc38f3c00390'::uuid, 'missa', 3, null::smallint[], '07:00'::time, ''),
  ('a380c22c-24c6-5754-bf2c-27d41b638163'::uuid, '76cc15df-c1dd-5f29-b54c-cc38f3c00390'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('653f33a7-e2d7-526d-bd1c-fb1f717e448f'::uuid, '76cc15df-c1dd-5f29-b54c-cc38f3c00390'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('d7d86620-3e8e-5c24-bb6c-bae3593a1400'::uuid, '77110c96-c001-5020-9fc4-772d11600a59'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('a01b26c4-5722-55b6-9b4d-4c2759bdd22d'::uuid, '77110c96-c001-5020-9fc4-772d11600a59'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('973987bb-0d7d-50d2-ad82-90a2fbd78a70'::uuid, '773940db-6adc-5bd5-a237-32973767ffa6'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('80dd4735-b46c-549a-81e1-a41df2379d99'::uuid, '77689aae-7a2f-5b5e-80ce-bb4614cc056e'::uuid, 'missa', 0, '{1,2,3}'::smallint[], '16:00'::time, ''),
  ('9db7c00a-2402-5f92-8712-a662406ef23d'::uuid, '77689aae-7a2f-5b5e-80ce-bb4614cc056e'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('8796425f-ad80-5c20-9e22-cae617ef3ab0'::uuid, '787ec272-5892-5720-85a2-a259abf6c705'::uuid, 'missa', 6, '{1}'::smallint[], '19:30'::time, ''),
  ('6e1f4132-765a-5aa6-b508-1e24292c9f90'::uuid, '7882aa65-9ea9-55f1-b3ec-811541953c4b'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('d243a108-5721-517d-a9cf-c6a57d494a4e'::uuid, '78d29ba1-334d-574b-be5f-e9df1085de94'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('5ebdd7e7-8dcc-51e5-8f15-b3d715b182dc'::uuid, '79c4e609-3ca3-500b-adb8-d44c1ae2e19f'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('ed30c2f8-26b7-5122-838f-61998a5f1944'::uuid, '79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa', 3, null::smallint[], '07:00'::time, 'Rito tridentino'),
  ('ecc83b8a-0988-5e4a-95c2-74fbda1f3469'::uuid, '79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa', 5, null::smallint[], '07:00'::time, 'Rito tridentino'),
  ('3fbbab21-ecb7-5794-8cb7-4a3e822e16d5'::uuid, '79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa', 6, null::smallint[], '17:00'::time, 'Rito tridentino'),
  ('33f87065-9361-5167-add5-b9bfcff47144'::uuid, '79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa', 0, null::smallint[], '08:00'::time, 'Rito tridentino'),
  ('5bf02a14-996e-5746-9f57-9dfc105611f0'::uuid, '79c52f4c-91d4-5550-b17b-490c85b87279'::uuid, 'missa', 0, null::smallint[], '16:00'::time, 'Rito tridentino'),
  ('2c012d6c-9339-561d-9d35-9ecf5014b432'::uuid, '7a511675-97f4-50fd-bd59-c9af6d8e6c2c'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('1b100fbf-83e1-5e4d-a1f7-661fe3b170e7'::uuid, '7a511675-97f4-50fd-bd59-c9af6d8e6c2c'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('459a80ca-64fd-5584-8c76-22e17f6be0da'::uuid, '7a511675-97f4-50fd-bd59-c9af6d8e6c2c'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('785c0d0e-84dc-531f-8364-d91be6e564a5'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('4be19fd9-264e-5e69-98c6-eee95aa6bf28'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('fe80f6d0-463a-5823-9545-b191c73fe761'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('4074221a-c3eb-57da-918a-234b46051717'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('f272c236-c90b-5c0d-b24c-9e2824d573fd'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('e06f3322-6925-5222-bc54-afe8414ac5ca'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('ea284907-8d0d-5505-a193-ac3a50386547'::uuid, '7a759a43-29cc-5878-8a59-653c663b1cee'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('d170e91d-0c03-5e86-a2ec-4e72090cd02c'::uuid, '7a92081a-dc67-5d27-9631-143c9f66c58f'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('54167aca-3bee-5cf7-bd0f-6df3aee35dc5'::uuid, '7abaaa02-fe57-57fe-9bd7-d96784afebe8'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('96222089-b2a5-50c1-823d-1842a7f7eadd'::uuid, '7bb89fff-0863-55ad-8f8c-e3bdea131e69'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('84bc5698-7907-5c40-94ae-3d0d47d361ca'::uuid, '7c3904cd-43b6-5fac-8548-de0b5014134d'::uuid, 'missa', 6, '{1}'::smallint[], '19:00'::time, ''),
  ('ff7b56c3-36cf-5c6b-97b0-f083ce6b8f23'::uuid, '7c48f6c2-2302-586c-8869-652af6202e8a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7681975b-f9f3-5ba7-b3bc-f73193febe8c'::uuid, '7ce15e9c-3010-5788-a582-18230e723c32'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('61330583-9d7e-5835-828f-70f03df07d0c'::uuid, '7d0afa85-2734-5306-a9d7-45baa1ccbb5b'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('14a5777f-60ac-5a3f-8c80-01ae7fbab5fa'::uuid, '7dc2e25c-0abc-540a-9b6d-fd7920d95421'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('4d4308fa-194e-5bd8-96c3-196d58c5d92b'::uuid, '7df9cdfc-fc9a-55ec-8fb4-a8ecddf5e74f'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('89d3d978-203f-5de8-a469-bf7a99b8d916'::uuid, '7df9cdfc-fc9a-55ec-8fb4-a8ecddf5e74f'::uuid, 'missa', 6, '{1}'::smallint[], '16:00'::time, ''),
  ('2a3b80b6-8862-511f-84b8-a164d4df8bf2'::uuid, '7e48e766-eeca-5a4d-bbcd-cd6e17a7f0c7'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('265128cb-9727-5ff7-9f09-486d7057fc04'::uuid, '7f5d248f-9cac-5fa5-9bfb-963f015301bd'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('51ad5095-922c-57dc-b8a7-9fdda99083fb'::uuid, '80cd1cfc-fce5-519b-8918-d1d2cadf37b4'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('6e210f66-3479-5c7f-8a55-7e442aba344e'::uuid, '80cd1cfc-fce5-519b-8918-d1d2cadf37b4'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('9d929202-2830-5e16-b45a-e07e9dd0b546'::uuid, '80cd1cfc-fce5-519b-8918-d1d2cadf37b4'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('a6870d94-b757-55b2-8746-b664a011e6f3'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('e63bab71-573c-5f25-8320-3464304cdc23'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c9367fa5-2c9b-5aed-be02-a57253e36b4e'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 4, null::smallint[], '12:00'::time, 'Missa da Hora da Graça'),
  ('50a36259-7361-55dd-9c03-dcf147b41764'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 5, '{1}'::smallint[], '16:00'::time, ''),
  ('478b7a49-e527-5a61-ba26-369e67dd730d'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 6, null::smallint[], '09:00'::time, 'Missa das crianças'),
  ('061e30c9-0a3e-5496-a4d4-7fb805ac6a45'::uuid, '81dc8039-d795-5c4b-bfa5-9562c27ec132'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('39c4c9be-cfb9-507c-b2d5-c34aa7758c08'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('7b001481-9e5d-5a24-8186-6d81ddf9b845'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('700ddfa1-475d-5de0-941b-9cc34341ce60'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('ab7005ba-bb9e-5c5d-998b-b142c0a28857'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('873df41b-a8ee-5800-9486-c17a85570848'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('9af0e3ac-43ac-564c-be85-d64b9fd34b6f'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('29432d26-ac0c-5625-b6e1-e803a86d68a6'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('0e2ade00-12af-55bd-81b4-bb3272a9de65'::uuid, '833059cc-8900-554f-95a9-25d6fbddae2b'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7d668fc0-fae2-5b07-947c-c05d90bff7db'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('7a9de7c0-a1fb-5593-b2d7-5465b7eacf66'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('f6b63d97-269c-55ab-9a61-b9cf596eda7f'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('df2994d7-2807-5d72-b491-55ae8a7778a6'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('c8f28fe2-8177-510a-90cd-30f78daf2df5'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 0, null::smallint[], '10:00'::time, 'Missa das crianças'),
  ('b03ee724-3123-579d-969d-072ff2943666'::uuid, '833a77f5-ff04-5faa-b14c-826c937b32c2'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('d1e63c1e-9aec-5d35-bd7a-4d41af3b70e9'::uuid, '836a84c4-2d16-5774-9773-cc84111aca48'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('a4164ee9-c6bc-5dbe-a1c4-7193b5ca8e1d'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('8e3f302d-0bc7-57ca-a590-658b8e030764'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('cfbfefd5-7500-5b91-8482-c1a4fd172da5'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('50a90fab-e8c8-5202-8895-bcd1100a9cb6'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('b2d97a35-6702-55d1-a140-1655faba5772'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('773b526a-d652-5d29-8768-ee2f56a2e2e3'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('15b82a12-9e72-5a36-91b2-a4e29079ba90'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('a6087613-953f-56cd-a85a-7c52da732fb3'::uuid, '83c58369-ffc5-5875-bd9f-bc9a1c9f3539'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a1f01bd9-d346-5f10-90a8-4ca846800799'::uuid, '856876df-264b-5cdd-8c6c-346b40411d2e'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('eb4c9261-8c09-5073-96db-028353f06199'::uuid, '856876df-264b-5cdd-8c6c-346b40411d2e'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('df5f2cf7-5a2a-52d6-a40f-fd99393de9f2'::uuid, '856876df-264b-5cdd-8c6c-346b40411d2e'::uuid, 'missa', 4, null::smallint[], '19:30'::time, ''),
  ('86ab3899-dbb9-5abd-8d8e-27b46ea77c96'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('4f45af8b-6959-5ded-961e-e1f20f0fdd70'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('6a313d0b-8341-5ed1-8f0c-169dba461bd8'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('6a38e341-7329-5fc7-92d6-58b69e626076'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('91ba3d71-93e3-5c66-9856-3420972d6ee4'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('39c0c8dc-8171-536a-9cec-45fafeb7338f'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('e9179ced-1022-5d68-9ccb-e4bb27c46929'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('6f65470f-3f2b-5c8d-b996-1b861288fad2'::uuid, '85c0ad12-973f-531f-8b68-6e7b7f8ba241'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('cfb5e1fb-56bd-57d8-a2bf-e2195ed4d7b8'::uuid, '89115597-79cb-5bcc-8714-7d2c70450408'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('f750a637-95e2-5bf1-83d9-64e397e52961'::uuid, '89115597-79cb-5bcc-8714-7d2c70450408'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('087d4f34-0cac-55d3-a173-20ac78839ef4'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 1, null::smallint[], '06:30'::time, ''),
  ('2ad45b04-aaf9-551a-bd45-57c7c99f35f7'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 1, null::smallint[], '18:00'::time, ''),
  ('0d316af4-4564-5a1e-9286-102105fefdcb'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 2, null::smallint[], '06:30'::time, ''),
  ('c14d2614-fd4a-574d-8833-c94df986789a'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('8b63ed3c-f59b-5bb8-a211-ee89802d3ef1'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 3, null::smallint[], '06:30'::time, ''),
  ('f11f0ec6-b3b6-59f8-b876-28210f5afdf0'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('5d76930f-659a-5a6c-9928-ec3d26ef4053'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 4, null::smallint[], '06:30'::time, ''),
  ('7cbea6a4-78fb-568d-95b5-9c748f780ca7'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('292159aa-a08c-5138-9935-313ab219cebc'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 5, null::smallint[], '06:30'::time, ''),
  ('9ab2d6bd-d045-5ff1-94c6-e819cdc9c864'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('80ed99f8-0df8-5a46-963a-3848e6044b6e'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 6, null::smallint[], '06:30'::time, ''),
  ('a752327f-680f-565f-a4a7-11fe87464b56'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('cc0ca140-de17-5e6e-9de1-aeec4a55818e'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('81f5ebb7-7e20-54df-969c-9feced9450c8'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('39718b05-4bc7-575d-9645-5928a419f7fe'::uuid, '89ebb8e9-d722-5063-8ab0-2d3c2c50e3b0'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e947fb4d-3d16-5ced-9a62-adf4dbdc4278'::uuid, '8a1d9980-3d8b-5fe3-9c90-639b79c49573'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('1a5c2e7a-dabd-5709-862e-648c8e2d6e9e'::uuid, '8a1d9980-3d8b-5fe3-9c90-639b79c49573'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('999fc461-c810-5b0e-a5f6-18bca96e61d2'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('417e5f96-18c2-516c-9eb1-55a3655812b4'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('a6c9b204-bfa7-59e1-8b5e-c0bd38c3b6ca'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('8a32e819-853f-5afe-95d9-4c155fcc69d5'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 6, null::smallint[], '08:00'::time, ''),
  ('715f800d-80a4-5c4b-922e-dcd09c48412f'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('1eaf6523-9d86-5a30-9b9b-15e4d10ff6ed'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('4d6b58bb-8f46-5977-a01b-d2c8930feac8'::uuid, '8a6d4ba3-9398-50bb-8de3-8f944921526a'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('87af97f6-aa48-5472-819c-3e25555e3dc4'::uuid, '8ab40aac-c61d-5e88-a238-82db900478a1'::uuid, 'missa', 0, '{1}'::smallint[], '16:30'::time, ''),
  ('6313e301-cd75-555e-bc43-f852fa5a194e'::uuid, '8ac62213-eba1-5acb-9426-0c4f2f3e9860'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('88236008-ebca-5fb0-aae5-1f186ce91cd8'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('b7f9676a-9711-5db4-be9d-118ae7665732'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('f8ad2f39-98f8-570a-b464-a67ac86c4e0e'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('7b6e0e11-ca0e-5ea9-9381-ddae9c134574'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('d3d3219d-9f78-5d40-a278-01fe246cb324'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('d89de77a-827e-5404-89f8-1747ffa75256'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'missa', 6, '{4}'::smallint[], '09:00'::time, 'Missa das crianças'),
  ('256bc4f9-c4ef-5af2-afbc-155bdc8cba6d'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'confissao', 2, null::smallint[], '15:00'::time, 'Das 15h às 17h'),
  ('0cddcaec-9607-551b-a3df-34fde9e2a670'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'confissao', 4, null::smallint[], '15:00'::time, 'Das 15h às 17h'),
  ('58f435e8-51b5-563e-be66-b1267f3a5062'::uuid, '8cb629db-b787-5c7a-ae08-4922fa3d0528'::uuid, 'confissao', 5, null::smallint[], '15:00'::time, 'Das 15h às 17h'),
  ('1a1d1160-7de3-597e-a97f-4172da6cbf0e'::uuid, '8ce65a5f-cd78-59db-8fb5-5876fbaae5f9'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('bce0b094-9244-5ebe-b5a1-dead8ea89d44'::uuid, '8d0a7bf2-bb22-52e2-b744-411bddfc2b43'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('1633a650-2f47-5a65-9250-323cf6af96b6'::uuid, '8d67bc7c-9454-5621-b30e-de3beb9314c0'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('38238782-4f04-5633-88f9-e4232fe928b7'::uuid, '8eea7ae5-da37-573a-809a-7e4e653417d6'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('6296f14a-8977-5442-a3ac-187cf9b004e3'::uuid, '8f4904ad-3e5f-5560-9afa-c832bf237344'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('751584bb-cf16-50cf-88f1-bea684c38ac4'::uuid, '8f4904ad-3e5f-5560-9afa-c832bf237344'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('bb985bc1-1bca-5e01-a407-b97d1e939b97'::uuid, '900889a8-dd9c-5de5-8ac2-76a0470d55ef'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('b0e33371-c8cc-5963-be82-7c1494e3a5b3'::uuid, '907398ce-0dfb-5844-9b86-c8fb97513196'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('16d1af25-beec-52e1-8eba-179279b5d780'::uuid, '90c17a30-029d-506e-be73-d1f98e61517e'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('9708d685-c01d-522c-8a68-d963f1a75be2'::uuid, '90c17a30-029d-506e-be73-d1f98e61517e'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('5eee75cc-2203-5ff0-adc2-2d65899d9773'::uuid, '90dfaf7f-dca5-51e0-9789-7a8595060df0'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e273fa64-c03a-516a-be8c-1e077c0769a5'::uuid, '90f0527f-3c4f-59c4-ae13-aa48c443a71e'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('e679d549-462d-5b23-afe5-6e3d30c44842'::uuid, '91974767-89df-53fc-abd9-b2cb7def5fae'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('349bee65-81da-5661-9023-a52e03b01fd2'::uuid, '91974767-89df-53fc-abd9-b2cb7def5fae'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('688ce48f-ac45-58c3-85b3-0d655844e3f3'::uuid, '91cc7e5f-11dd-5546-b7cf-fa9697790240'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('8b72b865-24a2-501c-a64e-02ebdc9cb7d5'::uuid, '91f7ead9-09b9-5195-b880-3eb9c751e130'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('c2833f9d-da17-59cb-8c42-f31646fa4ee7'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('3a696b42-6865-5342-9bdd-1501fd7621af'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('d4a15e31-e356-513d-9d34-b344a642d0ab'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('7bc4f54b-3a69-5706-967c-23186720a414'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c05eb016-a9aa-5832-b5c6-304d9500ffd1'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('8a016a07-a38f-5e92-bf28-d2a3cbf08ca4'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('388a6695-bc1b-53a7-a70f-d4220958ed59'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('0da48164-e5cd-5a6e-9d6f-6e45d8ecc744'::uuid, '938c1feb-a66e-5bf1-b0f0-d908739abcc3'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('e5fe6a92-5b71-5ae0-b727-70b7cb71356f'::uuid, '9428a0b3-f8a8-5faf-b7a3-5c64baaf4f21'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('15ef543a-d13b-574f-a413-cf088ae22f96'::uuid, '9428a0b3-f8a8-5faf-b7a3-5c64baaf4f21'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('a9352364-0106-5f33-8181-821210a3ba81'::uuid, '9441216f-43cf-5234-9756-53a6cbc0b6e9'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('cfa85d43-302b-551c-994c-df677278696d'::uuid, '95ab4184-39a6-5833-9a9e-f5e4a877c377'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('27ab771d-917e-54e2-8d23-3cf4f0557513'::uuid, '9641a92b-72ea-5876-bbf6-7f13a2c66bd7'::uuid, 'missa', 6, null::smallint[], '18:30'::time, ''),
  ('aa10147f-8bc1-580f-8b31-68a9ad867024'::uuid, '9641a92b-72ea-5876-bbf6-7f13a2c66bd7'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('82e3520e-f3e6-5664-b3b4-143bcd68f4cd'::uuid, '970b138c-33eb-5bf9-8422-628ced28459c'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('f6496b9a-5525-53b5-b5a7-7c84ce54e092'::uuid, '970b138c-33eb-5bf9-8422-628ced28459c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a5a10646-7729-563e-b08e-fe9f1896b426'::uuid, '9735edf0-bdef-5b35-84e1-3284c504a57c'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('c0130d0a-5efa-5c1b-8037-d7917e473a6a'::uuid, '9735edf0-bdef-5b35-84e1-3284c504a57c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('fc7e532d-2b3d-52c5-aeaa-1345b581fe36'::uuid, '9799ecf3-ff24-5526-86d4-7964e985137f'::uuid, 'missa', 0, null::smallint[], '08:30'::time, ''),
  ('944626bb-4308-5d78-9d7c-9d334d9d66ba'::uuid, '9799ecf3-ff24-5526-86d4-7964e985137f'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('92c6ae7a-a306-55a5-97b7-4ac6c9bda80f'::uuid, '9799ecf3-ff24-5526-86d4-7964e985137f'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('e829dc19-d8dc-51bb-bf0a-fa297f2626a1'::uuid, '993cf7da-e2ea-552c-9ac8-a828823d5706'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('28511649-fe85-593f-b7c3-721ab21439c0'::uuid, '99568a3e-dda8-54ff-a5e7-e42f3e40d213'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('ad42b424-93a3-5384-9e55-383588242b5c'::uuid, '99d0f2f5-1ade-527b-ab5f-2d575746f04e'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('0313e6c0-654c-553f-bc1e-81051cfb0aac'::uuid, '99ffde2b-799e-5dc4-8144-a87d6118367e'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('3f70260e-d49f-5542-80aa-87e935188d68'::uuid, '9a0ddbb7-1dc6-5024-8292-c8cec0c6d25f'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('0b9799fe-dd4e-5f25-982a-a4fd5dcb8503'::uuid, '9a51395c-242a-51b6-93a0-5b2b2d450af7'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('45511c6f-ebf9-5c8d-9eb2-8f68d1106f53'::uuid, '9a51395c-242a-51b6-93a0-5b2b2d450af7'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('86973c3b-a480-562c-b1b5-3f66ddc2c1ab'::uuid, '9a51395c-242a-51b6-93a0-5b2b2d450af7'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('e397fcdc-e498-5b24-983e-fb74ef802aa2'::uuid, '9ac0c900-f066-5dee-80c8-b7c4877f0520'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('a8ab651e-7035-5247-95ba-eef9a97a47d9'::uuid, '9be88c30-9fbc-5863-a538-0ab85b5c18c0'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('a8d7f980-c390-5538-ac22-e1813695ef82'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 2, null::smallint[], '06:00'::time, ''),
  ('52a44812-1f09-567f-aa45-a615555467da'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 3, null::smallint[], '06:00'::time, ''),
  ('0e60410c-ec5f-5d2f-8190-ecbd3cecc813'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 4, null::smallint[], '06:00'::time, ''),
  ('ffd27820-314c-5194-8378-e3eb706b9876'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 5, null::smallint[], '06:00'::time, ''),
  ('edaea678-aa15-5662-b472-75a17ce6d270'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 6, null::smallint[], '06:00'::time, ''),
  ('36ed3060-a524-5ddb-af62-2417ab80f2d3'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('e5d62bf7-738d-58a6-9362-37a4e9504d16'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('c8e529ed-3a81-5cc2-a2c5-3967f33bb0a7'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('01ae72b2-bb91-52e7-b266-cf8cb210f0fe'::uuid, '9cc0f7fd-69ae-5291-9b2a-5d0f942d4c2a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('e4510773-280c-5633-a0ea-ab4680285ec6'::uuid, '9cd867c9-9633-5ebe-94d9-d366e38d1273'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('56423f1b-1fbc-5817-87f4-3c610de00fb0'::uuid, '9cd867c9-9633-5ebe-94d9-d366e38d1273'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('5a5ac674-143a-57d5-8798-77a8aa102e19'::uuid, '9ce4bcda-4e0d-5f69-a236-6a58fd4d8fb5'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('bc6b07df-5d93-5e4b-8cce-5809e32302b0'::uuid, '9cfe11e7-a4f9-5478-acd3-1ab93fd8f6a9'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('e7c1259b-b4fb-57fc-a75a-eb09204bbf5e'::uuid, '9da03cae-2ede-5510-8d6a-85fdbed71537'::uuid, 'missa', 3, null::smallint[], '10:00'::time, ''),
  ('670035c4-4fb5-5ff3-bb8a-c2673290f925'::uuid, '9da03cae-2ede-5510-8d6a-85fdbed71537'::uuid, 'missa', 5, null::smallint[], '10:00'::time, ''),
  ('b762d05c-fe73-5903-b6ab-f131d60020bf'::uuid, '9dcb264a-ecfd-5543-8be7-94b26b9e3922'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('260f898d-7b57-5b28-905b-9beda9951098'::uuid, '9dcb264a-ecfd-5543-8be7-94b26b9e3922'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('d8747b7f-2efa-5f66-a4c1-d2fb0653c87f'::uuid, '9dcb264a-ecfd-5543-8be7-94b26b9e3922'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('49431dd3-123f-5c78-9b9d-c3308bef35ca'::uuid, '9dcb264a-ecfd-5543-8be7-94b26b9e3922'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('67e5780d-b05b-5a65-936d-ca0891d8bdf2'::uuid, '9e719365-8579-5aca-b9a5-0763ed509520'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('ab6786e0-11a6-5c59-8ec7-f7429c49782f'::uuid, '9e8a271e-e0a8-5c0a-9032-c3524d093b07'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('f59bd190-6d50-53a3-b220-c42186eb0860'::uuid, '9fcbc74c-5c0c-573c-81b6-c75b7fa7359b'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('f3a4de5b-1401-5fc5-aae6-7168f3355218'::uuid, 'a0028d31-d32a-5a89-8b0a-7114d8adbf81'::uuid, 'missa', 4, null::smallint[], '08:00'::time, ''),
  ('bc4fbdf0-697c-5394-b256-6bc771ba21b0'::uuid, 'a0028d31-d32a-5a89-8b0a-7114d8adbf81'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('f96d1077-892d-522d-988f-80a225b35d6f'::uuid, 'a0524485-70c7-5089-b47b-e098881138a5'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('7d5ab824-7529-5d52-8029-7425438123eb'::uuid, 'a0524485-70c7-5089-b47b-e098881138a5'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('9de542b8-b052-51db-96f0-b5ccb72836f1'::uuid, 'a0878748-4dad-50b8-89ee-fc19e1279caf'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('cace0801-3b27-5a6c-a82a-9f12919e21c8'::uuid, 'a1b74f3f-aca4-5faf-887f-3ec541893741'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('233025de-4fbb-510c-9ad4-91b8a2f179cc'::uuid, 'a2c444a2-4693-5bfb-89aa-521ee18c5a1b'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('1bccdb19-e488-531d-81ee-2f8de06b4368'::uuid, 'a2c444a2-4693-5bfb-89aa-521ee18c5a1b'::uuid, 'missa', 6, '{6}'::smallint[], '19:00'::time, ''),
  ('6350de9f-9142-5ea5-81fe-cab5621d922a'::uuid, 'a3432c2a-f76e-55aa-a84e-77b18fdfe8e1'::uuid, 'missa', 3, null::smallint[], '19:30'::time, ''),
  ('91cebf81-84f0-5a1b-b584-38e416389375'::uuid, 'a3432c2a-f76e-55aa-a84e-77b18fdfe8e1'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('69ad4ca4-6548-5980-a1da-6c4dedab2246'::uuid, 'a3432c2a-f76e-55aa-a84e-77b18fdfe8e1'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('d4129498-3354-5428-850e-77b053facb06'::uuid, 'a3f54306-bc28-5da5-bb50-cd065a6fd0bc'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('5119271f-4db0-5ca9-9565-077bf21f4530'::uuid, 'a4969dd2-f3e8-5a22-bf9d-52abf0c88519'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e4ea21cd-845a-548d-8780-801531a806d2'::uuid, 'a5b16634-b0be-5d17-8a35-5ea0257417b4'::uuid, 'missa', 6, '{3}'::smallint[], '19:00'::time, ''),
  ('30fedd95-be9f-59b2-b75a-6778cde75801'::uuid, 'a6a558fd-b5fc-5b27-aea8-0d2125449ba3'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('9f47187b-50e1-51cc-9b82-e260f53d6f3f'::uuid, 'a6a558fd-b5fc-5b27-aea8-0d2125449ba3'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('f20b6cd3-ec3c-57e2-858c-063397b58aaf'::uuid, 'a8aef2bb-b5b7-5b10-a9ef-31387bdbb551'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('9b9236f9-2858-5d8e-8390-cbf8d0d6276a'::uuid, 'ab061009-e202-565c-b1d0-51a4d96c1a35'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('42d26942-7a3d-56be-a1c4-58ceab76f4d6'::uuid, 'ab061009-e202-565c-b1d0-51a4d96c1a35'::uuid, 'missa', 5, '{1}'::smallint[], '19:30'::time, ''),
  ('d39e70cc-15ec-57f4-aac1-b6fb440cfce7'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 2, null::smallint[], '19:00'::time, 'Missa e novena'),
  ('be1bca15-eeb7-5e9f-a938-bdbfd2af0172'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 3, null::smallint[], '12:00'::time, ''),
  ('e2b90b79-0939-58c9-b740-9f23ae5b3e41'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 4, null::smallint[], '19:00'::time, 'Missa e adoração'),
  ('cac1ee24-6c0a-5350-8a79-9a001df1aa72'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('3f7286eb-38d0-5b26-bfc5-cb0111167ecc'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('083021ab-ef98-52e8-b724-574f74ebe8ac'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('a7cbc9de-923e-5bae-8097-2a00f50728e0'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('5be02d22-ce27-5d65-a40c-332aed9bce0f'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2853abb1-572e-5908-a7c3-7220c0c470f7'::uuid, 'ab67aac4-d482-5ce6-9dab-15ef2073bd20'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('c732391d-d79c-5a3f-8f47-dd4365cc9741'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('f5d487db-af42-5997-92aa-53b21b3e466c'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('8da5c314-d876-5864-a2f2-a660483da393'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('09ca663d-fa04-5d5f-bed2-88ec7f6bc1c4'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('24c11a4b-7529-5489-b553-4d5885e0f97b'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('648db3ea-67c1-58c6-82ca-3dd069a18c09'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('e48c0d1f-7659-5622-9ccb-5221acce7c9f'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('50b62a71-c385-5c4b-a6fd-322e235c740f'::uuid, 'ac9f0c84-304e-5afc-aee1-1c2df9b27921'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('15127dbd-a39b-5e89-9ce2-54d5608396a1'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('6d3cf364-0da0-53c1-9699-6809f2a075e8'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('f60faa94-46f5-5d4a-bef0-39397b28e49f'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('9e5e6832-b336-56b2-93c6-8ed430e50b3c'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('1ac5959b-4b9a-53f1-981a-ea6631e85bd0'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('c2076a1d-b215-54e6-8bca-d29ffff70a4e'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('4c4b9f57-50ae-51ac-ac19-013d65032f13'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('6d52e3fa-e6dc-54d5-8e61-f2d7135d4d06'::uuid, 'aca9f549-f4ed-5abe-bdd8-34b71b8ca052'::uuid, 'missa', 6, '{6}'::smallint[], '09:00'::time, 'Missa das crianças'),
  ('60416e60-bdfb-5c4b-be91-ba1c68a4652b'::uuid, 'acef7f85-9d47-5c06-9f08-675cb4678c8e'::uuid, 'missa', 4, '{2,3,4,5}'::smallint[], '19:00'::time, 'Exceto na 1ª quinta do mês'),
  ('a3cd5f67-e3ff-56a3-b42d-fe49311c3ff5'::uuid, 'ad818ee0-6271-58b6-837a-85cf72c47b71'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('54f640b6-2ee8-578b-b3dd-1d909db28051'::uuid, 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa', 2, null::smallint[], '18:30'::time, ''),
  ('1842d61a-caa7-534a-9407-2fa47bf2b944'::uuid, 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa', 6, null::smallint[], '18:30'::time, ''),
  ('6642cbb2-7fba-5100-a23d-3afff2a9ac1b'::uuid, 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('cab85b0f-7506-518e-9b63-2d981b19fa53'::uuid, 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa', 0, null::smallint[], '18:30'::time, ''),
  ('6808a943-f84e-5a94-a125-7d661b49d55c'::uuid, 'ad9a08fc-dde7-57f3-862d-f44d5cd5692e'::uuid, 'missa', 5, '{1}'::smallint[], '18:30'::time, ''),
  ('879e9a2c-451f-57a1-ab04-25b3eab631b5'::uuid, 'add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('af082f78-5d71-5142-97e8-c052a35390f4'::uuid, 'add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('0f40a372-2065-530e-81db-b507a9838b13'::uuid, 'add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('6269aec6-9b27-590e-bf3d-ebae908c3781'::uuid, 'add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('a4eace2a-be97-5b9f-a1fd-9ea13c9e2d0a'::uuid, 'add373bb-9251-5361-bc23-79036a6db3dd'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('dafed09d-5c6f-5c58-86fa-f0911d01d646'::uuid, 'ae13f35a-407d-5c36-80c7-818141307226'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('aad984ef-c8b9-5f3b-86a4-f3b296a8c143'::uuid, 'ae13f35a-407d-5c36-80c7-818141307226'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('9857e4d3-403e-51a1-8a5b-a57e53bf8ceb'::uuid, 'ae13f35a-407d-5c36-80c7-818141307226'::uuid, 'missa', 5, '{1}'::smallint[], '16:00'::time, ''),
  ('b1c4b2f5-5878-5943-abc1-de3b18d9a491'::uuid, 'aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('f68a98eb-a429-5c40-8cfd-3936e19ef31b'::uuid, 'aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('082b7680-f3ea-5758-beab-aaa5a229fa9e'::uuid, 'aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('e3d1c2bf-d863-53a4-a5e3-b848445c8516'::uuid, 'aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('a2273871-dc77-537e-8c84-203888407158'::uuid, 'aebd8271-e248-53ed-9705-495856e95b6d'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('4b94d114-08a3-5ad8-8c89-8c67a6f33d7d'::uuid, 'aed193dd-5a50-5cb3-b035-260c6283f10f'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('615f0332-16e0-5a12-a215-26f09e250e40'::uuid, 'afc55423-78a3-583f-8d36-ef7479277122'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('c3b34e64-5222-5382-8038-dd4d3475f1cc'::uuid, 'afc55423-78a3-583f-8d36-ef7479277122'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('04698c16-d829-5857-9202-b6f7306348f5'::uuid, 'afc6008f-0840-56b0-8ddc-246a83683944'::uuid, 'missa', 3, null::smallint[], '08:00'::time, ''),
  ('12bc7651-08be-55e3-83bc-05bdbe260988'::uuid, 'b0163325-740b-5ff2-ab3f-cb7d7823f1a9'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('4f496bfa-22e6-5cb2-b108-305d6778b294'::uuid, 'b0163325-740b-5ff2-ab3f-cb7d7823f1a9'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('d85482a8-f688-530a-b990-5207e3082053'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('4dee404f-80fa-5546-af46-20f147206248'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('ee27af11-c6b1-5cfb-8c47-08d1dbafed2c'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('9429603a-4e6b-551f-82a5-4d8ec6894e62'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('90566c28-6774-5cd0-975c-22ee6d6d852c'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('473c3726-e7eb-5ae7-97fe-1092b22189e6'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('00174061-d38f-502c-ab81-0d944ce17c35'::uuid, 'b0a96574-b9b8-52c0-b354-5afec7962aaf'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('96ac032c-6e7f-5b0a-ad4d-174d576ce869'::uuid, 'b11a3526-b083-57db-8768-f56bc35702e9'::uuid, 'missa', 5, null::smallint[], '11:00'::time, ''),
  ('5a115d01-2ac6-5001-be39-d7424acae003'::uuid, 'b11a3526-b083-57db-8768-f56bc35702e9'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('6ba518ff-e463-58dc-a358-6d636594626c'::uuid, 'b11a3526-b083-57db-8768-f56bc35702e9'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('0ac4476e-8022-5c1c-8e09-3bdc7e3c1958'::uuid, 'b23025fe-a1b8-55bc-9eaf-6ba2b66e6869'::uuid, 'missa', 0, null::smallint[], '17:15'::time, ''),
  ('0286debe-ada8-5739-9b2d-da8c4f312600'::uuid, 'b299e385-c869-52da-ab33-70ec7ec1b7f9'::uuid, 'missa', 3, null::smallint[], '16:00'::time, ''),
  ('8de65ba1-1493-55bb-8cec-29c681967d30'::uuid, 'b299e385-c869-52da-ab33-70ec7ec1b7f9'::uuid, 'missa', 6, null::smallint[], '11:00'::time, ''),
  ('6afae14f-d3b0-51f9-bc05-db6d4f27f996'::uuid, 'b299e385-c869-52da-ab33-70ec7ec1b7f9'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('59068d99-29f8-584f-88a0-0e70963ad339'::uuid, 'b3c55e34-75bc-5cb6-acd2-0d96b73980fd'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('5ecbb0b4-9b90-5e32-bfac-ec29f5d89119'::uuid, 'b3fd592e-027b-547d-a637-9bb37c872fc2'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('178d9868-2ce2-504a-ad27-1739c7a7e986'::uuid, 'b45d1eee-543c-5c33-8f02-facf71384099'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('796e943b-9c69-5b1c-a7d0-781fc565ad4d'::uuid, 'b45d1eee-543c-5c33-8f02-facf71384099'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2694247b-a022-580e-8d96-758be7fe5aae'::uuid, 'b45d1eee-543c-5c33-8f02-facf71384099'::uuid, 'missa', 6, null::smallint[], '09:00'::time, ''),
  ('4cf59fec-fcdd-5271-911d-076cd3921f35'::uuid, 'b4d8e778-e928-57b5-8b5f-0c035f05d99c'::uuid, 'missa', 5, '{2}'::smallint[], '19:00'::time, ''),
  ('8af62df3-f333-5f75-9d54-dc6a1e362632'::uuid, 'b4d8e778-e928-57b5-8b5f-0c035f05d99c'::uuid, 'missa', 5, '{6}'::smallint[], '19:00'::time, ''),
  ('f67b32c4-40c9-5811-836a-5fbfedca31b9'::uuid, 'b54a16cf-455b-5212-a3e4-4a819242eceb'::uuid, 'missa', 6, '{1,3}'::smallint[], '18:00'::time, ''),
  ('c0246c2a-43fd-5fa1-baae-ae09d457fcd6'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('53d413f8-99fa-5bf0-ad83-e42f364b4c7b'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('572fd851-416b-561b-860f-ec410e3d7926'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('68678197-0d2d-51b3-b6d4-6dff751ca2e0'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('298618dc-c014-58ec-9cbf-c31936b1bee0'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('87b08f6d-79cc-5225-bf86-a813f06fbbfc'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('8976cfdb-101a-5f8a-9ebd-5db7f89b4514'::uuid, 'b5862952-1883-5f07-9e6d-1021c820fff9'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('529c1a4f-2726-54e7-8ab4-bf40b6cdb2e1'::uuid, 'b5916c2b-b83e-520e-b326-1ea32401e6eb'::uuid, 'missa', 6, null::smallint[], '17:00'::time, 'Missa dominical'),
  ('465dcb51-3f0e-53a0-9a47-9f8e9f24cfc9'::uuid, 'b5d11859-e0c2-5e1f-9b7e-72aa418b7f48'::uuid, 'missa', 0, '{2}'::smallint[], '16:00'::time, ''),
  ('245fef4d-5b21-5ae2-8f45-de8ecaf9f4df'::uuid, 'b6e6ca21-5f6b-52bd-8c69-e47fd12fbf58'::uuid, 'missa', 6, '{2}'::smallint[], '19:00'::time, ''),
  ('e06d0eb8-2965-518a-8492-82d0497e0d15'::uuid, 'b72daa51-2601-5851-86c1-6c9ae213d4a8'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('a38e309b-aaaa-5b9f-b4db-789bb24d4179'::uuid, 'b72daa51-2601-5851-86c1-6c9ae213d4a8'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('c5af50d4-b6e7-56e7-be75-5c4ca0d247cf'::uuid, 'b7ddc03a-e030-541b-80d3-9573d49f7318'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('d88a64dd-f97b-5ebc-a6f2-bc225b80701d'::uuid, 'b829ec6c-d5e5-5a46-bc61-c147d760599a'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('36c18117-e935-5632-8b2c-a5df5bdaca99'::uuid, 'b829ec6c-d5e5-5a46-bc61-c147d760599a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('10e499ed-fe6c-58f7-9b1b-51be2a9429e8'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('f5c656f5-6388-5c70-b4be-fa815f8e2e73'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('b6ec1f4d-54ee-5af8-9ed0-e4af2855ae45'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('4615b75e-cad9-582a-80b4-0e66aad76d5c'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('8ada304c-ed96-5f6f-ab0c-5441065cdb19'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('bd18b5aa-cc3a-560e-b018-4c62a7d1f711'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('6ee862fb-d48f-571f-ab78-c06c2c810abd'::uuid, 'b9ab3886-2f0e-5c76-8891-1a2096127512'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('1e3922a1-e8e0-556b-a6cb-9d8a0ca82b5e'::uuid, 'baf69c03-c5b6-5f04-80fe-bf67108dac67'::uuid, 'missa', 6, '{1}'::smallint[], '19:00'::time, ''),
  ('37f76f2d-3a59-5644-89d3-5e98f2b78b54'::uuid, 'bc733872-1e9e-5022-9e41-af7e6bf40a06'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('cb315ee3-ee4b-505a-b12b-ac546faa851e'::uuid, 'bcabc3c0-6ee3-53c1-8502-546bd69b9ed1'::uuid, 'missa', 6, '{4}'::smallint[], '18:00'::time, ''),
  ('5d074892-ca00-5ac6-9ab0-e9678c2365a2'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('3e07c5ab-fa9d-5554-b695-b587a4ea8c3e'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('89e1fbf0-27db-56bf-9933-51142a49facf'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('97ccb164-6980-585d-9e7e-dd88376c46dd'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('b9d0bd33-13ff-5e9e-9f44-76b8181aa26a'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('01e1e2dc-1f8d-5613-9d3b-9dd365eb6d3b'::uuid, 'bcacfea5-1423-5c70-9570-d262cc8572b9'::uuid, 'missa', 5, '{1}'::smallint[], '08:00'::time, 'Missa do Sagrado Coração de Jesus'),
  ('069f0737-4e8d-57c6-968b-5a61f7ede1ea'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('fcad58b4-d1e7-5fcd-9c76-e8c43e1cfde7'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('276e880c-dbaa-545d-975f-bb7d0840eeca'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('4494af63-15a0-51a5-a0a5-842afe89274b'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('dadcea19-633a-5607-a0fb-800e7fdb08a5'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('dbc6533a-a20b-5e77-b872-2a8fd67e0b37'::uuid, 'bda8bfba-4e08-5f4d-b801-f13e80585e40'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('6cca677b-3843-503c-a454-1dbff36dbed2'::uuid, 'bedf890b-ebb1-5718-84b2-9ac08ff813c9'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('f6d27e3a-1f1b-5e19-95a1-ef278fb8544f'::uuid, 'bedf890b-ebb1-5718-84b2-9ac08ff813c9'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('54b28a15-6c53-526e-a533-3a8024fb36ed'::uuid, 'bee10172-3702-5518-9cd3-3da72ae5c2bf'::uuid, 'missa', 6, '{1}'::smallint[], '19:00'::time, ''),
  ('d4f5a122-f580-537d-89f9-2ff90f67c0f8'::uuid, 'bf14e865-5a74-503d-8544-f4382fd06e9e'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('672c72f0-6c01-540a-ade1-6ea36051c135'::uuid, 'c004d647-3d82-5b81-be55-2a61d13d7b1a'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('a6b7d823-9521-5749-bb25-4c765d0ae0a6'::uuid, 'c004d647-3d82-5b81-be55-2a61d13d7b1a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('ebc4e0e6-68b0-5675-aa10-9b7cdbef4424'::uuid, 'c004d647-3d82-5b81-be55-2a61d13d7b1a'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('1ce5f6e3-166e-5eab-a92d-b143f2bc542e'::uuid, 'c004d647-3d82-5b81-be55-2a61d13d7b1a'::uuid, 'missa', 3, '{6}'::smallint[], '19:00'::time, 'Missa das famílias'),
  ('51f72cd1-9ae9-5d85-b056-7a38bf15037d'::uuid, 'c10f4a4a-6613-5065-becd-13534328a29f'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('a7a10595-05d9-5dab-88d7-d28b3f4eeff2'::uuid, 'c10f4a4a-6613-5065-becd-13534328a29f'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e27b780f-7422-5627-9dbe-90030ef51839'::uuid, 'c10f4a4a-6613-5065-becd-13534328a29f'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('082ce2f7-a6e5-5b85-93cf-297228f511a8'::uuid, 'c1656b74-8113-532b-8bba-2d439e5fecd7'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('ec035a7d-f7ec-522d-8b8f-b8c5f444e4c1'::uuid, 'c1656b74-8113-532b-8bba-2d439e5fecd7'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('e7daa586-9826-5c06-bb5b-cb53c9fde965'::uuid, 'c23b2eaa-09eb-5fbe-bee4-b72032eccd21'::uuid, 'missa', 5, '{1}'::smallint[], '19:30'::time, ''),
  ('894ed68e-d446-5a40-ba82-fb150b24e6e0'::uuid, 'c2855ccb-c4cb-58dc-b8ff-1e07d5be4e97'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('2550240b-b4a1-5be1-8021-5dbf1a83e20a'::uuid, 'c2b04c68-b840-53b2-b997-edf720821bd0'::uuid, 'missa', 1, '{1,3}'::smallint[], '19:00'::time, ''),
  ('fbb4a122-2820-544d-92ae-13b2b065d9de'::uuid, 'c3d5133b-9bc2-50d6-903e-b8deda1e05c6'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('5c90bd1e-7bab-5dde-95ff-8e577d376171'::uuid, 'c3d5133b-9bc2-50d6-903e-b8deda1e05c6'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('8f77d000-8ffb-5a21-8369-9605f8ed3a15'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('649c1058-4031-5baa-a9bf-1354d738014b'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 0, '{2}'::smallint[], '09:00'::time, 'Missa com as crianças'),
  ('454b9f69-2390-5f26-8709-da2805075798'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('3bf290ad-690c-5eaa-87d9-2c00d78b1fa1'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('146bc300-1cfd-57c0-95f4-4cb269636863'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('54282c0d-103d-5c54-a4c1-d0cb3b1ec2e1'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 4, null::smallint[], '12:00'::time, 'Missa da Hora da Graça'),
  ('9b25b6ff-826d-5587-a5ff-e315de6d795e'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('6b3c779f-45cd-5a59-a936-1a0147b88d20'::uuid, 'c43ce209-02ef-576d-9a72-acfc4aa3d79c'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('3226fd5f-4130-58e4-bd65-29ab10345cf5'::uuid, 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('065eaf41-e2fa-5c7f-8759-a59e12dcef60'::uuid, 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('fd683584-2062-5785-935e-a8f1c9319848'::uuid, 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('6caaa673-10e9-5969-9024-e92e65154128'::uuid, 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('0227b50b-f554-585d-97ab-09fa6d4ab713'::uuid, 'c4a3b311-5163-5b87-b17e-e31812ae9fc0'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('bb8225a9-3f0a-5933-8a01-9d78e47c71d6'::uuid, 'c4d4a1d7-e03d-59e9-8096-ceffccd7d6f3'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('a3cc013b-6ddd-5495-b291-b2e97fc0b2d7'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('363e719b-7696-5752-ac8c-6deb5a1da9a2'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('0b03ebdb-cace-57c7-82db-245c5a3fb2e2'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('12282345-83b4-5432-b961-1c10a6364eb2'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('c5ad4904-e3b3-5d6e-9be2-c1ae0d391e05'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('5f615069-dd6a-5447-8ab9-f32bbf9dd750'::uuid, 'c56fe41f-c256-5fc6-9617-075b27ba5e5a'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('a7f61f92-6d4a-59b8-9c02-034b98e7bc75'::uuid, 'c612144b-ec58-5e25-a8c5-a51f76de9bab'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('2c823adf-f80e-572a-bcca-cb28acc65d7f'::uuid, 'c6c77f1b-2f6f-5d29-907c-30cf2a10c28e'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('d43aa69a-8f96-5625-a7f7-81a71d2b7311'::uuid, 'c6c77f1b-2f6f-5d29-907c-30cf2a10c28e'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('658d314b-7cc7-51ba-9690-dcefcd1489f6'::uuid, 'c6c77f1b-2f6f-5d29-907c-30cf2a10c28e'::uuid, 'missa', 0, null::smallint[], '10:30'::time, ''),
  ('0d10f5f4-36cc-5782-a3a6-cdf8e11a5f8d'::uuid, 'c6c77f1b-2f6f-5d29-907c-30cf2a10c28e'::uuid, 'missa', 4, '{6}'::smallint[], '15:00'::time, 'Missa dos idosos'),
  ('6c99248f-e4a3-5d70-ada3-714e311327e2'::uuid, 'c87a685e-d14c-5093-9089-27ea09d94e73'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('fa7d420d-307a-57c7-b508-b4fe9db25c88'::uuid, 'c87a685e-d14c-5093-9089-27ea09d94e73'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('54f3da92-b4a6-5ffa-b14d-c3ccc190f05f'::uuid, 'c87a685e-d14c-5093-9089-27ea09d94e73'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('5bdabeb2-0599-532d-8735-10829826490a'::uuid, 'c8b2cc7d-2544-56a4-8bce-52c8a52ca107'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2341dcc5-13f4-5be9-8a11-7965c2b97a95'::uuid, 'c8cf02e2-1e9f-5c6d-96a0-af0eca56c6b0'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('0e8248d2-5453-57e4-b3fc-747302418b28'::uuid, 'ca201bcc-1938-54e5-8e26-1f46f46e1946'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('846b10d2-27eb-511b-982f-fcb3833d7f5f'::uuid, 'ca201bcc-1938-54e5-8e26-1f46f46e1946'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('319ffa4f-643a-5bd4-ace1-361e14305ea8'::uuid, 'ca5e4d5d-85d1-51f5-847d-472e96e8d976'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('b5fbd590-1ebb-5112-82d8-a32c7d1dd640'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 1, null::smallint[], '18:30'::time, ''),
  ('2835abc4-a795-5e70-b722-e41aede0603a'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 2, null::smallint[], '18:30'::time, ''),
  ('db0cb11a-0247-53b3-a925-3f08772f2ee8'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 3, null::smallint[], '18:30'::time, ''),
  ('65ffa02b-e7de-52b3-8034-d1ab8b11c9c8'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 4, null::smallint[], '18:30'::time, ''),
  ('461d34a0-2181-5602-8ff1-8aa767d6d68d'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 5, null::smallint[], '18:30'::time, ''),
  ('7230dbd1-0785-57af-9642-2384a8644007'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 6, null::smallint[], '07:30'::time, ''),
  ('dde69aca-3d3d-5ab5-a209-b9a4543537b7'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('57e376e1-170a-5db6-bed0-1cae2b3ceffe'::uuid, 'ca776e77-5f5e-5776-90f2-ce6da0b0cc60'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('7a87e748-3ea0-539f-8260-2904b279898c'::uuid, 'cb9ec572-af7f-5609-87fb-d6cd12589591'::uuid, 'missa', 4, null::smallint[], '16:30'::time, ''),
  ('b8e6abdb-9fea-524e-98a1-87608457f2a9'::uuid, 'cb9ec572-af7f-5609-87fb-d6cd12589591'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('29970947-a347-5451-98f0-2da7815aa69c'::uuid, 'cba8de2a-ebe4-5671-bb1f-39cd07ac0be2'::uuid, 'missa', 6, '{2}'::smallint[], '19:30'::time, ''),
  ('d0433371-598d-5b0e-af90-106456b1d161'::uuid, 'ccb7c7a5-869d-58ba-b317-5208a5e1f0d9'::uuid, 'missa', 0, '{3}'::smallint[], '16:00'::time, ''),
  ('1d0ddc61-b42d-517f-abe3-d3f323ba8b43'::uuid, 'cd387d76-4267-5880-874d-8a131cf35036'::uuid, 'missa', 2, '{6}'::smallint[], '19:00'::time, ''),
  ('d5f6cb89-037d-5c6e-a1c0-b25b2f3dcd69'::uuid, 'ce0c6739-ac2e-584a-a758-058453a99008'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('cb608b24-f38d-5008-8534-8a527a8672e1'::uuid, 'ce360342-eb67-5cc8-9854-a574e3c7a4fa'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('bf4d7254-a152-5e9a-adf7-065cf71b9d77'::uuid, 'ce4c3596-92db-5eff-a194-74705935f79b'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('dc300414-c50a-5634-9de9-1d573ca36a80'::uuid, 'ce4c3596-92db-5eff-a194-74705935f79b'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('69cc1073-df63-51ab-afa2-bccb6b718bf4'::uuid, 'ce59044e-cf12-55c1-bc9b-0a099a970814'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('8d551617-7e92-57c7-b975-43d6e8ed8a24'::uuid, 'cee80872-5c44-57bf-b82f-5ad5cc6220a8'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('e5d92f61-e998-53b8-8a07-4d584e052005'::uuid, 'cf54162f-eff8-5356-952e-6251c798b808'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('aef26f61-fbf2-5f96-9f7f-a251e75a1e22'::uuid, 'cfd7ae62-263e-5020-aa88-48c5bc664ba1'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('815c98a0-bc98-5f2e-aa73-e18a2f87eb57'::uuid, 'd100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('1076c2a7-a035-5da7-9d62-51a361c9fc89'::uuid, 'd100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, 'Missa votiva ao Sagrado Coração de Jesus'),
  ('2f51bbb6-87ce-52b2-ba94-47567787eb89'::uuid, 'd100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'confissao', 4, '{1,3}'::smallint[], '17:00'::time, ''),
  ('9911503b-8080-512b-abbe-b133d7b241ca'::uuid, 'd100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'adoracao', 4, '{1,3}'::smallint[], '17:00'::time, ''),
  ('1c85b056-6f82-53b7-a6c4-7946ed6920c3'::uuid, 'd100ef5d-ce18-517b-8970-76e1f576579a'::uuid, 'missa', 4, '{1,3}'::smallint[], '19:00'::time, ''),
  ('3136594f-7585-5005-809d-a142ac10adef'::uuid, 'd150fa5d-3f9b-565f-b606-28020936eb95'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('740883bb-431e-517c-80b7-dea7bb3f82e7'::uuid, 'd272ee85-9ea9-5cb6-b065-72a34555483a'::uuid, 'missa', 0, null::smallint[], '17:30'::time, ''),
  ('65eb6e74-eb9b-5248-bda0-b8861713eada'::uuid, 'd3192233-a463-5ac3-89fc-9bc8e779358f'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('f32f85da-9f06-5531-858b-28d7214e2a4a'::uuid, 'd41150b3-add2-5a55-9aca-c41f6c90ac29'::uuid, 'missa', 6, '{4}'::smallint[], '19:00'::time, ''),
  ('80034924-1dc9-529e-abb0-3457107bd5fb'::uuid, 'd4155965-93c6-54a9-9fee-278d043e3815'::uuid, 'missa', 6, '{3}'::smallint[], '17:30'::time, ''),
  ('d5db42f1-e27d-522e-83e4-cc0a50d46d2a'::uuid, 'd47e935c-c37d-5724-a93a-ca626f7939a5'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('e11c5f27-ecd5-5039-bddf-df83ccc6eeee'::uuid, 'd4a40c83-f380-5f0e-8173-c667838362ca'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('3ac15ee1-077b-5d5b-9ac9-0f0b58307df1'::uuid, 'd4da5323-17ac-54c5-9dd1-6a7fff2e1c5a'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('e18bfc32-e026-5379-b852-3266f41a667c'::uuid, 'd4da5323-17ac-54c5-9dd1-6a7fff2e1c5a'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('20d1bbfd-329c-55ac-ae68-a87551e5cfd3'::uuid, 'd5bfb39c-fe73-50dc-abbb-3b4e37ff90c3'::uuid, 'missa', 5, '{3}'::smallint[], '09:00'::time, ''),
  ('ad6d483c-4cef-59ae-adc4-fa917ed772a8'::uuid, 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('25c4de33-d50d-5466-b757-e1c79182f575'::uuid, 'd5dea2a9-dbfd-5932-ad3b-0fa128c77977'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('674acb6c-e0dd-509d-ab27-feb793d5a23b'::uuid, 'd5f571bc-02be-5e96-af0d-bcdb27f5f5dc'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('128a9feb-64b7-53c5-9873-aa15d18a4e32'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('aeb70d6b-170e-57c5-a2c6-e564479f6bf0'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('5bddd3b2-4770-5440-9190-408150de9b21'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa', 2, null::smallint[], '16:00'::time, ''),
  ('b0e6916c-60f9-5238-8853-11c0aa43e6ba'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa', 4, null::smallint[], '12:00'::time, ''),
  ('e5df6242-4e3f-5b47-8344-e048b6b6b4cd'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'adoracao', 4, null::smallint[], '13:00'::time, 'Até as 18h, com bênção do Santíssimo'),
  ('f6be462f-fa4c-590b-b8ed-d14326c7345e'::uuid, 'd71a9bfe-d1ea-571b-8136-b3f5bacd8e90'::uuid, 'missa', 5, null::smallint[], '16:00'::time, 'Na 1ª sexta, Missa do Sagrado Coração de Jesus'),
  ('e420d86e-72d4-5824-8b9c-56e76b526892'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('582e647a-1134-5ea2-b264-0af9dd0f44c4'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 6, null::smallint[], '09:00'::time, ''),
  ('ce8108c3-a00e-5ecc-98bd-1e5912d88ad6'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('344aa203-d054-5419-a79f-5f381b278f14'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('2f35983e-fb32-5406-866a-135abf6a020a'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('7852a584-980b-58a3-bc5d-557eab80215e'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('a3d9a1fe-3434-5689-b309-c1eb50e18878'::uuid, 'd77dcb16-296d-5e2c-82bd-20ff6fd65f68'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('c3357b03-afec-5ac4-98f6-73ed085056af'::uuid, 'd7d3aa4e-c702-55f6-ab3b-c1b9e4fb3b02'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('7497342d-b8bc-5745-b9d1-a3ac89d3bdfd'::uuid, 'd8cd6fba-52e9-5bdd-aa28-54ba60db123f'::uuid, 'missa', 0, '{4}'::smallint[], '16:30'::time, ''),
  ('117e8ab0-2281-553b-b7f0-de2b16fb6560'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('88733047-f809-5d73-9b7b-8a13a28fdb35'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('5272270b-2489-5735-a92c-1bc918995aa4'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 6, null::smallint[], '10:00'::time, ''),
  ('3a2271ab-bb99-5764-9ced-cdcff8270b10'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('3dc0e27e-f09b-583d-807c-64aaafa6b7a5'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('61ec0ad0-288b-5285-8bc6-190dea20dde7'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('363fa26e-2e04-5abc-a70b-ecf10446fa7b'::uuid, 'd8ff4b1e-4979-5ebf-9884-89de7725aa75'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('8e666b29-eeb1-54a6-a753-653ad418ebe2'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 1, null::smallint[], '11:00'::time, ''),
  ('44322ebb-22e6-5570-9fd3-290160a317c5'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 1, null::smallint[], '16:30'::time, ''),
  ('462b4c5f-c29f-5f13-99cb-b2ee75c84d5c'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 2, null::smallint[], '11:00'::time, ''),
  ('743695d9-99b1-5018-80c2-61293029075d'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 2, null::smallint[], '16:30'::time, ''),
  ('d7c23f3a-c8b2-5862-b5dc-11fccb19c7ca'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 3, null::smallint[], '11:00'::time, ''),
  ('b319d84c-9a36-57fe-bd83-5175aa931f08'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 3, null::smallint[], '16:30'::time, ''),
  ('c24ca8e1-16a4-59ba-8fdd-0bfc6ed7c236'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 4, null::smallint[], '11:00'::time, ''),
  ('29832271-9130-5887-89dd-513c3f058769'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 4, null::smallint[], '16:30'::time, ''),
  ('7ea8d6aa-d32a-5952-a2e0-1ee857e8bc06'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 5, null::smallint[], '11:00'::time, ''),
  ('bf335965-0dfe-5c34-958d-23fe370ab8a3'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 5, null::smallint[], '16:30'::time, ''),
  ('633bbf42-d463-5771-a7a0-0a18aef032b0'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 6, null::smallint[], '11:00'::time, ''),
  ('7ef14576-554d-59bc-b744-83a9e8260798'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 6, null::smallint[], '16:30'::time, ''),
  ('d6bacf1b-01f1-5078-b4cd-f70fd8d6afcb'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('89dc318a-c176-5098-955e-2737b3a1cf65'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('d9562a55-473e-5d25-969b-5ac5bf492234'::uuid, 'd97b8e4d-4b7c-5ba4-b2c0-7c7329f08618'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('9747d424-4e34-5be2-87d5-39357ddc9bc0'::uuid, 'da7398b5-b14a-5e47-b930-b65411eec80c'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('dbbfc50f-d0ea-5115-9566-e9a51f5df087'::uuid, 'da7398b5-b14a-5e47-b930-b65411eec80c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('ddc38a76-b18e-5f7b-af50-0dfd8e86b81e'::uuid, 'daf53f9b-8d42-5d5b-a794-8a7354ebbb8e'::uuid, 'missa', 6, '{1,3}'::smallint[], '19:30'::time, ''),
  ('38c75897-4079-5aa5-9244-24435c6315f5'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('5e2c9669-cfdc-548c-bbad-a7d4d09c5e1f'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('073271a6-aa2b-5d3b-b16e-54afbd641c82'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 2, null::smallint[], '18:30'::time, ''),
  ('ad881837-99ad-5b65-a11e-7dcc19d16560'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 4, null::smallint[], '18:30'::time, ''),
  ('4ffc4093-d545-518f-b388-3f79f03d87a7'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 6, null::smallint[], '07:00'::time, 'Missa votiva à Virgem Aparecida'),
  ('e6779784-04fe-521f-bdd1-b714b657b27b'::uuid, 'dc470cf1-099c-520d-ab08-d64140a1f31c'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, 'Missa com oração de cura'),
  ('65cf5e02-94de-512c-baa7-9a7eaa6ea594'::uuid, 'dd414025-9ec4-5d69-86e9-730a0f433a90'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('8b79f207-2075-5cc0-8956-284760ae2814'::uuid, 'dd414025-9ec4-5d69-86e9-730a0f433a90'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('2c3389a0-34c6-5cc7-b287-73d0ac34c74c'::uuid, 'dd414025-9ec4-5d69-86e9-730a0f433a90'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('cafe3f1b-e452-5f6e-bfe5-6cee8cb36561'::uuid, 'de294c3e-9d7c-5aad-a689-db9e2e6a4043'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('f582a993-8cf5-59f8-b26e-7eb0c78e7f47'::uuid, 'de294c3e-9d7c-5aad-a689-db9e2e6a4043'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('764f7d9f-38cb-5b3b-8a93-f0d306a094e3'::uuid, 'de294c3e-9d7c-5aad-a689-db9e2e6a4043'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('bbc70eb2-2b67-5d06-b39f-4f03a25c81b5'::uuid, 'df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'missa', 0, null::smallint[], '08:00'::time, 'Missa dos Romeiros'),
  ('dec99842-ed54-5554-a2df-c6cdba4d114b'::uuid, 'df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'missa', 0, null::smallint[], '10:00'::time, 'Missa dos Romeiros'),
  ('85b311c3-e651-5414-99c3-89ad682000c2'::uuid, 'df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'adoracao', 4, null::smallint[], '15:00'::time, ''),
  ('57549e95-5cd2-5e61-8dd4-797ab4f62a28'::uuid, 'df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'confissao', 4, null::smallint[], '15:00'::time, ''),
  ('01b5aeda-d1e8-5084-aae7-973a2543f9ab'::uuid, 'df668235-c024-5fe1-a432-f4102cf7da57'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('194bb86f-0ca2-58d2-a660-d90a3f6fd055'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 1, null::smallint[], '17:00'::time, ''),
  ('6530c5b3-9c45-5596-883f-5d4a7364cb33'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('accfa6c2-a2d1-501d-8c0a-2a6df7194e89'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('49a5a23b-086b-5919-aad0-d46cd39663f6'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('02b45bfb-425b-58d5-9471-2a3e9fd24043'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('d02e1fac-6946-5687-a335-e8a89b08b50d'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('bab7a471-f3ff-55aa-9533-6455d2bf7612'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('873b72fa-0627-5c40-9316-79f33b5a0e3e'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('35a3ce2e-3e38-5edd-9538-1a4da0375bc8'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('5f2708ba-e4ca-5bf4-8b99-55fbf398c7bb'::uuid, 'e047d977-9226-5a57-8513-a44e85791cea'::uuid, 'missa', 6, '{1}'::smallint[], '08:00'::time, ''),
  ('6a02b29d-9a81-5f26-bf39-7dbe647e097d'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('39add76d-cd12-54ee-a56b-43eab9750770'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('1a66cd04-83e3-59c4-99f0-bdc9910f9809'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('34ee6db9-d1b2-5ed2-af8a-fc2bdde490b0'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('2ae95b40-8425-5988-85c0-0aac996be24e'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('a71ffc3e-82a2-5488-baec-477c626b81b3'::uuid, 'e04ffe53-c2f6-505d-9d0b-43bd59a184b8'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('6ee0ec89-9a1f-5b22-87da-491d5c8597ca'::uuid, 'e085be6b-7dad-5b64-aa84-f0ddd0bd616d'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('01d0088b-6505-5a11-97dd-408e22472065'::uuid, 'e0c6b463-976c-54ed-83e3-38595740d461'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('8fa2b871-7dde-5d1a-8e03-1d6886158d5e'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 1, null::smallint[], '07:30'::time, ''),
  ('d09be401-6274-5651-b361-cb47b68371c6'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 2, null::smallint[], '07:30'::time, ''),
  ('941871ee-dcc2-539e-86db-bbdac5293686'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 3, null::smallint[], '07:30'::time, ''),
  ('f1703f12-305e-5dc6-bbaf-05e51454d3b6'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 4, null::smallint[], '07:30'::time, ''),
  ('e85d108e-b2cf-51e3-be46-03fc308a617f'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 5, null::smallint[], '07:30'::time, ''),
  ('09a981a6-f3d0-53b9-9a6a-22006111797e'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 6, null::smallint[], '08:30'::time, ''),
  ('22e1d039-9a90-5c52-aa45-eb7b05eab4ef'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('7a8734ee-d3cb-564f-8f20-af923f0d7983'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('5318961d-a8e7-5eb1-a07e-e45be2fc99c3'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('db3bb022-cb01-5746-9c59-2cbcd2611e10'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 0, null::smallint[], '12:30'::time, ''),
  ('841bfbf9-6d5a-57fe-b6c9-959ee895d7c1'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('3a0031d9-2e86-5b23-85f9-70379e62818c'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('c804f26a-78cb-5dc9-a5a2-6e73ab3d9074'::uuid, 'e0e45179-ab8e-5f00-b646-ee965eee1393'::uuid, 'adoracao', 4, null::smallint[], '18:00'::time, ''),
  ('22110e1a-c1c7-59d3-bef9-4cb39b538f29'::uuid, 'e106ede3-03cf-5112-9927-69a4e5fc9b36'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('4a763b2d-83a6-5326-bae9-39f142b35242'::uuid, 'e106ede3-03cf-5112-9927-69a4e5fc9b36'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('7bea5f6b-0395-5661-aab6-0f9f98d26d42'::uuid, 'e106ede3-03cf-5112-9927-69a4e5fc9b36'::uuid, 'missa', 1, null::smallint[], '19:00'::time, ''),
  ('67c17d22-0255-5519-b241-ec1a4d135e8a'::uuid, 'e106ede3-03cf-5112-9927-69a4e5fc9b36'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('2a99bb93-9329-5f11-a7a6-a349013b3088'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('8d212984-f50b-548d-a71e-8894749065a9'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('3b912aa3-b631-5608-8ad8-9fd9f3b1814c'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('86fb620d-6a06-5136-8a4b-f8afcc61cdd8'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('69806594-a9d1-519f-b436-60a08d3f3ce2'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('61b1fdae-a52b-559f-83db-00aae7360ec7'::uuid, 'e135ca75-ad13-5126-9b9c-08ccb16db664'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('2fd033f6-ee37-5c4b-91ef-a558c7ad038b'::uuid, 'e14e4925-5df1-5def-bbb4-f1563d299d40'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('c1f0a68a-8ea9-56ed-a869-580a6944bcdb'::uuid, 'e165df69-70da-500f-b0fa-2f7b1b0ae01b'::uuid, 'missa', 0, '{4}'::smallint[], '17:00'::time, ''),
  ('4b353ee3-e25a-5eae-bf52-5503d6c1e737'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('992c38d7-c2d7-5e67-84df-4a6dd0e48a17'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('13510c24-4ff5-534b-8b5c-50bd2f3ace74'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c9a3a7da-9dcd-5b57-a942-b9c9d8ba31d0'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('f3674584-2599-5cc2-b9a8-81934a832dc0'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('a78a8fc5-fb2e-5fd0-b4b3-e30fa90002bc'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('e0b3e0c2-429f-539e-8c44-1d5378e0719d'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('c09c930f-0d57-5389-9695-c109a8bcbb4d'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 6, null::smallint[], '10:00'::time, 'Missa dos feirantes'),
  ('4e648e7b-c043-54ce-8e11-5a1efb5d9dc5'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 5, '{1}'::smallint[], '07:00'::time, ''),
  ('bed31905-8ac0-5a2f-9ead-7fb5f74d99e9'::uuid, 'e2ef5c1e-c067-525f-b96d-d15427742c0a'::uuid, 'missa', 4, '{3}'::smallint[], '19:00'::time, ''),
  ('cef2d42c-f318-5e5f-9169-c5d2f389880d'::uuid, 'e33661e8-fcd2-5003-8b4e-75c8e921753b'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('c280026d-9ff5-54a9-9005-7b43d91d2fa9'::uuid, 'e33661e8-fcd2-5003-8b4e-75c8e921753b'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('adb562e0-6928-5433-a9f8-476c934bab1f'::uuid, 'e33661e8-fcd2-5003-8b4e-75c8e921753b'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, 'Missa votiva ao Sagrado Coração de Jesus'),
  ('dced90c8-ae89-5e81-a200-405980c0555b'::uuid, 'e377b5c6-bfa7-56ee-9404-33bef75a3db9'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('4c967e39-61ac-5739-a85a-10af038b7cbc'::uuid, 'e377b5c6-bfa7-56ee-9404-33bef75a3db9'::uuid, 'missa', 6, null::smallint[], '19:00'::time, 'Missa de preceito dominical'),
  ('1a2212e3-ab17-5d55-9217-349c7cbe197e'::uuid, 'e477dcfa-cd9d-598e-8726-4bf327b1acca'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c8a715dc-d9d3-5ac9-888c-6b70e6dce141'::uuid, 'e477dcfa-cd9d-598e-8726-4bf327b1acca'::uuid, 'missa', 1, null::smallint[], '07:00'::time, ''),
  ('f75c8b35-be04-544f-8103-89c768fd5a57'::uuid, 'e477dcfa-cd9d-598e-8726-4bf327b1acca'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('85b31b70-7c77-5f45-9e51-7577db1ed12c'::uuid, 'e477dcfa-cd9d-598e-8726-4bf327b1acca'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('04020f85-4a23-5ee0-b74f-f46fe597f7f4'::uuid, 'e4be68cd-69e4-55c6-bfae-9cc0b8b9bb09'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('debb5d35-e493-5f81-a34c-a597d1bb550c'::uuid, 'e4c61273-ae1f-55f0-8895-c42049282992'::uuid, 'missa', 0, null::smallint[], '16:30'::time, ''),
  ('94b89d9a-1171-54f7-8f2f-89b9b936475d'::uuid, 'e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('e1892eb7-8c7b-5aa7-80e0-83cdf23075c1'::uuid, 'e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('b59526ee-4149-587b-b362-818a1be3de2c'::uuid, 'e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('5711604b-0683-5992-a30b-8c080d771111'::uuid, 'e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('b050e704-4aed-5f4f-bf6c-1674c6e2594f'::uuid, 'e6f4d246-d561-5840-9807-0bbe7e0f070f'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('eb023a99-4c61-584e-9e80-6441e3335981'::uuid, 'e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('c015d8a8-28a7-5d8e-ac37-c27ba321648b'::uuid, 'e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('4c13b646-e388-51d4-a868-932b889d4671'::uuid, 'e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('d9679706-b898-53bb-a9b9-bbd9eca96270'::uuid, 'e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('177e195e-18f6-5053-94a8-6ee17fcd004d'::uuid, 'e71305aa-4172-5a1f-bdb5-496554f1695f'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('0942f1de-205d-5d5c-8e8d-685106f3c978'::uuid, 'e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa', 0, null::smallint[], '07:30'::time, ''),
  ('eb2744bd-37c8-5e0b-9877-8448a9cc9540'::uuid, 'e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('cd9c063c-a8fe-5011-8f0d-6a26b300c395'::uuid, 'e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('bd1f03b3-8f01-501f-874f-22bc691da8e1'::uuid, 'e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('db11ef3a-6422-5cfe-9bf4-b7d375c65e7a'::uuid, 'e7e6b9ae-8f09-5d46-b948-e80706ca725a'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('f3d64a1c-8cbd-57d7-b79d-1778021808bc'::uuid, 'e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('8a48f544-eb1d-5a5d-a854-e7d21388017c'::uuid, 'e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('19db9a2f-b6ee-5032-8232-c958122eefdf'::uuid, 'e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa', 5, null::smallint[], '09:00'::time, 'Missa dos agricultores e feirantes'),
  ('3b8494a7-0a27-55fd-92fe-c45ab707de10'::uuid, 'e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa', 6, null::smallint[], '06:30'::time, ''),
  ('18ebc448-a085-5998-80c1-1833df555786'::uuid, 'e8fcca3d-03f2-51b4-aeb3-025882289d91'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, 'Missa do Sagrado Coração de Jesus'),
  ('3fe0407c-087c-5ea9-989c-92dcfa5b034e'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('5858ccd9-d922-528e-8560-39cfd4d0710c'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('12a26ff4-6847-523a-96a7-95eab22a443b'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('bd2e5fa9-5a10-55e7-8e18-673ad9af87e2'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('a71e02e2-db3e-5030-baf3-4a9cc5669371'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('a246bd62-2910-5c18-b877-84e42a2617de'::uuid, 'e8fdfdff-b2aa-5896-941c-e3d963586758'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('09cdaf73-98a6-5778-b932-730005f8cb69'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('3b54fbd3-0fa7-51e8-8b14-ab05f0cb082c'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('e1ad1791-c180-52e4-a4ea-b9046cd15e7e'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('bada4a65-8777-5c2c-844a-0a599a352eab'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('ecba87f4-9ffc-5327-bb92-8549908051a4'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('7d107895-3a69-54e7-8a23-a70b32191979'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('88288e4c-f2cf-545f-a8c4-e535d6d5fa08'::uuid, 'ea8cb252-3da9-5b19-8d23-358decc8916b'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('511088a2-67f0-5f24-87e1-74a8036bac85'::uuid, 'eac44832-2354-54d1-955f-2c8c789ee42d'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('0fb0b393-ba14-58a8-a834-5f347b8b1a70'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 2, null::smallint[], '18:00'::time, ''),
  ('ec2453aa-50bb-5dfe-b061-bf8cfb9122d6'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('ecab25ca-6db5-5c7a-a6f2-83d8d7ceb607'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 4, null::smallint[], '18:00'::time, ''),
  ('1cf87f75-145f-5f5b-9684-f3a91ac00918'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 5, null::smallint[], '18:00'::time, ''),
  ('a4033fcc-d975-53fd-897e-f96fc6599706'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('7778b544-26c3-59e2-a674-51f8ad7f1e02'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('d6f59540-5e01-5cf9-b6c1-5c0b3ecc9631'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('f1a32576-b103-567d-9911-d50bc26138af'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'confissao', 2, null::smallint[], '15:00'::time, 'Até 17h40'),
  ('5a9f2a71-664f-59c8-b49f-de6456bf3ea6'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'confissao', 3, null::smallint[], '15:00'::time, 'Até 17h40'),
  ('fd382c99-f07e-5dbd-b0aa-a10a3ad3681f'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'confissao', 5, null::smallint[], '15:00'::time, 'Até 17h40'),
  ('4ecf0820-3b4b-5832-ac0b-209f4a8abbd4'::uuid, 'eb6e0a83-5d23-528c-91f2-8c600929b68e'::uuid, 'confissao', 4, null::smallint[], '19:30'::time, 'Até 21h'),
  ('eb66a93f-a688-5147-9fed-2e14d05eeb7e'::uuid, 'ebf4e534-aa47-58e3-bf79-3aaf233924e9'::uuid, 'missa', 6, '{3}'::smallint[], '18:30'::time, ''),
  ('f9bdc079-c197-5108-a3ba-bfc01203355d'::uuid, 'ec6c077c-aa31-567c-93c8-df8e6e8ab636'::uuid, 'missa', 0, '{2}'::smallint[], '17:00'::time, ''),
  ('6910f59b-4f3b-5efd-8421-00104bed6140'::uuid, 'eca87ff1-2f61-5184-88e2-235653141d00'::uuid, 'missa', 3, '{2,4}'::smallint[], '19:00'::time, ''),
  ('e2f7c697-63a1-57d3-a842-83cf01697895'::uuid, 'eccdaa70-6d82-5247-8bf1-b4712f768b65'::uuid, 'missa', 0, null::smallint[], '09:30'::time, ''),
  ('ed1dd33a-8d1b-5fb0-9bbc-e58b6499face'::uuid, 'ecf212a0-cafb-5cfe-bde9-44c3e653fc95'::uuid, 'missa', 6, null::smallint[], '17:00'::time, ''),
  ('df6d63fd-d4ac-54d1-b25b-fbca8252b873'::uuid, 'ed72df49-283e-5bac-86bc-2e92f299f866'::uuid, 'missa', 6, null::smallint[], '18:00'::time, ''),
  ('fc6dabd1-a4f5-55ba-928f-398fcf628b77'::uuid, 'ede1a8f3-6a14-505d-b391-01208948c13c'::uuid, 'missa', 0, null::smallint[], '18:30'::time, ''),
  ('5da6a0b4-b490-5a06-b353-174a9c6005be'::uuid, 'edf97cbc-8bc2-593c-af07-40b757d93460'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('3118b3f6-c41b-5ad0-920e-c227ff60fb5e'::uuid, 'eea3d42a-94b5-5929-944d-59bc317364af'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('bc1c221a-3a4f-5826-917d-2c5912e956ea'::uuid, 'ef4891c6-ed39-530d-a4cd-5f1cf6967cba'::uuid, 'missa', 2, null::smallint[], '07:00'::time, ''),
  ('490eac71-51fb-5b9a-bb04-0e7c39d6061e'::uuid, 'ef4891c6-ed39-530d-a4cd-5f1cf6967cba'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('e1a5f5dc-76eb-5ecf-8758-30dbb1e359d8'::uuid, 'ef4891c6-ed39-530d-a4cd-5f1cf6967cba'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('6be4bbec-7bd3-5a4b-977c-a9fefe1d8677'::uuid, 'ef4891c6-ed39-530d-a4cd-5f1cf6967cba'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('5fbc999c-f765-52e1-9500-decbc6c2a97c'::uuid, 'f05d6ee0-2996-59ec-aa8a-29251ef591ba'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('48a3b687-abf9-5d97-9af4-4c6503d48f64'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 1, null::smallint[], '17:30'::time, ''),
  ('0878fbb9-9d11-5542-b08e-2b6308f5c19b'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 2, null::smallint[], '17:30'::time, ''),
  ('55403fcb-3c07-5b7a-bb47-acbd001ca172'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 3, null::smallint[], '17:30'::time, ''),
  ('75cd645c-da43-5348-b2b2-cc8e9421e4b8'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 4, null::smallint[], '17:30'::time, ''),
  ('c1b498d0-98cb-57b6-936b-e8d02200a395'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 5, null::smallint[], '17:30'::time, ''),
  ('7a645db4-bb6b-550d-a432-af018e66c84c'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('e1076b4e-043b-59ef-9fb1-796e41dce30d'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 0, null::smallint[], '11:00'::time, ''),
  ('ab84995e-eec5-5f10-812d-579d4f46810d'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('d5bab4af-05ee-55ae-b8fc-1a88f8652d79'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('00e728d1-51d2-55f4-b6a6-868234b33d86'::uuid, 'f13b159e-078b-5f44-89c4-2ebd0ddd72b5'::uuid, 'missa', 0, '{6}'::smallint[], '09:30'::time, 'Missa das crianças'),
  ('f986df5f-81fd-5086-b3f5-21e10f91e8b4'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('d3144606-18ce-515e-ac13-4aac1daec88e'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('aabdc928-eef2-5f0d-af4a-3a19f3c6874b'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('c64d2fba-b05a-5784-a901-e7608c19b7a5'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('dad40155-8503-55ac-b910-321b1bbd729f'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 6, null::smallint[], '19:30'::time, ''),
  ('d1d8c676-b111-5c2d-9c93-92719494eafb'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('f7c9d84f-5453-5002-8708-8de59f23afb5'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('16af9faa-ed36-57f2-8c9b-40a6dbf9a3fc'::uuid, 'f17fbccc-589f-5580-b75b-bc09ccada35f'::uuid, 'missa', 0, null::smallint[], '18:00'::time, ''),
  ('2768a753-5e09-50b3-8b47-c7ede1062fd2'::uuid, 'f280dcb0-4ff5-5df5-ac27-dcf9b2a47228'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('f8c0d8a0-a92c-519d-8431-fbf41468b8c2'::uuid, 'f2c8432c-3e3c-5eea-8394-80ce513e0dc1'::uuid, 'missa', 0, '{2}'::smallint[], '09:00'::time, ''),
  ('41658b52-adf8-5b82-afbe-1f56c8a8535b'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('38924c25-30d7-54d7-8602-aa636e980c0c'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('2498f7ee-a9c2-5426-b5f9-05d587366a75'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 1, null::smallint[], '16:30'::time, ''),
  ('dbade24f-f4df-5041-9456-eb82ed0caf46'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 3, null::smallint[], '16:30'::time, ''),
  ('e8f67d53-6571-5397-b7e4-9e9e2c3eed4f'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 4, null::smallint[], '16:30'::time, ''),
  ('1daa35ac-2330-55f4-a566-27a05b72c6f8'::uuid, 'f2df9f96-1efe-5d32-b19c-89aa262eb36c'::uuid, 'missa', 5, null::smallint[], '16:30'::time, ''),
  ('f3c3d8a8-91f7-5290-a4ba-55a9b0ad2ef3'::uuid, 'f327e5a8-dbaf-5530-a92f-887818ce87fa'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('f77bfc62-8617-5573-be25-11cc42ecfe57'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 2, null::smallint[], '17:00'::time, ''),
  ('a01d01d5-2fc7-5198-8cac-c4e24eb63105'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 3, null::smallint[], '17:00'::time, ''),
  ('11e4b98f-cf6f-5ade-8894-a9be60906a23'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 4, null::smallint[], '17:00'::time, ''),
  ('2495e2d7-e00d-5b8e-a181-2b9a966fdd9c'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 5, null::smallint[], '17:00'::time, ''),
  ('b912dca1-b5ae-52b0-a322-b028f3d30998'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('18aa6f53-f830-56b4-b1ff-b83b36953f22'::uuid, 'f342db39-28d1-577e-833c-70adde2ee46b'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a8c98336-ce07-50e4-99df-eaeb0992b536'::uuid, 'f342f2a3-5278-511c-9c53-440fc4c54ea6'::uuid, 'missa', 3, null::smallint[], '18:00'::time, ''),
  ('a40c46e2-3c8a-5e7a-b8fe-89c0871bb526'::uuid, 'f3cc3796-c949-547b-9b36-32a1a95ed35c'::uuid, 'missa', 6, null::smallint[], '16:00'::time, ''),
  ('e020e46e-22f2-5250-b361-11c5a0c2fa2a'::uuid, 'f3cc3796-c949-547b-9b36-32a1a95ed35c'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('56d28ebf-295d-5556-b894-78fb5fce2d92'::uuid, 'f4bf156a-dc0d-5bc1-8484-c0da37717511'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('fa0e5c7d-3376-5d88-8f3d-d4758ef53b9d'::uuid, 'f4bf156a-dc0d-5bc1-8484-c0da37717511'::uuid, 'missa', 5, '{1}'::smallint[], '19:00'::time, ''),
  ('f8055d59-719d-576f-bf74-79884683bcbe'::uuid, 'f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('e0dfe3bc-380e-5658-aeb5-0f5f02725a2c'::uuid, 'f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('461f05bc-a3c2-54a1-93d6-773aad236f13'::uuid, 'f5b07e62-8289-50a9-a3fa-8cf4a1dfa57b'::uuid, 'missa', 3, null::smallint[], '19:00'::time, 'Missa para os homens'),
  ('46d08553-4fee-56ff-b5ce-4e3ce731547f'::uuid, 'f5df4c51-1a55-5a3a-a78e-6a983df7fc3f'::uuid, 'missa', 0, null::smallint[], '09:00'::time, ''),
  ('c71a3d4c-32ee-5a21-b9fe-f907bf7c3bfe'::uuid, 'f7262858-1801-5b28-9491-c8c93518aa77'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('483d2a2a-6357-5cb8-ba36-1488fe3e747b'::uuid, 'f7262858-1801-5b28-9491-c8c93518aa77'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('4b3017ce-32f7-54ed-8e36-e5e732e6a840'::uuid, 'f7262858-1801-5b28-9491-c8c93518aa77'::uuid, 'missa', 6, null::smallint[], '06:30'::time, ''),
  ('663f4ff4-85e0-586f-89f4-6816a2aa6754'::uuid, 'f73d751b-025c-518f-b9d8-70bf3586e640'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('ebc14bcf-99ad-50c8-832c-07b8e7792944'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('99358214-1c78-5f91-8436-4da073fbd2b1'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('c8522322-2596-56f5-afef-829acc53935b'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 2, null::smallint[], '19:00'::time, ''),
  ('8d08bea0-591e-5b8f-9f13-103c72954b07'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 3, null::smallint[], '19:00'::time, ''),
  ('18e709e0-e5bc-54fe-9b94-2ee461a567be'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('049e1313-f3e7-51a6-8649-9e23ace950e6'::uuid, 'f98a2b5e-3e14-5f06-a277-d5fc77879495'::uuid, 'missa', 6, null::smallint[], '07:00'::time, ''),
  ('a5f001f6-867e-5935-9979-b2ce6730a259'::uuid, 'f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('85f4481d-9f6a-5d49-9924-fd28e38437c7'::uuid, 'f9f2adf2-b92e-5eb3-9b0d-67d92866ef1b'::uuid, 'missa', 0, null::smallint[], '08:00'::time, ''),
  ('a387cd4d-6681-5b1e-af85-da30b2deee2b'::uuid, 'faca2d7c-a29a-5391-9430-d64df7dd1cbd'::uuid, 'missa', 0, null::smallint[], '06:30'::time, ''),
  ('29d257c2-0a8f-58ce-b68b-7fd048064788'::uuid, 'faca2d7c-a29a-5391-9430-d64df7dd1cbd'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('53871415-a143-50c4-8c3b-fddeb1a5a51d'::uuid, 'faca2d7c-a29a-5391-9430-d64df7dd1cbd'::uuid, 'missa', 5, null::smallint[], '19:00'::time, ''),
  ('6a692fbb-2e7b-571a-8058-f0f38d708a35'::uuid, 'fb5336f4-b216-5208-9a1b-8a33c8263ce2'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('1f748266-826f-5b7d-8080-dbd4665c15b0'::uuid, 'fb5336f4-b216-5208-9a1b-8a33c8263ce2'::uuid, 'missa', 4, '{1}'::smallint[], '19:00'::time, 'Missa votiva a São Miguel Arcanjo'),
  ('ae195e44-62b3-51af-86a6-db7ea5a9c833'::uuid, 'fb5b2c37-0526-539b-923a-e92e58348618'::uuid, 'missa', 0, null::smallint[], '17:00'::time, ''),
  ('223cd24a-98a9-5e75-b189-fce9a29b5417'::uuid, 'fb91e90b-b33d-54b8-871b-f6638fe91f6b'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('1e07509b-3cb4-538d-a389-b6ae7b3bbde4'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 2, null::smallint[], '07:00'::time, ''),
  ('05e0de2a-2eba-573c-ae43-91413a84e590'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 3, null::smallint[], '07:00'::time, ''),
  ('487b04c9-bdca-5079-afe8-6d81e4d0ed3d'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 4, null::smallint[], '07:00'::time, ''),
  ('61f6949a-936c-5b74-821f-50aff2a6e32d'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 5, null::smallint[], '07:00'::time, ''),
  ('cd88640d-2c3e-525e-8861-2fed11b66c49'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('cd12b4a8-c084-5eb3-a37b-5e6610931ae9'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'missa', 0, null::smallint[], '19:30'::time, ''),
  ('1fa176b7-6ad9-53b4-8d39-cbc816af7d2d'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'confissao', 3, null::smallint[], '09:00'::time, 'Confissões até 11h30'),
  ('603e1310-d0fc-5c17-a5b9-9b401789e3db'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'confissao', 4, null::smallint[], '09:00'::time, 'Confissões até 11h30'),
  ('58137058-c848-57b7-bf58-3ba5c5d53aa0'::uuid, 'fcdd864e-f767-5197-840f-bb394d14a874'::uuid, 'confissao', 5, null::smallint[], '09:00'::time, 'Confissões até 11h30'),
  ('db02bcf8-bfef-56ae-b1f4-c47eab781af6'::uuid, 'fcf44e50-a20c-5125-80db-0ebf4c2597fd'::uuid, 'missa', 6, null::smallint[], '17:30'::time, ''),
  ('1ee66333-ed4a-503a-be05-14be2c742869'::uuid, 'fcf44e50-a20c-5125-80db-0ebf4c2597fd'::uuid, 'missa', 5, '{1}'::smallint[], '17:00'::time, ''),
  ('c2d89da1-96b8-5391-9bd8-7104e32c683f'::uuid, 'fd7e5b67-332b-5b7d-aa6e-7d9b1e823d75'::uuid, 'missa', 0, null::smallint[], '16:00'::time, ''),
  ('fdb42e7a-c6f2-5191-a0b7-ee9bb5a9ff73'::uuid, 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'missa', 0, null::smallint[], '10:00'::time, ''),
  ('2e5cd300-67c0-5bc0-8a05-d5a138f1bf1f'::uuid, 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('044778fd-6fa6-58fd-88c2-93cad211a9dc'::uuid, 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'adoracao', 4, null::smallint[], '15:00'::time, ''),
  ('e9eaf49a-a772-597e-8160-6f07f2bd037a'::uuid, 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'confissao', 4, null::smallint[], '15:00'::time, ''),
  ('7cfd2a38-ad4d-55c2-bc45-fbc200ea8518'::uuid, 'fdd22a10-60e3-54ae-b742-119fa5ffb51f'::uuid, 'missa', 4, null::smallint[], '19:00'::time, ''),
  ('65127b22-0e55-5f27-93a0-bd7ba8f8350b'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 0, null::smallint[], '07:00'::time, ''),
  ('8245ed39-13ba-5776-a8ad-5253db72f0bd'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('a20ea058-8d05-5a0f-b9fe-3135e909d2c0'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 1, null::smallint[], '09:00'::time, 'Missa do Agricultor'),
  ('b188af2f-6adc-5cd2-93e9-2e95695bd667'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 3, null::smallint[], '06:15'::time, ''),
  ('ea2d5665-efdc-579c-92c4-5ffdcd476728'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 4, null::smallint[], '06:15'::time, ''),
  ('48eb7c1a-7078-5f36-89f0-e5383891ba71'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 5, null::smallint[], '06:15'::time, ''),
  ('88e78bc9-f06d-522a-8bfa-40847c3f7b4b'::uuid, 'fed684d6-b533-5a0d-ade7-90a57478ecd6'::uuid, 'missa', 6, null::smallint[], '19:00'::time, ''),
  ('86875b11-806a-56e7-ab6d-4c52c84bb8b7'::uuid, 'ffe5a3a6-7b1d-55a7-84d0-d0be8639355a'::uuid, 'missa', 0, null::smallint[], '19:00'::time, ''),
  ('d20f8860-00b5-5416-9535-e8ea2c4ef4ea'::uuid, 'ffe5a3a6-7b1d-55a7-84d0-d0be8639355a'::uuid, 'missa', 4, null::smallint[], '19:00'::time, '')
) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)
join public.paroquias p on p.id = v.paroquia_id and not p.verificada and p.conferida_em is null
on conflict (id) do nothing;
