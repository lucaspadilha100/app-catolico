"""Gera a migração _dados_ de um estado a partir das pesquisas no FORMATO.md.

Uso: python3 scripts/paroquias/carregar_estado.py <pasta da pesquisa> <UF> <timestamp> [diocese=arquivo.json ...]

Ex.: python3 scripts/paroquias/carregar_estado.py fontes/paroquias/pesquisa-rr-2026-11 RR 20261211000000 "Diocese de Roraima=roraima.json"

Cada unidade do JSON vira a matriz (com nota e fonte) e as suas igrejas viram
linhas de paroquias apontando a matriz; horários só os que vieram com fonte.
Paróquia sem horário entra sem horário (pedido do dono, 13/11/2026). Ids são
uuid5 determinísticos: rodar de novo não duplica (on conflict do nothing).
"""

import json
import re
import sys
import time
import urllib.parse
import urllib.request
import unicodedata
import uuid
from pathlib import Path

ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
CACHE_GEO = Path("fontes/paroquias/geocache.json")
UF_NOME = {
    "AC": "Acre", "AL": "Alagoas", "AP": "Amapá", "AM": "Amazonas", "BA": "Bahia", "CE": "Ceará",
    "DF": "Distrito Federal", "ES": "Espírito Santo", "GO": "Goiás", "MA": "Maranhão", "MT": "Mato Grosso",
    "MS": "Mato Grosso do Sul", "MG": "Minas Gerais", "PA": "Pará", "PB": "Paraíba", "PR": "Paraná",
    "PE": "Pernambuco", "PI": "Piauí", "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte",
    "RS": "Rio Grande do Sul", "RO": "Rondônia", "RR": "Roraima", "SC": "Santa Catarina",
    "SP": "São Paulo", "SE": "Sergipe", "TO": "Tocantins", "ZZ": "ZZ",
}


def consulta_nominatim(params):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode({"format": "json", "limit": 1, "countrycodes": "br", **params})
    req = urllib.request.Request(url, headers={"User-Agent": "MinhaIgrejinha-geocode/0.1"})
    for tentativa in range(4):
        time.sleep(1.2 + 8 * tentativa)
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                d = json.load(r)
            return (round(float(d[0]["lat"]), 6), round(float(d[0]["lon"]), 6)) if d else None
        except urllib.error.HTTPError as e:
            if e.code != 429:
                raise
    raise RuntimeError("Nominatim 429 após 4 tentativas")


def geocodificar(paroquias, avisos):
    cache = json.loads(CACHE_GEO.read_text()) if CACHE_GEO.exists() else {}
    pendentes = 0
    for p in paroquias:
        if not p["cidade"]:
            continue
        chave_geo = "|".join([p["nome"], p["endereco"], p["bairro"], p["cidade"], p["uf"]])
        if chave_geo not in cache:
            achado = None
            estado = UF_NOME.get(p["uf"], p["uf"])
            try:
                if p["endereco"]:
                    ponto = consulta_nominatim({"street": p["endereco"], "city": p["cidade"], "state": estado, "country": "Brasil"})
                    if ponto:
                        achado = {"lat": ponto[0], "lng": ponto[1], "precisao": "endereco"}
                if not achado:
                    ponto = consulta_nominatim({"q": f"{p['nome']}, {p['cidade']}, {estado}, Brasil"})
                    if ponto:
                        achado = {"lat": ponto[0], "lng": ponto[1], "precisao": "nome"}
                if not achado and p["matriz_id"] is None:
                    ponto = consulta_nominatim({"city": p["cidade"], "state": estado, "country": "Brasil"})
                    if ponto:
                        achado = {"lat": ponto[0], "lng": ponto[1], "precisao": "cidade"}
            except Exception as e:
                avisos.append(f"geocodificação falhou em {p['nome']} ({p['cidade']}): {e}")
                p["lat"], p["lng"], p["precisao"] = None, None, ""
                continue
            cache[chave_geo] = achado or {"lat": None, "lng": None, "precisao": ""}
            pendentes += 1
            if pendentes % 25 == 0:
                CACHE_GEO.write_text(json.dumps(cache, ensure_ascii=False))
                print(f"  geocodificadas {pendentes}...", flush=True)
        geo = cache[chave_geo]
        p["lat"], p["lng"], p["precisao"] = geo["lat"], geo["lng"], geo["precisao"]
    CACHE_GEO.write_text(json.dumps(cache, ensure_ascii=False))

