import { Component, OnInit,ElementRef, Input,ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { POSTURL } from './../../app.config';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
import { AuthenService} from './../../service/authen.service';
import { AppService, } from './../../app.service';
import { ChildrenService } from './../../service/children.service';
import { ComponentsService } from './../../service/components.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {

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
  public formData: any = {}; // ngModel formData anys intiliaze
    public formData2: any = {};
    mytime: Date = new Date();

  // sharedService Initilaze
  public addServiceInit: boolean = true;
  public addService; updateService;
  public selectGrade;
  public imagename;
  public selectProgramoption;
  public years ;
  public month ;
  public date ;
  _kidsInformations;
  confirmed = false;
  mission;
  childInfo;

  kidIdChuck:any=[];

  public dailyQuestionaries;
  public questionaries:any = {};
  // sharedService Initilaze
//  public addServiceInit: boolean = false;
  //public addService;
  public addChild: boolean = false;
  public addCareinfo: boolean = false;

  public schedulerDays;

  public addDailyinfo: boolean = false;
  public taskId:any=[];
  public ismeridian: boolean = false;
  public isEnabled: boolean = true;
  public set_time: Date = new Date();
  public kid_profile_id:any=[];
  get_time;
  get_minut;
  flag:any=[];
  childLength:any=[];
  loopLength:any=[];
  submitBut:any=[];
  user_id;
   currentPage: number = 0;
    limitpageNav: number = 10;
    pageNav: number = 0;
    pageArray: number [] = [];
    pageIdx = 0;
  constructor(private activatedRoute:ActivatedRoute, private router: Router, private authenService: AuthenService, private componentsService:ComponentsService, private sharedService: SharedService, private el: ElementRef, private titleService: Title, private appService: AppService, private childrenService: ChildrenService) {
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

   ngOnInit() { window.scrollTo(0, 0);


    this.user_id = this.activatedRoute.snapshot.params.id;
     let get_to_time = new Date();
     let ttime = get_to_time.getHours()+1;
     this.get_time = ttime;

     this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response => {
       this.appService.debugConsole({ "kidsInfo": response })
       if (response.status) {
         this._kidsInformations = response.data;
         this.childLength = this._kidsInformations.length;
         for ( let i = 0; i < this._kidsInformations.length; i++) {
          this.pageArray.push(i);
        }
        this.pageNav = this._kidsInformations.length;

         let lastchild = response.data[this.childLength-1].nidara_kid_profile_id;
         localStorage.setItem('lastchild', lastchild);
         console.log("_kidsInformations :",this._kidsInformations)

           this.checkChildDefault(response.data);

           if(this.childLength == 1){
             this.submitBut = "SAVE & START AT SCHEDULED TIME";
           }
           else{
             this.submitBut = "SAVE & PROCEED TO NEXT CHILD";
           }

       }
     });


     this.month = [{id:'1',name:'Jan'},{id:'2',name:'Feb'},{id:'3',name:'Mar'},{id:'4',name:'Apr'},{id:'5',name:'May'},{id:'6',name:'Jun'},
     {id:'7',name:'Jul'},{id:'8',name:'Aug'},{id:'9',name:'Sep'},{id:'10',name:'Oct'},{id:'11',name:'Nov'},{id:'12',name:'Dec'}]
     this.date =[{id:'01'},{id:'02'},{id:'03'},{id:'04'},{id:'05'},{id:'06'},{id:'07'},{id:'08'},{id:'09'},{id:'10'},{id:'11'},
     {id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},{id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'},
     {id:'24'},{id:'25'},{id:'26'},{id:'27'},{id:'28'},{id:'29'},{id:'30'},{id:'31'}]

     this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
       this.appService.debugConsole({ "tokenCheckig": response });

       if (response.status) {

       } else {
         localStorage.clear();
         this.router.navigate(['/signin']);

       }
     });
   }

   setGameDetailsView(idx: number) {
    this.currentPage = idx;
  }

   changeDate(event: any) {
     let timeGet = event.getHours()+1;
     let minutGet = event.getMinutes();
     // let set_to_go_time = new Date();
     // set_to_go_time.setHours(timeGet[0])+1;
     // set_to_go_time.setMinutes(timeGet[1])
     this.get_minut = minutGet;
     this.get_time = timeGet;

   }

  onChange(option) {

    this.set_time

     this.schedulerDays.forEach(element => {

       if(element.day == option.day){
         if(option.option == 1){
           element.option = 1;
         }else{
           element.option = 1;
         }
       }

     });
     console.log(this.schedulerDays);
   }
   checkChildDefault(data) {
     data.forEach(element => {
       if (element.is_default_kid == 1) {
         localStorage.setItem('selectedKid', element.nidara_kid_profile_id);
         localStorage.setItem('kidGender',element.gender)

        $('#kids' + element.nidara_kid_profile_id).css("color", "#83D0C9");

         this.sharedService.confirmMission(this.mission);
         //Child Profile Information//
          this.getChildrenProfileInfo();
         // DailyRoutine Information //
         //this.getDailyRoutineInfo();
       }
       else{
         $('#kids' + element.nidara_kid_profile_id).css("color", "#83D0C9");
       }
     });
   }

   selectedKidInfo(kidsInfo, tag) {
     let kidInfoData = kidsInfo;
     let ftimeHours = this.set_time.getHours();
     let ftimeMinutes = this.set_time.getMinutes();
     this.formData['status'] = 2;
     this.formData['date_of_birth'] = this.formData['dob_years']+"-"+this.formData['dob_month']+"-"+this.formData['dob_date'];
     this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
     this.formData2['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
     this.formData2['set_time'] = ftimeHours+":"+ftimeMinutes;
     this.formData2['reminder'] = "15_min_before";
     this.formData2['repeatday'] = "repeat";
     this.formData2['task_name'] = "nidarachildrensession";
     this.formData2['session_for'] = '1';
     this.formData2['scheduler_days_id'] = this.schedulerDays;

     this.createdailyRoutine_select(this.formData2);
     this.updateChildrenProfile_select(this.formData,kidInfoData);
   }
   updateChildrenProfile_select(formData,kidInfoData) {
    this.appService.debugConsole({ "updateChildProfileFormData": formData })
    this.childrenService.updateChildProfile(formData).subscribe(response => {

      this.appService.debugConsole({ "updateChildProfile": response })// New Profile Added Successfully

      if(response.status){
        this._kidsInformations.forEach(element => {
         if (element.nidara_kid_profile_id == kidInfoData.nidara_kid_profile_id) {
           localStorage.setItem('selectedKid', kidInfoData.nidara_kid_profile_id);
           localStorage.setItem('kidGender',kidInfoData.gender);
           $('#kids' + element.nidara_kid_profile_id).css("color", "#83D0C9");
           //Child Profile Information//
            this.getChildrenProfileInfo();
            if(localStorage.getItem('selectedKid') == localStorage.getItem('lastchild')){
              this.submitBut = "SAVE & START AT SCHEDULED TIME";
            }
            else{
              this.submitBut = "SAVE & PROCEED TO NEXT CHILD";
            }
           // DailyRoutine Information //
         }
         else{
           $('#kids' + element.nidara_kid_profile_id).css("color", "#333");
         }
       });

      }else{
            this._response['status'] = true;
            this._response['message'] = "Please complete filling up child information";
            this._response['alert'] = "alert alert-danger";
          }

    });

  }



  createdailyRoutine_select(formData2) {
    this.appService.debugConsole({ "createdailyRoutine": formData2 })
    this.componentsService.createdailyRoutine(formData2).subscribe(response => {

      this.appService.debugConsole({ "createdailyRoutine": response })// New Profile Added Successfully

      if(response.status){


      }
    });

  }
   getChildrenProfileInfo() {

          this.componentsService.getDailyRoutineInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
            this.appService.debugConsole({ "getDailyRoutineInfo": response });

            if (response.status) {
              this.formData2 = response.data;
              this._response['status'] = false;
              //let ftime = null;
                let ftime = response.data.set_time.split(":");
                let set_set_time = new Date();
                //let set_to_time = new Date();
                set_set_time.setHours(ftime[0])
                set_set_time.setMinutes(ftime[1])
                this.set_time = set_set_time;
                this.formData2['reminder'] = response.data.reminder;
                this.addDailyinfo = true;
                this.schedulerDays = response.data.scheduler_days_id;

            } else {
              this.formData2 = {};
              this.schedulerDays.forEach(element => {
                element.option = 0;
              });
              this.addDailyinfo = false;
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-info";
            }


          });

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

         this.formData['dob_date'] = (dob[2]);
         this.formData['dob_years'] = dob[0];
         this.formData['dob_month'] = parseInt(dob[1]);
       }

       } else {

       }
     });
   }

  calculateAge(){

     let date = this.formData['dob_date'];
     let month = this.formData['dob_month'];
     let year = this.formData['dob_years'];
     let today = new Date();
     let age = today.getFullYear() - year;
     let months = (today.getFullYear() - year)* (12) + ((today.getMonth()+1) - month)
     if (today.getMonth() < month || (today.getMonth() ==  month && today.getDate() <  date)) {
         age;
       }
        this.formData['age'] = age;
 }

   childProfileSubmit(form) {

       let ftimeHours = this.set_time.getHours();
       let ftimeMinutes = this.set_time.getMinutes();
       this.formData['status'] = 2;
       this.formData['date_of_birth'] = this.formData['dob_years']+"-"+this.formData['dob_month']+"-"+this.formData['dob_date'];
       this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
       this.formData2['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
       this.formData2['set_time'] = ftimeHours+":"+ftimeMinutes;
       this.formData2['reminder'] = "15_min_before";
       this.formData2['repeatday'] = "repeat";
       this.formData2['session_for'] = 1;
       this.formData2['task_name'] = "nidarachildrensession";
       this.formData2['scheduler_days_id'] = this.schedulerDays;

       this.createdailyRoutine(this.formData2,this.formData);
       //this.updateChildrenProfile(this.formData);
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

       }else{
             this._response['status'] = false;
             this._response['message'] = response.message;
             this._response['alert'] = "alert alert-danger";
           }

     });
   }



   createdailyRoutine(formData2,formData) {

     this.appService.debugConsole({ "updateChildProfileFormData": formData })
     this.childrenService.updateChildProfile(formData).subscribe(response => {

       this.appService.debugConsole({ "updateChildProfile": response })// New Profile Added Successfully

       if(response.status){

         this.flag = 2;
         this.sharedService.updatemissService(this.updateService);

       }else{
             this._response['status'] = true;
             this._response['message'] = response;
             this._response['alert'] = "alert alert-danger";
             this.flag = 0;

           }

     });
     this.appService.debugConsole({ "createdailyRoutine": formData2})
     this.componentsService.createdailyRoutine(formData2).subscribe(response => {

       this.appService.debugConsole({ "createdailyRoutine": response })// New Profile Added Successfully

       //this._response['status'] = true;
       //this._response['message'] = response.message;
       if(response.status){
         //this._response['alert'] = "alert alert-success";
         this.sharedService.updatemissService(this.updateService);
       }
     else{
       //this._response['status'] = true;
       //this._response['message'] = response;
       //this._response['alert'] = "alert alert-danger";

      }

    });

    if(this.childLength == 1){
      this.router.navigate(['/doctor/family-info/',this.user_id]);
     }

          this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response => {
            this.appService.debugConsole({ "kidsInfo": response })
            let i =0;
            for(i = 0; i < response.data.length; i++){
                if(this.childLength-1 == this.loopLength.length){
                  this.submitBut = "SAVE & START AT SCHEDULED TIME";
                }
              localStorage.setItem('selectedKid', response.data[i].nidara_kid_profile_id);
              localStorage.setItem('kidGender', response.data[i].gender);
              if(i > 0){
                $('#kids' + response.data[i-1].nidara_kid_profile_id).css("color", "#333");
              }
              $('#kids' + response.data[i].nidara_kid_profile_id).css("color", "#83D0C9");
              this.childrenService.getChildrenProfileInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
                this.appService.debugConsole({ "getChildrenProfileInfo": response });
                if (response.status) {
                  // if(response.data.last_name == ''){
                  //   flag = 0;
                  // }
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

                  this.formData['dob_date'] = (dob[2]);
                  this.formData['dob_years'] = dob[0];
                  this.formData['dob_month'] = parseInt(dob[1]);

                }

                } else {

                }
              });


              this.componentsService.getDailyRoutineInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
                this.appService.debugConsole({ "getDailyRoutineInfo": response });

                if (response.status) {
                  this.formData2 = response.data;
                  this._response['status'] = false;
                    let ftime = response.data.set_time.split(":");
                    let set_set_time = new Date();
                    let set_to_time = new Date();
                    set_set_time.setHours(ftime[0])
                    set_set_time.setMinutes(ftime[1])
                    this.set_time = set_set_time;
                    this.formData2['reminder'] = response.data.reminder;
                    this.addDailyinfo = true;
                    this.schedulerDays = response.data.scheduler_days_id;

                } else {
                  this.formData2 = {};
                  this.schedulerDays.forEach(element => {
                    element.option = 0;
                  });
                  this.addDailyinfo = false;
                  this._response['status'] = true;
                  this._response['message'] = response.message;
                  this._response['alert'] = "alert alert-info";
                }


              });

              this.appService.debugConsole({ "createdailyRoutine": formData2 })
              this.componentsService.createdailyRoutine(formData2[i]).subscribe(response => {

                this.appService.debugConsole({ "createdailyRoutine": response })// New Profile Added Successfully

                //this._response['status'] = true;
                //this._response['message'] = response.message;
                if(response.status){
                  //this._response['alert'] = "alert alert-success";
                  this.sharedService.updatemissService(this.updateService);
                }
              else{
                //this._response['status'] = true;
                //this._response['message'] = response;
                //this._response['alert'] = "alert alert-danger";

               }

             });



              this.appService.debugConsole({ "updateChildProfileFormData": formData })
              this.childrenService.updateChildProfile(formData[i]).subscribe(response => {

                this.appService.debugConsole({ "updateChildProfile": response })// New Profile Added Successfully

                if(response.status){
                  this.flag = 2;
                  this.sharedService.updatemissService(this.updateService);

                }else{
                      //this._response['status'] = true;
                      //this._response['message'] = response;
                      //this._response['alert'] = "alert alert-danger";
                      this.flag = 0;

                    }

              });
              if(this.flag == 0){
                     //break;
              }
              if(i == 0){
                  $('#alert-massage').css("display", "none");
              }
              else if(i > 0){
                if(this.flag == 0){
                  //$('#alert-massage').css("display", "block");
                }

              }
              this.loopLength.push(i);

            }
          });

          if(this.childLength == this.loopLength.length){
            this.router.navigate(['/doctor/family-info/',this.user_id]);
          }



   }






   activatlater(){
     window.location.href = CONSTANTS.PAGEURL_MAIN.MAINURL;
   }

}
