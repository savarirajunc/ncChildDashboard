import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyPassword]'
})
export class PasswordDirective {


  constructor(private el: ElementRef) { }
  @Input() OnlyPassword: boolean;  
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyPassword) {
  
        // Ensure that it is a number and stop the keypress
      // if ((e.shiftKey || (e.keyCode < 65 || e.keyCode > 90)) && (e.keyCode < 96 || e.keyCode > 105) ) {
       if ((e.keyCode != 8) && (e.keyCode != 9) && (e.keyCode != 13) && (e.keyCode == 32) && 
           (e.keyCode < 16 || e.keyCode > 20) && 
           (e.keyCode < 33 || e.keyCode > 46) && 
           (e.keyCode < 65 || e.keyCode > 90) && 
           (e.keyCode < 96 || e.keyCode > 105) ) {
            e.preventDefault();
        }
      }
  }
}
