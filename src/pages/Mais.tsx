import type { ReactNode } from "react";
import { UserRound, CalendarDays, NotebookPen, Heart, Music, Sparkles, Users } from "lucide-react";
import { usePreferencias, type Letra, type Tema } from "@/lib/preferencias";
import { Cartao, ItemLista, TituloPagina } from "@/components/Cartao";
import { DIOCESES } from "@/liturgia/dioceses";
import { NOME_DO_APP } from "@/marca";
import { useConta } from "@/conta/useConta";

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

export default function Mais() {
  const { preferencias: p, mudar } = usePreferencias();
  const { pronto, email } = useConta();

  return (
    <div>
      <TituloPagina>Mais</TituloPagina>

      <div className="flex flex-col gap-3">
        <ItemLista icone={UserRound} titulo="Conta" detalhe={pronto ? (email ?? "Sem conta") : undefined} para="/conta" />
        <ItemLista icone={Sparkles} titulo="Santos" para="/santos" />
        <ItemLista icone={CalendarDays} titulo="Calendário litúrgico" para="/calendario" />
        <ItemLista icone={NotebookPen} titulo="Diário espiritual" detalhe="Diário e propósitos" para="/diario" />
        <ItemLista icone={Users} titulo="Intenções e grupos" />
        <ItemLista icone={Music} titulo="Músicas" />
      </div>

      <h2 className="mb-3 mt-8 font-leitura text-xl font-semibold text-marca">Preferências</h2>
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
        <Escolha<string>
          rotulo="Calendário da diocese"
          valor={p.diocese}
          onChange={(diocese) => mudar({ diocese })}
          opcoes={[
            { valor: "", nome: "Brasil" },
            ...DIOCESES.map((d) => ({ valor: d.id, nome: d.nome.replace("Arquidiocese de ", "").replace("Diocese de ", "") })),
          ]}
        />
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

      <p className="mt-8 flex items-center justify-center gap-1.5 text-center text-sm text-tinta-suave">
        <Heart className="size-4" aria-hidden /> {NOME_DO_APP} · gratuito e sem anúncios
      </p>
    </div>
  );
}
