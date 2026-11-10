import json,os,re,time,urllib.request
exec(open('bt_baixar.py').read().split("caps={}")[0].split("from bt_cap import versos")[1])
CAPS={'EST':16,'SIR':51}
vul={}
for l in open('/home/user/app-catolico/fontes/versificacao/vul.vrs'):
    m=re.match(r'^([1-3A-Z]{3}) ((?:\d+:\d+ ?)+)$',l.strip())
    if m: vul[m.group(1)]=len(m.group(2).split())
os.makedirs('pdf1950',exist_ok=True)
completos=set()
for f in os.listdir('bt/caps'):
    d=json.load(open('bt/caps/'+f))
    if d['versos']: completos.add(d['livro'])
falhas=[]
for slug,cod in SLUG.items():
    if cod in completos: continue
    n=CAPS.get(cod,vul[cod])
    for c in range(1,n+1):
        alvo=f'pdf1950/{cod}_{c}.pdf'
        if os.path.exists(alvo): continue
        try:
            req=urllib.request.Request(f'https://bibliatraduzida.com/edicoes/figueiredo/{slug}/{c}.pdf',headers={'User-Agent':'Mozilla/5.0'})
            open(alvo,'wb').write(urllib.request.urlopen(req,timeout=60).read())
        except Exception as e: falhas.append(f'{cod} {c}: {e}')
        time.sleep(0.4)
print('falhas',len(falhas)); print('\n'.join(falhas)); print(len(os.listdir('pdf1950')))
