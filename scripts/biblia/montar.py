import json,os,re,sys
sys.path.insert(0,os.getcwd())
from pdf_parse import versos as versos_pdf
destino='/home/user/app-catolico/fontes/biblia/figueiredo-1950'
os.makedirs(destino,exist_ok=True)
vul={}
for l in open('/home/user/app-catolico/fontes/versificacao/vul.vrs'):
    m=re.match(r'^([1-3A-Z]{3}) ((?:\d+:\d+ ?)+)$',l.strip())
    if m: vul[m.group(1)]=[int(x.split(':')[1]) for x in m.group(2).split()]
CAPS={'EST':16,'SIR':51}
livros={}; origem={}
for f in os.listdir('bt/caps'):
    d=json.load(open('bt/caps/'+f))
    if d['versos']: livros.setdefault(d['livro'],{})[d['cap']]={n:t for n,t in d['versos']}; origem[d['livro']]='transcrição'
if 'PSA' in livros:
    for c,vs in livros['PSA'].items():
        if 0 in vs:
            vs[1]=(vs.pop(0)+' '+vs.get(1,'')).strip()
    from pdf_parse import linhas_do_pdf, juntar
    ls=linhas_do_pdf('pdf1950/PSA_113.pdf'); bis={}; atual=None
    for l in ls:
        mm=re.match(r'^\s*(\d{1,2})\s+(\S.*)$',l)
        if mm and mm.group(2).startswith('Não a nós'): atual=1; bis[1]=mm.group(2); continue
        if atual is None: continue
        if mm and int(mm.group(1))==1: break
        if mm and int(mm.group(1))==atual+1: atual+=1; bis[atual]=mm.group(2); continue
        bis[atual]=juntar(bis[atual],l.strip())
    for k,t in bis.items(): livros['PSA'][113][8+k]=re.sub(r'\(\s*\d+\s*[)}\]]','',t).strip()
    print('Salmo 113 bis:',len(bis),'versículos')
ocr=json.load(open('ocr-reparado.json'))
for f in sorted(os.listdir('pdf1950')):
    cod,c=f[:-4].split('_'); c=int(c)
    if cod in origem and origem[cod]=='transcrição': continue
    livros.setdefault(cod,{})[c]=versos_pdf('pdf1950/'+f,c); origem[cod]='pdf'
import subprocess
quebras=set()
for caps in livros.values():
    for vs in caps.values():
        for t in vs.values():
            quebras.update(re.findall(r'[^\W\d_]+\u2010[^\W\d_]+',t))
juntas={q:q.replace('\u2010','') for q in quebras}
hif={q:q.replace('\u2010','-') for q in quebras}
r=subprocess.run(['hunspell','-d','dic/pt_BR','-G'],input='\n'.join(list(juntas.values())+list(hif.values())),capture_output=True,text=True)
validas=set(w.lower() for w in r.stdout.split())
ENCL={'a','o','as','os','lhe','lhes','me','te','se','nos','vos','la','lo','las','los','lha','lho','lhas','lhos'}
def decide(q):
    j=juntas[q]; h=hif[q]
    if j.lower() in validas: return j
    if h.lower() in validas: return h
    if q.split('\u2010')[1].lower() in ENCL: return h
    return j
troca={q:decide(q) for q in quebras}
for caps in livros.values():
    for vs in caps.values():
        for k in vs:
            vs[k]=re.sub(r'[^\W\d_]+\u2010[^\W\d_]+',lambda m: troca[m.group(0)],vs[k]).replace('\u2010','')
print('quebras de linha decididas:',len(troca))
for cod,n in [('1SA',31),('REV',22)]:
    for c in range(1,n+1):
        if c not in livros.get(cod,{}) or not livros[cod][c]:
            livros.setdefault(cod,{})[c]={k+1:t for k,t in enumerate(ocr[cod][c-1]) if t}
            origem.setdefault(cod,'pdf'); origem[cod+'_ocr']=True
NOMES='Gênesis|Êxodo|Levítico|Números|Deuteronômio|Josué|Juízes|Rute|Reis|Samuel|Paralipômenos|Crônicas|Esdras|Neemias|Tobias|Judite|Ester|Macabeus|Jó|Salmo|Provérbios|Eclesiastes|Cântico dos Cânticos|Cânticos|Sabedoria|Eclesiástico|Isaías|Jeremias|Lamentações|Baruc|Ezequiel|Daniel|Oseias|Oséias|Joel|Amós|Abdias|Jonas|Miqueias|Miquéias|Naum|Habacuc|Sofonias|Ageu|Zacarias|Malaquias|Mateus|Marcos|Lucas|João|Atos dos Apóstolos|Apocalipse|Romanos|Coríntios|Gálatas|Efésios|Filipenses|Colossenses|Tessalonicenses|Timóteo|Tito|Filêmon|Filemom|Hebreus|Tiago|Pedro|Judas'
CAB=re.compile(r'\s*(?:[-–—:.\s]*\d{1,4}\s*[-–—]\s*)?(?:(?:Primeira|Segunda|Terceira|I|II|III|1|2|3)\s+)?(?:Epístola\s+[^,]{0,45}?|Profecia\s+[^,]{0,25}?|Livro\s+[^,]{0,30}?|Lamentações\s+[^,]{0,20}?|S\.\s*\w+\s+)?(?:'+NOMES+r'|\S{1,3}ito)\s+\d{1,3}\s*,\s*\d{1,3}(?:\s*-\s*\d{1,3})?(?:\s*;\s*\d{1,3}\s*,\s*\d{1,3}(?:\s*-\s*\d{1,3})?)*\.?(?=\s|$)')
removidos=0
for cod,caps in livros.items():
    if origem.get(cod)=='transcrição': continue
    for vs in caps.values():
        for k in vs:
            novo,n=CAB.subn(' ',vs[k]); vs[k]=re.sub(r'\s+',' ',novo).strip(); removidos+=n
print('cabeçalhos removidos do texto:',removidos)
relatorio=[]; tot=ok=0
for cod,caps in sorted(livros.items()):
    n=CAPS.get(cod,len(vul.get(cod,[])) or max(caps))
    capitulos=[]
    for c in range(1,n+1):
        vs=caps.get(c,{})
        m=max(vs) if vs else 0
        arr=[]
        for k in range(1,m+1):
            arr.append(vs.get(k,''))
        esperado=vul.get(cod,[]); e=esperado[c-1] if c<=len(esperado) else None
        tot+=1
        vazios=[k+1 for k,t in enumerate(arr) if not t]
        if (e is None or e==m) and not vazios and m>0: ok+=1
        else: relatorio.append(f'{cod} {c} [{origem[cod]}]: {m} versículos (Vulgata {e}); vazios {vazios[:10]}')
        capitulos.append(arr)
    json.dump({'codigo':cod,'origem':origem[cod],'capitulos':capitulos},open(f'{destino}/{cod}.json','w'),ensure_ascii=False,separators=(',',':'))
open('relatorio-montagem.txt','w').write('\n'.join(relatorio))
print(f'{len(livros)} livros; capítulos conferidos: {ok}/{tot}')
