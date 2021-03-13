import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildDataRoutingModule } from './view-child-data-routing.module';
import { ViewChildDataComponent } from './view-child-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentQustionComponent } from './parent-qustion/parent-qustion.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameDataViewComponent } from './game-data-view/game-data-view.component';
import { IndGameViewComponent } from './ind-game-view/ind-game-view.component';
import { GameListComponent } from './game-list/game-list.component';
import { HealthViewComponent } from './health-view/health-view.component';

@NgModule({
  imports: [
    CommonModule,
    ViewChildDataRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ViewChildDataComponent, ParentQustionComponent, GameDetailsComponent, GameDataViewComponent, IndGameViewComponent, GameListComponent, HealthViewComponent]
})
export class ViewChildDataModule { }
