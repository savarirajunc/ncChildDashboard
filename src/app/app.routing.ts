import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { CartPageComponent } from './cart-page/cart-page.component';
import { GuidedlearningComponent } from './guidedlearning/guidedlearning.component';
import { CONSTANTS } from './app.constants';
import { LayoutsComponent } from './layouts-components/layouts.component';
import { GeneralLayoutsComponent} from './layouts-components/general-layouts.component';
import { ParentLayoutsComponent } from './layouts-components/parent-layouts.component';
import { ChildLayoutsComponent } from './layouts-components/child-layouts.component';
import { AuthGuardService } from './service/auth-guard.service';
import { ParentQusThankComponent } from './parent-qus-thank/parent-qus-thank.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { LandingPageLayoutComponent } from './landing-page-layout/landing-page-layout.component';


import { ROUTER } from './app.config';

export const routes: Routes = [{
  path: '',
  redirectTo: 'children-dashboard/:id/:ip',
 pathMatch: 'full',
},
{
  path: '',
  component: ChildLayoutsComponent,
  children: [
    {
      path: 'children-dashboard/:id/:ip',
      loadChildren: './child-dashboard/child-dashboard.module#ChildDashboardModule'
    }
  ]
},
{ path: '404', component: ChildLayoutsComponent },
{ path: '**', redirectTo: 'children-dashboard/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
