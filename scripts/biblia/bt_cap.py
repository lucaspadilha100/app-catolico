import re,html,sys
def versos(path):
    t=open(path,encoding='utf-8',errors='ignore').read()
    out=[]
    for m in re.finditer(r'<p class="verse" id="v-(\d+)" data-v="\d+">(.*?)</p>',t,re.S):
        corpo=re.sub(r'<sup class="fnref".*?</sup>','',m.group(2),flags=re.S)
        corpo=re.sub(r'<span class="vnum">.*?</span>','',corpo,flags=re.S)
        txt=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>','',corpo))).strip()
        out.append((int(m.group(1)),txt))
    return out
if __name__=='__main__':
    for n,t in versos(sys.argv[1])[:int(sys.argv[2]) if len(sys.argv)>2 else 999]: print(n,t)
