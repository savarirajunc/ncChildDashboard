import { Component, OnInit, ElementRef, Input,ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { POSTURL } from './../../app.config';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
//import { listLocales } from 'ngx-bootstrap/bs-moment';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
import { AuthenService} from './../../service/authen.service';
import { AppService, } from './../../app.service';
import { ChildrenService } from './../../service/children.service'
//import { FormsModule }   from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-child-profile',
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.css']

})

export class ChildProfileComponent implements OnInit {

  @ViewChild('dp')dp;
  // imageUpload Initilaze
  public file;
  public photo;
  bsConfig: Partial<BsDatepickerConfig>;

  public uploader: FileUploader = new FileUploader({ url: POSTURL.CHILDREN.PROFILE_IMAGE, autoUpload: true, itemAlias: 'file',
  maxFileSize: 250 * 1024 * 1024,allowedMimeType:["image/png","image/jpg","image/jpeg","image/JPEG","image/JPG","image/PNG"]  });

  // alert initilaze
  public _response: any = { "status": false,"alert":"info" ,"message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze

  // sharedService Initilaze
  public addServiceInit: boolean = true;
  public addService; updateService;
  public addChild: boolean = false;
  public selectGrade;
  public imagename;
  public selectProgramoption;
  public years ;
  public month ;
  public date ;

  constructor(private router: Router, private authenService: AuthenService, private sharedService: SharedService, private el: ElementRef, private titleService: Title, private appService: AppService, private childrenService: ChildrenService) {

    this.bsConfig = Object.assign({}, {dateInputFormat: 'DD-MM-YYYY',containerClass: 'theme-default'}); // color theme for DatePciker
      sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        console.log("add",this.addServiceInit)
      this.getChildrenProfileInfo(); // get Children Info in kid id

      });

    sharedService.addmissService$.subscribe(addService => {

      console.log("addService", this.addServiceInit);

      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    //  this.addServiceInit = false;

    //  console.log("update",this.addServiceInit)
    //  this.getChildrenProfileInfo(); // get Children Info in kid id
    });


