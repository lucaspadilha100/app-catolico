import json, sys, time
sys.path.insert(0, sys.argv[3])
from sq import sparql, v
ids = json.load(open(sys.argv[1]))
out = {}
PROPS = {"P9588":"causesanti","P6126":"santiebeati","P6725":"catholicsaints","P4286":"nominis","P3241":"catholicenc","P5002":"ortenc","P7819":"orthowiki","P13557":"orthworld","P10281":"orthodoxie","P8080":"oekum"}
for i in range(0, len(ids), 200):
    vals = " ".join("wd:" + q for q in ids[i:i+200])
    sel = " ".join(f'(GROUP_CONCAT(DISTINCT ?{n}; separator="|") AS ?{n}_)' for n in PROPS.values())
    opt = " ".join(f"OPTIONAL {{ ?p wdt:{p} ?{n} }}" for p, n in PROPS.items())
    q = f"""SELECT ?p {sel} (GROUP_CONCAT(DISTINCT ?ordL; separator="|") AS ?ord_) (GROUP_CONCAT(DISTINCT STRAFTER(STR(?inst),"entity/"); separator="|") AS ?inst_)
    (GROUP_CONCAT(DISTINCT STRAFTER(STR(?src),"entity/"); separator="|") AS ?src_) (SAMPLE(?ptl) AS ?ptl_) (SAMPLE(?qtd) AS ?qtd_) (GROUP_CONCAT(DISTINCT ?fdt; separator="|") AS ?fdt_)
    WHERE {{ VALUES ?p {{ {vals} }} {opt}
    OPTIONAL {{ ?p wdt:P611 ?ord . ?ord rdfs:label ?ordL . FILTER(LANG(?ordL)="pt") }}
    OPTIONAL {{ ?p wdt:P31 ?inst }}
    OPTIONAL {{ ?p wdt:P1343 ?src . FILTER(?src IN (wd:Q14705108, wd:Q125252554)) }}
    OPTIONAL {{ ?p rdfs:label ?ptl . FILTER(LANG(?ptl)="pt-br") }}
    OPTIONAL {{ ?p wdt:P1114 ?qtd }}
    OPTIONAL {{ ?p p:P841 ?fs . ?fs ps:P841 ?fd . OPTIONAL {{ ?fd wdt:P837 ?dd }} OPTIONAL {{ ?fs pq:P837 ?dq }} BIND(COALESCE(STR(?dq), STR(?dd)) AS ?fdt) }}
    }} GROUP BY ?p"""
    for b in sparql(q):
        qid = v(b, "p").rsplit("/",1)[-1]
        out[qid] = {k[:-1]: [x for x in v(b, k).split("|") if x] for k in b if k.endswith("_") and v(b, k)}
    print(i, len(out), flush=True); time.sleep(1.5)
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False)
