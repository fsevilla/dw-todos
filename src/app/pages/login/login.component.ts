import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  inputType: string = 'password';

  login() {
    console.log('Enviar los datos');
    console.log('Email: ', this.email);
    console.log('Password: ', this.password);
    this.password = '';
  }

  togglePassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

}
