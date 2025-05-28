import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent {
  nome:string = '';
  status:boolean = true;

  frutas: string[] = [
    'banana', 
    'caju', 
    'morango'
  ]

  perfil = {
    name:"José da Silva",
    username: "josesilva12876",
    local: "Manaus",
    age: 50,
    work: "Pedreiro",
    company: "JS Construções",
    posts : 36,
    followers : 403,
    following :  200,
    profile_photo : 'https://media.tenor.com/I6j5DmlTTk0AAAAM/stare.gif',
  }
}