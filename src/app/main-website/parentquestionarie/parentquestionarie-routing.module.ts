import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentQuesHomeComponent } from './parent-ques-home/parent-ques-home.component';
import { ParentquestionarieComponent } from './parentquestionarie.component';
import { ParentQuesChildInfoComponent } from './parent-ques-child-info/parent-ques-child-info.component';
import { ParentQuestionarieComponent } from './parent-questionarie/parent-questionarie.component';
import { ParentQuestionKidComponent } from './parent-question-kid/parent-question-kid.component';
import { CoreEducationComponent } from './parent-question-kid/core-education/core-education.component';
import { CoreInterestComponent } from './parent-question-kid/core-interest/core-interest.component';
import { CoreHealthComponent } from './parent-question-kid/core-health/core-health.component';

const routes: Routes = [
  {
        path: '',
        component : ParentquestionarieComponent,
        children:[{
          path:'',
          component:ParentQuesHomeComponent
        },
        {
          path:'child-info',
          component:ParentQuesChildInfoComponent
        },
        {
          path:'question',
          component:ParentQuestionarieComponent
        },
        {
          path: 'parent-qus/:id',
          component: ParentQuestionKidComponent,
          children:[
            {
              path:'',
              component:CoreHealthComponent,
            },
            {
              path:'core-leargning/:id',
              component:CoreEducationComponent
            },
            {
              path:'core-interest/:id',
              component:CoreInterestComponent
            }
        ]
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentquestionarieRoutingModule { }
