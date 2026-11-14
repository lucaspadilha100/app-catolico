import json, sys, time, urllib.request, urllib.parse
UA = "ListaSantos/1.0 (research script; python urllib)"
def sparql(q, tries=6):
    for t in range(tries):
        try:
            r = urllib.request.Request("https://query.wikidata.org/sparql", data=urllib.parse.urlencode({"query": q, "format": "json"}).encode(), headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
            return json.loads(urllib.request.urlopen(r, timeout=300).read().decode(), strict=False)["results"]["bindings"]
        except Exception as e:
            sys.stderr.write(f"{e}\n"); time.sleep(15 * (t + 1))
    raise SystemExit("falhou")
v = lambda b, k: b[k]["value"] if k in b else None
if __name__ == "__main__":
    q = open(sys.argv[1]).read()
    for b in sparql(q):
        print("\t".join(v(b, k) or "" for k in b))
