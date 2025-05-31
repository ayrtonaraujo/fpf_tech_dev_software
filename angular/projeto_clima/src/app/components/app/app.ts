import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clima } from "../clima/clima";


@Component({
  selector: 'app-root',
  imports: [Clima],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'projeto_clima';
}