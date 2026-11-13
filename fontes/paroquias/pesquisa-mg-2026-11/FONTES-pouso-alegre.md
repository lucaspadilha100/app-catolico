# Arquidiocese de Pouso Alegre (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Pouso Alegre, sul de Minas; sufragâneas: Campanha e
Guaxupé. Arcebispo: Dom José Luiz Majella Delgado, C.Ss.R. Site:
https://arquidiocesepa.org.br/ (WordPress, API em /wp-json/wp/v2/).

## Resumo

- **70 unidades** em `saida/pouso-alegre.json`: 1 catedral (Catedral
  Metropolitana Bom Jesus), 1 basílica (Nossa Senhora do Carmo, Borda da
  Mata, que entrou como `basilica` com o nome oficial da paróquia) e 68
  paróquias. Oito paróquias têm a matriz santuário e entraram como
  `paroquia` com a primeira igreja de tipo `santuario`: Bom Jesus (Córrego
  do Bom Jesus), Santa Rita de Cássia (Extrema), Medalha Milagrosa (Monte
  Sião), São Francisco de Paula e N. S. de Fátima (Ouro Fino), Imaculado
  Coração de Maria (Pouso Alegre), Santa Rita de Cássia (Santa Rita de
  Caldas e Santa Rita do Sapucaí) e Sagrada Família (Itajubá, matriz no
  Santuário N. S. da Piedade).
- **Só 2 com horário**, ambas com confiança média (sites das próprias
  paróquias, sem data de atualização):
  - N. S. da Soledade (Itajubá): matriz e 9 comunidades, com missas,
    confissões e adoração (https://soledadeitajuba.com.br/, páginas
    `?conteudo=missasehorarios` e `?conteudo=paroquia&id=N`).
  - São Francisco de Paula (Poço Fundo): matriz e 4 igrejas
    (https://paroquiadepocofundo.org.br/).
- **68 sem horário** (`horarios: []`, confiança baixa): a arquidiocese
  publica para cada paróquia só criação, abrangência, clero, endereço,
  telefone e e-mail. Nenhuma página de paróquia ou santuário do site traz
  horário de missa. Lista em `SEM-HORARIO-pouso-alegre.txt`.
- Todo `id_banco` é null.

## Lista das unidades

Fonte da lista: a página "Paróquias" do site
(https://arquidiocesepa.org.br/arquidiocese/paroquias/, atualizada em
03/11/2026), que traz as 70 paróquias com criação, abrangência, clero,
endereço, telefone e e-mail (e-mails protegidos pelo Cloudflare,
decodificados do `data-cfemail`). Cada paróquia tem também página própria
em `/arquidiocese/paroquias/<slug>/`, com o mesmo conteúdo.

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/pous0.htm
e https://gcatholic.org/churches/local/pous0, atualizado em 09/11/2026):
o GCatholic lista 69 paróquias, catedral e basílica; a única que falta lá é
a **Paróquia São Sebastião de Pouso Alegre** (Cidade Jardim), instalada em
21/01/2023 (notícia https://arquidiocesepa.org.br/paroquia-sao-sebastiao-e-instalada-e-seu-1o-paroco-recebe-posse/).
A estatística do GCatholic (31/12/2022) diz 69 paróquias, o que bate.
Entradas do GCatholic que não são unidade: Seminário Arquidiocesano N. S.
Auxiliadora, Santuário N. S. Aparecida (Brazópolis) e Santuário N. S. da
Agonia (Itajubá).

Os dois santuários sem paróquia entraram como igreja de tipo `santuario`
dentro da paróquia cujo pároco é o reitor (o site da arquidiocese diz o
reitor de cada um):
- Santuário N. S. Aparecida (Praça N. S. Aparecida, Brazópolis): reitor
  Pe. Lucimar Pereira Goulart, pároco de São Caetano e Sant'Ana.
- Santuário N. S. da Agonia (Av. N. S. da Agonia, Itajubá): reitor Pe.
  Rodrigo Carneiro Paiva Mendes, pároco de N. S. das Graças (Itajubá).
  A ligação com a paróquia não está escrita na fonte; está na observação.

Distritos (escritos pela arquidiocese): N. S. da Piedade em Crisólia
(Ouro Fino), São Francisco de Assis em Monte Verde (Camanducaia), São José
em São José do Pantano (Pouso Alegre, abrange também Sertãozinho, de Borda
da Mata, e Pantano dos Rosas, de Estiva).

## Setores pastorais

A página https://arquidiocesepa.org.br/pastoral/setores-pastorais/ dá 9
setores (Alto da Serra, Dourado, Extremo Sul, Fernão Dias, Mandu,
Mantiqueira, Mogi, Paraíso, Sapucaí), mas só três têm página com as
paróquias: Mandu (https://arquidiocesepa.org.br/setor-pastoral-mandu/),
Mantiqueira (https://arquidiocesepa.org.br/mantiqueira/) e Alto da Serra
(https://arquidiocesepa.org.br/altodaserra/). A observação de cada unidade
traz o setor quando ele está numa dessas páginas; nas demais diz "Setor
pastoral não indicado no site da arquidiocese". As paróquias Santo
Antônio, São Francisco e Santa Clara e São Sebastião, de Pouso Alegre, não
aparecem na página do Setor Mandu.

## Capelas e comunidades

- N. S. da Soledade (Itajubá): 9 comunidades com bairro e horário, do site
  da paróquia. Os contatos de coordenadores (celulares pessoais) ficaram
  de fora.
- Sagrada Família (Itajubá): 9 comunidades com bairro
  (https://www.sagradafamiliaitajuba.org.br/comunidades.html). Ficou de
  fora São João Paulo II, sem bairro na fonte.
- N. S. do Carmo (Cambuí): 6 comunidades com lugar
  (https://www.16dejulho.com.br/comunidades.php). Ficaram de fora as que a
  página lista só pelo nome: Santo Antônio, Divino Espírito Santo, São
  Pedro, São Benedito, São Judas, Mãe Rainha, São Miguel e Javé Nissi.
- São Francisco de Paula (Poço Fundo): 4 igrejas com horário, sem bairro.
  A Igreja Santa Rita aparece no site sem horário e ficou de fora.

## Sites de paróquia citados pela arquidiocese

- Abriram: soledadeitajuba.com.br (horários), paroquiadepocofundo.org.br
  (horários), sagradafamiliaitajuba.org.br (comunidades; o calendário de
  missas é um Google Agenda sem eventos depois de 2020),
  16dejulho.com.br (Cambuí; a página de horários diz "EM BREVE"),
  webradio13demaio.com (página vazia).
- Não abriram nesta sessão (DNS não resolve, certificado incompleto ou o
  proxy devolve 502): paroquiadeandradas.com.br, santuariodamedalha.org.br,
  santuariodepousoalegre.com.br, nsagonia.com.br, santuariodesantarita.com.br,
  santuariobomjesusmg.com.br, santuariopiedadeitajuba.com.br,
  santuariosantaritadeextrema.org. O canva.site da Paróquia Santo Antônio
  (Pouso Alegre) devolve 404.

## Dificuldades e o que falta

- Horários de 68 paróquias: a arquidiocese não publica, e esta sessão não
  tinha busca na web. A próxima rodada precisa dos perfis de Instagram, que
  o site da arquidiocese não cita (só Cambuí, `paroquia_nsc_cambui`, e Poço
  Fundo, `paroquia_poco_fundo`, vieram dos sites das paróquias).
- Os sites que não abriram (acima) podem ter horário: tentar de novo.
- Setor pastoral de 43 paróquias.
- Telefone: ficou o primeiro número publicado (fixo da secretaria); os
  celulares listados sem a palavra WhatsApp não entraram como `whatsapp`.
- Na página da Catedral o telefone vem sem DDD (3423-4361); entrou com 35.
