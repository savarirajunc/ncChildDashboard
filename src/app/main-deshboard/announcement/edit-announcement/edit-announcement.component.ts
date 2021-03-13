import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {
  id;
  formData: any = [];
  public  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  constructor(private activatedRoute: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.dashboardService.getAnnouncementById({'id': this.id}).subscribe(response => {
     this.formData = response.data;
    });
  }

  onSubmit(form) {
    this.dashboardService.createAnnouncement(this.formData).subscribe(response => {
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.messages;
        this._response['alert'] = 'alert alert-success';
      } else {
        this._response['status'] = false;
        this._response['message'] = response.messages;
        this._response['alert'] = 'alert alert-danger';
      }
    });
  }

}
