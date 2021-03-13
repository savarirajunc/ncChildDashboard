import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthWholeChildDevelopmentComponent } from './health-whole-child-development.component';


const routes: Routes = [{
  path:'',
  component:HealthWholeChildDevelopmentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthWholeChildDevelopmentRoutingModule { }
