import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  name: string = "Ayrton Araújo"
  username: string = "ayrtonaraujo"
  local: string = "Manaus"
  age: number = 30
  work: string = "Maker"
  company: string = "Freelance"
  posts: number = 36
  followers: number = 400
  following: number = 200
  profile_photo: string = 'https://i.pinimg.com/564x/2b/bc/af/2bbcaf8b5d4409e227782d4fe4484b59.jpg'
}
