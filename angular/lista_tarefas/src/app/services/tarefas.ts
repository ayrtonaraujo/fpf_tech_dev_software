import { Injectable } from '@angular/core';
import { Tarefas } from '../components/tarefas/tarefas';
import { Tarefa } from '../interfaces/tarefa.interface';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  getTarefas(): Tarefa[] {
    return [
      {titulo: "Estudar Angular", description: "Criar um componente de tarefas", status: false},
      {titulo: "Exercício", description: "Fazer exercicio de angular", status: false},
      {titulo: "Atividade", description: "Fazer atividade de angular", status: false}
    ]
  }

}
