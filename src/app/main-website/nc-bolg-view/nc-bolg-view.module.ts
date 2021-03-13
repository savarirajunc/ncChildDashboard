import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcBolgViewRoutingModule } from './nc-bolg-view-routing.module';
import { NcBolgViewComponent } from './nc-bolg-view.component';

@NgModule({
  imports: [
    CommonModule,
    NcBolgViewRoutingModule
  ],
  declarations: [
    NcBolgViewComponent
  ]
})
export class NcBolgViewModule { }
