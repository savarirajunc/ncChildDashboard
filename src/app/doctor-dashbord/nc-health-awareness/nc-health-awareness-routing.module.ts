import { NcHealthAwarenessComponent } from './nc-health-awareness.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: NcHealthAwarenessComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NcHealthAwarenessRoutingModule { }
