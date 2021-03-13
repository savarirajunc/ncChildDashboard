import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-health-day-add',
  templateUrl: './health-day-add.component.html',
  styleUrls: ['./health-day-add.component.css']
})
export class HealthDayAddComponent implements OnInit {

  public formData:any={};
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  contactForm: FormGroup;
    grade:any=[];
    coreframwork:any=[];
    subjects:any=[];
    healthDevCat:any=[];
    days:any=[];
    questionViewall:any=[];

  constructor(private dashboardService:DashboardService, private router:Router, private formBuilder:FormBuilder) {
    this.initForm();
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
      this.healthDevCat = response.data;
    });
    this.dashboardService.getDaysHealthInfo().subscribe(response =>{
      this.days = response.data;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    // this.dashboardService.getHealthDeveQues().subscribe(response =>{
    //   this.questionViewall = response.data;
    // });
  }

  ngOnInit(){

  }
  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      days:'',
      grade_id:'',
      framework_id:'',
      subject_id:'',
      heth_cat:'',
      healthDevelopmentQA: this.formBuilder.array([
        this.formBuilder.group({
          question:''
        })
      ])
    })
  }
  getHealthDevelopment():FormArray {
    return this.contactForm.get('healthDevelopmentQA') as FormArray;
  }
  onAddQuestionanswer():void{
    this.getHealthDevelopment().push(
      this.formBuilder.group({
        question:''
      })
    )
  }
  onSubmit(form): void {
     console.log(this.contactForm.getRawValue());
     this.dashboardService.createHealthDayMap(this.contactForm.getRawValue()).subscribe(response =>{
       console.log(response);
       if(response.status){
       form.reset();
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = "alert alert-success";
       }
       else{
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = "alert alert-danger";
       }
     });
   }
   onChange(){
     this.dashboardService.getParentQues(this.contactForm.getRawValue()).subscribe(response =>{
        this.questionViewall = response.data;
     });
   }


}
