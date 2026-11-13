# Arquidiocese de Londrina (PR): fontes da pesquisa de 13/11/2026

Sé metropolitana em Londrina; sufragâneas: Apucarana, Cornélio Procópio e
Jacarezinho. Cúria (Catholic-Hierarchy): Rua Dom Bosco, 145, Jardim Dom
Bosco, Londrina, (43) 3371-3141.

## Resumo

- **80 unidades** em `saida/londrina.json`: 1 catedral (Catedral
  Metropolitana Sagrado Coração de Jesus) e 79 paróquias, em 11 decanatos
  segundo o GCatholic (Centro, Leste, Oeste, Norte, Sul, Tamarana, Cambé,
  Rolândia, Ibiporã, Sertanópolis, Porecatu; o nome vem na observação).
- **Só a Catedral tem horário** (confiança alta, pelo site da própria
  catedral). As outras 79 entraram com `horarios: []`, confiança baixa e sem
  contato (`SEM-HORARIO-londrina.txt`).
- Distritos de Londrina (Paiquerê, São Luiz, Irerê, Guaravera, Warta) e de
  Rolândia (São Martinho) na `localidade`. "Lupinóplois" do GCatholic é
  Lupionópolis.
- Nomes duplicados na mesma cidade (duas Imaculada Conceição no Centro, duas
  N. S. Aparecida no Sul, N. S. do Carmo no Oeste e no Sul de Londrina): a
  observação traz o número da igreja no GCatholic para separar.
- Todo `id_banco` é null.

## Dificuldade principal

O site da arquidiocese, https://arquidioceselondrina.com.br/ (o que o
GCatholic e o Catholic-Hierarchy citam), responde a toda requisição com
"Vercel Security Checkpoint" (HTTP 429, desafio anti-robô), inclusive
robots.txt e sitemap. Não foi contornado. Os domínios
arquidiocesedelondrina.com.br e .org.br não respondem (Cloudflare 522 ou sem
DNS). Sem busca na web nesta sessão, não houve como achar os sites e perfis
das paróquias.

## Lista das unidades

Do GCatholic: https://gcatholic.org/churches/local/lond1 (09/11/2026, 86
igrejas) e a página de cada igreja (https://gcatholic.org/churches/brazil/<id>,
com o decanato). Entraram as marcadas como paróquia e a catedral. Ficaram de
fora: Seminário Paulo VI, Seminário Divino Espírito Santo e Seminário de
Teologia Dom Virgílio Pauli; a Igreja Nossa Senhora de Fátima (Oeste,
105432), marcada só como igreja; e dois santuários sem marca de paróquia
(pendência): Santuário Nossa Senhora Aparecida (Leste, 49027) e Santuário
Apostólico São Judas Tadeu (Oeste, 49030).

Contagem: o GCatholic dá 83 paróquias na estatística de 2022 e lista 80 mais
a catedral; o Catholic-Hierarchy tem séries antigas. A lista oficial da
arquidiocese não foi lida.

## Catedral

https://catedrallondrina.com.br/ (site da catedral, citado pelo GCatholic):
missas (capela de segunda a sábado às 7h; catedral de segunda a quinta às
12h, sexta 12h e 15h, sábado 18h, domingo 8h, 10h30 e 18h), confissões
(segunda, quarta e sexta, 14h30 às 17h), telefone, e-mail e Instagram
(catedrallondrina).

## O que falta para o próximo estado

- Tudo das 79 paróquias: endereço, bairro, telefone, e-mail, Instagram e
  horários. Caminhos: o site da arquidiocese aberto num navegador comum (o
  desafio da Vercel é feito para navegador comum), ou a rodada de busca.
- Confirmar a lista com a arquidiocese (o GCatholic pode ter paróquias
  novas faltando) e decidir os dois santuários.
- Capelas e comunidades: nenhuma lida.
