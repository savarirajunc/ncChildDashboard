
import { Component, OnInit } from '@angular/core';
//import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  formData:any={};
  healthFormData:FormGroup;
  healthDevCat:any=[];
  grade:any=[];
  coreframwork:any=[];
  subjects:any=[];
  someValue;
  private el: HTMLInputElement;
  constructor(private dashboardService:DashboardService, private formBuilder:FormBuilder) {
  //this.el = this.elementRef.nativeElement;
    this.initForm();
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

  }
  private initForm(): void {
    this.healthFormData = this.formBuilder.group({
      grade_id:'',
      framework_id:'',
      subject_id:'',
      heth_cat:'',
      healthDevelopmentQA: this.formBuilder.array([
        this.formBuilder.group({
          question_id:'',
          question:''
        })
      ])
    })
  }
  getHealthDevelopment():FormArray {
    return this.healthFormData.get('healthDevelopmentQA') as FormArray;
  }
  onAddQuestionanswer():void{
    this.getHealthDevelopment().push(
      this.formBuilder.group({
        question_id:'',
        question:''
      })
    )
  }
  onSubmit(form): void{
    console.log(this.healthFormData.getRawValue());
    this.dashboardService.healthDevQuestionCreat(this.healthFormData.getRawValue()).subscribe(response =>{
      console.log(response);
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        location.reload()
      }
      else{
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

}
