import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { DailyScheduleComponent } from './daily-schedule.component';

const routes: Routes = [
  {
    path: '',
    component: DailyScheduleComponent,
    data: {
      title: 'Daily Schedule'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyScheduleRoutingModule {}