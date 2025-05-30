import { Routes } from '@angular/router';
import { Tarefas } from './components/tarefas/tarefas';

export const routes: Routes = [
    { path: 'tarefa', component: Tarefas },
    { path: '**', redirectTo: '/tarefa'},
    { path: '', redirectTo: '/tarefa', pathMatch: 'full'}
]
