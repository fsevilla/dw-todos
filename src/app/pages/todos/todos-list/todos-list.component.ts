import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  displayedColumns: string[] = ['title', 'description', 'status'];
  
  currentTodo: Todo = {
    title: '',
    description: ''
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (response: Todo[]) => {
        this.todos = response;
      },
      error: () => {}
    });
  }

  selectTodo(todo: Todo) {
    if(todo._id !== this.currentTodo._id) {
      this.currentTodo = {...todo};
    }
  }

  doOnSave(todo: Todo) {
    this.getTodos();
  }

}

