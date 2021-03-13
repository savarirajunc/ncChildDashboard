import { NotificationthankyouComponent } from './notificationthankyou.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:NotificationthankyouComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationthankyouRoutingModule { }
