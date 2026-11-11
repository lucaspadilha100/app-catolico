import json
import re
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
PESQUISA = RAIZ / "fontes/paroquias/pesquisa-rn-2026-11"
BANCO = PESQUISA / "banco-rn-2026-11-12.json"
CARGAS = sorted((RAIZ / "supabase/migrations").glob("*_dados_*.sql"))
MATRIZES = {"paroquia", "quase_paroquia", "area_pastoral", "area_missionaria", "catedral", "basilica", "santuario"}


def sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t or "") if unicodedata.category(c) != "Mn").lower()


LIGA = {"de", "da", "do", "das", "dos", "e"}


def base(nome):
    palavras = re.sub(r"[^a-z0-9 ]", " ", sem_acento(nome)).replace("quase paroquia", "quaseparoquia").split()
    return " ".join(w for w in palavras if w not in LIGA)


GENERICO = {"paroquia", "catedral", "santuario", "igreja", "matriz", "basilica"}


def nucleo(nome):
    return " ".join(w for w in base(re.sub(r"\(.*?\)", "", nome)).split() if w not in GENERICO)


def tipo_pelo_nome(nome, tipo):
    n = sem_acento(nome)
    if n.startswith("area missionaria"):
        return "area_missionaria"
    if n.startswith("area pastoral"):
        return "area_pastoral"
    if n.startswith("quase-paroquia") or n.startswith("quase paroquia"):
        return "quase_paroquia"
    return tipo


def ordem_das_cargas():
    ordem = []
    for arq in CARGAS:
        for m in re.finditer(r"^  \('([0-9a-f-]{36})', '((?:[^']|'')*)'", arq.read_text(encoding="utf-8"), re.M):
            ordem.append(m.group(1))
    return ordem


def parenteses(nome):
    partes, resto, nivel, atual = [], "", 0, ""
    for c in nome:
        if c == "(":
            if nivel:
                atual += c
            nivel += 1
        elif c == ")" and nivel:
            nivel -= 1
            if nivel:
                atual += c
            else:
                partes.append(atual.strip())
                atual = ""
        elif nivel:
            atual += c
        else:
            resto += c
    return " ".join(resto.split()), partes


def eh_filha(p, tipo):
    if tipo not in MATRIZES:
        return True
    _, partes = parenteses(p["nome"])
    return tipo == "santuario" and any(re.match(r"(par[oó]quia|catedral|[áa]rea|quase)", x, re.I) for x in partes)


def organizar(banco):
    for p in banco:
        if p["diocese"] == "Natal":
            p["diocese"] = "Arquidiocese de Natal"
            p["_diocese_corrigida"] = True
    por_id = {p["id"]: p for p in banco}
    ordem = [i for i in ordem_das_cargas() if i in por_id]
    ordem += [p["id"] for p in banco if p["id"] not in set(ordem)]
    mudancas = {}
    for p in banco:
        novo = tipo_pelo_nome(p["nome"], p["tipo"])
        if novo != p["tipo"]:
            mudancas.setdefault(p["id"], {})["tipo"] = novo
    tipo = lambda p: mudancas.get(p["id"], {}).get("tipo", p["tipo"])
    ultima = {}
    for i in ordem:
        p = por_id[i]
        if not eh_filha(p, tipo(p)):
            ultima[(p["diocese"], base(p["nome"]))] = p
            continue
        resto, partes = parenteses(p["nome"])
        if not partes:
            continue
        mae = None
        for parte in reversed(partes):
            candidatos = [x for x in banco if x["diocese"] == p["diocese"] and not eh_filha(x, tipo(x)) and base(x["nome"]) == base(parte)]
            mesma_cidade = [x for x in candidatos if x["cidade"] == p["cidade"]]
            alvo = mesma_cidade[0] if len(mesma_cidade) == 1 else ultima.get((p["diocese"], base(parte)))
            if not alvo and len(candidatos) == 1:
                alvo = candidatos[0]
            if not alvo:
                parecidos = [x for x in banco if x["diocese"] == p["diocese"] and x["cidade"] == p["cidade"] and not eh_filha(x, tipo(x)) and nucleo(x["nome"]) == nucleo(parte)]
                alvo = parecidos[0] if len(parecidos) == 1 else None
            if alvo:
                mae = (parte, alvo)
                break
        if not mae:
            if len(partes) == 1 and not re.match(r"(par[oó]quia|catedral|[áa]rea|quase)", partes[0], re.I):
                if not p["bairro"]:
                    mudancas.setdefault(i, {}).update({"nome": resto, "bairro": partes[0][:120]})
                elif sem_acento(partes[0]) == sem_acento(p["bairro"]):
                    mudancas.setdefault(i, {})["nome"] = resto
            continue
        m = mudancas.setdefault(i, {})
        m["matriz_id"] = mae[1]["id"]
        lugar = [x for x in partes if x != mae[0]]
        m["nome"] = resto
        if lugar and (not p["bairro"] or sem_acento(lugar[0]) == sem_acento(p["bairro"])):
            m["bairro"] = lugar[0][:120]
        elif lugar:
            m["nome"] = f"{resto} ({lugar[0]})"
    for p in banco:
        if p.pop("_diocese_corrigida", False):
            mudancas.setdefault(p["id"], {})["diocese"] = p["diocese"]
    return mudancas


