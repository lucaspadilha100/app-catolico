import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pause, Play, SkipBack, SkipForward, Square } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { misteriosDoDia } from "@/liturgia/terco";
import { carregarLecionario, leiturasDoDia } from "@/liturgia/lecionario";
import { textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { passosDaMisericordia, passosDoRosario } from "@/oracao/terco";
import { NOME_DO_MOMENTO, esperaDaResposta, falasDaOracao, falasDosPassos, momentoDaHora, type Fala, type Momento } from "@/voz/falas";
import { calar, falar, vozDisponivel } from "@/voz/voz";
import { contarReza } from "@/conta/uso";
import { RezandoJuntos } from "@/components/RezandoJuntos";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import type { DiaLiturgico } from "@/liturgia/calendario";

const MOMENTOS: Momento[] = ["evangelho", "angelus", "misericordia", "terco", "noite"];

async function falasDoMomento(m: Momento, dia: DiaLiturgico): Promise<Fala[]> {
  const inicio: Fala[] = [{ texto: "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.", vez: "app", rotulo: "Sinal da Cruz" }];
  if (m === "angelus") return [...falasDaOracao("angelus"), ...falasDaOracao("gloria")];
  if (m === "noite") return [...inicio, ...falasDaOracao("noite"), ...falasDaOracao("pai-nosso"), ...falasDaOracao("ave-maria"), ...falasDaOracao("gloria")];
  if (m === "misericordia") return falasDosPassos(passosDaMisericordia());
  if (m === "terco") return falasDosPassos(passosDoRosario(misteriosDoDia(dia.data).grupo));
  const lecionario = await carregarLecionario();
  const ev = leiturasDoDia(dia, lecionario)[0]?.leituras.find((l) => l.tipo === "evangelho");
  if (!ev) return [...inicio, ...falasDaOracao("pai-nosso")];
  const trechos = await textoDaReferencia(ev.canonica);
  const versos = trechos.flatMap((t) => t.versiculos.map((v) => v.texto));
  const livro = livroPorCodigo(trechos[0]?.livro ?? "");
  const blocos: string[] = [];
  for (let i = 0; i < versos.length; i += 3) blocos.push(versos.slice(i, i + 3).join(" "));
  return [
    ...inicio,
    { texto: `Evangelho segundo ${livro ? `São ${livro.nome}` : ""}.`, vez: "app", rotulo: "Evangelho do dia" },
    ...blocos.map((b) => ({ texto: b.replace(/[“”‘’]/g, ""), vez: "app" as const, rotulo: ev.referencia })),
    ...falasDaOracao("pai-nosso"),
    ...falasDaOracao("gloria"),
  ];
}

const esperar = (ms: number, cancelado: () => boolean) =>
  new Promise<void>((ok) => {
    const fim = Date.now() + ms;
    const t = setInterval(() => {
      if (cancelado() || Date.now() >= fim) {
        clearInterval(t);
        ok();
      }
    }, 150);
  });

export default function RezarAgora() {
  const dia = useDiaLiturgico();
  const [params, setParams] = useSearchParams();
  const pedido = params.get("m") as Momento | null;
  const momento: Momento = pedido && MOMENTOS.includes(pedido) ? pedido : momentoDaHora(new Date().getHours());
  const [falas, setFalas] = useState<Fala[] | null>(null);
  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [responder, setResponder] = useState(true);
  const rodada = useRef(0);

  useEffect(() => {
    let ativo = true;
    setFalas(null);
    setIndice(0);
    void falasDoMomento(momento, dia)
      .then((f) => ativo && setFalas(f))
      .catch(() => ativo && setFalas([]));
    return () => {
      ativo = false;
    };
  }, [momento, dia.data.getTime()]);

  const parar = useCallback(() => {
    rodada.current++;
    setTocando(false);
    void calar();
  }, []);

  useEffect(() => parar, [parar]);

  const tocar = useCallback(
    async (de: number) => {
      if (!falas) return;
      const minha = ++rodada.current;
      const cancelado = () => minha !== rodada.current;
      setTocando(true);
      for (let i = de; i < falas.length; i++) {
        if (cancelado()) return;
        setIndice(i);
        const f = falas[i]!;
        if (f.vez === "voce" && responder) await esperar(esperaDaResposta(f.texto), cancelado);
        else await falar(f.texto);
      }
      if (!cancelado()) {
        setTocando(false);
        setIndice(falas.length);
        contarReza("agora");
        if (momento === "terco" || momento === "misericordia") contarReza(momento);
      }
    },
    [falas, responder, momento],
  );

  const ir = (i: number) => {
    if (!falas) return;
    const alvo = Math.max(0, Math.min(falas.length - 1, i));
    if (tocando) {
      void calar().then(() => void tocar(alvo));
    } else setIndice(alvo);
  };

  const atual = falas?.[Math.min(indice, (falas?.length ?? 1) - 1)];
  const terminou = !!falas && indice >= falas.length;

  return (
    <div className="flex flex-col gap-5 pb-40">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo={NOME_DO_MOMENTO[momento]} />
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1" role="group" aria-label="Oração">
        {MOMENTOS.map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={m === momento}
            onClick={() => {
              parar();
              setParams({ m }, { replace: true });
            }}
            className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium ${m === momento ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {NOME_DO_MOMENTO[m]}
          </button>
        ))}
      </div>
      {!vozDisponivel() && <p className="text-tinta-suave">Este aparelho não tem voz para leitura.</p>}
      {falas === null ? (
        <Carregando />
      ) : terminou ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <p className="font-leitura text-2xl font-semibold text-marca">Amém.</p>
          <RezandoJuntos reza={momento === "terco" || momento === "misericordia" ? momento : "agora"} />
          <button type="button" onClick={() => void tocar(0)} className="min-h-12 rounded-xl border border-borda px-6 font-semibold text-tinta">
            Rezar de novo
          </button>
        </div>
      ) : (
        atual && (
          <section className={`flex min-h-64 flex-col justify-center gap-3 rounded-3xl border p-6 ${atual.vez === "voce" && responder ? "border-destaque-texto bg-marca-fundo" : "border-borda bg-cartao"}`}>
            <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{atual.vez === "voce" && responder ? `${atual.rotulo} · sua vez` : atual.rotulo}</p>
            <p className="font-leitura text-xl leading-relaxed text-tinta">{atual.texto}</p>
            <p className="text-sm text-tinta-suave">{`${Math.min(indice + 1, falas.length)} de ${falas.length}`}</p>
          </section>
        )
      )}
      <label className="flex min-h-11 items-center justify-between gap-4">
        <span className="font-medium text-tinta">Responder em voz alta</span>
        <input type="checkbox" checked={responder} onChange={(e) => setResponder(e.target.checked)} className="size-6 accent-destaque" />
      </label>
      <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-20 px-3 pb-3 md:bottom-0 md:left-60 md:pb-6">
        <div className="mx-auto grid max-w-xl grid-cols-[auto_1fr_auto_auto] gap-2 rounded-2xl border border-borda bg-cartao p-2 shadow-lg">
          <button type="button" onClick={() => ir(indice - 1)} aria-label="Voltar" className="grid size-14 place-items-center rounded-xl border border-borda text-tinta">
            <SkipBack className="size-6" aria-hidden />
          </button>
          <button
            type="button"
            disabled={!falas?.length || !vozDisponivel()}
            onClick={() => (tocando ? parar() : void tocar(terminou ? 0 : indice))}
            className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-destaque text-lg font-semibold text-sobre-destaque disabled:opacity-50"
          >
            {tocando ? <Pause className="size-6" aria-hidden /> : <Play className="size-6" aria-hidden />}
            {tocando ? "Pausar" : indice > 0 && !terminou ? "Continuar" : "Começar"}
          </button>
          <button type="button" onClick={() => ir(indice + 1)} aria-label="Avançar" className="grid size-14 place-items-center rounded-xl border border-borda text-tinta">
            <SkipForward className="size-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => {
              parar();
              setIndice(0);
            }}
            aria-label="Parar"
            className="grid size-14 place-items-center rounded-xl border border-borda text-tinta"
          >
            <Square className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
