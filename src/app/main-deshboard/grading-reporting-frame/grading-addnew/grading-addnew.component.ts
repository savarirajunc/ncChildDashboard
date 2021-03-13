import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-grading-addnew',
  templateUrl: './grading-addnew.component.html',
  styleUrls: ['./grading-addnew.component.css']
})
export class GradingAddnewComponent implements OnInit {
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
  constructor(private dashboardService:DashboardService) {
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
  }
  gradingFormSubmit(form){
    this.dashboardService.gradingReportingCreate(this.formData).subscribe(response => {

      console.log(response);
      if(response.status){
      form.reset();
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
