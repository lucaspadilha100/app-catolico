import { BookHeart, CircleDot, Cross, Flame, HandHeart, ListOrdered, Moon, ScrollText, Footprints } from "lucide-react";
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
        <ItemLista icone={HandHeart} titulo="Orações" detalhe="Em português e latim" />
        <ItemLista icone={Flame} titulo="Terço da Misericórdia" />
        <ItemLista icone={ListOrdered} titulo="Novenas" />
        <ItemLista icone={Moon} titulo="Pequeno Ofício de Nossa Senhora" />
        <ItemLista icone={ScrollText} titulo="Ladainhas" />
        <ItemLista icone={Footprints} titulo="Via-Sacra" />
        <ItemLista icone={Cross} titulo="Exame de consciência" />
        <ItemLista icone={BookHeart} titulo="Pelos falecidos" />
      </div>
    </div>
  );
}
