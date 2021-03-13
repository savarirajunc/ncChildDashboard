import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
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
import { ParentQusHomeComponent } from './parent-qustionnaire/parent-qus-home/parent-qus-home.component';
import { ParentQusPreschoolComponent } from './parent-qustionnaire/parent-qus-preschool/parent-qus-preschool.component';
import { ParentQusPrekindergartenComponent } from './parent-qustionnaire/parent-qus-prekindergarten/parent-qus-prekindergarten.component';
import { ParentQusKindergartenComponent } from './parent-qustionnaire/parent-qus-kindergarten/parent-qus-kindergarten.component';
import { CompletedComponent } from './completed/completed.component';
import { CompleteParentListComponent } from './complete-parent-list/complete-parent-list.component';
import { ParentInvocieListComponent } from './parent-invocie-list/parent-invocie-list.component';
import { CompleteInvoiceComponent } from './complete-invoice/complete-invoice.component';
const routes: Routes = [
  {
  path: '',
  component: DoctorDashbordComponent,
  children:[
    {
     path:'',
     component:MainPageComponent,
     children:[
       {
       path:'appointment/:id',
       component:AppointmentListComponent
     },
     {
        path:'view-child-details/:id',
        loadChildren:'./main-page/view-child-data/view-child-data.module#ViewChildDataModule'
     },
     {
       path:'',
       component:HomePageComponent
     }
    ]
    },
    {
      path:'parent-list',
      component:ParentListComponent
    },
    {
      path: 'old-parent-history',
      component: CompleteParentListComponent
    },
    {
      path:'nc-health-awareness',
      loadChildren:'./nc-health-awareness/nc-health-awareness.module#NcHealthAwarenessModule'
    },
    {
      path:'parent-invoice/:id',
      component:ParentInvocieComponent
    },
    {
      path:'parent-invoice-complete/:id',
      component:CompleteInvoiceComponent
    },
    {
      path:'parent-invoice-list/:id',
      component: ParentInvocieListComponent
    },
    {
      path:'child-register/:id',
      component:ChildRegisterComponent
    },
    {
      path:'family-info/:id',
      component:FamilyInformationComponent
    },
    {
      path:'parent-qus/:id',
      component:ParentQustionnaireComponent,
      children:[
        {
        path:'',
        component:ParentQusHomeComponent
        },
        {
          path:'core-education',
          component:ParentQusPreschoolComponent
        },
        {
          path:'core-health',
          component:ParentQusPrekindergartenComponent
        },
        {
          path:'core-interest',
          component:ParentQusKindergartenComponent
        }
      ]
    },
    {
      path: 'vistschedule/:id',
      component: VisitScheduleComponent
    },
    {
      path: 'my-account',
      component: MyAccountComponent
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent
    },
    {
      path:'completed',
      component:CompletedComponent
    }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class DoctorDashbordRoutingModule { }
