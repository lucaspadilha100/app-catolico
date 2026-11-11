import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { renderSVG } from "uqr";
import { codigoPix } from "@/paroquias/pix";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";

const real = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Pix({ chave, nome, cidade, recebedor, valores }: { chave: string; nome: string; cidade: string; recebedor?: string; valores?: number[] }) {
  const [valor, setValor] = useState("");
  const [copiado, setCopiado] = useState<"" | "codigo" | "chave">("");
  const numero = Number(valor.replace(/\./g, "").replace(",", "."));
  const codigo = useMemo(() => codigoPix({ chave, nome, cidade, valor: Number.isFinite(numero) && numero > 0 ? Math.min(numero, 99999) : null }), [chave, nome, cidade, numero]);
  const qr = useMemo(() => renderSVG(codigo, { border: 2 }), [codigo]);

  async function copiar(texto: string, qual: "codigo" | "chave") {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(qual);
      setTimeout(() => setCopiado(""), 2500);
    } catch {}
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {valores && (
        <div className="grid w-full grid-cols-4 gap-2" role="group" aria-label="Valor">
          {valores.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={numero === v}
              onClick={() => setValor(numero === v ? "" : String(v))}
              className={`min-h-11 rounded-xl border px-1 font-semibold ${numero === v ? "border-destaque bg-destaque text-sobre-destaque" : "border-borda bg-papel text-tinta"}`}
            >
              {real(v)}
            </button>
          ))}
        </div>
      )}
      <label className="flex w-full flex-col gap-1">
        <span className="text-sm text-tinta-suave">{valores ? "Outro valor" : "Valor"}</span>
        <input value={valor} onChange={(e) => setValor(e.target.value.replace(/[^\d.,]/g, ""))} inputMode="decimal" placeholder="R$ 0,00" className={CAMPO} />
      </label>
      <div className="w-full max-w-60 overflow-hidden rounded-xl bg-white" role="img" aria-label="QR Code do PIX" dangerouslySetInnerHTML={{ __html: qr }} />
      <button type="button" onClick={() => void copiar(codigo, "codigo")} className={`${BOTAO} w-full`}>
        {copiado === "codigo" ? <Check className="size-5" aria-hidden /> : <Copy className="size-5" aria-hidden />}
        {copiado === "codigo" ? "Copiado" : "Copiar código PIX"}
      </button>
      <dl className="grid w-full grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 text-sm">
        {recebedor && (
          <>
            <dt className="text-tinta-suave">Recebedor</dt>
            <dd className="text-tinta">{recebedor}</dd>
          </>
        )}
        <dt className="text-tinta-suave">Chave</dt>
        <dd className="flex min-w-0 items-center gap-2 text-tinta">
          <span className="min-w-0 break-all">{chave}</span>
          <button type="button" onClick={() => void copiar(chave, "chave")} aria-label="Copiar chave" className="grid size-9 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
            {copiado === "chave" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
          </button>
        </dd>
      </dl>
    </div>
  );
}
