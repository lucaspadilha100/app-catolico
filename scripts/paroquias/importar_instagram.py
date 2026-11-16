"""Carrega os horários achados no Instagram (planilha preenchida no navegador).

Uso: python3 -I scripts/paroquias/importar_instagram.py <planilha.csv> <timestamp inicial>

Colunas: UF, Cidade, Paróquia, Instagram, Igreja, Endereço, Missas, Confissão,
Adoração, Contato, Fonte, Data do post, Observação. Uma linha por igreja.
Só preenche paróquia que ainda não tem nenhum horário na pesquisa; igreja que
não está na pesquisa (capela nova) fica de fora e vai para o relatório.
Grava os JSON da pesquisa e gera uma migração só de horários por estado
(carregar_estado.py --so-horarios), conferindo que cada id já existe no banco.
"""
import csv
import json
import re
import subprocess
import sys
import unicodedata
import uuid
from collections import defaultdict
from datetime import date
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
ESPACO = uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")


def chave(*partes):
    base = "|".join(unicodedata.normalize("NFC", str(p or "").strip().lower()) for p in partes)
    return str(uuid.uuid5(ESPACO, base))

DIA = {"dom": 0, "seg": 1, "ter": 2, "qua": 3, "qui": 4, "sex": 5, "sab": 6}
ORDEM = {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5}
NAO_MISSA = re.compile(r"palavra|terço|terco|grupo de oração|novena sem", re.I)


def sem_acento(s):
    return "".join(c for c in unicodedata.normalize("NFD", s or "") if not unicodedata.combining(c)).lower()


def dias(texto):
    t = sem_acento(texto).replace("-feira", "").replace("feira", "").strip()
    m = re.fullmatch(r"(\d)\s*[ºoª]?\s*(?:e\s*(\d)\s*[ºoª]?\s*)?(seg|ter|qua|qui|sex|sab|dom)\w*(?:\s+do\s+mes)?", t)
    if m:
        semanas = sorted({ORDEM[m.group(1)], *([ORDEM[m.group(2)]] if m.group(2) else [])})
        return [(DIA[m.group(3)], semanas)]
    saida = []
    for parte in re.split(r",|\se\s", t):
        parte = parte.strip()
        if not parte:
            continue
        r = re.fullmatch(r"(seg|ter|qua|qui|sex|sab|dom)\w*\s+a\s+(seg|ter|qua|qui|sex|sab|dom)\w*", parte)
        if r:
            a, b = DIA[r.group(1)], DIA[r.group(2)]
            saida += [((a + k) % 7, None) for k in range((b - a) % 7 + 1)]
            continue
        s = re.fullmatch(r"(seg|ter|qua|qui|sex|sab|dom)\w*", parte)
        if not s:
            raise ValueError(f"dia: {texto}")
        saida.append((DIA[s.group(1)], None))
    return saida


HORA = re.compile(r"(\d{1,2})\s*h\s*(\d{2})?(?:\s*(?:às|as|a)\s*(\d{1,2})\s*h\s*(\d{2})?)?\s*(?:\(([^)]*)\))?", re.I)


def horas(texto, tipo):
    saida = []
    for m in HORA.finditer(texto):
        obs = (m.group(5) or "").strip()
        if tipo == "missa" and NAO_MISSA.search(obs):
            continue
        if m.group(3):
            fim = f"Até {int(m.group(3))}h{m.group(4) or ''}"
            obs = f"{fim}, {obs[0].lower() + obs[1:]}" if obs else fim
        obs = obs.replace("—", ",").replace("–", ",")
        if len(obs) > 60:
            obs = obs[:57].rstrip(" ,;") + "..."
        h = int(m.group(1))
        if h > 23:
            continue
        saida.append((f"{h:02d}:{m.group(2) or '00'}", obs[:1].upper() + obs[1:]))
    return saida


def ler_horarios(texto, tipo, avisos, rotulo):
    lista = []
    for seg in (texto or "").split("|"):
        seg = seg.strip()
        if not seg:
            continue
        if ":" not in seg:
            avisos.append(f"fora do formato ({tipo}) em {rotulo}: {seg}")
            continue
        quando, quais = seg.split(":", 1)
        try:
            ds = dias(quando)
        except ValueError:
            avisos.append(f"dia não entendido ({tipo}) em {rotulo}: {seg}")
            continue
        hs = horas(quais, tipo)
        if not hs:
            avisos.append(f"sem hora ({tipo}) em {rotulo}: {seg}")
            continue
        for d, semanas in ds:
            for h, obs in hs:
                lista.append({"tipo": tipo, "dia_semana": d, "hora": h, "semanas": semanas, "observacao": obs})
    vistos, unicos = set(), []
    for h in lista:
        k = (h["tipo"], h["dia_semana"], h["hora"], str(h["semanas"]))
        if k not in vistos:
            vistos.add(k)
            unicos.append(h)
    return unicos


def data_ok(texto, fonte):
    if "bio" in (fonte or "").lower() and not texto.strip():
        return True
    anos = [int(a) for a in re.findall(r"\b(20\d\d)\b", texto or "")]
    return bool(anos) and min(anos) >= 2025


def igreja_da_linha(u, rotulo):
    igrejas = u.get("igrejas") or []
    r = sem_acento(rotulo)
    if not r or r.startswith("matriz") or not igrejas:
        return 0 if igrejas else None
    alvo = re.sub(r"^(capela|comunidade|igreja)\s+(de\s+|da\s+|do\s+)?", "", r.split(",")[0].split("(")[0]).strip()
    for n, ig in enumerate(igrejas):
        nome = re.sub(r"^(capela|comunidade|igreja)\s+(de\s+|da\s+|do\s+)?", "", sem_acento(ig.get("nome")))
        if n and alvo and (alvo == nome or (len(alvo) > 8 and (alvo in nome or nome in alvo))):
            return n
    if sem_acento(igrejas[0].get("nome")).find(alvo) >= 0 and alvo:
        return 0
    return None


def dioceses_do_estado(uf, pasta, ids_no_banco, nomes_de_diocese):
    mapa = []
    for arquivo in sorted((pasta / "saida").glob("*.json")):
        unidades = [u for u in json.loads(arquivo.read_text()) if (u.get("cidade") or "").strip()]
        if not unidades:
            continue
        achou = None
        for diocese in nomes_de_diocese:
            u = unidades[0]
            igs = u.get("igrejas") or [{"nome": u.get("nome", ""), "cidade": u.get("cidade", "")}]
            pid = chave(uf, diocese, u.get("nome"), igs[0].get("cidade") or u.get("cidade", ""), igs[0].get("nome"), "0")
            if pid in ids_no_banco:
                achou = diocese
                break
        if not achou:
            raise SystemExit(f"{uf}: não achei a diocese de {arquivo.name}")
        mapa.append(f"{achou}={arquivo.name}")
    return mapa


