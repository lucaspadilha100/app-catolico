# Diocese de Primavera do Leste-Paranatinga (MT): fontes da pesquisa de 13/11/2026

Sé em Primavera do Leste (Catedral São Cristóvão) e cocatedral em
Paranatinga (São Francisco Xavier). Bispo: Dom João Aparecido Bergamasco,
SAC. Cúria: Rua Piracicaba, 315, Centro, Primavera do Leste, (66) 3498-5665,
curia@dioceseprimaveraptga.org.br (CNBB Regional Oeste 2). Padroeiros: São
Francisco Xavier e São Cristóvão.

## Resumo

- **21 unidades pastorais** em `saida/primavera-do-leste-paranatinga.json`:
  1 catedral, 1 cocatedral (como `catedral`), 1 santuário-paróquia
  (Sant'Ana, Chapada dos Guimarães), 17 paróquias e 1 área pastoral (São
  Pedro e São Patrício, Primavera do Leste, criada em 2022), em 4 foranias
  (Pe. Onesto Costa, Pe. José Cont, Pe. João Henning, Diác. Wilton Alves).
  Cidades: Primavera do Leste (6), Paranatinga (4), Poxoréu (2, uma no
  distrito de Jarudore), Campo Verde (2) e uma em cada: Gaúcha do Norte,
  Planalto da Serra, Nova Brasilândia, Chapada dos Guimarães, Santo Antônio
  do Leste, Novo São Joaquim e Campinápolis.
- **4 com horário de missa**: a Catedral (página da diocese, confiança alta,
  com confissões) e três de confiança média, pelo trecho da bio do Instagram
  visto na busca: Caravaggio (@caravaggiopva), Cocatedral
  (@saofrancisco_ptga, perfil indicado pela própria página da diocese) e
  Santuário de Sant'Ana (@paroquia.santuariodesantana).
- **17 sem horário** (`horarios: []`, confiança baixa): a página de cada
  paróquia no site da diocese só traz forania, data de criação, CNPJ,
  endereço, telefone e e-mail; nenhum horário. As buscas por cidade (Campo
  Verde, Poxoréu, Paranatinga, Primavera do Leste, Querência) não acharam
  trecho com horário.
- Nenhuma capela ou comunidade: o site não as lista.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site
(`/organizacao/local/?tipo=946&ordem=nome`, "22 registros encontrados") e de
uma página por unidade (`/local/<slug>/`). Dos 22, 21 estão no JSON. O 22º é
a **Paróquia Missionária Itinerante São Domingos Sávio** (Nova Xavantina,
povos indígenas Xavante, Forania Diác. Wilton Alves, criada em 2013), que a
Diocese de Barra do Garças também lista como "Paróquia São Domingos Sávio /
Paróquia Pessoal do Povo Xavante" e o GCatholic põe em Barra do Garças:
entrou só em `saida/barra-do-garcas.json` (Nova Xavantina é território de
Barra do Garças), com o endereço e o telefone desta página. Se o dono
preferir, é mudar o item de arquivo.

Conferência: GCatholic (20 igrejas paroquiais, "20 parishes, 1 mission",
09/11/2026) bate com as 20 paróquias do site; a "missão" corresponde à área
pastoral. A CNBB Regional Oeste 2 dá 18 paróquias (contagem antiga). A
Diocese inclui Chapada dos Guimarães e Campo Verde (vindos de Rondonópolis
em 2014) e Primavera do Leste e Poxoréu (da antiga Guiratinga).

## Páginas lidas (13/11/2026)

O endereço `dioceseprimaveraptga.org.br` redireciona para
https://dioceseprimaveraptga.com.br/. A API do WordPress e o sitemap
respondem 406; as páginas abriram com cabeçalhos comuns de navegador e uma
requisição a cada 2 segundos.

- https://dioceseprimaveraptga.com.br/organizacao/local/?tipo=946&ordem=nome
  (paróquias) e `?tipo=944` (foranias)
- Uma página por unidade, por exemplo
  https://dioceseprimaveraptga.com.br/local/catedral-sao-cristovao/ (única
  com horários de missa e de confissão) e
  https://dioceseprimaveraptga.com.br/local/santuario-de-santana/
- Instagram, só pelo trecho da busca (nenhum perfil aberto por dentro):
  https://www.instagram.com/caravaggiopva/ (terça a sexta 18h30; domingo
  8h30, 17h e 19h; endereço Av. Mato Grosso, 415),
  https://www.instagram.com/saofrancisco_ptga/ (domingo 9h e 19h, quarta
  19h; "capela" segunda e sexta 6h, sem nome, no `nao_cabe`),
  https://www.instagram.com/paroquia.santuariodesantana/ (quarta 19h,
  sábado 19h30, domingo 7h30 e 19h),
  https://www.instagram.com/catedralsaocristovao/ (confere com o site).

## Contatos

- Telefone fixo quando há; o celular da secretaria quando é o único. E-mails
  do domínio da diocese. Dois e-mails estão como publicados mas parecem ter
  erro de digitação: `pnsdagloriajde@dicoceseprimaveraptga.org.br` (Glória,
  Jarudore) e `paroquiasaomiguel@dioceseprimaveraptga.or.br` (São Miguel,
  Campo Verde).
- O site saletepva.com.br (Paróquia da Salete) não respondeu.
- A página do Santo Antônio Maria Claret aponta o Instagram
  `saofrancisco_ptga`, que é o da cocatedral; não entrou no Claret.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/para8.htm e
  https://gcatholic.org/churches/local/para8
- https://cnbbo2.org.br/diocese-de-primavera-do-leste-paranatinga/

## O que falta para o próximo estado desta pesquisa

- Horários das 17 unidades sem horário (pedir à cúria ou às secretarias; os
  perfis de Instagram das paróquias não apareceram na busca).
- Endereço das matrizes de São Cristóvão (Campo Verde), Nossa Senhora
  Aparecida (Salto da Alegria, Paranatinga) e São Joaquim e Sant'Ana.
- As cerca de 200 comunidades da diocese (CNBB), não listadas no site.
