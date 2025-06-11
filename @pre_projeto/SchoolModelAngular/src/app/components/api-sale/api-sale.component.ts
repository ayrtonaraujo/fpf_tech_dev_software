import { inject, Component } from '@angular/core';
import {EscolaService} from '../../services/escola.service';
import {FormsModule} from '@angular/forms';
import {Client, Product, Employee, SalePost, SaleGet} from '../../interfaces/Escola';

@Component({
  selector: 'app-api-sale',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './api-sale.component.html',
  styleUrl: './api-sale.component.css'
})
export class ApiSaleComponent {
  private escolaService = inject(EscolaService)
  saleList: SaleGet[] = [];
  clientList: Client[] = [];
  productList: Product[] = [];
  employeeList: Employee[] = [];
  newSale: Partial<SalePost> = {client_id: 0, product_id: 0, employee_id: 0, nrf: ''};

  ngOnInit() {
    this.loadSales();
    this.loadDropdowns();
  }

  loadSales() {
    this.escolaService.getSales().subscribe({
      next: (response: SaleGet[]) => this.saleList = response,
      error: (err) => console.error('Erro ao carregar vendas:', err)
    });
  }

  loadDropdowns() {
    this.escolaService.getClients().subscribe({ next: r => this.clientList = r });
    this.escolaService.getProducts().subscribe({ next: r => this.productList = r });
    this.escolaService.getEmployees().subscribe({ next: r => this.employeeList = r });
  }

  createSale() {
    this.escolaService.saveSale(this.newSale as SalePost).subscribe({
      next: () => {
        this.newSale = { client_id: 0, product_id: 0, employee_id: 0, nrf: '' };
        this.loadSales();
      },
      error: (err) => console.error('Erro ao salvar venda:', err)
    });
  }

  deleteSale(id: number) {
    this.escolaService.deleteSale(id).subscribe({
      next: () => this.saleList = this.saleList.filter(s => s.id !== id),
      error: (err) => console.error('Erro ao deletar venda:', err)
    });
  }
}
