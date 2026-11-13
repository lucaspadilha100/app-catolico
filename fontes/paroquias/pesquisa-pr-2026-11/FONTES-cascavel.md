# Arquidiocese de Cascavel (PR): fontes da pesquisa de 13/11/2026

Sé metropolitana em Cascavel; sufragâneas: Toledo, Foz do Iguaçu e
Palmas-Francisco Beltrão. Arcebispo: Dom José Mário Scalon Angonese. Cúria:
Rua Maranhão, 1595, Cascavel, (45) 3225-2324, curia@arquicascavel.org.br
(página da arquidiocese no site do Regional Sul 2 da CNBB). Padroeira:
Nossa Senhora da Conceição Aparecida (GCatholic).

## Resumo

- **39 unidades pastorais** em `saida/cascavel.json`: 1 catedral (N. S.
  Aparecida) e 38 paróquias, uma delas com matriz santuário (N. S. da
  Salette, Braganey). Cidades: Cascavel (21), Cafelândia (2), Corbélia (2,
  contando Penha) e uma em cada: Anahy, Boa Vista da Aparecida, Braganey,
  Campo Bonito, Capitão Leônidas Marques, Catanduvas, Diamante do Sul,
  Guaraniaçu, Ibema, Iguatu, Lindoeste, Santa Lúcia, Santa Tereza do Oeste,
  Três Barras do Paraná.
- **Nenhuma com horário** (todas com confiança baixa, `horarios` vazio).
  Nenhum contato institucional, nenhum Instagram, nenhuma forania.
- Todo `id_banco` é null.

## Por que tão pouco

- O site oficial, https://arquicascavel.org.br/, responde a todo endereço
  (página inicial, /paroquias, /robots.txt, /sitemap.xml) com o "Vercel
  Security Checkpoint" (HTTP 429, `x-vercel-mitigated: challenge`), um
  desafio anti-robô que exige rodar JavaScript. Tentado três vezes ao longo
  da sessão; não foi contornado, como manda a regra.
- `www.arquicascavel.org.br` não abre (erro de túnel); o domínio
  arquidiocesedecascavel.org.br é página "Em breve" de hospedagem, sem
  relação com a arquidiocese.
- Sem busca na web nesta sessão: não deu para achar os sites ou perfis das
  paróquias. Domínios de paróquia não foram adivinhados.
- O site do Regional Sul 2 da CNBB (cnbbs2.org.br, API do WordPress) só tem
  a cúria e os bispos, sem paróquias. A pt.wikipedia recusou a leitura (429).

## Lista das unidades

Só o GCatholic: https://gcatholic.org/churches/local/casc0 (atualizado em
09/11/2026) e a página de cada igreja (`/churches/brazil/<id>`, o id está no
campo `fontes`), que dá só a cidade e a localização (plus code), sem
endereço, exceto a catedral (Rua Rio Grande do Sul).

- Contagem: o GCatholic lista 39 paróquias de rito latino (a estatística de
  2022 da mesma página diz 40). Não deu para conferir contra a contagem da
  própria arquidiocese (site fechado). Pode faltar uma paróquia criada
  depois.
- Fora da lista, de propósito: Seminário Menor São José (Cascavel); a
  Paróquia N. S. do Perpétuo Socorro de rito ucraniano (Rua Mato Grosso,
  373, São Cristóvão), que é da Eparquia Imaculada Conceição de
  Prudentópolis; e a Igreja Santo Inácio de Loyola do Ordinariado Militar
  (GCatholic 77161), diferente da paróquia Santo Inácio de Loyola da
  arquidiocese (77134).
- Cascavel tem duas paróquias N. S. de Fátima no GCatholic (77130 e 77162);
  sem bairro, as duas entraram com o mesmo nome e a observação diz qual é
  qual.
- Paróquia N. S. da Penha: o GCatholic dá a localidade "Penha", a 11 km da
  matriz de Corbélia. Entrou como cidade Corbélia, localidade Penha, por
  dedução: confirmar.

## O que falta para o próximo estado desta pesquisa

Tudo: horários, contatos, endereços, bairros, foranias e a contagem oficial.
Caminhos, em ordem:
1. Abrir https://arquicascavel.org.br/ num navegador de verdade (ou pedir à
   arquidiocese a lista de paróquias); o site novo deve ter a lista.
2. Na rodada com busca: o perfil de Instagram e o site de cada paróquia
   (`SEM-HORARIO-cascavel.txt` tem as 39, todas sem perfil citado).
