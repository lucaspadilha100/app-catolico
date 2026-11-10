import { describe, expect, it } from "vitest";
import { deIso } from "./datas";
import { diaLiturgico } from "./calendario";
import { ehDiaDePreceito, penitenciaDoDia } from "./preceitos";

const l = (iso: string) => diaLiturgico(deIso(iso)!);

describe("preceitos e penitência no Brasil", () => {
  it("dias de preceito: domingos, Mãe de Deus, Corpus Christi, Imaculada e Natal", () => {
    for (const iso of ["2026-11-15", "2026-01-01", "2026-06-04", "2026-12-08", "2026-12-25"]) expect(ehDiaDePreceito(l(iso)), iso).toBe(true);
    for (const iso of ["2026-08-15", "2026-11-02", "2026-11-10", "2026-06-29"]) expect(ehDiaDePreceito(l(iso)), iso).toBe(false);
  });

  it("jejum e abstinência na Quarta de Cinzas e na Sexta-feira da Paixão", () => {
    expect(penitenciaDoDia(l("2026-02-18"))).toBe("jejum-e-abstinencia");
    expect(penitenciaDoDia(l("2026-04-03"))).toBe("jejum-e-abstinencia");
  });

  it("toda sexta-feira é dia de penitência, menos nas solenidades e na oitava da Páscoa", () => {
    expect(penitenciaDoDia(l("2026-11-13"))).toBe("penitencia");
    expect(penitenciaDoDia(l("2026-12-25"))).toBeNull();
    expect(penitenciaDoDia(l("2026-04-10"))).toBeNull();
    expect(penitenciaDoDia(l("2026-11-12"))).toBeNull();
  });
});