if __name__ == "__main__":
    banco = json.loads(BANCO.read_text(encoding="utf-8"))
    m = organizar(banco)
    com_matriz = sum(1 for x in m.values() if "matriz_id" in x)
    print("mudancas", len(m), "com matriz", com_matriz, "tipos", sum(1 for x in m.values() if "tipo" in x))
    sobra = [p["nome"] for p in banco if "(" in p["nome"] and "nome" not in m.get(p["id"], {})]
    print("ainda com parenteses", len(sobra))
    for s in sobra[:25]:
        print("  ", s)


import uuid

ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
SAIDA = RAIZ / "supabase/migrations/20261208000100_dados_rn_organizacao_e_horarios.sql"
CATEGORIA = {"paroquia": "paroquia", "quase_paroquia": "quase_paroquia", "area_pastoral": "area_pastoral", "area_missionaria": "area_missionaria", "catedral": "catedral", "santuario": "santuario", "basilica": "basilica"}
TIPO_DA_IGREJA = {"capela": "capela", "comunidade": "comunidade", "santuario": "santuario"}
DIAS = {"domingo": 0, "segunda": 1, "terca": 2, "terça": 2, "quarta": 3, "quinta": 4, "sexta": 5, "sabado": 6, "sábado": 6}
DESATIVAR = {"0e9fad75-1eb2-5ebe-935a-3509392db133", "141b41b5-36d8-5228-af22-ea109ee76d95", "44d86254-fc28-570f-8b0e-69fb2192935c", "f0c1b0ae-fabf-5cd0-9c97-83e90a3570db"}


def q(v):
    if v is None:
        return "null"
    return "'" + str(v).replace("'", "''") + "'"


def so_digitos(v):
    v = re.sub(r"\D", "", v or "")
    if v.startswith("55") and len(v) > 11:
        v = v[2:]
    return v if re.fullmatch(r"\d{10,11}", v) else ""


def instagram(v):
    v = (v or "").strip().lstrip("@").rstrip("/").split("/")[-1].split("?")[0]
    return v if re.fullmatch(r"[A-Za-z0-9._]{1,30}", v) else ""


def fonte_curta(fontes):
    for f in fontes or []:
        u = f.get("url", "")
        if u and len(u) <= 120:
            return u
    for f in fontes or []:
        u = f.get("url", "")
        if u:
            return re.sub(r"^https?://(www\.)?", "", u).split("/")[0][:120]
    return ""


def ultimos_do_mes(texto):
    r = []
    for m in re.finditer(r"[úu]ltim[oa]s?\s+(domingo|segunda|ter[çc]a|quarta|quinta|sexta|s[áa]bado)[^.;,]*?(?:do m[eê]s)?[^.;0-9]*?(\d{1,2})\s*h\s*(\d{2})?", texto or "", re.I):
        dia = DIAS.get(sem_acento(m.group(1)).replace("terca", "terça") if False else sem_acento(m.group(1)))
        if dia is None:
            continue
        resto = texto[m.end():m.end() + 60]
        obs = re.match(r"\s*\(([^)]{3,50})\)", resto) or re.match(r"[:,]\s*(missa[^.;()]{3,50})", resto, re.I)
        r.append({"tipo": "missa", "dia_semana": dia, "hora": f"{int(m.group(2)):02d}:{m.group(3) or '00'}", "semanas": [6], "observacao": obs.group(1).strip().capitalize() if obs else ""})
    return r


