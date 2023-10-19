import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';

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

  cancel() {
    this.onCancel.emit();
  }

  save() {
    this.onSave.emit(this.todo);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Llego una nueva tarea', this.todo);
    if(changes['todo']) {
      console.log('Cambio la tarea')
    }
  }

}
