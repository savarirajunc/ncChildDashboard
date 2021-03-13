import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ParentgamesReportViewComponent } from './parentgames-report-view.component';

const routes: Routes = [
  {
    path: '',
    component: ParentgamesReportViewComponent,
    data: {
      title: 'Parent Game'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentgamesReportViewRoutingModule { }
