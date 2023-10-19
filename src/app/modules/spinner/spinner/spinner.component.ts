import { Component } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  loading: boolean = false;

  constructor(spinnerService: SpinnerService) {
    spinnerService.loadingStatus.subscribe((status: boolean) => {
      this.loading = status;
    });
  }

}
