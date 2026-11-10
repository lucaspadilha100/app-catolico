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
import Calendario from "@/pages/Calendario";
import { GrupoDeSantos, SantoPagina, Santos, SeuSanto } from "@/pages/Santos";
import Exame from "@/pages/Exame";
import { GuiaDaConfissao, GuiaDaMissa } from "@/pages/Guias";
import Falecidos from "@/pages/Falecidos";
import DiarioEspiritual from "@/pages/Diario";
import Conta, { Privacidade, Termos } from "@/pages/Conta";
import Mais from "@/pages/Mais";
import { NaoEncontrada } from "@/pages/Simples";
import { Missas, ParoquiaPagina, Sugerir } from "@/pages/Missas";
import { EditarParoquia, Painel } from "@/pages/Painel";
import { Biblia, BibliaCapitulo, BibliaLivro } from "@/pages/Biblia";
import { AoVivo, EditarEncontro, EditarTerco, TercoPagina, Tercos } from "@/pages/Tercos";

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
        <Route path="rezar/exame" element={<Exame />} />
        <Route path="rezar/confissao" element={<GuiaDaConfissao />} />
        <Route path="rezar/missa" element={<GuiaDaMissa />} />
        <Route path="rezar/falecidos" element={<Falecidos />} />
        <Route path="diario" element={<DiarioEspiritual />} />
        <Route path="conta" element={<Conta />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="termos" element={<Termos />} />
        <Route path="biblia" element={<Biblia />} />
        <Route path="biblia/:livro" element={<BibliaLivro />} />
        <Route path="biblia/:livro/:capitulo" element={<BibliaCapitulo />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="santos" element={<Santos />} />
        <Route path="santos/seu-santo" element={<SeuSanto />} />
        <Route path="santos/grupo/:grupo" element={<GrupoDeSantos />} />
        <Route path="santos/:id" element={<SantoPagina />} />
        <Route path="missas" element={<Missas />} />
        <Route path="missas/paroquia/:id" element={<ParoquiaPagina />} />
        <Route path="missas/sugerir" element={<Sugerir />} />
        <Route path="tercos" element={<Tercos />} />
        <Route path="tercos/novo" element={<EditarTerco />} />
        <Route path="tercos/:id" element={<TercoPagina />} />
        <Route path="tercos/:id/editar" element={<EditarTerco />} />
        <Route path="tercos/:id/encontro" element={<EditarEncontro />} />
        <Route path="tercos/:id/ao-vivo" element={<AoVivo />} />
        <Route path="painel" element={<Painel />} />
        <Route path="painel/paroquia/:id" element={<EditarParoquia />} />
        <Route path="mais" element={<Mais />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
