import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NomeComponenteComponent } from './nome-componente/nome-componente.component';
import { PerfilComponent } from './perfil/perfil.component';

@Component({
  selector: 'app-root',
  imports: [PerfilComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_001';
}
