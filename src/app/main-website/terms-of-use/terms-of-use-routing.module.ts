import { TermsOfUseComponent } from './terms-of-use.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:TermsOfUseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfUseRoutingModule { }
