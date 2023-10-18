import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
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
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      console.log('Enviar los datos');
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

