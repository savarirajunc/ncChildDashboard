import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-daily-session',
  templateUrl: './daily-session.component.html',
  styleUrls: ['./daily-session.component.css']
})
export class DailySessionComponent implements OnInit {
  public _response: Object = { "status": false, "message": "" };
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addDailyinfo: boolean = false;
  // Two-way Binding Initilaze
  public formData: Object = {}; // ngModel formData Objects intiliaze


  public schedulerDays;


  public ismeridian: boolean = false;
  public isEnabled: boolean = true;
  public to_time: Date = new Date();
  public from_time: Date = new Date();
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


  getDailySchedulerInfo() {
    this.componentsService.getDailySchedulerInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getDailySchedulerInfo": response });

      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;
        if(response.data.from_time){
          let ftime = response.data.from_time.split(":");
          let set_from_time = new Date();
          set_from_time.setHours(ftime[0])
          set_from_time.setMinutes(ftime[1])
          this.from_time = set_from_time;
          this.formData['reminder'] = response.data.reminder;
          let ttime = response.data.to_time.split(":");


          let set_to_time = new Date();
          set_to_time.setHours(ttime[0]);
          set_to_time.setMinutes(ttime[1]);
          this.to_time = set_to_time;
          this.addDailyinfo = true;
          this.schedulerDays = response.data.scheduler_days_id;

        }


      } else {
        this.formData = {};
        this.schedulerDays.forEach(element => {
          element.option = 0;
        });
        this.addDailyinfo = false;
        this._response['status'] = true;
        this._response['message'] = response.message;
      }
    });
  }

  dailySchedulerFormSubmit(form) {



    let ftimeHours = this.from_time.getHours();
    let ftimeMinutes = this.from_time.getMinutes();

    let ttimeHours = this.to_time.getHours();
    let ttimeMinutes = this.to_time.getMinutes();

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.formData['from_time'] = ftimeHours+":"+ftimeMinutes;
    this.formData['to_time'] = ttimeHours+":"+ttimeMinutes;
    this.formData['scheduler_days_id'] = this.schedulerDays;
    this.formData['status'] = 0;


    if (this.addDailyinfo) {
     this.updatedailyScheduler(this.formData);
    } else {
      this.createdailyScheduler(this.formData);
    }

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


  createdailyScheduler(formData) {
    this.appService.debugConsole({ "createdailyScheduler": formData })
    this.componentsService.createdailyScheduler(formData).subscribe(response => {

      this.appService.debugConsole({ "createdailyScheduler": response })// New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      this.sharedService.updatemissService(this.updateService);
      this.router.navigate(['/',CONSTANTS.PAGEURL.ACTIVATENIDARA])

    });

  }

  updatedailyScheduler(formData) {
    this.appService.debugConsole({ "updatedailyScheduler": formData })
    this.componentsService.updatedailyScheduler(formData).subscribe(response => {

      this.appService.debugConsole({ "updatedailyScheduler": response })// New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      this.sharedService.updatemissService(this.updateService);
      this.router.navigate(['/',CONSTANTS.PAGEURL.ACTIVATENIDARA]);
    });
  }

}
