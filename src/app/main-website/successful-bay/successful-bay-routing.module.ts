import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessfulBayComponent } from './successful-bay.component';


const routes: Routes = [
  {
    path:'',
    component:SuccessfulBayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfulBayRoutingModule { }
