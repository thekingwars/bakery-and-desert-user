import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  currentUser(): Observable<User> {
    return this.http.get<User>(`${this.api}/user/current`);
  }
}
