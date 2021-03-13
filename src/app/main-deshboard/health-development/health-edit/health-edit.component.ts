import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-health-edit',
  templateUrl: './health-edit.component.html',
  styleUrls: ['./health-edit.component.css']
})
export class HealthEditComponent implements OnInit {
  formData:any={
  };
  formValu:any={};
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  grade_id;
  subject_id;
  heth_cat;
  healthFormData:FormGroup;
  healthDevCat:any=[];
  grade:any=[];
  subjects:any=[];
  gethealth:any=[];
  gethealthcore:any=[];
  coreframwork:any=[];
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService, private formBuilder:FormBuilder) {

    this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
      this.healthDevCat = response.data;
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
  }

  ngOnInit() {
    this.grade_id = this.activatedRoute.snapshot.params.grad_id;
    this.subject_id = this.activatedRoute.snapshot.params.subject_id;
    this.heth_cat = this.activatedRoute.snapshot.params.id;
    this.dashboardService.getHealthDevQues({"grade_id":this.grade_id,"subject_id":this.subject_id,"heth_cat":this.heth_cat}).subscribe( response=>{
      this.gethealth = response.data;
      this.dashboardService.getHealthCore({"grade_id":this.grade_id,"subject_id":this.subject_id,"heth_cat":this.heth_cat}).subscribe( response=>{
        this.gethealthcore = response.data;
        this.formData={"gamaData":this.gethealthcore,"healthDevelopmentQA":this.gethealth};
    });
    });
    this.formValu = this.gethealthcore,this.formData;
  }
  onSubmit(form): void{
    console.log(this.formValu);
    this.dashboardService.getHealthDevQuesUpdate(this.formData).subscribe(response =>{
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
