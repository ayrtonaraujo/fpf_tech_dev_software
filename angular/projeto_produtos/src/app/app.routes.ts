import { Routes } from '@angular/router';
import { Produtos } from './components/produtos/produtos';
import { HomeComponent } from './components/home/home';
import { About } from './components/about/about';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: Produtos},
    {path: 'about', component: About},
    {path: '**', redirectTo: 'home'}
]