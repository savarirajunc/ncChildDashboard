import { InterestExplorationComponent } from './interest-exploration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:InterestExplorationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestExplorationRoutingModule { }
