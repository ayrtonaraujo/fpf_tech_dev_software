import { Injectable } from '@angular/core';
import { CategoriasInterface } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {
  getCategorias(): CategoriasInterface[] {
    return [
      { name: "Alimentação", color: "#FF6F61" },
      { name: "Transporte", color: "#6B5B95" },
      { name: "Educação", color: "#88B04B" },
      { name: "Lazer", color: "#F7CAC9" },
      { name: "Saúde", color: "#92A8D1" },
     { name: "Moradia", color: "#955251" }
    ]
  };
}
