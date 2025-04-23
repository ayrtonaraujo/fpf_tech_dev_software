class Animal:
    def __init__(self, cor,  patas = 4):
        self.patas = patas
        self.cor = cor
        
    def set_patas (self, n):
        self.patas = n        

class Cachorro (Animal):
    def __init__ (self, cor, nome: str, patas = 4):
        super().__init__(cor, patas)
        self.nome = nome
        
    def exibir(self):
        print(f' Nome: {self.nome} | Cor: {self.cor} | Patas: {self.patas}')

pastor_alemao = Cachorro(nome = 'Cerberus', cor = 'Preto')
pastor_alemao.exibir()
pastor_alemao.set_patas(3)
pastor_alemao.exibir()