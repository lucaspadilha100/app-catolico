import json, sys, time, urllib.request, urllib.parse
OUT = sys.argv[1]
UA = "MinhaIgrejinha/1.0 (app catolico)"
STATUS = {"Q3464126": "santo", "Q18344276": "santo", "Q123110154": "santo", "Q43115": "santo?", "Q2369287": "beato", "Q51619": "veneravel", "Q12774503": "veneravel?", "Q869974": "servo"}
def sparql(q):
    for t in range(5):
        try:
            r = urllib.request.Request("https://query.wikidata.org/sparql?" + urllib.parse.urlencode({"query": q, "format": "json"}), headers={"User-Agent": UA})
            return json.load(urllib.request.urlopen(r, timeout=180))["results"]["bindings"]
        except Exception as e:
            sys.stderr.write(f"{e}\n"); time.sleep(20 * (t + 1))
    raise SystemExit("falhou")
def v(b, k):
    return b[k]["value"] if k in b else None
todos = {}
for st, rot in STATUS.items():
    q = f"""SELECT ?p ?pLabel ?ptLabel ?nasc ?morte ?festa ?festaLabel ?pais ?paisLabel ?rel ?img ?quando ?pt ?en WHERE {{
      ?p p:P411 ?s . ?s ps:P411 wd:{st} . OPTIONAL {{ ?s pq:P585 ?quando }}
      OPTIONAL {{ ?p wdt:P569 ?nasc }} OPTIONAL {{ ?p wdt:P570 ?morte }} OPTIONAL {{ ?p wdt:P841 ?festa }}
      OPTIONAL {{ ?p wdt:P27 ?pais }} OPTIONAL {{ ?p wdt:P140 ?rel }} OPTIONAL {{ ?p wdt:P18 ?img }}
      OPTIONAL {{ ?pt schema:about ?p ; schema:isPartOf <https://pt.wikipedia.org/> }}
      OPTIONAL {{ ?en schema:about ?p ; schema:isPartOf <https://en.wikipedia.org/> }}
      SERVICE wikibase:label {{ bd:serviceParam wikibase:language "pt,pt-br,en,it,es,fr,la". }} }}"""
    linhas = sparql(q)
    print(st, rot, len(linhas), flush=True)
    for b in linhas:
        qid = v(b, "p").rsplit("/", 1)[-1]
        e = todos.setdefault(qid, {"qid": qid, "nome": v(b, "pLabel"), "status": set(), "nasc": None, "morte": None, "festa": set(), "pais": set(), "rel": set(), "img": None, "quando": None, "pt": v(b, "pt"), "en": v(b, "en")})
        e["status"].add(rot)
        for k in ("nasc", "morte", "img", "quando"):
            if v(b, k) and not e[k]: e[k] = v(b, k)
        if v(b, "festaLabel"): e["festa"].add(v(b, "festaLabel"))
        if v(b, "paisLabel"): e["pais"].add(v(b, "paisLabel"))
        if v(b, "rel"): e["rel"].add(v(b, "rel").rsplit("/", 1)[-1])
    time.sleep(5)
for e in todos.values():
    for k in ("status", "festa", "pais", "rel"): e[k] = sorted(e[k])
json.dump(list(todos.values()), open(OUT, "w"), ensure_ascii=False)
print("total", len(todos))
