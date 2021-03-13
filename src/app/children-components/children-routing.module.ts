import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenComponent } from './children.component';

import { ChildProfileComponent } from './child-profile/child-profile.component';
import { ChildInterestDeveComponent } from './child-interest-deve/child-interest-deve.component';
import { ChildFriendInfoComponent } from './child-friend-info/child-friend-info.component';
import { ChildHomeAddressComponent } from './child-home-address/child-home-address.component';
import { ChildLanguageInfoComponent } from './child-language-info/child-language-info.component';

import { ChildNutritionComponent } from './child-nutrition/child-nutrition.component';
import { ChildFamilyInfoComponent } from './child-family-info/child-family-info.component';
import { ChildEduInformationComponent } from './child-edu-information/child-edu-information.component';
import { ChildCaregiverInfoComponent } from './child-caregiver-info/child-caregiver-info.component';
import { ChildDeactiveComponent } from './child-deactive/child-deactive.component';



const routes: Routes = [{
  path: '',
  redirectTo: 'profiles',
  pathMatch: 'full',
},
{
  path: '',

  data: {
    title: 'Children'
  },
  children: [
    {
      path: 'profiles',
      component: ChildProfileComponent,
      data: {
        title: 'Children-Profiles'
      }
    },
    {
      path: 'deactive',
      component: ChildDeactiveComponent,
      data: {
        title: 'Children-deactive'
      }
    }, {
      path: 'interest-deve',
      component: ChildInterestDeveComponent,
      data: {
        title: 'Children-Interest-Deve'
      }
    }, {
      path: 'friend-info',
      component: ChildFriendInfoComponent,
      data: {
        title: 'Children-friend-info'
      }
    }, {
      path: 'home-address',
      component: ChildHomeAddressComponent,
      data: {
        title: 'Children-Home-Address'
      }
    },
    {
      path: 'language-info',
      component: ChildLanguageInfoComponent,
      data: {
        title: 'Children-Language-Info'
      }
    },
    {
      path: 'nutrition',
      component: ChildNutritionComponent,
      data: {
        title: 'Children-Nutrition'
      }
    },
    {
      path: 'edu-information',
      component: ChildEduInformationComponent,
      data: {
        title: 'Children-Edu-Information'
      }
    },
    {
      path: 'family-info',
      component: ChildFamilyInfoComponent,
      data: {
        title: 'Children-Family-Information'
      }
    },
    {
      path: 'caregiver-info',
      component: ChildCaregiverInfoComponent,
      data: {
        title: 'Children-Caregiver-Information'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
