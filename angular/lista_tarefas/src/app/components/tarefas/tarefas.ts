import { Component, inject } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa.interface';
import { TarefasService } from '../../services/tarefas';


@Component({
  selector: 'app-tarefas',
  imports: [],
  standalone: true,
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas {
  private tarefaServico = inject(TarefasService);
  
  listaTarefas: Tarefa[] = [];

  ngOnInit () {
    this.listaTarefas = this.tarefaServico.getTarefas();
  }

  toggleOk (tarefa: Tarefa) {
    tarefa.status = !tarefa.status;
  }

}