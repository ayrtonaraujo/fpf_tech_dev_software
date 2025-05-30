import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Tarefas } from "../tarefas/tarefas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lista_tarefas';
}
