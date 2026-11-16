import { useEffect, useState } from "react";
import { BOTAO, BOTAO_CLARO } from "@/components/Botao";
import { Check, Plus } from "lucide-react";
import { NOME_DA_ORACAO_DA_CAMPANHA, campanhaDoMomento, somarNaCampanha, type Campanha } from "@/comunidade/api";
import { Cartao } from "@/components/Cartao";


export function CartaoDaCampanha() {
  const [c, setC] = useState<Campanha | null>(null);
  const [somado, setSomado] = useState(false);
  useEffect(() => {
    campanhaDoMomento()
      .then(setC)
      .catch(() => {});
  }, []);
  if (!c) return null;
  const [um, varios] = NOME_DA_ORACAO_DA_CAMPANHA[c.oracao];
  const p = Math.min(100, (c.contagem / c.meta) * 100);
  const chave = `santinho-campanha-${c.id}-${new Date().toLocaleDateString("sv-SE")}`;
  let hoje = 0;
  try {
    hoje = Number(localStorage.getItem(chave) ?? 0);
  } catch {}
  async function somar() {
    if (!c) return;
    const total = await somarNaCampanha(c.id).catch(() => null);
    if (total === null) return;
    try {
      localStorage.setItem(chave, String(hoje + 1));
    } catch {}
    setC({ ...c, contagem: total });
    setSomado(true);
  }
  return (
    <Cartao className="flex flex-col gap-3">
      <p className="text-xl font-bold text-marca tracking-[-0.02em]">{c.titulo}</p>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-marca-fundo" role="progressbar" aria-valuenow={c.contagem} aria-valuemin={0} aria-valuemax={c.meta}>
        <div className="h-full rounded-full bg-destaque" style={{ width: `${Math.max(p, 1)}%` }} />
      </div>
      <p className="text-sm text-tinta-suave">
        {c.contagem.toLocaleString("pt-BR")} de {c.meta.toLocaleString("pt-BR")} {varios}
      </p>
      {hoje < 10 && (
        <button type="button" onClick={() => void somar()} disabled={somado} className={somado ? BOTAO_CLARO : BOTAO}>
          {somado ? <Check className="size-5" aria-hidden /> : <Plus className="size-5" aria-hidden />}
          {somado ? "Somado" : `Rezei um ${um}`}
        </button>
      )}
    </Cartao>
  );
}
