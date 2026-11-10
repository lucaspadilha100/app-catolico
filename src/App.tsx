import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Hoje from "@/pages/Hoje";
import Rezar from "@/pages/Rezar";
import Terco, { TercoDaMisericordia, TercoDeSaoMiguel } from "@/pages/Terco";
import { Ladainhas, OracaoPagina, Oracoes } from "@/pages/Oracoes";
import Liturgia from "@/pages/Liturgia";
import { NovenaPagina, Novenas } from "@/pages/Novenas";
import { DesafioPagina, Desafios } from "@/pages/Desafios";
import Consagracao from "@/pages/Consagracao";
import ViaSacra from "@/pages/ViaSacra";
import SemanaSanta from "@/pages/SemanaSanta";
import Oficio from "@/pages/Oficio";
import Mais from "@/pages/Mais";
import { Missas, NaoEncontrada } from "@/pages/Simples";
import { Biblia, BibliaCapitulo, BibliaLivro } from "@/pages/Biblia";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hoje />} />
        <Route path="liturgia" element={<Liturgia />} />
        <Route path="rezar" element={<Rezar />} />
        <Route path="rezar/terco" element={<Terco />} />
        <Route path="rezar/misericordia" element={<TercoDaMisericordia />} />
        <Route path="rezar/sao-miguel" element={<TercoDeSaoMiguel />} />
        <Route path="rezar/oracoes" element={<Oracoes />} />
        <Route path="rezar/oracoes/:id" element={<OracaoPagina />} />
        <Route path="rezar/ladainhas" element={<Ladainhas />} />
        <Route path="rezar/novenas" element={<Novenas />} />
        <Route path="rezar/novenas/:id" element={<NovenaPagina />} />
        <Route path="rezar/desafios" element={<Desafios />} />
        <Route path="rezar/desafios/:id" element={<DesafioPagina />} />
        <Route path="rezar/consagracao" element={<Consagracao />} />
        <Route path="rezar/via-sacra" element={<ViaSacra />} />
        <Route path="rezar/semana-santa" element={<SemanaSanta />} />
        <Route path="rezar/oficio" element={<Oficio />} />
        <Route path="biblia" element={<Biblia />} />
        <Route path="biblia/:livro" element={<BibliaLivro />} />
        <Route path="biblia/:livro/:capitulo" element={<BibliaCapitulo />} />
        <Route path="missas" element={<Missas />} />
        <Route path="mais" element={<Mais />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
