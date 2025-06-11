import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {Client} from '../interfaces/Escola';
import {Client, Employee, Product, SaleGet, SalePost} from '../interfaces/Escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {
  private http = inject(HttpClient);
  urlbase = 'http://localhost:8000';

  getClients():Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlbase}/clients/`);
  }
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlbase}/products/`);
  }
  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.urlbase}/employees/`);
  }
  getSales():Observable<SaleGet[]> {
    return this.http.get<SaleGet[]>(`${this.urlbase}/sales/`);
  }


  saveClient(client: Client) {
    return this.http.post(`${this.urlbase}/clients/`, client);
  }
  saveProduct(product: Product) {
    return this.http.post(`${this.urlbase}/products/`, product);
  }
  saveEmployee(employee: Employee) {
    return this.http.post(`${this.urlbase}/employees/`, employee);
  }
  saveSale(sale: SalePost) {
    return this.http.post(`${this.urlbase}/sales/`, sale);
  }


  deleteClient(client_id: number) {
    return this.http.delete(`${this.urlbase}/clients/${client_id}/`);
  }
  deleteProduct(product_id: number) {
    return this.http.delete(`${this.urlbase}/products/${product_id}/`);
  }
  deleteEmployee(employee_id: number) {
    return this.http.delete(`${this.urlbase}/employees/${employee_id}/`);
  }
  deleteSale(sale_id: number) {
    return this.http.delete(`${this.urlbase}/sales/${sale_id}/`);
  }
}
