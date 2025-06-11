import { Routes } from '@angular/router';
import {NomeComponenteComponent} from './components/nome-componente/nome-componente.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProdutosComponent} from './components/produtos/produtos.component';
import {TarefasComponent} from './components/tarefas/tarefas.component';
import {ClimaComponent} from './components/clima/clima.component';
import {ApiClientComponent} from './components/api-client/api-client.component';
import {ApiProductComponent} from './components/api-product/api-product.component';
import {ApiEmployeeComponent} from './components/api-employee/api-employee.component';
import {ApiSaleComponent} from './components/api-sale/api-sale.component';

export const routes: Routes = [
  { path: 'nome', component: NomeComponenteComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'product', component: ProdutosComponent },
  { path: 'tarefas', component: TarefasComponent},
  { path: 'clima', component: ClimaComponent},
  { path: 'clientes', component: ApiClientComponent},
  { path: 'produtos', component: ApiProductComponent},
  { path: 'employees', component: ApiEmployeeComponent},
  { path: 'sales', component: ApiSaleComponent},
  { path: '**', redirectTo: 'nome'}
];
