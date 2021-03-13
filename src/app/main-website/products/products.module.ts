import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirlComponent } from './girl/girl.component';
import { BoyComponent } from './boy/boy.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [GirlComponent, BoyComponent]
})
export class ProductsModule { }
