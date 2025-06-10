import { Component, inject } from '@angular/core';
import {TarefaService} from '../../services/tarefa.service';
import {Tarefa} from '../../interfaces/Tarefa';
@Component({
  selector: 'app-tarefas',
  imports: [],
  standalone:true,
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  private tarefaServico = inject(TarefaService);
  listaTarefas: Tarefa[] = [];
  ngOnInit(){
    this.listaTarefas = this.tarefaServico.getTarefas();
  }
  toggleConcluido(tarefa:Tarefa){
    tarefa.concluido = !tarefa.concluido
  }
}
