import { Component, inject } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { CategoriasInterface } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-categorias',
  imports: [],
  standalone: true,
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  private CategoriasService = inject(CategoriasService);
  listaCategorias: CategoriasInterface[] = [];
  ngOnInit() {
    this.listaCategorias = this.CategoriasService.getCategorias();
  }

}
