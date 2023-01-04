import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='green';
    el.nativeElement.style.border='5px dashed orange';
   }

}
