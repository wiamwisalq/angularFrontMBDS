import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]'
})
export class NonRenduDirective {

  constructor(el:ElementRef) {

    el.nativeElement.style.backgroundColor='red';
    el.nativeElement.style.border='5px dashed black';
   }

}
