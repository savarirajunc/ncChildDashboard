import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewChildDataComponent } from './view-child-data.component';
import { ParentQustionComponent } from './parent-qustion/parent-qustion.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDataViewComponent } from './game-data-view/game-data-view.component';
import { IndGameViewComponent } from './ind-game-view/ind-game-view.component';
import { GameListComponent } from './game-list/game-list.component';
import { HealthViewComponent } from './health-view/health-view.component';

const routes: Routes = [{
  path: '',
  component: ViewChildDataComponent,
  children: [{
    path: '',
    component: ParentQustionComponent
  },
  {
    path:'games/:id',
    component:GameDetailsComponent
  },
  {
    path:'viewgames/:id/:subject',
    component:GameDataViewComponent
  },
  {
    path:'games-list/:id/:ind',
    component:GameListComponent
  },
  {
    path:'indgame/:id',
    component:IndGameViewComponent
  },
  {
    path:'health-view/:sub/:health',
    component:HealthViewComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildDataRoutingModule { }
