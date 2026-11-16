import json,re,uuid,unicodedata,math,collections,sys
S=sys.argv[1]; TS=sys.argv[2]; SAIDA=sys.argv[3]
ESP=uuid.UUID("6f6b0d4e-2f6a-4c3e-9d1a-5a1b7c2e9f10")
def chave(*p): return str(uuid.uuid5(ESP,"|".join(unicodedata.normalize("NFC",str(x or "").strip().lower()) for x in p)))
def q(s): return "'"+str(s).replace("'","''")+"'"
def norm(s):
    s=unicodedata.normalize("NFD",(s or "").lower()); return "".join(c for c in s if not unicodedata.combining(c))
X=json.load(open(f"{S}/cruzamento.json"))
db={p["id"]:p for uf in ("RN","RR") for p in json.load(open(f"{S}/db-{uf}.json"))}
FONTE="Planilha conferida à mão por colaborador, 16/11/2026"
DIA={"seg":1,"ter":2,"qua":3,"qui":4,"sex":5,"sab":6,"dom":0}

# casos de anotação convertidos à mão (nome da planilha, cidade) -> ajustes
SEMANAS={("Capela de São Mateus Moreira","Natal"):{(5,"19:00"):[1]},
         ("Capela de Santo Antônio","Caicó"):{(0,"08:30"):[2,3,4,5],(6,"19:00"):[1]},
         ("Capela Menino Jesus de Praga","Natal"):{(6,"19:00"):[2]}}
EXTRA={("Paróquia Nossa Senhora do Ó","Serra Negra do Norte"):[("adoracao",4,"16:00",None,""),("adoracao",4,"19:00",None,"")],
       ("Paróquia Santo Estevão Diácono","Caicó"):[("adoracao",4,"13:00",None,"Até 18h")],
       ("Paróquia São Severino Mártir","Timbaúba dos Batistas"):[("adoracao",4,"18:00",None,"")],
       ("Igreja de São Francisco de Assis","Pedra Preta"):[("missa",5,"17:00",[1],"")],
       ("Capela São Mateus (Potengi)","Natal"):[("missa",2,"19:30",[2],"Nas ruas"),("missa",5,"19:00",[1],"")],
       ("Paróquia de Sant’Ana (Soledade II)","Natal"):[("missa",2,"19:30",[4],"Nas ruas")],
       ("Capela São João Evangelista (Soledade I)","Natal"):[("missa",2,"19:30",[1],"Nas ruas"),("missa",5,"16:00",[1],"")],
       ("Capela Santa Luzia (Panorama)","Natal"):[("missa",2,"19:30",[3],"Nas ruas"),("missa",5,"19:00",[1],"")]}
SEM_HORARIO={("Centro Pastoral de Santa Dulce","São Gonçalo do Amarante"),("Mosteiro de Sant'Ana (F.S.A.)","Parnamirim")}

# desempate: duas linhas para a mesma igreja do app -> fica a de endereço mais parecido; a outra vira igreja nova
por_id=collections.defaultdict(list)
for x in X:
    if x.get("id"): por_id[x["id"]].append(x)
def toks(s): return set(re.findall(r"[a-z0-9]{3,}",norm(s)))
for pid,lst in por_id.items():
    if len(lst)<2: continue
    end=toks(db[pid]["endereco"] or "")
    lst.sort(key=lambda x:-len(toks(x["endereco"])&end))
    for x in lst[1:]:
        x["situacao"]="nao achada no app"; x.pop("id")
for x in X:
    if x.get("nome")=="Capela de São José" and x["cidade"]=="São Gonçalo do Amarante" and x.get("id"):
        x["situacao"]="nao achada no app"; x.pop("id")

def centro(cidade,uf):
    pts=[(p["lat"],p["lng"]) for p in db.values() if p["cidade"]==cidade and p["uf"]==uf and p["lat"] is not None]
    if not pts: return None
    pts.sort(); a=sorted(x for x,_ in pts)[len(pts)//2]; b=sorted(y for _,y in pts)[len(pts)//2]; return a,b
def ponto_real(x):
    if x["lat"] is None: return None
    c=centro(x["cidade"],x["uf"])
    if not c: return None
    d=math.hypot((x["lat"]-c[0])*111,(x["lng"]-c[1])*111*math.cos(math.radians(c[0])))
    lim=25 if x["cidade"] in ("Natal","Boa Vista","Parnamirim","São Gonçalo do Amarante","Caicó") else 20
    return (x["lat"],x["lng"]) if d<=lim else None

def horarios(x):
    k=(x["nome"],x["cidade"])
    if k in SEM_HORARIO: return []
    out=[]
    sem=SEMANAS.get(k,{})
    for d,hs in x["planilha"].items():
        for h in hs: out.append(("missa",int(d),h,sem.get((int(d),h)),""))
    out+=EXTRA.get(k,[])
    return out

linhas=["-- RN e RR: planilha conferida à mão por colaborador (16/11/2026), cruzada com o app.","-- Troca as missas semanais onde a planilha diz outra coisa (nunca em paróquia conferida pela secretaria),","-- acrescenta igrejas que faltavam e pontos de mapa conferidos. Pode rodar duas vezes.",""]
trocar,novos_h,novas,pontos,contatos,relatorio=[],[],[],[],[],[]
for x in X:
    if x.get("id"):
        p=db[x["id"]]
        if p["verificada"] or p["conferida_em"]:
            relatorio.append(f"conferida pela secretaria, não mexi: {p['nome']} ({p['cidade']})"); continue
        hs=horarios(x)
        if x["situacao"] in ("diferente","app sem horario") and hs:
            trocar.append(x["id"])
            for t,d,h,s,o in hs: novos_h.append((chave("amigo",x["id"],t,d,h,s,o),x["id"],t,d,s,h,o))
        if p["lat"] is None and ponto_real(x): pontos.append((x["id"],)+ponto_real(x))
        tel=re.sub(r"\D","",x["telefone"] or ""); tel=tel[2:] if tel.startswith("55") and len(tel)>11 else tel
        ig=(x["instagram"] or "").strip().lstrip("@")
        contatos.append((x["id"],tel[:13] if 10<=len(tel)<=11 else "",ig))
    elif x["situacao"]=="nao achada no app":
        nome=re.sub(r"\s*\(([^)]*)\)\s*"," ",x["nome"]).strip(); bairro_par=(re.search(r"\(([^)]*)\)",x["nome"]) or [None,""])[1]
        nome=nome.replace("Nossa Senhora.","Nossa Senhora")
        fam=x.get("familia")
        n=norm(nome)
        tipo="paroquia" if n.startswith("paroquia") else "mosteiro" if n.startswith("mosteiro") else ("capela" if fam else "comunidade")
        if tipo=="paroquia": fam=None
        pid=chave("amigo",x["uf"],x["cidade"],nome)
        diocese=(db[fam]["diocese"] if fam and "diocese" in db[fam] else "")
        pr=ponto_real(x)
        if not pr: relatorio.append(f"igreja nova sem ponto confiável (fica pela cidade/matriz): {nome} ({x['cidade']})")
        tel=re.sub(r"\D","",x["telefone"] or ""); tel=tel if 10<=len(tel)<=11 else ""
        novas.append((pid,nome,tipo,fam,(x["endereco"] or "")[:240],bairro_par[:120],x["cidade"],x["uf"],pr,tel,(x["instagram"] or "").strip().lstrip("@")))
        for t,d,h,s,o in horarios(x): novos_h.append((chave("amigo",pid,t,d,h,s,o),pid,t,d,s,h,o))
    if x["obs"] and (x["nome"],x["cidade"]) not in EXTRA and (x["nome"],x["cidade"]) not in SEMANAS:
        relatorio.append(f"anotação da planilha (não virou horário): {x['nome']} ({x['cidade']}): {x['obs']}")

def lat(v): return "null" if v is None else repr(v)
if novas:
    linhas.append("insert into public.paroquias (id, nome, tipo, matriz_id, endereco, bairro, cidade, uf, lat, lng, telefone, instagram, fonte) values")
    linhas.append(",\n".join(f"  ('{a}', {q(b)}, '{c}', {('null' if not d else repr(d).replace(chr(34),chr(39)))}, {q(e)}, {q(f)}, {q(g)}, '{h}', {lat(i[0] if i else None)}, {lat(i[1] if i else None)}, {q(j)}, {q(k)}, {q(FONTE)})" for a,b,c,d,e,f,g,h,i,j,k in novas))
    linhas.append("on conflict (id) do nothing;\n")
if trocar:
    ids=", ".join(f"'{i}'" for i in sorted(set(trocar)))
    linhas.append(f"delete from public.horarios h using public.paroquias p\nwhere h.paroquia_id = p.id and p.id in ({ids})\n  and h.tipo = 'missa' and h.semanas is null and h.data is null\n  and not p.verificada and p.conferida_em is null;\n")
if novos_h:
    vals=",\n".join(f"  ('{a}'::uuid, '{b}'::uuid, '{c}', {d}::smallint, {('array'+str(e)+'::smallint[]') if e else 'null::smallint[]'}, '{f}'::time, {q(g)})" for a,b,c,d,e,f,g in novos_h)
    linhas.append("insert into public.horarios (id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)\nselect v.id, v.paroquia_id, v.tipo, v.dia_semana, v.semanas, v.hora, v.observacao from (values\n"+vals+"\n) as v(id, paroquia_id, tipo, dia_semana, semanas, hora, observacao)\njoin public.paroquias p on p.id = v.paroquia_id\nwhere not p.verificada and p.conferida_em is null\non conflict (id) do nothing;\n")
if pontos:
    vals=",\n".join(f"  ('{a}'::uuid, {b}, {c})" for a,b,c in pontos)
    linhas.append("update public.paroquias p set lat = v.lat, lng = v.lng\nfrom (values\n"+vals+"\n) as v(id, lat, lng)\nwhere p.id = v.id and p.lat is null and not p.verificada and p.conferida_em is null;\n")
cs=[c for c in contatos if c[1] or c[2]]
if cs:
    vals=",\n".join(f"  ('{a}'::uuid, {q(b)}, {q(c)})" for a,b,c in cs)
    linhas.append("update public.paroquias p set\n  telefone = case when p.telefone = '' then v.telefone else p.telefone end,\n  instagram = case when p.instagram = '' then v.instagram else p.instagram end\nfrom (values\n"+vals+"\n) as v(id, telefone, instagram)\nwhere p.id = v.id and not p.verificada and p.conferida_em is null;\n")
open(f"{SAIDA}/{TS}_dados_rn_rr_planilha_conferida.sql","w").write("\n".join(linhas))
open(f"{S}/relatorio.txt","w").write("\n".join(relatorio)+"\n")
print("trocam missas:",len(set(trocar)),"| horários:",len(novos_h),"| igrejas novas:",len(novas),"| pontos:",len(pontos),"| contatos:",len(cs),"| relatório:",len(relatorio))
