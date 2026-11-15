import json, glob, sys, time, urllib.parse, urllib.request

UA = "MinhaIgrejinhaImagens/1.1 (minhaigrejinha@gmail.com) python-urllib"
recusadas = set(open(sys.argv[2]).read().split()) if len(sys.argv) > 2 else set()
qids = {}
for f in sorted(glob.glob("fontes/santos/fichas/*.json")):
    d = json.load(open(f))
    if d.get("imagem") or not d.get("qid"):
        continue
    if d.get("foto_commons") and d["id"] not in recusadas:
        continue
    qids[d["qid"]] = d["id"]

alvos = {}
lista = list(qids)
for i in range(0, len(lista), 50):
    q = urllib.parse.urlencode({"action": "wbgetentities", "ids": "|".join(lista[i:i + 50]), "props": "claims", "format": "json"})
    for n in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request("https://www.wikidata.org/w/api.php?" + q, headers={"User-Agent": UA}), timeout=60) as r:
                dados = json.load(r)
            break
        except Exception:
            time.sleep(20 * (n + 1))
    else:
        continue
    for qid, ent in dados.get("entities", {}).items():
        for prop in ("P18", "P1442", "P94"):
            c = (ent.get("claims") or {}).get(prop) or []
            if c and c[0].get("mainsnak", {}).get("datavalue"):
                arquivo = c[0]["mainsnak"]["datavalue"]["value"]
                if prop != "P18":
                    break
                alvos["File:" + arquivo] = qids[qid]
                break
    time.sleep(1)
json.dump(alvos, open(sys.argv[1], "w"), ensure_ascii=False, indent=1)
print(len(qids), "com qid;", len(alvos), "com retrato no Wikidata")
