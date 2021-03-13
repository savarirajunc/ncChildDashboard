import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-health-day-edit',
  templateUrl: './health-day-edit.component.html',
  styleUrls: ['./health-day-edit.component.css']
})
export class HealthDayEditComponent implements OnInit {
  formData:any={};
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  grade_id;
  subject_id;
  heth_cat;
  core_id;
  day_id;
  healthDevCat:any=[];
  grade:any=[];
  subjects:any=[];
  getDayMapQues:any=[];
  days:any=[];
  questionViewall:any=[];
  gethealthcore:any=[];
  coreframwork:any=[];

  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
      this.healthDevCat = response.data;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    this.dashboardService.getDaysHealthInfo().subscribe(response =>{
      this.days = response.data;
    });
    this.dashboardService.getHealthDeveQues().subscribe(response =>{
      this.questionViewall = response.data;
    });
  }

  ngOnInit() {
    this.grade_id = this.activatedRoute.snapshot.params.grad_id;
    this.subject_id = this.activatedRoute.snapshot.params.subject_id;
    this.heth_cat = this.activatedRoute.snapshot.params.heth_cat;
    this.core_id = this.activatedRoute.snapshot.params.core_id;
    this.day_id = this.activatedRoute.snapshot.params.id;
    this.dashboardService.getDayMapQuesVal({"grade_id":this.grade_id,"subject_id":this.subject_id,"heth_cat":this.heth_cat,"day_id":this.day_id}).subscribe( response=>{
      this.getDayMapQues = response.data;
      this.formData={"healthDevelopmentQA":this.getDayMapQues};
    });


  }
  onSubmit(form): void{
    console.log(this.formData);
    this.dashboardService.dayMapQuesUpdate(this.formData).subscribe(response =>{
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
