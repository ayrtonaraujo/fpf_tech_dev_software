import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntryInterface } from '../interfaces/entry.interface';


@Injectable({
  providedIn: 'root'
})

export class EntryService {
  private apiUrl = 'http://127.0.0.1:8000/entry/';

  constructor(private http: HttpClient) { }

  
  createEntry(entryData: any): Observable<EntryInterface> {
    return this.http.post<EntryInterface>(this.apiUrl, entryData);
  }

  getEntry(): Observable<EntryInterface[]> {
    return this.http.get<EntryInterface[]>(this.apiUrl);
  }

  deleteEntry(id:number) : Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  updateEntry(id: number, entryData: any): Observable<EntryInterface> {
    return this.http.put<EntryInterface>(`${this.apiUrl}${id}/`, entryData);
  }
}
