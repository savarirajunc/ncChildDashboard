import { ParentDashboardComponent } from './parent-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ViewGameDetailsComponent } from './view-game-details/view-game-details.component';
import { ViewChilEmotionComponent } from './view-chil-emotion/view-chil-emotion.component';

const routes: Routes = [{
  path: '',
  component: ParentDashboardComponent,
  children:[{
    path: '',
    component: DashboardPageComponent
  },
  {
    path: 'viewGamedetails/:id',
    component: ViewGameDetailsComponent
  },
  {
    path: 'viewchildemotion/:id',
    component: ViewChilEmotionComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentDashboardRoutingModule { }
