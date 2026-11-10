import { useState, type ReactNode } from "react";
import { CalendarDays, Church, FileText, Heart, LayoutDashboard, NotebookPen, Share2, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { usePreferencias, type Letra, type Tema } from "@/lib/preferencias";
import { Cartao, Grupo, ItemLista, LINHA, TituloPagina } from "@/components/Cartao";
import { DIOCESES } from "@/liturgia/dioceses";
import { ENDERECO_DO_SITE, NOME_DO_APP } from "@/marca";
import { useConta } from "@/conta/useConta";
import { useTemPainel } from "@/pages/Painel";

function Escolha<T extends string>({
  rotulo,
  valor,
  opcoes,
  onChange,
}: {
  rotulo: string;
  valor: T;
  opcoes: { valor: T; nome: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 font-medium">{rotulo}</legend>
      <div className="grid grid-cols-3 gap-2">
        {opcoes.map((o) => (
          <button
            key={o.valor}
            type="button"
            aria-pressed={o.valor === valor}
            onClick={() => onChange(o.valor)}
            className={`min-h-11 rounded-xl border px-2 text-sm font-medium ${
              o.valor === valor ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-papel text-tinta-suave"
            }`}
          >
            {o.nome}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Interruptor({ rotulo, ligado, onChange, children }: { rotulo: string; ligado: boolean; onChange: (v: boolean) => void; children?: ReactNode }) {
  return (
    <label className="flex min-h-11 cursor-pointer items-center justify-between gap-4">
      <span>
        <span className="block font-medium">{rotulo}</span>
        {children}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={ligado}
        onClick={() => onChange(!ligado)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${ligado ? "bg-destaque" : "bg-borda"}`}
      >
        <span
          className={`absolute top-1 size-5 rounded-full bg-white shadow transition-all ${ligado ? "left-6" : "left-1"}`}
        />
      </button>
    </label>
  );
}

function Compartilhar() {
  const [copiado, setCopiado] = useState(false);
  async function compartilhar() {
    const url = location.protocol.startsWith("http") ? location.origin : ENDERECO_DO_SITE;
    const texto = `${NOME_DO_APP}: liturgia do dia, terço, Bíblia, orações e horários de missa. Gratuito e sem anúncios.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: NOME_DO_APP, text: texto, url });
      } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(`${texto}\n${url}`);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {}
  }
  return (
    <button type="button" onClick={() => void compartilhar()} className={`${LINHA} w-full text-left`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
        <Share2 className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1 font-medium">{copiado ? "Link copiado" : `Indicar o ${NOME_DO_APP}`}</span>
    </button>
  );
}

export default function Mais() {
  const { preferencias: p, mudar } = usePreferencias();
  const { pronto, email } = useConta();
  const temPainel = useTemPainel();

  return (
    <div>
      <TituloPagina>Mais</TituloPagina>

      <div className="flex flex-col gap-6">
        <Grupo>
          <ItemLista icone={UserRound} titulo="Conta" detalhe={pronto ? (email ?? "Sem conta") : undefined} para="/conta" />
          {temPainel && <ItemLista icone={LayoutDashboard} titulo="Painel" para="/painel" />}
        </Grupo>

        <Grupo titulo="Conhecer">
          <ItemLista icone={Sparkles} titulo="Santos" para="/santos" />
          <ItemLista icone={CalendarDays} titulo="Calendário litúrgico" para="/calendario" />
        </Grupo>

        <Grupo titulo="Para você">
          <ItemLista icone={NotebookPen} titulo="Diário espiritual" detalhe="Diário e propósitos" para="/diario" />
        </Grupo>

        <section>
          <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Preferências</h2>
          <Cartao className="flex flex-col gap-6">
            <Escolha<Tema>
              rotulo="Aparência"
              valor={p.tema}
              onChange={(tema) => mudar({ tema })}
              opcoes={[
                { valor: "sistema", nome: "Automática" },
                { valor: "claro", nome: "Clara" },
                { valor: "escuro", nome: "Escura" },
              ]}
            />
            <Escolha<Letra>
              rotulo="Tamanho da letra"
              valor={p.letra}
              onChange={(letra) => mudar({ letra })}
              opcoes={[
                { valor: "normal", nome: "Normal" },
                { valor: "grande", nome: "Grande" },
                { valor: "maior", nome: "Maior" },
              ]}
            />
            <label className="flex flex-col gap-2">
              <span className="font-medium">Calendário da diocese</span>
              <select value={p.diocese} onChange={(e) => mudar({ diocese: e.target.value })} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base">
                <option value="">Brasil</option>
                {DIOCESES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nome}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-medium">Dia do seu batismo</span>
              <input
                type="date"
                value={p.batismo}
                onChange={(e) => mudar({ batismo: e.target.value })}
                className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
              />
            </label>
            <Interruptor rotulo="Modo simples" ligado={p.simples} onChange={(simples) => mudar({ simples })} />
          </Cartao>
        </section>

        <Grupo titulo="Ajudar">
          <ItemLista icone={Church} titulo="Sugerir paróquia" para="/missas/sugerir" />
          <Compartilhar />
        </Grupo>

        <Grupo titulo="Sobre">
          <ItemLista icone={ShieldCheck} titulo="Privacidade" para="/privacidade" />
          <ItemLista icone={FileText} titulo="Termos de uso" para="/termos" />
        </Grupo>
      </div>

      <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-sm text-tinta-suave">
        <Heart className="size-4" aria-hidden /> {NOME_DO_APP} · gratuito e sem anúncios
      </p>
    </div>
  );
}
