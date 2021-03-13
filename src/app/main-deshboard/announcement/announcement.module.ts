import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';
import { AnnounceformComponent } from './announceform/announceform.component';
import { AnnouncementinsertComponent } from './announcementinsert/announcementinsert.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';


@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AnnouncementComponent,
    AnnounceformComponent,
    AnnouncementinsertComponent,
    EditAnnouncementComponent
  ]
})
export class AnnouncementModule { }
