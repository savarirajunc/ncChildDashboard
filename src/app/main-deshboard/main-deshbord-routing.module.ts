import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainDeshboardComponent } from './main-deshboard.component';
import {ParentDetailsComponent} from './parent-details/parent-details.component';
import { AddRemoveParentComponent } from './add-remove-parent/add-remove-parent.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ViewallparentinformationComponent } from './viewallparentinformation/viewallparentinformation.component';
import { ViewchildreninformationComponent } from './viewchildreninformation/viewchildreninformation.component';
import { ChildEducationPerformanceComponent } from './child-education-performance/child-education-performance.component';
import { ChildDevelopmenComponent } from './child-developmen/child-developmen.component';
import { SortChildCoreInterestComponent } from './sort-child-core-interest/sort-child-core-interest.component';
import { GuidedLearningSchoolComponent } from './guided-learning-school/guided-learning-school.component';
import { GuidedLearningMemberComponent } from './guided-learning-member/guided-learning-member.component';
import { GradingReportingFrameComponent } from './grading-reporting-frame/grading-reporting-frame.component';
import { CoreFrameworkComponent } from './core-framework/core-framework.component';
import { DetailsComponent } from './viewallparentinformation/details/details.component';
import { ChildSchoolWiseComponent } from './child-school-wise/child-school-wise.component';
import { ChildDetailsComponent } from './viewchildreninformation/child-details/child-details.component';
import { GameTaggingComponent } from './game-tagging/game-tagging.component';
import { AssingNewgameCoreareasComponent } from './assing-newgame-coreareas/assing-newgame-coreareas.component';
import { AssingNewgameDetailsComponent } from './assing-newgame-coreareas/assing-newgame-details/assing-newgame-details.component';
import { CompanyWiseComponent } from './company-wise/company-wise.component';
import { HomeComponent } from './core-framework/home/home.component';
import { GradeDedtailsComponent } from './core-framework/grade-dedtails/grade-dedtails.component';
import { AddnewComponent } from './core-framework/addnew/addnew.component';
import { StandeerdCoreComponent } from './core-framework/standeerd-core/standeerd-core.component';
import { MainPageComponent } from './game-tagging/main-page/main-page.component';
import { GameAddnewComponent } from './game-tagging/game-addnew/game-addnew.component';
import { AddmoreQuestionComponent } from './game-tagging/addmore-question/addmore-question.component';
import { GradingAddnewComponent } from './grading-reporting-frame/grading-addnew/grading-addnew.component';
import { GradingViewallComponent } from './grading-reporting-frame/grading-viewall/grading-viewall.component';
import { GuidedAddnewComponent } from './guided-learning-member/guided-addnew/guided-addnew.component';
import { GuidedViewallComponent } from './guided-learning-member/guided-viewall/guided-viewall.component';
import { GameDataViewComponent } from './game-tagging/game-data-view/game-data-view.component';
import { AddParentComponent } from './add-remove-parent/add-parent/add-parent.component';
import { ParentViewComponent } from './add-remove-parent/parent-view/parent-view.component';
import { HealthDevelopmentComponent } from './health-development/health-development.component';
import { AddNewComponent } from './health-development/add-new/add-new.component';
import { HealthViewallComponent } from './health-development/health-viewall/health-viewall.component';
import { HealthEditComponent } from './health-development/health-edit/health-edit.component';
import { HealthDayMapComponent } from './health-day-map/health-day-map.component';
import { HealthDayAddComponent } from './health-day-map/health-day-add/health-day-add.component';
import { HealthDayViewComponent } from './health-day-map/health-day-view/health-day-view.component';
import { HealthDayEditComponent } from './health-day-map/health-day-edit/health-day-edit.component';
import { HealthQuesMapComponent } from './health-ques-map/health-ques-map.component';
import { HealthQuesAddComponent } from './health-ques-map/health-ques-add/health-ques-add.component';
import { HealthQuesViewComponent } from './health-ques-map/health-ques-view/health-ques-view.component';
import { HealthQuesEditComponent } from './health-ques-map/health-ques-edit/health-ques-edit.component';
import { GredingSubjectEditComponent } from './grading-reporting-frame/greding-subject-edit/greding-subject-edit.component';
import { GredingCoreEditComponent } from './grading-reporting-frame/greding-core-edit/greding-core-edit.component';
import { ParentGuidedLearingComponent } from './parent-guided-learing/parent-guided-learing.component';
import { ParentGuidedAddComponent } from './parent-guided-learing/parent-guided-add/parent-guided-add.component';
import { ParentGuidedViewComponent } from './parent-guided-learing/parent-guided-view/parent-guided-view.component';
import { ParentGuidedEditComponent } from './parent-guided-learing/parent-guided-edit/parent-guided-edit.component';
import { GuidedEditComponent } from './guided-learning-member/guided-edit/guided-edit.component';
import { SelectgrateComponent } from './guided-learning-member/selectgrate/selectgrate.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateNewCouponsComponent } from './create-new-coupons/create-new-coupons.component';
import { ViewCouponsComponent } from './view-coupons/view-coupons.component';
import { EditCouponsComponent } from './edit-coupons/edit-coupons.component';
import { ViewOrdarComponent } from './view-ordar/view-ordar.component';
import { OrdarListComponent } from './ordar-list/ordar-list.component';
// import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
// import { ViewRegistrationComponent } from './doctor-registration/view-registration/view-registration.component';
// import { UserDetailsComponent } from './doctor-registration/user-details/user-details.component';
// import { HospitalDetailsComponent } from './doctor-registration/hospital-details/hospital-details.component';
// import { ClinicDetailsComponent } from './doctor-registration/clinic-details/clinic-details.component';

