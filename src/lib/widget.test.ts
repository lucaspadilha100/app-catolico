import { describe, expect, it } from "vitest";
import { diasDoWidget } from "./widget";

describe("widget do Evangelho", () => {
  it("prepara os próximos 7 dias com o Evangelho", async () => {
    const dias = await diasDoWidget("");
    expect(dias).toHaveLength(7);
    for (const d of dias) {
      expect(d.data).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(d.titulo.length).toBeGreaterThan(3);
      expect(d.evangelho).toMatch(/^(Mt|Mc|Lc|Jo) \d/);
    }
  });
});
