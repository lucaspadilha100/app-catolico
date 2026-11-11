import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Lock, Search, Share2, X } from "lucide-react";
import { OCASIOES, type DadosDoSantinho, type Formato, type Moldura, type Ocasiao } from "@/santinhos/modelos";
import { desenharSantinho } from "@/santinhos/desenhar";
import { buscarSantos, caminhoDaImagem, nomeParaOrdenar, todosOsSantos } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { compartilhar, ehNativo } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Voltar } from "@/components/Devocao";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";

function Opcoes<T extends string>({ valor, opcoes, onChange, colunas = 2 }: { valor: T; opcoes: { valor: T; nome: string; travada?: boolean }[]; onChange: (v: T) => void; colunas?: 2 | 3 }) {
  return (
    <div className={`grid gap-2 ${colunas === 3 ? "grid-cols-3" : "grid-cols-2"}`} role="group">
      {opcoes.map((o) => (
        <button
          key={o.valor}
          type="button"
          aria-pressed={o.valor === valor}
          onClick={() => onChange(o.valor)}
          className={`flex min-h-11 items-center justify-center gap-1.5 rounded-xl border px-2 text-sm font-medium ${o.valor === valor ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-papel text-tinta"}`}
        >
          {o.travada && <Lock className="size-3.5 shrink-0" aria-hidden />}
          {o.nome}
        </button>
      ))}
    </div>
  );
}

function CruzLatina({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 32" className={className} fill="currentColor" aria-hidden>
      <rect x="8" y="0" width="4" height="32" rx="1" />
      <rect x="0" y="8" width="20" height="4" rx="1" />
    </svg>
  );
}

function creditoDe(s: Santo): string {
  const a = s.imagem?.artista ?? "";
  return a && a !== "Desconhecido" ? `Pintura: ${a.replace(/, called /, ", chamado ")}` : "";
}

function EscolherPintura({ atual, aoEscolher }: { atual: Santo | null; aoEscolher: (s: Santo | null) => void }) {
  const [aberto, setAberto] = useState(false);
  const [lista, setLista] = useState<Santo[]>([]);
  const [termo, setTermo] = useState("");

  useEffect(() => {
    if (!aberto || lista.length) return;
    void todosOsSantos().then((todos) => {
      const vistas = new Set<string>();
      const com = todos.filter((s) => {
        const c = caminhoDaImagem(s);
        if (!c || vistas.has(c)) return false;
        vistas.add(c);
        return true;
      });
      setLista(com.sort((a, b) => nomeParaOrdenar(a.nome).localeCompare(nomeParaOrdenar(b.nome))));
    });
  }, [aberto, lista.length]);

  const mostradas = useMemo(() => (termo.trim() ? buscarSantos(lista, termo) : lista), [lista, termo]);

  if (!aberto)
    return (
      <button type="button" onClick={() => setAberto(true)} className="flex min-h-14 w-full items-center gap-3 rounded-xl border border-borda bg-papel px-3 py-2 text-left">
        {atual ? <img src={caminhoDaImagem(atual)!} alt="" className="size-10 shrink-0 rounded-lg object-cover" /> : <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-marca-fundo text-destaque-texto"><CruzLatina className="h-6" /></span>}
        <span className="min-w-0 flex-1 text-tinta">{atual ? atual.nome : "Só a cruz"}</span>
        <span className="text-sm font-medium text-destaque-texto">Trocar</span>
      </button>
    );

  return (
    <Cartao className="flex flex-col gap-3 p-3">
      <div className="flex items-center gap-2">
        <label className="flex min-h-12 min-w-0 flex-1 items-center gap-2 rounded-xl border border-borda bg-papel px-3">
          <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Buscar santo" aria-label="Buscar santo" className="min-w-0 flex-1 bg-transparent text-base outline-none" />
        </label>
        <button type="button" onClick={() => setAberto(false)} aria-label="Fechar" className="grid size-12 shrink-0 place-items-center rounded-xl text-tinta-suave">
          <X className="size-5" aria-hidden />
        </button>
      </div>
      <div className="grid max-h-[60vh] grid-cols-3 gap-2 overflow-y-auto">
        {!termo.trim() && (
          <button
            type="button"
            onClick={() => {
              aoEscolher(null);
              setAberto(false);
            }}
            className={`flex flex-col items-center gap-1 rounded-xl border p-1.5 text-xs ${atual === null ? "border-destaque-texto" : "border-borda"}`}
          >
            <span className="grid aspect-[3/4] w-full place-items-center rounded-lg bg-marca-fundo text-destaque-texto"><CruzLatina className="h-12" /></span>
            <span className="text-tinta">Só a cruz</span>
          </button>
        )}
        {mostradas.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              aoEscolher(s);
              setAberto(false);
            }}
            className={`flex flex-col items-center gap-1 rounded-xl border p-1.5 text-xs ${atual?.id === s.id ? "border-destaque-texto" : "border-borda"}`}
          >
            <img src={caminhoDaImagem(s)!} alt="" loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover" />
            <span className="line-clamp-2 text-center text-tinta">{s.nome}</span>
          </button>
        ))}
      </div>
    </Cartao>
  );
}

export default function Santinhos() {
  const { preferencias } = usePreferencias();
  const apoiador = ehApoiador(preferencias);
  const web = !ehNativo();
  const [ocasiao, setOcasiao] = useState<Ocasiao>("batismo");
  const [formato, setFormato] = useState<Formato>("lembranca");
  const [moldura, setMoldura] = useState<Moldura>("simples");
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [frase, setFrase] = useState(OCASIOES.batismo.frase!.texto);
  const [referencia, setReferencia] = useState(OCASIOES.batismo.frase!.referencia);
  const [santo, setSanto] = useState<Santo | null>(null);
  const [previa, setPrevia] = useState<{ url: string; blob: Blob } | null>(null);
  const [estado, setEstado] = useState<"" | "pronto">("");
  const modelo = OCASIOES[ocasiao];
  const convite = formato === "convite" && modelo.convite !== null;

  function mudarOcasiao(o: Ocasiao) {
    setOcasiao(o);
    const m = OCASIOES[o];
    if (o === "devocao") {
      setFrase("Rogai por nós.");
      setReferencia("");
      if (santo) setNome(santo.nome);
    } else {
      setFrase(m.frase?.texto ?? "");
      setReferencia(m.frase?.referencia ?? "");
    }
  }

  function escolherSanto(s: Santo | null) {
    setSanto(s);
    if (ocasiao === "devocao" && s) setNome(s.nome);
  }

  const dados: DadosDoSantinho = useMemo(
    () => ({
      ocasiao,
      formato: convite ? "convite" : "lembranca",
      moldura: moldura === "dourada" && apoiador && web ? "dourada" : "simples",
      nome,
      data,
      hora: convite ? hora : "",
      local,
      frase,
      referencia,
      pintura: santo ? caminhoDaImagem(santo) : null,
      creditoDaPintura: santo ? creditoDe(santo) : "",
    }),
    [ocasiao, convite, moldura, apoiador, web, nome, data, hora, local, frase, referencia, santo],
  );

  useEffect(() => {
    let ativo = true;
    let url = "";
    const espera = setTimeout(() => {
      void desenharSantinho(dados)
        .then((blob) => {
          if (!ativo) return;
          url = URL.createObjectURL(blob);
          setPrevia((antiga) => {
            if (antiga) URL.revokeObjectURL(antiga.url);
            return { url, blob };
          });
        })
        .catch(() => {});
    }, 300);
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [dados]);

  async function enviar() {
    if (!previa) return;
    const base = [convite ? "convite" : "santinho", nome].filter(Boolean).join("-");
    const arquivo = `${base.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "santinho"}.png`;
    const r = await compartilhar({ titulo: convite ? "Convite" : "Santinho", imagem: { blob: previa.blob, nome: arquivo } });
    if (r !== "erro") {
      setEstado("pronto");
      setTimeout(() => setEstado(""), 2500);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Santinhos e convites" />

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-start">
        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-2">
            <h2 className={TITULO}>Ocasião</h2>
            <Opcoes<Ocasiao> valor={ocasiao} onChange={mudarOcasiao} opcoes={(Object.keys(OCASIOES) as Ocasiao[]).map((o) => ({ valor: o, nome: OCASIOES[o].nome }))} />
          </section>

          {modelo.convite !== null && (
            <section className="flex flex-col gap-2">
              <h2 className={TITULO}>Formato</h2>
              <Opcoes<Formato>
                valor={formato}
                onChange={setFormato}
                opcoes={[
                  { valor: "lembranca", nome: "Lembrança" },
                  { valor: "convite", nome: "Convite" },
                ]}
              />
            </section>
          )}

          <section className="flex flex-col gap-2">
            <h2 className={TITULO}>Imagem</h2>
            <EscolherPintura atual={santo} aoEscolher={escolherSanto} />
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={TITULO}>Texto</h2>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder={modelo.rotuloDoNome} aria-label={modelo.rotuloDoNome} maxLength={80} className={CAMPO} />
            <div className={`grid gap-2 ${convite ? "grid-cols-[1fr_auto]" : "grid-cols-1"}`}>
              <label className="flex flex-col gap-1">
                <span className="text-sm text-tinta-suave">Data</span>
                <input type="date" value={data} onChange={(e) => setData(e.target.value)} className={CAMPO} />
              </label>
              {convite && (
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-tinta-suave">Hora</span>
                  <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} className={`${CAMPO} w-28`} />
                </label>
              )}
            </div>
            <input value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Local" aria-label="Local" maxLength={120} className={CAMPO} />
            <textarea value={frase} onChange={(e) => setFrase(e.target.value)} placeholder="Frase" aria-label="Frase" rows={3} maxLength={300} className={`${CAMPO} py-2`} />
            <input value={referencia} onChange={(e) => setReferencia(e.target.value)} placeholder="Referência" aria-label="Referência" maxLength={40} className={CAMPO} />
          </section>

          {web && (
            <section className="flex flex-col gap-2">
              <h2 className={TITULO}>Moldura</h2>
              <Opcoes<Moldura>
                valor={moldura}
                onChange={setMoldura}
                opcoes={[
                  { valor: "simples", nome: "Simples" },
                  { valor: "dourada", nome: "Dourada", travada: !apoiador },
                ]}
              />
              {moldura === "dourada" && !apoiador && (
                <Link to="/apoie" className="px-1 text-sm font-medium text-destaque-texto underline underline-offset-4">
                  Para apoiadores
                </Link>
              )}
            </section>
          )}
        </div>

        <div className="flex flex-col gap-3 lg:sticky lg:top-6">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-borda bg-marca-fundo shadow-sm" style={{ aspectRatio: "2 / 3" }}>
            {previa && <img src={previa.url} alt="Prévia" className="size-full object-contain" />}
          </div>
          <button type="button" onClick={() => void enviar()} disabled={!previa} className={`${BOTAO} mx-auto w-full max-w-sm`}>
            {estado === "pronto" ? <Check className="size-5" aria-hidden /> : <Share2 className="size-5" aria-hidden />}
            {estado === "pronto" ? "Pronto" : "Compartilhar ou salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}
