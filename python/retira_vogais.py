vogais = ['a', 'e', 'i', 'o', 'u']
consoantes = 0

entrada = str(input("Palavra: ").strip().lower().replace(" ",""))

print ("Consoantes: ", end='')

for i in entrada:
    if i not in vogais:
        print(i, end='')
        consoantes += 1

qtd_vogais = len(entrada) - consoantes
print(f"\nQtd consoantes: {consoantes}")
print(f"Qtd vogais: {qtd_vogais}")
print(f"Qtd Letras: {len(entrada)}")