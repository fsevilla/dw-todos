import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {

  @Input() todo: Todo = {
    title: '',
    description: ''
  }

}
