import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-daily-routine',
  templateUrl: './daily-routine.component.html',
  styleUrls: ['./daily-routine.component.css']
})
export class DailyRoutineComponent implements OnInit {

  // alert initilaze
  public _response: any = { "status": false, "alert":"success","message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData anys intiliaze

  public dailyQuestionaries;
  public questionaries:any = {};
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addCareinfo: boolean = false;

  public schedulerDays;

  public addDailyinfo: boolean = false;
  public taskId:any=[];
  public ismeridian: boolean = false;
  public isEnabled: boolean = true;
  public set_time: Date = new Date();
  public kid_profile_id:any=[];

  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getDailyRoutineQuestion();
        this.getDailyRoutineInfo();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
    this.componentsService.getDailyRoutineView().subscribe(response =>{
      this.taskId = response.data;
      console.log(response);
    });
    this.kid_profile_id = (localStorage.getItem('selectedKid'));
    console.log(this.kid_profile_id);
  }

  ngOnInit() { window.scrollTo(0, 0);

    this.titleService.setTitle(CONSTANTS.PAGETITLE.DAILYROUTINE);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getDailyRoutineQuestion();
        this.getDailyRoutineInfo();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
      console.log(response);
    });
  }

  getDailyRoutineByID() {
    this.componentsService.getDailyRoutineByID({ "nidara_kid_profile_id": localStorage.getItem('selectedKid'),"category_name":"daily_routine" }).subscribe(response => {
      this.appService.debugConsole({ "getDailyRoutineByID": response }) // console
      if (response.status) {
        this._response['status'] = false;
        this.addCareinfo = true;
        this.formData = response.data;
      } else {
        this.addCareinfo = false;
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";
      }
    });
  }
 selectOptions(options){

    this.questionaries['questionarie'].forEach(element => {

      if(element.questions_id == options.questions_id){
       element.options_id = options.id;
      }
    });
    console.log("questionarie",this.questionaries,options);

  }

  getDailyRoutineInfo() {
    this.componentsService.getDailyRoutineInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getDailyRoutineInfo": response });

      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;
          let ftime = response.data.set_time.split(":");
          let set_set_time = new Date();
          set_set_time.setHours(ftime[0])
          set_set_time.setMinutes(ftime[1])
          this.set_time = set_set_time;
          this.formData['reminder'] = response.data.reminder;
          this.addDailyinfo = true;
          this.schedulerDays = response.data.scheduler_days_id;

      } else {
        this.formData = {};
        this.schedulerDays.forEach(element => {
          element.option = 0;
        });
        this.addDailyinfo = false;
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";
      }


    });
  }


  onChange(option) {


    this.schedulerDays.forEach(element => {

      if(element.day == option.day){
        if(option.option == 1){
          element.option = 0;
        }else{
          element.option = 1;
        }
      }

    });
    console.log(this.schedulerDays);
  }

  getDailyRoutineQuestion(){

    this.componentsService.getEduSelectQuestion({"nidara_kid_profile_id": localStorage.getItem('selectedKid'),"category_name":"daily_routine"}).subscribe(response => {
      this.appService.debugConsole({ "getEduSelectQuestion": response }) // console
      if (response.status) {
        this._response['status'] = false;
        this.addCareinfo = true;
        this.dailyQuestionaries = response.data;
        const questionAnswer = response.data.map(options => {
          return { questions_id: options.answers.question_id, options_id:options.answers.option_id };
        });

        this.questionaries['questionarie'] = questionAnswer;
      } else {
        this.addCareinfo = false;
      //  this.dailyQuestionaries = {};
     //   this._response['status'] = true;
       // this._response['message'] = response.message;
      }

    });
  }


  dailyRoutineFormSubmit(form){
    this.questionaries['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.questionaries['session_id'] = "1";
    this.questionaries['is_correct'] = "1";
   this.updateEduInformation(this.questionaries);
  }

  updateEduInformation(formData){
    this.appService.debugConsole({ "updateEduInformation": formData })
    this.componentsService.updateDailyRoutineInformation(formData).subscribe(response => {

      this.appService.debugConsole({"updateEduInformation":response})// edit Profile Updated Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";

      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

  dailySchedulerFormSubmit(form) {

    let ftimeHours = this.set_time.getHours();
    let ftimeMinutes = this.set_time.getMinutes();

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.formData['set_time'] = ftimeHours+":"+ftimeMinutes;
    this.formData['scheduler_days_id'] = this.schedulerDays;

    this.createdailyRoutine(this.formData);

  }
  dailySchedulerFormUpdataSubmit(form){

        let ftimeHours = this.set_time.getHours();
        let ftimeMinutes = this.set_time.getMinutes();

        this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
        this.formData['set_time'] = ftimeHours+":"+ftimeMinutes;
        this.formData['scheduler_days_id'] = this.schedulerDays;

        this.updatedailyRoutine(this.formData);
  }

  createdailyRoutine(formData) {
    this.appService.debugConsole({ "createdailyRoutine": formData })
    this.componentsService.createdailyRoutine(formData).subscribe(response => {

      this.appService.debugConsole({ "createdailyRoutine": response })// New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      if(response.status){
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      }else{
        this._response['alert'] = "alert alert-danger";

      }

    });

  }

  updatedailyRoutine(formData) {
    this.appService.debugConsole({ "updatedailyRoutine": formData })
    this.componentsService.updatedailyRoutine(formData).subscribe(response => {

      this.appService.debugConsole({ "updatedailyRoutine": response })// New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      if(response.status){
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      }else{
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

}
