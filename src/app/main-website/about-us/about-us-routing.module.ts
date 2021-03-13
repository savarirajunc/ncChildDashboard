import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, Router } from '@angular/router';
const routes: Routes = [{
  path:'',
  component:AboutUsComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]

})
export class AboutUsRoutingModule { }
