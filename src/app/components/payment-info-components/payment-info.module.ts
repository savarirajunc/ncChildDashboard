import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInfoComponent } from './payment-info.component';
import { PaymentInfoRoutingModule} from './payment-info-routing.module';
import { FormsModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'
@NgModule({
  imports: [
    PaymentInfoRoutingModule,FormsModule,
    CommonModule,DirectiveModule
  ],
  declarations: [PaymentInfoComponent],
  providers:[AppService,ComponentsService]
})
export class PaymentInfoModule { }




