class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo = saldo
    
    def depositar (self, quantia):
        self.saldo += quantia
        
    def sacar (self, quantia):
        if quantia <= self.saldo:
            self.saldo -= quantia
            return True
        else:
            return False
        
    def exibir_saldo (self):
        print(f'O saldo é de: R$ {self.saldo:.2f}')
        
caixa = ContaBancaria(titular='Ciclano')
caixa.depositar(50)
caixa.exibir_saldo()
caixa.sacar(20)
caixa.exibir_saldo()