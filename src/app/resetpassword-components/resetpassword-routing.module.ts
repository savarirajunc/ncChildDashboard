import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ResetpasswordComponent } from './resetpassword.component';

const routes: Routes = [
  {
    path: '',
    component: ResetpasswordComponent,
    data: {
      title: 'Resetpassword'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpasswordRoutingModule {}