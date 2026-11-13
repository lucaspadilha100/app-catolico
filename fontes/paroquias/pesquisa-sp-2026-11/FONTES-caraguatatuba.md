# Diocese de Caraguatatuba (SP): fontes da pesquisa de 13/11/2026

Sé em Caraguatatuba; litoral norte de São Paulo (Caraguatatuba, Ubatuba,
São Sebastião e Ilhabela), criada em 03/03/1999, desmembrada de Santos.
Bispo: Dom José Carlos Chacorowski, CM.
Cúria: Rua Santos Dumont, 100, Centro, Caraguatatuba, CEP 11660-290,
(12) 3883-4888. Instagram da diocese: diocesecaraguatatuba.

## Resumo

- **20 unidades pastorais** em `saida/caraguatatuba.json`: 1 catedral
  (Divino Espírito Santo), 1 santuário (Santo Antônio) e 18 paróquias, em
  3 setores (Caraguatatuba com 7, Ubatuba com 6, São Sebastião/Ilhabela
  com 7).
- **20 com horário** (confiança alta): o site da diocese mantém uma página
  por paróquia com endereço, telefone, e-mail, clero, secretaria e os
  horários da matriz e das capelas. Todas lidas em 13/11/2026 pela API
  WordPress (`/wp-json/wp/v2/posts?categories=6`).
- 117 igrejas no total (20 matrizes, 97 capelas e comunidades). As capelas
  entraram quando a página dá nome e lugar; as sem lugar (Santa Rosa de
  Lima, uma da Imaculada Conceição) ficaram no `nao_cabe` da matriz.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem da categoria Paróquias do site da diocese (20 posts, um por
unidade, nos 3 setores).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 19
igrejas; a página de estatísticas diz 20 paróquias): o anuário não traz a
Paróquia São Maximiliano Maria Kolbe (Lagoinha, Ubatuba, criada em
27/11/2020), a mais nova; as outras 19 batem uma a uma.

Divergência anotada: a página da Paróquia Santa Rosa de Lima escreve
"Jaraguá, Caraguatatuba/SP", mas o bairro Jaraguá da matriz (Rua Guilherme
de Almeida, 274, CEP 11600-512) fica em São Sebastião, e a diocese põe a
paróquia no setor São Sebastião/Ilhabela; o JSON segue São Sebastião, com a
divergência na observação.

Nomes normalizados para o padrão do app ("Paróquia de ...", sem a cidade):
"Paróquia Nossa Senhora das Graças / Cristo Rei" virou "Paróquia de Nossa
Senhora das Graças e Cristo Rei" (a matriz é a Igreja Cristo Rei); as duas
"Paróquia São José" (Morro do Algodão, Caraguatatuba; Topolândia, São
Sebastião) se distinguem pela cidade e pelo bairro da matriz.

## Páginas do site da diocese (lidas em 13/11/2026)

Site oficial: https://dicaragua.org.br/ (WordPress; a API
`/wp-json/wp/v2/` é aberta e devolveu os 20 posts de paróquia inteiros).
O domínio antigo `www.diocesecaraguatatuba.com.br` hoje responde com o site
de outra diocese e redireciona para `dicaragua.org.br`. O rodapé do site
carrega texto de spam (cassinos); ignorado.

- https://dicaragua.org.br/ (menu, redes sociais)
- https://dicaragua.org.br/contato/ (cúria)
- https://dicaragua.org.br/horarios-de-missas/ (só um filtro de busca, sem
  lista estática; os horários vieram das páginas das paróquias)
- Uma página por unidade, todas com horários e contatos:
  - https://dicaragua.org.br/paroquia-catedral-divino-espirito-santo/
  - https://dicaragua.org.br/santuario-santo-antonio/
  - https://dicaragua.org.br/paroquia-nossa-senhora-da-gloria/
  - https://dicaragua.org.br/paroquia-sao-joao-batista/
  - https://dicaragua.org.br/paroquia-santa-terezinha/
  - https://dicaragua.org.br/paroquia-nossa-senhora-da-visitacao/
  - https://dicaragua.org.br/paroquia-sao-jose-morro-do-algodao/
  - https://dicaragua.org.br/paroquia-sao-sebastiao/
  - https://dicaragua.org.br/paroquia-nossa-senhora-aparecida/
  - https://dicaragua.org.br/paroquia-nossa-senhora-dajuda-e-bonsucesso/
  - https://dicaragua.org.br/paroquia-santa-rosa-de-lima/
  - https://dicaragua.org.br/paroquia-sagrado-coracao-de-jesus/
  - https://dicaragua.org.br/paroquia-nossa-senhora-do-amparo/
  - https://dicaragua.org.br/paroquia-sao-jose-topolandia/
  - https://dicaragua.org.br/paroquia-sao-maximiliano-maria-kolbe/
  - https://dicaragua.org.br/paroquia-imaculada-conceicao/
  - https://dicaragua.org.br/paroquia-nossa-senhora-das-dores/
  - https://dicaragua.org.br/paroquia-nossa-senhora-de-fatima/
  - https://dicaragua.org.br/paroquia-nossa-senhora-das-gracas-cristo-rei/
  - https://dicaragua.org.br/paroquia-exaltacao-da-santa-cruz/

## Instagram (só o que as páginas da diocese trazem, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); os usuários abaixo
vieram das próprias páginas das paróquias no site da diocese.

- diocesecaraguatatuba (diocese, no rodapé do site)
- parsaojoaobatista_ (São João Batista, Poiares)
- paroquiasaojosecaragua (São José, Morro do Algodão)
- santarosa.lima (Santa Rosa de Lima, Jaraguá)
- pascom_amparo (Nossa Senhora do Amparo, São Francisco)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/cara2 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dcrgu.html
- https://en.wikipedia.org/wiki/Diocese_of_Caraguatatuba
- Bendito Guia (endereço e CEP da matriz de Santa Rosa de Lima em São
  Sebastião, para decidir a cidade)

## O que não entrou e o que falta

- Celebrações que não são missa, confissão nem adoração (celebração da
  Palavra, terço, novena, trezena) e missas por dia fixo do mês ("todo dia
  19") ficaram em texto no `nao_cabe` da igreja.
- Missas em lugares que não são igreja (Cemitério Municipal e Asilo Vila
  Vicentina em Caraguatatuba, Hospital de Clínicas e casas do Porto Grande
  em São Sebastião) ficaram no `nao_cabe` da matriz.
- As capelas das ilhas de Ilhabela (Búzios, Vitória, Serraria) e três da
  Paróquia Nossa Senhora de Fátima em Ubatuba são listadas sem horário pela
  diocese; entraram com `horarios: []`.
- A página da Paróquia Nossa Senhora Aparecida (Ilhabela) diz "Criada em
  1603", data que é a da Paróquia São Sebastião; o anuário dá a elevação a
  paróquia em 12/10/2016. Não afeta o JSON (a data não entra).
- Próximo passo natural: conferir mudanças de horário pelo Instagram das
  paróquias quando a busca mostrar os trechos.
