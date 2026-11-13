"""Gera a migração _dados_ de um estado a partir das pesquisas no FORMATO.md.

Uso: python3 scripts/paroquias/carregar_estado.py <pasta da pesquisa> <UF> <timestamp> [diocese=arquivo.json ...]

Ex.: python3 scripts/paroquias/carregar_estado.py fontes/paroquias/pesquisa-rr-2026-11 RR 20261211000000 "Diocese de Roraima=roraima.json"

Cada unidade do JSON vira a matriz (com nota e fonte) e as suas igrejas viram
linhas de paroquias apontando a matriz; horários só os que vieram com fonte.
Paróquia sem horário entra sem horário (pedido do dono, 13/11/2026). Ids são
uuid5 determinísticos: rodar de novo não duplica (on conflict do nothing).
"""

import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import unicodedata
import uuid
from pathlib import Path

ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
CACHE_GEO = Path(os.environ.get("GEOCACHE", "fontes/paroquias/geocache.json"))
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


def encurtar_fonte(url):
    if len(url) <= 120:
        return url
    m = re.match(r"https?://[^/]+", url)
    return m.group(0) if m else url[:120]


def instagram_valido(valor, avisos, nome):
    limpo = (valor or "").strip().lstrip("@")
    if not limpo:
        return ""
    if re.fullmatch(r"[A-Za-z0-9._]{1,30}", limpo):
        return limpo
    avisos.append(f"instagram fora do padrao, descartado: {limpo!r} ({nome})")
    return ""


def so_digitos(v):
    return re.sub(r"\D", "", str(v or ""))[:20]


def hora_ok(h):
    try:
        hh, mm = str(h).split(":")
        return 0 <= int(hh) < 24 and 0 <= int(mm) < 60
    except Exception:
        return False


