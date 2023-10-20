import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SignupUser } from '../interfaces/signup-user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  signup(data: SignupUser): Observable<void> {
    const url: string = environment.apiUrl + 'signup';
    return this.httpClient.post<void>(url, {...data, course: data.code});
  }
}
