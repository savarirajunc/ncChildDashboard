import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyStringDirective } from './only-string.directive';
import { OnlyNumberDirective } from './only-number.directive';
import { OnlyStringNoSpaceDirective } from './only-string-nospace.directive';
import { PasswordDirective } from './password.directive';
import { MobileDirective } from './mobile.directive';
import { IframeDirective } from './iframe.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[OnlyStringDirective,OnlyNumberDirective,OnlyStringNoSpaceDirective,PasswordDirective,MobileDirective,IframeDirective],
  declarations: [OnlyStringDirective,OnlyNumberDirective,OnlyStringNoSpaceDirective, PasswordDirective, MobileDirective, IframeDirective]
})
export class DirectiveModule { }
