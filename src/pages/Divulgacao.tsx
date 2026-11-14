import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Image, Share2 } from "lucide-react";
import { diaLiturgico } from "@/liturgia/calendario";
import { dataPorExtenso, diaEMes, hoje, paraIso, somaDias } from "@/liturgia/datas";
import { useLeituras } from "@/lib/useLeituras";
import { evangelhoDaMissa } from "@/components/Reflexao";
import { textoDaReferencia } from "@/biblia/texto";
import { arteDoEvangelho, caminhoDaArte, type ArteDoEvangelho } from "@/liturgia/arte";
import { carregarImagem, fraseDoEvangelho, imagemDoEvangelho, type FormatoDeCartaz } from "@/liturgia/imagemDoEvangelho";
import {
  imagemDaData,
  imagemDaNovena,
  imagemDaReflexao,
  imagemDoSanto,
  legendaDaData,
  legendaDaNovena,
  legendaDaReflexao,
  legendaDoEvangelho,
  legendaDoSanto,
  legendaDoVersiculo,
  novenasQueComecam,
} from "@/divulgacao/conteudo";
import { dataGrande } from "@/divulgacao/datas";
import { lerReferencia } from "@/divulgacao/referencia";
import { imagemDoVersiculo } from "@/lib/imagemDoVersiculo";
import { reflexaoDoEvangelho } from "@/reflexoes/reflexoes";
import type { Reflexao } from "@/reflexoes/tipos";
import { santosDaDataMMDD } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { compartilhar } from "@/lib/nativo";
import { souAdmin } from "@/paroquias/api";
import { useConta } from "@/conta/useConta";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";

const BOTAO = "flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-borda bg-papel px-3 font-semibold text-tinta disabled:opacity-50";

function Botoes({ nome, gerar, legenda }: { nome: string; gerar: (formato: FormatoDeCartaz) => Promise<Blob>; legenda: string }) {
  const [ocupado, setOcupado] = useState<FormatoDeCartaz | null>(null);
  const [copiado, setCopiado] = useState(false);

  const enviar = async (formato: FormatoDeCartaz) => {
    if (ocupado) return;
    setOcupado(formato);
    try {
      const blob = await gerar(formato);
      await compartilhar({ titulo: nome, imagem: { blob, nome: `${nome.replace(/[^\p{L}\p{N}]+/gu, "-").toLowerCase()}-${formato}.png` } });
    } catch {
    } finally {
      setOcupado(null);
    }
  };

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(legenda);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {}
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={() => void enviar("story")} disabled={!!ocupado} className={BOTAO}>
        <Share2 className="size-4" aria-hidden /> {ocupado === "story" ? "Gerando" : "Story"}
      </button>
      <button type="button" onClick={() => void enviar("post")} disabled={!!ocupado} className={BOTAO}>
        <Image className="size-4" aria-hidden /> {ocupado === "post" ? "Gerando" : "Post"}
      </button>
      <button type="button" onClick={() => void copiar()} className={BOTAO}>
        {copiado ? <Check className="size-4 text-destaque-texto" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        Legenda
      </button>
    </div>
  );
}

