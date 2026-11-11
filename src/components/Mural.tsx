import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, ExternalLink, Megaphone, Plus, Trash2 } from "lucide-react";
import { apagarPublicacao, meuPedidoDeGestao, muralDaParoquia, pedirGestao, publicar, type Publicacao } from "@/paroquias/api";
import { NOME_DO_DIA, hhmm } from "@/paroquias/horarios";
import { Cartao, LISTA } from "@/components/Cartao";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50";
const POR_PAGINA = 10;

function quandoFoi(iso: string): string {
  const dias = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (dias <= 0) return "hoje";
  if (dias === 1) return "ontem";
  return `há ${dias} dias`;
}

export function dataDoEvento(iso: string): string {
  const d = new Date(iso);
  return `${NOME_DO_DIA[d.getDay()]}, ${d.getDate()}/${String(d.getMonth() + 1).padStart(2, "0")} às ${hhmm(`${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`)}`;
}

function ItemDoMural({ p, podeEditar, aoApagar }: { p: Publicacao; podeEditar: boolean; aoApagar: () => void }) {
  const instagram = /instagram\.com/.test(p.link);
  return (
    <li className="flex flex-col gap-2 px-4 py-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-2xl bg-papel text-tinta">
          {p.tipo === "evento" ? <CalendarDays className="size-5" aria-hidden /> : <Megaphone className="size-5" aria-hidden />}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold leading-snug text-marca tracking-[-0.02em]">{p.titulo}</p>
          <p className="text-sm text-tinta-suave">
            {p.tipo === "evento" && p.evento_em ? [dataDoEvento(p.evento_em), p.local].filter(Boolean).join(" · ") : quandoFoi(p.criado_em)}
          </p>
        </div>
        {podeEditar && (
          <button
            type="button"
            onClick={() => {
              if (confirm("Apagar esta publicação?")) aoApagar();
            }}
            aria-label="Apagar"
            className="grid size-10 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo"
          >
            <Trash2 className="size-4" aria-hidden />
          </button>
        )}
      </div>
      {p.texto && <p className="whitespace-pre-line text-tinta">{p.texto}</p>}
      {p.link && (
        <a href={p.link} target="_blank" rel="noreferrer" className="flex min-h-10 w-fit items-center gap-1.5 rounded-full border border-borda px-4 text-sm font-medium text-destaque-texto">
          <ExternalLink className="size-4" aria-hidden /> {instagram ? "Ver no Instagram" : "Abrir link"}
        </a>
      )}
    </li>
  );
}

function Publicar({ paroquia, aoPublicar }: { paroquia: string; aoPublicar: () => void }) {
  const [tipo, setTipo] = useState<"aviso" | "evento">("aviso");
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("19:00");
  const [local, setLocal] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "erro" | "limite">("");
  const linkOk = !link.trim() || /^https:\/\/\S+$/.test(link.trim());
  const pode = titulo.trim().length >= 3 && linkOk && (tipo === "aviso" || /^\d{4}-\d{2}-\d{2}$/.test(data));

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!pode) return;
    setEstado("enviando");
    try {
      await publicar({
        paroquia_id: paroquia,
        tipo,
        titulo: titulo.trim(),
        texto: texto.trim(),
        link: link.trim(),
        evento_em: tipo === "evento" ? new Date(`${data}T${hora || "00:00"}`).toISOString() : null,
        local: tipo === "evento" ? local.trim() : "",
      });
      aoPublicar();
    } catch (err) {
      setEstado(String(err).includes("limite") ? "limite" : "erro");
    }
  }

  return (
    <Cartao className="p-4">
      <form onSubmit={enviar} className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-1 rounded-xl border border-borda bg-papel p-1" role="group">
          {(
            [
              ["aviso", "Aviso"],
              ["evento", "Evento"],
            ] as const
          ).map(([v, nome]) => (
            <button key={v} type="button" aria-pressed={tipo === v} onClick={() => setTipo(v)} className={`min-h-10 rounded-lg font-medium ${tipo === v ? "bg-primario text-sobre-primario" : "text-tinta-suave"}`}>
              {nome}
            </button>
          ))}
        </div>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" aria-label="Título" maxLength={120} className={CAMPO} />
        <textarea value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Texto" aria-label="Texto" rows={4} maxLength={1500} className={`${CAMPO} py-2`} />
        {tipo === "evento" && (
          <>
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <input type="date" value={data} onChange={(e) => setData(e.target.value)} aria-label="Data" className={CAMPO} />
              <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} aria-label="Hora" className={`${CAMPO} w-28`} />
            </div>
            <input value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Local" aria-label="Local" maxLength={160} className={CAMPO} />
          </>
        )}
        <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link do post no Instagram" aria-label="Link" inputMode="url" autoCapitalize="none" maxLength={300} className={CAMPO} />
        {!linkOk && <p className="text-sm text-[#a9271f]">O link precisa começar com https://</p>}
        {estado === "limite" && <p className="text-sm text-[#a9271f]">São no máximo 10 publicações por dia.</p>}
        {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível publicar agora. Tente de novo.</p>}
        <button type="submit" disabled={!pode || estado === "enviando"} className={BOTAO}>
          {estado === "enviando" ? "Publicando" : "Publicar"}
        </button>
      </form>
    </Cartao>
  );
}

