import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError, catchError } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { }

  private getHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.getToken()
    });

    return headers;
  }

  private handleErrors(err: HttpErrorResponse) {
    if(err.status === 401) {
      this.authService.deleteToken();
      this.router.navigate(['login']);
      return throwError('Token expired');
    } else {
      return throwError('Generic error');
    }
  }

  get(url: string): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get(url, { headers })
        .pipe(catchError((err: HttpErrorResponse) => this.handleErrors(err)));
  }

  post(url: string, data: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.post(url, data, { headers })
        .pipe(catchError((err: HttpErrorResponse) => this.handleErrors(err)));
  }

  put(url: string, data: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.put(url, data, { headers })
        .pipe(catchError((err: HttpErrorResponse) => this.handleErrors(err)));
  }
}
