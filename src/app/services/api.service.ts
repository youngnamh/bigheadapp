import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5265/shirts';

  constructor(private http: HttpClient) {}

  getShirt(index: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${index}`);
  }

  updateShirt(index: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${index}`, index);
  }
}
