import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpService: HttpService) { }


  getTodos(): Observable<Todo[]> {

    const url: string = environment.apiUrl + 'todos';
    return this.httpService.get(url);
  }

  newTodo(todo: Todo): Observable<Todo> {
    const url: string = environment.apiUrl + 'todos';
    return this.httpService.post(url, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    // const url: string = environment.apiUrl + 'todos/' + todo._id;
    const url: string = `${environment.apiUrl}todos/${todo._id}`;
    return this.httpService.put(url, todo);
  }
}
