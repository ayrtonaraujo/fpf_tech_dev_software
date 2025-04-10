nome = input("Digite seu nome:" )
idade = int(input("Digite sua idade: "))

if idade >= 18:
    print(f'Olá {nome}, você pode votar.')
    adulto = True
elif idade == 16 or idade == 17:
    print(f'Olá {nome}, você pode votar.')
    adulto = False
else: 
   print(f'Olá {nome}, você não pode votar.')
   adulto = False

print(adulto)
