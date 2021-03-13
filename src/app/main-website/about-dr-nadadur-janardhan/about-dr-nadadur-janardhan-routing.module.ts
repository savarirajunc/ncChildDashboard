import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutDrNadadurJanardhanComponent } from './about-dr-nadadur-janardhan.component';

const routes: Routes = [{
  path:'',
  component:AboutDrNadadurJanardhanComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutDrNadadurJanardhanRoutingModule { }
