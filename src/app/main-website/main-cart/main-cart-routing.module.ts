import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCartComponent } from './main-cart.component';

const routes: Routes = [{
  path:'',
  component:MainCartComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainCartRoutingModule { }
