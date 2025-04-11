total_pessoas = int(input("Total pessoas: "))
gasto_pessoal = []

for i in range(0,total_pessoas):
    gasto_pessoal.append(int(input(f'Quanto o {i+1}º gastou? ')))
    
conta_total = sum(gasto_pessoal)
divisao_conta = conta_total/total_pessoas
print()
for i, j in enumerate(gasto_pessoal):
    print(f'O {i+1}º cliente deve pagar: R$ {j:.2f}')


print(f'\nTotal: R$ {conta_total:.2f}\nDivisão: R$ {divisao_conta:.2f}')