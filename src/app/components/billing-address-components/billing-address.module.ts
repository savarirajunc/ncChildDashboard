import { NgModule } from '@angular/core';


import { BillingAddressComponent } from './billing-address.component';
import { BillingAddressRoutingModule } from './billing-address-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';
import { DirectiveModule} from './../../directives/directive-module.module'

@NgModule({
  imports: [
    BillingAddressRoutingModule,
    FormsModule,CommonModule,DirectiveModule
  ],
  declarations: [ BillingAddressComponent ],
  providers:[AppService,ComponentsService]
})
export class BillingAddressModule { }