def horarios_validos(lista):
    vistos, r = set(), []
    for h in lista:
        if h.get("tipo", "missa") not in ("missa", "confissao", "adoracao"):
            continue
        d = h.get("dia_semana")
        hora = (h.get("hora") or "")[:5]
        if not isinstance(d, int) or not 0 <= d <= 6 or not re.fullmatch(r"([01]\d|2[0-3]):[0-5]\d", hora):
            continue
        semanas = sorted({int(s) for s in (h.get("semanas") or []) if int(s) in (1, 2, 3, 4, 5, 6)}) or None
        chave = (h.get("tipo", "missa"), d, hora, tuple(semanas or ()))
        if chave in vistos or (semanas == [6] and (h.get("tipo", "missa"), d, hora, ()) in vistos):
            continue
        vistos.add(chave)
        obs = re.sub(r"\s*[—–]\s*", ", ", (h.get("observacao") or "").strip())[:120]
        r.append({"tipo": h.get("tipo", "missa"), "dia_semana": d, "hora": hora, "semanas": semanas, "observacao": obs})
    return r


def carregar_saidas():
    unidades = []
    for arq in sorted((PESQUISA / "saida").glob("*.json")):
        for u in json.loads(arq.read_text(encoding="utf-8")):
            u["_lote"] = arq.stem
            unidades.append(u)
    return unidades


