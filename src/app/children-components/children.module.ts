import { NgModule } from '@angular/core';


import { ChildrenComponent } from './children.component';
import { ChildrenRoutingModule } from './children-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import {
  FormsModule, CommonModule, AppService, ChildCaregiverInfoComponent, ChildEduInformationComponent,
  ChildFamilyInfoComponent, ChildFriendInfoComponent, ChildHomeAddressComponent,
  ChildInterestDeveComponent, ChildLanguageInfoComponent,
  ChildNutritionComponent, ChildProfileComponent
} from './children.index';
import { DirectiveModule} from './../directives/directive-module.module';
import { BsDatepickerModule  } from 'ngx-bootstrap';
import { OnlyNumberDirective } from './../directives/only-number.directive';
import { OnlyStringDirective } from './../directives/only-string.directive';

import { ChildrenService } from './children.index';
import { ChildDeactiveComponent } from './child-deactive/child-deactive.component';

@NgModule({
  imports: [
    ChildrenRoutingModule,
    FormsModule,
    CommonModule,
    FileUploadModule,
    DirectiveModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [ChildrenComponent,
    ChildProfileComponent,
    ChildInterestDeveComponent,
    ChildFriendInfoComponent,
    ChildHomeAddressComponent,
    ChildLanguageInfoComponent,
    ChildNutritionComponent,
    ChildEduInformationComponent,
    ChildFamilyInfoComponent,
    ChildCaregiverInfoComponent,
    ChildDeactiveComponent],
  providers: [AppService, ChildrenService]
})
export class ChildrenModule { }
