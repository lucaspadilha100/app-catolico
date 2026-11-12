import { useState, type ReactNode } from "react";
import { Bell, BellOff, Check } from "lucide-react";
import { ativar, atualizar, desativar, ehIphone, instalado, lerGuardado, permitido, suportado, type Lembretes as TipoLembretes } from "@/lembretes/lembretes";
import { ehNativo } from "@/lib/nativo";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Voltar } from "@/components/Devocao";

const CAMPO = "min-h-11 rounded-xl border border-borda bg-papel px-3 text-base text-tinta";

function Linha({ titulo, detalhe, ligado, onLigar, children }: { titulo: string; detalhe?: string; ligado: boolean; onLigar: (v: boolean) => void; children?: ReactNode }) {
  return (
    <div className="flex min-h-16 items-center gap-3 px-4 py-3">
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-tinta">{titulo}</span>
        {detalhe && <span className="block text-sm text-tinta-suave">{detalhe}</span>}
      </span>
      {ligado && children}
      <button
        type="button"
        role="switch"
        aria-checked={ligado}
        aria-label={titulo}
        onClick={() => onLigar(!ligado)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${ligado ? "bg-destaque" : "bg-borda"}`}
      >
        <span className={`absolute top-1 size-5 rounded-full bg-white shadow transition-all ${ligado ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}

export default function Lembretes() {
  const [g, setG] = useState(lerGuardado);
  const [estado, setEstado] = useState<"" | "ativando" | "negado" | "erro" | "salvo">("");
  const l = g.lembretes;
  const pode = suportado();
  const precisaInstalar = !ehNativo() && ehIphone() && !instalado();
  const permissao = ehNativo() ? (g.ativo ? "granted" : "default") : pode ? Notification.permission : "default";

  async function mudar(novo: TipoLembretes) {
    setG({ ...g, lembretes: novo });
    if (g.ativo) {
      const ok = await atualizar(novo);
      setEstado(ok ? "salvo" : "erro");
    }
  }

  async function ligarTudo() {
    setEstado("ativando");
    const r = await ativar(l);
    if (r === "ativo") {
      setG({ ...g, ativo: true });
      setEstado("salvo");
    } else setEstado(r);
  }

  async function desligarTudo() {
    await desativar();
    setG({ ...g, ativo: false });
    setEstado("");
  }

  const hora = (valor: string | undefined, campo: keyof TipoLembretes, padrao: string) => (
    <input type="time" value={valor ?? padrao} onChange={(e) => void mudar({ ...l, [campo]: e.target.value })} aria-label="Hora" className={`${CAMPO} w-28`} />
  );

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Lembretes" />

      {!pode || precisaInstalar ? (
        <Cartao className="flex flex-col gap-2">
          <p className="font-medium text-tinta">{precisaInstalar ? "No iPhone, os lembretes chegam com o app na Tela de Início." : "Este navegador não recebe lembretes."}</p>
          {precisaInstalar && <p className="text-sm text-tinta-suave">Toque em Compartilhar e depois em Adicionar à Tela de Início.</p>}
        </Cartao>
      ) : (
        <>
          {!(g.ativo && permitido()) && (
            <>
              {(estado === "negado" || permissao === "denied") && (
                <p className="text-center text-sm text-tinta-suave">As notificações estão bloqueadas para este app nos ajustes do aparelho.</p>
              )}
              {estado === "erro" && <p className="text-center text-sm font-medium text-[#a9271f]">Não foi possível ligar agora. Tente de novo.</p>}
              <button type="button" onClick={() => void ligarTudo()} disabled={estado === "ativando"} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primario text-lg font-semibold text-sobre-primario disabled:opacity-60">
                <Bell className="size-5" aria-hidden /> {estado === "ativando" ? "Ligando" : "Ligar os lembretes"}
              </button>
            </>
          )}
          <div className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
            <Linha titulo="Evangelho do dia" ligado={Boolean(l.evangelho)} onLigar={(v) => void mudar({ ...l, evangelho: v ? "07:00" : undefined })}>
              {hora(l.evangelho, "evangelho", "07:00")}
            </Linha>
            <Linha titulo="Ângelus" detalhe="Ao meio-dia" ligado={Boolean(l.angelus)} onLigar={(v) => void mudar({ ...l, angelus: v })} />
            <Linha titulo="Terço" ligado={Boolean(l.terco)} onLigar={(v) => void mudar({ ...l, terco: v ? "20:00" : undefined })}>
              {hora(l.terco, "terco", "20:00")}
            </Linha>
            <Linha titulo="Avisos das igrejas que sigo" ligado={l.avisos !== false} onLigar={(v) => void mudar({ ...l, avisos: v })} />
            {!ehNativo() && <Linha titulo="Encontros dos terços que sigo" detalhe="Uma hora antes" ligado={l.encontros !== false} onLigar={(v) => void mudar({ ...l, encontros: v })} />}
            {!ehNativo() && <Linha titulo="Minhas escalas" detalhe="Na véspera, às 19h" ligado={l.escalas !== false} onLigar={(v) => void mudar({ ...l, escalas: v })} />}
            {!ehNativo() && <Linha titulo="Quando rezarem pelos meus pedidos" ligado={l.oracoes !== false} onLigar={(v) => void mudar({ ...l, oracoes: v })} />}
            <Linha titulo="Novena" detalhe="Nos dias das novenas que você reza" ligado={Boolean(l.novena)} onLigar={(v) => void mudar({ ...l, novena: v ? "09:00" : undefined })}>
              {hora(l.novena, "novena", "09:00")}
            </Linha>
            <Linha titulo="Falecidos" detalhe="7º dia, 30º dia e aniversário" ligado={Boolean(l.lembrancas)} onLigar={(v) => void mudar({ ...l, lembrancas: v ? "08:00" : undefined })}>
              {hora(l.lembrancas, "lembrancas", "08:00")}
            </Linha>
          </div>

          {g.ativo && permitido() && (
            <>
              {estado === "salvo" && (
                <p className="flex items-center justify-center gap-2 text-sm font-medium text-destaque-texto">
                  <Check className="size-4" aria-hidden /> Lembretes ligados neste aparelho
                </p>
              )}
              {estado === "erro" && <p className="text-center text-sm font-medium text-[#a9271f]">Não foi possível salvar agora. Tente de novo.</p>}
              <button type="button" onClick={() => void desligarTudo()} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
                <BellOff className="size-5" aria-hidden /> Desligar os lembretes
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
