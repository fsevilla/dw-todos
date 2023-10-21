import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SpinnerService } from 'src/app/modules/spinner/spinner.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

  form: FormGroup;

  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCreated: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    formBuilder: FormBuilder, private todoService: TodoService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      status: ''
    });
  }

  cancel() {
    this.onCancel.emit();
  }

  create() {
    if(this.form.valid) {
      const values: Todo = this.form.getRawValue();

      this.spinnerService.setStatus(true);
      this.todoService.newTodo(values).subscribe({
        next: (response: Todo) => {
          this.spinnerService.setStatus(false);
          this.snackBar.open('Task created successfully', 'SUCCESS', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          });
          this.onCreated.emit(response);
        },
        error: () => {
          this.spinnerService.setStatus(false);
          this.snackBar.open('Something went wrong', 'ERROR', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          });
        }
      });

    }
  }
}
