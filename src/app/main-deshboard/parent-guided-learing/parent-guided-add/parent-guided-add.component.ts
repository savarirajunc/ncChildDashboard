import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SharedService } from '../../../service/shared.service';
import {AppService} from '../../../app.service';
@Component({
  selector: 'app-parent-guided-add',
  templateUrl: './parent-guided-add.component.html',
  styleUrls: ['./parent-guided-add.component.css']
})
export class ParentGuidedAddComponent implements OnInit {
    public formData: any = {};
    public addServiceInit = false;
    _response: any = { 'status': false, 'alert': 'info', 'message': '' };
    guidedlist: any = [];
    coreframwork: any = [];
    subjects: any = [];
    gamedetails: any = [];
    guidedSchedule: any = [];
    getid: any = [];
    guidedScheduleDay: any = [];
    gamedetailsfilter: any = [];
    public days;
    constructor(private dashboardService: DashboardService, private sharedService: SharedService, private appService: AppService) {
      this.dashboardService.getguidedListInfo().subscribe(response => {
        this.guidedlist = response.data;
      });
      this.dashboardService.getCoreFrameworkInfo().subscribe(response => {
        this.coreframwork = response;
      });
      this.dashboardService.getsubjectInfo().subscribe(response => {
        this.subjects = response.data;
      });
      this.dashboardService.getParentGuidedGameInfo().subscribe(response => {
        this.gamedetails = response.data;
      });
      this.dashboardService.getDaysInfo().subscribe(response => {
        this.days = response.data;
      });

    }
    ngOnInit() {
    }
    guidedSubmit(formData) {
      this.dashboardService.parentGamesDayCreate(this.formData).subscribe(response => {

        if (response.status) {
          formData.reset();
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = 'alert alert-success';
        // setTimeout(() => {
        //   this.router.navigate(['/signin']);
        // }, 5000);
        } else {
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = 'alert alert-danger';
        }
        console.log(this.getid);
      });
    }

}
