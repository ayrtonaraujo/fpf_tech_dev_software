import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Transacoes } from './components/lancamentos/transacoes';
import { Categorias } from './components/categorias/categorias';
import {Error404} from './components/error404/error404';


export const routes: Routes = [
    {path: 'home', component: Home, title: 'Página Inicial'},
    {path: 'transacoes', component: Transacoes, title: 'Lançamentos'},
    {path: 'categorias', component: Categorias, title: 'Categorias'},
    {path: 'error404', component: Error404, title: 'Error 404'},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'error404'}
];
