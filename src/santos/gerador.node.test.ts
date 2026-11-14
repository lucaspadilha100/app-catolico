import { describe, expect, it } from "vitest";
import { montar } from "../../scripts/santos/gerador.mjs";
import { PARTES, letraDoNome, parteDoId } from "./comum";
import type { CreditoDoSanto, Santo, SantoDoIndice } from "./tipos";

const ficha = (id: string, nome: string, data: string, extra: object = {}) => ({
  id,
  nome,
  data,
  calendario: false,
  situacao: "santo",
  grupo: "populares",
  nomes: [nome.split(" ")[1]],
  resumo: `Resumo de ${nome}.`,
  historia: ["Primeiro parágrafo.", "Segundo parágrafo."],
  fontes: ["https://exemplo.org/fonte"],
  revisao: "a revisar pelo dono",
  ...extra,
});

const foto = (arquivo: string) => ({ arquivo, obra: "Retrato", autor: "Autor", licenca: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:X.jpg", foco: "50% 20%" });

const FICHAS = [
  ficha("santa-ana", "Santa Ana", "0726", { calendario: true, grupo: "calendario", imagem: foto("commons/santa-ana.webp"), padroeiro: ["das avós"] }),
  ficha("sao-joaquim", "São Joaquim", "0726", { imagem: foto("commons/sao-joaquim.webp") }),
  ficha("santa-zita", "Santa Zita", "0427"),
  ficha("beato-zeferino", "Beato Zeferino", "0427", { situacao: "beato", imagem: { ...foto("zeferino.webp"), fonte: "Diocese de Exemplo" } }),
];

const ler = <T,>(arquivos: Map<string, string>, nome: string) => JSON.parse(arquivos.get(nome)!) as T;

describe("gerador dos santos", () => {
  const { arquivos, manifesto } = montar(FICHAS);

  it("um arquivo por dia, com as fichas inteiras daquela data", () => {
    expect(Object.keys(manifesto.dias)).toEqual(["0427", "0726"]);
    const julho = ler<Santo[]>(arquivos, manifesto.dias["0726"]!);
    expect(julho.map((s) => s.id)).toEqual(["santa-ana", "sao-joaquim"]);
    expect(julho[0]!.historia).toHaveLength(2);
    expect(julho[0]!.imagem?.obra).toBe("Retrato");
    expect(julho[0]).not.toHaveProperty("fontes");
    expect(julho[0]).not.toHaveProperty("revisao");
  });

  it("índice leve, sem texto longo nem crédito", () => {
    const indice = ler<SantoDoIndice[]>(arquivos, manifesto.indice);
    expect(indice.map((s) => s.id)).toEqual(["santa-ana", "sao-joaquim", "beato-zeferino", "santa-zita"]);
    const ana = indice[0]!;
    expect(Object.keys(ana).sort()).toEqual(["calendario", "data", "grupo", "id", "imagem", "nome", "nomes", "padroeiro", "situacao"]);
    expect(ana.imagem).toEqual({ arquivo: "commons/santa-ana.webp", foco: "50% 20%" });
    expect(indice.find((s) => s.id === "santa-zita")).not.toHaveProperty("imagem");
  });

  it("partes por id: cada santo na parte que o app calcula", () => {
    expect(manifesto.partes).toHaveLength(PARTES);
    for (const s of FICHAS) {
      const parte = ler<SantoDoIndice[]>(arquivos, manifesto.partes[parteDoId(s.id)]!);
      expect(parte.map((x) => x.id)).toContain(s.id);
    }
    expect(manifesto.partes.flatMap((n) => ler<SantoDoIndice[]>(arquivos, n)).length).toBe(FICHAS.length);
  });

  it("créditos por letra, só de quem tem foto", () => {
    expect(Object.keys(manifesto.creditos)).toEqual(["A", "J", "Z"]);
    expect(manifesto.creditos.Z!.total).toBe(1);
    const z = ler<CreditoDoSanto[]>(arquivos, manifesto.creditos.Z!.arquivo);
    expect(z).toEqual([{ id: "beato-zeferino", nome: "Beato Zeferino", obra: "Retrato", autor: "Autor", licenca: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:X.jpg", fonte: "Diocese de Exemplo" }]);
    expect(letraDoNome("Nossa Senhora da Abadia")).toBe("A");
    expect(letraDoNome("Santo Êxpedito")).toBe("E");
  });

  it("contagens no manifesto", () => {
    expect(manifesto.total).toBe(4);
    expect(manifesto.comFoto).toBe(3);
    expect(manifesto.grupos).toEqual({ calendario: 1, populares: 3 });
  });

  it("nomes com hash estáveis: mudar uma ficha só troca o que a contém", () => {
    const de_novo = montar(FICHAS.map((f) => ({ ...f })));
    expect([...de_novo.arquivos.keys()]).toEqual([...arquivos.keys()]);
    const mudada = montar(FICHAS.map((f) => (f.id === "santa-zita" ? { ...f, resumo: "Outro resumo." } : f)));
    const trocados = [...mudada.arquivos.keys()].filter((n) => !arquivos.has(n));
    expect(trocados).toEqual([mudada.manifesto.dias["0427"]]);
    expect(mudada.manifesto.dias["0726"]).toBe(manifesto.dias["0726"]);
    for (const n of arquivos.keys()) expect(n).toMatch(/^[a-z0-9-]+\.[0-9a-f]{10}\.json$/);
  });

  it("recusa ficha quebrada", () => {
    expect(() => montar([...FICHAS, ficha("santa-ana", "Outra Ana", "0101")])).toThrow(/id repetido/);
    expect(() => montar([ficha("x", "São X", "1340")])).toThrow(/data inválida/);
    expect(() => montar([ficha("x", "São X", "0101", { imagem: { obra: "a" } })])).toThrow(/imagem sem arquivo/);
  });
});
