import re
import sys
from pathlib import Path

LINHA = re.compile(
    r"^  \('([0-9a-f-]{36})', '(?:[^']|'')*', '[a-z_]+', '[0-9a-f-]{36}', '(?:[^']|'')*', '(?:[^']|'')*', '(?:[^']|'')*', '[A-Z]{2}', (-?[0-9.]+), (-?[0-9.]+),",
    re.M,
)


def main():
    origem, destino = Path(sys.argv[1]), Path(sys.argv[2])
    pontos = LINHA.findall(origem.read_text())
    if not pontos:
        print(f"{origem.name}: nenhuma capela com ponto")
        return
    valores = ",\n".join(f"  ('{i}'::uuid, {lat}, {lng})" for i, lat, lng in pontos)
    destino.write_text(
        "update public.paroquias p set lat = v.lat, lng = v.lng\n"
        f"from (values\n{valores}\n) as v(id, lat, lng)\n"
        "where p.id = v.id and p.lat is null and not p.verificada and p.conferida_em is null;\n"
    )
    print(f"{destino.name}: {len(pontos)} capelas com ponto")


if __name__ == "__main__":
    main()
