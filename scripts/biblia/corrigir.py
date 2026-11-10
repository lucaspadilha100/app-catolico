SEPARAR = [
    ('1SA', 1, 10, ' li e fêz um voto', ' li ', '', 'ronaldomelofz: "li" = número 11'),
    ('1SA', 3, 7, ' & 1 tornou ainda', ' & 1 ', 'E ', 'ronaldomelofz: "& 1" = "8 E"; conferir no impresso'),
    ('1SA', 9, 3, ' Tendo êles atravessado', ' ', '', 'ronaldomelofz: número 4 perdido; corte pelo latim (Qui cum transissent)'),
    ('1SA', 16, 10, ' “ J1 E disse Samuel', ' “ J1 ', '', 'ronaldomelofz: "J1" = 11'),
    ('1SA', 17, 6, ' “7a haste', ' “7a ', 'A ', 'ronaldomelofz: "7a" = "7 A"'),
    ('1SA', 17, 10, ' Ouvindo pois Saul', ' ', '', 'ronaldomelofz: número 11 perdido; corte pelo latim (Audiens autem Saul)'),
    ('1SA', 18, 10, ' aliquot libris hace sequuntur.', ' aliquot libris hace sequuntur. Encontra-se na citada Poliglota, e ll ', '', 'ronaldomelofz: nota de rodapé no meio; "ll" = 11'),
    ('1SA', 21, 8, ' * respondeu o pontíiiice', ' * ', '', 'ronaldomelofz: "*" no lugar do número 9'),
    ('1SA', 21, 13, ' ld E disse Aquis', ' ld ', '', 'ronaldomelofz: "ld" = 14'),
    ('1SA', 23, 10, ' Entregar-me-ão pois', ' ', '', 'ronaldomelofz: número 11 perdido; corte pelo latim (si tradent me)'),
]

TROCAR = [
    ('ISA', 7, 14, 'o me~: Senhor', 'o mesmo Senhor', 'imagem da p. 423 do PDF de 1950 (letras apagadas na camada de texto)'),
    ('ISA', 7, 14, 'virgem cc,!.::L~: :t. e dará', 'virgem conceberá, e dará', 'imagem da p. 423 do PDF de 1950'),
    ('ISA', 7, 14, 'o seu no: .:.: Emanuel', 'o seu nome Emanuel', 'imagem da p. 423 do PDF de 1950'),
    ('1SA', 18, 11, 'vêzes. \'', 'vêzes.', 'ronaldomelofz: aspa solta'),
]


def aplicar(livros, aviso=print):
    for cod, c, k, trecho, tirar, pôr, _ in SEPARAR:
        vs = livros[cod][c]
        texto = vs.get(k, '')
        if vs.get(k + 1):
            continue
        i = texto.find(trecho)
        if i < 0:
            aviso(f'corrigir: {cod} {c}:{k} sem o trecho {trecho!r}')
            continue
        resto = texto[i:]
        assert resto.startswith(tirar), (cod, c, k)
        vs[k] = texto[:i].strip()
        vs[k + 1] = (pôr + resto[len(tirar):]).strip()
    for cod, c, k, errado, certo, _ in TROCAR:
        vs = livros[cod][c]
        if errado in vs.get(k, ''):
            vs[k] = vs[k].replace(errado, certo)
        elif certo not in vs.get(k, ''):
            aviso(f'corrigir: {cod} {c}:{k} sem {errado!r}')