TIPO_DA_CATEGORIA = {
    "paroquia": "paroquia",
    "quase_paroquia": "quase_paroquia",
    "area_pastoral": "area_pastoral",
    "area_missionaria": "area_missionaria",
    "catedral": "catedral",
    "santuario": "santuario",
    "basilica": "basilica",
}
TIPO_DA_IGREJA = {"matriz": None, "capela": "capela", "comunidade": "comunidade", "santuario": "santuario"}


def s(v):
    return "'" + str(v or "").replace("'", "''") + "'"


def chave(*partes):
    base = "|".join(unicodedata.normalize("NFC", str(p or "").strip().lower()) for p in partes)
    return str(uuid.uuid5(ESPACO, base))


def hora_ok(h):
    try:
        hh, mm = str(h).split(":")
        return 0 <= int(hh) < 24 and 0 <= int(mm) < 60
    except Exception:
        return False


def main():
    pasta, uf, ts = Path(sys.argv[1]), sys.argv[2].upper(), sys.argv[3]
    mapa = dict(a.split("=", 1) for a in sys.argv[4:])
    paroquias, horarios, notas = [], [], []
    avisos = []

    for diocese, arquivo in mapa.items():
        unidades = json.loads((pasta / "saida" / arquivo).read_text())
        for u in unidades:
            categoria = TIPO_DA_CATEGORIA.get(u.get("categoria", "paroquia"))
            if not categoria:
                avisos.append(f"categoria desconhecida: {u.get('categoria')} em {u.get('nome')}")
                categoria = "paroquia"
            contatos = u.get("contatos") or {}
            igrejas = u.get("igrejas") or []
            if not igrejas:
                igrejas = [{"nome": u.get("nome", ""), "tipo": "matriz", "cidade": u.get("cidade", ""), "localidade": "", "endereco": "", "horarios": []}]
            matriz_id = None
            fontes = [f.get("url", "") for f in (u.get("fontes") or []) if f.get("url")]
            confianca = u.get("confianca", "")
            uf_da_unidade = (u.get("uf") or uf).upper()
            for n, ig in enumerate(igrejas):
                cidade = ig.get("cidade") or u.get("cidade", "")
                tipo = categoria if n == 0 else (TIPO_DA_IGREJA.get(ig.get("tipo", "capela")) or "capela")
                if n == 0 and ig.get("tipo") == "santuario":
                    tipo = "santuario"
                pid = chave(uf, diocese, u.get("nome"), cidade, ig.get("nome"), str(n))
                if n == 0:
                    matriz_id = pid
                nome = (u.get("nome", "") if n == 0 else ig.get("nome") or "").strip()
                if n == 0:
                    nome = re.sub(r"^(Área Pastoral|Área Missionária|Quase[- ][Pp]aróquia)(( d[aeo])?)\s+", r"Igreja\2 ", nome)
                paroquias.append({
                    "id": pid,
                    "nome": nome,
                    "tipo": tipo,
                    "matriz_id": None if n == 0 else matriz_id,
                    "endereco": ig.get("endereco", ""),
                    "bairro": ig.get("localidade", ""),
                    "cidade": cidade,
                    "uf": uf_da_unidade,
                    "padroeiro": u.get("padroeiro", "") if n == 0 else "",
                    "telefone": contatos.get("telefone", "") if n == 0 else "",
                    "whatsapp": contatos.get("whatsapp", "") if n == 0 else "",
                    "instagram": contatos.get("instagram", "") if n == 0 else "",
                    "site": contatos.get("site", "") if n == 0 else "",
                    "email": contatos.get("email", "") if n == 0 else "",
                    "diocese": diocese,
                    "fonte": fontes[0] if fontes else "",
                    "fonte_oficial": confianca == "alta",
                    "lat": None, "lng": None, "precisao": "",
                })
                for h in ig.get("horarios") or []:
                    if h.get("tipo") not in ("missa", "confissao", "adoracao") or not hora_ok(h.get("hora")):
                        avisos.append(f"horário fora do formato em {nome}: {h}")
                        continue
                    dia = h.get("dia_semana")
                    if not isinstance(dia, int) or not 0 <= dia <= 6:
                        avisos.append(f"dia_semana inválido em {nome}: {h}")
                        continue
                    semanas = h.get("semanas")
                    if semanas is not None and (not isinstance(semanas, list) or not all(isinstance(x, int) and 1 <= x <= 5 for x in semanas)):
                        avisos.append(f"semanas inválidas em {nome}: {h}")
                        continue
                    hid = chave("horario", pid, h["tipo"], str(dia), h["hora"], str(semanas), h.get("observacao", ""))
                    horarios.append({
                        "id": hid, "paroquia_id": pid, "tipo": h["tipo"], "dia_semana": dia,
                        "semanas": semanas, "hora": h["hora"], "observacao": (h.get("observacao") or "")[:60],
                    })
            texto = (u.get("observacao") or "").strip()
            nao_cabe = "; ".join(filter(None, ((ig.get("nao_cabe") or "").strip() for ig in igrejas)))
            if nao_cabe:
                texto = (texto + (" " if texto else "") + "Fora do formato: " + nao_cabe)[:4000]
            if texto or fontes or confianca:
                notas.append({"paroquia_id": matriz_id, "texto": texto, "fontes": fontes, "confianca": confianca if confianca in ("alta", "media") else ""})

    geocodificar(paroquias, avisos)
    for nq in notas:
        m = next(x for x in paroquias if x["id"] == nq["paroquia_id"])
        if m["precisao"] == "cidade":
            nq["texto"] = (nq["texto"] + (" " if nq["texto"] else "") + "Ponto no mapa aproximado: centro da cidade.")[:4000]

    linhas = [f"-- {uf}: gerado por scripts/paroquias/carregar_estado.py a partir de {pasta.name}", ""]
    linhas.append("insert into public.paroquias (id, nome, tipo, matriz_id, endereco, bairro, cidade, uf, lat, lng, padroeiro, telefone, whatsapp, instagram, site, email, diocese, fonte, fonte_oficial) values")
    vs = []
    for p in paroquias:
        matriz = f"'{p['matriz_id']}'" if p["matriz_id"] else "null"
        lat = "null" if p["lat"] is None else str(p["lat"])
        lng = "null" if p["lng"] is None else str(p["lng"])
        vs.append(f"  ('{p['id']}', {s(p['nome'])}, '{p['tipo']}', {matriz}, {s(p['endereco'])}, {s(p['bairro'])}, {s(p['cidade'])}, '{p['uf']}', {lat}, {lng}, {s(p['padroeiro'])}, {s(p['telefone'])}, {s(p['whatsapp'])}, {s(p['instagram'])}, {s(p['site'])}, {s(p['email'])}, {s(p['diocese'])}, {s(p['fonte'])}, {str(p['fonte_oficial']).lower()})")
    linhas.append(",\n".join(vs))
    linhas.append("on conflict (id) do nothing;")
    linhas.append("")
    if horarios:
        linhas.append("insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao) values")
        vs = []
        for h in horarios:
            semanas = "null::smallint[]" if h["semanas"] is None else "'{" + ",".join(map(str, h["semanas"])) + "}'::smallint[]"
            vs.append(f"  ('{h['id']}', '{h['paroquia_id']}', '{h['tipo']}', {h['dia_semana']}, {semanas}, '{h['hora']}', {s(h['observacao'])})")
        linhas.append(",\n".join(vs))
        linhas.append("on conflict (id) do nothing;")
        linhas.append("")
    if notas:
        linhas.append("insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values")
        vs = []
        for nq in notas:
            fontes_sql = "'{" + ",".join('"' + f.replace('"', "").replace("'", "''") + '"' for f in nq["fontes"]) + "}'"
            vs.append(f"  ('{nq['paroquia_id']}', {s(nq['texto'])}, {fontes_sql}, {s(nq['confianca'])})")
        linhas.append(",\n".join(vs))
        linhas.append("on conflict (paroquia_id) do nothing;")

    destino = Path("supabase/migrations") / f"{ts}_dados_{uf.lower()}_paroquias.sql"
    destino.write_text("\n".join(linhas) + "\n")
    matrizes = sum(1 for p in paroquias if not p["matriz_id"])
    com_ponto = sum(1 for p in paroquias if p["lat"] is not None)
    exatas = sum(1 for p in paroquias if p["precisao"] in ("endereco", "nome"))
    print(f"{destino}: {matrizes} matrizes, {len(paroquias) - matrizes} capelas, {len(horarios)} horários, {len(notas)} notas, {com_ponto} com ponto ({exatas} exatos)")
    for a in avisos:
        print("aviso:", a)


main()
