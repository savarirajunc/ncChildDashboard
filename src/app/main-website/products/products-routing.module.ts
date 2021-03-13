import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirlComponent } from './girl/girl.component';
import { BoyComponent } from './boy/boy.component';
const routes: Routes = [{
  path:'girl',
  component:GirlComponent
},
{
  path:'boy',
  component:BoyComponent
}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
