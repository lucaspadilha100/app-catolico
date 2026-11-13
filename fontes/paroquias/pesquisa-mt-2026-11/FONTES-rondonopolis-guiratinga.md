# Diocese de Rondonópolis-Guiratinga (MT): fontes da pesquisa de 13/11/2026

Sé em Rondonópolis (Catedral Santa Cruz) e cocatedral em Guiratinga (São
João Batista); sul de Mato Grosso. Bispo: Dom Maurício da Silva Jardim.
Cúria: Avenida Frei Servácio, 393, Bairro La Salle, Rondonópolis, CEP
78710-004, (66) 3426-6757 e (66) 99908-6777,
secretariadacuria@dioceseroogga.org.br (rodapé do site da diocese).
Padroeiros diocesanos: Sagrado Coração de Jesus e São João Batista.

## Resumo

- **22 unidades pastorais** em `saida/rondonopolis-guiratinga.json`: 1
  catedral, 1 cocatedral (entrou como `catedral`) e 20 paróquias, em 5
  foranias (Nossa Senhora Aparecida, Nossa Senhora Auxiliadora, Sagrado
  Coração de Jesus, São João Batista e São Lourenço). Cidades: Rondonópolis
  (10), Juscimeira (2, uma delas no distrito de São Lourenço de Fátima) e uma
  em cada: Jaciara, Dom Aquino, Pedra Preta, São José do Povo, Guiratinga,
  Tesouro, Itiquira, Alto Garças, Alto Taquari e Alto Araguaia.
- **22 com horário de missa** (21 com confiança alta, 1 média). Todos vêm do
  site da diocese, que tem uma página "Horários de Missas" (quadro por
  paróquia, atualizada em 18/06/2025) e uma página por paróquia com o mesmo
  quadro, ano de criação, telefone, e-mail, expediente e endereço.
- A de confiança média é a **Paróquia Bom Pastor**: a página dela traz, no
  texto da própria paróquia, missas diárias às 18h30 na matriz e a agenda de
  seis comunidades, mas o quadro padronizado da mesma página diz domingo 7h,
  9h30 e 18h e segunda a sábado 6h. O JSON segue o texto da paróquia (mais
  detalhado, com adoração e confissões de segunda a sexta, 16h às 18h) e
  registra a divergência.
- Capelas e comunidades: nenhuma entrou como igreja própria. Só a Bom Pastor
  dá horários de comunidades, e sem bairro; ficaram no `nao_cabe` da matriz.
  A página da Catedral cita comunidades (Santa Luzia, Santos Reis, São Lucas,
  Divino Espírito Santo, Nossa Senhora Auxiliadora, Santíssima Trindade) em
  texto histórico, sem bairro e sem horário: ficam como pendência.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo `paroquia` da API do site
(`/wp-json/wp/v2/paroquia`, 22 registros) e da taxonomia `local_paroquia`
(as 5 foranias, com 4, 5, 5, 5 e 3 paróquias). Bate com o GCatholic
(22 igrejas, atualizado em 09/11/2026) e com a CNBB Regional Oeste 2
("Paróquias: 21", contagem antiga, sem a cocatedral ou sem a mais nova).

Nomes repetidos, distinguidos pela cidade: São Sebastião (Alto Garças e Dom
Aquino), Santa Terezinha do Menino Jesus (Tesouro e Rondonópolis), São João
Batista (cocatedral de Guiratinga) e Paróquia Salesiana São João Batista
(Rondonópolis). A diocese chama "Paróquia São José do Povo" a de São José do
Povo (cidade); o titular é São José (GCatholic).

## Páginas do site da diocese (lidas em 13/11/2026)

O endereço antigo `diocesederondonopolis.org.br` redireciona para
https://dioceseroogga.org.br/.

- https://dioceseroogga.org.br/horarios-de-missas/ (quadro de horários de
  todas as paróquias, na mesma ordem da API)
- https://dioceseroogga.org.br/wp-json/wp/v2/paroquia e
  https://dioceseroogga.org.br/wp-json/wp/v2/local_paroquia (lista e foranias)
- Uma página por paróquia, `https://dioceseroogga.org.br/paroquia/<slug>/`
  (as URLs estão no campo `fontes` de cada item). E-mails protegidos pelo
  Cloudflare decodificados do `data-cfemail`.

## Contatos

- Telefone: o fixo quando a página dá fixo e celular; só o celular quando
  é o único (São José Esposo, São Domingos Sávio, São João Bosco, Nossa
  Senhora de Fátima, São José do Povo, cocatedral, Itiquira). São números
  da secretaria, como publicados.
- E-mails deixados de fora: o da São Domingos Sávio (publicado incompleto,
  `paroquia.s.domingossavio@hotmail`) e o da Salesiana São João Batista
  (`paroco.roo@...`, caixa do pároco).
- Tesouro não tem telefone publicado.
- Instagram: as páginas só trazem o perfil da diocese (`diocesederoogga`);
  nenhum perfil de paróquia entrou.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/rond0.htm e
  https://gcatholic.org/churches/local/rond0 (09/11/2026)
- https://cnbbo2.org.br/diocese-de-rondonopolis-guiratinga/

## O que falta para o próximo estado desta pesquisa

- Horários de confissão (só a Bom Pastor publica).
- As comunidades de cada paróquia (a CNBB fala em 370 comunidades na
  diocese; o site não as lista).
- Resolver a divergência de horários da Paróquia Bom Pastor com a secretaria.
- Perfis de Instagram das paróquias.
