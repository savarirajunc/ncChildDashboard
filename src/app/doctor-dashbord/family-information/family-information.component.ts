
import { ChildrenService } from './../../service/children.service';
//import { User } from './../../main-website/product-blog/user';
import { ComponentsService } from './../../service/components.service';
import { DoctorDashboardService } from './../doctor-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-family-information',
  templateUrl: './family-information.component.html',
  styleUrls: ['./family-information.component.css']
})
export class FamilyInformationComponent implements OnInit {
  user_id;
   // alert initilaze
   public _response: any = { "status": false,"alert":"info" ,"message": "" };

   // Two-way Binding Initilaze
   public formData: any = {

   }; // ngModel formData anys intiliaze
   familyInfo: FormGroup;
   _kidsInformations;
    childLength;
   currentPage: number = 0;
    limitpageNav: number = 10;
    pageNav: number = 0;
    pageArray: number [] = [];
    pageIdx = 0;
  constructor(private router:Router, private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute,private doctorDashboardService:DoctorDashboardService, private componentsService:ComponentsService,private childrenService:ChildrenService) {
    this.formCreat();
  }
  formCreat():void {
    this.familyInfo = this.formBuilder.group({
      mother:'',
      father:'',
      grandfather:'',
      grandmother:'',
      primary:'',
      secondary:''
    });
  }
  ngOnInit() { window.scrollTo(0, 0);
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response=>{
      this._kidsInformations = response.data;
      this.childLength = this._kidsInformations.length;
      for ( let i = 0; i < this._kidsInformations.length; i++) {
        this.pageArray.push(i);
      }
      this.pageNav = this._kidsInformations.length;
    });

  }

  setGameDetailsView(idx: number) {
    this.currentPage = idx;
  }
  addChild(){
    this.currentPage += 1;
    //this.onSubmit(event)
  }
  onSubmit(from){
      this.formData = this.familyInfo.getRawValue();
      this.formData.nidara_kid_profile_id = this._kidsInformations[this.currentPage].nidara_kid_profile_id;
      this.childrenService.createFamilyInfo(this.formData).subscribe(response=>{
        console.log(response);
        if(response.status){
          this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = "alert alert-success";
         if(this.childLength-1 == this.currentPage){
            this.router.navigate(['/doctor/parent-qus/',this.user_id]);
          }
          else{
            this.currentPage += 1;
          }

        }
        else{
          this._response['status'] = false;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
      })



  }
}