def main():
    planilha, ts = Path(sys.argv[1]), int(sys.argv[2])
    linhas = list(csv.reader(open(planilha, encoding="utf-8-sig")))[1:]
    grupos = defaultdict(list)
    for x in linhas:
        x += [""] * (13 - len(x))
        if any(c.strip() for c in x[6:9]):
            grupos[(x[0].strip().upper(), x[1].strip(), x[2].strip())].append(x)
    avisos, feitos, capelas_novas = [], defaultdict(int), []
    arquivos = {}
    for (uf, cidade, paroquia), rows in sorted(grupos.items()):
        pasta = RAIZ / f"fontes/paroquias/pesquisa-{uf.lower()}-2026-11"
        achados = []
        for arquivo in sorted((pasta / "saida").glob("*.json")):
            if arquivo not in arquivos:
                arquivos[arquivo] = json.loads(arquivo.read_text())
            for u in arquivos[arquivo]:
                if u.get("nome", "").strip() == paroquia and (u.get("cidade") or "").strip() == cidade:
                    achados.append((arquivo, u))
        rotulo = f"{paroquia} ({cidade}/{uf})"
        if len(achados) != 1:
            avisos.append(f"{'não achada' if not achados else 'nome repetido'} na pesquisa: {rotulo}")
            continue
        arquivo, u = achados[0]
        if any(ig.get("horarios") for ig in u.get("igrejas") or []):
            for x in rows:
                if igreja_da_linha(u, x[4]) is None and data_ok(x[11].strip(), x[10].strip()):
                    capelas_novas.append(f"{uf} | {cidade} | {paroquia} | {x[4]} | {x[5]} | {x[6]}")
            continue
        usou = False
        for x in rows:
            fonte, quando = x[10].strip(), x[11].strip()
            if not data_ok(quando, fonte):
                avisos.append(f"post antigo ou sem data, fora: {rotulo} / {x[4]} ({quando})")
                continue
            n = igreja_da_linha(u, x[4])
            if n is None:
                capelas_novas.append(f"{uf} | {cidade} | {paroquia} | {x[4]} | {x[5]} | {x[6]}")
                continue
            hs = []
            for col, tipo in ((6, "missa"), (7, "confissao"), (8, "adoracao")):
                hs += ler_horarios(x[col], tipo, avisos, f"{rotulo} / {x[4]}")
            if not hs:
                continue
            ig = u["igrejas"][n]
            ig["horarios"] = (ig.get("horarios") or []) + hs
            if x[5].strip() and not (ig.get("endereco") or "").strip():
                ig["endereco"] = x[5].strip()[:240]
            if fonte and fonte.lower() != "bio" and not any(f.get("url") == fonte for f in u.get("fontes") or []):
                u.setdefault("fontes", []).append({"url": fonte, "data": "", "o_que": "horarios"})
            elif fonte.lower() == "bio" and x[3].strip():
                u.setdefault("fontes", []).append({"url": x[3].strip(), "data": "", "o_que": "horarios"})
            usou = True
        if usou:
            if u.get("confianca") not in ("alta",):
                u["confianca"] = "media"
            u["observacao"] = ((u.get("observacao") or "").replace(" Sem horário em fonte oficial.", "") + f" Horários do Instagram oficial da paróquia (conferido em {date.today():%d/%m/%Y}).").strip()
            feitos[uf] += 1
    for arquivo, dados in arquivos.items():
        antes = arquivo.read_text()
        if json.loads(antes) == dados:
            continue
        m = re.match(r"\[\n( +)", antes)
        novo = json.dumps(dados, ensure_ascii=False, indent=len(m.group(1)) if m else 1)
        arquivo.write_text(novo + ("\n" if antes.endswith("\n") else ""))

    texto_banco = "\n".join(p.read_text() for p in sorted((RAIZ / "supabase/migrations").glob("*_dados_*.sql")))
    ids_no_banco = set(re.findall(r"'([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'", texto_banco))
    base = subprocess.run(["git", "ls-remote", "origin", "main"], cwd=RAIZ, capture_output=True, text=True).stdout.split()[:1]
    mudados = subprocess.run(["git", "diff", "--name-only", *base, "--", "fontes/paroquias"], cwd=RAIZ, capture_output=True, text=True).stdout.split()
    ufs = set(feitos) | {m.group(1).upper() for f in mudados if (m := re.search(r"pesquisa-([a-z]{2})-2026-11/saida/", f))}
    for uf in sorted(ufs):
        pasta = RAIZ / f"fontes/paroquias/pesquisa-{uf.lower()}-2026-11"
        sqls = [p.read_text() for p in sorted((RAIZ / "supabase/migrations").glob(f"*_dados_{uf.lower()}_*.sql"))]
        nomes = sorted({d for s in sqls for d in re.findall(r"'((?:Arqui)?[Dd]iocese[^']*|Prelazia[^']*|Eparquia[^']*|Ordinariato[^']*|Exarcado[^']*)'", s)})
        mapa = dioceses_do_estado(uf, pasta, ids_no_banco, nomes)
        r = subprocess.run([sys.executable, "-I", str(RAIZ / "scripts/paroquias/carregar_estado.py"), str(pasta), uf, str(ts), "--so-horarios", *mapa], cwd=RAIZ, capture_output=True, text=True)
        print(r.stdout.strip().splitlines()[-1] if r.stdout.strip() else r.stderr)
        destino = RAIZ / f"supabase/migrations/{ts}_dados_{uf.lower()}_horarios.sql"
        if destino.exists():
            linhas_sql = destino.read_text().split("\n")
            valor = re.compile(r"^  \('([0-9a-f-]{36})'::uuid, ")
            novas = [l for l in linhas_sql if not (valor.match(l) and valor.match(l).group(1) in ids_no_banco)]
            vals = [i for i, l in enumerate(novas) if valor.match(l)]
            if not vals:
                destino.unlink()
                print(f"  {uf}: nenhum horário novo, sem migração")
                continue
            for i in vals:
                novas[i] = novas[i].rstrip(",") + ("" if i == vals[-1] else ",")
            destino.write_text("\n".join(novas))
            print(f"  {uf}: {len(vals)} horários novos")
            pids = set(re.findall(r"'[0-9a-f-]{36}'::uuid, '([0-9a-f-]{36})'::uuid", destino.read_text()))
            faltam = pids - ids_no_banco
            if faltam:
                raise SystemExit(f"{destino.name}: {len(faltam)} paróquias que o banco não tem")
        ts += 100
    print("paróquias com horário novo:", dict(feitos), "total", sum(feitos.values()))
    rel = RAIZ / "fontes/paroquias/instagram-relatorio.txt"
    rel.write_text("CAPELAS QUE NÃO ESTÃO NO APP (horários não carregados)\n" + "\n".join(capelas_novas) + "\n\nAVISOS\n" + "\n".join(avisos) + "\n")
    print(f"{len(capelas_novas)} capelas novas, {len(avisos)} avisos em {rel.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()
