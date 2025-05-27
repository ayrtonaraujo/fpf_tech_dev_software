import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.component.html',
  styleUrl: './nome-componente.component.css'
})

export class NomeComponenteComponent {
  nome: string = "José Bezerra";
  profissao: string = "Professor de Ginástica";
  hobbies: string[] = ["Nadar", "Xadrez", "Ginástica", "Videogame"]
}
