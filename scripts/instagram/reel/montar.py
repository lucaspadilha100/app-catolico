import json, os, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from falar import sintetizar

TRILHA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "trilha.m4a")
T, ANTES, DEPOIS = 0.5, 0.3, 0.7


def duracao(f):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]))


def montar(pasta, nome):
    reel = json.load(open(os.path.join(pasta, f"{nome}.json")))
    quadros = [os.path.join(pasta, q) for q in reel["quadros"]]
    wavs = []
    for i, fala in enumerate(reel["falas"]):
        w = os.path.join(pasta, f"{nome}-fala{i}.wav")
        sintetizar(fala, w)
        wavs.append(w)
    d = [ANTES + duracao(w) + DEPOIS for w in wavs]
    d[-1] = max(d[-1], 4.0)
    inicio = [sum(d[:i]) for i in range(len(d))]
    total = sum(d) + T
    n = len(d)
    args = ["ffmpeg", "-y", "-loglevel", "error"]
    for q, di in zip(quadros, d):
        args += ["-loop", "1", "-framerate", "30", "-t", f"{di + T:.3f}", "-i", q]
    for w in wavs:
        args += ["-i", w]
    args += ["-stream_loop", "-1", "-i", TRILHA]
    fil = [f"[{i}:v]format=yuv420p,setsar=1[v{i}]" for i in range(n)]
    ac = "v0"
    for i in range(1, n):
        fil.append(f"[{ac}][v{i}]xfade=transition=fade:duration={T}:offset={inicio[i]:.3f}[x{i}]")
        ac = f"x{i}"
    for i in range(n):
        ms = int((inicio[i] + ANTES + (T if i else 0)) * 1000)
        fil.append(f"[{n + i}:a]aresample=48000,adelay={ms}|{ms},apad[f{i}]")
    fil.append("".join(f"[f{i}]" for i in range(n)) + f"amix=inputs={n}:normalize=0,atrim=0:{total:.3f}[voz]")
    fil.append(f"[{2 * n}:a]aresample=48000,volume=0.22,atrim=0:{total:.3f},afade=t=in:d=1.5,afade=t=out:st={total - 2.5:.3f}:d=2.5[fundo]")
    fil.append("[voz][fundo]amix=inputs=2:normalize=0,alimiter=limit=0.95[a]")
    saida = os.path.join(pasta, f"{nome}.mp4")
    args += ["-filter_complex", ";".join(fil), "-map", f"[{ac}]", "-map", "[a]", "-c:v", "libx264", "-profile:v", "high", "-preset", "medium", "-crf", "21",
             "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-movflags", "+faststart", "-t", f"{total:.3f}", saida]
    subprocess.run(args, check=True)
    for w in wavs:
        os.remove(w)
    return os.path.basename(saida), round(total, 1)


if __name__ == "__main__":
    pasta = sys.argv[1]
    dia_json = os.path.join(pasta, "dia.json")
    dia = json.load(open(dia_json))
    for item in dia["itens"]:
        if item.get("reel"):
            video, segundos = montar(pasta, item["reel"])
            item["video"] = video
            for q in json.load(open(os.path.join(pasta, f"{item['reel']}.json")))["quadros"]:
                os.remove(os.path.join(pasta, q))
            print(f"{item['slot']}: {video}, {segundos} s")
    json.dump(dia, open(dia_json, "w"), ensure_ascii=False, indent=1)
