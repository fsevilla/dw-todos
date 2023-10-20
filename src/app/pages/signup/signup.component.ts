import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SignupUser } from 'src/app/shared/interfaces/signup-user';
import { SignupService } from 'src/app/shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private signupService: SignupService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.signupForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: [() => {
        return this.comparePasswords()
      }]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      const datos: SignupUser = this.signupForm.getRawValue();
      this.signupService.signup(datos).subscribe({
        next: () => {
          this.snackBar.open('Usuario creado correctamente', 'SUCCESS', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          });
          this.router.navigate(['login']);
        },
        error: (err: any) => {
          this.snackBar.open(err.error.error, 'ERROR', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          });
        }
      });
    } else {
      console.log('Faltan datos');
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.signupForm.controls[controlName].errors && this.signupForm.controls[controlName].errors![errorName];
  }

  comparePasswords() {
    if(!this.signupForm) return null;

    const { password, confirm } = this.signupForm.getRawValue();

    if (password === confirm) {
      return null;
    } else {
      return {
        mismatch: true
      }
    }
  }
}

