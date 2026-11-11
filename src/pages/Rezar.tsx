import { ListChecks, Users, UsersRound, BookHeart, CalendarHeart, Church, HeartHandshake, CircleDot, Cross, Crown, Flame, HandHeart, ListOrdered, Moon, ScrollText, Footprints, Shield, Sprout, AudioLines } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { misteriosDoDia } from "@/liturgia/terco";
import { diaEMes } from "@/liturgia/datas";
import { emAndamento } from "@/devocao/andamento";
import { diaDaSemanaSanta, domingoDeRamos, NOMES_DA_SEMANA_SANTA } from "@/devocao/calendario";
import { diasDeOracaoNaSemana, useDevocoesGuardadas } from "@/devocao/progresso";
import { Link } from "react-router-dom";
import { Grupo, ItemLista, TituloPagina } from "@/components/Cartao";
import { pascoa } from "@/liturgia/calendario";
import { diferencaEmDias } from "@/liturgia/datas";

export default function Rezar() {
  useDevocoesGuardadas();
  const l = useDiaLiturgico();
  const andamento = emAndamento(l.data);
  const novena = andamento.find((i) => i.tipo === "novena");
  const desafio = andamento.find((i) => i.tipo === "desafio");
  const consagracao = andamento.find((i) => i.tipo === "consagracao");
  const santa = diaDaSemanaSanta(l.data);
  const ano = diferencaEmDias(pascoa(l.data.getUTCFullYear()), l.data) >= 0 ? l.data.getUTCFullYear() : l.data.getUTCFullYear() + 1;
  const semana = diasDeOracaoNaSemana(l.data);
  const agora = [
    { para: "/rezar/terco", titulo: "Terço", detalhe: misteriosDoDia(l.data).nome, imagem: "rosario", alt: "Virgem do Rosário, de Murillo", foco: "50% 22%" },
    { para: "/rezar/agora?m=angelus", titulo: "Angelus", detalhe: "Às 6h, 12h e 18h", imagem: "anunciacao", alt: "Anunciação, de Fra Angelico", foco: "72% 50%" },
    { para: "/rezar/agora?m=noite", titulo: "Oração da noite", detalhe: "Com voz", imagem: "pai-nosso", alt: "O Pai-Nosso, de James Tissot", foco: "50% 35%" },
  ];

  return (
    <div>
      <TituloPagina>Rezar</TituloPagina>
      {semana > 0 && (
        <p className="-mt-2 mb-4 text-tinta-suave">
          Você rezou {semana === 1 ? "1 dia" : `${semana} dias`} nesta semana
        </p>
      )}
      <div className="flex flex-col gap-7">
        <section>
          <h2 className="titulo-secao mb-3 px-1">Agora</h2>
          <div className="-mx-4 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
            {agora.map((a) => (
              <Link key={a.para} to={a.para} className="w-40 shrink-0 snap-start">
                <img src={`/imagens/arte/${a.imagem}.webp`} alt={a.alt} loading="lazy" className="h-52 w-40 rounded-3xl bg-cartao object-cover" style={{ objectPosition: a.foco }} />
                <span className="mt-2 block font-bold leading-snug text-tinta">{a.titulo}</span>
                <span className="block text-sm text-tinta-suave">{a.detalhe}</span>
              </Link>
            ))}
          </div>
        </section>
        {andamento.length > 0 && (
          <Grupo titulo="Em andamento">
            {andamento.slice(0, 4).map((i) => (
              <ItemLista key={i.para} icone={ListChecks} titulo={i.titulo} detalhe={i.detalhe} para={i.para} />
            ))}
          </Grupo>
        )}
        <Grupo titulo="Todos os dias">
          <ItemLista icone={AudioLines} titulo="Rezar agora, com voz" detalhe="O celular conduz em voz alta" para="/rezar/agora" />
          <ItemLista icone={CircleDot} titulo="Terço" detalhe={`Hoje: ${misteriosDoDia(l.data).nome}`} para="/rezar/terco" />
          <ItemLista icone={Users} titulo="Terço da Juventude" detalhe="Encontros perto de você" para="/tercos" />
          <ItemLista icone={HandHeart} titulo="Orações" detalhe="Em português e latim" para="/rezar/oracoes" />
          <ItemLista icone={ScrollText} titulo="Ladainhas" para="/rezar/ladainhas" />
          <ItemLista icone={Moon} titulo="Pequeno Ofício de Nossa Senhora" para="/rezar/oficio" />
          <ItemLista icone={Moon} titulo="Ofício dos Defuntos" para="/rezar/oficio-dos-defuntos" />
        </Grupo>
        <Grupo titulo="Devoções">
          <ItemLista icone={ListOrdered} titulo="Novenas" detalhe={novena ? `${novena.titulo}: ${novena.detalhe.toLowerCase()}` : undefined} para="/rezar/novenas" />
          <ItemLista icone={Sprout} titulo="Tempos e meses" detalhe={desafio ? `${desafio.titulo}: ${desafio.detalhe.toLowerCase()}` : undefined} para="/rezar/desafios" />
          <ItemLista icone={Flame} titulo="Terço da Misericórdia" para="/rezar/misericordia" />
          <ItemLista icone={Shield} titulo="Terço de São Miguel" para="/rezar/sao-miguel" />
          <ItemLista icone={Crown} titulo="Consagração a Nossa Senhora" detalhe={consagracao?.detalhe ?? "Em 33 dias"} para="/rezar/consagracao" />
          <ItemLista icone={Footprints} titulo="Via-Sacra" para="/rezar/via-sacra" />
          <ItemLista
            icone={CalendarHeart}
            titulo="Semana Santa"
            detalhe={santa !== null ? `Hoje: ${NOMES_DA_SEMANA_SANTA[santa]}` : `Domingo de Ramos: ${diaEMes(domingoDeRamos(ano))}`}
            para="/rezar/semana-santa"
          />
        </Grupo>
        <Grupo titulo="Comunidade">
          <ItemLista icone={HeartHandshake} titulo="Intenções" detalhe="Peça e reze pelos outros" para="/intencoes" />
          <ItemLista icone={UsersRound} titulo="Grupos" detalhe="Família, grupo de oração, pastoral" para="/grupos" />
        </Grupo>
        <Grupo titulo="Vida cristã">
          <ItemLista icone={Cross} titulo="Exame de consciência" para="/rezar/exame" />
          <ItemLista icone={HeartHandshake} titulo="Como se confessar" para="/rezar/confissao" />
          <ItemLista icone={Church} titulo="A Missa, parte por parte" para="/rezar/missa" />
          <ItemLista icone={BookHeart} titulo="Pelos falecidos" para="/rezar/falecidos" />
        </Grupo>
      </div>
    </div>
  );
}
