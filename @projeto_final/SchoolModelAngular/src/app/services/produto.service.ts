import { Injectable } from '@angular/core';
import {Produto} from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  getProdutos(): Produto[] {
    return [
      {nome: 'Nobebook', promocao: true},
      {nome: 'Mouse', promocao: false},
      {nome: 'Pc Gamer', promocao: false},
      {nome: 'Mouse sem fio', promocao: false},
      {nome: 'Teclado', promocao: false},
    ]
  };
}
