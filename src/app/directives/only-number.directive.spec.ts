import { OnlyNumberDirective } from './only-number.directive';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
describe('OnlyNumberDirective', () => {
  it('should create an instance', () => {
    const directive = new OnlyNumberDirective();
    expect(directive).toBeTruthy();
  });
});
