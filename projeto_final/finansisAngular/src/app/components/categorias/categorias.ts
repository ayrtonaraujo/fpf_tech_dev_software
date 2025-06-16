import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { CategoriasInterface } from '../../interfaces/categorias.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-categorias',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {
  private CategoriasService = inject(CategoriasService);
  private changeDetectorRef = inject(ChangeDetectorRef);


  listaCategorias: CategoriasInterface[] = [];
  newCategoryName: string = '';

  public editingCategoryId: number | null = null;
  public editedCategoryName: string = '';

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.CategoriasService.getCategorias().subscribe(
      (categorias) => {
        this.listaCategorias = categorias;
        this.changeDetectorRef.detectChanges();
      },
      (error) => {
        console.error('Erro ao carregar categorias', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.newCategoryName.trim()) {
      return;
    }

    const novaCategoria = { name: this.newCategoryName };

    this.CategoriasService.createCategory(novaCategoria).subscribe(
      () => {
        this.newCategoryName = '';
        this.loadCategories();
      }
    );
  }

  onDelete(id: number): void {
    if (confirm("Você realmente quer deletar esta catergoria?")) {
      this.CategoriasService.deleteCategory(id).subscribe(
        () => {
          this.loadCategories();
        }
      );
    }
  }

  onEditClick(categoria: CategoriasInterface): void {
    this.editingCategoryId = categoria.id;
    this.editedCategoryName = categoria.name;
  }

  onSaveClick(id: number): void {
    if (!this.editedCategoryName.trim()) {
      return; // Impede salvar com nome vazio
    }

    const updatedCategory = { name: this.editedCategoryName };

    this.CategoriasService.updateCategory(id, updatedCategory).subscribe({
      next: () => {
        this.editingCategoryId = null;
        this.loadCategories(); // 
      },
      error: (err) => console.error('Erro ao atualizar categoria', err)
    });

  }

  onCancelClick(): void {
    this.editingCategoryId = null; // Apenas sai do modo de edição
  }
}
