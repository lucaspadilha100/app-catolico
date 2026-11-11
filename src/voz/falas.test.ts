import { describe, expect, it } from "vitest";
import { passosDoRosario } from "@/oracao/terco";
import { falasDaOracao, falasDosPassos, momentoDaHora } from "./falas";

describe("rezar por voz", () => {
  it("a Ave-Maria e o Pai-Nosso dividem: o app começa, a pessoa responde", () => {
    expect(falasDaOracao("ave-maria").map((f) => f.vez)).toEqual(["app", "voce"]);
    expect(falasDaOracao("pai-nosso")[1]!.texto).toMatch(/^O pão nosso/);
  });

  it("o Ângelus alterna versículo e resposta e traz as Ave-Marias", () => {
    const f = falasDaOracao("angelus");
    expect(f[0]).toMatchObject({ vez: "app", texto: "O Anjo do Senhor anunciou a Maria." });
    expect(f[1]).toMatchObject({ vez: "voce" });
    expect(f.filter((x) => x.texto.startsWith("Ave Maria"))).toHaveLength(3);
  });

  it("o terço anuncia os mistérios e conta as dezenas", () => {
    const f = falasDosPassos(passosDoRosario("gozosos"));
    expect(f.filter((x) => x.texto.startsWith("Ave Maria"))).toHaveLength(53);
    expect(f.some((x) => x.texto.startsWith("1º Mistério Gozoso"))).toBe(true);
    expect(f.find((x) => x.rotulo === "Ave-Maria 10 de 10")).toBeDefined();
  });

  it("escolhe a oração pela hora", () => {
    expect([6, 12, 15, 20, 2].map(momentoDaHora)).toEqual(["evangelho", "angelus", "misericordia", "terco", "noite"]);
  });
});
