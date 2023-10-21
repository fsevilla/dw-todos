import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective implements OnInit {

  @Input() appAuth: boolean = false;

  constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef ) {}

  ngOnInit(): void {
    this.authService.authStatus.subscribe((status: boolean) => {
      console.log('Status: ', this.appAuth, status);
      if(status ===  this.appAuth) {
        this.containerRef.createEmbeddedView(this.templateRef);
      } else {
        this.containerRef.clear();
      }
    });
  }

}


