import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export interface StandardResponse {
  addedDate: string,
  id: string,
  order: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  getList(): Observable<StandardResponse[]> {
    return this.http.get<StandardResponse[]>(`${environment.baseUrl}/todo-lists`)
  }
}
