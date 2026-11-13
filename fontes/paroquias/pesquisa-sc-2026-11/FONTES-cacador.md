# Diocese de Caçador (SC): fontes da pesquisa de 13/11/2026

Sé em Caçador, região do Contestado e Planalto Norte catarinense (Videira,
Fraiburgo, Porto União, Canoinhas). Criada em 1968; sufragânea de Chapecó
desde 2024. Bispo: Dom Cleocir Bonetti. Padroeiro: São Francisco de Assis.
Cúria: Avenida Santa Catarina, 228, Centro, Caçador, (49) 3563-2045,
mitradiocesana@diocesedecacador.org.br.

## Resumo

- **25 unidades** em `saida/cacador.json`: 1 catedral (São Francisco de
  Assis) e 24 paróquias, em 6 microrregiões: Caçador (3), Videira (5), Arroio
  Trinta (4), Porto União (4), Canoinhas (6) e Santa Cecília (3).
- **25 com horário de missa**, todas com confiança alta: a página "Horários
  de Missa" da diocese (https://diocesedecacador.org.br/horarios-de-missa-7015/)
  traz as 25, e foi atualizada em 01/10/2025 (data lida na API do WordPress).
- Adoração: Catedral (quinta, com exposição ao meio-dia). Confissão: nenhuma
  paróquia publica.
- O **Santuário Diocesano Nossa Senhora de Fátima, Mãe dos Pobres**
  (Fraiburgo) entrou como igreja da Paróquia Imaculada Conceição de Fraiburgo,
  com a missa de domingo às 15h e a do dia 13 no `nao_cabe`.
- **395 capelas** com nome e lugar, das listas "Comunidades" das páginas de
  paróquia (a fonte dá "Padroeiro - Lugar"). Comunidades sem lugar ficaram no
  `nao_cabe` da matriz (toda a lista de Videira, Iomerê e Pinheiro Preto, e
  poucas de outras). Calmon (Matos Costa) e Macieira (Arroio Trinta) entraram
  com a cidade própria.
- Todo `id_banco` é null.

## Lista das unidades

- Página "Paróquias" do site (https://diocesedecacador.org.br/paroquias-6699/),
  organizada por microrregião, com link para a página de cada uma (endereço,
  pároco, atendimento da secretaria, telefone, WhatsApp, e-mail, redes e
  comunidades). 25 unidades.
- **GCatholic** (https://gcatholic.org/churches/local/caca0, 09/11/2026;
  estatística de 2022: 25 paróquias): bate, com diferenças de registro:
  - não lista a Paróquia São Sebastião de **Papanduva** e lista **Santa
    Cecília** sem marca de paróquia (no site as duas são paróquias);
  - chama Major Vieira de "Vieira";
  - lista o santuário de Fraiburgo (entrou na paróquia) e a **Paróquia
    Menino Jesus de Canoinhas, de rito ucraniano** (outra jurisdição, a
    eparquia ucraniana; fora do JSON).
- A diocese chama a de Arroio Trinta de "Paróquia Nossa Senhora dos
  Campos, Rainha da Oração, Arroio Trinta e Macieira"; o JSON usa "Paróquia
  Nossa Senhora dos Campos" e anota o resto na observação.
- A Paróquia Santa Isabel tem matriz no distrito de Ipoméia, município de Rio
  das Antas (cidade Rio das Antas, localidade Ipoméia).

## Páginas lidas (13/11/2026)

- https://diocesedecacador.org.br/horarios-de-missa-7015/
- https://diocesedecacador.org.br/paroquias-6699/ e as 25 páginas de
  paróquia (URLs no campo `fontes` de cada item)
- https://diocesedecacador.org.br/santuario-diocesano/ (decreto de 1993 do
  santuário de Fraiburgo)

## Instagram (anotado das próprias páginas da diocese)

catedralcacador, paroquiacristoredentorcacador, paroquiavideiraimac.

## O que falta para o próximo estado

- Horários de confissão (nenhuma página traz).
- Horários das capelas do interior: a página de horários só dá a matriz (e a
  comunidade Santa Catarina, do bairro Santa Rosa, em Porto União).
- Comunidades sem lugar (Videira, Iomerê, Pinheiro Preto e algumas outras).
- A Paróquia Nossa Senhora Rainha publica um segundo número, (49)
  99927-5369, sem dizer se é WhatsApp; não entrou.
