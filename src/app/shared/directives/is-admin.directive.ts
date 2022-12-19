import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isAdmin]'
})
export class IsAdminDirective {

  constructor(private elementRef: ElementRef) { }

  @Input() set isAdmin(isAdminVar: boolean){
    console.log(isAdminVar);
    if(!isAdminVar){
      this.elementRef.nativeElement.style.display = 'none';
    }
    else{
      this.elementRef.nativeElement.style.display = 'block';
    }
  }

}
