import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { DailySessionComponent } from './daily-session.component';

const routes: Routes = [
  {
    path: '',
    component: DailySessionComponent,
    data: {
      title: 'Daily Session'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailySessionRoutingModule { }




