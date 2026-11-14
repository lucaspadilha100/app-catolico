import json, sys, time
sys.path.insert(0, sys.argv[3])
from sq import sparql, v
ids = json.load(open(sys.argv[1])); out = {}
for i in range(0, len(ids), 200):
    vals = " ".join("wd:" + q for q in ids[i:i+200])
    q = f"""SELECT ?p (SAMPLE(?pt) AS ?pt_) (SAMPLE(?en) AS ?en_) (SAMPLE(?mp) AS ?mp_) (SAMPLE(?np) AS ?np_)
    (GROUP_CONCAT(DISTINCT STRAFTER(STR(?parte),"entity/"); separator="|") AS ?parte_) (COUNT(DISTINCT ?membro) AS ?membros_)
    (GROUP_CONCAT(DISTINCT ?ordE; separator="|") AS ?orde_) (SAMPLE(?desc) AS ?desc_)
    WHERE {{ VALUES ?p {{ {vals} }}
    OPTIONAL {{ ?p rdfs:label ?pt . FILTER(LANG(?pt)="pt") }}
    OPTIONAL {{ ?p rdfs:label ?en . FILTER(LANG(?en)="en") }}
    OPTIONAL {{ ?p schema:description ?desc . FILTER(LANG(?desc)="en") }}
    OPTIONAL {{ ?p p:P570/psv:P570/wikibase:timePrecision ?mp }}
    OPTIONAL {{ ?p p:P569/psv:P569/wikibase:timePrecision ?np }}
    OPTIONAL {{ ?p wdt:P361|wdt:P463 ?parte }}
    OPTIONAL {{ ?p wdt:P527 ?membro }}
    OPTIONAL {{ ?p wdt:P611 ?ord . ?ord rdfs:label ?ordE . FILTER(LANG(?ordE)="en") }}
    }} GROUP BY ?p"""
    for b in sparql(q):
        qid = v(b, "p").rsplit("/",1)[-1]
        out[qid] = {k[:-1]: v(b, k) for k in b if v(b, k) not in (None, "", "0")}
    print(i, len(out), flush=True); time.sleep(1.5)
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False)
