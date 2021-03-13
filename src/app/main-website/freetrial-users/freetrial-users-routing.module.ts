import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreetrialUsersComponent } from './freetrial-users.component';

const routes: Routes = [{
  path:'',
  component:FreetrialUsersComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreetrialUsersRoutingModule { }
