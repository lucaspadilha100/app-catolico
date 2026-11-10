import json
import re
import subprocess
import sys
import time
import urllib.parse
import uuid
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path

import openpyxl

RAIZ = Path(__file__).resolve().parents[2]
PLANILHA = RAIZ / "fontes/paroquias/missas-com-br-natal-2026-11-10.xlsx"
CACHE = RAIZ / "fontes/paroquias/coordenadas.json"
SAIDA = RAIZ / "supabase/migrations/20261113000100_dados_paroquias_natal.sql"
FONTE = "Missas.com.br"
ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
DIAS = {"Domingo": 0, "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5, "Sábado": 6}
ORDINAIS = {"primeira": 1, "1ª": 1, "segunda": 2, "2ª": 2, "terceira": 3, "3ª": 3, "quarta": 4, "4ª": 4, "quinta": 5, "último": 6, "ultimo": 6}


def linhas(wb, aba):
    ws = wb[aba]
    r = list(ws.iter_rows(values_only=True))
    return [dict(zip(r[0], x)) for x in r[1:] if any(x)]


def sql(v):
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return repr(v)
    if isinstance(v, list):
        return "'{" + ",".join(str(x) for x in v) + "}'"
    return "'" + str(v).replace("'", "''") + "'"


def tem_endereco(local):
    return bool(local) and bool(re.search(r"- RN\b", local))


ROTULO = re.compile(r"^(matriz|igreja|capela|comunidade|santuário|santo|santa|são|nossa|praça)", re.I)


def separar(local):
    m = re.match(r"^(.*?)\s+-\s+(.*)$", local.strip())
    if m and tem_endereco(m.group(2)) and ROTULO.match(m.group(1)) and "," not in m.group(1):
        return m.group(1).strip(), m.group(2).strip()
    return None, local.strip()


def e_matriz(local):
    if not local:
        return True
    l = local.strip().lower()
    if l.startswith(("matriz", "igreja matriz")):
        return True
    rotulo, _ = separar(local)
    return tem_endereco(local) and rotulo is None


def partes_do_endereco(endereco):
    m = re.match(r"^(.*?)\s*-\s*([^,]*?),\s*([^,]+?)\s*-\s*RN(?:,\s*(\d{5})-?(\d{3}))?$", endereco)
    if not m:
        return {"endereco": endereco, "bairro": "", "cidade": "Natal", "cep": ""}
    rua, bairro, cidade, c1, c2 = m.groups()
    return {"endereco": rua.strip(" ,"), "bairro": bairro.strip(), "cidade": cidade.strip(), "cep": (c1 + c2) if c1 else ""}


def semanas_da_observacao(obs):
    if not obs:
        return None, obs
    m = re.search(r"(somente|exceto)\s+n[oa]s?\s+(.+?)\s+(sexta|quinta|quarta|terça|segunda|domingo|sábado)[^;.]*?do mês\.?", obs, re.I)
    if not m:
        return None, obs
    achadas = sorted({ORDINAIS[p.lower()] for p in re.findall(r"primeira|1ª|segunda|2ª|terceira|3ª|quarta|4ª|quinta|último|ultimo", m.group(2), re.I)})
    if not achadas:
        return None, obs
    semanas = [s for s in [1, 2, 3, 4, 5] if s not in achadas] if m.group(1).lower() == "exceto" else achadas
    resto = (obs[: m.start()] + obs[m.end():]).strip(" ;.")
    resto = resto[0].upper() + resto[1:] if resto else ""
    return semanas, resto


def geocodificar(consulta, cache, exigir_igreja=None):
    chave = consulta if not exigir_igreja else f"{consulta}|igreja:{exigir_igreja}"
    if chave in cache:
        return cache[chave]
    url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=" + urllib.parse.quote(consulta)
    saida = subprocess.run(["curl", "-sS", "-A", "SantinhoApp/0.1 (importacao unica de paroquias)", url], capture_output=True, text=True).stdout
    time.sleep(1.1)
    try:
        r = json.loads(saida)
    except json.JSONDecodeError:
        r = []
    ponto = [round(float(r[0]["lat"]), 6), round(float(r[0]["lon"]), 6)] if r else None
    if ponto and not (-6.2 < ponto[0] < -5.4 and -35.6 < ponto[1] < -34.9):
        ponto = None
    if ponto and exigir_igreja:
        achado = sem_acentos(r[0].get("display_name", "").split(",")[0])
        palavras = [w for w in sem_acentos(exigir_igreja).split() if len(w) > 2 and w not in ("paroquia", "igreja", "das", "dos")]
        if r[0].get("type") != "place_of_worship" or not all(re.search(rf"\\b{w}\\b", achado) for w in palavras) or len(achado.split()) > len(palavras) + 4:
            ponto = None
    cache[chave] = ponto
    return ponto


def sem_acentos(t):
    import unicodedata
    return "".join(c for c in unicodedata.normalize("NFD", t.lower()) if unicodedata.category(c) != "Mn")


ABREVIACOES = [(r"\bAv\.", "Avenida"), (r"\bR\.", "Rua"), (r"\bSen\.", "Senador"), (r"\bProf\.", "Professor"), (r"\bEng\.", "Engenheiro"), (r"\bCap\.", "Capitão"), (r"\bVer\.", "Vereador"), (r"\bCel\.", "Coronel"), (r"\bDr\.", "Doutor"), (r"\bNossa Sra\.", "Nossa Senhora"), (r",?\s*\b[Ss]/[Nn]\b", ""), (r",?\s*n?º?\s*\d+\b", "")]


def sem_abreviacao(t):
    for a, b in ABREVIACOES:
        t = re.sub(a, b, t)
    return re.sub(r"\s+", " ", t).strip(" ,")


NOMES_NO_MAPA = {
    "Paróquia da Catedral": "Catedral Metropolitana de Natal",
    "Paróquia de Nossa Senhora da Apresentação": "Igreja Matriz de Nossa Senhora da Apresentação, Cidade Alta",
}


def contatos(texto):
    r = {"telefone": "", "whatsapp": "", "email": "", "instagram": ""}
    for parte in [p.strip() for p in (texto or "").split(",") if p.strip()]:
        if "@" in parte and not r["email"]:
            r["email"] = parte
        elif parte.startswith("+55"):
            numero = re.sub(r"\D", "", parte)[2:]
            movel = len(numero) == 11 and numero[2] == "9"
            if movel and not r["whatsapp"]:
                r["whatsapp"] = numero
            elif not movel and not r["telefone"]:
                r["telefone"] = numero
            elif not r["telefone"]:
                r["telefone"] = numero
        elif re.fullmatch(r"[A-Za-z0-9._]{2,30}", parte) and not r["instagram"]:
            r["instagram"] = parte
    return r


def tipo_do_nome(nome):
    n = nome.lower()
    if n.startswith("capela"):
        return "capela"
    if n.startswith("comunidade") or n.startswith("área pastoral"):
        return "comunidade"
    if "catedral" in n:
        return "catedral"
    if "santuário" in n:
        return "santuario"
    return "paroquia"


def principal():
    wb = openpyxl.load_workbook(PLANILHA)
    missas, confissoes, paroquias = linhas(wb, "Missas"), linhas(wb, "Confissões"), linhas(wb, "Paróquias")
    contatos_de = {p["Paróquia"]: contatos(p.get("Contatos (tel., WhatsApp, e-mail, Instagram)")) for p in paroquias}
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}

    sede = {}
    for nome in sorted({x["Paróquia"] for x in missas + confissoes}):
        enderecos = Counter(separar(x["Local / endereço"])[1] for x in missas + confissoes if x["Paróquia"] == nome and e_matriz(x["Local / endereço"]) and tem_endereco(x["Local / endereço"] or ""))
        sede[nome] = enderecos.most_common(1)[0][0] if enderecos else None

    igrejas = {}
    horarios = []
    for tipo, lista in (("missa", missas), ("confissao", confissoes)):
        for x in lista:
            nome, local = x["Paróquia"], (x["Local / endereço"] or "").strip()
            chave, obs_local = nome, ""
            if local and not e_matriz(local):
                rotulo, endereco = separar(local)
                if rotulo and tem_endereco(endereco) and endereco == sede.get(nome):
                    pass
                elif rotulo and tem_endereco(endereco):
                    chave = f"{rotulo}|{nome}"
                    igrejas.setdefault(chave, {"nome": rotulo, "mae": nome, "endereco": endereco})
                else:
                    obs_local = local[0].upper() + local[1:]
            hora = str(x["Horário"]).split("-")[0].strip()
            fim = str(x["Horário"]).split("-")[1].strip() if "-" in str(x["Horário"]) else None
            semanas, obs = semanas_da_observacao((x["Observação"] or "").strip())
            if obs_local:
                obs = f"{obs_local}. {obs}" if obs else obs_local
            verificado = datetime.strptime(x["Verificado em"], "%d/%m/%Y").date().isoformat() if x["Verificado em"] else None
            horarios.append({"chave": chave, "tipo": tipo, "dia": DIAS[x["Dia"]], "hora": hora, "fim": fim, "semanas": semanas, "obs": obs[:240], "verificado": verificado})

    registros = {}
    for nome in sede:
        registros[nome] = {"nome": nome, "endereco_completo": sede[nome], "tipo": tipo_do_nome(nome), **contatos_de.get(nome, {"telefone": "", "whatsapp": "", "email": "", "instagram": ""})}
    for chave, c in igrejas.items():
        registros[chave] = {"nome": f"{c['nome']} ({c['mae']})", "endereco_completo": c["endereco"], "tipo": tipo_do_nome(c["nome"]), "telefone": "", "whatsapp": "", "email": "", "instagram": ""}

    saida = ["insert into public.paroquias (id, nome, tipo, endereco, bairro, cidade, uf, cep, lat, lng, telefone, whatsapp, instagram, email, diocese, fonte, confirmado_em) values"]
    valores = []
    sem_ponto = []
    for chave, r in sorted(registros.items()):
        pid = uuid.uuid5(ESPACO, chave)
        partes = partes_do_endereco(r["endereco_completo"]) if r["endereco_completo"] else {"endereco": "", "bairro": "", "cidade": "Natal", "cep": ""}
        consulta = f"{partes['endereco']}, {partes['bairro']}, {partes['cidade']}, RN" if r["endereco_completo"] else f"{r['nome'].split(' (')[0]}, Natal, RN"
        ponto = geocodificar(consulta, cache)
        if not ponto and r["endereco_completo"]:
            ponto = geocodificar(f"{sem_abreviacao(partes['endereco'])}, {partes['bairro']}, {partes['cidade']}, RN", cache)
        if not ponto and r["endereco_completo"]:
            ponto = geocodificar(f"{sem_abreviacao(partes['endereco'])}, {partes['cidade']}, RN", cache)
        if not ponto:
            nome_curto = r["nome"].split(" (")[0]
            for tentativa in [NOMES_NO_MAPA.get(nome_curto, ""), nome_curto.replace("Paróquia de ", "Igreja de ").replace("Paróquia da ", "Igreja da ").replace("Paróquia do ", "Igreja do "), nome_curto.replace("Paróquia de ", "")]:
                if tentativa and not ponto:
                    ponto = geocodificar(f"{tentativa}, Natal, RN", cache, exigir_igreja=nome_curto.replace("Paróquia ", ""))
        if not ponto:
            sem_ponto.append(r["nome"])
        datas = [h["verificado"] for h in horarios if h["chave"] == chave and h["verificado"]]
        valores.append(
            "  (" + ", ".join(sql(v) for v in [str(pid), r["nome"][:160], r["tipo"], partes["endereco"][:240], partes["bairro"][:120], partes["cidade"], "RN", partes["cep"], ponto[0] if ponto else None, ponto[1] if ponto else None, r["telefone"], r["whatsapp"], r["instagram"], r["email"], "Arquidiocese de Natal", FONTE, max(datas) if datas else None]) + ")"
        )
        r["id"] = str(pid)
    saida.append(",\n".join(valores))
    saida.append("on conflict (id) do nothing;\n")
    saida.append("insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, hora_fim, observacao) values")
    vistos = set()
    linhas_h = []
    for h in horarios:
        hid = uuid.uuid5(ESPACO, f"{h['chave']}|{h['tipo']}|{h['dia']}|{h['hora']}|{h['semanas']}|{h['obs']}")
        if hid in vistos:
            continue
        vistos.add(hid)
        linhas_h.append("  (" + ", ".join(sql(v) for v in [str(hid), registros[h["chave"]]["id"], h["tipo"], h["dia"], h["semanas"], h["hora"], h["fim"], h["obs"]]) + ")")
    saida.append(",\n".join(linhas_h))
    saida.append("on conflict (id) do nothing;\n")

    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    SAIDA.write_text("\n".join(saida))
    print(f"{len(registros)} igrejas, {len(linhas_h)} horários; sem coordenadas: {len(sem_ponto)}")
    for n in sem_ponto:
        print("  sem coordenadas:", n)


if __name__ == "__main__":
    sys.exit(principal())
