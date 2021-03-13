import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreetrailActivatComponent } from './freetrail-activat.component';

const routes: Routes = [{
  path:'',
  component: FreetrailActivatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreetrailActivatRoutingModule { }
