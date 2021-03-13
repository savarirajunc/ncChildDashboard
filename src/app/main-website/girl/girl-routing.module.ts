import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirlComponent } from './girl.component';

const routes: Routes = [{
  path: '',
  component: GirlComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirlRoutingModule { }
