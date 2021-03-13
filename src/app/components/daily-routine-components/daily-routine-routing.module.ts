import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { DailyRoutineComponent } from './daily-routine.component';

const routes: Routes = [
  {
    path: '',
    component: DailyRoutineComponent,
    data: {
      title: 'Daily Routine'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutineRoutingModule {}