import { describe, expect, it } from "vitest";
import { classificar, confere, diaDoTitulo, lerAoVivo, lerFeed, leiturasDaPagina, referenciaDoTitulo, siglaDoLivro, type Regra } from "../../supabase/functions/videos/regras";

const GILSON: Regra[] = [
  { tipo: "homilia", contem: ["Meditação da Palavra"] },
  { tipo: "terco", contem: ["Santo Rosário", "Rosário da Vitória"] },
];
const PAULO_RICARDO: Regra[] = [
  { tipo: "homilia", contem: ["Homilia Diária", "Homilia Dominical"], exigeData: true },
  { tipo: "terco", contem: ["Reze o terço hoje"], exigeData: true },
];
const SHANKAR: Regra[] = [{ tipo: "missa", contem: ["SANTA MISSA"] }];

const entrada = (titulo: string, publicado: string) => ({ id: "abcdefghijk", titulo, publicado });

describe("lerFeed", () => {
  it("lê id, título e data, e desfaz as entidades", () => {
    const xml = `<feed><title>Canal</title><entry><yt:videoId>AbC_12-xyz9</yt:videoId><title>Fé &amp; vida | (Lucas 18, 1-8)</title><published>2026-11-14T08:00:24+00:00</published></entry></feed>`;
    expect(lerFeed(xml)).toEqual([{ id: "AbC_12-xyz9", titulo: "Fé & vida | (Lucas 18, 1-8)", publicado: "2026-11-14T08:00:24+00:00" }]);
  });
});

describe("classificar", () => {
  it("Frei Gilson: a meditação do dia é homilia, com a passagem", () => {
    const v = classificar(entrada("Deus quer te confiar muito mais | (Mateus 25, 14-30) #2895 | Meditação da Palavra", "2026-11-15T08:00:10+00:00"), GILSON);
    expect(v).toEqual({ tipo: "homilia", dia: "2026-11-15", referencia: { sigla: "Mt", capitulo: 25, texto: "Mt 25,14-30" } });
  });

  it("Frei Gilson: o rosário ao vivo é terço, no dia do título", () => {
    expect(classificar(entrada("Santo Rosário | Sexta-feira | 04:00 | 13/11/2026 | Live Ao vivo", "2026-11-13T10:41:50+00:00"), GILSON)).toMatchObject({ tipo: "terco", dia: "2026-11-13" });
  });

  it("vídeo que não segue nenhuma regra fica de fora", () => {
    expect(classificar(entrada("Quem aceita esse desafio???", "2026-11-10T10:00:22+00:00"), GILSON)).toBeNull();
  });

  it("Padre Paulo Ricardo: a homilia de domingo publicada no sábado vale para o domingo", () => {
    expect(classificar(entrada("Homilia Dominical | O talento que precisamos multiplicar (33º Domingo do Tempo Comum - 15/11/26)", "2026-11-14T20:00:08+00:00"), PAULO_RICARDO)).toMatchObject({ tipo: "homilia", dia: "2026-11-15", referencia: null });
  });

  it("Padre Paulo Ricardo: homilia publicada antes, sem data no título, fica de fora", () => {
    expect(classificar(entrada("Homilia Diária | O cego de Jericó e o desejo de um olhar sobrenatural (Segunda-feira 33ª Sem. T. C.)", "2026-11-13T20:49:35+00:00"), PAULO_RICARDO)).toBeNull();
  });

  it("título com acento decomposto ainda acha o livro", () => {
    expect(referenciaDoTitulo("Busca dos interesses pessoais | (Joa\u0303o 2, 13-22)".normalize("NFC"))).toMatchObject({ sigla: "Jo", capitulo: 2 });
    expect(lerFeed("<entry><yt:videoId>abcdefghijk</yt:videoId><title>(Joa\u0303o 2, 13-22)</title><published>2026-11-09T08:00:00+00:00</published></entry>")[0]!.titulo).toBe("(João 2, 13-22)");
  });

  it("Padre Paulo Ricardo: o terço com a data por extenso", () => {
    expect(classificar(entrada("Reze o terço hoje com o Padre Paulo Ricardo! (15 de novembro)", "2026-11-15T09:00:08+00:00"), PAULO_RICARDO)).toMatchObject({ tipo: "terco", dia: "2026-11-15" });
  });

  it("Padre Reginaldo Manzotti: o Evangelho do dia com a passagem abreviada, e a missa", () => {
    const regras: Regra[] = [
      { tipo: "homilia", contem: ["EVANGELHO DO DIA"], exigeData: true },
      { tipo: "missa", contem: ["SANTA MISSA"], exigeData: true },
    ];
    expect(classificar(entrada("EVANGELHO DO DIA 15/11/2026 | MT 25, 14-30", "2026-11-15T09:00:00+00:00"), regras)).toEqual({ tipo: "homilia", dia: "2026-11-15", referencia: { sigla: "Mt", capitulo: 25, texto: "Mt 25,14-30" } });
    expect(classificar(entrada("EVANGELHO DO DIA 14/11/2026 | LC 18, 1-8", "2026-11-14T09:00:00+00:00"), regras)?.referencia?.sigla).toBe("Lc");
    expect(classificar(entrada("SANTA MISSA DOMINICAL | 08H | 15/11/2026", "2026-11-15T12:00:00+00:00"), regras)).toMatchObject({ tipo: "missa", dia: "2026-11-15" });
    expect(classificar(entrada("ORAÇÃO DA MANHÃ | 15/11/2026", "2026-11-15T08:00:00+00:00"), regras)).toBeNull();
  });

  it("Padre Chrystian Shankar: a missa em maiúsculas", () => {
    expect(classificar(entrada("SANTA MISSA |TODOS OS SANTOS E SANTAS [01/11/2026] -PADRE CHRYSTIAN SHANKAR", "2026-11-01T23:59:03+00:00"), SHANKAR)).toMatchObject({ tipo: "missa", dia: "2026-11-01" });
  });

  it("vídeo publicado de madrugada pelo horário de Brasília fica no dia certo", () => {
    expect(classificar(entrada("SANTA MISSA | ESTUDO BÍBLICO", "2026-11-02T01:30:00+00:00"), SHANKAR)).toMatchObject({ dia: "2026-11-01" });
  });
});

