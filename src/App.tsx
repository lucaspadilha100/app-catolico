import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Hoje from "@/pages/Hoje";
import Rezar from "@/pages/Rezar";
import Terco from "@/pages/Terco";
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
