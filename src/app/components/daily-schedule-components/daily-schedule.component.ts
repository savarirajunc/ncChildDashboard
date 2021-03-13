import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { ComponentsService } from './../../service/components.service';
import { AppService } from './../../app.service';
import { ChildrenService } from './../../service/children.service';
import { Title } from '@angular/platform-browser';
import { SharedService } from './../../service/shared.service';
declare var $: any;

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {
  public _response: any = { "status": false,"alert":"info", "message": "" };
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addDailyinfo: boolean = false;
  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze


  public schedulerDays;


  public ismeridian: boolean = false;
  public isEnabled: boolean = true;
  public to_time: Date = new Date();
  public from_time: Date = new Date();
  public set_time: Date = new Date();
  session_for;
  private kid_profile_id:any=[];
  get_time;
  get_minut;
  constructor(private router: Router, private authenService: AuthenService, private componentsService: ComponentsService, private sharedService: SharedService, private titleService: Title, private appService: AppService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        console.log("astronaut", astronaut);
       this.getDailySchedulerInfo(); // get Children Info in kid id

      });

    sharedService.addmissService$.subscribe(addService => {

      console.log("addService", addService);
      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
  }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.DAILYSCHEDULER);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {
        this.getDailySchedulerInfo(); // get Children Info in kid id

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


  }
  checkClock() {
    if (this.formData.choose_time === '2') {
      $('#clock').css('display', 'block');
    } else {
      $('#clock').css('display', 'none');
    }
   }

  getDailySchedulerInfo() {
    this.componentsService.getDailyRoutineInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getDailyRoutineInfo": response });

      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;
          let ftime = response.data.set_time.split(":");
          let set_set_time = new Date();
          let set_to_time = new Date();
          set_set_time.setHours(ftime[0])
          set_set_time.setMinutes(ftime[1])
          this.set_time = set_set_time;
          this.formData['reminder'] = response.data.reminder;
          this.session_for = response.data.session_for;
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

  dailySchedulerFormSubmit(form) {

    let ftimeHours = this.set_time.getHours();
    let ftimeMinutes = this.set_time.getMinutes();

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.formData['set_time'] = ftimeHours+":"+ftimeMinutes;
    this.formData['reminder'] = "15_min_before";
    this.formData['session_for'] = this.session_for;
    this.formData['repeatday'] = "repeat";
    this.formData['task_name'] = "nidarachildrensession";
    this.formData['scheduler_days_id'] = this.schedulerDays;

    this.createdailyRoutine(this.formData);

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


  createdailyRoutine(formData) {
    this.appService.debugConsole({ "createdailyRoutine": formData })
    this.componentsService.createdailyRoutine(formData).subscribe(response => {

      this.appService.debugConsole({ "createdailyRoutine": response })// New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      if(response.status){
        this._response['alert'] = "alert alert-success";
        //this.sharedService.updatemissService(this.updateService);
        //this.router.navigate(['/', CONSTANTS.PAGEURL.CHILDPROFILEREG,'sessionstart']);
      }else{
        this._response['alert'] = "alert alert-danger";

      }

    });

  }



  updatedailyScheduler(formData) {
    this.appService.debugConsole({ "updatedailyScheduler": formData })
    this.componentsService.updatedailyScheduler(formData).subscribe(response => {

      this.appService.debugConsole({ "updatedailyScheduler": response })// New Profile Added Successfully

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
