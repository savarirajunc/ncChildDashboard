import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyString]'
})
export class OnlyStringDirective {

  constructor(private el: ElementRef) { }
  @Input() OnlyString: boolean;
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyString) {
      if (!((e.keyCode == 8) || (e.keyCode == 9) || (e.keyCode == 32) || (e.keyCode == 46) || (e.keyCode >= 35 && e.keyCode <= 40) || (e.keyCode >= 65 && e.keyCode <= 90))) {
        e.preventDefault();
      }
      }
  }
}
