import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greding-subject-edit',
  templateUrl: './greding-subject-edit.component.html',
  styleUrls: ['./greding-subject-edit.component.css']
})
export class GredingSubjectEditComponent implements OnInit {
  grade_id;
  core_id;
  subject_id;
  public formData:any={};
  public _response: any = { "status": false,"alert":"info", "message": "" };

  grframe:any=[];
  grtype:any=[];
  coreframwork:any=[];
  gradingreportingview:any=[];
  subjects:any=[];
  grframetype:any=[
    {
      id:1,
      type_name:'Child Game',
    },
    {
      id:2,
      type_name:'Parent Game',
    },
    {
      id:3,
      type_name:'Parent Questionaries'
    }
];
coreValue:any=[];
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getgrFramework().subscribe(response =>{
      this.grframe = response.data
    });
    this.dashboardService.getgradingReporting().subscribe(response =>{
      this.gradingreportingview = response.data;
    });
    this.dashboardService.getgrType().subscribe(response =>{
      this.grtype = response.data;
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
  }

  ngOnInit() {
    this.grade_id = this.activatedRoute.snapshot.params.grad_id;
    this.core_id = this.activatedRoute.snapshot.params.core_id;
    this.subject_id = this.activatedRoute.snapshot.params.id
    this.dashboardService.getGradingSubWise({"grade_id":this.grade_id,"core_frame_id":this.core_id,"subject_id":this.subject_id}).subscribe(response =>{
      this.coreValue = response.data;
    });
  }

  gradingFormSubmit(form){
    this.dashboardService.gradingReportingUpdate({"gradingUpdate":this.coreValue}).subscribe(response => {

      console.log(response);
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
      }
      else{
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }

    });

  }

}
