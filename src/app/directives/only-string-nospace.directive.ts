import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyStringNoSpace]'
})
export class OnlyStringNoSpaceDirective {

  constructor(private el: ElementRef) { }
  @Input() OnlyStringNoSpace: boolean;
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyStringNoSpace) {

    /*  if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
       (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow Shift
       // (e.keyCode == 16) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        } */
        // Ensure that it is a number and stop the keypress
       // if ((e.shiftKey || (e.keyCode < 65 || e.keyCode > 90)) && (e.keyCode < 96 || e.keyCode > 105) ) {
        if ((e.keyCode < 65 || e.keyCode > 90) && (e.keyCode != 8) &&
        (e.keyCode != 9) &&  (e.keyCode < 16 || e.keyCode > 20) &&
        (e.keyCode != 13) &&   (e.keyCode < 33 || e.keyCode > 46) &&
        (e.keyCode < 96 || e.keyCode > 105) ) {
            e.preventDefault();
        }
      }
  }
}
