import { inject, Component } from '@angular/core';
import {EscolaService} from '../../services/escola.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Product} from '../../interfaces/Escola';

@Component({
  selector: 'app-api-product',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './api-product.component.html',
  styleUrl: './api-product.component.css'
})
export class ApiProductComponent {
  private escolaService = inject(EscolaService)
  productList: Product[] = [];
  newProduct: Partial<Product> = {description: '', quantity: 0};

  ngOnInit() {
    this.escolaService.getProducts()
      .subscribe({
        next: (response: Product[]) => {
          this.productList = response;
        },
        error: (err) => {
          console.error('Erro ao carregar produtos:', err);
        }
      });
  }

  deleteProduct(id: number) {
    this.escolaService.deleteProduct(id).subscribe({
      next: () => {
        this.productList = this.productList.filter(c => c.id !== id);
      },
      error: (err) => {
        console.error('Erro ao deletar produto:', err);
      }
    });
  }

  createProduct(product: Partial<Product>) {
    this.escolaService.saveProduct(this.newProduct as Product).subscribe({
      next: (response: any) => {
        this.newProduct = {description: '', quantity: 0};
        this.ngOnInit();
      },
      error: (err) => {
        console.error('Erro ao salvar produto:', err);
      }
    });
  }
}
