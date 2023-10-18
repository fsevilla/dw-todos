import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url: string = environment.apiUrl + 'tareas';
    return this.httpClient.get<Todo[]>(url);
  }
}
