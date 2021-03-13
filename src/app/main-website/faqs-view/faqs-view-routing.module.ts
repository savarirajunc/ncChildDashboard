import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsViewComponent } from './faqs-view.component';

const routes: Routes = [{
  path:'',
  component:FaqsViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsViewRoutingModule { }
