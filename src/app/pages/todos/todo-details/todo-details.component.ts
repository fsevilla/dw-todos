import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Todo } from 'src/app/shared/interfaces/todo';
import { SnackService } from 'src/app/shared/services/snack.service';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnChanges {

  @Input('item') todo: Todo = {
    title: '',
    description: ''
  }

  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onSave: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService, private snackService: SnackService) {}

  cancel() {
    this.onCancel.emit();
  }

  save() {
    this.todoService.updateTodo(this.todo).subscribe({
      next: () => {
        this.snackService.success('Changes saved');
        this.onSave.emit(this.todo);
      },
      error: () => {
        this.snackService.error('Something went wrong');
      }
    });
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Llego una nueva tarea', this.todo);
    if(changes['todo']) {
      console.log('Cambio la tarea')
    }
  }

}
