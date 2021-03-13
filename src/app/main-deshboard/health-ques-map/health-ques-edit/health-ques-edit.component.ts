import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-health-ques-edit',
  templateUrl: './health-ques-edit.component.html',
  styleUrls: ['./health-ques-edit.component.css']
})
export class HealthQuesEditComponent implements OnInit {
  formData:any={};
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  grade_id;
  subject_id;
  heth_cat;
  game_id;
  healthDevCat:any=[];
  coreframwork:any=[];
  grade:any=[];
  subjects:any=[];
  getParentCoreMapVal:any=[];
  getParentCoreMapStn:any=[];
  getParentCoreMapInd:any=[];
  standard:any=[];
  indicator:any=[];
  contactForm: FormGroup;
  public days;
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService, private formBuilder:FormBuilder) {

    this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
      this.healthDevCat = response.data;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getStandardInfo().subscribe(response =>{
      this.standard = response;
    });
    this.dashboardService.getIndicatorsInfo().subscribe(response =>{
      this.indicator = response;
    });
    this.dashboardService.getDaysInfo().subscribe(response =>{
      this.days = response.data;
    })
  }
  private initForm(): void {
    this.contactForm = this.formBuilder.group({
        grade_id:'',
        games_name:'',
        gameCoreFrame: this.formBuilder.array([
        this.formBuilder.group({
          framework_id:'',
          subject_id:'',
          gamecoretype:'1',
          standard_id:'',
          indicator_id:'',
          indicator_id1:'',
          indicator_id2:'',
          indicator_id3:''
        })
      ])
    })
  }
  ngOnInit() {
    this.grade_id = this.activatedRoute.snapshot.params.grad_id;
    this.subject_id = this.activatedRoute.snapshot.params.subject_id;
    this.game_id = this.activatedRoute.snapshot.params.id;
    this.dashboardService.getParentGameCoreMapFirst({"grade_id":this.grade_id,"subject_id":this.subject_id,"game_id":this.game_id}).subscribe( response=>{
      this.getParentCoreMapVal = response.data;
    });
    this.dashboardService.getParentGameCoreMapSub({"grade_id":this.grade_id,"subject_id":this.subject_id,"game_id":this.game_id}).subscribe( response=>{
      this.getParentCoreMapStn = response.data;
      this.formData = this.getParentCoreMapStn;
    });
  }
  onSubmit(form): void{
    console.log(this.formData);
    this.dashboardService.parentGamesUpdate(this.getParentCoreMapVal[0]).subscribe(response =>{

    });
    this.dashboardService.parentStandardUpdate({"gameData":this.getParentCoreMapVal,"indicatorData":this.formData}).subscribe(response =>{
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
