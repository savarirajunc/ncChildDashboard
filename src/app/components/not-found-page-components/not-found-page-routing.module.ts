import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
    data: {
      title: 'Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule {}