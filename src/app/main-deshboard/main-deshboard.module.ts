import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDeshboarRoutingdModule } from './main-deshbord-routing.module';
import { MainDeshboardComponent } from './main-deshboard.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { AddRemoveParentComponent } from './add-remove-parent/add-remove-parent.component';
import { Http,HttpModule, Response, Headers, RequestOptions,ConnectionBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DasboardMenuComponent } from './dasboard-menu/dasboard-menu.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ViewallparentinformationComponent } from './viewallparentinformation/viewallparentinformation.component';
import { OrderModule } from 'ngx-order-pipe';
import { ViewchildreninformationComponent } from './viewchildreninformation/viewchildreninformation.component';
import { ChildEducationPerformanceComponent } from './child-education-performance/child-education-performance.component';
import { ChildDevelopmenComponent } from './child-developmen/child-developmen.component';
import { SortChildCoreInterestComponent } from './sort-child-core-interest/sort-child-core-interest.component';
import { GuidedLearningSchoolComponent } from './guided-learning-school/guided-learning-school.component';
import { GuidedLearningMemberComponent } from './guided-learning-member/guided-learning-member.component';
import { DashboardService } from './dashboard.service';
import { SharedService } from './shared.service';
import { CoreFrameworkComponent } from './core-framework/core-framework.component';
import { GradingReportingFrameComponent } from './grading-reporting-frame/grading-reporting-frame.component';
import { DetailsComponent } from './viewallparentinformation/details/details.component';
import { DashboardPipe } from './dashboard.pipe';
import { ChildFilterPipe } from './child-filter.pipe';
import { ChildSchoolWiseComponent } from './child-school-wise/child-school-wise.component';
import { SchoolFilterPipe } from './school-filter.pipe';
import { ChildDetailsComponent } from './viewchildreninformation/child-details/child-details.component';
import { GameTaggingComponent } from './game-tagging/game-tagging.component';
import { AssingNewgameCoreareasComponent } from './assing-newgame-coreareas/assing-newgame-coreareas.component';
import { GameFliterPipe } from './game-fliter.pipe';
import { AssingNewgameDetailsComponent } from './assing-newgame-coreareas/assing-newgame-details/assing-newgame-details.component';
import { AddressPipe } from './address.pipe';
import { CompanyWiseComponent } from './company-wise/company-wise.component';
import { CompanyFilterPipe } from './company-filter.pipe';
import { HomeComponent } from './core-framework/home/home.component';
import { GradeDedtailsComponent } from './core-framework/grade-dedtails/grade-dedtails.component';
import { AddnewComponent } from './core-framework/addnew/addnew.component';
import { KeysObjectPipe } from './core-framework/keys-object.pipe';
import { StandeerdCoreComponent } from './core-framework/standeerd-core/standeerd-core.component';
import { MainPageComponent } from './game-tagging/main-page/main-page.component';
import { GameAddnewComponent } from './game-tagging/game-addnew/game-addnew.component';
import { Addmore3Component } from './game-tagging/addmore3/addmore3.component';
import { AddmoreQuestionComponent } from './game-tagging/addmore-question/addmore-question.component';
import { StanderFilterPipe } from './game-tagging/stander-filter.pipe';
import { GradinHomeComponent } from './grading-reporting-frame/gradin-home/gradin-home.component';
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
import { DirectiveModule } from '../directives/directive-module.module';
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
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SelectgrateComponent } from './guided-learning-member/selectgrate/selectgrate.component';
import { AuthenService } from './../service/authen.service';
import { WebAdminService } from './web-admin.service';
import { NewProductComponent } from './new-product/new-product.component';
import { CKEditorModule } from 'ngx-ckeditor';
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
import { TimepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainDeshboarRoutingdModule,
    HttpModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    OrderModule,
    DirectiveModule,
    SelectDropDownModule,
    CKEditorModule,
    TimepickerModule.forRoot()
  ],
  declarations: [
    MainDeshboardComponent,
    ParentDetailsComponent,
    AddRemoveParentComponent,
    DasboardMenuComponent,
    ParentDashboardComponent,
    ViewallparentinformationComponent,
    ViewchildreninformationComponent,
    ChildEducationPerformanceComponent,
    ChildDevelopmenComponent,
    SortChildCoreInterestComponent,
    GuidedLearningSchoolComponent,
    GuidedLearningMemberComponent,
    CoreFrameworkComponent,
    GradingReportingFrameComponent,
    DetailsComponent,
    DashboardPipe,
    ChildFilterPipe,
    ChildSchoolWiseComponent,
    SchoolFilterPipe,
    ChildDetailsComponent,
    GameTaggingComponent,
    AssingNewgameCoreareasComponent,
    GameFliterPipe,
    AssingNewgameDetailsComponent,
    AddressPipe,
    CompanyWiseComponent,
    CompanyFilterPipe,
    HomeComponent,
    GradeDedtailsComponent,
    AddnewComponent,
    KeysObjectPipe,
    StandeerdCoreComponent,
    MainPageComponent,
    GameAddnewComponent,
    Addmore3Component,
    AddmoreQuestionComponent,
    StanderFilterPipe,
    GradinHomeComponent,
    GradingAddnewComponent,
    GradingViewallComponent,
    GuidedAddnewComponent,
    GuidedViewallComponent,
    GameDataViewComponent,
    AddParentComponent,
    ParentViewComponent,
    HealthDevelopmentComponent,
    AddNewComponent,
    HealthViewallComponent,
    HealthEditComponent,
    HealthDayMapComponent,
    HealthDayAddComponent,
    HealthDayViewComponent,
    HealthDayEditComponent,
    HealthQuesMapComponent,
    HealthQuesAddComponent,
    HealthQuesViewComponent,
    HealthQuesEditComponent,
    GredingSubjectEditComponent,
    GredingCoreEditComponent,
    ParentGuidedLearingComponent,
    ParentGuidedAddComponent,
    ParentGuidedViewComponent,
    ParentGuidedEditComponent,
    GuidedEditComponent,
    SelectgrateComponent,
    NewProductComponent,
    ViewProductComponent,
    EditProductComponent,
    CreateNewCouponsComponent,
    ViewCouponsComponent,
    EditCouponsComponent,
    ViewOrdarComponent,
    OrdarListComponent,
    // DoctorRegistrationComponent,
    // ViewRegistrationComponent,
    // UserDetailsComponent,
    // HospitalDetailsComponent,
    // ClinicDetailsComponent
  ],
  exports:[
    MainDeshboarRoutingdModule,
    DirectiveModule
  ],
  providers:[DashboardService, SharedService, AuthenService, WebAdminService]
})
export class MainDeshboardModule { }
