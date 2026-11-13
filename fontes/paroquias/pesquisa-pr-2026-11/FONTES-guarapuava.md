# Diocese de Guarapuava (PR): fontes da pesquisa de 13/11/2026

Sé em Guarapuava; centro-sul do Paraná. Bispo: Dom Amilton Manoel da Silva,
CP. Cúria: Rua Wilson Luiz Silvério Martins, 243, Bairro Santana,
Guarapuava, (42) 3623-5984, contato@diopuava.org. Padroeira diocesana: Nossa
Senhora de Belém. Site: https://diopuava.org (o endereço do GCatholic,
diopuava.org.br, redireciona para ele).

## Resumo

- **48 unidades** em `saida/guarapuava.json`: 1 catedral e 47 paróquias, em
  4 decanatos (Centro 14, Pinhão 11, Pitanga 14, Laranjeiras 9), anotados na
  observação de cada unidade. Guarapuava tem 16 (contando Entre Rios,
  Palmeirinha e Guará, que são distritos); Pitanga e Manoel Ribas têm 2; as
  demais cidades, 1.
- **48 com horário de missa.**
  - 12 com confiança alta: a página da paróquia no site da diocese
    (modificada em 08/2026) tem o quadro "Celebrações".
  - 36 com confiança média: horário da página "Horários de Missas" da
    diocese (modificada em 26/12/2025), o primeiro quadro, por decanato e
    cidade. A página da paróquia não traz horário.
  - Na Catedral, na Sant'Ana de Guarapuava e na Santo Antônio de Manoel Ribas
    a confiança ficou média por divergência (ver abaixo).
- `SEM-HORARIO-guarapuava.txt` está vazio: nenhuma paróquia ficou sem horário.
- Igrejas além da matriz: 148, das quais 3 santuários (Santuário Diocesano
  N. S. de Belém, a "Catedral Velha", ao lado da Catedral; Santuário N. S.
  Aparecida de Laranjeiras do Sul, comunidade da Sant'Ana de lá, com
  endereço; Santuário N. S. Aparecida do Passo da Reserva, que usa o telefone
  da paróquia de Reserva do Iguaçu) e as comunidades que as páginas listam
  com lugar: N. S. de Fátima (14), Sant'Ana de Laranjeiras do Sul (40),
  Santo Antônio de Rio Bonito do Iguaçu (38), N. S. do Rosário de Rosário do
  Ivaí (18), São Pedro de Laranjal (15), São José do Guará (8), São Miguel de
  Entre Rios (10, só com o nome do lugar), Bom Jesus (1) e Sant'Ana de
  Guarapuava (1).
- Três paróquias têm o santuário como sede e entraram com a primeira igreja
  de tipo `santuario`: N. S. Aparecida (Guarapuava), N. S. da Salete (Barra
  Santa Salete, Manoel Ribas) e São João Batista de Prudentópolis (a sede é
  o Santuário N. S. das Graças, mesmo endereço e telefones).
- Todo `id_banco` é null.

## Fora do JSON, de propósito

- As 5 paróquias de rito ucraniano que o site lista entre as da diocese
  (Assunção de N. S. em Guarapuava, São José em Cantagalo, São Josafat e a
  Catedral Imaculada Conceição em Prudentópolis, N. S. da Glória em Pitanga):
  são da Igreja Católica Ucraniana (a Catedral de Prudentópolis é a sede da
  Eparquia N. S. Imaculada Conceição), fora da diocese latina.
- Santuário da Divina e Trina Ternura (BR-277) e Santuário de Schoenstatt
  (PR-170), em Guarapuava: a página de santuários dá só a rodovia, sem
  paróquia nem horário. Pendência.

## Conferência da lista

- Site: página "Paróquias" (https://diopuava.org/paroquias/, 59 links), com
  a contagem por decanato que a diocese publica (Centro 8 diocesanas + 6
  religiosas; Pinhão 8 + 3; Pitanga 12 + 2; Laranjeiras 7 + 2, além das
  ucranianas): soma 48, igual ao JSON.
- GCatholic (https://gcatholic.org/churches/local/guar2, atualizado em
  09/11/2026; estatística de 2022: 47 paróquias): todas as entradas latinas
  estão no JSON. N. S. do Perpétuo Socorro (elevada em 26/09/2023) e São Luiz
  Gonzaga (criada em 2022) aparecem lá sem a marca de paróquia; falta a São
  José do Guará (criada em 27/11/2022).
- Porto Barreiro: o GCatholic diz "Imaculada Auxiliadora", o e-mail da
  paróquia é imaculadaauxiliadora@, e o site da diocese diz "Imaculada
  Conceição". Ficou o nome do site, com a nota.

## Páginas lidas (13/11/2026)

- https://diopuava.org/paroquias/
- https://diopuava.org/horarios-de-missas/ (26/12/2025). Só o primeiro quadro
  (por decanato) foi usado. O segundo, "Missas em Guarapuava, por horários",
  contradiz o primeiro em vários pontos (missas às 11h, 15h, 16h e 17h na
  Catedral, por exemplo) e parece mais antigo.
- Uma página por paróquia, `https://diopuava.org/decanato-<nome>/<paroquia>/`
  (no campo `fontes` de cada item).
- https://diopuava.org/santuarios/ e as páginas de cada santuário.
- A API do WordPress (`/wp-json/`) devolve 403 para robôs; as páginas HTML
  abrem normalmente.

## Divergências e decisões

- Quando a página da paróquia (08/2026) e a lista geral (12/2025) divergem,
  valeu a página da paróquia: N. S. de Fátima (domingo 8h, não 8h30),
  Perpétuo Socorro (domingo 8h, não 7h30), Santos Anjos (domingo 17h, não
  19h), São João Bosco (sem a terça 19h30), Sant'Ana de Laranjeiras do Sul.
- Sant'Ana de Guarapuava: a página dá segunda 15h, quarta 15h e 19h, sexta
  15h, sábado 19h, domingo 8h, 10h e 19h; a lista geral dá domingo 8h, 10h e
  19h, sábado e quarta 19h, 1ª sexta 19h. Valeu a página, com a nota.
- Santo Antônio de Manoel Ribas: a página da paróquia repete por engano o
  quadro e a comunidade (Guabiroba) da Sant'Ana de Guarapuava. Valeu a lista
  geral ("Manoel Ribas": domingo 7h, 9h e 19h; segunda a sábado 19h; quarta
  15h e 19h).
- Catedral: a lista repete no sábado os horários do domingo (7h, 9h, 10h30
  e 19h). Entrou como publicado, com confiança média.
- Dias fixos do mês (dia 7, 12, 13, 19, 22, 27, 29) e "última quinta/sexta"
  ficaram em `nao_cabe`.

## Instagram

Só dois citados no texto das páginas: catedralguarapuava e paroquiapalmital.
O site cita o perfil @passodareserva para o Santuário do Passo da Reserva.

## O que falta para o próximo estado

- Conferir os 36 horários que vieram só da lista de 12/2025.
- Horário de confissão: nenhuma página publica.
- Comunidades das demais paróquias (as páginas dão só o número: Prudentópolis
  75, Pinhão 56, Quedas do Iguaçu 51 etc.).
- Santuários da Divina e Trina Ternura e de Schoenstatt: paróquia e horário.
