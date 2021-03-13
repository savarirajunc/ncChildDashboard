import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalizedLearningComponent } from './personalized-learning.component';

const routes: Routes = [{
  path: '',
  component: PersonalizedLearningComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizedLearningRoutingModule { }
