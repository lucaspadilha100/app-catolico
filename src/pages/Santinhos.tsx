import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Lock, Share2 } from "lucide-react";
import { OCASIOES, type DadosDoSantinho, type Formato, type Moldura, type Ocasiao } from "@/santinhos/modelos";
import { desenharSantinho } from "@/santinhos/desenhar";
import { caminhoDaImagem } from "@/santos/santos";
import { EscolherPintura, creditoDe, pinturaDe } from "@/components/EscolherPintura";
import type { Santo } from "@/santos/tipos";
import { compartilhar, ehNativo } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";
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
            <EscolherPintura atual={pinturaDe(santo)} aoEscolher={escolherSanto} />
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
