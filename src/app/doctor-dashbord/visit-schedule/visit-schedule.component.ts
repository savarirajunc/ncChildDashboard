import { CONSTANTS } from './../../app.constants';
import { ChildrenService } from './../../service/children.service';
//import { User } from './../../main-website/product-blog/user';
import { ComponentsService } from './../../service/components.service';
import { DoctorDashboardService } from './../doctor-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-visit-schedule',
  templateUrl: './visit-schedule.component.html',
  styleUrls: ['./visit-schedule.component.css']
})
export class VisitScheduleComponent implements OnInit {
  user_id;
  // alert initilaze
  public _response: any = { "status": false,"alert":"info" ,"message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData anys intiliaze
  _kidsInformations;
   childLength;
   visitForm: FormGroup;
  currentPage: number = 0;
   limitpageNav: number = 10;
   pageNav: number = 0;
   pageArray: number [] = [];
   pageIdx = 0;
   month;
   date;
   years:any=[];
   newtime:Date = new Date();
   hours;
   minutes;
 constructor(private router:Router, private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute,private doctorDashboardService:DoctorDashboardService, private componentsService:ComponentsService,private childrenService:ChildrenService) {
  this.initForm();
 }
 private initForm(): void {
  this.visitForm = this.formBuilder.group({
    visitDetails : this.formBuilder.array([
      this.formBuilder.group({
        date : '',
        month : '',
        year : '',
        hours: '',
        minutes:''
      })
    ])
  });
}

getProductForm (): FormArray {
  return this.visitForm.get('visitDetails') as FormArray;
}
addFiled (): void {
  this.getProductForm().push(
    this.formBuilder.group({
      date : '',
        month : '',
        year : '',
        hours: '',
        minutes:''
    })
  );
}


 ngOnInit() { window.scrollTo(0, 0);

  this.month = [{id:'01',name:'Jan'},{id:'02',name:'Feb'},{id:'03',name:'Mar'},{id:'04',name:'Apr'},{id:'05',name:'May'},{id:'06',name:'Jun'},
     {id:'07',name:'Jul'},{id:'08',name:'Aug'},{id:'09',name:'Sep'},{id:'10',name:'Oct'},{id:'11',name:'Nov'},{id:'12',name:'Dec'}]
     this.date =[{id:'01'},{id:'02'},{id:'03'},{id:'04'},{id:'05'},{id:'06'},{id:'07'},{id:'08'},{id:'09'},{id:'10'},{id:'11'},
     {id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},{id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'},
     {id:'24'},{id:'25'},{id:'26'},{id:'27'},{id:'28'},{id:'29'},{id:'30'},{id:'31'}]
     let i = 0;
     for(i = 0;i <= 2; i++){
      this.years.push({'id': (2018+i)});
     }
     this.hours = [{id:'00'},{id:'01'},{id:'02'},{id:'03'},{id:'04'},{id:'05'},{id:'05'},{id:'06'},{id:'07'},{id:'08'},
                   {id:'09'},{id:'10'},{id:'11'},{id:'12'},{id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},
                   {id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'}
    ]
    this.minutes = [{id:'05'},{id:'10'},{id:'15'},{id:'20'},{id:'25'},{id:'30'},{id:'35'},{id:'40'},{id:'45'},{id:'50'},{id:'55'}]

   this.user_id = this.activatedRoute.snapshot.params.id;
   this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response=>{
     this._kidsInformations = response.data;
     this.childLength = this._kidsInformations.length;
     for ( let i = 0; i < this._kidsInformations.length; i++) {
       this.pageArray.push(i);
     }
     this.pageNav = this._kidsInformations.length;
   })
 }

 setGameDetailsView(idx: number) {
   this.currentPage = idx;
 }
 onSubmit(from){

  this.formData = this.visitForm.getRawValue();

  this.formData['child_id'] = this._kidsInformations[this.currentPage].nidara_kid_profile_id;
  this.doctorDashboardService.setDoctorVisitList(this.formData).subscribe(resopnse=>{
    console.log(resopnse)
    if(resopnse.status){
      if(this.childLength-1 === this.currentPage){
        localStorage.setItem('doctor_user_id', this.user_id);
        this.router.navigate(['/doctor/completed']);
      }
      else {
        this.currentPage += 1;
      }
    }
  })


 }

 monthval(){
  this.formData = this.visitForm.getRawValue();
  let i = 0;
  for(i = 0; i < this.formData.visitDetails.length; i++){
    if(
      (this.formData.visitDetails[i].month == '02' && this.formData.visitDetails[i].date > 29)
      || (this.formData.visitDetails[i].month == '04' && this.formData.visitDetails[i].date > 30)
      || (this.formData.visitDetails[i].month == '06' && this.formData.visitDetails[i].date > 30)
      || (this.formData.visitDetails[i].month == '09' && this.formData.visitDetails[i].date > 30)
      || (this.formData.visitDetails[i].month == '11' && this.formData.visitDetails[i].date > 30)
      ){
      $('#date_erorr'+[i]).css('display','block');
  }
  else if(this.formData.visitDetails[i].month == '02' && this.formData.visitDetails[i].date == 29 && this.formData.visitDetails[i].year % 4 != 0){
    $('#date_erorr'+[i]).css('display','block');
  }
  else{
    $('#date_erorr'+[i]).css('display','none');
  }
  }

 }




}
