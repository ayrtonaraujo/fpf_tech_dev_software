def saudacao(usuario = "usuário"):
    print(f'Eai, {(usuario).title()}!')

saudacao()
saudacao("aluno")


def soma (a, b):
    return a + b

print('Soma:',
      soma(int(input('A: ')),
           int(input('B: '))))

