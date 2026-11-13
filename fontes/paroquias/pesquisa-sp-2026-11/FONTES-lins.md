# Diocese de Lins (SP): fontes da pesquisa de 13/11/2026

Sé em Lins; Noroeste paulista, entre o Tietê e o Rio Feio. Criada em 1926
como Diocese de Cafelândia, com sé transferida para Lins em 1950. Bispo:
Dom João Gilberto de Moura (GCatholic, desde 30/10/2024). Cúria: Rua Nove
de Julho, 1010, Centro, Lins, (14) 3522-1622 e 3522-7439,
diocesedelins@outlook.com. Catedral Santo Antônio (Lins) e Concatedral
Santa Isabel da Hungria (Cafelândia).

## Resumo

- **44 unidades pastorais** em `saida/lins.json`: 2 catedrais (a Catedral
  Santo Antônio e a Concatedral de Cafelândia, as duas como `catedral`), 2
  santuários-paróquia (N. S. de Fátima, Lins; N. S. Aparecida, Pirajuí,
  como `santuario`) e 40 paróquias. Cidades: Lins (12), Penápolis (7),
  Pirajuí (3), Cafelândia (2), Promissão (2) e uma em cada: Sabino,
  Getulina, Guaimbê, Guaiçara, Júlio Mesquita, Avanhandava, Barbosa, Alto
  Alegre, Luiziânia, Glicério, Braúna, Clementina, Presidente Alves,
  Pongaí, Uru, Balbinos, Reginópolis e Guarantã.
- **4 com horário de missa**: São Francisco de Assis de Penápolis
  (Santuário, frades capuchinhos), confiança alta, pelo site do santuário,
  com missas da matriz e de oito capelas e o atendimento de confissão dos
  freis; Catedral Santo Antônio, São João Bosco e São Francisco de Assis
  (Lins), confiança média, pela bio do Instagram de cada uma, lida só no
  trecho que a busca mostra (sem data; o da São João Bosco estava indexado
  havia cerca de 660 dias).
- **40 sem horário** (`"horarios": []`, confiança baixa).
- Todo `id_banco` é null.

## A dificuldade desta diocese

O site oficial, https://diocesedelins.org/ (com as páginas "Região
Pastoral de Lins", "Cúria Diocesana", "Elenco da Diocese de Lins"),
aparece na busca mas **não abre deste ambiente** (o proxy responde 502 ao
conectar). O domínio antigo, diocesedelins.com.br, devolve uma checagem de
segurança da Vercel (429). Por isso a pesquisa foi montada com:

1. **A lista da diocese no Ofertório**
   (https://diocesedelins.app.ofertorio.com/paroquias/, portal da diocese
   feito pela AD3, com a cúria e o bispo antigo, Dom Francisco Carlos da
   Silva, ainda na página): 35 paróquias com nome e cidade, sem endereço,
   contato ou horário. A página de história
   (https://diocesedelins.app.ofertorio.com/a-diocese-de-lins/) dá a data
   de criação de várias paróquias.
2. **Os CNPJs filiais da Diocese de Lins** (raiz 51.666.659, lidos um a um
   em https://minhareceita.org/ em 13/11/2026: filiais 0001 a 0110; da 0079
   em diante nenhuma existe). 78 filiais, das quais 51 ativas (a cúria, o Seminário São João Batista de Alto Alegre, 3 fora da diocese de hoje e as das paróquias). Daí vêm os
   endereços (marcados na observação de cada item). Muitas filiais
   antigas, de 1974, não têm nome: só foram ligadas a uma paróquia quando
   são a única filial da cidade ou quando a exclusão é segura (Pirajuí e
   Cafelândia, onde as outras paróquias têm filial com nome). Os telefones
   das filiais são quase todos o da cúria e não entraram.
3. **GCatholic** (https://gcatholic.org/churches/local/lins0, 09/11/2026):
   39 igrejas, e a estatística da diocese diz "46 parishes".

### Como a lista fechou em 44

As 35 do Ofertório, mais 9 que o Ofertório não traz:

- Concatedral Santa Isabel da Hungria (Cafelândia): GCatholic, CNPJ 0008,
  história ("reativou a paróquia" em 22/09/2011).
- São Francisco de Assis (Penápolis, Santuário): GCatholic, CNPJ 0019,
  site do santuário.
- São José Operário (Penápolis): história (25/01/2011) e CNPJ 0070.
- São Lucas Evangelista (Penápolis): só o CNPJ 0078, aberto em 2023 com o
  nome da paróquia.
- Santo Antônio (Uru): história (23/02/1996) e CNPJ 0062.
- Pongaí: história (criada no governo de Dom Pedro Paulo Koop), CNPJ 0004
  (sem nome) e a página de padres da diocese, com padres em Pongaí.
  **Padroeiro não confirmado**: entrou como "Paróquia de Pongaí".
- Santa Cecília (Presidente Alves): CNPJ 0002 (Praça Santa Cecília) e
  projeto de lei da Assembleia de SP de 2025 sobre o Centro Cultural
  Católico da Paróquia de Santa Cecília, da Diocese de Lins
  (https://www.al.sp.gov.br/spl/2025/07/Propositura/20554_1000762886_Propositura.pdf).
- N. S. Aparecida (Barbosa): CNPJ 0020 e o blog de fotos da diocese
  (romaria da Região Pastoral de Penápolis à Paróquia N. S. Aparecida de
  Barbosa, 2017, http://dioceselinsfotos.blogspot.com/2018/).
- São Sebastião (Braúna): história e CNPJ 0025; o padroeiro vem de projeto
  de lei da Assembleia de SP de 2013 sobre a igreja de São Sebastião de
  Braúna.

Diferenças com o GCatholic: as 39 igrejas dele estão todas dentro das 44,
menos duas que não entraram como unidade. A Igreja de N. S. Aparecida de
Penápolis é, no próprio GCatholic, missão do Santuário São Francisco, e o
site do santuário a trata como capela (entrou como capela). O Santuário
Cristo Rei e dos 26 Mártires (bairro Gonzaga, Promissão) é santuário
diocesano, mas nada diz que seja paróquia; ficou citado na observação da
N. S. Aparecida de Promissão. O GCatholic não tem Presidente Alves, Pongaí,
Uru, Barbosa, Braúna, nem as paróquias de Penápolis São José Operário e São
Lucas.

Para chegar às 46 do anuário faltam duas, e há candidatos no CNPJ sem
nome: a filial 0077 (Promissão, Rua Lydio Rodrigues Portela, s/n, Bela
Vista, aberta em 2019) e as filiais 0011 (Lins, Rua Santos Dumont, 277,
Bairro Ribeiro) e 0050 (Lins, Rua Rio de Janeiro, s/n, Parque Alto da
Fátima). Uma delas deve ser a São José Operário de Lins, que ficou sem
endereço. A Paróquia N. S. Aparecida de Promissão também ficou sem
endereço (as filiais 0017, Rua Pará, 150, Centro, e 0077 são candidatas).

Filiais ativas fora da diocese de hoje: duas em Araçatuba (0031 e 0037) e
uma em Andradina (0048, Paróquia Jesus Bom Pastor). São da época em que
Araçatuba era de Lins (a Diocese de Araçatuba foi criada em 1994) e não
entraram. Cidades das outras pesquisas de SP: nenhuma cidade desta diocese
aparece em outro arquivo de `saida/`.

## Horários

- https://www.santuariopenapolis.com.br/-horarios/ (lida em 13/11/2026):
  secretaria, atendimento dos freis (confissão e aconselhamento: terça,
  quarta e sexta de 8h30 às 11h e de 14h às 16h30; sábado de 8h30 às 10h),
  missas do santuário, das capelas N. S. de Fátima, Bom Jesus (Vila São
  Joaquim), São Sebastião (Residencial Florença), N. S. Aparecida, São João
  Batista, da Santa Casa (1º sábado, 9h, no `nao_cabe`) e das capelas
  rurais do Araponga, do Saltinho do Lageado e do Paraguai. Bairros das
  capelas pelas páginas de cada uma no mesmo site.
- Instagram, só pelo trecho do resultado da busca, nunca aberto por dentro:
  catedral.santo.antonio.lins (terça a sexta 17h; sábado 17h e 19h;
  domingo 8h, 10h e 19h), paroquiadombosco_lins (sábado 18h; domingo 8h,
  10h, 17h e 19h; "semana 17h" e "quinta 19h" sem os dias exatos, no
  `nao_cabe`), saofranciscolins (segunda a sexta 18h30 com a quinta para
  adoração, sábado 19h30, domingo 10h, 18h e 19h30; endereço na Rua Nestor
  Eduardo Ferreira, 978).

## Contatos

- Santuário de Penápolis: (18) 3652-1008 e secretaria.santuario@terra.com.br
  (página "Casas Religiosas" da diocese no Ofertório e o site do santuário).
- Santa Luzia de Promissão: (14) 3541-1112, publicado pela diocese para a
  Rua Carlos Rodrigues Pinto, 135, endereço da paróquia no CNPJ (página
  "Órgãos de Comunicação").
- Instagram vistos só no resultado da busca: santuariopirajui,
  guadalupepirajui (este com o expediente da secretaria, sem missas),
  além dos três de Lins acima. O perfil nossasenhoraaparecida_piraju que
  aparece na busca é de Piraju (Diocese de Ourinhos), não de Pirajuí.
- As demais paróquias ficaram sem telefone, e-mail e Instagram: o site da
  diocese não abriu e o CNPJ só dá o número da cúria.

## O que falta para o próximo estado desta pesquisa

- Abrir diocesedelins.org (liberar o host ou tentar de outro ambiente): é
  onde devem estar endereço, contato e talvez horário de cada paróquia.
- Padroeiro e endereço confirmados de Pongaí; endereço de São José
  Operário (Lins) e de N. S. Aparecida (Promissão); as duas paróquias que
  faltam para as 46 do anuário.
- Horário de missa de 40 paróquias.
