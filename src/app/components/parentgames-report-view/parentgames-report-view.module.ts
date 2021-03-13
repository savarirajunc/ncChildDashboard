import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentgamesReportViewComponent } from './parentgames-report-view.component';
import { ParentgamesReportViewRoutingModule } from './parentgames-report-view-routing.module';
import { AppService,AuthenService,ParentsService } from './../../app.index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ParentgamesReportViewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ParentgamesReportViewComponent],
  providers:[AppService,AuthenService,ParentsService]
})
export class ParentgamesReportViewModule { }
