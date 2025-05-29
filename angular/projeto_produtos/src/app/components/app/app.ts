import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Produtos } from '../produtos/produtos';

@Component({
  selector: 'app-root',
  imports: [Produtos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'projeto_produtos';
}
