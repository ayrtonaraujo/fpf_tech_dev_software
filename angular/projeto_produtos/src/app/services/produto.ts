import { Injectable } from '@angular/core';
import { ProdutoInterfaces } from '../interfaces/ProdutoInterfaces';

@Injectable({
  providedIn: 'root'
})

export class Produto {
  getProdutos (): ProdutoInterfaces[] {
    return [
      {nome: "Notebook", promocao: true},
      {nome: "Teclado", promocao: false},
      {nome: "Mouse", promocao: false},
      {nome: "Monitor", promocao: true}
    ]
  };
}


