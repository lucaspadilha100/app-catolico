"""Lista as paróquias da pesquisa por estado que ficaram sem horário.

Uso: python3 -I scripts/paroquias/sem_horario.py  (grava fontes/paroquias/sem-horario.json)
"""
import json
from pathlib import Path

saida = []
for pasta in sorted(Path("fontes/paroquias").glob("pesquisa-*-2026-11")):
    uf = pasta.name.split("-")[1].upper()
    for arquivo in sorted((pasta / "saida").glob("*.json")):
        for u in json.loads(arquivo.read_text()):
            igrejas = u.get("igrejas") or []
            if any(ig.get("horarios") for ig in igrejas):
                continue
            contatos = u.get("contatos") or {}
            saida.append({
                "uf": uf,
                "arquivo": str(arquivo),
                "nome": u.get("nome", ""),
                "cidade": u.get("cidade", ""),
                "instagram": contatos.get("instagram", ""),
                "site": contatos.get("site", ""),
            })
Path("fontes/paroquias/sem-horario.json").write_text(json.dumps(saida, ensure_ascii=False, indent=1) + "\n")
por_uf = {}
for x in saida:
    por_uf[x["uf"]] = por_uf.get(x["uf"], 0) + 1
print(len(saida), "paróquias sem horário:", dict(sorted(por_uf.items())))
