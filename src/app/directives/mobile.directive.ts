import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyMobile]'
})
export class MobileDirective {
  constructor(private el: ElementRef) { }
  @Input() OnlyMobile: boolean;  
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyMobile) {
        let mobileLength = this.el.nativeElement.value.length
        if(mobileLength > 15){
          e.preventDefault();
        }
      
      }
  }
}
