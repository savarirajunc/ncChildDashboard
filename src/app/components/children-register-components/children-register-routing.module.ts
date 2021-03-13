import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenRegisterComponent } from './children-register.component'

const routes: Routes = [
  {
    path: '',
    component: ChildrenRegisterComponent,
    data: {
      title: 'Children Register'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRegisterRoutingModule { }





