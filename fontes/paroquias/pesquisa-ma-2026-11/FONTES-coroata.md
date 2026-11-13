# Diocese de Coroatá (MA): fontes da pesquisa de 13/11/2026

Sé em Coroatá; vales do Itapecuru e do Mearim, entre São Luís e Caxias.
Bispo: Dom Sebastião Bandeira Coêlho. Cúria: Rua Senador Leite, 935,
Massaranduba, Coroatá; CNBB Nordeste 5 dá (99) 99158-4394 e
curiacoroata@gmail.com; a página da diocese no Facebook
(facebook.com/diocesedecoroata1977, trecho da busca) dá (99) 98215-6116.
Padroeira: Nossa Senhora da Piedade (15 de setembro). A diocese faz 50 anos
em 26/08/2027 (Ano Jubilar aberto em 06/08/2026).

## Resumo

- **24 unidades** em `saida/coroata.json`: 1 catedral (N. S. da Piedade), 22
  paróquias e 1 área pastoral (N. S. da Conceição, Itapecuru-Mirim), em 4
  zonais: 1 (Coroatá, Peritoró, Alto Alegre do Maranhão, São Mateus do
  Maranhão: 5), 2 (Codó com 7 paróquias e Timbiras: 8), 3 (Nina Rodrigues,
  Vargem Grande, Presidente Vargas, Itapecuru-Mirim: 5) e 4 (Arari,
  Anajatuba, Miranda do Norte, Matões do Norte, Cantanhede, Pirapemas: 6).
- **1 com horário**: Paróquia São Pedro (Codó), pelo trecho da página da
  própria paróquia no Facebook visto pela busca (quarta 19h; domingo 7h e
  19h), confiança média. As outras 23 entraram com `horarios: []` e
  confiança baixa.
- **A diocese não tem site próprio no ar**: o domínio antigo
  (diocesedecoroata.org.br, citado pela Wikipedia) não resolve. A fonte
  oficial que existe é o blog da Pascom da Catedral
  (https://www.catedraldecoroatama.com.br/), que publica também notícias
  da diocese; ele só traz horários de datas especiais (Natal, Corpus
  Christi), que não entram.
- Catedral: endereço, WhatsApp e e-mail da arte "Secretaria Paroquial" do
  blog (Praça Monsenhor Benedito Estrela, 56, Centro; 99 98502-0571;
  nsppiedade@hotmail.com; segunda a sexta, 8h às 12h e 14h às 17h30).
- O Santuário de São Raimundo Nonato dos Mulundus (Vargem Grande), "o de
  maior romaria" da diocese, entrou como igreja de tipo `santuario` da
  Paróquia São Sebastião de Vargem Grande (Corpus Christi de 2023:
  "Paróquia São Sebastião e Santuário de São Raimundo Nonato"; notícia de
  2025 assinada pela paróquia).
- Instagram: catedraldecoroatama (Catedral, ligado no blog) e
  paroq.saosebastiaocodo (resultado da busca). Páginas do Facebook das
  paróquias, achadas pela busca, entraram em `site`: São Raimundo Nonato
  (Coroatá), São Francisco e São Pedro (Codó), São Sebastião (Vargem
  Grande), N. S. das Dores (Itapecuru-Mirim). Nenhum perfil aberto por
  dentro.
- Todo `id_banco` é null.

## Lista das unidades

Base: a lista oficial publicada pela Pascom no aniversário de 43 anos
(26/08/2020): "23 paróquias em 16 cidades, divididas em 4 zonais". A linha
"Coroatá Nossa Senhora da Piedade e São Raimundo" são duas paróquias (a
Catedral e São Raimundo Nonato): só assim a conta dá 23, e a posse de
pároco de São Raimundo Nonato (abril de 2022) e o Corpus Christi de 2023 a
tratam como paróquia própria.

Acréscimo depois de 2020: a **Área Pastoral Nossa Senhora da Conceição**
(Itapecuru-Mirim), citada assim no Corpus Christi de 2023 e como "Paróquia
N. Sra. da Conceição - Itapecuru-Mirim" nos créditos de fotos da abertura do
Jubileu (agosto de 2026). Entrou como `area_pastoral`; falta o decreto que
diga se já é paróquia. A notícia do Jubileu fala em "paróquias e áreas
pastorais", sem listar.

Conferência contra o GCatholic (09/11/2026; "23 parishes, 967 missions";
a aba de igrejas não carrega a lista, então as igrejas foram lidas uma a uma
pelos ids 2710 e 76154 a 76168): 15 igrejas paroquiais batem com a lista.
Diferenças de padroeiro (seguimos a diocese): Alto Alegre do Maranhão (no
GCatholic N. S. Aparecida; na diocese N. S. da Conceição) e Matões do Norte
(GCatholic N. S. Aparecida; diocese São José, confirmado pela nomeação de
2023). Faltam no GCatholic seis paróquias de Codó, Anajatuba, Miranda do
Norte e a área pastoral. O GCatholic lista ainda uma igreja de São Raimundo
Nonato em Timbiras, sem marca de paróquia e sem lugar.

## Fontes (lidas em 13/11/2026)

- https://www.catedraldecoroatama.com.br/2020/08/diocese-de-coroata-ma-celebra-43-anos.html
  (a lista por zonal)
- https://www.catedraldecoroatama.com.br/2023/06/solenidade-corpus-christi-na-diocese-de.html
  (programação das paróquias; nomes e a área pastoral)
- https://www.catedraldecoroatama.com.br/2026/08/diocese-de-coroata-abre-ano-jubilar-de.html
- https://www.catedraldecoroatama.com.br/2023/11/comunicado-oficial-novas-nomeacoes-na.html
- https://www.catedraldecoroatama.com.br/2022/04/padre-luciano-do-couto-pereira-tomara.html
- https://www.catedraldecoroatama.com.br/2025/02/vargem-grande-santuario-de-sao-raimundo.html
- https://www.catedraldecoroatama.com.br/feeds/posts/default?alt=json&max-results=500
  (os 151 posts do blog, varridos atrás de horário)
- Trechos de busca: facebook.com/paroquiasaopedrosmj (horários),
  facebook.com/paroquiasaoraimundononatocoroata, facebook.com/igrejasaofranciscocodo,
  facebook.com/paroquia.ssebastiao.vg, facebook.com/matrizdasdoresita,
  instagram.com/paroq.saosebastiaocodo, instagram.com/s_raimundodosmulundus
  (festejo de 22 a 31 de agosto).
- Conferência: https://gcatholic.org/dioceses/diocese/coro1.htm,
  https://gcatholic.org/churches/brazil/76154 a 76168,
  https://www.cnbbne5.org/circunscricoes-eclesiasticas

## Pendências

- Capelas citadas sem lugar: Capela N. S. Aparecida (Arari) e Igreja de N.
  S. de Fátima (Pirapemas), no `nao_cabe` da matriz; em Coroatá, as capelas
  São João Batista, Santa Clara, Alto do Cedro e a comunidade de Bacabal dos
  Vianas (Setor Luz do Mundo) aparecem no roteiro da imagem peregrina sem
  dizer a paróquia: não entraram.
- Horário e contato de 23 unidades. **O limite de buscas na web acabou** no
  meio desta parte (limite compartilhado pela rodada): ficaram sem busca as
  redes sociais de Timbiras, Pirapemas, Cantanhede, Matões do Norte, Miranda
  do Norte, Arari, Anajatuba, Peritoró, São Mateus, Alto Alegre, Nina
  Rodrigues, Presidente Vargas e de quatro paróquias de Codó.
- Endereço das matrizes (nenhuma fonte oficial, fora a Catedral).
- Situação canônica da unidade N. S. da Conceição de Itapecuru-Mirim.
