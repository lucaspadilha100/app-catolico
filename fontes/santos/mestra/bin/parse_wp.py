import re, json, sys, os, glob
MESES = {m: i+1 for i, m in enumerate("january february march april may june july august september october november december".split())}
RD1 = re.compile(r"\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b")
RD2 = re.compile(r"\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b")
LINK = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]")
EXC = re.compile(r"^(Roman Catholic|Catholic|Diocese|Archdiocese|Eparchy|Archeparchy|Apostolic|Territorial|Order |Congregation|Sisters|Brothers|Society|Missionar|Jesuit|Franciscan|Dominican|Carmelite|Benedictine|Salesian|Capuchin|Saint Peter|St\. Peter|Urbis|Secular|Third Order|Poor Clare|Ursuline|Augustin|Oblate|Congregatio|Institute|Daughters|Servants of|Brotherhood|Basilica|Cathedral|List of|Martyrdom|Martyr$|Venerable|Beatification|Canonization|Kingdom|Spain|Italy|France|Poland)", re.I)
def limpa(w):
    w = re.sub(r"<!--.*?-->", "", w, flags=re.S)
    w = re.sub(r"<ref[^>/]*/>", "", w)
    w = re.sub(r"<ref[^>]*>.*?</ref>", "", w, flags=re.S)
    w = re.sub(r"\{\{(?:Interlanguage link|ill)\|([^|}]+)\|([a-z\-]+)\|?([^|}]*)[^}]*\}\}", lambda m: f"[[{m.group(1)}|{m.group(1)}]]", w, flags=re.I)
    w = re.sub(r"\{\{sort\|[^|}]*\|([^}]*)\}\}", r"\1", w, flags=re.I)
    w = re.sub(r"\{\{(?:anchor|nowrap)\|([^}]*)\}\}", lambda m: "" if "anchor" in m.group(0).lower() else m.group(1), w, flags=re.I)
    for _ in range(3): w = re.sub(r"\{\{[^{}]*\}\}", "", w)
    w = w.replace("&nbsp;", " ").replace("'''", "").replace("''", "")
    return w
def datas(s):
    out = []
    for m in RD1.finditer(s): out.append((m.start(), f"{m.group(3)}-{MESES[m.group(2).lower()]:02d}-{int(m.group(1)):02d}"))
    for m in RD2.finditer(s): out.append((m.start(), f"{m.group(3)}-{MESES[m.group(1).lower()]:02d}-{int(m.group(2)):02d}"))
    return [d for _, d in sorted(out)]
def anos(s):
    m = re.search(r"\(\s*(?:c\.\s*)?(\d{3,4})?\s*[–\-—]\s*(\d{3,4})", s)
    if m: return m.group(1), m.group(2)
    m = re.search(r"\(\s*(?:\+|†|d\.|died|c\.)\s*(?:c\.\s*)?(\d{3,4})", s)
    if m: return None, m.group(1)
    return None, None
def grupo(s):
    m = re.search(r"(?:&|and|e)\s+(\d+)\s+(?:\w+\s+)?[Cc]ompanions", s)
    if m: return int(m.group(1)) + 1
    m = re.search(r"\((\d+)\s+(?:martyrs|people|persons)\)", s)
    if m: return int(m.group(1))
    if re.search(r"[Cc]ompanions|[Mm]artyrs of", s): return -1
    return None
def nome_de(cell):
    cell = re.sub(r"<br\s*/?>.*", "", cell, flags=re.S).strip()
    cell = re.sub(r"^\s*(?:align|style|rowspan|colspan|class|width)[^|]*\|", "", cell).strip()
    links = [(m.group(1).strip(), (m.group(2) or m.group(1)).strip(), m.start()) for m in LINK.finditer(cell)]
    texto = LINK.sub(lambda m: (m.group(2) or m.group(1)), cell)
    texto = re.split(r"\s*\(", texto)[0]
    texto = re.split(r",\s*(?:[A-Z]{1,6}\.?\b|O\.|S\.J|\[)", texto)[0].strip(" ,;:*#|")
    alvo = None
    for t, d, p in links:
        if not EXC.match(t) and (cell[:p].strip(" *#|") == "" or len(re.sub(r"[^\w]", "", LINK.sub("", cell[:p]))) == 0):
            alvo = t; break
    return re.sub(r"\s+", " ", texto), alvo
def status_pagina(t):
    if "canonized" in t or "Catholic saints" in t: return "santo"
    if "beatified" in t: return "beato"
    if "venerable" in t: return "veneravel"
def ups(s):
    r = {}
    for k, st in (("beatified", "beato"), ("canonized", "santo"), ("canonised", "santo"), ("cultus confirmed", "beato")):
        m = re.search(k + r"\s+(?:on\s+)?([^,;)]*\d{4})", s, re.I)
        if m:
            d = datas(m.group(1)); r[st] = d[0] if d else (re.findall(r"\d{4}", m.group(1)) or [None])[-1]
    return r
def parse(path):
    titulo = os.path.basename(path)[:-4].replace("_", " ")
    st = status_pagina(titulo)
    w = limpa(open(path).read())
    w = w.split("\n==See also")[0].split("\n== See also")[0].split("\n==References")[0]
    unidades, cur = [], []
    for ln in w.split("\n"):
        if ln.startswith("|-") or ln.startswith("|}") or ln.startswith("{|") or re.match(r"^=+", ln) or ln[:1] in "*#":
            if cur: unidades.append("\n".join(cur))
            cur = [ln]
        else: cur.append(ln)
    if cur: unidades.append("\n".join(cur))
    data, out, catsaints = None, [], "Catholic saints" in titulo
    ano, trava = None, False
    for u in unidades:
        if re.match(r"^=+", u):
            mm = re.match(r"^=+\s*(\d{4})\s*=+", u)
            if mm: ano = mm.group(1); trava = False
            d = datas(u.split("\n")[0]); 
            if d: data = d[0]
            elif re.search(r"\b(1[5-9]|20)\d\d\b", u.split("\n")[0]): data = re.search(r"\b((?:1[5-9]|20)\d\d)\b", u.split("\n")[0]).group(1)
            continue
        if u.startswith("!") or "colspan" in u.split("\n")[1:2][0] if u.startswith("|-") and len(u.split("\n")) > 1 else False: pass
        if u[:1] in "*#":
            item = u.lstrip("*#: ").split("\n")[0]
            if not re.search(r"[A-Za-zÀ-ÿ]", item): continue
            nome, alvo = nome_de(item)
            nasc, morte = anos(item)
            out.append(dict(pagina=titulo, status=st, data=data, nome=nome, alvo=alvo, nasc=nasc, morte=morte, grupo=grupo(item), ups=ups(item), raw=item[:300]))
            continue
        if not u.startswith("|-"): continue
        corpo = "\n".join(l for l in u.split("\n")[1:] if not l.startswith("!"))
        if not corpo.strip(): continue
        if re.search(r"colspan=\"?[4-9]", corpo) and not re.search(r"\(\s*\d{3,4}|\(\+", corpo):
            hd = datas(corpo)
            m2 = re.search(r"(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})\b(?!,?\s*\d{4})", corpo)
            if hd: data, trava = hd[0], True
            elif m2 and ano: data, trava = f"{ano}-{MESES[m2.group(1).lower()]:02d}-{int(m2.group(2)):02d}", True
            else: trava = False
            continue
        cells = [c for c in re.split(r"\|\||\n\|", "\n" + corpo) if c.strip()]
        cells = [re.sub(r"^\s*\|?\s*", "", c) for c in cells]
        if catsaints:
            if not cells: continue
            nome, alvo = nome_de(cells[0])
            nasc = (re.findall(r"\d{3,4}", cells[1]) or [None])[0] if len(cells) > 1 else None
            morte = (re.findall(r"\d{3,4}", cells[2]) or [None])[0] if len(cells) > 2 else None
            cz = cells[3] if len(cells) > 3 else ""
            d = datas(cz); dd = d[0] if d else ((re.findall(r"\b\d{3,4}\b", cz) or [None])[0])
            out.append(dict(pagina=titulo, status="santo", data=dd, nome=nome, alvo=alvo, nasc=nasc, morte=morte, grupo=grupo(cells[0]), ups={}, raw=corpo[:300], nota=cz[:120]))
            continue
        ncell = None
        for c in cells:
            if re.search(r"\(\s*(?:c\.\s*)?\d{3,4}|\(\s*(?:\+|†|died|d\.)", c) and re.search(r"[A-Za-z]", re.sub(r"\(.*", "", c)):
                ncell = c; break
        if ncell is None:
            for c in cells:
                if "[[" in c and not re.match(r"^\s*\d+\.?\s*$", c):
                    ncell = c; break
        if ncell is None: continue
        d = datas(corpo)
        if d and not trava: data = d[0]
        nome, alvo = nome_de(ncell)
        if not nome or re.match(r"^\d+\.?$", nome): continue
        nasc, morte = anos(ncell)
        out.append(dict(pagina=titulo, status=st, data=data, nome=nome, alvo=alvo, nasc=nasc, morte=morte, grupo=grupo(ncell), ups=ups(corpo), raw=corpo[:300]))
    return out
todos = []
for p in sorted(glob.glob(sys.argv[1] + "/*.txt")):
    if "titulos" in p or "List_of_venerable_people.txt" in p: continue
    r = parse(p); todos += r
    print(f"{len(r):5d} {sum(1 for x in r if x['alvo'])} {os.path.basename(p)}")
json.dump(todos, open(sys.argv[2], "w"), ensure_ascii=False, indent=0)
