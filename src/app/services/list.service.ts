import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  remove (animals: Animal[], animal: Animal): Animal[] {
    return animals.filter((a) => animal.name !== a.name);
  }
}