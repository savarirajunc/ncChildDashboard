import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildDashboardComponent } from './child-dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { ChildGameDasboardComponent } from './child-game-dasboard/child-game-dasboard.component';
import { HowYouFeelComponent } from './how-you-feel/how-you-feel.component';

const routes: Routes = [{
  path:'',
  component:ChildDashboardComponent,
  children:[{
    path:'',
    component:MainPageComponent
  },
  {
    path: 'child-game-paly',
    component: GamePlayComponent
  },
  {
    path: 'child-game-session',
    component: ChildGameDasboardComponent
  },
  {
    path: 'how-you-feel',
    component: HowYouFeelComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildDashboardRoutingModule { }
