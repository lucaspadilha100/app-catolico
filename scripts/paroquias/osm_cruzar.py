import json, gzip, re, unicodedata, math, sys, collections
nossas=json.load(open(sys.argv[1])); osm=json.load(gzip.open(sys.argv[2],'rt'))
PARAR={'igreja','paroquia','capela','comunidade','matriz','santuario','catedral','basilica','menor','de','da','do','das','dos','e','a','o','em','na','no','area','pastoral','missionaria','quase','paroquial','reitoria','nucleo','capelania','catolica','igrejinha','santissima','santissimo'}
TROCA={'n':'nossa','sra':'senhora','sr':'senhor','nsa':'nossa senhora','ns':'nossa senhora','sta':'santa','sto':'santo','s':'sao','pe':'padre','stmo':'santissimo','sma':'santissima','sagrada':'sagrado'}
def norm(t):
    t=unicodedata.normalize('NFKD',t or '').encode('ascii','ignore').decode().lower()
    t=re.sub(r"[^a-z0-9 ]"," ",t)
    out=[]
    for w in t.split():
        w=TROCA.get(w,w)
        out.extend(w.split())
    return frozenset(w for w in out if w not in PARAR and not w.isdigit())
def dist(a,b,c,d):
    R=6371; p=math.pi/180
    x=(d-b)*p*math.cos((a+c)/2*p); y=(c-a)*p
    return R*math.hypot(x,y)
# grade de 0,25 grau
grade=collections.defaultdict(list)
for o in osm:
    o['k']=norm(o['nome'])
    o['k2']=norm(o['outros'])
    if not o['k'] and not o['k2']: continue
    grade[(int(o['lat']*4),int(o['lng']*4))].append(o)
def perto(lat,lng,r):
    c=int(lat*4),int(lng*4); n=int(r/27)+1
    for i in range(-n,n+1):
        for j in range(-n,n+1):
            for o in grade.get((c[0]+i,c[1]+j),()):
                dd=dist(lat,lng,o['lat'],o['lng'])
                if dd<=r: yield o,dd
SOBRA={'apostolo','operario','arcanjo','martir','evangelista','apostolos','virgem','maria'}
def casa(k,o):
    for ko in (o['k'],o['k2']):
        if not ko: continue
        if k==ko: return True
        menor,maior=(k,ko) if len(k)<=len(ko) else (ko,k)
        if len(menor)>=2 and menor<=maior and (maior-menor)<=SOBRA: return True
    return False
por_id={n['id']:n for n in nossas}
def tipo_ok(eh_matriz,nome,dd):
    s=unicodedata.normalize('NFKD',nome).encode('ascii','ignore').decode().lower()
    if eh_matriz: return dd<=8 and not any(w in s for w in ('capela','comunidade'))
    return not any(w in s for w in ('paroquia','matriz','catedral','santuario','basilica'))
alvos=[]
for n in nossas:
    if n['estado'] in ('exato','capela_mapa'): continue
    if n['matriz'] is None:
        if n['estado']=='centro': ref=(float(n['lat']),float(n['lng'])); raio=25
        else: continue
    else:
        m=por_id.get(n['matriz'])
        if not m or m['lat'] is None: continue
        ref=(float(m['lat']),float(m['lng'])); raio=25 if m['estado']=='centro' else 15
    k=norm(n['nome'])
    if not k: continue
    alvos.append((n,ref,raio,k))
# nomes repetidos entre as nossas na mesma área: ambíguos
achados={}
for n,ref,raio,k in alvos:
    eh_matriz=n['matriz'] is None
    cands=[(o,dd) for o,dd in perto(ref[0],ref[1],raio) if casa(k,o) and tipo_ok(eh_matriz,o['nome'],dd)]
    if not cands: continue
    o0=cands[0][0]
    if any(dist(o0['lat'],o0['lng'],o['lat'],o['lng'])>0.3 for o,_ in cands[1:]): continue
    achados[n['id']]=(o0,cands[0][1],k,ref,raio)
# uma igreja do OSM para uma nossa só; e nenhuma outra nossa com o mesmo nome perto
uso=collections.Counter((round(v[0]['lat'],3),round(v[0]['lng'],3)) for v in achados.values())
# todas as nossas (inclusive as exatas) com o mesmo nome perto do ponto do OSM
idx=collections.defaultdict(list)
for n in nossas:
    idx[norm(n['nome'])].append(n)
saida=[]
for nid,(o,dd,k,ref,raio) in achados.items():
    if uso[(round(o['lat'],3),round(o['lng'],3))]>1: continue
    outras=0
    for n2 in idx[k]:
        if n2['id']==nid: continue
        pt=n2['lat'] if n2['lat'] is not None else None
        base=n2 if pt is not None else por_id.get(n2['matriz'] or '',{})
        if base.get('lat') is None: continue
        if dist(float(base['lat']),float(base['lng']),o['lat'],o['lng'])<=raio: outras+=1
    if outras: continue
    n=por_id[nid]
    saida.append({'id':nid,'nome':n['nome'],'cidade':n['cidade'],'uf':n['uf'],'estado':n['estado'],'matriz':n['matriz'],'osm':o['id'],'osm_nome':o['nome'],'lat':o['lat'],'lng':o['lng'],'dist_ref':round(dd,1)})
json.dump(saida,open(sys.argv[3],'w'),ensure_ascii=False,indent=0)
c=collections.Counter(('matriz' if s['matriz'] is None else 'capela') for s in saida)
print(len(osm),'igrejas no OSM;',len(alvos),'alvos;',len(saida),'achadas',c)
