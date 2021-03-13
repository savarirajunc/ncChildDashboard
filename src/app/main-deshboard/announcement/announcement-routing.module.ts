import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';
import { AnnounceformComponent } from './announceform/announceform.component';
import { AnnouncementinsertComponent } from './announcementinsert/announcementinsert.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementComponent,
    children: [
      {
        path: '',
        component: AnnounceformComponent
      },
      {
        path: 'add-new-announcement',
        component: AnnouncementinsertComponent
      },
      {
        path: 'edit-announcement/:id',
        component: EditAnnouncementComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
