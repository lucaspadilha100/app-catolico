import { BookHeart, CircleDot, Cross, Flame, HandHeart, ListOrdered, Moon, ScrollText, Footprints, Shield } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { misteriosDoDia } from "@/liturgia/terco";
import { ItemLista, TituloPagina } from "@/components/Cartao";

export default function Rezar() {
  const l = useDiaLiturgico();
  return (
    <div>
      <TituloPagina>Rezar</TituloPagina>
      <div className="flex flex-col gap-3">
        <ItemLista icone={CircleDot} titulo="Terço" detalhe={`Hoje: ${misteriosDoDia(l.data).nome}`} para="/rezar/terco" />
        <ItemLista icone={HandHeart} titulo="Orações" detalhe="Em português e latim" para="/rezar/oracoes" />
        <ItemLista icone={Flame} titulo="Terço da Misericórdia" para="/rezar/misericordia" />
        <ItemLista icone={Shield} titulo="Terço de São Miguel" para="/rezar/sao-miguel" />
        <ItemLista icone={ListOrdered} titulo="Novenas" />
        <ItemLista icone={Moon} titulo="Pequeno Ofício de Nossa Senhora" />
        <ItemLista icone={ScrollText} titulo="Ladainhas" para="/rezar/ladainhas" />
        <ItemLista icone={Footprints} titulo="Via-Sacra" />
        <ItemLista icone={Cross} titulo="Exame de consciência" />
        <ItemLista icone={BookHeart} titulo="Pelos falecidos" />
      </div>
    </div>
  );
}
