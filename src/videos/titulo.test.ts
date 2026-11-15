import { expect, it } from "vitest";
import { tituloLimpo } from "./api";

it("títulos limpos, sem data repetida, sem caixa alta e sem o nome do canal", () => {
  const casos: [string, string, string][] = [
    ["Deus quer te confiar muito mais | (Mateus 25, 14-30) #2895 | Meditação da Palavra", "Frei Gilson", "Deus quer te confiar muito mais"],
    ["Homilia Dominical | O talento que precisamos multiplicar (33º Domingo do Tempo Comum - 15/11/26)", "Padre Paulo Ricardo", "O talento que precisamos multiplicar"],
    ["Reze o terço hoje com o Padre Paulo Ricardo! (15 de novembro)", "Padre Paulo Ricardo", "Reze o terço hoje"],
    ["EVANGELHO DO DIA 15/11/2026 | MT 25, 14-30", "Padre Reginaldo Manzotti", "Evangelho do dia"],
    ["SANTA MISSA DOMINICAL | 08H | 15/11/2026", "Padre Reginaldo Manzotti", "Santa Missa dominical"],
    ["Homilia | 15/11/26 | Santa Missa Dominical com Pe. Reginaldo Manzotti", "TV Evangelizar", "Homilia: Santa Missa Dominical"],
    ["Santa Missa em Honra a Nossa Senhora do Rocio direito de Paranaguá/PR 15/11/26", "TV Evangelizar", "Santa Missa em Honra a Nossa Senhora do Rocio direito de Paranaguá/PR"],
    ["Domingo: Mistérios Gloriosos | 15/11/26 | Terço Mariano com @PadreManzottiOficial", "TV Evangelizar", "Domingo: Mistérios Gloriosos"],
    ["SANTA MISSA |TODOS OS SANTOS E SANTAS [01/11/2026] -PADRE CHRYSTIAN SHANKAR", "Padre Chrystian Shankar", "Todos os santos e santas"],
  ];
  for (const [titulo, canal, esperado] of casos) expect(tituloLimpo(titulo, canal), titulo).toBe(esperado);
});
