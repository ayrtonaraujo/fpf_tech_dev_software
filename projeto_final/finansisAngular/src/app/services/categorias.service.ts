import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasInterface } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoriasService {

  private apiUrl = 'http://127.0.0.1:8000/category/'

  constructor(private http: HttpClient) {}

  updateCategory(id: number, categoryData: { name: string }): Observable<CategoriasInterface> {
    return this.http.put<CategoriasInterface>(`${this.apiUrl}${id}/`, categoryData);
  }

  getCategorias(): Observable<CategoriasInterface[]> {
    return this.http.get<CategoriasInterface[]>(this.apiUrl)
  };

  createCategory(categoria: {name: string}): Observable<CategoriasInterface> {
    return this.http.post<CategoriasInterface>(this.apiUrl, categoria);
  }

  deleteCategory (id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
