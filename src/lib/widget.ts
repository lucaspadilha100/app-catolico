import { Capacitor, registerPlugin } from "@capacitor/core";
import { hoje, paraIso, somaDias } from "@/liturgia/datas";
import { diaLiturgico } from "@/liturgia/calendario";
import { carregarLecionario, leiturasDoDia } from "@/liturgia/lecionario";

const Widget = registerPlugin<{ atualizar(o: { dias: string }): Promise<void> }>("Widget");

export interface DiaDoWidget {
  data: string;
  titulo: string;
  evangelho: string;
}

export async function diasDoWidget(diocese: string, quantos = 7): Promise<DiaDoWidget[]> {
  const lecionario = await carregarLecionario();
  return Array.from({ length: quantos }, (_, i) => {
    const l = diaLiturgico(somaDias(hoje(), i), diocese);
    const evangelho = leiturasDoDia(l, lecionario)[0]?.leituras.find((x) => x.tipo === "evangelho")?.referencia ?? "";
    return { data: paraIso(l.data), titulo: l.titulo, evangelho };
  });
}

export async function atualizarWidget(diocese: string) {
  if (Capacitor.getPlatform() !== "android") return;
  try {
    await Widget.atualizar({ dias: JSON.stringify(await diasDoWidget(diocese)) });
  } catch {}
}
