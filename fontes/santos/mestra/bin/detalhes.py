import json, sys, time
sys.path.insert(0, sys.argv[3])
from sq import sparql, v
OUT = sys.argv[2]
lista = json.load(open(sys.argv[1]))
ids = {q: {"status": set(), "quando": {}} for q in lista}
todos = []
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