def gerar():
    banco = json.loads(BANCO.read_text(encoding="utf-8"))
    por_id = {p["id"]: p for p in banco}
    mudancas = organizar(banco)
    novas, horarios, relatorio = [], {}, {"unidades": 0, "com_domingo": 0, "igrejas_com_horario": 0, "novas": 0, "trocou_horario": 0, "sem_horario": []}
    for u in carregar_saidas():
        relatorio["unidades"] += 1
        oficial = u["_lote"].startswith("arq")
        mid = u.get("id_banco") if u.get("id_banco") in por_id else None
        if not mid:
            continue
        p = por_id[mid]
        m = mudancas.setdefault(mid, {})
        nome = re.sub(r"\s*[—–-]\s*(Lajes|.*RN.*)$", "", (u.get("nome") or "").strip())
        if 3 <= len(nome) <= 160 and (oficial or not m.get("nome")):
            m["nome"] = nome
        cat = CATEGORIA.get(u.get("categoria"))
        if cat:
            m["tipo"] = cat
        if u.get("padroeiro") and not p["padroeiro"]:
            m["padroeiro"] = u["padroeiro"][:160]
        c = u.get("contatos") or {}
        for campo, valor in (("telefone", so_digitos(c.get("telefone"))), ("whatsapp", so_digitos(c.get("whatsapp"))), ("instagram", instagram(c.get("instagram"))), ("email", (c.get("email") or "").strip()[:160]), ("site", (c.get("site") or "").strip()[:200])):
            if valor and (oficial or u.get("confianca") == "alta" or not p[campo]):
                m[campo] = valor
        fonte = fonte_curta(u.get("fontes"))
        if fonte and any(i.get("horarios") for i in u.get("igrejas", [])):
            m["fonte"] = fonte
        domingo = False
        for i, ig in enumerate(u.get("igrejas", [])):
            hs = horarios_validos((ig.get("horarios") or []) + ultimos_do_mes(ig.get("nao_cabe")))
            iid = ig.get("id_banco") if ig.get("id_banco") in por_id else None
            ehmatriz = i == 0 or ig.get("tipo") == "matriz"
            if u.get("confianca") == "baixa" and not any("diocesecaico.com/horario-das-missas" in (f.get("url") or "") for f in u.get("fontes") or []):
                hs = []
            if not iid and not ehmatriz:
                cidade_ig = ig.get("cidade") or p["cidade"]
                if not hs or any(x["cidade"] == cidade_ig and nucleo(x["nome"]) == nucleo(ig.get("nome") or "") for x in banco):
                    continue
                iid = str(uuid.uuid5(ESPACO, f"rn-2026-11|{mid}|{sem_acento(ig.get('nome'))}|{sem_acento(ig.get('localidade'))}"))
                novas.append({"id": iid, "nome": (ig.get("nome") or "Capela")[:160], "tipo": TIPO_DA_IGREJA.get(ig.get("tipo"), "capela"), "diocese": p["diocese"], "endereco": (ig.get("endereco") or "")[:240], "bairro": (ig.get("localidade") or "")[:120], "cidade": (ig.get("cidade") or p["cidade"])[:120], "matriz_id": mid, "fonte": fonte})
                relatorio["novas"] += 1
            elif not iid:
                iid = mid
            if iid != mid:
                mi = mudancas.setdefault(iid, {})
                mi["matriz_id"] = mid
                if oficial and ig.get("nome") and "(" not in ig["nome"] and iid in por_id:
                    mi["nome"] = ig["nome"][:160]
                if ig.get("localidade") and iid in por_id and not por_id[iid]["bairro"]:
                    mi["bairro"] = ig["localidade"][:120]
            if hs:
                if iid in por_id and por_id[iid]["horarios_atuais"]:
                    relatorio["trocou_horario"] += 1
                horarios[iid] = hs
                relatorio["igrejas_com_horario"] += 1
                if iid == mid and any(h["dia_semana"] == 0 and h["tipo"] == "missa" for h in hs):
                    domingo = True
        if domingo:
            relatorio["com_domingo"] += 1
        else:
            relatorio["sem_horario"].append(f"{nome} ({u.get('cidade')})")
    for p in banco:
        if p["id"] in DESATIVAR:
            mudancas.setdefault(p["id"], {})["ativa"] = False
    linhas = ["alter table public.paroquias disable trigger trg_paroquia_protege;"]
    for pid, m in sorted(mudancas.items()):
        if pid not in por_id or not m:
            continue
        sets = ", ".join(f"{k} = " + ("false" if v is False else f"(select x.id from public.paroquias x where x.id = '{v}')" if k == "matriz_id" else q(v)) for k, v in sorted(m.items()))
        linhas.append(f"update public.paroquias set {sets} where id = '{pid}' and not verificada and conferida_em is null;")
    linhas.append("alter table public.paroquias enable trigger trg_paroquia_protege;")
    if novas:
        linhas.append("insert into public.paroquias (id, nome, tipo, diocese, endereco, bairro, cidade, uf, matriz_id, fonte) values")
        linhas.append(",\n".join(f"  ('{n['id']}', {q(n['nome'])}, '{n['tipo']}', {q(n['diocese'])}, {q(n['endereco'])}, {q(n['bairro'])}, {q(n['cidade'])}, 'RN', (select x.id from public.paroquias x where x.id = '{n['matriz_id']}'), {q(n['fonte'])})" for n in novas))
        linhas.append("on conflict (id) do nothing;")
    ids = sorted(horarios)
    pares = sorted({(i, h["tipo"]) for i in ids for h in horarios[i]})
    linhas.append("delete from public.horarios h using public.paroquias p where p.id = h.paroquia_id and not p.verificada and p.conferida_em is null and h.data is null and (h.paroquia_id, h.tipo) in (values")
    linhas.append(",\n".join(f"  ('{i}'::uuid, '{t}')" for i, t in pares) + "\n);")
    valores = []
    for pid in ids:
        for h in horarios[pid]:
            hid = uuid.uuid5(ESPACO, f"horario|{pid}|{h['tipo']}|{h['dia_semana']}|{h['hora']}|{h['semanas']}")
            sem = "null" if not h["semanas"] else "'{" + ",".join(map(str, h["semanas"])) + "}'"
            valores.append(f"  ('{hid}'::uuid, '{pid}'::uuid, '{h['tipo']}', {h['dia_semana']}, {sem}::smallint[], '{h['hora']}'::time, {q(h['observacao'])})")
    linhas.append("insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)\nselect v.* from (values")
    linhas.append(",\n".join(valores))
    linhas.append(") as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)\njoin public.paroquias p on p.id = v.paroquia_id and not p.verificada and p.conferida_em is null\non conflict (id) do nothing;")
    SAIDA.write_text("\n".join(linhas) + "\n", encoding="utf-8")
    relatorio["horarios"] = len(valores)
    return relatorio


if __name__ == "__main__" and "gerar" in __import__("sys").argv:
    r = gerar()
    print(json.dumps({k: (v if k != "sem_horario" else len(v)) for k, v in r.items()}, ensure_ascii=False))
