import { Component, inject } from '@angular/core';
import { Produto } from '../../services/produto';
import { ProdutoInterfaces } from '../../interfaces/ProdutoInterfaces';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html', 
  styleUrl: './produtos.css'
})
export class Produtos {
  	private produtoService: Produto = inject(Produto);

    listaProdutos: ProdutoInterfaces[] = [];
    
    ngOnInit() {
      this.listaProdutos = this.produtoService.getProdutos();
    }
}
