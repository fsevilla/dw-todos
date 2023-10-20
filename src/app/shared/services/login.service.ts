import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Token } from '../interfaces/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<Token> {
    const url: string = environment.apiUrl + 'auth';
    return this.httpClient.post<Token>(url, { email, password });
  }
}
