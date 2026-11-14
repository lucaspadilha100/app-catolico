import json, sys, time, urllib.request, urllib.parse
OUT = sys.argv[1]
UA = "MinhaIgrejinha/1.0 (app catolico)"
STATUS = {"Q3464126": "santo", "Q18344276": "santo", "Q123110154": "santo", "Q43115": "santo?", "Q2369287": "beato", "Q51619": "veneravel", "Q12774503": "veneravel?", "Q869974": "servo"}
def sparql(q):
    for t in range(6):
        try:
            r = urllib.request.Request("https://query.wikidata.org/sparql", data=urllib.parse.urlencode({"query": q, "format": "json"}).encode(), headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
            return json.loads(urllib.request.urlopen(r, timeout=180).read().decode(), strict=False)["results"]["bindings"]
        except Exception as e:
            sys.stderr.write(f"{e}\n"); time.sleep(15 * (t + 1))
    raise SystemExit("falhou")
v = lambda b, k: b[k]["value"] if k in b else None
ids = {}
for st, rot in STATUS.items():
    for b in sparql(f"SELECT ?p ?quando WHERE {{ ?p p:P411 ?s . ?s ps:P411 wd:{st} . OPTIONAL {{ ?s pq:P585 ?quando }} }}"):
        q = v(b, "p").rsplit("/", 1)[-1]
        e = ids.setdefault(q, {"status": set(), "quando": {}})
        e["status"].add(rot)
        if v(b, "quando"): e["quando"][rot] = v(b, "quando")[:10]
    print(st, rot, len(ids), flush=True); time.sleep(3)
todos = []
lista = sorted(ids)
for i in range(0, len(lista), 250):
    vals = " ".join("wd:" + q for q in lista[i:i + 250])
    q = f"""SELECT ?p ?pLabel (SAMPLE(?nasc) AS ?n) (SAMPLE(?morte) AS ?m) (SAMPLE(?img) AS ?i) (SAMPLE(?pt) AS ?wpt) (SAMPLE(?en) AS ?wen)
      (GROUP_CONCAT(DISTINCT ?festaL; separator="|") AS ?f) (GROUP_CONCAT(DISTINCT ?paisL; separator="|") AS ?pa) (GROUP_CONCAT(DISTINCT STRAFTER(STR(?rel), "entity/"); separator="|") AS ?r)
      WHERE {{ VALUES ?p {{ {vals} }}
      OPTIONAL {{ ?p wdt:P569 ?nasc }} OPTIONAL {{ ?p wdt:P570 ?morte }} OPTIONAL {{ ?p wdt:P18 ?img }}
      OPTIONAL {{ ?p wdt:P841 ?festa . ?festa rdfs:label ?festaL . FILTER(LANG(?festaL) = "en") }}
      OPTIONAL {{ ?p wdt:P27 ?pais . ?pais rdfs:label ?paisL . FILTER(LANG(?paisL) = "pt") }}
      OPTIONAL {{ ?p wdt:P140 ?rel }}
      OPTIONAL {{ ?pt schema:about ?p ; schema:isPartOf <https://pt.wikipedia.org/> }}
      OPTIONAL {{ ?en schema:about ?p ; schema:isPartOf <https://en.wikipedia.org/> }}
      SERVICE wikibase:label {{ bd:serviceParam wikibase:language "pt,pt-br,en,it,es,fr,de,la". ?p rdfs:label ?pLabel }} }}
      GROUP BY ?p ?pLabel"""
    for b in sparql(q):
        qid = v(b, "p").rsplit("/", 1)[-1]
        e = ids[qid]
        todos.append({"qid": qid, "nome": v(b, "pLabel"), "status": sorted(e["status"]), "quando": e["quando"], "nasc": (v(b, "n") or "")[:10], "morte": (v(b, "m") or "")[:10],
                      "festa": [x for x in (v(b, "f") or "").split("|") if x], "pais": [x for x in (v(b, "pa") or "").split("|") if x], "rel": [x for x in (v(b, "r") or "").split("|") if x],
                      "img": v(b, "i"), "pt": v(b, "wpt"), "en": v(b, "wen")})
    print("detalhes", len(todos), flush=True); time.sleep(2)
json.dump(todos, open(OUT, "w"), ensure_ascii=False)
print("total", len(todos))
