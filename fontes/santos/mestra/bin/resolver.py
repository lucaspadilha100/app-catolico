import json, sys
sys.path.insert(0, sys.argv[3])
from wiki import api
ts = json.load(open(sys.argv[1])); out = {}
for i in range(0, len(ts), 50):
    d = api("en.wikipedia.org", {"action": "query", "titles": "|".join(ts[i:i+50]), "redirects": 1, "prop": "pageprops", "ppprop": "wikibase_item"})
    q = d["query"]; m = {}
    for x in q.get("normalized", []): m[x["from"]] = x["to"]
    red = {x["from"]: x["to"] for x in q.get("redirects", [])}
    pg = {p["title"]: p.get("pageprops", {}).get("wikibase_item") for p in q["pages"]}
    for t in ts[i:i+50]:
        n = m.get(t, t); n = red.get(n, n); out[t] = pg.get(n)
    print(i, flush=True)
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False)