def main():
    so_horarios = "--so-horarios" in sys.argv
    correcao = "--correcao" in sys.argv
    args = [a for a in sys.argv[1:] if a not in ("--correcao", "--so-horarios")]
    pasta, uf, ts = Path(args[0]), args[1].upper(), args[2]
    mapa = [a.split("=", 1) for a in args[3:]]
    paroquias, horarios, notas = [], [], []
    avisos = []
    vistos = {}
    antigos_p, antigos_h, errados_p, errados_h = set(), set(), set(), set()

    for diocese, arquivo in mapa:
        unidades = json.loads((pasta / "saida" / arquivo).read_text())
        for u in unidades:
            if not (u.get("cidade") or "").strip():
                avisos.append(f"SEM CIDADE, fora da carga: {u.get('nome')} ({diocese})")
                continue
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
            id_antigo = chave(uf, diocese, u.get("nome"), igrejas[0].get("cidade") or u.get("cidade", ""), igrejas[0].get("nome"), "0")
            repeticao = vistos.get(id_antigo, 0)
            vistos[id_antigo] = repeticao + 1
            extra = (f"repetida {repeticao}",) if repeticao else ()
            if repeticao:
                avisos.append(f"nome repetido na mesma cidade, separada ({repeticao}): {u.get('nome')} ({diocese})")
            for n, ig in enumerate(igrejas):
                cidade = ig.get("cidade") or u.get("cidade", "")
                tipo = categoria if n == 0 else (TIPO_DA_IGREJA.get(ig.get("tipo", "capela")) or "capela")
                if n == 0 and ig.get("tipo") == "santuario":
                    tipo = "santuario"
                pid_antigo = chave(uf, diocese, u.get("nome"), cidade, ig.get("nome"), str(n))
                pid = chave(uf, diocese, u.get("nome"), cidade, ig.get("nome"), str(n), *extra)
                (errados_p if repeticao else antigos_p).add(pid_antigo)
                if n == 0:
                    matriz_id = pid
                nome = (u.get("nome", "") if n == 0 else ig.get("nome") or "").strip()
                if n == 0:
                    nome = re.sub(r"^(Área Pastoral|Área Missionária|Quase[- ][Pp]aróquia)(( d[aeo])?)\s+", r"Igreja\2 ", nome)
                paroquias.append({
                    "repetida": bool(repeticao),
                    "id": pid,
                    "nome": nome[:160],
                    "tipo": tipo,
                    "matriz_id": None if n == 0 else matriz_id,
                    "endereco": (ig.get("endereco") or "")[:240],
                    "bairro": (ig.get("localidade") or "")[:120],
                    "cidade": cidade[:120],
                    "uf": uf_da_unidade,
                    "padroeiro": (u.get("padroeiro") or "")[:160] if n == 0 else "",
                    "telefone": so_digitos(contatos.get("telefone"))[:13] if n == 0 else "",
                    "whatsapp": so_digitos(contatos.get("whatsapp"))[:13] if n == 0 else "",
                    "instagram": instagram_valido(contatos.get("instagram"), avisos, u.get("nome")) if n == 0 else "",
                    "site": (contatos.get("site") or "")[:200] if n == 0 else "",
                    "email": (contatos.get("email") or "")[:160] if n == 0 else "",
                    "diocese": diocese[:160],
                    "fonte": encurtar_fonte(fontes[0]) if fontes else "",
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
                    hid_antigo = chave("horario", pid_antigo, h["tipo"], str(dia), h["hora"], str(semanas), h.get("observacao", ""))
                    (errados_h if repeticao else antigos_h).add(hid_antigo)
                    horarios.append({
                        "repetida": bool(repeticao),
                        "id": hid, "paroquia_id": pid, "tipo": h["tipo"], "dia_semana": dia,
                        "semanas": semanas, "hora": h["hora"], "observacao": (h.get("observacao") or "")[:60],
                    })
            texto = (u.get("observacao") or "").strip()
            nao_cabe = "; ".join(filter(None, ((ig.get("nao_cabe") or "").strip() for ig in igrejas)))
            if nao_cabe:
                texto = (texto + (" " if texto else "") + "Fora do formato: " + nao_cabe)[:4000]
            if texto or fontes or confianca:
                notas.append({"repetida": bool(repeticao), "paroquia_id": matriz_id, "texto": texto, "fontes": fontes, "confianca": confianca if confianca in ("alta", "media") else ""})

    if correcao:
        paroquias = [p for p in paroquias if p["repetida"]]
        horarios = [h for h in horarios if h["repetida"]]
        notas = [nq for nq in notas if nq["repetida"]]
        errados_p -= antigos_p
        errados_h -= antigos_h
    if so_horarios:
        linhas = [f"-- {uf}: horários que faltavam, gerado por scripts/paroquias/carregar_estado.py --so-horarios a partir de {pasta.name}",
                  "-- Só entra em paróquia que ainda não tem nenhum horário e que nenhuma secretaria conferiu.", ""]
        vs = []
        for h in horarios:
            semanas = "null::smallint[]" if h["semanas"] is None else "'{" + ",".join(map(str, h["semanas"])) + "}'::smallint[]"
            vs.append(f"  ('{h['id']}'::uuid, '{h['paroquia_id']}'::uuid, '{h['tipo']}', {h['dia_semana']}::smallint, {semanas}, '{h['hora']}'::time, {s(h['observacao'])})")
        if vs:
            linhas.append("insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)")
            linhas.append("select v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values")
            linhas.append(",\n".join(vs))
            linhas.append(") as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)")
            linhas.append("join public.paroquias p on p.id = v.paroquia_id")
            linhas.append("where not p.verificada and p.conferida_em is null")
            linhas.append("  and not exists (select 1 from public.horarios h where h.paroquia_id = v.paroquia_id)")
            linhas.append("on conflict (id) do nothing;")
        destino = Path(os.environ.get("SAIDA_MIGRACOES", "supabase/migrations")) / f"{ts}_dados_{uf.lower()}_horarios.sql"
        destino.write_text("\n".join(linhas) + "\n")
        print(f"{destino}: {len(horarios)} horários (só entram onde não havia nenhum)")
        return
    geocodificar(paroquias, avisos)
    for nq in notas:
        m = next(x for x in paroquias if x["id"] == nq["paroquia_id"])
        if m["precisao"] == "cidade":
            nq["texto"] = (nq["texto"] + (" " if nq["texto"] else "") + "Ponto no mapa aproximado: centro da cidade.")[:4000]

    linhas = [f"-- {uf}: gerado por scripts/paroquias/carregar_estado.py a partir de {pasta.name}", ""]
    if correcao:
        linhas[0] += " (--correcao: paróquias de mesmo nome na mesma cidade, que a carga antiga juntou numa só)"
        if errados_h:
            linhas.append("delete from public.horarios where id in (" + ", ".join(f"'{i}'" for i in sorted(errados_h)) + ");")
        if errados_p:
            linhas.append("delete from public.paroquias where id in (" + ", ".join(f"'{i}'" for i in sorted(errados_p)) + ");")
        linhas.append("")
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

    destino = Path(os.environ.get("SAIDA_MIGRACOES", "supabase/migrations")) / f"{ts}_dados_{uf.lower()}_paroquias{'_repetidas' if correcao else ''}.sql"
    destino.write_text("\n".join(linhas) + "\n")
    matrizes = sum(1 for p in paroquias if not p["matriz_id"])
    com_ponto = sum(1 for p in paroquias if p["lat"] is not None)
    exatas = sum(1 for p in paroquias if p["precisao"] in ("endereco", "nome"))
    if correcao:
        print(f"{destino}: apaga {len(errados_p)} igrejas e {len(errados_h)} horários que foram parar na paróquia errada")
    print(f"{destino}: {matrizes} matrizes, {len(paroquias) - matrizes} capelas, {len(horarios)} horários, {len(notas)} notas, {com_ponto} com ponto ({exatas} exatos)")
    for a in avisos:
        print("aviso:", a)


main()
