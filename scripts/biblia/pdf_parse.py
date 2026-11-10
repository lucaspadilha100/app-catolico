import re,subprocess,sys
ENCLITICOS={'a','o','as','os','lhe','lhes','me','te','se','nos','vos','la','lo','las','los','no','na','nas','mo','ma','to','ta','lho','lha','lhos','lhas','ei','á','ás','emos','eis','ão','ia','ias','íamos','íeis','iam'}
NOTA=re.compile(r'^\s*\(\s*\d+\s*[)}\]]\s*[A-ZÁÂÃÀÉÊÍÓÔÕÚÇ"“«][A-ZÁÂÃÀÉÊÍÓÔÕÚÇ"“«,.\- ]{3,}')
CABECALHO=re.compile(r'^\s*(-\s*\S{1,5}\s*-\s*)?[A-ZÁÉÍÓÚÂÊÔ1-3][\wÀ-ú~:.]*(\s[\wÀ-ú.]+){0,7}\s+[\dOoIl][\dOoIl\-]*\s*,\s*[\dOoIl][\dOoIl\s,;\-]*$')
ASSINATURA=re.compile(r'-\s*(S\.\s*)?[A-ZÁÉÍÓÚ][\wÀ-ú.]+(\s[\wÀ-ú.]+){0,3}\.\s*$')
CAP=re.compile(r'^\s*C\s*A\s*P\s*[ÍI1L]\s*T\s*U\s*L\s*O\s+([0-9IlO]+)\s*$',re.I)
CAP_UNICO=re.compile(r'^\s*CAP[ÍI]TULO\s+[ÚU]NICO\s*$')
PAGINA=re.compile(r'^\s*[-–—]?\s*[\dlOoIJSsi](\s?[\dlOoIJSsi$~\'"]){0,3}\s*[-–—:.=]*\s*$')
def num(s): return int(s.replace('I','1').replace('l','1').replace('O','0'))
def paginas_do_pdf(caminho):
    import html as H, hashlib
    t=subprocess.run(['pdftotext','-bbox-layout',caminho,'-'],capture_output=True,text=True).stdout
    paginas=[]; chaves=[]
    for pag in re.findall(r'<page.*?</page>',t,re.S):
        linhas=[]
        for m in re.finditer(r'<line xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</line>',pag,re.S):
            x0,y0,x1,y1=map(float,m.groups()[:4])
            texto=' '.join(H.unescape(w) for w in re.findall(r'>([^<]*)</word>',m.group(5))).strip()
            texto=re.sub(r'^[·.\'`•_\-\s’‘“”"]+(?=\d)','',texto)
            if texto: linhas.append([y1-y0,x0,texto,y0,x1])
        for l in list(linhas):
            if not re.fullmatch(r'[\dIlOoSs\'_.•:;,]{1,5}',l[2]) or not re.search(r'\d',l[2]): continue
            par=[m for m in linhas if m is not l and abs(m[3]-l[3])<2.5 and 0<=m[1]-l[4]<40]
            if par:
                m=min(par,key=lambda m:m[1]-l[4]); m[2]=l[2]+' '+m[2]; m[1]=l[1]; linhas.remove(l)
        for l in list(linhas):
            if titulo(l[2]) is not None: continue
            par=[m for m in linhas if m is not l and abs(m[3]-l[3])<5 and 0<=m[1]-l[4]<60 and re.fullmatch(r'[\dIlO]{1,3}\s*[^\w\s]{0,2}',m[2])]
            if par:
                m=par[0]; l[2]=l[2]+' '+m[2]; l[4]=m[4]; l[0]=max(l[0],m[0]); linhas.remove(m)
        linhas=[(h,x,t,y) for h,x,t,y,_ in linhas]
        paginas.append(linhas); chaves.append(hashlib.md5(' '.join(l[2] for l in linhas).encode()).hexdigest())
    alturas=sorted(l[0] for p in paginas for l in p if 4<l[0]<14)
    if not alturas: return []
    a,b=alturas[len(alturas)//10],alturas[(len(alturas)*9)//10]
    for _ in range(30):
        meio=(a+b)/2
        pequenas=[h for h in alturas if h<meio]; grandes=[h for h in alturas if h>=meio]
        if not pequenas or not grandes: break
        a,b=sum(pequenas)/len(pequenas),sum(grandes)/len(grandes)
    corte=(a+b)/2 if b-a>1.2 else 0
    grandes=sorted(h for h in alturas if h>=corte)
    corpo=grandes[len(grandes)//2]
    saida=[]
    for chave,linhas in zip(chaves,paginas):
        saida.append((chave,[])); 
        corpo_pag=[x for h,x,_,_ in linhas if h>=corte and abs(h-corpo)<=0.8]
        if not corpo_pag: continue
        margem=min(corpo_pag)
        pequena=lambda h: h<corte or h<corpo-0.6
        ordem=sorted(linhas,key=lambda l:l[3]); corte_y=None; resumo=False; viu_corpo=False
        for i,(h,x,texto,y) in enumerate(ordem):
            if titulo(texto): resumo=True; continue
            if not pequena(h):
                if len(re.sub(r'[\W_]','',texto))<3: continue
                if PAGINA.match(texto) or re.match(r'^-\s*\S{1,5}\s*-$',texto): continue
                resumo=False; viu_corpo=True; continue
            if resumo or not viu_corpo: continue
            resto=ordem[i:]
            if h<4.5 or len(texto)<12 or not all(pequena(l[0]) for l in resto[1:3]): continue
            peq=sum(1 for l in resto if pequena(l[0]))
            if any(not pequena(l[0]) and l[1]>margem+10 and re.match(r'^[\dIlO]{1,3}\s+\S',l[2]) and not PAGINA.match(l[2]) for l in resto): continue
            if peq>=2 and peq>=0.6*len(resto): corte_y=y-1; break
        topo=min(l[3] for l in linhas)
        for pos,(h,x,texto,y) in enumerate(linhas):
            if corte_y is not None and y>=corte_y: continue
            if CABECALHO.match(texto) and pos<3: continue
            if y<=topo+1 and y<40 and len(texto)<75 and titulo(texto) is False and re.search(r'\d\s*[,;]|\d\s*$',texto) and (not re.match(r'^[\dIlO]{1,3}\s+[A-ZÁÉÍÓÚ]',texto) or re.search(r'[\dIlOi]{1,3}\s*[,;.]\s*[\dIlOi~]{1,3}(\s*[-–]\s*[\dIlOi~]{0,3})?\W{0,3}$',texto)): continue
            if (h<corte or h<corpo-0.6) and titulo(texto) is False: continue
            if texto in ('-','–','—') or PAGINA.match(texto) or re.match(r'^-\s*\S{1,5}\s*-$',texto): continue
            recuo='    ' if x>margem+10 else ''
            saida[-1][1].append(recuo+texto)
    return saida
def linhas_do_pdf(caminho):
    return [l for _,ls in paginas_do_pdf(caminho) for l in ls]

QUEBRA='\u2010'
def juntar(a,b):
    a=a.rstrip()
    if (a.endswith('-') or a.endswith('\u00ad')) and b[:1].islower():
        return a[:-1]+QUEBRA+b
    return a+' '+b

def versos(caminho,cap,unico=False):
    ls=linhas_do_pdf(caminho)
    ini=None; fim=len(ls)
    titulos=[]
    for i,l in enumerate(ls):
        if CAP.match(l) or CAP_UNICO.match(l) or re.match(r'^\s*C\s*A\s*P\s*[ÍI1L]\s*T\s*U\s*L\s*O\b',l,re.I):
            mm=re.search(r'([0-9IlO]{1,3})\s*$',l)
            try: n=num(mm.group(1)) if mm else None
            except ValueError: n=None
            if CAP_UNICO.match(l) or re.search(r'[ÚU]NICO\s*$',l): n=cap
            titulos.append((i,n))
    if titulos:
        i0,n0=titulos[0]
        if n0==cap or (n0 is None and cap!=1):
            ini=i0+1
            if len(titulos)>1: fim=titulos[1][0]
        elif cap==1 or n0==cap+1:
            ini=0; fim=i0
        else:
            ini=i0+1
            if len(titulos)>1: fim=titulos[1][0]
    if ini is None:
        ini=0
    return versos_de_linhas(ls[ini:fim])
def numeros(tok):
    tok=tok.rstrip('.,\'_`:;').lstrip('•')
    if not re.search(r'\d',tok) and len(tok)<2 and tok not in ('S','l','I'): return set()
    if not re.fullmatch(r'[\dOoQDIlitJZzBgSs]{1,3}',tok): return set()
    if not re.search(r'\d',tok) and tok.lower() in {'os','do','so','si','to','lo','io','is','it','ti','di','oi','bo','go','zo','sob','sol','dos','sos','tio','gil','doi','dz'}: return set()
    base=tok.translate(str.maketrans('OoQDIlitJZzBg','0000111132289'))
    opcoes=set()
    for troca in ('5','8','6'):
        x=base.replace('S',troca).replace('s',troca)
        if x.isdigit(): opcoes.add(int(x))
    return opcoes
PALAVRA=re.compile(r'[«"“]?[A-ZÁÉÍÓÚÂÊÔÃÕÀÇ][\wÀ-ú\-]*[,.;:!?]?')
def lixo_inicial(t):
    toks=t.split(' ')
    k=0
    while k<2 and k<len(toks)-1 and (not PALAVRA.fullmatch(toks[k]) or (len(toks[k])==1 and toks[k] not in 'EOAÓÀÉÁÊ')) and len(toks[k])<=3 and PALAVRA.fullmatch(toks[k+1]): k+=1
    return k
def reinicio(ls):
    maior=0
    for i,l in enumerate(ls):
        m3=re.match(r'^\s*1\s([OoIlSs\d])\s',l)
        if m3 and numeros('1'+m3.group(1))&set(range(maior+1,maior+4)): maior+=1; continue
        if maior>5 and re.match(r'^\s*1\s+[A-ZÁÉÍÓÚÂÊÔ]',l): return i
        m=re.match(r'^\s{4}(\d{1,3})\s',l)
        if m: maior=max(maior,int(m.group(1)))
    return None
def versos_de_linhas(ls,total=None):
    segs=[]; atual=None; esperado=1
    def novo(n,t): segs.append([n,t])
    j=reinicio(ls)
    if j is not None: ls=ls[:j]
    for l in ls:
        l=re.sub(r'\s*\(\s*\d+\s*[)}\]]','',l).replace('·','').replace('•','').rstrip()
        l=('    ' if l.startswith('    ') else '')+re.sub(r'\s+',' ',l).strip()
        if not l.strip(): continue
        recuado=l.startswith('    ')
        m=re.match(r'^\s*(\S{1,3})\s+(\S.*)$',l)
        m3=re.match(r'^\s*([\dIli])\s([OoIlSs\d])\s+(\S.*)$',l)
        if recuado and m3 and numeros(m3.group(1)+m3.group(2))&set(range(esperado,esperado+4)) and not numeros(m3.group(1))&set(range(esperado,esperado+4)):
            atual=min(numeros(m3.group(1)+m3.group(2))&set(range(esperado,esperado+4))); novo(atual,m3.group(3).strip()); esperado=atual+1; continue
        m4=re.match(r'^\s*(\S{1,2})\s+(\S{1,3})\s+(\S.*)$',l)
        if m4 and (recuado or (esperado in numeros(m4.group(2)) and re.fullmatch(r'[\dIl]',m4.group(1)))) and not numeros(m4.group(1))&set(range(esperado,esperado+4)) and (not PALAVRA.fullmatch(m4.group(1)) or (len(m4.group(1))==1 and m4.group(1) not in 'EOAÓÀÉÁÊ')) and numeros(m4.group(2))&set(range(esperado,esperado+4)):
            atual=min(numeros(m4.group(2))&set(range(esperado,esperado+4))); novo(atual,m4.group(3).strip()); esperado=atual+1; continue
        if recuado and m:
            cands=numeros(m.group(1))
            alvo=[n for n in sorted(cands) if esperado<=n<=esperado+3]
            if alvo:
                atual=alvo[0]; novo(atual,m.group(2).strip()); esperado=atual+1; continue
            nums=[x[0] for x in segs if x[0] is not None]
            if atual in cands and len(nums)>=2 and nums[-1]==atual and nums[-2]==atual-2 and (total is None or atual<=total):
                for x in reversed(segs):
                    if x[0]==atual: x[0]=atual-1; break
                novo(atual,m.group(2).strip()); esperado=atual+1; continue
        if atual is None:
            if CAP.match(l) or l.strip().isupper() or len(re.findall(r'[A-Za-zÀ-ú]',l))<3: continue
            m1=re.match(r'^\s*[1Il]\s*[:.]?\s+([A-ZÁÉÍÓÚÂÊÔ«"“].*)$',l)
            atual=1; novo(1,m1.group(1) if m1 else l.strip()); esperado=2; continue
        if recuado and segs[-1][1] and len(re.findall(r'[A-Za-zÀ-ú]',l))>=3: novo(None,l.strip())
        else: segs[-1][1]=juntar(segs[-1][1],l.strip())
        while True:
            t=segs[-1][1]
            m2=re.search(r'(?<=[.,;:!?] )'+str(esperado)+r' (?=\S)',t)
            if not m2:
                var=''.join({'1':'[1Il]','0':'[0Oo]','5':'[5S]','6':'[6óG]'}.get(ch,ch) for ch in str(esperado))
                m2=re.search(r'(?<=[.;:!?] )'+var+r'\.? (?=[A-ZÁÉÍÓÚÂÊÔ][a-zà-ú]|[EOA] )',t)
            fimcap=re.search(r'(?<=[.:!?] )1 (?=[A-ZÁÉÍÓÚÂÊÔ])',t) if esperado>5 else None
            if fimcap and (not m2 or fimcap.start()<m2.start()):
                segs[-1][1]=t[:fimcap.start()].strip(); break
            if not m2: break
            segs[-1][1]=t[:m2.start()].strip(); atual=esperado; novo(atual,t[m2.end():]); esperado+=1
    conhecidos=[i for i,(n,_) in enumerate(segs) if n is not None]
    marcos=[(i,segs[i][0]) for i in conhecidos]
    if total and marcos and marcos[-1][1]<total: marcos.append((len(segs),total+1))
    for (i1,n1),(i2,n2) in zip(marcos,marcos[1:]):
        livres=[i for i in range(i1+1,min(i2,len(segs))) if lixo_inicial(segs[i][1]) or not re.fullmatch(r'[a-zà-ú][a-zà-ú\-]{2,}[,.;:]?',segs[i][1].split(' ')[0])]
        falta=n2-n1-1
        if not falta or not livres: continue
        todos=livres
        if len(livres)!=falta:
            livres=[i for i in todos if lixo_inicial(segs[i][1])]
        if len(livres)!=falta:
            livres=[i for i in todos if re.match(r'[«"“]?[A-ZÁÉÍÓÚÂÊÔÃÕÀÇ]',segs[i][1])]
        if len(livres)!=falta: continue
        for k,i in enumerate(livres):
            toks=segs[i][1].split(' ')
            segs[i]=[n1+1+k,' '.join(toks[lixo_inicial(segs[i][1]):])]
    vs={}; atual=None
    for n,t in segs:
        if n is not None: atual=n; vs[n]=t
        elif atual is not None: vs[atual]=juntar(vs[atual],t)
    if total:
        for k in range(2,total+1):
            if vs.get(k): continue
            ant=[j for j in vs if j<k and vs[j]]
            if not ant: continue
            j=max(ant)
            var=''.join({'1':'[1Il]','0':'[0Oo]','5':'[5S]','6':'[6óG]'}.get(ch,ch) for ch in str(k))
            m=None
            for m0 in re.finditer(r'(?<=[.,;:!?"\'~*] )'+var+r'\.? (?=[«"\']?[A-ZÁÉÍÓÚÂÊÔ])',vs[j]):
                if m0.start()>15: m=m0; break
            if m: vs[k]=vs[j][m.end():]; vs[j]=vs[j][:m.start()].strip()
    for k in vs:
        t=re.sub(r'\(\s*\d+\s*[)}\]]','',vs[k])
        t=t.replace('\u00ad ',QUEBRA).replace('\u00ad',QUEBRA).replace('·','').replace('•','').replace(' ,',',')
        t=re.sub(r':(?=[ÊÉ])','',t)
        t=re.sub(r'\bd[.,]([oeaí])\b',r'd\1',t)
        vs[k]=re.sub(r'^[:;,.\'`]+\s*','',re.sub(r'\s+',' ',t).strip())
    return vs
def titulo(l):
    import unicodedata
    s=l.strip()
    if len(s)>24: return False
    z=re.sub(r'\s','',s)
    letras=re.sub(r'[^A-Za-zÀ-ú]','',z)
    dobra=''.join(c for c in unicodedata.normalize('NFD',letras.upper()) if not unicodedata.combining(c))
    if not (re.fullmatch(r'[A-Z]?AP[A-Z]{1,4}L?[A-Z]?[O0N]S?(UNICO)?',dobra) and 6<=len(dobra.replace('UNICO',''))<=10 and re.search(r'AP.{0,2}[TI][A-Z]?[UL]',dobra) and not z[:1].islower()): return False
    if re.search(r'[ÚU]NICO',z,re.I): return 1
    mm=re.search(r'(\d[\dIlO]{0,2}|[IlO]\d{1,2})\W*$',z)
    try: return num(mm.group(1)) if mm else None
    except ValueError: return None
def livro(arquivos,ncaps,aviso=print,totais=None):
    vistas=set(); ls=[]
    for f in arquivos:
        for chave,linhas in paginas_do_pdf(f):
            if chave in vistas: continue
            vistas.add(chave); ls.extend(linhas)
    tit=[(i,titulo(l)) for i,l in enumerate(ls)]
    tit=[(i,n) for i,n in tit if n is not False]
    def proximo(k):
        for _,n in tit[k+1:]:
            if n is not None: return n
        return None
    escolha={}; cap=1; comecou=False; ultimo=-1
    for k,(i,n) in enumerate(tit):
        prox=proximo(k)
        tem_verso=any(re.match(r'^\s{4}[\dIlO]{1,3}\s+\S',x) for x in ls[ultimo+1:i])
        if n==cap and not comecou and cap==1:
            escolha[i]=1; comecou=True; ultimo=i; continue
        if n==cap+1 or (n is None and prox!=cap+1):
            novo=cap+1
        elif n is not None and cap+1<n<=cap+4 and (prox is None or n<prox<=n+4):
            novo=n; aviso(f'capítulos {cap+1}-{n-1} sem título')
        elif prox==cap+2:
            novo=cap+1; aviso(f'título {ls[i].strip()!r} lido como {cap+1}')
        else:
            aviso(f'título {ls[i].strip()!r} ignorado'); continue
        if not tem_verso and novo>1:
            aviso(f'título {ls[i].strip()!r} sem versículos antes'); 
        escolha[i]=novo; cap=novo; comecou=True; ultimo=i
    partes={1:[]}; atual=partes[1]
    for i,l in enumerate(ls):
        if i in escolha:
            if escolha[i]==1: partes[1]=[]; atual=partes[1]
            else: atual=[]; partes[escolha[i]]=atual
            continue
        if titulo(l) is not False: continue
        atual.append(l)
    c=1
    while c<=max(partes):
        p=partes.get(c)
        if p is not None and c+1 not in partes and c+1<=ncaps:
            j=reinicio(p)
            if j is not None: partes[c+1]=p[j:]; partes[c]=p[:j]; aviso(f'capítulo {c+1} separado pelo reinício da numeração')
        c+=1
    if max(partes)!=ncaps: aviso(f'{max(partes)} capítulos achados, esperados {ncaps}')
    tot=totais or {}
    return {c:versos_de_linhas(p,tot.get(c)) for c,p in partes.items()}
if __name__=='__main__':
    v=versos(sys.argv[1],int(sys.argv[2]))
    for k in sorted(v): print(k,v[k])