    sharedService.updateDatamissionService$.subscribe(updateDataService =>{

    });




  }


  ngDoCheck(){

  }
  ngOnInit() { window.scrollTo(0, 0);
    //this.years = [{id:2010},{id:2011},{id:2012},{id:2013},{id:2014},{id:2015},{id:2016},{id:2017},{id:2018}]
    this.month = [{id:'1',name:'Jan'},{id:'2',name:'Feb'},{id:'3',name:'Mar'},{id:'4',name:'Apr'},{id:'5',name:'May'},{id:'6',name:'Jun'},
    {id:'7',name:'Jul'},{id:'8',name:'Aug'},{id:'9',name:'Sep'},{id:'10',name:'Oct'},{id:'11',name:'Nov'},{id:'12',name:'Dec'}]
    this.date =[{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'},{id:'11'},
    {id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},{id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'},
    {id:'24'},{id:'25'},{id:'26'},{id:'27'},{id:'28'},{id:'29'},{id:'30'},{id:'31'}]

 console.log(this.bsConfig );
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENPROFILES);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

			 //  this.getChildrenProfileInfo(); // get Children Info in kid id


        this.getGradeInfo();
        this.getPackageInfo();
        this.uploader.onBeforeUploadItem = (file) => { };
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };




        this.uploader.onWhenAddingFileFailed = (item:any, filter:any, options:any) => {

         console.log(item,filter,options);
          //this.uploadError = "Sorry! upload file type not supported";
          this._response['status'] = true;
          this._response['message'] = "Sorry! upload file type not supported. Only support .png/.jpg";
          this._response['alert'] = "alert alert-danger";

          }
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

          let imageUploaded = JSON.parse(response);
          console.log(this.formData,imageUploaded);
          if (imageUploaded.status) {
            this.imagename = item.file.name;
            this.appService.debugConsole({ "imageUploaded-response": response, "headers": headers, "item": item, "status": status });
            this.formData['child_photo'] = imageUploaded.photo;
            this.file = "";
            this._response['status'] = true;
            this._response['alert'] = "alert alert-success";
            this._response['message'] = imageUploaded.message;
            console.log(imageUploaded);
          }else{
            this._response['status'] = true;
            this._response['message'] = imageUploaded.message;
            this._response['alert'] = "alert alert-danger";
          }

        };
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });



  }

  getChildrenProfileInfo() {
    this.childrenService.getChildrenProfileInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getChildrenProfileInfo": response });

      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;

        let grade = response.data.grade;
        if(grade == 1){
         this.years = [{id:2015},{id:2016}]
       }
       else if(grade == 2){
         this.years = [{id:2013},{id:2014}]
       }
       else if(grade == 3){
         this.years = [{id:2012},{id:2013}]
       }
       else{
         this.years = [{id:2010},{id:2011}]
       }

       if(response.data.date_of_birth == null){
         this.formData['dob_date'] = ''
         this.formData['dob_years'] = ''
         this.formData['dob_month'] = ''
       }
       else{
        let dob = response.data.date_of_birth.split('-'); // date of birth set form

        this.formData['dob_date'] = parseInt(dob[2]);
        this.formData['dob_years'] = dob[0];
        this.formData['dob_month'] = parseInt(dob[1]);
      }

      } else {
      /*  if (this.addServiceInit) {
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
      } */
      }
    });
  }

  getGradeInfo(){

        this.childrenService.getEduGardeInfo().subscribe(response=>{
          this.appService.debugConsole({ "getEduGardeInfo": response }) // console
          if(response.status){
            this.selectGrade = response.data;
          }
        });

      }

      getPackageInfo(){
        this.childrenService.getEduPackageInfo().subscribe(response=>{
          this.appService.debugConsole({ "getEduPackageInfo": response }) // console
          if(response.status){
            this.selectProgramoption = response.data;
          }
        });
      }


  ngAfterViewInit() {

  }

  calculateAge(){

    let date = this.formData['dob_date'];
    let month = this.formData['dob_month'];
    let year = this.formData['dob_years'];
    let today = new Date();
    let age = today.getFullYear() - year;
    let months = (today.getFullYear() - year)* (12) + ((today.getMonth()+1) - month)
    if (today.getMonth() < month || (today.getMonth() ==  month && today.getDate() <  date)) {
        age--;
      }
       this.formData['age'] = age;


    // if(months >= 30 && months <= 48){
    //   this.formData['grade'] = 1 ;
    // }
    // else if(months >= 49 && months <= 60){
    //   this.formData['grade'] = 2 ;
    // }
    // else if(months >= 61 && months <= 78){
    //   this.formData['grade'] = 3 ;
    // }
    // else{
    //   this.formData['grade'] = '' ;
    // }
}
  //   let date = birthdate.getFullYear();
  //   let today = new Date();
  //   let age = today.getFullYear() - birthdate.getFullYear();
  //   if (today.getMonth() < birthdate.getMonth() || (today.getMonth() ==  birthdate.getMonth() && today.getDate() <  birthdate.getDate())) {
  //     age--;
  //   }
  //   this.formData['age'] = age;
  // }


  childProfileSubmit(form) {

    this.formData['board_of_education'] = "";
    this.formData['relationship_to_child'] = "";
//     let month = (new Date(this.formData['dob']).getMonth()+1);
// console.log(this.formData['dob'])
    this.formData['date_of_birth'] = this.formData['dob_years'] + '-' + this.formData['dob_month'] + '-' + this.formData['dob_date'];
    this.formData['child_avatar'] = "";
    this.imagename = "";

     if (this.addServiceInit) {

      this.formData['guided_learning_id'] = "1";
      this.formData['nidara_kid_profile_id'] = "";
      this.createChildrenProfile(this.formData);
    } else {
      this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
      this.updateChildrenProfile(this.formData);
    }





  }


  createChildrenProfile(formData) {
    this.appService.debugConsole({ "createChildProfileFormData": formData })
    this.childrenService.createChildProfile(formData).subscribe(response => {

      this.appService.debugConsole({ "createChildProfile": response })// New Profile Added Successfully
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
        this.sharedService.updateDatamissService(this.updateService);
        this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.PARENTS]);
      }else{
            this._response['status'] = true;
            this._response['message'] = response.message;
            this._response['alert'] = "alert alert-danger";
          }


    });
  }


  updateChildrenProfile(formData) {
    this.appService.debugConsole({ "updateChildProfileFormData": formData })
    this.childrenService.updateChildProfile(formData).subscribe(response => {

      this.appService.debugConsole({ "updateChildProfile": response })// New Profile Added Successfully

      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
   //     this.sharedService.updateDatamissService(localStorage.getItem('selectedKid'));
      }else{
            this._response['status'] = true;
            this._response['message'] = response.message;
            this._response['alert'] = "alert alert-danger";
          }

    });
  }

}
