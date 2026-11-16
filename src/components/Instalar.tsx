import { useState } from "react";
import { Check, Copy, Download, Ellipsis, EllipsisVertical, SquarePlus, Share, X } from "lucide-react";
import { NOME_DO_APP } from "@/marca";
import { dispensarInstalacao, instalarApp, iphoneForaDoSafari, useInstalar, type ModoDeInstalar } from "@/lib/instalar";

const ICONE = "inline size-5 align-text-bottom";

function AbrirNoSafari() {
  const [copiado, setCopiado] = useState(false);
  const endereco = `${location.origin}/`;
  return (
    <div className="flex flex-col gap-3 text-tinta">
      <p className="font-medium">No iPhone, só o Safari instala o app.</p>
      <p>
        Abra o Safari e entre em <span className="font-semibold break-all">{endereco.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
      </p>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(endereco);
            setCopiado(true);
          } catch {
            setCopiado(false);
          }
        }}
        className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-borda bg-papel px-5 font-semibold text-tinta"
      >
        {copiado ? <Check className="size-5" aria-hidden /> : <Copy className="size-5" aria-hidden />}
        {copiado ? "Endereço copiado" : "Copiar endereço"}
      </button>
    </div>
  );
}

export function PassosDoIphone() {
  if (iphoneForaDoSafari()) return <AbrirNoSafari />;
  return (
    <ol className="flex list-decimal flex-col gap-2 pl-5 text-tinta marker:font-bold marker:text-destaque-texto">
      <li>
        No Safari, toque em Compartilhar <Share className={ICONE} aria-hidden />. Se não aparecer, toque antes em <Ellipsis className={ICONE} aria-label="mais opções" />.
      </li>
      <li>
        Toque em Adicionar à Tela de Início <SquarePlus className={ICONE} aria-hidden />. Se não aparecer, toque em Ver mais.
      </li>
      <li>Toque em Adicionar.</li>
    </ol>
  );
}

function Conteudo({ modo }: { modo: Exclude<ModoDeInstalar, null> }) {
  const [abrindo, setAbrindo] = useState(false);

  if (modo === "botao") {
    return (
      <button
        type="button"
        disabled={abrindo}
        onClick={async () => {
          setAbrindo(true);
          await instalarApp();
          setAbrindo(false);
        }}
        className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primario px-5 font-semibold text-sobre-primario disabled:opacity-50"
      >
        <Download className="size-5" aria-hidden /> Instalar
      </button>
    );
  }
  if (modo === "iphone") return <PassosDoIphone />;
  if (modo === "android-menu") {
    return (
      <p className="text-tinta">
        Toque no menu <EllipsisVertical className={ICONE} aria-label="do navegador" /> e depois em Instalar app ou Adicionar à tela inicial.
      </p>
    );
  }
  return (
    <p className="text-tinta">
      Abra este endereço no Chrome: toque no menu <EllipsisVertical className={ICONE} aria-hidden /> e escolha abrir no navegador.
    </p>
  );
}

export function Instalar({ fixo = false, className = "" }: { fixo?: boolean; className?: string }) {
  const { modo, dispensado } = useInstalar();
  if (!modo || (!fixo && dispensado)) return null;

  return (
    <section aria-labelledby="instalar-titulo" className={`flex flex-col gap-3 rounded-3xl border border-borda bg-cartao p-5 ${className}`}>
      <div className="flex items-center gap-3.5">
        <img src="/icone-192.png" alt="" className="size-12 shrink-0 rounded-xl" />
        <span className="min-w-0 flex-1">
          <span id="instalar-titulo" className="block font-bold text-tinta">
            Instale o app
          </span>
          <span className="block text-[0.9375rem] text-tinta-suave">{NOME_DO_APP} na tela inicial</span>
        </span>
        {!fixo && (
          <button type="button" onClick={dispensarInstalacao} aria-label="Agora não" className="-mr-2 grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
            <X className="size-5" aria-hidden />
          </button>
        )}
      </div>
      <Conteudo modo={modo} />
    </section>
  );
}
