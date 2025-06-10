export interface Client {
  id: number;
  name: string;
  age: number;
  rg: string;
  cpf: string;
}

export interface Product {
  id: number;
  description: string;
  quantity: number;
}

export interface Employee {
  id: number;
  name: string;
  registration: string;
  active: boolean;
  created_at: Date;
  modified_at: Date;
}

export interface SaleGet {
  id: number;
  product: Product;
  client: Client;
  employee: Employee;
  nrf: string;
}

export interface SalePost {
  id: number;
  product_id: number;
  client_id: number;
  employee_id: number;
  nrf: string;
}
