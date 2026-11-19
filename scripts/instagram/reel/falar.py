import asyncio, os, re, subprocess, sys, tempfile, time, wave

VOZ = os.environ.get("VOZ_PIPER", os.path.expanduser("~/.cache/piper/pt_BR-faber-medium.onnx"))
LENTO = 1.32
PAUSA_FRASE = 0.52
PAUSA_VIRGULA = 0.3
VOZ_NEURAL = os.environ.get("VOZ_NEURAL", "pt-BR-AntonioNeural")
RITMO_NEURAL = "-6%"


def partes(texto):
    texto = re.sub(r"[“”\"]", "", texto).strip()
    frases = [f.strip() for f in re.split(r"(?<=[.!?;:])\s+", texto) if f.strip()]
    out = []
    for f in frases:
        if len(f) <= 90:
            out.append(f)
            continue
        atual = ""
        for p in re.split(r"(?<=,)\s+", f):
            if len(atual) + len(p) > 80 and atual:
                out.append(atual.strip())
                atual = p
            else:
                atual = f"{atual} {p}".strip()
        if atual:
            out.append(atual)
    return out


def neural(texto, saida):
    import edge_tts

    with tempfile.TemporaryDirectory() as pasta:
        mp3 = os.path.join(pasta, "fala.mp3")
        for tentativa in range(3):
            try:
                asyncio.run(edge_tts.Communicate(texto, VOZ_NEURAL, rate=RITMO_NEURAL, proxy=os.environ.get("HTTPS_PROXY") or None).save(mp3))
                if os.path.getsize(mp3) > 0:
                    break
            except Exception:
                if tentativa == 2:
                    raise
            time.sleep(3)
        else:
            raise RuntimeError("áudio vazio")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", mp3, "-ac", "1", "-ar", "24000", saida], check=True)


neural_falhou = False


def sintetizar(texto, saida):
    global neural_falhou
    if VOZ_NEURAL != "piper" and not neural_falhou:
        try:
            return neural(texto, saida)
        except Exception as e:
            neural_falhou = True
            print(f"::warning::A voz neural falhou ({e}); a narração sai na voz livre.", file=sys.stderr)
    return piper(texto, saida)


def piper(texto, saida):
    sr, dados = None, b""
    for p in partes(texto):
        with tempfile.NamedTemporaryFile(suffix=".wav") as tmp:
            subprocess.run(
                [sys.executable, "-m", "piper", "-m", VOZ, "--length-scale", str(LENTO), "--sentence-silence", "0", "-f", tmp.name],
                input=p.encode(), capture_output=True, check=True,
            )
            with wave.open(tmp.name) as w:
                sr = w.getframerate()
                dados += w.readframes(w.getnframes())
        dados += b"\x00\x00" * int(sr * (PAUSA_FRASE if p[-1] in ".!?" else PAUSA_VIRGULA))
    with wave.open(saida, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(dados)
