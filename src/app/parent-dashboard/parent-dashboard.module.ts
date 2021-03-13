import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../../../node_modules/ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TimepickerModule } from 'ngx-bootstrap';
import { AppService, AuthenService, ParentsService } from './../app.index';

import { ParentDashboardRoutingModule } from './parent-dashboard-routing.module';
import { ViewGameDetailsComponent } from './view-game-details/view-game-details.component';
import { ParentDashboardComponent } from './parent-dashboard.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ViewChilEmotionComponent } from './view-chil-emotion/view-chil-emotion.component';

@NgModule({
  imports: [
    CommonModule,
    ParentDashboardRoutingModule,
    TimepickerModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
  ],
  declarations: [ViewGameDetailsComponent, ParentDashboardComponent, DashboardPageComponent, ViewChilEmotionComponent],
  providers: [AppService, AuthenService, ParentsService]
})
export class ParentDashboardModule { }