function Conteudo({ quando }: { quando: 0 | 1 }) {
  const d = useMemo(() => somaDias(hoje(), quando), [quando]);
  const l = useMemo(() => diaLiturgico(d), [d]);
  const missas = useLeituras(l);
  const canonica = evangelhoDaMissa(missas?.[0]);
  const evangelho = missas?.[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
  const [arte, setArte] = useState<ArteDoEvangelho | null>(null);
  const [textoDoEvangelho, setTextoDoEvangelho] = useState("");
  const [reflexao, setReflexao] = useState<Reflexao | null>(null);
  const [santos, setSantos] = useState<Santo[] | null>(null);

  useEffect(() => {
    let ativo = true;
    setArte(null);
    setTextoDoEvangelho("");
    setReflexao(null);
    void arteDoEvangelho(canonica).then((a) => ativo && setArte(a));
    if (canonica) {
      void textoDaReferencia(canonica)
        .then((t) => ativo && setTextoDoEvangelho(t.flatMap((x) => x.versiculos.map((v) => v.texto)).join(" ")))
        .catch(() => {});
      void reflexaoDoEvangelho(canonica)
        .then((r) => ativo && setReflexao(r))
        .catch(() => {});
    }
    return () => {
      ativo = false;
    };
  }, [canonica]);

  useEffect(() => {
    let ativo = true;
    setSantos(null);
    void santosDaDataMMDD(paraIso(d).slice(5).replace("-", "")).then((s) => ativo && setSantos(s));
    return () => {
      ativo = false;
    };
  }, [d]);

  if (missas === null || santos === null) return <Carregando />;
  const dataLonga = dataPorExtenso(d);
  const grande = dataGrande(d, l);
  const novenas = novenasQueComecam(d);
  const domingo = d.getUTCDay() === 0;

  return (
    <div className="flex flex-col gap-4">
      {grande && (
        <Cartao className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold text-tinta">{grande.nome}</h2>
            <p className="text-sm text-tinta-suave">{grande.rotulo}</p>
          </div>
          <Botoes
            nome={grande.nome}
            gerar={(formato) => imagemDaData({ dataGrande: grande, data: dataLonga, formato })}
            legenda={legendaDaData({ dataGrande: grande, data: dataLonga })}
          />
        </Cartao>
      )}
      {novenas.map(({ novena, festa }) => (
        <Cartao key={novena.id} className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold text-tinta">{novena.nome}</h2>
            <p className="text-sm text-tinta-suave">Começa neste dia</p>
          </div>
          <Botoes
            nome={novena.nome}
            gerar={(formato) => imagemDaNovena({ novena, festa, data: dataLonga, formato })}
            legenda={legendaDaNovena({ novena, festa })}
          />
        </Cartao>
      ))}
      {domingo && reflexao && (
        <Cartao className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold text-tinta">Reflexão do Evangelho</h2>
            <p className="text-sm text-tinta-suave">{evangelho?.referencia}</p>
          </div>
          <Botoes
            nome={`Reflexão ${paraIso(d)}`}
            gerar={async (formato) =>
              imagemDaReflexao({
                imagem: arte ? await carregarImagem(caminhoDaArte(arte)) : null,
                data: dataLonga,
                referencia: evangelho?.referencia ?? "",
                frase: fraseDoEvangelho([reflexao.paragrafos[0] ?? ""], arte ? (formato === "post" ? 150 : 170) : 220),
                formato,
              })
            }
            legenda={legendaDaReflexao({ data: dataLonga, referencia: evangelho?.referencia ?? "", reflexao })}
          />
        </Cartao>
      )}
      <Cartao className="flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-tinta">Evangelho do dia</h2>
          <p className="text-sm text-tinta-suave">{[evangelho?.referencia, arte ? `com a pintura: ${arte.titulo}` : "sem pintura, sai no creme"].filter(Boolean).join(" · ")}</p>
        </div>
        <Botoes
          nome={`Evangelho ${paraIso(d)}`}
          gerar={(formato) =>
            imagemDoEvangelho({
              arte,
              data: dataLonga,
              referencia: evangelho?.referencia ?? "",
              frase: fraseDoEvangelho(textoDoEvangelho ? [textoDoEvangelho] : [], arte ? (formato === "post" ? 150 : 170) : 220),
              formato,
            })
          }
          legenda={legendaDoEvangelho({ data: dataLonga, titulo: l.titulo, referencia: evangelho?.referencia ?? "", texto: textoDoEvangelho })}
        />
      </Cartao>
      {santos.map((s) => (
        <Cartao key={s.id} className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold text-tinta">{s.nome}</h2>
            <p className="text-sm text-tinta-suave">Santo do dia</p>
          </div>
          <Botoes nome={s.nome} gerar={(formato) => imagemDoSanto(s, diaEMes(d), formato)} legenda={legendaDoSanto(s, diaEMes(d))} />
        </Cartao>
      ))}
      {santos.length === 0 && <p className="px-1 text-sm text-tinta-suave">Nenhum santo no calendário litúrgico desta data.</p>}
      <VersiculoDaSemana />
    </div>
  );
}

function VersiculoDaSemana() {
  const [entrada, setEntrada] = useState("");
  const [lido, setLido] = useState<{ rotulo: string; texto: string } | null>(null);
  const [erro, setErro] = useState(false);

  const buscar = async () => {
    setErro(false);
    setLido(null);
    const r = lerReferencia(entrada);
    if (!r) {
      setErro(true);
      return;
    }
    const texto = (await textoDaReferencia(r.canonica).catch(() => [])).flatMap((t) => t.versiculos.map((v) => v.texto)).join(" ");
    if (!texto) {
      setErro(true);
      return;
    }
    setLido({ rotulo: r.rotulo, texto });
  };

  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className="font-semibold text-tinta">Versículo</h2>
      <div className="flex gap-2">
        <input
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && void buscar()}
          placeholder="Jo 3,16"
          aria-label="Referência"
          className="min-h-12 min-w-0 flex-1 rounded-xl border border-borda bg-papel px-3 text-base"
        />
        <button type="button" onClick={() => void buscar()} className="min-h-12 rounded-xl bg-primario px-4 font-semibold text-sobre-primario">
          Buscar
        </button>
      </div>
      {erro && <p className="text-sm text-tinta-suave">Referência não encontrada.</p>}
      {lido && (
        <>
          <p className="font-leitura text-[1.05rem] leading-[1.7] text-tinta">
            {lido.texto} <span className="text-tinta-suave">({lido.rotulo})</span>
          </p>
          <Botoes nome={lido.rotulo} gerar={(formato) => imagemDoVersiculo(lido.texto, lido.rotulo, formato)} legenda={legendaDoVersiculo(lido.texto, lido.rotulo)} />
        </>
      )}
    </Cartao>
  );
}

export default function Divulgacao() {
  const { email, pronto } = useConta();
  const [admin, setAdmin] = useState<boolean | null>(null);
  const [quando, setQuando] = useState<0 | 1>(0);

  useEffect(() => {
    if (!pronto) return;
    if (!email) {
      setAdmin(false);
      return;
    }
    let ativo = true;
    souAdmin()
      .then((a) => ativo && setAdmin(a))
      .catch(() => ativo && setAdmin(false));
    return () => {
      ativo = false;
    };
  }, [email, pronto]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/painel">Painel</Voltar>
      <Cabecalho titulo="Divulgação" />
      {admin === null ? (
        <Carregando />
      ) : !admin ? (
        <p className="text-tinta-suave">Sem acesso.</p>
      ) : (
        <>
          <div className="inline-grid w-fit grid-cols-2 rounded-xl bg-cartao p-1" role="tablist">
            {([
              [0, "Hoje"],
              [1, "Amanhã"],
            ] as const).map(([valor, nome]) => (
              <button
                key={valor}
                type="button"
                role="tab"
                aria-selected={quando === valor}
                onClick={() => setQuando(valor)}
                className={`min-h-10 rounded-lg px-5 text-sm font-medium ${quando === valor ? "bg-primario text-sobre-primario" : "text-tinta-suave"}`}
              >
                {nome}
              </button>
            ))}
          </div>
          <Conteudo quando={quando} />
        </>
      )}
    </div>
  );
}
