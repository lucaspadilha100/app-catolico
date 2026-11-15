import json, glob, os, re, sys, time, html, io, urllib.parse, urllib.request
from PIL import Image

UA = "MinhaIgrejinhaImagens/1.1 (minhaigrejinha@gmail.com) python-urllib"
API = "https://commons.wikimedia.org/w/api.php"
SAIDA = sys.argv[1]
os.makedirs(SAIDA + "/fotos", exist_ok=True)

RECUSAS = 0

def pedir(url, tentativas=4):
    global RECUSAS
    for n in range(tentativas):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60) as r:
                RECUSAS = 0
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                RECUSAS += 1
                espera = int(e.headers.get("Retry-After") or 0) or 20 * (n + 1)
                print(f"  {e.code}: espera {min(espera, 120)} s", flush=True)
                time.sleep(min(espera, 120))
                continue
            raise
        except Exception:
            time.sleep(5 * (n + 1))
    raise RuntimeError("falhou: " + url)

def limpo(t):
    t = re.sub(r"<[^>]+>", "", html.unescape(t or ""))
    return re.sub(r"\s+", " ", t).strip()[:200]

alvos = {}
if os.environ.get("ALVOS"):
    alvos = json.load(open(os.environ["ALVOS"]))
for f in ([] if alvos else sorted(glob.glob("fontes/santos/fichas/*.json"))):
    d = json.load(open(f))
    arq = d.get("foto_commons")
    if arq and not d.get("imagem"):
        alvos["File:" + arq.split(":", 1)[-1]] = d["id"]

creditos, falhas = {}, []
INICIO = int(os.environ.get("INICIO", "0"))
FIM = int(os.environ.get("FIM", "100000"))
titulos = list(alvos)[INICIO:FIM]
LIMITE = time.time() + int(os.environ.get("MINUTOS", "270")) * 60

def gravar():
    json.dump(creditos, open(SAIDA + "/creditos.json", "w"), ensure_ascii=False, indent=1)
    json.dump(falhas, open(SAIDA + "/falhas.json", "w"), ensure_ascii=False, indent=1)

for i in range(0, len(titulos), 40):
    if time.time() > LIMITE:
        print(f"tempo esgotado: parou em {INICIO + i}", flush=True)
        break
    lote = titulos[i:i + 40]
    q = urllib.parse.urlencode({"action": "query", "format": "json", "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": "960", "titles": "|".join(lote), "redirects": "1"})
    dados = json.loads(pedir(API + "?" + q))
    normal = {x["to"]: x["from"] for x in dados["query"].get("normalized", [])}
    redir = {x["to"]: x["from"] for x in dados["query"].get("redirects", [])}
    time.sleep(1)
    for p in dados["query"]["pages"].values():
        titulo = p.get("title", "")
        original = redir.get(titulo, titulo)
        original = normal.get(original, original)
        sid = alvos.get(original) or alvos.get(titulo)
        if not sid:
            continue
        ii = (p.get("imageinfo") or [None])[0]
        if not ii:
            falhas.append([sid, titulo, "sem imageinfo"])
            continue
        meta = ii.get("extmetadata") or {}
        licenca = limpo((meta.get("LicenseShortName") or {}).get("value"))
        if not licenca or not re.search(r"CC0|CC BY|Public domain|domínio público|PD", licenca, re.I):
            falhas.append([sid, titulo, "licença: " + licenca])
            continue
        try:
            bruto = pedir(ii.get("thumburl") or ii["url"])
            time.sleep(1)
            img = Image.open(io.BytesIO(bruto))
            img.seek(0)
            img = img.convert("RGB")
            img.thumbnail((600, 800))
            img.save(f"{SAIDA}/fotos/{sid}.webp", "WEBP", quality=72)
        except Exception as e:
            falhas.append([sid, titulo, str(e)[:100]])
            continue
        creditos[sid] = {
            "arquivo": f"{sid}.webp",
            "obra": limpo((meta.get("ObjectName") or {}).get("value")) or titulo.split(":", 1)[-1].rsplit(".", 1)[0],
            "autor": limpo((meta.get("Artist") or {}).get("value")) or "Desconhecido",
            "licenca": licenca,
            "url": ii.get("descriptionurl", ""),
        }
    gravar()
    print(f"{INICIO + min(i + 40, len(titulos))}: {len(creditos)} fotos, {len(falhas)} falhas", flush=True)

gravar()
