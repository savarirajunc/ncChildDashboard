import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ChildProfileRegiterComponent } from './child-profile-regiter.component';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { ChildProfilComponent } from './child-profil/child-profil.component';
import { ChildScheduledTimeComponent } from './child-scheduled-time/child-scheduled-time.component';
import { ChildSessionStartComponent } from './child-session-start/child-session-start.component';
import { FinalSlideComponent } from './final-slide/final-slide.component'

const routes: Routes = [
  {
    path: '',
    component: ChildProfileRegiterComponent,
    data: {
      title: 'Child-Profiles'
    },
    children:[{
      path:'',
      component:FirstSlideComponent
    },
    {
      path:'register',
      component:ChildProfilComponent
    },
    {
      path:'scheduletime',
      component:ChildScheduledTimeComponent
    },
    {
      path:'sessionstart',
      component:ChildSessionStartComponent
    },
    {
      path:'final-silde',
      component:FinalSlideComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildProfileRegiterRoutingModule { }
