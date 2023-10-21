import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SpinnerService } from 'src/app/modules/spinner/spinner.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { SnackService } from 'src/app/shared/services/snack.service';

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
    private snackBar: SnackService
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
          this.snackBar.success('Task created successfully');
          this.onCreated.emit(response);
        },
        error: () => {
          this.spinnerService.setStatus(false);
          this.snackBar.error('Something went wrong');
        }
      });

    }
  }
}
