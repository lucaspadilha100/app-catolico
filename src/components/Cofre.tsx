import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { pinValido } from "@/confissao/cofre";
import { useCofre } from "@/confissao/useCofre";
import { Cartao } from "@/components/Cartao";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-center text-xl tracking-[0.4em]";

function CampoPin({ valor, onChange, rotulo, autoFocus }: { valor: string; onChange: (v: string) => void; rotulo: string; autoFocus?: boolean }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      <input
        type="password"
        inputMode="numeric"
        autoComplete="off"
        autoFocus={autoFocus}
        value={valor}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 12))}
        className={CAMPO}
      />
    </label>
  );
}

function Criar() {
  const { criar } = useCofre();
  const [pin, setPin] = useState("");
  const [repetir, setRepetir] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const erro = repetir.length >= pin.length && repetir && pin !== repetir ? "Os dois PINs não são iguais." : "";

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!pinValido(pin) || pin !== repetir) return;
    setOcupado(true);
    await criar(pin);
    setOcupado(false);
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4">
      <p className="flex items-center gap-2 font-semibold text-marca">
        <Lock className="size-5" aria-hidden /> Crie um PIN de pelo menos 4 números
      </p>
      <p className="text-sm text-tinta-suave">Se esquecer o PIN, não há como recuperar o que foi guardado.</p>
      <CampoPin rotulo="PIN" valor={pin} onChange={setPin} autoFocus />
      <CampoPin rotulo="Repita o PIN" valor={repetir} onChange={setRepetir} />
      {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
      <button
        type="submit"
        disabled={!pinValido(pin) || pin !== repetir || ocupado}
        className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50"
      >
        {ocupado ? "Guardando" : "Criar PIN"}
      </button>
    </form>
  );
}

function Abrir() {
  const { abrir, apagar } = useCofre();
  const [pin, setPin] = useState("");
  const [erro, setErro] = useState(false);
  const [ocupado, setOcupado] = useState(false);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setOcupado(true);
    const ok = await abrir(pin);
    setOcupado(false);
    if (!ok) {
      setErro(true);
      setPin("");
    }
  }

  const esqueci = () => {
    if (window.confirm("Sem o PIN não há como abrir. Apagar tudo o que estava guardado (exame, propósitos e diário) e começar de novo?")) apagar();
  };

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4">
      <p className="flex items-center gap-2 font-semibold text-marca">
        <Lock className="size-5" aria-hidden /> Digite o seu PIN
      </p>
      <CampoPin rotulo="PIN" valor={pin} onChange={(v) => (setPin(v), setErro(false))} autoFocus />
      {erro && <p className="text-sm font-medium text-[#a9271f]">PIN incorreto.</p>}
      <button type="submit" disabled={pin.length < 4 || ocupado} className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50">
        {ocupado ? "Abrindo" : "Abrir"}
      </button>
      <button type="button" onClick={esqueci} className="min-h-11 text-sm font-medium text-tinta-suave underline-offset-4 hover:underline">
        Esqueci o PIN
      </button>
    </form>
  );
}

export function PortaDoCofre({ children }: { children: ReactNode }) {
  const { existe, aberto } = useCofre();
  if (aberto) return <>{children}</>;
  return <Cartao>{existe ? <Abrir /> : <Criar />}</Cartao>;
}

export function BotaoTrancar() {
  const { trancar } = useCofre();
  return (
    <button type="button" onClick={trancar} className="flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium text-tinta-suave">
      <Lock className="size-4" aria-hidden /> Trancar
    </button>
  );
}
