import { Injectable } from '@angular/core';
import {Tarefa} from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  getTarefas(): Tarefa[] {
    return [
      {titulo:"Estudar Angular", descricao:"Fazer um componente de tarefas", concluido:false},
      {titulo:"Exercicio", descricao:"Realizar os exercicios em sala", concluido:false},
      {titulo:"Atividade", descricao:"Fazer a Atividade para casa", concluido:false}
    ]
  }
}
