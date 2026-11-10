import re,subprocess,sys
ENCLITICOS={'a','o','as','os','lhe','lhes','me','te','se','nos','vos','la','lo','las','los','no','na','nas','mo','ma','to','ta','lho','lha','lhos','lhas','ei','á','ás','emos','eis','ão','ia','ias','íamos','íeis','iam'}
NOTA=re.compile(r'^\s*\(\s*\d+\s*[)}\]]\s*[A-ZÁÂÃÀÉÊÍÓÔÕÚÇ"“«][A-ZÁÂÃÀÉÊÍÓÔÕÚÇ"“«,.\- ]{3,}')
CABECALHO=re.compile(r'^\s*(-\s*\S{1,5}\s*-\s*)?[A-ZÁÉÍÓÚÂÊÔ1-3][\wÀ-ú~:.]*(\s[\wÀ-ú.]+){0,7}\s+[\dOoIl][\dOoIl\-]*\s*,\s*[\dOoIl][\dOoIl\s,;\-]*$')
ASSINATURA=re.compile(r'-\s*(S\.\s*)?[A-ZÁÉÍÓÚ][\wÀ-ú.]+(\s[\wÀ-ú.]+){0,3}\.\s*$')
CAP=re.compile(r'^\s*C\s*A\s*P\s*[ÍI1L]\s*T\s*U\s*L\s*O\s+([0-9IlO]+)\s*$',re.I)
CAP_UNICO=re.compile(r'^\s*CAP[ÍI]TULO\s+[ÚU]NICO\s*$')
PAGINA=re.compile(r'^\s*[-–—]?\s*[\dlOoIJSsi]{1,4}\s*[-–—]?\s*$')
def num(s): return int(s.replace('I','1').replace('l','1').replace('O','0'))
def linhas_do_pdf(caminho):
    import html as H, collections
    t=subprocess.run(['pdftotext','-bbox-layout',caminho,'-'],capture_output=True,text=True).stdout
    paginas=[]
    for pag in re.findall(r'<page.*?</page>',t,re.S):
        linhas=[]
        for m in re.finditer(r'<line xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</line>',pag,re.S):
            x0,y0,x1,y1=map(float,m.groups()[:4])
            texto=' '.join(H.unescape(w) for w in re.findall(r'>([^<]*)</word>',m.group(5))).strip()
            if texto: linhas.append((y1-y0,x0,texto))
        paginas.append(linhas)
    alturas=sorted(h for p in paginas for h,_,_ in p if 4<h<14)
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
    for linhas in paginas:
        corpo_pag=[x for h,x,_ in linhas if h>=corte and abs(h-corpo)<=0.8]
        if not corpo_pag: continue
        margem=min(corpo_pag)
        for pos,(h,x,texto) in enumerate(linhas):
            if CABECALHO.match(texto) and pos<3: continue
            if h<corte or h<corpo-0.6: continue
            if texto in ('-','–','—') or PAGINA.match(texto) or re.match(r'^-\s*\S{1,5}\s*-$',texto): continue
            recuo='    ' if x>margem+10 else ''
            saida.append(recuo+texto)
    return saida

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
    vs={}; atual=None; esperado=1
    def numeros(tok):
        tok=tok.rstrip('.,')
        if not re.search(r'\d',tok) and len(tok)<2: return set()
        if not re.fullmatch(r'[\dOoQDIlitJZzBgSs]{1,3}',tok): return set()
        base=tok.translate(str.maketrans('OoQDIlitJZzBg','0000111132289'))
        opcoes=set()
        for troca in ('5','8','6'):
            x=base.replace('S',troca).replace('s',troca)
            if x.isdigit(): opcoes.add(int(x))
        return opcoes
    for l in ls[ini:fim]:
        if not l.strip(): continue
        recuado=l.startswith('    ')
        if esperado>5 and re.match(r'^\s*1\s+[A-ZÁÉÍÓÚÂÊÔ]',l): break
        m=re.match(r'^\s*(\S{1,3})\s+(\S.*)$',l)
        if recuado and m:
            cands=numeros(m.group(1))
            alvo=[n for n in sorted(cands) if esperado<=n<=esperado+3]
            if alvo:
                atual=alvo[0]; vs[atual]=m.group(2).strip(); esperado=atual+1; continue
        if atual is None:
            if CAP.match(l) or l.strip().isupper(): continue
            atual=1; vs[1]=l.strip(); esperado=2; continue
        vs[atual]=juntar(vs[atual],l.strip())
        while True:
            m2=re.search(r'(?<=[.,;:!?] )'+str(esperado)+r' (?=\S)',vs[atual])
            fimcap=re.search(r'(?<=[.:!?] )1 (?=[A-ZÁÉÍÓÚÂÊÔ])',vs[atual]) if esperado>5 else None
            if fimcap and (not m2 or fimcap.start()<m2.start()):
                vs[atual]=vs[atual][:fimcap.start()].strip(); break
            if not m2: break
            resto=vs[atual][m2.end():]; vs[atual]=vs[atual][:m2.start()].strip(); atual=esperado; vs[atual]=resto; esperado+=1
    for k in vs:
        t=re.sub(r'\(\s*\d+\s*[)}\]]','',vs[k])
        t=t.replace('\u00ad ',QUEBRA).replace('\u00ad',QUEBRA).replace('·','').replace(' ,',',')
        t=re.sub(r':(?=[ÊÉ])','',t)
        t=re.sub(r'\bd[.,]([oeaí])\b',r'd\1',t)
        vs[k]=re.sub(r'\s+',' ',t).strip()
    return vs
if __name__=='__main__':
    v=versos(sys.argv[1],int(sys.argv[2]))
    for k in sorted(v): print(k,v[k])
