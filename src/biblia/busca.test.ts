import { describe, expect, it } from "vitest";
import { interpretar } from "./busca";

const ir = (t: string) => {
  const d = interpretar(t);
  return d ? `${d.livro.codigo} ${d.capitulo}${d.versiculo ? `:${d.versiculo}` : ""}` : null;
};

describe("ir para uma passagem", () => {
  it("abreviaturas, nomes e versículo", () => {
    expect(ir("mc 4")).toBe("MRK 4");
    expect(ir("Marcos 4")).toBe("MRK 4");
    expect(ir("1cor 13")).toBe("1CO 13");
    expect(ir("1 Coríntios 13")).toBe("1CO 13");
    expect(ir("jo 3,16")).toBe("JHN 3:16");
    expect(ir("jó 1")).toBe("JOB 1");
    expect(ir("joão 1")).toBe("JHN 1");
    expect(ir("salmo 22")).toBe("PSA 22");
    expect(ir("sl 50")).toBe("PSA 50");
    expect(ir("gen")).toBe("GEN 1");
    expect(ir("ap 21:4")).toBe("REV 21:4");
    expect(ir("xyz 3")).toBeNull();
  });
});
