import json, os, subprocess, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "reel"))
from falar import sintetizar
pasta = sys.argv[1]
falas = json.load(open(os.path.join(pasta, "falas.json")))
d = []
for i, f in enumerate(falas):
    w = os.path.join(pasta, f"fala{i}.wav"); sintetizar(f, w)
    d.append(float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", w])))
json.dump(d, open(os.path.join(pasta, "duracoes.json"), "w")); print([round(x, 1) for x in d], round(sum(d), 1))
