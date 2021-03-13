import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,AppService,ComponentsService } from './../components.index';
import { QuickStartGuideComponent } from './quick-start-guide.component';
import { QuickStartGuideRoutingModule } from './quick-start-guide-routing.module';
//import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    QuickStartGuideRoutingModule,CommonModule,FormsModule

  ],
  declarations: [QuickStartGuideComponent],
  providers:[AppService,ComponentsService]
})
export class QuickStartGuideModule { }
