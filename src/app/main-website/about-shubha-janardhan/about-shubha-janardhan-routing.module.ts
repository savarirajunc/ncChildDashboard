import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutShubhaJanardhanComponent } from './about-shubha-janardhan.component';

const routes: Routes = [{
  path:'',
  component: AboutShubhaJanardhanComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutShubhaJanardhanRoutingModule { }
