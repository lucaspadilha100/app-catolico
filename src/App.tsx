import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Hoje from "@/pages/Hoje";
const Rezar = lazy(() => import("@/pages/Rezar"));
const Terco = lazy(() => import("@/pages/Terco"));
const TercoDaMisericordia = lazy(() => import("@/pages/Terco").then((m) => ({ default: m.TercoDaMisericordia })));
const TercoDeSaoMiguel = lazy(() => import("@/pages/Terco").then((m) => ({ default: m.TercoDeSaoMiguel })));
const Ladainhas = lazy(() => import("@/pages/Oracoes").then((m) => ({ default: m.Ladainhas })));
const OracaoPagina = lazy(() => import("@/pages/Oracoes").then((m) => ({ default: m.OracaoPagina })));
const Oracoes = lazy(() => import("@/pages/Oracoes").then((m) => ({ default: m.Oracoes })));
const Liturgia = lazy(() => import("@/pages/Liturgia"));
const NovenaPagina = lazy(() => import("@/pages/Novenas").then((m) => ({ default: m.NovenaPagina })));
const Novenas = lazy(() => import("@/pages/Novenas").then((m) => ({ default: m.Novenas })));
const DesafioPagina = lazy(() => import("@/pages/Desafios").then((m) => ({ default: m.DesafioPagina })));
const Desafios = lazy(() => import("@/pages/Desafios").then((m) => ({ default: m.Desafios })));
const Consagracao = lazy(() => import("@/pages/Consagracao"));
const ViaSacra = lazy(() => import("@/pages/ViaSacra"));
const SemanaSanta = lazy(() => import("@/pages/SemanaSanta"));
const Oficio = lazy(() => import("@/pages/Oficio"));
const OficioDosDefuntos = lazy(() => import("@/pages/OficioDosDefuntos"));
const Calendario = lazy(() => import("@/pages/Calendario"));
const GrupoDeSantos = lazy(() => import("@/pages/Santos").then((m) => ({ default: m.GrupoDeSantos })));
const SantoPagina = lazy(() => import("@/pages/Santos").then((m) => ({ default: m.SantoPagina })));
const Santos = lazy(() => import("@/pages/Santos").then((m) => ({ default: m.Santos })));
const SeuSanto = lazy(() => import("@/pages/Santos").then((m) => ({ default: m.SeuSanto })));
const Exame = lazy(() => import("@/pages/Exame"));
const GuiaDaConfissao = lazy(() => import("@/pages/Guias").then((m) => ({ default: m.GuiaDaConfissao })));
const GuiaDaMissa = lazy(() => import("@/pages/Guias").then((m) => ({ default: m.GuiaDaMissa })));
const Falecidos = lazy(() => import("@/pages/Falecidos"));
const DiarioEspiritual = lazy(() => import("@/pages/Diario"));
const Conta = lazy(() => import("@/pages/Conta"));
const Privacidade = lazy(() => import("@/pages/Conta").then((m) => ({ default: m.Privacidade })));
const Termos = lazy(() => import("@/pages/Conta").then((m) => ({ default: m.Termos })));
const Cursos = lazy(() => import("@/pages/Cursos").then((m) => ({ default: m.Cursos })));
const CursoPagina = lazy(() => import("@/pages/Cursos").then((m) => ({ default: m.CursoPagina })));
const Roteiros = lazy(() => import("@/pages/Roteiros").then((m) => ({ default: m.Roteiros })));
const EditarRoteiro = lazy(() => import("@/pages/Roteiros").then((m) => ({ default: m.EditarRoteiro })));
const RoteiroAberto = lazy(() => import("@/pages/Roteiros").then((m) => ({ default: m.RoteiroAberto })));
const ConduzirRoteiro = lazy(() => import("@/pages/Roteiros").then((m) => ({ default: m.ConduzirRoteiro })));
const Santinhos = lazy(() => import("@/pages/Santinhos"));
const Apoie = lazy(() => import("@/pages/Apoie"));
const Mais = lazy(() => import("@/pages/Mais"));
const Lembretes = lazy(() => import("@/pages/Lembretes"));
const NaoEncontrada = lazy(() => import("@/pages/Simples").then((m) => ({ default: m.NaoEncontrada })));
const Missas = lazy(() => import("@/pages/Missas").then((m) => ({ default: m.Missas })));
const ParoquiaPagina = lazy(() => import("@/pages/Missas").then((m) => ({ default: m.ParoquiaPagina })));
const Sugerir = lazy(() => import("@/pages/Missas").then((m) => ({ default: m.Sugerir })));
const EditarParoquia = lazy(() => import("@/pages/Painel").then((m) => ({ default: m.EditarParoquia })));
const InscricoesDaTurma = lazy(() => import("@/pages/PainelPlano").then((m) => ({ default: m.InscricoesDaTurma })));
const Painel = lazy(() => import("@/pages/Painel").then((m) => ({ default: m.Painel })));
const Biblia = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.Biblia })));
const BibliaCapitulo = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.BibliaCapitulo })));
const BibliaBusca = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.BibliaBusca })));
const BibliaPlanos = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.BibliaPlanos })));
const BibliaMarcados = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.BibliaMarcados })));
const BibliaLivro = lazy(() => import("@/pages/Biblia").then((m) => ({ default: m.BibliaLivro })));
const AoVivo = lazy(() => import("@/pages/Tercos").then((m) => ({ default: m.AoVivo })));
const EditarEncontro = lazy(() => import("@/pages/Tercos").then((m) => ({ default: m.EditarEncontro })));
const EditarTerco = lazy(() => import("@/pages/Tercos").then((m) => ({ default: m.EditarTerco })));
const TercoPagina = lazy(() => import("@/pages/Tercos").then((m) => ({ default: m.TercoPagina })));
const Tercos = lazy(() => import("@/pages/Tercos").then((m) => ({ default: m.Tercos })));
const EntrarNoGrupo = lazy(() => import("@/pages/Comunidade").then((m) => ({ default: m.EntrarNoGrupo })));
const GrupoPagina = lazy(() => import("@/pages/Comunidade").then((m) => ({ default: m.GrupoPagina })));
const Grupos = lazy(() => import("@/pages/Comunidade").then((m) => ({ default: m.Grupos })));
const Intencoes = lazy(() => import("@/pages/Comunidade").then((m) => ({ default: m.Intencoes })));
const TercoDoGrupoPagina = lazy(() => import("@/pages/Comunidade").then((m) => ({ default: m.TercoDoGrupoPagina })));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hoje />} />
        <Route path="liturgia/:data" element={<Liturgia />} />
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
        <Route path="rezar/oficio-dos-defuntos" element={<OficioDosDefuntos />} />
        <Route path="rezar/exame" element={<Exame />} />
        <Route path="rezar/confissao" element={<GuiaDaConfissao />} />
        <Route path="rezar/missa" element={<GuiaDaMissa />} />
        <Route path="rezar/falecidos" element={<Falecidos />} />
        <Route path="diario" element={<DiarioEspiritual />} />
        <Route path="conta" element={<Conta />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="termos" element={<Termos />} />
        <Route path="biblia" element={<Biblia />} />
        <Route path="biblia/marcados" element={<BibliaMarcados />} />
        <Route path="biblia/busca" element={<BibliaBusca />} />
        <Route path="biblia/planos" element={<BibliaPlanos />} />
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
        <Route path="intencoes" element={<Intencoes />} />
        <Route path="grupos" element={<Grupos />} />
        <Route path="grupos/entrar/:codigo" element={<EntrarNoGrupo />} />
        <Route path="grupos/:id" element={<GrupoPagina />} />
        <Route path="grupos/:id/terco" element={<TercoDoGrupoPagina />} />
        <Route path="painel" element={<Painel />} />
        <Route path="painel/paroquia/:id" element={<EditarParoquia />} />
        <Route path="painel/paroquia/:id/turma/:turma" element={<InscricoesDaTurma />} />
        <Route path="mais" element={<Mais />} />
        <Route path="lembretes" element={<Lembretes />} />
        <Route path="apoie" element={<Apoie />} />
        <Route path="santinhos" element={<Santinhos />} />
        <Route path="roteiros" element={<Roteiros />} />
        <Route path="roteiros/:id" element={<EditarRoteiro />} />
        <Route path="r/:codigo" element={<RoteiroAberto />} />
        <Route path="r/:codigo/conduzir" element={<ConduzirRoteiro />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="cursos/:id" element={<CursoPagina />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
