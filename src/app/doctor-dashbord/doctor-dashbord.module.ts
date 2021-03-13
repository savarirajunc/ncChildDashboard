import { ParentquestService } from './../main-website/parentquest.service';
import { MainWebsiteService } from './../main-website/main-website.service';
import { DoctorDashboardService } from './doctor-dashboard.service';
import { DirectiveModule } from './../directives/directive-module.module';
//import { ChildrenService } from './../service/children.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { DashbordMenuComponent } from './dashbord-menu/dashbord-menu.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentInvocieComponent } from './parent-invocie/parent-invocie.component';
import { ChildRegisterComponent } from './child-register/child-register.component';
import { AppointmentListComponent } from './main-page/appointment-list/appointment-list.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { FamilyInformationComponent } from './family-information/family-information.component';
import { ParentQustionnaireComponent } from './parent-qustionnaire/parent-qustionnaire.component';
import { VisitScheduleComponent } from './visit-schedule/visit-schedule.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ParentQusHomeComponent } from './parent-qustionnaire/parent-qus-home/parent-qus-home.component';
import { ParentQusPreschoolComponent } from './parent-qustionnaire/parent-qus-preschool/parent-qus-preschool.component';
import { ParentQusPrekindergartenComponent } from './parent-qustionnaire/parent-qus-prekindergarten/parent-qus-prekindergarten.component';
import { ParentQusKindergartenComponent } from './parent-qustionnaire/parent-qus-kindergarten/parent-qus-kindergarten.component';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { CompletedComponent } from './completed/completed.component';
import { CompleteParentListComponent } from './complete-parent-list/complete-parent-list.component';
import { ParentInvocieListComponent } from './parent-invocie-list/parent-invocie-list.component';
import { CompleteInvoiceComponent } from './complete-invoice/complete-invoice.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule,
    FormsModule,
    TimepickerModule.forRoot(),
    DirectiveModule,
    ReactiveFormsModule,
    JsonpModule
    //NgbModule
  ],
  providers:[DoctorDashboardService,MainWebsiteService,ParentquestService],
  declarations: [DoctorDashbordComponent, MainPageComponent, DashbordMenuComponent, ParentListComponent, ParentInvocieComponent, ChildRegisterComponent, AppointmentListComponent, HomePageComponent, FamilyInformationComponent, ParentQustionnaireComponent, VisitScheduleComponent, MyAccountComponent, ChangePasswordComponent, ParentQusHomeComponent, ParentQusPreschoolComponent, ParentQusPrekindergartenComponent, ParentQusKindergartenComponent, CompletedComponent, CompleteParentListComponent, ParentInvocieListComponent, CompleteInvoiceComponent]
})
export class DoctorDashbordModule { }
