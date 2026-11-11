import type { Bloco, ConteudoDoOficio, Noturnos } from "./tipos";
import type { Linha } from "@/oracao/oracoes";

const DESCANSO = "Dai-lhes, Senhor, o descanso eterno.";
const LUZ = "E brilhe para eles a luz perpétua.";
const DESCANSO_E_LUZ = "Dai-lhes, Senhor, o descanso eterno, e brilhe para eles a luz perpétua.";

const REQUIEM: Bloco = { linhas: [{ v: DESCANSO, r: LUZ }] };

const salmo = (leitura: string, titulo: string, inicio?: string, fim?: string): Bloco[] => [
  { leitura, titulo, poema: true, ...(inicio && { inicio }), ...(fim && { fim }) },
  REQUIEM,
];

const comAntifona = (antifona: string, ...salmos: Bloco[][]): Bloco[] => [{ antifona }, ...salmos.flat(), { antifona }];

const OUVI: Linha = { v: "Senhor, ouvi a minha oração.", r: "E chegue até vós o meu clamor." };

const DA_PORTA_DO_INFERNO: Linha = { v: "Da porta do inferno.", r: "Livrai, Senhor, as suas almas." };

const DESCANSEM: Linha = { v: "Descansem em paz.", r: "Amém." };

const AUDIVI: Bloco = {
  linhas: [{ v: "Ouvi uma voz do céu que me dizia:", r: "Bem-aventurados os mortos que morrem no Senhor." }],
};

const POR_NOSSO_SENHOR =
  "Por Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.";

const FIDELIUM =
  "Oremos. Ó Deus, Criador e Redentor de todos os fiéis, concedei às almas dos vossos servos e das vossas servas a remissão de todos os pecados, para que, pelas nossas piedosas súplicas, alcancem o perdão que sempre desejaram. Vós que viveis e reinais com Deus Pai, na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.";

const OUTRAS_ORACOES: Bloco[] = [
  { rubrica: "Por um só defunto, em lugar desta oração:" },
  {
    linhas: [
      `Oremos. Absolvei, Senhor, nós vos pedimos, a alma do vosso servo N. (da vossa serva N.), para que, tendo deixado este mundo, viva para vós; e as faltas que cometeu na convivência humana, pela fragilidade da carne, apagai-as com o perdão da vossa misericordiosíssima bondade. ${POR_NOSSO_SENHOR}`,
    ],
  },
  { rubrica: "No aniversário da morte:" },
  {
    linhas: [
      `Oremos. Senhor, Deus dos perdões, concedei às almas dos vossos servos e das vossas servas, cujo aniversário de sepultamento recordamos, a morada do refrigério, a felicidade do repouso e o esplendor da luz. ${POR_NOSSO_SENHOR}`,
    ],
  },
  { rubrica: "Pelos irmãos, parentes e benfeitores:" },
  {
    linhas: [
      `Oremos. Ó Deus, que concedeis o perdão e amais a salvação dos homens, suplicamos à vossa clemência: pela intercessão da bem-aventurada sempre Virgem Maria e de todos os vossos santos, concedei aos irmãos da nossa comunidade, aos nossos parentes e benfeitores, que passaram deste mundo, chegar à comunhão da felicidade eterna. ${POR_NOSSO_SENHOR}`,
    ],
  },
  { rubrica: "Pelo pai e pela mãe:" },
  {
    linhas: [
      `Oremos. Ó Deus, que nos mandastes honrar pai e mãe, tende piedade, na vossa clemência, das almas de meu pai e de minha mãe, perdoai os seus pecados e fazei que eu os veja na alegria da claridade eterna. ${POR_NOSSO_SENHOR}`,
    ],
  },
];

const FIM: Bloco = { linhas: [{ v: DESCANSO, r: LUZ }, DESCANSEM] };

const preces = (salmoDasPreces: Bloco[]): Bloco[] => [
  { rubrica: "Pai-nosso em silêncio." },
  { linhas: [{ v: "E não nos deixeis cair em tentação.", r: "Mas livrai-nos do mal." }] },
  { rubrica: "O salmo seguinte se omite no Dia de Finados e, pelas rubricas de 1955 e de 1960, sempre." },
  ...salmoDasPreces,
  { linhas: [DA_PORTA_DO_INFERNO, DESCANSEM, OUVI, FIDELIUM] },
  ...OUTRAS_ORACOES,
  FIM,
];

