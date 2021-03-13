import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoundersWelcomeComponent } from './founders-welcome.component';

const routes: Routes = [{
  path: '',
  component:FoundersWelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundersWelcomeRoutingModule { }
