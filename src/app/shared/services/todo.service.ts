import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getTodos(): Observable<Todo[]> {

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.getToken()
    });

    const url: string = environment.apiUrl + 'todos';
    return this.httpClient.get<Todo[]>(url, { headers });
  }

  newTodo(todo: Todo): Observable<Todo> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.getToken()
    });

    const url: string = environment.apiUrl + 'todos';
    return this.httpClient.post<Todo>(url, todo, { headers });
  }
}
