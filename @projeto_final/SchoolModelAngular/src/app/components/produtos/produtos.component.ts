import { Component, inject } from '@angular/core';
import {ProdutoService} from '../../services/produto.service';
import {Produto} from '../../interfaces/Produto';
@Component({
  selector: 'app-produtos',
  imports: [],
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  private produtoService = inject(ProdutoService);
  listaProdutos: Produto[] = [];
  ngOnInit() {
    this.listaProdutos = this.produtoService.getProdutos();
  }
}
