import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar) { }

  open(msg: string, action: string = '') {
    this.snackBar.open(msg, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  success(msg: string) {
    this.open(msg, 'SUCCESS');
  }

  error(msg: string) {
    this.open(msg, 'ERROR');
  }
}
