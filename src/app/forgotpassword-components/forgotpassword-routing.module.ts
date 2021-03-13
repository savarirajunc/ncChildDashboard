import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ForgotpasswordComponent } from './forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordComponent,
    data: {
      title: 'Forgotpassword'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotpasswordRoutingModule {}