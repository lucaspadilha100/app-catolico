import json, re, sys, unicodedata, collections, urllib.parse
B = sys.argv[1]
HOJE = "2026-11-14"
W = json.load(open(B + "/wikidata.json")) + json.load(open(B + "/net/novos_det.json"))
E = json.load(open(B + "/net/extra.json")); E.update(json.load(open(B + "/net/novos_extra.json")))
E2 = json.load(open(B + "/net/extra2.json")); E2.update(json.load(open(B + "/net/novos_extra2.json")))
WPL = [r for r in json.load(open(B + "/net/wp_linhas.json")) if r["pagina"] not in ("List of Catholic saints from Oceania", "List of Catholic saints of the Canary Islands") and not (r["pagina"] == "List of Catholic saints" and not r["data"] and not re.search(r"[Pp]re-?[Cc]ongregation|Martyrology", r.get("nota") or ""))]
ABREV = r"\s+(?:OFM(?:Cap|Conv)?|O\.F\.M\.(?:\s*Cap\.)?|SJ|S\.J\.|OP|O\.P\.|OCD|OCarm|O\.Carm\.|OSB|O\.S\.B\.|CSsR|SDB|FMA|CM|OSA|CP|OMI|SVD|PIME|FSC|MSC|CSC|SM|OSM|CMF|FSP|SCJ|OSU|IMC|MCCJ|OAR|TOR|OFS|SchP|OH|OSsT|OMV|SAC|CR|CRL|CSSp|FMS|SSS|OCSO|OSC|MSPS|ASC|TOFS|FSCJ|SSpS|OSF|OSFS|CSJ|SSND|MSF|OSBM|ICR|CRS|FdCC|OMD|SX|SMA)\.?$"
T2Q = json.load(open(B + "/net/titulo_qid.json"))
BR = json.load(open(B + "/../inventario/brasil.json"))
WDIDS = {x["qid"] for x in json.load(open(B + "/wikidata.json"))}

CAT_REL = {"Q9592", "Q1841", "Q597526", "Q64842", "Q64871", "Q64900", "Q256178", "Q472189", "Q755970", "Q856349", "Q911398", "Q868115", "Q7361618", "Q3066101", "Q131132"}
ORT_REL = {"Q35032", "Q3333484", "Q60995", "Q188814", "Q192173", "Q523137", "Q7970362", "Q22134292", "Q223710"}
ORIENT_REL = {"Q198998", "Q210540", "Q49377", "Q532662", "Q683724", "Q844083", "Q1764554", "Q183091", "Q168414"}
PROT_REL = {"Q6423963", "Q75809", "Q104319", "Q771902", "Q2060869", "Q894479", "Q83922", "Q131165"}
NAOCRIST = {"Q432", "Q748", "Q9089", "Q9232", "Q9316", "Q9585", "Q9598", "Q9601", "Q22679", "Q45584", "Q234953", "Q319218", "Q483889", "Q1144575", "Q838267", "Q1122452", "Q1106575", "Q2914567", "Q7066"}
GRUPO = {"Q16334295", "Q10648343", "Q3046146", "Q14073567", "Q16979650", "Q125143602", "Q109288825", "Q109288828", "Q109288863", "Q109289221", "Q125258812", "Q125258836", "Q22813674", "Q99250424", "Q8436", "Q3199915"}
NAOPESSOA = {"Q4167410", "Q22808320", "Q13406463", "Q1509831", "Q1406161", "Q24334685", "Q104740165", "Q15632617", "Q64520857"}
ANJO = {"Q178342", "Q10822464", "Q690175"}
ORDEM = ["santo", "beato", "veneravel", "servo"]
WPURL = lambda t: "https://en.wikipedia.org/wiki/" + urllib.parse.quote(t.replace(" ", "_"))

def norm(s):
    s = unicodedata.normalize("NFKD", s or "").encode("ascii", "ignore").decode().lower()
    s = re.sub(r"\b(sao|santa|santo|santos|beato|beata|beatos|bem-aventurad[oa]|veneravel|san|saint|st|blessed|venerable|servo|serva|frei|padre|irma|irmao|madre|dom|monsenhor|conego|mae|pe|nha|martir|martires|de|da|do|dos|das|di|del|della|dei|von|van|of|the|la|le|y|e|and|i)\b", " ", s)
    return " ".join(sorted(set(re.findall(r"[a-z]{2,}", s))))

def ano(d):
    m = re.match(r"^(-?\d{1,4})", d or "")
    return int(m.group(1)) if m and d and not d.startswith("http") else None

MES = {m: i + 1 for i, m in enumerate("January February March April May June July August September October November December".split())}
def mmdd(lbl):
    m = re.match(r"^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2})$", lbl.strip())
    return f"{MES[m.group(1)]:02d}-{int(m.group(2)):02d}" if m else None

def tira_titulo(n):
    return re.sub(r"^(São|Santa|Santo|Beato|Beata|Bem-aventurad[oa]|Venerável|Saint|St\.|Blessed|Venerable|San|Sant'|Sankt)\s+", "", n or "").strip()

# ---------- evidência das listas da Wikipédia ----------
alvo_datas = collections.defaultdict(set)
for r in WPL:
    if r["alvo"] and r["grupo"]: alvo_datas[(r["alvo"], r["pagina"])].add(r["data"])
wp_por_qid = collections.defaultdict(list)
wp_sem_qid = []
for r in WPL:
    q = T2Q.get(r["alvo"]) if r["alvo"] else None
    if q and r["grupo"] and len(alvo_datas[(r["alvo"], r["pagina"])]) > 1: q = None
    if q and r["grupo"] and "Q5" in E.get(q, {}).get("inst", []): q = None
    r["qid"] = q
    (wp_por_qid[q].append(r) if q else wp_sem_qid.append(r))

def evid_wp(rows):
    st = {}
    for r in rows:
        cand = [(r["status"], r["data"])] + list(r["ups"].items())
        for s, d in cand:
            if not s: continue
            fut = bool(d and len(d) == 10 and d > HOJE)
            if fut: continue
            if s not in st or (d and (not st[s] or len(str(d)) > len(str(st[s])))): st[s] = d
    return st

itens = []
excl = collections.Counter(); excl_ex = collections.defaultdict(list)
incertos = collections.Counter()
OCID = ["Itál", "Franç", "Espanh", "Portug", "Alem", "Germ", "Bélg", "Baixos", "Holand", "Áustr", "Polón", "Polôn", "Irland", "Inglat", "Reino Unido", "Escóc", "Suíç", "Hungr", "Boém", "Chéqu", "Checa", "Croác", "Eslov", "Lituân", "México", "Brasil", "Sacro Império", "Flandres", "Castela", "Aragão", "Leão", "Navarra", "Sicília", "Nápoles", "Sardenha", "Veneza", "Génova", "Florença", "Milão", "Papa", "Lombard", "Borgonha", "Saboia", "Baviera", "Saxónia", "Prússia", "Dinamarca", "Suécia", "Noruega", "Islândia", "Malta", "Filipinas", "Peru", "Colômbia", "Argentina", "Chile", "Canadá", "Estados Unidos", "Luxemburgo", "Mónaco", "Gales", "Francos", "Frância", "Lotaríngia", "Toscana", "Gasconha", "Aquitânia", "Normandia", "Bretanha", "Brabante", "Hainaut", "Liège", "Colónia", "Tirol", "Galiza", "Córsega", "Equador", "Venezuela", "Bolívia", "Paraguai", "Uruguai", "Cuba", "Guatemala"]
for x in W:
    q = x["qid"]; e = E.get(q, {}); e2 = E2.get(q, {})
    x["quando"] = {k: v for k, v in x["quando"].items() if v and not v.startswith("http")}
    inst = set(e.get("inst", [])); rel = set(x["rel"])
    S = set(x["status"])
    rows = wp_por_qid.get(q, [])
    mw = ano(x["morte"])
    ok_rows = []
    for r in rows:
        rm = ano(r["morte"]) if r["morte"] else None
        if rm and mw and abs(rm - mw) > 3 and not (inst & GRUPO): continue
        ok_rows.append(r)
    rows = ok_rows
    wps = evid_wp(rows)
    futuros = [(r["status"], r["data"]) for r in rows if r["data"] and len(r["data"]) == 10 and r["data"] > HOJE]
    if q not in WDIDS and not rows: continue
    if q not in WDIDS and not (inst & ({"Q5", "Q20643955", "Q21070568", "Q13002315"} | GRUPO)):
        excl["link da lista que não é pessoa nem grupo"] += 1; continue
    if inst & NAOPESSOA and not ("Q5" in inst):
        excl["não é pessoa (título mariano, desambiguação, ficção)"] += 1; excl_ex["naopessoa"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
    if inst & ANJO or "Q178342" in rel:
        pass
    fortes = []
    if rel & CAT_REL: fortes.append("religião católica")
    if e.get("src"): fortes.append("Martirológio Romano")
    if e.get("causesanti"): fortes.append("causesanti.va")
    if rows: fortes.append("lista da Wikipédia")
    fracos = []
    for k, n in (("santiebeati", "santiebeati.it"), ("catholicsaints", "CatholicSaints.info"), ("catholicenc", "Catholic Encyclopedia")):
        if e.get(k): fracos.append(n)
    nominis = bool(e.get("nominis"))
    ort = bool(rel & ORT_REL) or any(e.get(k) for k in ("ortenc", "orthowiki", "orthworld", "orthodoxie"))
    orient = bool(rel & ORIENT_REL); prot = bool(rel & PROT_REL); nc = bool(rel & NAOCRIST)
    catcanon = S & {"santo", "beato", "veneravel"}
    sinal_cat = bool(fortes or fracos or catcanon)
    if nc and not (fortes or fracos):
        excl["santo de outra religião (hindu, sufi, budista...)"] += 1; excl_ex["outra religiao"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
    sit = None; obs = []; conf = None; suspeito = False
    if "santo" in wps: sit = "santo"
    elif "santo" in S: sit = "santo"
    elif "beato" in wps or "beato" in S: sit = "beato"
    elif "veneravel" in wps or "veneravel" in S: sit = "veneravel"
    elif "santo?" in S:
        if fortes or fracos:
            sit = "santo"
        elif prot or orient:
            excl["santo só de outra Igreja (anglicana, luterana, ortodoxa oriental) sem sinal católico"] += 1; excl_ex["outra igreja"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
        elif mw is not None and mw > 1054 and not ort and any(o in p_ for p_ in x["pais"] for o in OCID):
            sit = "santo"; conf = "baixa"; obs.append("santo ocidental posterior a 1054 sem confirmação católica (pode ser só culto local ou beato)")
            incertos["santo ocidental pós-1054 sem confirmação católica (incluído, confiança baixa)"] += 1
        elif mw is not None and mw > 1054:
            excl["santo pós-1054 sem sinal católico (em geral ortodoxo)"] += 1; excl_ex["pos1054"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
        elif mw is None:
            excl["santo genérico sem data de morte e sem sinal católico"] += 1; excl_ex["sem data"].append({"qid": q, "nome": x["nome"], "pais": x["pais"]}); incertos["santo genérico sem data e sem sinal católico (excluído)"] += 1; continue
        else:
            sit = "santo"; conf = "baixa"; obs.append("santo anterior a 1054 sem confirmação de que está no Martirológio Romano")
            incertos["santo anterior a 1054 sem confirmação católica (incluído, confiança baixa)"] += 1
    elif "veneravel?" in S:
        if (rel & CAT_REL or fracos) and not ort: incertos["'The Venerable' com sinal católico, sem decreto conferido (excluído)"] += 1
        excl["'The Venerable' (título monástico/ortodoxo), sem decreto católico"] += 1; excl_ex["veneravel?"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
    elif "servo" in S:
        sit = "servo"
    else:
        if q not in WDIDS:
            excl["link da lista sem situação reconhecível"] += 1; continue
        excl["sem situação"] += 1; continue
    if sit == "santo" and "santo" not in S and "santo" not in wps and "santo?" in S and (S & {"beato", "veneravel"}):
        sit = "beato" if "beato" in S else "veneravel"
    if sit == "santo" and mw and mw >= 1900 and "santo" not in wps and not x["quando"].get("santo"):
        rebaixa = "beato" if ("beato" in wps or "beato" in S) else "veneravel" if ("veneravel" in wps or "veneravel" in S) else None
        if rebaixa:
            sit = rebaixa; obs.append("o Wikidata o dá como santo, mas nenhuma lista de canonização o traz")
            incertos["santo no Wikidata, morto depois de 1900, fora das listas de canonização (rebaixado)"] += 1
        else:
            conf = "baixa"; obs.append("santo no Wikidata sem data de canonização e fora das listas de canonização"); suspeito = True
            incertos["santo no Wikidata, morto depois de 1900, fora das listas de canonização (confiança baixa)"] += 1
    if ort and not (fortes or fracos) and sit in ("beato",) and not catcanon - {"beato"} and mw and mw > 1054 and not rel & CAT_REL and not x.get("quando"):
        excl["'bem-aventurado' ortodoxo (sem beatificação católica)"] += 1; excl_ex["beato ort"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
    if conf is None:
        if sit == "santo" and ("santo" in S or e.get("src") or e.get("causesanti") or (rel & CAT_REL and (rows or fracos))) and (fortes or fracos): conf = "alta"
        elif sit in ("beato", "veneravel") and (fortes or "santiebeati.it" in fracos or x["quando"].get(sit)): conf = "alta"
        elif sit == "santo" and "santo" in wps: conf = "alta" if (rel & CAT_REL or e.get("src") or fracos or "santo" in S) else "media"
        elif fortes or fracos: conf = "media"
        else: conf = "media"
    PAIS_ORT = {"Grécia", "Rússia", "Império Russo", "União Soviética", "Sérvia", "Geórgia", "Bulgária", "Montenegro", "Chipre", "Macedónia do Norte", "Império Bizantino", "Reino da Sérvia", "Principado de Moscovo", "Grão-Principado de Moscou", "Czarado da Rússia", "Checoslováquia", "Império Otomano"}
    if S == {"santo?"} and set(x["pais"]) & PAIS_ORT and not rel & CAT_REL and mw and mw > 1054 and not (e.get("src") or e.get("causesanti") or rows):
        excl["santo pós-1054 de país ortodoxo só com 'santo' genérico"] += 1; excl_ex["pais ort"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]}); continue
    if sit == "santo" and (ort or prot or orient) and not rel & CAT_REL and mw and mw > 1054 and not (e.get("src") or e.get("causesanti") or "santo" in S or "beato" in S):
        excl["santo pós-1054 de outra Igreja citado só em lista fraca (santiebeati, Wikipédia, Nominis)"] += 1; excl_ex["pos1054 fraco"].append({"qid": q, "nome": x["nome"], "morte": x["morte"], "pais": x["pais"]})
        incertos["santo pós-1054 com sinais ortodoxos e só fonte católica fraca (excluído)"] += 1; continue
    if inst & {"Q20643955", "Q22813674"}: obs.append("personagem bíblico")
    if inst & {"Q21070568", "Q13002315", "Q21070598"}: obs.append("existência histórica discutida")
    sd = None
    if sit in wps and wps[sit]: sd = wps[sit]
    if x["quando"].get(sit) and (not sd or len(sd) < 10): sd = x["quando"][sit]
    if sit == "santo" and not sd:
        for r in rows:
            if r["pagina"] == "List of Catholic saints" and r.get("nota") and re.search(r"[Pp]re-?[Cc]ongregation", r["nota"]): sd = None; obs.append("pré-congregação")
    for s, d in futuros:
        obs.append(f"{'canonização' if s == 'santo' else 'beatificação'} marcada para {d}")
    festas = [f for f in x["festa"] if mmdd(f)]
    festa = mmdd(festas[0]) if festas else None; dde = "memoria" if festa else None
    if len(festas) > 1: obs.append("outras festas no Wikidata: " + ", ".join(mmdd(f) for f in festas[1:]))
    morte = x["morte"] if x["morte"] and not x["morte"].startswith("http") else None
    nasc = x["nasc"] if x["nasc"] and not x["nasc"].startswith("http") else None
    mp = int(e2.get("mp", 0) or 0); np_ = int(e2.get("np", 0) or 0)
    def corta(d, p):
        if not d: return None
        neg = d.startswith("-"); d2 = d.lstrip("-")
        r = d2[:10] if p >= 11 else d2[:7] if p == 10 else d2[:4]
        return ("-" if neg else "") + r
    morte = corta(morte, mp or (11 if morte and not morte.endswith("-01-01") else 9))
    nasc = corta(nasc, np_ or (11 if nasc and not nasc.endswith("-01-01") else 9))
    if not festa and morte and len(morte) == 10 and not morte.startswith("-"): festa = morte[5:]; dde = "falecimento"
    pessoas = None
    if inst & GRUPO:
        pessoas = int(float(e.get("qtd", ["0"])[0])) if e.get("qtd") else (int(e2.get("membros", 0)) or None)
        if not pessoas:
            for r in rows:
                if r["grupo"] and r["grupo"] > 0: pessoas = r["grupo"]
        if not pessoas and inst & {"Q10648343", "Q3046146", "Q14073567", "Q109288825", "Q109289221", "Q125258812", "Q125258836"}: pessoas = 2
    elif any(r["grupo"] and r["grupo"] > 1 for r in rows) and "Q5" not in inst:
        pessoas = max(r["grupo"] for r in rows)
    nome_pt = e2.get("pt") or (e.get("ptl") or [None])[0]
    nome_orig = x["nome"] if x["nome"] != q else (e2.get("en") or q)
    img = x["img"]
    if img: img = "File:" + urllib.parse.unquote(img.rsplit("/", 1)[-1]).replace("_", " ")
    fontes = [f"https://www.wikidata.org/wiki/{q}"]
    if e.get("causesanti"): fontes.append(f"https://www.causesanti.va/it/santi-e-beati/{e['causesanti'][0]}.html")
    if e.get("santiebeati"): fontes.append(f"https://www.santiebeati.it/dettaglio/{e['santiebeati'][0]}")
    for r in rows:
        u = WPURL(r["pagina"])
        if u not in fontes: fontes.append(u)
    ordem = (e.get("ord") or [None])[0] or ((e2.get("orde") or "").split("|")[0] or None)
    itens.append(dict(qid=q, nome_pt=tira_titulo(nome_pt or nome_orig), nome_original=nome_orig if not nome_pt else None, situacao=sit, status_data=sd,
                      festa_mmdd=festa, data_de=dde, nasc=nasc, morte=morte, pais=x["pais"] or [], ordem=ordem, pessoas=pessoas,
                      img_commons=img, wiki_pt=x["pt"], wiki_en=x["en"], fontes=fontes, confianca=conf,
                      martirologio=True if e.get("src") else None, observacao="; ".join(dict.fromkeys(obs)) or None,
                      _partes=(e2.get("parte") or "").split("|"), _chaves=[e2.get("en"), x["nome"], urllib.parse.unquote((x["pt"] or "").rsplit("/",1)[-1]).replace("_"," "), urllib.parse.unquote((x["en"] or "").rsplit("/",1)[-1]).replace("_"," ")], _rel=sorted(rel), _suspeito=suspeito, _sinais=fortes + fracos + (["nominis"] if nominis else []), _ort=ort))

ROT = dict(l.rstrip("\n").split("\t")[:2] for l in open(B + "/net/rot_qid.tsv") if "\t" in l)
for i in itens:
    if re.match(r"^Q\d+$", i["nome_pt"] or "") and i["qid"] in ROT:
        i["nome_pt"] = tira_titulo(re.sub(r"^(Свети|Света|Святой|Святая|Святий|Свята|Преподобный|Преподобная|Мученик|Мученица|Ks\.|Św\.)\s+", "", ROT[i["qid"]]))
        i["observacao"] = "; ".join(filter(None, [i["observacao"], "sem nome em português nem inglês no Wikidata"]))
por_qid = {i["qid"]: i for i in itens}
GMAN = {"Q615607": ("beato", "2000-03-05", "Mártires de Nowogródek"), "Q17341961": ("santo", "2000-05-21", "Santos da Guerra Cristera"), "Q2735762": ("santo", "1999-11-21", "Mártires de Turón")}
SUSP_G = collections.defaultdict(set)
for ln in open(B + "/net/suspeitos_grupos.tsv"):
    for g in GMAN:
        if g in ln: SUSP_G[re.findall(r"Q\d+", ln)[0] if not ln.startswith(g) else [t for t in re.findall(r"Q\d+", ln) if t != g][0]].add(g)
for i in itens:
    if not i.get("_suspeito"): continue
    gm = [GMAN[g] for g in SUSP_G.get(i["qid"], [])]
    if not gm and ("Polónia" in i["pais"] or "Segunda República Polonesa" in i["pais"] or re.search(r"[łńśźżąę]", i["nome_pt"])) and i["morte"] and 1939 <= ano(i["morte"]) <= 1945:
        gm = [("beato", "1999-06-13", "108 Mártires da Segunda Guerra Mundial (regra: mártir polonês de 1939-1945)")]
    if gm:
        st_, d_, gn = gm[0]; i["situacao"] = st_; i["status_data"] = d_; i["confianca"] = "media"
        i["observacao"] = (i["observacao"] or "").replace("santo no Wikidata sem data de canonização e fora das listas de canonização", "situação tirada do grupo " + gn)
        incertos["santo no Wikidata, morto depois de 1900, fora das listas de canonização (confiança baixa)"] -= 1
        incertos["santo duvidoso resolvido pela situação do grupo a que pertence"] += 1
        continue
    gs = [por_qid[p] for p in i["_partes"] if p in por_qid and por_qid[p]["pessoas"] and por_qid[p]["situacao"] in ("santo", "beato")]
    if gs:
        g = gs[0]; i["situacao"] = g["situacao"]; i["status_data"] = g["status_data"]; i["confianca"] = "media"
        i["observacao"] = (i["observacao"] or "").replace("santo no Wikidata sem data de canonização e fora das listas de canonização", "situação tirada do grupo " + g["nome_pt"])
        incertos["santo no Wikidata, morto depois de 1900, fora das listas de canonização (confiança baixa)"] -= 1
        incertos["santo duvidoso resolvido pela situação do grupo a que pertence"] += 1
# ---------- linhas da Wikipédia sem QID: casar por nome, senão entrada nova ----------
idx = collections.defaultdict(list)
def normas(t): return {norm(t), norm((t or "").replace("-", ""))} - {""}
for i in itens:
    ks = set()
    for t in [i["nome_pt"], i.get("nome_original")] + i.get("_chaves", []): ks |= normas(t)
    for n in ks: idx[n].append(i)
def casa(nome, morte):
    c = []
    for n in normas(nome):
        for i in idx.get(n, []):
            if i not in c: c.append(i)
    if morte: c = [i for i in c if ano(i["morte"]) is None or abs(ano(i["morte"]) - int(morte)) <= 2]
    return c[0] if len(c) == 1 else None
novos_wp = []
SIT = {"santo": 0, "beato": 1, "veneravel": 2}
agrup = {}
for r in wp_sem_qid:
    if r["status"] is None: continue
    if r["data"] and len(r["data"]) == 10 and r["data"] > HOJE:
        incertos["linha da Wikipédia com cerimônia futura (fica de fora até acontecer)"] += 1; continue
    if r["pagina"] == "List of Catholic saints" and not r["grupo"]:
        continue
    nome = re.sub(ABREV, "", re.sub(r"\s+", " ", r["nome"]).strip()).strip(" .,")
    i = casa(nome, r["morte"]) if not r["grupo"] else None
    if i:
        st = evid_wp([r])
        for s, d in st.items():
            if SIT.get(s, 9) < SIT.get(i["situacao"], 9):
                i["situacao"] = s; i["status_data"] = d
            elif s == i["situacao"] and d and not i["status_data"]: i["status_data"] = d
        u = WPURL(r["pagina"])
        if u not in i["fontes"]: i["fontes"].append(u)
        continue
    st = evid_wp([r])
    if not st: continue
    s = min(st, key=lambda k: SIT.get(k, 9)); d = st[s]
    chave = (norm(nome), (r["morte"] or "")[:4])
    if chave in agrup:
        e0 = agrup[chave]
        if SIT[s] < SIT[e0["situacao"]]: e0["situacao"] = s; e0["status_data"] = d
        u = WPURL(r["pagina"])
        if u not in e0["fontes"]: e0["fontes"].append(u)
        continue
    nome_t = re.sub(r"\s*(?:&|and)\s+(\d+)\s+(?:[Cc]ompanions)", r" e \1 companheiros", nome)
    nome_t = re.sub(r"\s*(?:&|and)\s+[Cc]ompanions", " e companheiros", nome_t)
    g = r["grupo"]
    ent = dict(qid=None, nome_pt=tira_titulo(nome_t), nome_original=nome, situacao=s, status_data=d, festa_mmdd=None, data_de=None,
               nasc=r["nasc"], morte=r["morte"], pais=[], ordem=None, pessoas=(g if g and g > 0 else None), img_commons=None, wiki_pt=None,
               wiki_en=WPURL(r["alvo"]) if r["alvo"] and T2Q.get(r["alvo"]) else None, fontes=[WPURL(r["pagina"])], confianca="media",
               martirologio=None, observacao=("grupo" + ("" if g and g > 0 else ", número de pessoas não informado")) if g else "sem item no Wikidata; nome como na lista em inglês",
               _partes=[], _rel=[], _sinais=["lista da Wikipédia"], _ort=False, _grupo=bool(g))
    if g:
        lider = re.split(r"\s+(?:e|&|and)\s+\d*\s*(?:companheiros|[Cc]ompanions)", nome_t)[0]
        prim = set(norm(lider).split())
        dup = [i for i in itens if i["situacao"] == s and i["status_data"] == d and prim and len(prim & set(norm(i["nome_pt"] + " " + (i.get("nome_original") or "")).split())) >= min(2, len(prim))]
        if dup:
            dup[0]["pessoas"] = dup[0]["pessoas"] or (g if g > 0 else None)
            u = WPURL(r["pagina"])
            if u not in dup[0]["fontes"]: dup[0]["fontes"].append(u)
            continue
        li = casa(lider, r["morte"])
        if li and SIT.get(li["situacao"], 9) < SIT[s] and (g or 0) <= 3:
            continue
        if li and li["situacao"] == s and not li["pessoas"]:
            if not li["status_data"]: li["status_data"] = d
            li["observacao"] = "; ".join(filter(None, [li["observacao"], f"{'canonizado' if s == 'santo' else 'beatificado'} com o grupo \"{ent['nome_pt']}\""]))
    agrup[chave] = ent; novos_wp.append(ent)
itens += novos_wp

# ---------- membros de grupo sem artigo: dobrar no grupo ----------
grupos_qid = {i["qid"]: i for i in itens if i["qid"] and i["pessoas"]}
dobrados = 0; remover = set()
for i in itens:
    if not i["qid"] or i["pessoas"] or i["wiki_pt"] or i["wiki_en"]: continue
    gs = [grupos_qid[p] for p in i["_partes"] if p in grupos_qid]
    if gs:
        remover.add(id(i)); dobrados += 1
        g = gs[0]; g.setdefault("_membros", []).append(i["qid"])
grupos_data = collections.defaultdict(list)
for i in itens:
    if i.get("_grupo") or (i["pessoas"] and i["pessoas"] > 2):
        if i["status_data"] and len(str(i["status_data"])) == 10: grupos_data[(i["situacao"], i["status_data"])].append(i)
dob_data = 0
for i in itens:
    if id(i) in remover or not i["qid"] or i["pessoas"] or i["wiki_pt"] or i["wiki_en"]: continue
    if i["situacao"] not in ("beato", "santo") or not i["status_data"]: continue
    gs = grupos_data.get((i["situacao"], i["status_data"]))
    if not gs: continue
    m = ano(i["morte"])
    gs2 = [g for g in gs if not m or not g["morte"] or abs(ano(g["morte"]) - m) <= 6] if m else gs
    if len(gs2) >= 1:
        remover.add(id(i)); dob_data += 1
        g = gs2[0]; g.setdefault("_membros", []).append(i["qid"])
for i in itens:
    if id(i) in remover or i["qid"] or i["pessoas"] or i.get("_grupo") or not i["status_data"]: continue
    gs = grupos_data.get((i["situacao"], i["status_data"]), [])
    tk = {t for t in norm(i["nome_pt"]).split() if len(t) >= 5}
    for g in gs:
        if tk & {t for t in norm(g["nome_pt"] + " " + (g.get("nome_original") or "")).split() if len(t) >= 5}:
            remover.add(id(i)); dob_data += 1; g.setdefault("_membros_nome", []).append(i["nome_pt"]); break
itens = [i for i in itens if id(i) not in remover]
for g in itens:
    if g["pessoas"] is not None and g["pessoas"] < 2:
        n = g.get("nome_original") or g["nome_pt"]
        k = len(re.split(r",\s*|\s+(?:and|e|y|et|und)\s+", n))
        g["pessoas"] = k if k >= 2 else None
for g in itens:
    if g.get("_membros"):
        g["membros_qid"] = g["_membros"]
        if not g["pessoas"]: g["pessoas"] = len(g["_membros"])

# ---------- Brasil ----------
br_count = collections.Counter(); DEBUG = []
BR_GRUPO = {"Santos André de Soveral": "Q10334580", "Beatos Manuel Gómez González e Adílio Daronch": ["Q10324195", "Q9141458"]}
por_qid = {i["qid"]: i for i in itens}
for b in BR:
    nome = b["nome"]
    mg = [v for k, v in BR_GRUPO.items() if nome.startswith(k)]
    if mg:
        alvos = mg[0] if isinstance(mg[0], list) else [mg[0]]
        for qq in alvos:
            i = por_qid.get(qq)
            if not i: continue
            i["brasil"] = True; i["situacao"] = b["situacao_oficial"]
            m = re.search(r"(\d{4}-\d{2}-\d{2})", b["data_status"] or "")
            if m: i["status_data"] = m.group(1)
            if b["fonte_url"] not in i["fontes"]: i["fontes"].append(b["fonte_url"])
            i["confianca"] = "alta"
            if len(alvos) == 1:
                i["nome_pt"] = nome; g = re.search(r"\((\d+) pessoas\)", nome); i["pessoas"] = int(g.group(1)) if g else i["pessoas"]
        br_count["grupo brasileiro casado à mão"] += 1
        if "Q10334580" in alvos and "Q30880522" in por_qid:
            por_qid["Q30880522"]["_remover"] = True; por_qid["Q10334580"].setdefault("membros_qid", []); 
        continue
    base = re.sub(r"\s*\(.*?\)", "", nome); base = re.split(r",\s*no século", base)[0]
    base = tira_titulo(base.strip())
    sit = b["situacao_oficial"]
    m = re.search(r"(\d{4}-\d{2}-\d{2}|\d{4})", b["data_status"] or "")
    sd = m.group(1) if m and sit != "servo" else None
    obs_s = (b["data_status"] if sit == "servo" and b["data_status"] else None)
    variantes = [base] + [tira_titulo(v) for v in re.findall(r"\((.*?)\)", nome) if not re.search(r"pessoas", v)]
    vn = [norm(v) for v in variantes if len(norm(v).split()) >= 2]
    RANK = {"santo": 0, "beato": 1, "veneravel": 2, "servo": 3}
    def chaves(i): return {norm(k) for k in [i["nome_pt"], i.get("nome_original")] + i.get("_chaves", []) if k and len(norm(k).split()) >= 2}
    def aceita(i): return RANK[i["situacao"]] >= RANK[sit] and not i.get("brasil")
    eh_grupo = bool(re.search(r"\(\d+ pessoas\)", nome))
    if eh_grupo: vn = []
    cand = [i for i in itens if aceita(i) and chaves(i) & set(vn)]
    if len(cand) > 1: cand = [i for i in cand if "Brasil" in i["pais"] or i["situacao"] == sit] or cand
    if len(cand) != 1:
        cand = [i for i in itens if aceita(i) and any(set(v.split()) <= set(k.split()) or set(k.split()) <= set(v.split()) for v in vn[:1] for k in chaves(i) if norm(base) == v)]
        if len(cand) > 1: cand = [i for i in cand if "Brasil" in i["pais"] and i["situacao"] == sit]
    if len(cand) != 1:
        import difflib
        cand = [i for i in itens if aceita(i) and "Brasil" in i["pais"] and any(difflib.SequenceMatcher(None, k, v).ratio() >= 0.85 for v in vn for k in chaves(i))]
        if len(cand) == 1: DEBUG.append((nome, cand[0]["qid"], ["fuzzy"] + sorted(chaves(cand[0]))))
    elif len(cand) == 1: DEBUG.append((nome, cand[0]["qid"], sorted(chaves(cand[0]))))
    alvo = None
    if len(cand) == 1: alvo = cand[0]
    else:
        ws = [] if eh_grupo else [x for x in W if x["qid"] not in por_qid and set(norm(base).split()) and norm(x["nome"]) == norm(base)]
        if not ws and not eh_grupo:
            import difflib
            ws = [x for x in W if x["qid"] not in por_qid and "Brasil" in x["pais"] and set(x["status"]) & {"servo", "veneravel"} and any(difflib.SequenceMatcher(None, norm(x["nome"]), norm(v)).ratio() >= 0.85 for v in variantes if len(norm(v).split()) >= 2)]
            if len(ws) == 1: DEBUG.append((nome, ws[0]["qid"], ["fuzzy " + ws[0]["nome"]]))
        if len(ws) == 1:
            x = ws[0]
            alvo = dict(qid=x["qid"], nome_pt=base, nome_original=None, situacao=sit, status_data=sd, festa_mmdd=None, data_de=None,
                        nasc=x["nasc"][:10] if x["nasc"] and not x["nasc"].startswith("http") else None, morte=x["morte"] if x["morte"] and not x["morte"].startswith("http") else None,
                        pais=x["pais"], ordem=(E.get(x["qid"], {}).get("ord") or [None])[0], pessoas=None,
                        img_commons=("File:" + urllib.parse.unquote(x["img"].rsplit("/", 1)[-1]).replace("_", " ")) if x["img"] else None,
                        wiki_pt=x["pt"], wiki_en=x["en"], fontes=[f"https://www.wikidata.org/wiki/{x['qid']}"], confianca="alta", martirologio=None, observacao=None, _partes=[], _rel=[], _sinais=[], _ort=False)
            if alvo["morte"] and len(alvo["morte"]) == 10 and not alvo["morte"].endswith("-01-01"): alvo["festa_mmdd"] = alvo["morte"][5:]; alvo["data_de"] = "falecimento"
            itens.append(alvo); br_count["casado com Wikidata (servo/venerável)"] += 1
    if alvo is None:
        g = re.search(r"\((\d+) pessoas\)", nome)
        alvo = dict(qid=None, nome_pt=tira_titulo(nome), nome_original=None, situacao=sit, status_data=sd, festa_mmdd=None, data_de=None, nasc=None, morte=None,
                    pais=["Brasil"], ordem=None, pessoas=int(g.group(1)) if g else None, img_commons=None, wiki_pt=None, wiki_en=None, fontes=[],
                    confianca=None, martirologio=None, observacao=None, _partes=[], _rel=[], _sinais=[], _ort=False)
        itens.append(alvo); br_count["entrada nova (sem Wikidata)"] += 1
    else:
        br_count["casado com entrada existente"] += 1 if alvo.get("_brasil_novo") is None and alvo in itens[:-1] else 0
    alvo["situacao"] = sit
    if sd: alvo["status_data"] = sd
    if b["fonte_url"] and b["fonte_url"] not in alvo["fontes"]: alvo["fontes"].append(b["fonte_url"])
    alvo["confianca"] = "alta" if b["confirmado"] else "media"
    alvo["brasil"] = True
    alvo["nome_pt"] = tira_titulo(re.split(r",\s*no século", nome)[0]) if not re.search(r"pessoas\)", nome) else nome
    o = [b["observacao"]] if b["observacao"] else []
    if obs_s: o.append("servo de Deus: " + obs_s)
    if alvo["observacao"]: o.insert(0, alvo["observacao"])
    alvo["observacao"] = "; ".join(o) or None
    if b.get("no_app_id"): alvo["id_no_app"] = b["no_app_id"]

itens = [i for i in itens if not i.get("_remover")]
for i in itens:
    if i["status_data"] and str(i["status_data"]).endswith("-01-01"): i["status_data"] = str(i["status_data"])[:4]
servos_fora = [i for i in itens if i["situacao"] == "servo" and not i.get("brasil")]
excl["servo de Deus não brasileiro"] += len(servos_fora)
itens = [i for i in itens if not (i["situacao"] == "servo" and not i.get("brasil"))]

# duplicados por QID
vistos = {}; final = []
for i in itens:
    if i["qid"] and i["qid"] in vistos: continue
    if i["qid"]: vistos[i["qid"]] = 1
    final.append(i)
for i in final:
    i["pais"] = [p for p in i["pais"] if p]
    for k in [k for k in i if k.startswith("_")]: i.pop(k)
    if i.get("nome_original") == i["nome_pt"]: i["nome_original"] = None
CAMPOS = ["qid", "nome_pt", "nome_original", "situacao", "status_data", "festa_mmdd", "data_de", "nasc", "morte", "pais", "ordem", "pessoas", "membros_qid",
          "img_commons", "wiki_pt", "wiki_en", "fontes", "confianca", "martirologio", "brasil", "id_no_app", "observacao"]
final = [{k: i.get(k) for k in CAMPOS} for i in final]
final.sort(key=lambda i: (ORDEM.index(i["situacao"]), unicodedata.normalize("NFKD", i["nome_pt"] or "").lower()))
json.dump(final, open(B + "/lista-mestra.json", "w"), ensure_ascii=False, indent=1)
json.dump(DEBUG, open(B + "/net/br_debug.json", "w"), ensure_ascii=False, indent=0)
MOT = {"veneravel?": "'The Venerable' sem decreto católico", "naopessoa": "não é pessoa", "outra religiao": "outra religião", "pos1054": "santo pós-1054 sem sinal católico", "beato ort": "bem-aventurado ortodoxo", "pais ort": "santo pós-1054 de país ortodoxo", "pos1054 fraco": "santo pós-1054 de outra Igreja, só fonte fraca", "outra igreja": "santo só de outra Igreja", "sem data": "santo genérico sem data e sem sinal católico"}
json.dump([dict(motivo=MOT.get(k, k), **v) for k, vs in excl_ex.items() for v in vs], open(B + "/excluidos.json", "w"), ensure_ascii=False, indent=0)
json.dump(dict(excl=excl, excl_ex={k: v[:15] for k, v in excl_ex.items()}, incertos=incertos, dobrados_por_parte=dobrados, dobrados_por_data=dob_data, brasil=br_count), open(B + "/net/stats.json", "w"), ensure_ascii=False, indent=1)
print(len(final), collections.Counter(i["situacao"] for i in final)); print(dict(excl)); print(dict(incertos)); print(dobrados, dob_data, dict(br_count))
