import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpinnerService } from 'src/app/modules/spinner/spinner.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  displayedColumns: string[] = ['title', 'description', 'status'];

  drawerSection: string = '';

  
  currentTodo: Todo = {
    title: '',
    description: ''
  }

  constructor(private todoService: TodoService, private spinnerService: SpinnerService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.spinnerService.setStatus(true);
    this.todoService.getTodos().subscribe({
      next: (response: Todo[]) => {
        this.todos = response;
        this.spinnerService.setStatus(false);
      },
      error: (err) => {
        this.spinnerService.setStatus(false);
      }
    });
  }

  selectTodo(todo: Todo) {
    this.drawerSection = 'details';
    if(todo._id !== this.currentTodo._id) {
      this.currentTodo = {...todo};
    }
  }

  doOnSave(todo: Todo) {
    this.getTodos();
  }

  showCreateForm() {
    this.drawerSection = 'new';
  }

  doOnCreated(todo: Todo) {
    this.getTodos();
  }

}


