-- Pedido do dono (13/11/2026): nome simples ("Igreja de ..."), rótulo verdadeiro.
-- As áreas pastorais, áreas missionárias e quase-paróquias do RN voltam ao tipo
-- que a diocese declara (a página da igreja mostra o rótulo no subtítulo), e o
-- nome deixa de carregar a categoria.

update public.paroquias set nome = 'Igreja de São Pedro e Santa Luzia', tipo = 'area_pastoral' where id = '12914539-10ad-5cc6-8823-33bddad7019a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Lucrécia e Frutuoso Gomes', tipo = 'area_missionaria' where id = '13af422a-a5b4-5e8b-abb1-efeedf349ba1' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora dos Navegantes', tipo = 'area_pastoral' where id = '141b41b5-36d8-5228-af22-ea109ee76d95' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Santa Luzia e Nossa Senhora de Fátima', tipo = 'area_missionaria' where id = '2333ae04-376b-59d7-91e6-2750738c8b77' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora Aparecida', tipo = 'area_pastoral' where id = '2452d2e5-4069-56f7-b2e6-f92755954be6' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Santa Teresinha e Nossa Senhora das Graças', tipo = 'area_missionaria' where id = '24c7e598-f44b-5054-9f0c-7a4a4c18c7dc' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora do Perpétuo Socorro', tipo = 'area_pastoral' where id = '32cf94c2-b824-58ed-98db-fde298700993' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de São José e Nossa Senhora do Perpétuo Socorro', tipo = 'area_missionaria' where id = '48454693-2f24-57b3-b774-b2b9831ae94f' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja São João Paulo II', tipo = 'quase_paroquia' where id = '6400902b-7578-5b46-be6d-6097dd87876e' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora das Graças', tipo = 'area_missionaria' where id = '7c18cb79-5a16-57d9-911b-f1f2d0e08319' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja Nossa Senhora do Carmo', tipo = 'area_missionaria' where id = '8916f275-4daf-51d0-bec0-5e1c9d79e265' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja da Sagrada Família', tipo = 'area_missionaria' where id = '8a8acdbd-3c1c-5d01-b621-44857d2dcc3b' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora do Sagrado Coração', tipo = 'quase_paroquia' where id = 'b4d6a69d-81d3-50cc-9d83-b5d27124e65e' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja do Sagrado Coração de Jesus', tipo = 'area_pastoral' where id = 'd100ef5d-ce18-517b-8970-76e1f576579a' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de São Sebastião', tipo = 'area_pastoral' where id = 'd47e935c-c37d-5724-a93a-ca626f7939a5' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de São Sebastião', tipo = 'area_pastoral' where id = 'dd414025-9ec4-5d69-86e9-730a0f433a90' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora das Dores', tipo = 'area_pastoral' where id = 'f0c1b0ae-fabf-5cd0-9c97-83e90a3570db' and not verificada and conferida_em is null;
update public.paroquias set nome = 'Igreja de Nossa Senhora do Perpétuo Socorro', tipo = 'area_missionaria' where id = 'fe92b393-6c51-5860-bc91-6b1166d819eb' and not verificada and conferida_em is null;
