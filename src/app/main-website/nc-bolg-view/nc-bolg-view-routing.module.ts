import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NcBolgViewComponent } from './nc-bolg-view.component';

const routes: Routes = [
  {
    path:'',
    component:NcBolgViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcBolgViewRoutingModule { }
