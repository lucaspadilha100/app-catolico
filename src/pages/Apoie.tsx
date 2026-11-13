import { useEffect, useState } from "react";
import { BadgeCheck, Check, HandHeart, Palette, Share2, Vote } from "lucide-react";
import { NOME_DO_APP, PIX_DO_APP } from "@/marca";
import { compartilhar, ehNativo, enderecoPublico } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";
import { useConta } from "@/conta/useConta";
import { declararApoio, maisRecente, useApoiador, votacao, votar, type OpcaoDeVoto } from "@/apoio/api";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Voltar } from "@/components/Devocao";
import { Pix } from "@/components/Pix";
import { dataCurta } from "@/paroquias/plano";

const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";

function JaApoiei() {
  const { email, pronto } = useConta();
  const { preferencias, mudar } = usePreferencias();
  const [estado, setEstado] = useState<"" | "enviando" | "feito">("");

  if (estado === "feito")
    return <p className="text-center font-medium text-destaque-texto">Obrigado. Selo de apoiador até {dataCurta(preferencias.apoiadorAte)}.</p>;
  if (ehApoiador(preferencias)) return null;

  async function apoiar() {
    setEstado("enviando");
    const ate = await declararApoio(!!email);
    mudar({ apoiadorAte: maisRecente(preferencias.apoiadorAte, ate) });
    setEstado("feito");
  }

  return (
    <button type="button" disabled={!pronto || estado === "enviando"} onClick={() => void apoiar()} className={BOTAO_CLARO}>
      <BadgeCheck className="size-5" aria-hidden />
      Já apoiei
    </button>
  );
}

function Votacao() {
  const [dados, setDados] = useState<{ opcoes: OpcaoDeVoto[]; meu: string | null } | null>(null);
  const recarregar = () => void votacao().then(setDados).catch(() => {});
  useEffect(recarregar, []);
  if (!dados?.opcoes.length) return null;
  const total = dados.opcoes.reduce((s, o) => s + o.votos, 0);
  return (
    <section className="flex flex-col gap-3">
      <h2 className={TITULO}>Próximo recurso</h2>
      <ul className="flex flex-col gap-2">
        {dados.opcoes.map((o) => {
          const meu = dados.meu === o.id;
          const parte = total ? Math.round((o.votos / total) * 100) : 0;
          return (
            <li key={o.id}>
              <button
                type="button"
                aria-pressed={meu}
                onClick={() => void votar(o.id).then(recarregar)}
                className={`relative flex min-h-14 w-full flex-col overflow-hidden rounded-xl border px-4 py-2.5 text-left ${meu ? "border-destaque-texto" : "border-borda"} bg-cartao`}
              >
                {dados.meu && <span className="absolute inset-y-0 left-0 bg-marca-fundo" style={{ width: `${parte}%` }} aria-hidden />}
                <span className="relative flex items-center gap-2 font-medium text-tinta">
                  {meu && <Check className="size-4 shrink-0 text-destaque-texto" aria-hidden />}
                  <span className="min-w-0 flex-1">{o.titulo}</span>
                  {dados.meu && <span className="text-sm text-tinta-suave">{parte}%</span>}
                </span>
                {o.descricao && <span className="relative text-sm text-tinta-suave">{o.descricao}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function Apoie() {
  const ate = useApoiador();
  const [copiado, setCopiado] = useState(false);
  const web = !ehNativo();

  async function indicar() {
    const texto = `${NOME_DO_APP}: liturgia do dia, terço, Bíblia, orações e horários de missa. Gratuito e sem anúncios.`;
    if ((await compartilhar({ titulo: NOME_DO_APP, texto, url: enderecoPublico() })) === "copiado") {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Apoie o app" />

      {ehApoiador({ apoiadorAte: ate }) && (
        <Cartao className="flex items-center gap-3 p-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primario text-sobre-primario">
            <BadgeCheck className="size-6" aria-hidden />
          </span>
          <div>
            <p className="font-semibold text-marca">Apoiador</p>
            <p className="text-sm text-tinta-suave">Até {dataCurta(ate)}</p>
          </div>
        </Cartao>
      )}

      {ehApoiador({ apoiadorAte: ate }) && <Votacao />}

      <div className="flex flex-col gap-3 font-leitura text-lg leading-relaxed text-tinta">
        <p>O {NOME_DO_APP} é gratuito e vai continuar assim: sem anúncios, sem venda de dados, com tudo aberto para quem quiser rezar.</p>
        <p>O apoio de quem pode mantém o app no ar para todos, paga a revisão dos textos e ajuda a trazer as paróquias para perto dos fiéis.</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className={TITULO}>Formas de apoiar</h2>
        <Cartao className="flex flex-col gap-1 p-4">
          <p className="font-medium text-tinta">Rezar por este trabalho</p>
          <p className="text-tinta-suave">Por quem usa o app, pelas paróquias e por quem o mantém.</p>
        </Cartao>
        <button type="button" onClick={() => void indicar()} className={BOTAO_CLARO}>
          {copiado ? <Check className="size-5" aria-hidden /> : <Share2 className="size-5" aria-hidden />}
          {copiado ? "Link copiado" : "Indicar o app"}
        </button>
        {web && (
          <Cartao className="flex flex-col gap-4 p-4">
            <p className="flex items-center gap-2 font-medium text-tinta">
              <HandHeart className="size-5 text-destaque-texto" aria-hidden /> Contribuir por PIX
            </p>
            <Pix chave={PIX_DO_APP.chave} nome={PIX_DO_APP.nome} cidade={PIX_DO_APP.cidade} valores={[10, 20, 50, 100]} />
          </Cartao>
        )}
        {web && <JaApoiei />}
      </section>

      {web && (
        <section className="flex flex-col gap-3">
          <h2 className={TITULO}>Quem apoia recebe, por um ano</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 rounded-xl border border-borda bg-cartao px-4 py-3 text-tinta">
              <BadgeCheck className="size-5 shrink-0 text-destaque-texto" aria-hidden /> Selo de apoiador
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-borda bg-cartao px-4 py-3 text-tinta">
              <Palette className="size-5 shrink-0 text-destaque-texto" aria-hidden /> Cor do app à sua escolha
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-borda bg-cartao px-4 py-3 text-tinta">
              <Vote className="size-5 shrink-0 text-destaque-texto" aria-hidden /> Voto no próximo recurso do app
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}
