import json, sys, time
sys.path.insert(0, sys.argv[3])
from sq import sparql, v
ts = json.load(open(sys.argv[1])); out = {}
for i in range(0, len(ts), 300):
    vals = " ".join(json.dumps(t, ensure_ascii=False) + "@en" for t in ts[i:i+300])
    q = f"""SELECT ?t ?p WHERE {{ VALUES ?t {{ {vals} }} ?a schema:name ?t ; schema:isPartOf <https://en.wikipedia.org/> ; schema:about ?p . }}"""
    for b in sparql(q): out[v(b, "t")] = v(b, "p").rsplit("/",1)[-1]
    print(i, len(out), flush=True); time.sleep(1)
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False)