const vesperas: Bloco[] = [
  ...comAntifona("Agradarei ao Senhor na terra dos vivos.", salmo("PSA 116:1-9", "Salmo 114", "Eu amei")),
  ...comAntifona(
    "Ai de mim, Senhor, porque o meu exílio se prolongou!",
    salmo("PSA 120:1-7", "Salmo 119", "Quando me vi atribulado"),
  ),
  ...comAntifona(
    "O Senhor te guarda de todo mal; o Senhor guarde a tua alma.",
    salmo("PSA 121:1-8", "Salmo 120", "Levantei os meus olhos"),
  ),
  ...comAntifona(
    "Se observardes as iniquidades, Senhor, Senhor, quem poderá se manter de pé?",
    salmo("PSA 130:1-8", "Salmo 129", "Do mais profundo"),
  ),
  ...comAntifona("Não desprezeis, Senhor, as obras das vossas mãos.", salmo("PSA 138:1-8", "Salmo 137", "Eu te glorificarei")),
  AUDIVI,
  ...comAntifona(
    "Tudo o que o Pai me dá virá a mim; e quem vem a mim, eu não o lançarei fora.",
    salmo("LUK 1:46-55", "Cântico de Nossa Senhora", "A minha alma glorifica", "descendência para sempre."),
  ),
  ...preces(salmo("PSA 146:2-10", "Salmo 145", "Louva o Senhor")),
];

const EM_SILENCIO: Bloco = { rubrica: "Pai-nosso em silêncio." };

const responsorio = (texto: string, versos: [string, string][], descanso?: string): Bloco => ({
  titulo: "Responsório",
  linhas: [texto, ...versos.map(([v, r]) => ({ v, r })), ...(descanso ? [{ v: DESCANSO_E_LUZ, r: descanso }] : [])],
});

const VERAS_A_DEUS = "E na minha carne verei a Deus, meu Salvador.";
const DAI_O_DESCANSO = "Dai-lhes, Senhor, o descanso e o lugar do perdão.";
const PEQUEI_MUITO = "Porque pequei muito na minha vida.";
const NAO_ME_VEJA = "E já não me veja o olhar do homem.";
const NO_ULTIMO_DIA = "Tende piedade de mim quando vierdes no último dia.";
const PELO_FOGO = "Quando vierdes julgar o mundo pelo fogo.";
const NAO_HA_REDENCAO = "Porque no inferno não há redenção, tende piedade de mim, ó Deus, e salvai-me.";
const APAGUEIS = "Que vós, ó Deus, apagueis a minha iniquidade.";
const ABALADOS = "Quando os céus e a terra forem abalados.";
const LIVRAI_ME_DA_MORTE =
  "Livrai-me, Senhor, da morte eterna naquele dia tremendo, quando os céus e a terra forem abalados, quando vierdes julgar o mundo pelo fogo.";
const NAS_TREVAS = "Eles que estavam nas penas das trevas.";

const DIRIGI = "Dirigi, Senhor, meu Deus, o meu caminho diante de vós.";

const primeiroNoturno: Bloco[] = [
  { titulo: "Primeiro noturno" },
  ...comAntifona(DIRIGI, salmo("PSA 5:2-13", "Salmo 5")),
  ...comAntifona(
    "Voltai-vos, Senhor, e livrai a minha alma, porque na morte não há quem se lembre de vós.",
    salmo("PSA 6:2-11", "Salmo 6"),
  ),
  ...comAntifona(
    "Que ele não arrebate a minha alma como um leão, quando não houver quem me resgate nem quem me salve.",
    salmo("PSA 7:2-18", "Salmo 7"),
  ),
  { linhas: [DA_PORTA_DO_INFERNO] },
  EM_SILENCIO,
  { leitura: "JOB 7:16-21", titulo: "Primeira lição", inicio: "Poupa-me" },
  responsorio(
    "Creio que o meu Redentor vive, e que no último dia ressurgirei da terra; e na minha carne verei a Deus, meu Salvador.",
    [["Eu mesmo o verei, e não outro; e os meus olhos o contemplarão.", VERAS_A_DEUS]],
  ),
  { leitura: "JOB 10:1-7", titulo: "Segunda lição" },
  responsorio(
    "Vós que do sepulcro ressuscitastes Lázaro, que já cheirava mal, dai-lhes, Senhor, o descanso e o lugar do perdão.",
    [["Vós que haveis de vir julgar os vivos e os mortos, e o mundo pelo fogo.", DAI_O_DESCANSO]],
  ),
  { leitura: "JOB 10:8-12", titulo: "Terceira lição" },
  responsorio(
    "Senhor, quando vierdes julgar a terra, onde me esconderei da face da vossa ira? Porque pequei muito na minha vida.",
    [["Tremo pelas faltas que cometi e diante de vós me envergonho: quando vierdes julgar, não me condeneis.", PEQUEI_MUITO]],
    PEQUEI_MUITO,
  ),
];

