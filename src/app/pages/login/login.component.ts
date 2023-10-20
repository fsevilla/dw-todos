import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Token } from 'src/app/shared/interfaces/token';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  error: boolean = false;
  inputType: string = 'password';

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if(this.email && this.password) {
      this.loginService.login(this.email, this.password).subscribe({
        next: (response: Token) => {
          this.error = false;
          this.authService.saveToken(response.token);
          this.router.navigate(['todos']);
        },
        error: () => {
          this.error = true;
        }
      });
    }
  }

  togglePassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

}
