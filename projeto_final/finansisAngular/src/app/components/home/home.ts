import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NgxMaskDirective } from 'ngx-mask';

import { CategoriasInterface } from '../../interfaces/categorias.interface';
import { CategoriasService } from '../../services/categorias.service';
import { EntryInterface } from '../../interfaces/entry.interface';
import { EntryService } from '../../services/entry.service';


export interface ResumoInterface {
  labels: string[];
  receitas: number[];
  despesas: number[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgxMaskDirective, CurrencyPipe],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home implements OnInit {

  private changeDetectorRef = inject(ChangeDetectorRef);

  private http = inject(HttpClient);

  private categoriasService = inject(CategoriasService);
  private entryService = inject(EntryService)

  public listaCategorias: CategoriasInterface[] = [];

  //resumo do mês
  public totalReceitas: number = 0;
  public totalDespesas: number = 0;
  public saldo: number = 0;


  public newEntry: EntryInterface = {
    type: 'E',
    description: '',
    value: 0,
    date: '',
    category: 0,
  };

  ngOnInit(): void {
    this.loadResumoData();
    this.categoriasService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
    });
  }

  loadResumoData(): void {
    const url = 'http://127.0.0.1:8000/resumo-mes/';

    this.http.get<ResumoInterface>(url).subscribe(data => {

      this.totalReceitas = data.receitas[0] || 0;
      this.totalDespesas = data.despesas[0] || 0;


      this.saldo = this.totalReceitas - this.totalDespesas;

      this.changeDetectorRef.detectChanges();
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