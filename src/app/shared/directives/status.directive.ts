import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements OnInit {

  @Input() appStatus: string = '';

  colors: any = {
    'new': 'gray',
    'in progress': 'blue',
    'done': 'red'
  }

  constructor(private elementRef: ElementRef) { }


  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.colors[this.appStatus];
  }



}
