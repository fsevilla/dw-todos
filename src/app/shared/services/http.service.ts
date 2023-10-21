import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.getToken()
    });

    return headers;
  }

  get(url: string): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get(url, { headers });
  }

  post(url: string, data: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.post(url, data, { headers });
  }
}
