import json,os,re
D='/home/user/ronaldomelofz/abibliasagrada/web/data/livros'
VRS='/home/user/app-catolico/fontes/versificacao/vul.vrs'
M=json.load(open('mapa_livros.json'))
vul={}
for l in open(VRS):
    m=re.match(r'^([1-3A-Z]{3}) ((?:\d+:\d+ ?)+)$',l.strip())
    if m: vul[m.group(1)]=[int(x.split(':')[1]) for x in m.group(2).split()]
LIXO=r'(?:[A-Za-z]{1,2}\s+)?'
def reparar_capitulo(versos):
    vs={v['n']:v['t'] for v in versos}
    maxn=max(vs) if vs else 0
    mudou=True
    while mudou:
        mudou=False
        nums=sorted(vs)
        for k in range(1,max(nums)+2):
            if k in vs: continue
            ant=max((n for n in nums if n<k),default=None)
            if ant is None: continue
            t=vs[ant]
            m=re.search(r'(?:^|(?<=[\s.;:!?]))'+LIXO+str(k)+r'\s+(?=[A-ZÁÉÍÓÚÂÊÔÀ«"])',t)
            if m and m.start()>3:
                vs[ant]=t[:m.start()].strip(); vs[k]=t[m.end():].strip(); mudou=True; break
    return vs
def limpar(t):
    t=re.sub(r'(\w)- (\w)',r'\1\2',t)
    t=re.sub(r'(?<=[a-zà-ú]) (?=[a-zà-ú]{1,3}\b)', ' ', t)
    return re.sub(r'\s+',' ',t).strip()
saida={}; ok=tot=0; problemas=[]
for f,cod in M.items():
    d=json.load(open(f'{D}/{f}.json'))
    caps=[]
    for i,c in enumerate(d['capitulos']):
        vs=reparar_capitulo(c['versiculos'])
        n=max(vs) if vs else 0
        arr=[limpar(vs.get(k,'')) for k in range(1,n+1)]
        caps.append(arr)
        esperado=vul.get(cod,[]); e=esperado[i] if i<len(esperado) else None
        tot+=1
        if e==n and all(arr): ok+=1
        else: problemas.append(f'{cod} {i+1}: {n} (Vulgata {e}); vazios {[k+1 for k,t in enumerate(arr) if not t][:8]}')
    saida[cod]=caps
json.dump(saida,open('ocr-reparado.json','w'),ensure_ascii=False)
print(f'capítulos íntegros: {ok}/{tot}')
open('ocr-problemas.txt','w').write('\n'.join(problemas))
