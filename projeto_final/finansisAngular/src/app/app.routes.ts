import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Transacoes } from './components/transacoes/transacoes';
import { Categorias } from './components/categorias/categorias';


export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'transacoes', component: Transacoes},
    {path: 'categorias', component: Categorias},
    {path: '**', redirectTo: 'home'}
];