const segundoNoturno: Bloco[] = [
  { titulo: "Segundo noturno" },
  ...comAntifona("Num lugar de pastagem, ali me colocou.", salmo("PSA 23:1-6", "Salmo 22", "O Senhor me conduz")),
  ...comAntifona(
    "Não vos lembreis, Senhor, dos delitos da minha juventude nem das minhas ignorâncias.",
    salmo("PSA 25:1-22", "Salmo 24", "A ti, Senhor"),
  ),
  ...comAntifona(
    "Creio que verei os bens do Senhor na terra dos vivos.",
    salmo("PSA 27:1-14", "Salmo 26", "O Senhor é a minha luz"),
  ),
  { linhas: [{ v: "O Senhor os coloque entre os príncipes.", r: "Entre os príncipes do seu povo." }] },
  EM_SILENCIO,
  { leitura: "JOB 13:22-28", titulo: "Quarta lição" },
  responsorio("Lembrai-vos de mim, ó Deus, porque a minha vida é um sopro; e já não me veja o olhar do homem.", [
    ["Do mais profundo clamei a vós, Senhor: Senhor, ouvi a minha voz.", NAO_ME_VEJA],
  ]),
  { leitura: "JOB 14:1-6", titulo: "Quinta lição" },
  responsorio(
    "Ai de mim, Senhor, porque pequei muito na minha vida! Que farei, pobre de mim? Para onde fugirei, senão para vós, meu Deus? Tende piedade de mim quando vierdes no último dia.",
    [["A minha alma está muito perturbada; mas vós, Senhor, socorrei-a.", NO_ULTIMO_DIA]],
  ),
  { leitura: "JOB 14:13-16", titulo: "Sexta lição" },
  responsorio(
    "Não vos lembreis dos meus pecados, Senhor, quando vierdes julgar o mundo pelo fogo.",
    [[DIRIGI, PELO_FOGO]],
    PELO_FOGO,
  ),
];

const terceiroNoturno: Bloco[] = [
  { titulo: "Terceiro noturno" },
  ...comAntifona(
    "Seja do vosso agrado, Senhor, livrar-me; Senhor, olhai para mim e socorrei-me.",
    salmo("PSA 40:2-18", "Salmo 39"),
  ),
  ...comAntifona("Curai, Senhor, a minha alma, porque pequei contra vós.", salmo("PSA 41:2-14", "Salmo 40")),
  ...comAntifona(
    "A minha alma tem sede do Deus vivo: quando irei e aparecerei diante da face do Senhor?",
    salmo("PSA 42:2-12", "Salmo 41"),
  ),
  {
    linhas: [
      {
        v: "Não entregueis às feras as almas que vos louvam.",
        r: "E não vos esqueçais para sempre das almas dos vossos pobres.",
      },
    ],
  },
  EM_SILENCIO,
  { leitura: "JOB 17:1-3.11-15", titulo: "Sétima lição" },
  responsorio(`Pecando eu todos os dias e não me arrependendo, o temor da morte me perturba. ${NAO_HA_REDENCAO}`, [
    ["Ó Deus, salvai-me pelo vosso nome, e livrai-me pelo vosso poder.", NAO_HA_REDENCAO],
  ]),
  { leitura: "JOB 19:20-27", titulo: "Oitava lição" },
  responsorio(
    "Senhor, não me julgueis segundo o que eu fiz: nada fiz de digno diante de vós; por isso suplico à vossa majestade que vós, ó Deus, apagueis a minha iniquidade.",
    [["Lavai-me, Senhor, mais e mais da minha injustiça, e purificai-me do meu delito.", APAGUEIS]],
  ),
  { leitura: "JOB 10:18-22", titulo: "Nona lição" },
  {
    titulo: "Responsório",
    linhas: [
      LIVRAI_ME_DA_MORTE,
      { v: "Eu tremo e tenho medo, enquanto não chegam o julgamento e a ira que há de vir.", r: ABALADOS },
      { v: "Aquele dia, dia de ira, de calamidade e de miséria, dia grande e muito amargo.", r: PELO_FOGO },
      { v: DESCANSO_E_LUZ, r: LIVRAI_ME_DA_MORTE },
    ],
  },
  { rubrica: "Quando se reza só este noturno, em lugar do responsório anterior diz-se o seguinte:" },
  responsorio(
    "Livrai-me, Senhor, dos caminhos do inferno, vós que quebrastes as portas de bronze, visitastes o inferno e destes luz aos que ali estavam, para que vos vissem, eles que estavam nas penas das trevas.",
    [["Clamando e dizendo: Viestes, ó nosso Redentor.", NAS_TREVAS]],
    NAS_TREVAS,
  ),
];