const routes: Routes = [{
  path: '',
  component: MainDeshboardComponent,
  children: [
    {
    path: '',
    component: GuidedLearningSchoolComponent
  },
  {
    path: 'parentgameguidedlearing',
    component: ParentGuidedLearingComponent,
    children: [
      {
        path: '',
        component: ParentGuidedViewComponent
      },
      {
      path: 'addnew',
      component: ParentGuidedAddComponent,
    },
    {
      path: 'viewall',
      component: ParentGuidedViewComponent
    }
  ]
  },
  {
    path: 'doctor-registration',
    loadChildren: './doctor-register/doctor-register.module#DoctorRegisterModule'
  },
  {
    path: 'announcement',
    loadChildren: './announcement/announcement.module#AnnouncementModule'
  },
  {
  path: 'addandremove',
  component: AddRemoveParentComponent,
  children: [{
    path: '',
    component: ParentViewComponent
  },
  {
    path: 'addparent',
    component: AddParentComponent
  }
]
},
  {
    path: 'parentdashboard',
    component: ParentDashboardComponent
  },
  {
    path: 'viewparentinformation',
    component: ViewallparentinformationComponent,
    children: [

    ]
  },
  {
    path: 'healthdaymap',
    component: HealthDayMapComponent,
    children: [{
      path: '',
      component: HealthDayViewComponent
    },
    {
      path: 'viewall',
      component: HealthDayViewComponent
    },
    {
      path: 'addnew',
      component: HealthDayAddComponent
    },
    {
      path: 'healthdaymapedit/:grad_id/:core_id/:subject_id/:heth_cat/:id',
      component: HealthDayEditComponent
    }
  ]
  },
  {
      path: 'healthquesmap',
      component: HealthQuesMapComponent,
      children: [{
        path: '',
        component: HealthQuesViewComponent
      },
      {
        path: 'viewall',
        component: HealthQuesViewComponent
      },
      {
        path: 'addnew',
        component: HealthQuesAddComponent
      },
      {
        path: 'healthdaymapedit/:grad_id/:subject_id/:id',
        component: HealthQuesEditComponent
      }
    ]
  },
  {
    path: 'healthdevelopment',
    component: HealthDevelopmentComponent,
    children: [{
      path: '',
      component: HealthViewallComponent
    },
    {
      path: 'addnew',
      component: AddNewComponent
    },
    {
      path: 'viewhealthdevelopment',
      component: HealthViewallComponent
    },
    {
      path: 'healthdevelopmentedit/:grad_id/:subject_id/:id',
      component: HealthEditComponent
    }
  ]
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'viewchildreninformation',
    component: ViewchildreninformationComponent
  },
  {
    path: 'childdetails/:id',
    component: ChildDetailsComponent
  },
  {
    path: 'ChildEducationPerformance',
    component: ChildEducationPerformanceComponent
  },
  {
    path: 'sortchildcoreInterest',
    component: SortChildCoreInterestComponent
  },
  {
    path: 'childDevelopmen',
    component: ChildDevelopmenComponent
  },
  {
    path: 'dashboardhome',
    component: GuidedLearningSchoolComponent
  },
  {
    path: 'guidedlearningmember',
    component: GuidedLearningMemberComponent,
    children: [{
      path: '',
      component: GuidedViewallComponent
    },
    {
      path: 'guidedadd',
      component: GuidedAddnewComponent
    },
    {
      path: 'guidedview',
      component: GuidedViewallComponent
    },
    {
      path: 'select/:id',
      component: SelectgrateComponent
    },
    {
      path: 'edit/:id/:grade_id',
      component: GuidedEditComponent
    }
  ]
  },
  {
    path: 'coreframework',
    component: CoreFrameworkComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'viewcoreframe',
      component: HomeComponent
    },
    {
      path: 'addnew',
      component: AddnewComponent
    },
    {
      path: 'gradedetails/:id',
      component: GradeDedtailsComponent
    },
    {
      path: 'standerds/:grad_id/:fram_id/:id',
      component: StandeerdCoreComponent
    }
    ]
  },
  {
    path: 'childschoolwise',
    component: ChildSchoolWiseComponent
  },
  {
    path: 'gradingreporting',
    component: GradingReportingFrameComponent,
    children: [{
      path: '',
      component: GradingAddnewComponent
    },
    {
      path: 'gradingaddnew',
      component: GradingAddnewComponent
    },
    {
      path: 'gradingviewall',
      component: GradingViewallComponent
    },
    {
      path: 'gradingedit/:grad_id/:id',
      component: GredingCoreEditComponent
    },
    {
      path: 'gradingedit/:grad_id/:core_id/:id',
      component: GredingSubjectEditComponent,
    }
  ]
  },
  {
    path: 'gametagging',
    component: GameTaggingComponent,
    children: [{
      path: '',
      component: MainPageComponent
    },
    {
      path: 'viewgame',
      component: MainPageComponent
    },
    {
      path: 'addnew',
      component: GameAddnewComponent
    },
    {
      path: 'addnewquestion',
      component: AddmoreQuestionComponent
    },
    {
      path: 'gameDataView/:id',
      component: GameDataViewComponent
    }
  ]
  },
  {
    path: 'assingnewgame',
    component: AssingNewgameCoreareasComponent,
  },
  {
    path: 'assingnewgamedetails/:id',
    component: AssingNewgameDetailsComponent
  },
  {
    path: 'companywise',
    component: CompanyWiseComponent
  },
  {
    path: 'view-product',
    component: ViewProductComponent
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent
  },
  {
  path: 'add-product',
  component: NewProductComponent
},
{
  path: 'add-new-coupon',
  component: CreateNewCouponsComponent
},
{
  path: 'view-coupons',
  component: ViewCouponsComponent
},
{
  path: 'edit-coupons/:id',
  component: EditCouponsComponent
},
{
  path: 'view-ordar/:id',
  component: ViewOrdarComponent
},
{
  path: 'Orders',
  component: OrdarListComponent
},
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class MainDeshboarRoutingdModule { }
