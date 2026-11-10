import json
import re
import subprocess
import sys
import time
import unicodedata
import urllib.parse
import uuid
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
FONTES = RAIZ / "fontes/paroquias/pesquisa-rn"
CACHE = RAIZ / "fontes/paroquias/coordenadas-rn.json"
SAIDA = RAIZ / "supabase/migrations/20261120000100_dados_igrejas_rn.sql"
ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
TIPOS = {"paroquia", "capela", "comunidade", "santuario", "catedral", "basilica", "mosteiro"}
MATRIZES = {"paroquia", "catedral", "basilica"}


def sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t or "") if unicodedata.category(c) != "Mn").lower()


def chave(nome, cidade):
    n = sem_acento(re.sub(r"\(.*?\)", "", nome))
    n = re.sub(r"\b(paroquia|capela|igreja|matriz|comunidade|santuario|de|da|do|das|dos|e)\b", " ", n)
    return sem_acento(cidade) + "|" + " ".join(n.split())


def sql(v):
    if v is None:
        return "null"
    if isinstance(v, (int, float)):
        return repr(v)
    if isinstance(v, list):
        return "'{" + ",".join('"' + str(x).replace("\\", "\\\\").replace('"', '\\"').replace("'", "''") + '"' for x in v) + "}'"
    return "'" + str(v).replace("'", "''") + "'"


def limpar(v, maximo, padrao=""):
    v = re.sub(r"\s+", " ", str(v or "")).strip()
    return v[:maximo] if v else padrao


def digitos(v, maximo):
    d = re.sub(r"\D", "", str(v or ""))
    if d.startswith("55") and len(d) > 11:
        d = d[2:]
    return d if len(d) <= maximo else ""


cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}


def geocodificar(consulta, cidade):
    if consulta in cache:
        return cache[consulta]
    url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&addressdetails=1&q=" + urllib.parse.quote(consulta)
    r = subprocess.run(["curl", "-sS", "--max-time", "25", "-A", "SantinhoApp/0.1 (importacao de igrejas)", "--", url], capture_output=True, text=True)
    time.sleep(1.1)
    try:
        lista = json.loads(r.stdout or "[]")
    except json.JSONDecodeError:
        return None
    ponto = None
    if lista:
        a = lista[0].get("address", {})
        lugar = sem_acento(" ".join(str(a.get(k, "")) for k in ("city", "town", "village", "municipality", "county")))
        if sem_acento(cidade) in lugar or sem_acento(cidade) in sem_acento(lista[0].get("display_name", "")):
            ponto = [round(float(lista[0]["lat"]), 6), round(float(lista[0]["lon"]), 6)]
    cache[consulta] = ponto
    return ponto


def fonte_de(r):
    if "so no mapa" in sem_acento(r.get("observacao")) or (r.get("confianca") != "alta" and r.get("osm")):
        return "OpenStreetMap"
    d = limpar(r.get("diocese"), 120)
    return d if d and r.get("confianca") == "alta" else "Pesquisa na internet"


def main():
    existentes = {chave(p["nome"], p["cidade"]) for p in json.loads((RAIZ / "fontes/paroquias/ja-no-app-2026-11-12.json").read_text())}
    vistos = set()
    linhas = []
    notas = []
    corrigir = []
    for arquivo in sorted(FONTES.glob("*.json")):
        for r in json.loads(arquivo.read_text()):
            tipo = r.get("tipo") if r.get("tipo") in TIPOS else "capela"
            cidade = limpar(r.get("cidade"), 120)
            nome = limpar(r.get("nome"), 160)
            if not nome or not cidade:
                continue
            paroquia = limpar(r.get("paroquia"), 120)
            if tipo not in MATRIZES and paroquia and sem_acento(paroquia) not in sem_acento(nome):
                completo = f"{nome} ({paroquia})"
                if len(completo) <= 160:
                    nome = completo
            k = chave(nome, cidade)
            if k in existentes or k in vistos:
                continue
            vistos.add(k)
            pid = str(uuid.uuid5(ESPACO, "rn|" + k))
            endereco = limpar(r.get("endereco"), 240)
            bairro = limpar(r.get("bairro"), 120)
            lat, lng = r.get("lat"), r.get("lng")
            aproximado = False
            if lat is None or lng is None:
                ponto = None
                if endereco:
                    ponto = geocodificar(f"{endereco}, {bairro + ', ' if bairro and 'distrito' not in sem_acento(bairro) else ''}{cidade}, Rio Grande do Norte", cidade)
                if ponto is None and tipo in MATRIZES:
                    ponto = geocodificar(f"{cidade}, Rio Grande do Norte", cidade)
                    aproximado = ponto is not None
                if ponto:
                    lat, lng = ponto
            if lat is not None and not (-35 <= lat <= 6 and -75 <= lng <= -28):
                lat = lng = None
            instagram = re.sub(r"^@", "", limpar(r.get("instagram"), 40))
            if not re.fullmatch(r"[A-Za-z0-9._]{0,30}", instagram):
                instagram = ""
            cep = digitos(r.get("cep"), 8)
            if len(cep) != 8:
                cep = ""
            valores = [
                pid,
                nome,
                tipo,
                limpar(r.get("padroeiro"), 160),
                limpar(r.get("diocese"), 160),
                endereco,
                bairro,
                cidade,
                "RN",
                cep,
                lat,
                lng,
                digitos(r.get("telefone"), 13),
                digitos(r.get("whatsapp"), 13),
                instagram,
                limpar(r.get("site"), 200),
                limpar(r.get("email"), 160),
                fonte_de(r),
            ]
            linhas.append("  (" + ", ".join(sql(v) for v in valores) + ")")
            texto = limpar(r.get("observacao"), 3500)
            if aproximado:
                texto = (texto + " " if texto else "") + "Ponto no mapa aproximado: centro da cidade."
            fontes = [str(f)[:300] for f in (r.get("fontes") or [])][:8]
            confianca = r.get("confianca") if r.get("confianca") in ("alta", "media") else ""
            notas.append("  (" + ", ".join(sql(v) for v in [pid, texto, fontes, confianca]) + ")")
    corrigir.append(
        "update public.paroquias set cidade = 'Ceará-Mirim' where nome like 'Área Pastoral de Nossa Senhora das Dores%' and cidade = 'Natal' and conferida_em is null;"
    )
    corrigir.append(
        "update public.paroquias set cidade = 'Rio do Fogo' where nome like 'Área Pastoral de Nossa Senhora dos Navegantes%' and cidade = 'Natal' and conferida_em is null;"
    )
    saida = [
        "insert into public.paroquias (id, nome, tipo, padroeiro, diocese, endereco, bairro, cidade, uf, cep, lat, lng, telefone, whatsapp, instagram, site, email, fonte) values",
        ",\n".join(linhas),
        "on conflict (id) do nothing;\n",
        "insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values",
        ",\n".join(notas),
        "on conflict (paroquia_id) do nothing;\n",
        *corrigir,
        "",
    ]
    SAIDA.write_text("\n".join(saida))
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    com_ponto = sum(1 for l in linhas if ", null, null, " not in l)
    print(f"{len(linhas)} igrejas, {com_ponto} com ponto no mapa", file=sys.stderr)


if __name__ == "__main__":
    main()