export function Mural({ paroquia, podeEditar }: { paroquia: string; podeEditar: boolean }) {
  const [lista, setLista] = useState<Publicacao[] | null>(null);
  const [fim, setFim] = useState(true);
  const [escrevendo, setEscrevendo] = useState(false);
  const [versao, setVersao] = useState(0);

  useEffect(() => {
    let ativo = true;
    muralDaParoquia(paroquia, 0, POR_PAGINA)
      .then((r) => {
        if (!ativo) return;
        setLista(r);
        setFim(r.length < POR_PAGINA);
      })
      .catch(() => ativo && setLista([]));
    return () => {
      ativo = false;
    };
  }, [paroquia, versao]);

  if (lista === null || (!lista.length && !podeEditar)) return null;

  const agora = Date.now();
  const eventos = lista.filter((p) => p.tipo === "evento" && p.evento_em && new Date(p.evento_em).getTime() > agora - 3 * 3_600_000).sort((a, b) => a.evento_em!.localeCompare(b.evento_em!));
  const resto = lista.filter((p) => !eventos.includes(p));
  const apagar = (id: string) => void apagarPublicacao(id).then(() => setVersao((v) => v + 1));

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 px-1">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Mural</h2>
        {podeEditar && !escrevendo && (
          <button type="button" onClick={() => setEscrevendo(true)} className="flex min-h-10 items-center gap-1.5 rounded-full bg-primario px-4 text-sm font-semibold text-sobre-primario">
            <Plus className="size-4" aria-hidden /> Publicar
          </button>
        )}
      </div>
      {escrevendo && (
        <Publicar
          paroquia={paroquia}
          aoPublicar={() => {
            setEscrevendo(false);
            setVersao((v) => v + 1);
          }}
        />
      )}
      {eventos.length > 0 && (
        <ul className={LISTA}>
          {eventos.map((p) => (
            <ItemDoMural key={p.id} p={p} podeEditar={podeEditar} aoApagar={() => apagar(p.id)} />
          ))}
        </ul>
      )}
      {resto.length > 0 && (
        <ul className={LISTA}>
          {resto.map((p) => (
            <ItemDoMural key={p.id} p={p} podeEditar={podeEditar} aoApagar={() => apagar(p.id)} />
          ))}
        </ul>
      )}
      {!fim && (
        <button
          type="button"
          onClick={() =>
            void muralDaParoquia(paroquia, lista.length, POR_PAGINA).then((r) => {
              setLista([...lista, ...r]);
              setFim(r.length < POR_PAGINA);
            })
          }
          className="min-h-11 text-sm font-medium text-tinta-suave"
        >
          Mostrar mais
        </button>
      )}
    </section>
  );
}

export function SouDaEquipe({ paroquia }: { paroquia: string }) {
  const [aberto, setAberto] = useState(false);
  const [situacao, setSituacao] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [contato, setContato] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "erro" | "limite">("");

  useEffect(() => {
    meuPedidoDeGestao(paroquia)
      .then((p) => setSituacao(p?.situacao ?? null))
      .catch(() => {});
  }, [paroquia]);

  if (situacao === "pendente") return <p className="text-center text-sm text-tinta-suave">Pedido para cuidar desta página em análise.</p>;
  if (!aberto)
    return (
      <button type="button" onClick={() => setAberto(true)} className="min-h-11 text-sm font-medium text-tinta-suave underline underline-offset-4">
        Sou da equipe desta paróquia
      </button>
    );

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    try {
      await pedirGestao({ paroquia_id: paroquia, nome: nome.trim(), funcao: funcao.trim(), contato: contato.trim() });
      setSituacao("pendente");
    } catch (err) {
      setEstado(String(err).includes("limite") ? "limite" : "erro");
    }
  }

  return (
    <Cartao className="p-4">
      <form onSubmit={enviar} className="flex flex-col gap-3">
        <p className="font-medium text-tinta">Cuidar da página desta paróquia</p>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" aria-label="Seu nome" maxLength={80} className={CAMPO} />
        <input value={funcao} onChange={(e) => setFuncao(e.target.value)} placeholder="Função (secretária, pároco, Pascom)" aria-label="Função" maxLength={80} className={CAMPO} />
        <input value={contato} onChange={(e) => setContato(e.target.value)} placeholder="Telefone da secretaria ou Instagram da paróquia" aria-label="Contato da paróquia" maxLength={120} className={CAMPO} />
        {estado === "limite" && <p className="text-sm text-[#a9271f]">Você já tem pedidos em análise.</p>}
        {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível enviar agora. Tente de novo.</p>}
        <button type="submit" disabled={nome.trim().length < 2 || funcao.trim().length < 2 || contato.trim().length < 5 || estado === "enviando"} className={BOTAO}>
          {estado === "enviando" ? "Enviando" : "Enviar pedido"}
        </button>
      </form>
    </Cartao>
  );
}
