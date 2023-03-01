import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addTokenStorage(token) {
    localStorage.setItem('token', token);
  }

  getTokenStorage() {
    return localStorage.getItem('token');
  }

  register(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }

  login(data: { email: string; password: string }) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }
}
