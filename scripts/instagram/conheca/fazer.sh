#!/bin/bash
# fazer.sh <pasta> "<Título>": a pasta tem falas.json (a última fala vai no cartão final) e roteiro.cjs (um passo por fala, menos a última).
# PYTHON: o python com piper-tts==1.8.0; VOZ_PIPER: o pt_BR-faber-medium.onnx (padrão em ~/.cache/piper).
set -e
export LANG=pt_BR.UTF-8 LANGUAGE=pt_BR
[ -f /root/.ccr/ca-bundle.crt ] && export SSL_CERT_FILE=/root/.ccr/ca-bundle.crt
K=$(dirname "$(readlink -f "$0")"); P=$(readlink -f "$1")
PY=${PYTHON:-python3}
[ -f "$P/duracoes.json" ] && [ "$P/duracoes.json" -nt "$P/falas.json" ] || "$PY" "$K/falar_tudo.py" "$P"
NOTA=""; [ -f "$P/exemplo" ] && NOTA="Dados de exemplo"
node "$K/cartoes.cjs" "$P" "$2" "$NOTA"
node "$K/gravar.cjs" "$P"
python3 "$K/tela.py" "$P"
python3 "$K/compor.py" "$P" "$P/reel.mp4"
python3 "$K/folha.py" "$P/reel.mp4" "$P/folha.png"
echo "pronto: $P/reel.mp4 · conferir: $P/folha.png"
