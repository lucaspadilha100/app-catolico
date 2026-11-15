import re, glob, json, sys
M='/home/user/app-catolico/supabase/migrations/'
def tuplas(txt):
    i=0;n=len(txt)
    while True:
        j=txt.find('\n  (',i)
        if j<0: return
        k=j+4; vals=[]; cur=''; 
        while k<n:
            c=txt[k]
            if c=="'":
                k+=1; s=''
                while True:
                    if txt[k]=="'" and k+1<n and txt[k+1]=="'": s+="'"; k+=2; continue
                    if txt[k]=="'": k+=1; break
                    s+=txt[k]; k+=1
                vals.append(s); cur=None
                continue
            if c in ',)':
                if cur is not None and cur.strip(): 
                    v=cur.strip(); vals.append(None if v=='null' else v)
                cur=''
                if c==')': k+=1; break
                k+=1; continue
            if cur is None: cur=''
            cur+=c; k+=1
        yield vals; i=k
def blocos(txt, tabela):
    for m in re.finditer(r'insert into public\.'+tabela+r' \(([^)]*)\) values(.*?);\n', txt, re.S):
        cols=[c.strip() for c in m.group(1).split(',')]
        for t in tuplas('\n'+m.group(2)):
            if len(t)==len(cols): yield dict(zip(cols,t))
igrejas={}; cidade_centro=set(); pontos={}
for f in sorted(glob.glob(M+'*.sql')):
    txt=open(f).read()
    if 'insert into public.paroquias' in txt:
        for r in blocos(txt,'paroquias'):
            igrejas[r['id']]=r
    if 'insert into public.notas_paroquia' in txt:
        for r in blocos(txt,'notas_paroquia'):
            if 'Ponto no mapa aproximado: centro da cidade' in (r.get('texto') or ''): cidade_centro.add(r['paroquia_id'])
    if 'update public.paroquias p set lat' in txt:
        for m in re.finditer(r"\('([0-9a-f-]{36})'::uuid, (-?[0-9.]+), (-?[0-9.]+)\)",txt): pontos[m.group(1)]=(float(m.group(2)),float(m.group(3)))
out=[]
for i,r in igrejas.items():
    lat=r.get('lat'); 
    if i in pontos: lat,lng=pontos[i]; est='capela_mapa'
    elif lat: lng=r.get('lng'); est='centro' if i in cidade_centro else 'exato'
    else: lat=lng=None; est='sem'
    out.append({'id':i,'nome':r['nome'],'tipo':r['tipo'],'matriz':r.get('matriz_id'),'cidade':r['cidade'],'uf':r['uf'],'bairro':r.get('bairro',''),'endereco':r.get('endereco',''),'lat':lat,'lng':lng,'estado':est})
json.dump(out,open(sys.argv[1],'w'),ensure_ascii=False)
import collections; print(len(out), collections.Counter((o['matriz'] is None, o['estado']) for o in out))
