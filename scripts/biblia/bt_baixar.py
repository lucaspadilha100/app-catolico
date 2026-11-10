import re,json,os,sys,time,urllib.request
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from bt_cap import versos
VRS='/home/user/app-catolico/fontes/versificacao/vul.vrs'
SLUG={'genesis':'GEN','exodo':'EXO','levitico':'LEV','numeros':'NUM','deuteronomio':'DEU','josue':'JOS','juizes':'JDG','rute':'RUT','1-samuel':'1SA','2-samuel':'2SA','1-reis':'1KI','2-reis':'2KI','1-cronicas':'1CH','2-cronicas':'2CH','esdras':'EZR','neemias':'NEH','tobias':'TOB','judite':'JDT','ester':'EST','1-macabeus':'1MA','2-macabeus':'2MA','jo':'JOB','salmos':'PSA','proverbios':'PRO','eclesiastes':'ECC','cantico-dos-canticos':'SNG','sabedoria':'WIS','eclesiastico':'SIR','isaias':'ISA','jeremias':'JER','lamentacoes':'LAM','baruc':'BAR','ezequiel':'EZK','daniel':'DAN','oseias':'HOS','joel':'JOL','amos':'AMO','abdias':'OBA','jonas':'JON','miqueias':'MIC','naum':'NAM','habacuc':'HAB','sofonias':'ZEP','ageu':'HAG','zacarias':'ZEC','malaquias':'MAL','mateus':'MAT','marcos':'MRK','lucas':'LUK','joao':'JHN','atos-dos-apostolos':'ACT','romanos':'ROM','1-corintios':'1CO','2-corintios':'2CO','galatas':'GAL','efesios':'EPH','filipenses':'PHP','colossenses':'COL','1-tessalonicenses':'1TH','2-tessalonicenses':'2TH','1-timoteo':'1TI','2-timoteo':'2TI','tito':'TIT','filemon':'PHM','hebreus':'HEB','tiago':'JAS','1-pedro':'1PE','2-pedro':'2PE','1-joao':'1JN','2-joao':'2JN','3-joao':'3JN','judas':'JUD','apocalipse':'REV'}
caps={}
for l in open(VRS):
    m=re.match(r'^([1-3A-Z]{3}) ((?:\d+:\d+ ?)+)$',l.strip())
    if m: caps[m.group(1)]=len(m.group(2).split())
os.makedirs('bt/caps',exist_ok=True); os.makedirs('bt/html',exist_ok=True)
falhas=[]
for slug,cod in SLUG.items():
    for c in range(1,caps[cod]+1):
        alvo=f'bt/caps/{cod}_{c}.json'
        if os.path.exists(alvo): continue
        url=f'https://bibliatraduzida.com/figueiredo/{slug}/{c}/'
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
        try:
            h=urllib.request.urlopen(req,timeout=30).read().decode('utf-8','ignore')
            p=f'bt/html/{cod}_{c}.html'; open(p,'w').write(h)
            json.dump({'livro':cod,'cap':c,'versos':versos(p)},open(alvo,'w'),ensure_ascii=False)
            os.remove(p)
        except Exception as e:
            falhas.append(f'{cod} {c}: {e}')
        time.sleep(0.4)
print('falhas:',len(falhas)); print('\n'.join(falhas[:50]))
print('capítulos:',len(os.listdir('bt/caps')))
