import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';
import { ChildDashboardRoutingModule } from './child-dashboard-routing.module';
import { ChildDashboardComponent } from './child-dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { ChildGameDasboardComponent } from './child-game-dasboard/child-game-dasboard.component';
import { HowYouFeelComponent } from './how-you-feel/how-you-feel.component';

@NgModule({
  imports: [
    CommonModule,
    ChildDashboardRoutingModule,
    CarouselModule.forRoot(),
  ],
  declarations: [ChildDashboardComponent, MainPageComponent, GamePlayComponent, ChildGameDasboardComponent, HowYouFeelComponent]
})
export class ChildDashboardModule { }
