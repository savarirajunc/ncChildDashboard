import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesViewComponent } from './stories-view.component';

const routes: Routes = [{
  path:'',
  component:StoriesViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesViewRoutingModule { }
