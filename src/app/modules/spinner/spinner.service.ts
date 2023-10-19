import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setStatus(status: boolean) {
    this.loadingStatus.next(status);
  }
}
