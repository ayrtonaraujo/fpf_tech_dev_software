import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntryService } from '../../services/entry.service';
import { EntryInterface } from '../../interfaces/entry.interface';
import { CategoriasService } from '../../services/categorias.service';
import { CategoriasInterface } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transacoes.html',
  styleUrls: ['./transacoes.css']
})
export class Transacoes implements OnInit {

  private entryService = inject(EntryService);

  private categoriasService = inject(CategoriasService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  public groupedEntries: { [key: string]: EntryInterface[] } = {};
  public sortedMonthKeys: string[] = [];

  public listaEntries: EntryInterface[] = [];
  public listaCategorias: CategoriasInterface[] = [];


  public editingEntryId: number | null = null;
  public editedEntryData: Partial<EntryInterface> = {};

  ngOnInit(): void {
    this.loadEntries();
    this.loadCategories();
  }


  loadEntries(): void {

    this.entryService.getEntry().subscribe({
      next: (entries) => {
        this.listaEntries = entries;
        this.groupEntriesByMonth();
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar os lançamentos', err)
    });
  }

  groupEntriesByMonth(): void {
    const groups: { [key: string]: EntryInterface[] } = {};
    for (const entry of this.listaEntries) {
      const date = new Date(entry.date);
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const year = date.getUTCFullYear();
      const key = `${month}/${year}`;

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(entry);
    }
    this.groupedEntries = groups;
    this.sortedMonthKeys = Object.keys(groups).sort((a, b) => {
      const [aMonth, aYear] = a.split('/');
      const [bMonth, bYear] = b.split('/');
      return (bYear + bMonth).localeCompare(aYear + aMonth);
    });
  }

  loadCategories(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (data) => this.listaCategorias = data,
      error: (err) => console.error('Erro ao carregar categorias', err)
    });
  }


  onDelete(id: number): void {
    if (confirm('Tem certeza que deseja deletar este lançamento?')) {
      this.entryService.deleteEntry(id).subscribe({
        next: () => this.loadEntries(),
        error: (err) => console.error('Erro ao deletar o lançamento', err)
      });
    }
  }


  onEditClick(entry: EntryInterface): void {
    this.editingEntryId = entry.id!;
    this.editedEntryData = { ...entry };
    if (typeof entry.category === 'object' && entry.category !== null) {
      this.editedEntryData.category = entry.category.id;
    }
  }

  onSaveClick(id: number): void {
    const payload = {
      type: this.editedEntryData.type,
      description: this.editedEntryData.description,
      value: String(this.editedEntryData.value),
      date: this.editedEntryData.date,
      category_id: this.editedEntryData.category
    };

    this.entryService.updateEntry(id, payload).subscribe({
      next: () => {
        alert('Salvo com sucesso!');
        this.editingEntryId = null;
        this.loadEntries();
        this.changeDetectorRef.detectChanges();
      },
      error: (err) => console.error('Erro ao atualizar lançamento', err)
    });
  }

  onCancelClick(): void {
    this.editingEntryId = null;
  }

  getCategoryName(category: CategoriasInterface | number): string {
    if (typeof category === 'object' && category !== null && 'name' in category) {
      return category.name;
    }
    return 'Indefinida';
  }
}