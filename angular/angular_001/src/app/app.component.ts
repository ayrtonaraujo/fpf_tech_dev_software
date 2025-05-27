import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NomeComponenteComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_001';
}
