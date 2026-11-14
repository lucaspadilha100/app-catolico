import json, sys, time, urllib.request, urllib.parse
UA = "ListaSantosResearch/1.0 (one-off research script; python urllib)"
def api(host, params, tries=8):
    params = dict(params, format="json", formatversion="2", maxlag="5")
    url = f"https://{host}/w/api.php?" + urllib.parse.urlencode(params)
    for t in range(tries):
        try:
            r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Encoding": "identity"}), timeout=120)
            time.sleep(1.2)
            return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            ra = int(e.headers.get("retry-after") or 10)
            sys.stderr.write(f"{e.code} retry {ra}\n"); time.sleep(ra + 5 * t)
        except Exception as e:
            sys.stderr.write(f"{e}\n"); time.sleep(10)
    raise SystemExit("falhou " + url)
if __name__ == "__main__":
    for s in sys.argv[1:]:
        d = api("en.wikipedia.org", {"action": "query", "list": "search", "srsearch": s, "srlimit": 50, "srnamespace": 0})
        for x in d["query"]["search"]: print(x["title"])
