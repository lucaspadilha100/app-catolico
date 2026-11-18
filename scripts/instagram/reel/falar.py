import io, os, re, subprocess, sys, wave

VOZ = os.environ.get("VOZ_PIPER", os.path.expanduser("~/.cache/piper/pt_BR-faber-medium.onnx"))
LENTO = 1.32
PAUSA_FRASE = 0.52
PAUSA_VIRGULA = 0.3


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


def sintetizar(texto, saida):
    sr, dados = None, b""
    for p in partes(texto):
        bruto = subprocess.run(
            [sys.executable, "-m", "piper", "-m", VOZ, "--length-scale", str(LENTO), "--sentence-silence", "0", "-f", "/dev/stdout"],
            input=p.encode(), capture_output=True, check=True,
        ).stdout
        with wave.open(io.BytesIO(bruto)) as w:
            sr = w.getframerate()
            dados += w.readframes(w.getnframes())
        dados += b"\x00\x00" * int(sr * (PAUSA_FRASE if p[-1] in ".!?" else PAUSA_VIRGULA))
    with wave.open(saida, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(dados)
