import json
import re
import subprocess
import time
import urllib.parse
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
PESQUISA = RAIZ / "fontes/paroquias/pesquisa-arquidiocese-2026-11-11.json"
CARGA = RAIZ / "supabase/migrations/20261113000100_dados_paroquias_natal.sql"
CACHE = RAIZ / "fontes/paroquias/coordenadas.json"
SAIDA = RAIZ / "supabase/migrations/20261114000100_dados_paroquias_pesquisa.sql"
CAMPOS = ["endereco", "bairro", "cep", "cidade", "telefone", "whatsapp", "instagram", "site", "email", "padroeiro"]
VIRAM_CAPELA = ("Igreja Santo Agostinho", "Igreja da Beata Ana Rosa Gattorno")


def sql(v):
    return "null" if v is None else "'" + str(v).replace("'", "''") + "'"


def limpo(campo, v):
    v = (v or "").strip()
    if campo in ("telefone", "whatsapp", "cep"):
        v = re.sub(r"\D", "", v)
        if campo in ("telefone", "whatsapp") and v.startswith("55") and len(v) > 11:
            v = v[2:]
        if campo == "cep" and len(v) != 8:
            return ""
        if campo != "cep" and not re.fullmatch(r"\d{10,11}", v):
            return ""
    if campo == "instagram":
        v = v.lstrip("@").split("/")[-1]
        if not re.fullmatch(r"[A-Za-z0-9._]{1,30}", v):
            return ""
    limites = {"endereco": 240, "bairro": 120, "cidade": 120, "site": 200, "email": 160, "padroeiro": 160}
    return v[: limites.get(campo, 240)]


def carga_original():
    s = CARGA.read_text(encoding="utf-8").split("on conflict (id) do nothing;")[0]
    cols = ["id", "nome", "tipo", "endereco", "bairro", "cidade", "uf", "cep", "lat", "lng", "telefone", "whatsapp", "instagram", "email", "diocese", "fonte", "confirmado_em"]
    r = {}
    for l in s.split("\n"):
        if l.startswith("  ("):
            vals = re.findall(r"'((?:[^']|'')*)'|(null|-?\d+\.?\d*)", l.strip().rstrip(",")[1:-1])
            d = dict(zip(cols, [(a.replace("''", "'") if a or b == "" else (None if b == "null" else b)) for a, b in vals]))
            r[d["id"]] = d
    return r


def geocodificar(consulta, cache):
    if consulta in cache:
        return cache[consulta]
    url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=" + urllib.parse.quote(consulta)
    saida = subprocess.run(["curl", "-sS", "--max-time", "25", "-A", "SantinhoApp/0.1 (importacao unica de paroquias)", url], capture_output=True, text=True).stdout
    time.sleep(1.1)
    try:
        r = json.loads(saida)
    except json.JSONDecodeError:
        return None
    ponto = [round(float(r[0]["lat"]), 6), round(float(r[0]["lon"]), 6)] if r else None
    if ponto and not (-7.0 < ponto[0] < -4.8 and -38.7 < ponto[1] < -34.9):
        ponto = None
    if ponto:
        cache[consulta] = ponto
    return ponto


def sem_abreviacao(t):
    for a, b in [(r"\bAv\.", "Avenida"), (r"\bR\.", "Rua"), (r",?\s*\b[Ss]/[Nn]\b", ""), (r",?\s*n?º?\s*\d+\b", "")]:
        t = re.sub(a, b, t)
    return re.sub(r"\s+", " ", t).strip(" ,")


def principal():
    pesquisa = json.loads(PESQUISA.read_text(encoding="utf-8"))
    antes = carga_original()
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}
    saida = []
    sem_ponto = []
    for p in pesquisa:
        pid = p["id"]
        a = antes[pid]
        novos = {c: limpo(c, p.get(c)) for c in CAMPOS}
        alta = p.get("confianca") == "alta"
        sets = []
        for c, v in novos.items():
            if not v:
                continue
            if alta:
                sets.append(f"{c} = {sql(v)}")
            else:
                sets.append(f"{c} = case when {c} = '' then {sql(v)} else {c} end")
        if any(p["nome"].startswith(x) for x in VIRAM_CAPELA):
            sets.append("tipo = 'capela'")
        final = {c: (novos[c] if novos[c] and (alta or not (a.get(c) or "")) else (a.get(c) or "")) for c in ["endereco", "bairro", "cep", "cidade"]}
        mudou = any(final[c] != (a.get(c) or "") for c in final)
        if mudou or a.get("lat") is None:
            ponto = None
            if final["endereco"]:
                for consulta in [f"{final['endereco']}, {final['bairro']}, {final['cidade']}, RN", f"{sem_abreviacao(final['endereco'])}, {final['bairro']}, {final['cidade']}, RN", f"{sem_abreviacao(final['endereco'])}, {final['cidade']}, RN"]:
                    ponto = ponto or geocodificar(consulta, cache)
            if not ponto and final["cep"]:
                ponto = geocodificar(f"{final['cep'][:5]}-{final['cep'][5:]}, {final['cidade']}, RN", cache)
            if ponto:
                sets.append(f"lat = {ponto[0]}, lng = {ponto[1]}")
            elif final["cidade"] != (a.get("cidade") or ""):
                sets.append("lat = null, lng = null")
                sem_ponto.append(p["nome"])
            elif a.get("lat") is None:
                sem_ponto.append(p["nome"])
        if sets:
            saida.append(f"update public.paroquias set {', '.join(sets)}\n  where id = {sql(pid)} and conferida_em is null;")
        fontes = "{" + ",".join('"' + f.replace('"', "") + '"' for f in p.get("fontes", [])) + "}"
        saida.append(
            "insert into public.notas_paroquia (paroquia_id, texto, fontes, confianca) values "
            f"({sql(pid)}, {sql((p.get('observacao') or '')[:4000])}, {sql(fontes)}, {sql(p.get('confianca') or '')}) on conflict (paroquia_id) do nothing;"
        )
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    SAIDA.write_text("\n".join(saida) + "\n", encoding="utf-8")
    print(f"{len(pesquisa)} igrejas; sem coordenadas: {len(sem_ponto)}")
    for n in sem_ponto:
        print("  sem coordenadas:", n)


if __name__ == "__main__":
    principal()
