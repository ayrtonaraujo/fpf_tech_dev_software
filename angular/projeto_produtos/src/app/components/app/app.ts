import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from 'express';
// import { Produtos } from '../produtos/produtos';
// import { Home } from '../home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'projeto_produtos';
  
}
