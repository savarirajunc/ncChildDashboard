import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ReactiveDetailComponent } from './reactive-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveDetailComponent,
    data: {
      title: 'Reactive Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDetailRoutingModule {}