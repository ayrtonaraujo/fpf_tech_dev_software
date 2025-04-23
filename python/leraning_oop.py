class Carro:
    rodas = 4 # Atributo de classe
    
    def __init__(self, marca: str, modelo: str, ano: int):
        self.marca = marca # Atributo de instância
        self.ano = ano
        self.modelo = modelo
    
    def exibir (self):
        print(f'Marca: {self.marca} | Modelo: {self.modelo} | Ano: {self.ano}')

    def ligar_carro (self):
        print(f'O carro {self.marca} {self.modelo} ligou.')
    
    def desligar_carro (self):
        print(f'O carro {self.marca} {self.modelo} desligou.')
    
# gol = Carro(marca = 'Volkswagen', modelo = 'Gol', ano = 2011)
# gol.exibir()
# gol.ligar_carro()
# gol.desligar_carro()

# ford_ka = Carro(marca = 'Ford', modelo = 'Ka', ano = 2015)
# ford_ka.exibir()
# gol.ligar_carro()
# gol.desligar_carro()

tesla_y = Carro('Tesla', 'Y', 2025)
tesla_y.exibir()
tesla_y.ligar_carro()
tesla_y.desligar_carro()