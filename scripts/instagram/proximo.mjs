import { HORARIOS, minutosDe } from "./horarios.mjs";

const LIMITE = 330 * 60;
const agora = new Date();
const [h, m, s] = agora.toLocaleTimeString("en-GB", { timeZone: "America/Sao_Paulo", hour12: false }).split(":").map(Number);
const segundos = h * 3600 + m * 60 + s;
const ordenados = HORARIOS.map((x) => ({ ...x, seg: minutosDe(x.brasilia) * 60 })).sort((a, b) => a.seg - b.seg);
const proximo = ordenados.find((x) => x.seg > segundos + 30) ?? { ...ordenados[0], seg: ordenados[0].seg + 86400 };
const espera = proximo.seg - segundos;
console.log(espera > LIMITE ? `${LIMITE} -` : `${espera} ${proximo.slot}`);
