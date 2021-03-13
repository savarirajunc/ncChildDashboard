import { ContactserviceService } from './main-website/contactservice.service';
import { HealthcareFinalInfoService } from './main-website/healthcare-final-info.service';
import { ParentquestService } from './main-website/parentquest.service';
import { MainWebsiteService } from './main-website/main-website.service';
import { ChildrenService } from './service/children.service';
import { GuidedlearningComponent } from './guidedlearning/guidedlearning.component';
import { CartPageService } from './service/cart-page.service';
import { UploadFileService } from './upload-file.service';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { CarouselModule,BsDatepickerModule  } from 'ngx-bootstrap';
import { SelectModule } from 'ng2-select'; //  Select2 dropdown
import { ParentsService } from './service/parents.service';
import { AuthGuardService} from './service/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, AppService, AppRoutingModule, AuthenService, SharedService} from './app.index';
import { MainHeaderComponent } from './header.component/main-header/main-header.component';
import { MainFooterComponent } from './footer.component/main-footer/main-footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutsComponent } from './layouts-components/layouts.component';
import { HttpClientModule } from '@angular/common/http'
import { GeneralLayoutsComponent } from './layouts-components/general-layouts.component';
import { ChildLayoutsComponent } from './layouts-components/child-layouts.component';
import { ParentLayoutsComponent } from './layouts-components/parent-layouts.component';
import { GeneralHeaderComponent } from './header-components/general-header.component';
import { HeaderComponent } from './header-components/header.component';
import { FooterComponent } from './footer-components/footer.component';
import { ChildFooterComponent } from './footer-components/child-footer.component';
import { ComponentsService } from './service/components.service';
import { AsideComponent } from './components/aside.component';
import { NavMenuComponent} from './components/nav-menu.component';
import { ParentQusThankComponent } from './parent-qus-thank/parent-qus-thank.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { LandingPageLayoutComponent } from './landing-page-layout/landing-page-layout.component';
import { GirlboyFooterComponent } from './main-website/girlboy-footer/girlboy-footer.component';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {  HttpClientJsonpModule } from '@angular/common/http';
import { ChildHeaderComponent } from './header-components/child-header.component';
import { HealthcareimageComponent } from './healthcare-providers/healthcareimage/healthcareimage.component';
import { TooltipModule } from 'ng2-tooltip-directive';
@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainPageComponent,
    MainHeaderComponent,
    MainMenuComponent,
    SignInComponent,
    GuidedlearningComponent,
    LayoutsComponent,
    GeneralLayoutsComponent,
    ChildLayoutsComponent,
    ParentLayoutsComponent,
    GeneralHeaderComponent,
    HeaderComponent,
    FooterComponent,
    ChildFooterComponent,
    AsideComponent,
    NavMenuComponent,
    ParentQusThankComponent,
    EmailVerifyComponent,
    LandingPageLayoutComponent,
    GirlboyFooterComponent,
    ChildHeaderComponent,
    HealthcareimageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    SelectModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    JsonpModule,
    HttpClientJsonpModule,
    TooltipModule
  ],
  providers: [
    MainWebsiteService,
    Title,
    UploadFileService,
    ChildrenService,
    AppService,
    ComponentsService,
    AuthGuardService,
    ParentsService,
    AuthenService,
    SharedService,
    { provide: LocationStrategy, useClass: PathLocationStrategy},
    CartPageService,
    ParentquestService,
    HealthcareFinalInfoService,
    ContactserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
