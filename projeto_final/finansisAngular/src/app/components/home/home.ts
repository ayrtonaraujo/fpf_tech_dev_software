import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

import { CategoriasInterface } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';
import { EntryInterface } from '../../interfaces/entry.interface';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home implements OnInit {
  private categoriasService = inject(CategoriasService);
  private entryService = inject(EntryService)

  public listaCategorias: CategoriasInterface[] = [];

  public newEntry: EntryInterface = {
    type: 'E',
    description: '',
    value: 0,
    date: '',
    category: 0,
  };

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
    });
  }

  onSubmit(): void {
    
    const payload = {
      type: this.newEntry.type,
      description: this.newEntry.description,
      value: String(this.newEntry.value), 
      date: this.newEntry.date,
      
      category_id: this.newEntry.category
    };

    console.log('Dados a serem enviados:', payload);

    
    this.entryService.createEntry(payload).subscribe({
      next: (response) => {
        console.log('Lançamento criado com sucesso!', response);
        alert('Lançamento adicionado!');
        
      },
      error: (error) => {
        console.error('Erro ao criar lançamento', error);
        alert('Falha ao adicionar lançamento.');
      }
    });
  }
  
}