describe("datas", () => {
  it("data por extenso perto da virada do ano fica no ano mais próximo", () => {
    expect(diaDoTitulo("Terço (31 de dezembro)", "2027-01-01T12:00:00+00:00")).toBe("2026-12-31");
    expect(diaDoTitulo("Terço (1º de janeiro)", "2026-12-31T23:00:00+00:00")).toBe("2027-01-01");
  });

  it("data impossível no título é ignorada", () => {
    expect(diaDoTitulo("Missa 31/02/2026", "2026-02-27T12:00:00+00:00")).toBe("2026-02-27");
  });
});

describe("passagem", () => {
  it("reconhece os nomes dos livros, inclusive a grafia com ss", () => {
    expect(siglaDoLivro("1Tessalonissenses")).toBe("1Ts");
    expect(siglaDoLivro("João")).toBe("Jo");
    expect(siglaDoLivro("Eclesiástico")).toBe("Eclo");
    expect(siglaDoLivro("Eclesiastes")).toBe("Ecl");
    expect(referenciaDoTitulo("Imponhamos limites ao ventre | (Filipenses 3, 17-4,1) #2886")).toMatchObject({ sigla: "Fl", capitulo: 3 });
    expect(referenciaDoTitulo("Sem passagem")).toBeNull();
  });

  it("lê as leituras da página da liturgia e confere a passagem", () => {
    const html = "<h2>Primeira leitura: Sb 6,12-16</h2><h2>Salmo responsorial: Sl 62(63),2.3-4</h2><h2>Segunda leitura: 1Ts 4,13-18</h2><h2>Aclamação ao Evangelho: Mt 24,42a.44</h2><h2>Evangelho: Mt 25,1-13</h2>";
    const l = leiturasDaPagina(html);
    expect(l).toEqual([
      { sigla: "Sb", capitulo: 6 },
      { sigla: "1Ts", capitulo: 4 },
      { sigla: "Mt", capitulo: 25 },
    ]);
    expect(confere({ sigla: "1Ts", capitulo: 4, texto: "" }, l)).toBe(true);
    expect(confere({ sigla: "Lc", capitulo: 18, texto: "" }, l)).toBe(false);
    expect(confere({ sigla: "Cl", capitulo: 4, texto: "" }, l)).toBe(false);
  });
});

describe("ao vivo", () => {
  const pagina = (vivo: boolean) =>
    `<html>{"contents":{"twoColumnWatchNextResults":{"results":{"results":{"contents":[{"videoPrimaryInfoRenderer":{"title":{"runs":[{"text":"Ter\\u00e7o com a Canção Nova \\"ao vivo\\""}]},"viewCount":{"videoViewCountRenderer":{"isLive":${vivo}}}}}]}}}},"updatedMetadataEndpoint":{"clickTrackingParams":"x","commandMetadata":{"webCommandMetadata":{"apiUrl":"/youtubei/v1/updated_metadata"}},"updatedMetadataEndpoint":{"videoId":"lDXM4g7ewAA"}}</html>`;

  it("lê o vídeo e o título da transmissão no ar", () => {
    expect(lerAoVivo(pagina(true))).toEqual({ id: "lDXM4g7ewAA", titulo: 'Terço com a Canção Nova "ao vivo"' });
  });

  it("canal fora do ar não tem transmissão", () => {
    expect(lerAoVivo(pagina(false))).toBeNull();
    expect(lerAoVivo('<link rel="canonical" href="https://www.youtube.com/channel/UC6V9mqiVuzd-v3ozUfCtZFA">')).toBeNull();
  });
});
