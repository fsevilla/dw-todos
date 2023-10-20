import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    const flag: boolean = this.tokenExists();
    this.authStatus.next(flag);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.authStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  tokenExists(): boolean {
    return !!localStorage.getItem('token');
  }
}
