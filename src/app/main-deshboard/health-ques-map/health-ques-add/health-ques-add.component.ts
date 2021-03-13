import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-health-ques-add',
  templateUrl: './health-ques-add.component.html',
  styleUrls: ['./health-ques-add.component.css']
})
export class HealthQuesAddComponent implements OnInit {
    public formData:any={};
    public  _response: any = { "status": false,"alert":"info", "message": "" };
    contactForm: FormGroup;
      grade:any=[];
      coreframwork:any=[];
      subjects:any=[];
      healthDevCat:any=[];
      indicatormap:any=[];
      standardmap:any=[];
      public days;
    constructor(private dashboardService:DashboardService, private router:Router, private formBuilder:FormBuilder) {
      this.initForm();
      this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
        this.coreframwork = response;
      });
      this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
        this.healthDevCat = response.data;
      });
      this.dashboardService.getsubjectInfo().subscribe(response =>{
        this.subjects = response.data;
      });
      this.dashboardService.getGradeInfo().subscribe(response =>{
        this.grade = response.data;
      });
      this.dashboardService.getDaysInfo().subscribe(response =>{
        this.days = response.data;
      })

    }

    ngOnInit(){

    }
    private initForm(): void {
      this.contactForm = this.formBuilder.group({
          grade_id:'',
          games_name:'',
          days:'',
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
    getDepartments(): FormArray {
      return this.contactForm.get('gameCoreFrame') as FormArray;
    }
    onAddDepartment(): void {
      this.getDepartments().push(
        this.formBuilder.group({
          framework_id:'',
          subject_id:'',
          gamecoretype:'2',
          standard_id:'',
          indicator_id:'',
          indicator_id1:'',
          indicator_id2:'',
          indicator_id3:''
        })
      )
    }
    onChange(){
      this.dashboardService.getStandardMap(this.contactForm.getRawValue()).subscribe(response =>{
          this.standardmap = response.data;
      });
      this.dashboardService.getIndicatorMap(this.contactForm.getRawValue()).subscribe(response =>{
        this.indicatormap = response.data;
      console.log(response);
    });
    }


    onSubmit(form){
      this.dashboardService.parentGamesCreate(this.contactForm.getRawValue()).subscribe(response =>{
        console.log(response);
        if(response.status){
        // form.reset();
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-success";
        }
        else{
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
        setTimeout(() =>{
          location.reload();
        },500);
      });
  }

}