const NOTURNOS: Noturnos = [primeiroNoturno, segundoNoturno, terceiroNoturno];

const AO_REI = "Ao Rei, para quem todos vivem, vinde, adoremos.";
const VINDE = "Vinde, adoremos.";

const matinas: Bloco[] = [
  {
    rubrica: "O invitatório se diz no Dia de Finados, no dia da morte ou do sepultamento e quando se rezam os três noturnos.",
  },
  { titulo: "Invitatório" },
  { antifona: AO_REI },
  { antifona: AO_REI },
  { leitura: "PSA 95:1-2", titulo: "Salmo 94", poema: true },
  { antifona: AO_REI },
  { leitura: "PSA 95:3-4", poema: true },
  { antifona: VINDE },
  { leitura: "PSA 95:5-7", poema: true },
  { antifona: AO_REI },
  { leitura: "PSA 95:8-9", poema: true },
  { antifona: VINDE },
  { leitura: "PSA 95:10-11", poema: true },
  { antifona: AO_REI },
  REQUIEM,
  { antifona: VINDE },
  { antifona: AO_REI },
  {
    rubrica:
      "Quando não se rezam os três noturnos, reza-se um só: o primeiro na segunda e na quinta-feira, o segundo na terça e na sexta, o terceiro na quarta e no sábado.",
  },
  ...NOTURNOS.flat(),
  { rubrica: "Se as Laudes não se rezam logo em seguida, conclui-se assim:" },
  { linhas: [OUVI, FIDELIUM] },
  FIM,
];

const laudes: Bloco[] = [
  ...comAntifona("Exultarão no Senhor os ossos humilhados.", salmo("PSA 51:3-21", "Salmo 50")),
  ...comAntifona("Ouvi, Senhor, a minha oração: a vós virá toda a carne.", salmo("PSA 65:2-14", "Salmo 64")),
  ...comAntifona("A vossa direita me sustentou, Senhor.", salmo("PSA 63:2-12", "Salmo 62")),
  ...comAntifona("Da porta do inferno, livrai, Senhor, a minha alma.", salmo("ISA 38:10-20", "Cântico de Ezequias")),
  ...comAntifona(
    "Todo espírito louve o Senhor.",
    salmo("PSA 150:1-6", "Salmo 150", "Louvai o Senhor no seu santuário", "Todo espírito louve o Senhor."),
  ),
  AUDIVI,
  ...comAntifona(
    "Eu sou a ressurreição e a vida: quem crê em mim, ainda que esteja morto, viverá; e todo aquele que vive e crê em mim não morrerá para sempre.",
    salmo("LUK 1:68-79", "Cântico de Zacarias", "Bendito seja o Senhor", "no caminho da paz."),
  ),
  ...preces(salmo("PSA 130:1-8", "Salmo 129", "Do mais profundo")),
];

const conteudo: ConteudoDoOficio = {
  revisao: "a revisar pelo dono",
  horas: [
    { id: "vesperas", nome: "Vésperas", latim: "Ad Vesperas", blocos: vesperas },
    { id: "matinas", nome: "Matinas", latim: "Ad Matutinum", blocos: matinas },
    { id: "laudes", nome: "Laudes", latim: "Ad Laudes", blocos: laudes },
  ],
  noturnos: NOTURNOS,
};

export default conteudo;
