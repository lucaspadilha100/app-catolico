import { useEffect, useState, type ReactNode } from "react";
import { TituloPagina } from "@/components/Cartao";
import { Voltar } from "@/components/Voltar";
import { textoDoCredito, useImagensDeDevocao, type Credito } from "@/lib/imagens";
import { LETRAS_DOS_CREDITOS, creditosDaLetra, totalDeCreditos } from "@/santos/santos";
import type { ArteDoEvangelho } from "@/liturgia/arte";

const ARTE: Credito[] = [
  { arquivo: "rosario.webp", obra: "Virgem e o Menino com o Rosário", autor: "Bartolomé Esteban Murillo", licenca: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Virgin_and_Child_with_a_Rosary_-_WGA16360.jpg" },
  { arquivo: "anunciacao.webp", obra: "Anunciação", autor: "Fra Angelico", licenca: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Fra_Angelico_-_Annunciation_-_WGA0474.jpg" },
  { arquivo: "pai-nosso.webp", obra: "O Pai-Nosso", autor: "James Tissot", licenca: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Lord%27s_Prayer_(Le_Pater_Noster)_-_James_Tissot.jpg" },
  { arquivo: "martinho.webp", obra: "São Martinho e o mendigo", autor: "El Greco", licenca: "CC0", url: "https://commons.wikimedia.org/wiki/File:El_Greco_(Domenikos_Theotokopoulos),_Saint_Martin_and_the_Beggar,_1597-1599,_NGA_1164.jpg" },
];

interface Linha {
  chave: string;
  titulo: string;
  credito: string;
  url?: string;
}

function Secao({ titulo, linhas, total, children }: { titulo: string; linhas: Linha[]; total?: number; children?: ReactNode }) {
  if (!linhas.length && !total) return null;
  return (
    <section>
      <h2 className="titulo-secao mb-3 px-1">{`${titulo} (${total ?? linhas.length})`}</h2>
      {children}
      <ul className="flex flex-col divide-y divide-borda rounded-3xl bg-cartao">
        {linhas.map((l) => (
          <li key={l.chave} className="px-4 py-3 text-[0.9375rem]">
            <span className="block font-semibold text-tinta">{l.titulo}</span>
            {l.url ? (
              <a href={l.url} target="_blank" rel="noreferrer" className="text-tinta-suave underline underline-offset-2">
                {l.credito}
              </a>
            ) : (
              <span className="text-tinta-suave">{l.credito}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

const linhaDe = (chave: string, c: Credito): Linha => ({ chave, titulo: c.obra, credito: [textoDoCredito(c), c.fonte ?? "Wikimedia Commons"].filter(Boolean).join(". "), url: c.url });

export default function Creditos() {
  const devocao = useImagensDeDevocao();
  const [letra, setLetra] = useState(LETRAS_DOS_CREDITOS[0] ?? "");
  const [santos, setSantos] = useState<Linha[]>([]);
  const [evangelho, setEvangelho] = useState<Linha[]>([]);
  useEffect(() => {
    let ativo = true;
    setSantos([]);
    creditosDaLetra(letra)
      .then((lista) =>
        ativo &&
        setSantos(
          lista.map((c) => ({
            chave: c.id,
            titulo: `${c.nome}: ${c.obra}`,
            credito: [textoDoCredito({ autor: c.data ? `${c.autor}, ${c.data}` : c.autor, licenca: c.licenca }), c.fonte ?? "Wikimedia Commons"].filter(Boolean).join(". "),
            url: c.url,
          })),
        ),
      )
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [letra]);
  useEffect(() => {
    void import("@/liturgia/dados/arte-evangelho.json").then((m) => {
      const vistos = new Set<string>();
      setEvangelho(
        (m.default as ArteDoEvangelho[])
          .filter((a) => !vistos.has(a.arquivo) && vistos.add(a.arquivo))
          .map((a) => ({ chave: a.arquivo, titulo: `${a.titulo}`, credito: `${a.obra}. Domínio público. Wikimedia Commons`, url: a.fonte })),
      );
    });
  }, []);

  return (
    <div className="flex flex-col gap-7">
      <Voltar para="/mais">Mais</Voltar>
      <TituloPagina>Créditos das imagens</TituloPagina>
      <Secao titulo="Arte sacra" linhas={ARTE.map((c) => linhaDe(c.arquivo, c))} />
      <Secao titulo="Evangelho do dia" linhas={evangelho} />
      <Secao titulo="Orações, novenas e devoções" linhas={Object.entries(devocao).map(([k, c]) => linhaDe(k, c))} />
      <Secao titulo="Santos" linhas={santos} total={totalDeCreditos()}>
        <div className="mb-3 grid grid-cols-7 gap-1.5 sm:grid-cols-9" role="group" aria-label="Letra">
          {LETRAS_DOS_CREDITOS.map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={l === letra}
              onClick={() => setLetra(l)}
              className={`min-h-10 rounded-lg border text-sm font-medium ${l === letra ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-cartao text-tinta"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </Secao>
    </div>
  );
}
