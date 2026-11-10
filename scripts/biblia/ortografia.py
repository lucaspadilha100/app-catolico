import json, os, re, subprocess, sys

pasta = sys.argv[1]
saida = sys.argv[2] if len(sys.argv) > 2 else "ortografia.json"

freq = {}
maiuscula = {}
for f in os.listdir(pasta):
    d = json.load(open(os.path.join(pasta, f)))
    for cap in d["capitulos"]:
        for t in cap:
            for w in re.findall(r"[^\W\d_]+", t):
                l = w.lower()
                freq[l] = freq.get(l, 0) + 1
                if w[0].isupper():
                    maiuscula[l] = maiuscula.get(l, 0) + 1


def hunspell(palavras):
    r = subprocess.run(["hunspell", "-d", "pt_BR", "-G"], input="\n".join(palavras), capture_output=True, text=True)
    return set(r.stdout.split())


TROCAS = [("ê", "e"), ("ô", "o"), ("éi", "ei"), ("ói", "oi"), ("ü", "u"), ("ôo", "oo"), ("êe", "ee"), ("é", "ê"), ("ó", "ô"), ("ó", "o"), ("é", "e")]


def variantes(w):
    out, fila, vistos, i = [], [w], {w}, 0
    while i < len(fila) and i < 64:
        x = fila[i]
        i += 1
        cands = [x.replace(a, b) for a, b in TROCAS]
        for m in re.finditer("[êô]", x):
            cands.append(x[: m.start()] + ("e" if m.group() == "ê" else "o") + x[m.end():])
        for c in cands:
            if c not in vistos:
                vistos.add(c)
                fila.append(c)
                out.append(c)
    return out


SEM_ACENTO = str.maketrans("áéíóúâêôàèìòù", "aeiouaeoaeiou")
CRASE = {"à", "às", "àquele", "àquela", "àqueles", "àquelas", "àquilo"}


def regra(w):
    if w in CRASE:
        return None
    if re.search(r"(mente|zinh[oa]s?)$", w):
        base = re.sub(r"(mente|zinh[oa]s?)$", "", w)
        if re.search(r"[áéíóúâêôàèìòù]", base):
            return base.translate(SEM_ACENTO) + w[len(base):]
    n = re.sub(r"([éó])i(?=[a-zçãõ]*[aeiouãõ])", lambda m: ("e" if m.group(1) == "é" else "o") + "i", w)
    n = n.replace("ü", "u")
    n = re.sub(r"[èìòù]", lambda m: m.group().translate(SEM_ACENTO), n)
    return n if n != w else None


CONFUSOES = [("rn", "m"), ("cl", "d"), ("ii", "u"), ("c", "e"), ("e", "c"), ("l", "i"), ("i", "l"), ("fw", "ão"), ("tl", "d")]


def ocr(w):
    out = []
    for a, b in CONFUSOES:
        i = w.find(a)
        while i != -1:
            out.append(w[:i] + b + w[i + len(a):])
            i = w.find(a, i + 1)
    return out


palavras = list(freq)
etapa1 = set(palavras)
for w in palavras:
    etapa1.update(variantes(w))
corretas = hunspell(etapa1)

tabela, pendentes = {}, []
for w in palavras:
    rg = regra(w)
    if w in corretas and not rg:
        continue
    ok = [v for v in variantes(w) if v in corretas]
    if w not in corretas and ok:
        tabela[w] = ok[0]
    elif rg:
        tabela[w] = rg
    elif w not in corretas:
        pendentes.append(w)

proprio = {w for w in pendentes if maiuscula.get(w, 0) >= freq[w] * 0.8}
pendentes = [w for w in pendentes if w not in proprio]


def cortes(w):
    for i in range(2, len(w) - 1):
        yield w[:i], w[i:]


etapa2 = set()
for w in pendentes:
    for a, b in cortes(w):
        etapa2.update([a, b])
        etapa2.update(variantes(a))
        etapa2.update(variantes(b))
    for o in ocr(w):
        etapa2.add(o)
        etapa2.update(variantes(o))
corretas |= hunspell(etapa2)


def melhor(x):
    if x in corretas:
        return x
    return next((v for v in variantes(x) if v in corretas), None)


sem = []
for w in pendentes:
    separado, nota = None, 0
    for a, b in cortes(w):
        fa, fb = melhor(a), melhor(b)
        if fa and fb and len(fa) > 1 and len(fb) > 1:
            n = (freq.get(a, 0) + freq.get(fa, 0) + 1) * (freq.get(b, 0) + freq.get(fb, 0) + 1)
            if n > nota:
                nota, separado = n, f"{fa} {fb}"
    conserto = next((m for m in (melhor(o) for o in ocr(w)) if m), None)
    if conserto and (not separado or freq.get(conserto, 0) * 50 >= nota):
        tabela[w] = conserto
    elif separado and nota >= 20:
        tabela[w] = separado
    else:
        sem.append(f"{w} {freq[w]}")

json.dump(tabela, open(saida, "w"), ensure_ascii=False, indent=0, sort_keys=True)
open("sem-solucao.txt", "w").write("\n".join(sorted(sem, key=lambda x: -int(x.split()[-1]))))
print(f"palavras {len(palavras)} · trocas {len(tabela)} · nomes próprios mantidos {len(proprio)} · sem solução {len(sem)}")
