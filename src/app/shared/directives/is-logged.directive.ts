import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isLogged]'
})
export class IsLoggedDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() set isLogged(isLoggedIn: boolean){
    console.log(isLoggedIn);
    if(!isLoggedIn){
      this.elementRef.nativeElement.style.display = 'none';
    }
    else{
      this.elementRef.nativeElement.style.display = 'block';
    }
  }

}
