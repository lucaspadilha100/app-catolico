#!/bin/bash
# dia.sh AAAA-MM-DD [reel-falha]: gera o dia em .ig-sim/ (imagens e Reels, como no GitHub) e publica cada horário numa API do Instagram de mentira.
set -e
cd "$(git rev-parse --show-toplevel)"
D=$1; F=scripts/instagram/simular/instagram-falso${2:+-$2}.mjs
[ -f ".ig-sim/$D/dia.json" ] || { node scripts/instagram/gerar-do-dia.mjs "$D" ".ig-sim/$D"; ${PYTHON:-python3} scripts/instagram/reel/montar.py ".ig-sim/$D"; }
rm -f ".ig-sim/$D/publicados.json"
erros=0
for s in $(node -e 'import("./scripts/instagram/horarios.mjs").then(m=>console.log(m.HORARIOS.map(h=>h.slot).join(" ")))'); do
  echo "== $s"
  IG_TOKEN=falso IG_USER_ID=1 node --import "./$F" scripts/instagram/publicar.mjs --dia ".ig-sim/$D" --data "$D" --slot "$s" 2>&1 | grep -E "^Publicado|nada para|error|Reels falhou|API:" || true
  [ "${PIPESTATUS[0]}" = 0 ] || erros=$((erros+1))
done
echo "horários com erro: $erros"
