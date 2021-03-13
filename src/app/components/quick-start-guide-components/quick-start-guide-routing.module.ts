import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { QuickStartGuideComponent } from './quick-start-guide.component';

const routes: Routes = [
  {
    path: '',
    component: QuickStartGuideComponent,
    data: {
      title: 'Quick Start Guide'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickStartGuideRoutingModule {}

