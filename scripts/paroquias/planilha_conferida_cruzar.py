import csv,json,re,unicodedata,math,sys,collections
S=sys.argv[1]
def norm(s):
    s=unicodedata.normalize("NFD",(s or "").lower()); s="".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9 ]"," ",s)
GEN={"paroquia","capela","igreja","comunidade","matriz","de","da","do","das","dos","e","nossa","senhora","sra","ns","santuario","catedral","area","pastoral","catolica","sao","santo","santa","n","s","antiga","conj","bairro","metropolitana"}
def toks(s): return {t for t in norm(s).split() if t not in GEN and len(t)>2}
def dist(a,b,c,d):
    if None in (a,b,c,d): return None
    return math.hypot((a-c)*111,(b-d)*111*math.cos(math.radians(a)))
COL={"Seg":1,"Ter":2,"Qua":3,"Qui":4,"Sex":5,"Sab":6,"Dom":0}
SECUND=re.compile(r"(capela|comunidade|igreja|praca|centro|educandario|seminario|provincia|mosteiro|cemiterio|oratorio)")
db={uf:json.load(open(f"{S}/db-{uf}.json")) for uf in ("RN","RR")}
linhas=list(csv.DictReader(open(f"{S}/planilha-amigo.csv",encoding="utf-8-sig")))

def casar(r,familia):
    uf=r["Estado"].strip(); cid=norm(r["Cidade"]).strip()
    try: lat=float(r["latitude"]); lng=float(r["longitude"])
    except: lat=lng=None
    insta=(r["Redes Sociais/Site"] or "").strip().lstrip("@").lower()
    secundaria=bool(SECUND.match(norm(r["Nome da Instituição"]).strip()))
    t1=toks(r["Nome da Instituição"])
    fam=familia.get(insta)
    cands=[]
    for p in db.get(uf,[]):
        if norm(p["cidade"]).strip()!=cid: continue
        t2=toks(p["nome"]+" "+(p.get("bairro") or ""))
        if t1:
            sim=len(t1&t2)/max(1,len(t1))
            if not (t1 & toks(p["nome"])): continue
        else:
            limpa=lambda x: re.sub(r"\b(paroquia|capela|igreja|de|da|do|das|dos)\b"," ",norm(x)).split()
            sim=1.0 if limpa(r["Nome da Instituição"])==limpa(p["nome"]) else 0
        if sim<0.5: continue
        if secundaria and p["matriz_id"] is None and p["tipo"] in ("paroquia","catedral","basilica","quase_paroquia","area_pastoral","area_missionaria") and not toks(p["nome"])<=t1: continue
        if fam and secundaria and p["id"]!=fam and p["matriz_id"]!=fam: continue
        dd=dist(lat,lng,p["lat"],p["lng"])
        if dd is not None and dd>30: dd=None
        ig=(p.get("instagram") or "").lower().lstrip("@")
        sc=sim*2+(1 if dd is not None and dd<0.5 else 0.4 if dd is not None and dd<2 else 0)+(0.3 if insta and ig==insta else 0)+(0.5 if fam and p["matriz_id"]==fam else 0)
        cands.append((round(sc,2),p,dd))
    cands.sort(key=lambda x:-x[0])
    melhor=cands[0] if cands and cands[0][0]>=1.0 else None
    return melhor,cands,lat,lng,insta,secundaria

familia={}
for r in linhas:
    melhor,_,_,_,insta,sec=casar(r,{})
    if melhor and not sec and melhor[1]["matriz_id"] is None and insta: familia.setdefault(insta,melhor[1]["id"])

out=[]
for r in linhas:
    melhor,cands,lat,lng,insta,sec=casar(r,familia)
    plan={}
    for k,d in COL.items():
        for h in re.findall(r"\d{1,2}:\d{2}",r[k] or ""): plan.setdefault(d,set()).add(h.zfill(5))
    item={"nome":r["Nome da Instituição"],"cidade":r["Cidade"],"uf":r["Estado"].strip(),"endereco":r["Endereço"],"telefone":r["Telefone"],"instagram":r["Redes Sociais/Site"],"obs":r["Flags"],"lat":lat,"lng":lng,"planilha":{str(d):sorted(v) for d,v in plan.items()},"familia":familia.get(insta)}
    if melhor:
        sc,p,dd=melhor
        seg=cands[1][0] if len(cands)>1 else 0
        bd={}
        for h in p["horarios"]:
            if h["tipo"]=="missa" and not h["semanas"] and not h["data"]: bd.setdefault(h["dia_semana"],set()).add(h["hora"][:5])
        item.update({"id":p["id"],"nome_app":p["nome"],"tipo":p["tipo"],"matriz_id":p["matriz_id"],"pontuacao":sc,"duvida":seg>=sc-0.3,"dist_km":None if dd is None else round(dd,2),"app":{str(d):sorted(v) for d,v in bd.items()},"verificada":p["verificada"] or bool(p["conferida_em"]),"endereco_app":p["endereco"],"lat_app":p["lat"],"lng_app":p["lng"],"outros_app":[h for h in p["horarios"] if h["tipo"]!="missa" or h["semanas"] or h["data"]]})
        a={int(k):set(v) for k,v in item["app"].items()}; b={int(k):set(v) for k,v in item["planilha"].items()}
        item["situacao"]="sem horario na planilha" if not b else "igual" if a==b else "app sem horario" if not a else "diferente"
    else:
        item["situacao"]="nao achada no app"; item["candidatos"]=[(c[0],c[1]["nome"]) for c in cands[:3]]
    out.append(item)
json.dump(out,open(f"{S}/cruzamento.json","w"),ensure_ascii=False,indent=1)
print(collections.Counter((x["uf"],x["situacao"]) for x in out))
print("duvidas",[ (x["nome"],x["nome_app"]) for x in out if x.get("duvida")])
