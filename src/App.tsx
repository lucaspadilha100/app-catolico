import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Hoje from "@/pages/Hoje";
import Rezar from "@/pages/Rezar";
import Terco, { TercoDaMisericordia, TercoDeSaoMiguel } from "@/pages/Terco";
import { Ladainhas, OracaoPagina, Oracoes } from "@/pages/Oracoes";
import Liturgia from "@/pages/Liturgia";
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
