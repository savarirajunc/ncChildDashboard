import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService, ComponentsService } from './../../app.index';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from './../../service/shared.service';

declare var $: any;


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  public _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  public formData: any = {

  };
  @ViewChild('parentModal') parentModal;
  @ViewChild('parentQuesModel') parentQuesModel;
  @ViewChild('dailyRoutineModel') dailyRoutineModel;
  public taskId: any = [];
  public schedulerDays;
  public now: Date = new Date();

  public addDailyinfo = false;
  // public taskId:any=[];
  public ismeridian = false;
  public isEnabled = true;
  public set_time: Date = new Date();
  public get_time;
  task_name;
  time_get;
  public expriyday: any = { 'status': false, 'alert': 'info' , 'message': '' };
  childepriyday;
  constructor(private viewContainerRef: ViewContainerRef, private sharedService: SharedService, private router: Router, private titleService: Title, private appService: AppService, private parentsService: ParentsService, private authenService: AuthenService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {

        this.getCoreSubjects();
        this.getParentCoreSubjects();
        this.getParentgameInfo();
        this.getDailyRoutineInfo();
        this.getDailyRoutineInfoData();
        this.dailySession();


      });

    sharedService.addmissService$.subscribe(addService => {

      console.log('addService', addService);
    });
    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService => {
          this.addService = addService;

          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService => {

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      });


      sharedService.updateDatamissionService$.subscribe(updateDataService => {

        this.getChildrenInfo();
      });
      this.componentsService.getDailyRoutineView().subscribe(response => {
        this.taskId = response.data;
        console.log(response);
      });

  }
  childName;
  parent_image = 'assets/images/login_parent.jpg';

  public _loginstatus: String;
  childImages: Object;
  childEducation;
  coreEducation;
  coreInterestDiscovery;
  parentchildEducation;
  parentcoreEducation;
  parentcoreInterestDiscovery;
  gamechildEducation;
  gamecoreEducation;
  gamecoreInterestDiscovery;
  addchildImage = false;
  currentDate;
  from_time;
  to_time; taks;
  scheduleTask;
  _kidsInformations;
  confirmed = false;
  mission;
  isAddService = true;
  addService;

  childInfo: any = [];
  announced = false;
  subscription: Subscription;
  parentQuestion: any = [];
  parentGame: any = [];
  parentGameAnswer: any = [];
  dailyroutin_status;
  formdisbled;
  parent_stuts: any = [];
  childChueck;
  month;
  week;
  start;
  end;
  startlength;
  endlength;
  ngOnInit() { window.scrollTo(0, 0);

    this.startlength = 0;
    this.endlength = 0;
    this.titleService.setTitle(CONSTANTS.PAGETITLE.DASHBOARD);
    this.componentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ 'kidsInfo': response });
      if (response.status) {
        this.childInfo = response.data;
        if (this.childInfo.length === 0) {
          this.childChueck = 0;
        } else {
          this.childChueck = 1;
        }
        this.parentsService.getChildExpriyDay({'id': response.data[0].nidara_kid_profile_id}).subscribe(response => {
          if (response.status) {
            this.childepriyday = 1;
          } else {
            this.childepriyday = 2;
          }
        });
        console.log(this.childInfo);
      }
    });
    this.componentsService.getDailyRoutineView().subscribe(response => {
      this.taskId = response.data;
      console.log(response);
    });

  }

  getDailyRoutineInfo() {
    this.componentsService.getDailyRoutineInfo({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ 'getDailyRoutineInfo': response });

      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;
          const ftime = response.data.set_time.split(':');
          const set_set_time = new Date();
          set_set_time.setHours(ftime[0]);
          set_set_time.setMinutes(ftime[1]);
          this.formData['reminder'] = response.data.reminder;
          this.set_time = set_set_time;
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
        this._response['alert'] = 'alert alert-info';
      }


    });
  }

  ngAfterContentInit() {
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ 'tokenCheckig': response });

      if (response.status) {

        this.getUserToken();
        this.getKidsInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }
  getChildrenInfo() {
    this.componentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ 'kidsInfo': response });
      if (response.status) {
        this._kidsInformations = response.data;
        console.log(this._kidsInformations);

          this.checkChildDefault(response.data);

      }
    });
  }

  checkChildDefault(data) {
    data.forEach(element => {
      if (element.is_default_kid === 1) {
        localStorage.setItem('selectedKid', element.nidara_kid_profile_id);
        localStorage.setItem('kidGender', element.gender);
        this.parentsService.getChildExpriyDay({'id': element.nidara_kid_profile_id}).subscribe(response => {
          if (response.status) {
            this.childepriyday = 1;
          } else {
            this.childepriyday = 2;
          }
        });
       // this.sharedService.addmissService(this.mission);
        this.sharedService.confirmMission(this.mission);
      } else {

      }
    });
  }
  ngAfterViewInit() {
    this.parent_stuts = localStorage.getItem('parent_stuts');
    if (sessionStorage.getItem('todaysession') === 'end') {
      this.parentModal.show();
      this.parentModal.config = { backdrop: true, focus: true, ignoreBackdropClick: true, keyboard: false, show: false };
      this.appService.debugConsole(this.parentModal);

      $('#parent-login').click(function () {
        $('#parent-account').slideDown('slow').css('display', 'block');
      });
      $('.child-login').click(function () {
        $('#parent-account').css('display', 'none');
      });
    } else if (this.parent_stuts === '1') {
      this.parentModal.hide();
    } else {
    this.parentModal.show();
    this.parentModal.config = { backdrop: true, focus: true, ignoreBackdropClick: true, keyboard: false, show: false };
    this.appService.debugConsole(this.parentModal);

    $('#parent-login').click(function () {
      $('#parent-account').slideDown('slow').css('display', 'block');
    });
    $('.child-login').click(function () {
      $('#parent-account').css('display', 'none');
    });
  }
  }

  ngParentQuseAfterViewInit() {
    this.parentQuesModel.show();
    this.parentQuesModel.config = { backdrop: true, focus: true, ignoreBackdropClick: true, keyboard: false, show: false };
    this.appService.debugConsole(this.parentQuesModel);

    // $("#parent-login").click(function () {
    //   $("#parent-account").slideDown('slow').css("display", "block");
    // });
    // $('.child-login').click(function () {
    //   $('#parent-account').css("display", "none");
    // });
  }

  ngDailyRoutineStatusViewInit() {
    this.dailyRoutineModel.show();
    this.dailyRoutineModel.config = {backdrop: true, focus: true, ignoreBackdropClick: false, keyboard: false, show: false};

  }



  alertFail() {
    console.log('modal close');
    //
   // this.parentModal.hide();
  }

  popupFromSubmit(form) {

    this.authenService.getParentPOPUPValidation(this.formData).subscribe(response => {
      this.appService.debugConsole(response); // console

      if (response.status) {
        this.parentModal.hide();
          localStorage.setItem('parent_stuts', '1');
          sessionStorage.setItem('todaysession', 'start');

        this.componentsService.getKidsInfo().subscribe( response => {
          this.appService.debugConsole({ 'kidsInfo': response });
          if (response.status) {
            this.childInfo = response.data;
            this.dailyroutin_status = response.data[0].dailyroutine_status;
            if (this.dailyroutin_status === 0 || this.dailyroutin_status === 1) {
                // this.dailyRoutineModel.show();
                // $('#parentquestionar').css("display", "none");
            } else {
              this.parentQuesModel.show();
              // $('#parentquestionar').css("display", "none");
            }
            console.log(this.childInfo);
          }
        });

      } else {
        this._loginstatus = response.message;
      }
    });

  }
  dailySession() {
    this.parentsService.getDailystartend({'nidara_kid_profile_id': localStorage.getItem('selectedKid')}).subscribe(res => {
      this.start = res.start;
      this.end = res.end;
      if (res.start.length >= 1) {
        this.startlength = 1;
      }
      else {
        this.startlength = 0;
      }
      if (res.end.length >= 1) {
        this.endlength = 1;
      } else {
        this.endlength = 0;
      }
    });
  }

  dailyroutine() {
    this.componentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ 'kidsInfo': response });
      if (response.status) {
        this.childInfo = response.data;
        this.dailyroutin_status = response.data[0].dailyroutine_status;
        if (this.dailyroutin_status === 0) {
          // localStorage.setItem('selectedKid', this.childInfo.nidara_kid_profile_id);
          this.parentsService.createDailyRoutineStatus({'nidara_kid_profile_id': localStorage.getItem('selectedKid')}).subscribe(response => {
          console.log(response);
        });
          this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.CHILDREN]);

        }
        console.log(this.childInfo);
      } else {

      }
    });
  }

  formDisbled() {
    this.formdisbled = 1;
  }

  ngOnDestroy() {

  }

  /**
   * getCoreSubjects
   */
  getCoreSubjects() {
    this.parentsService.getCoreSubjects({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'day_id': localStorage.getItem('days'), 'grade_id': localStorage.getItem('grade')}).subscribe(response => {
      this.appService.debugConsole({ 'getCoreSubjects': response }); // console
      if (response.status) {
        this.coreEducation = response.data.core_education;
        this.childEducation = response.data.core_health;
        this.coreInterestDiscovery = response.data.core_interest_development;
        this.currentDate = response.data.today_date;

        this.childName = 'My ' + response.data.kid_name;
        this.month = 'Month : ' + response.data.month;
        this.week = 'Week : ' + response.data.week;
        this.getSchedulerTask();
      }
      console.log(response);

    });

  }
  getParentCoreSubjects() {
      this.parentsService.getParentCoreSubjects({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'day_id': localStorage.getItem('days'), 'grade_id': localStorage.getItem('grade')}).subscribe(response => {
        console.log(response);
        if (response.status) {
          this.parentcoreEducation = response.data.core_education;
          this.parentchildEducation = response.data.core_health;
          this.parentcoreInterestDiscovery = response.data.core_interest_development;
        }
      });

  }
  getParentgameInfo() {
    this.parentsService.getParentgameInfo({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'day_id': localStorage.getItem('days'), 'grade_id': localStorage.getItem('grade')}).subscribe(response => {
        this.parentGameAnswer = response.value;
    });
}

  // select the kid to initate the get selected kids data
  selectedParentKidInfo(kidsInfo, tag) {

    this.childInfo.forEach(element => {
      if (element.nidara_kid_profile_id === kidsInfo.nidara_kid_profile_id) {
        localStorage.setItem('selectedParentKid', kidsInfo.nidara_kid_profile_id);
        localStorage.setItem('ParentKidDays', kidsInfo.no_days);
        this.parentsService.getChildExpriyDay({'id': kidsInfo.nidara_kid_profile_id}).subscribe(response => {
          if (response.status) {
            this.childepriyday = 1;
          } else {
            this.childepriyday = 2;
          }
        });
        $('#Parentkids' + kidsInfo.nidara_kid_profile_id).css('filter', 'none');
        this.parentsService.getGameDayInfo({ 'kid_id': localStorage.getItem('selectedParentKid') }).subscribe(response => {
          console.log(this.now + '-' + response.data[0].created_at);
          localStorage.setItem('grade_id', response.data[0].guided_learning_id);
          this.parentsService.getParentQuestionInfo({'nidara_kid_profile_id': localStorage.getItem('selectedParentKid'), 'grade_id': response.data[0].guided_learning_id, 'day_id': localStorage.getItem('ParentKidDays')}).subscribe(response => {
            this.parentQuestion = response.data;
            this.parentGameAnswer = response.value;
            if (this.parentQuestion) {
              // $('#parentquestionar').css("display", "block");
            }
            if (this.parentGameAnswer) {
              this.parentQuesModel.hide();
            }
          });
        });

      } else {
        $('#Parentkids' + element.nidara_kid_profile_id).css('filter', 'grayscale(100%)');

      }
    });
  }
  parentQuestionFromSubmit(form) {
    this.parentsService.createParentHealthAnswer({ 'nidara_kid_profile_id': localStorage.getItem('selectedParentKid'), 'parentQuestionAnswer': this.parentQuestion, 'day_id': localStorage.getItem('ParentKidDays')}).subscribe(response => {
      // this.appService.debugConsole({ "getFamilyInfo": response }) // console
      if (response.status) {
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
        this.parentsService.getParentQuestionInfo({'nidara_kid_profile_id': localStorage.getItem('selectedParentKid'), 'grade_id': localStorage.getItem('grade_id'), 'day_id': localStorage.getItem('ParentKidDays')}).subscribe(response => {
          this.parentQuestion = response.data;
          this.parentGameAnswer = response.value;

          if (this.parentQuestion) {
            // $('#parentquestionar').css("display", "block");
          }
          if (this.parentGameAnswer) {
            this.parentQuesModel.hide();
          }
        });
        this.parentsService.getParentCoreSubjects({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'day_id': localStorage.getItem('days'), 'grade_id': localStorage.getItem('grade')}).subscribe(response => {
          console.log(response);
          if (response.status) {
            this.parentcoreEducation = response.data.core_education;
            this.parentchildEducation = response.data.core_health;
            this.parentcoreInterestDiscovery = response.data.core_interest_development;
          }
        });
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }

    });
  }

  parentGameCoreFromSubmit(form) {
    this.parentsService.createParenGameAnswer({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'parentGameQuestionAnswer': this.gamecoreEducation, 'day_id': localStorage.getItem('days')}).subscribe(response => {
      // this.appService.debugConsole({ "getFamilyInfo": response }) // console
      if (response.status) {
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
        setTimeout(() => {
          // $('#parentgame').css("display", "none");
          // $('#parentgameclick').css("display", "none");
        }, 1000);
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }

    });
  }
  parentGameHealthFromSubmit(form) {
    this.parentsService.createParenGameAnswer({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'parentGameQuestionAnswer': this.gamechildEducation, 'day_id': localStorage.getItem('days')}).subscribe(response => {
      // this.appService.debugConsole({ "getFamilyInfo": response }) // console
      if (response.status) {
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
        setTimeout(() => {
          // $('#parentgame').css("display", "none");
          // $('#parentgameclick').css("display", "none");
        }, 1000);
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }

    });
  }
  parentGameIntFromSubmit(form) {
    this.parentsService.createParenGameAnswer({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'parentGameQuestionAnswer': this.gamecoreInterestDiscovery, 'day_id': localStorage.getItem('days')}).subscribe(response => {
      // this.appService.debugConsole({ "getFamilyInfo": response }) // console
      if (response.status) {
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
        setTimeout(() => {
          // $('#parentgame').css("display", "none");
          // $('#parentgameclick').css("display", "none");
        }, 1000);
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }

    });
  }
  /**
   * getuserToken
   */
  getUserToken() {
    this.parentsService.getUserInfoByToken().subscribe(response => {

      this.appService.debugConsole({ 'getUserToken': response }); // console
      if (response.status) {
        localStorage.setItem('email', response.user_info.email);
        localStorage.setItem('user_id', response.user_info.id);
        if (response.user_info.status === '4' || response.user_info.user_type !== 'parent') {
          localStorage.clear();
          this.router.navigate(['/signin']);
        } else {
          this.getSchedulerTask();
        }

      }

    });
  }


  goToChildPage(data) {

    console.log('data', data);
    localStorage.setItem('selectedKid', data.nidara_kid_profile_id);
    localStorage.setItem('kidGender', data.gender);
    localStorage.setItem('days', data.no_days);
    this.parentsService.getChildExpriyDay({'id': data.nidara_kid_profile_id}).subscribe(response => {
      if (response.status) {
        this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.CHILDREN]);
      } else {

        this.expriyday['status'] = false;
            this.expriyday['message'] = response.message;
        console.log(response.message);
      }
    });

  }

  /**
   * getParent and KidsInfo
   */
  getKidsInfo(): void {

    this.parentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ 'getKidsInfo': response }); // console
      if (response.status) { // status: true
        this.childImages = response.data;
        this.addchildImage = false;
        console.log(response);
        this.getCoreSubjects();
        this.getParentCoreSubjects();
        this.getParentgameInfo();
        this.dailySession();
      } else {
        this.addchildImage = true;
      }

    });

  }

  /**
   * getSchedulerTask
   * @param: profileid
   */
  getSchedulerTask() {


    this.parentsService.getSchedularTask({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid') }).subscribe(response => {

      this.appService.debugConsole({ 'getSchedulerTask': response }); // console
      if (response.status) {

        this.from_time = response.data.from_time;
        this.to_time = response.data.to_time;
        this.taks = response.data.taks;
        if (response.data.from_time) {
          if (!isNaN(parseFloat(response.data.from_time)) && !isNaN(parseFloat(response.data.to_time))) {
            this.scheduleTask = response.data.from_time + '-' +  response.data.to_time;
          } else {
            this.scheduleTask = '';
          }

        } else {
          this.scheduleTask = '';
        }

      }
    });

  }
  onChange(option) {


    this.schedulerDays.forEach(element => {

      if (element.day === option.day) {
        if (option.option === 1) {
          element.option = 0;
        } else {
          element.option = 1;
        }
      }

    });
    console.log(this.schedulerDays);
  }
  dailySchedulerFormSubmit(form) {

    const ftimeHours = this.set_time.getHours();
    const ftimeMinutes = this.set_time.getMinutes();

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.formData['set_time'] = ftimeHours + ':' + ftimeMinutes;
    this.formData['reminder'] = '15_min_before';
    this.formData['repeatday'] = 'repeat';
    this.formData['scheduler_days_id'] = this.schedulerDays;

    this.createdailyRoutine(this.formData);

  }


  createdailyRoutine(formData) {
    this.parentsService.updateDailyRoutineStatus({'nidara_kid_profile_id': localStorage.getItem('selectedKid')}).subscribe(response => {
      console.log(response);
    });
    this.appService.debugConsole({ 'createdailyRoutine': formData });
    this.componentsService.createdailyRoutine(formData).subscribe(response => {

      this.appService.debugConsole({ 'createdailyRoutine': response }); // New Profile Added Successfully

      this._response['status'] = true;
      this._response['message'] = response.message;
      if (response.status) {
        this._response['alert'] = 'alert alert-success';
      //  this.sharedService.updatemissService(this.updateService);
      } else {
        this._response['alert'] = 'alert alert-danger';

      }

    });
  }

  getDailyRoutineInfoData() {
    this.parentsService.getDailyRoutineInfoData({ 'nidara_kid_profile_id': localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ 'getDailyRoutineInfo': response });
      // if (response.status) {
        // this.formData = response.data;
        // this.guidedlearning.response.data.guided_learning_id;
        const that = this;
        let i = 0;
        const timers4: Array<timers_class4> = [];
        // let reminders:Array<timers_class>=[]
        for (i = 0; i < response.data.length; i++) {
          this.formData = response.data[i];
          this.time_get = response.data[i].set_time;
          this.get_time = response.data[i].set_time.split(':');
          this.task_name = response.data[i].task_name;
          // this.reminder = response.data[i].reminder;
          timers4.push(new timers_class4(this.get_time, response.data[i].task_name, this.router));
          // reminders.push(new timers_class(this.reminder));
        }
        this._response['status'] = false;



    });
  }

  closefun() {
    $('#dailyroutinecol').css('display', 'none');
  }


}

export class timers_class4 implements OnInit {
  constructor(private time4: Array<string>, task4: string, private router: Router) {
    const timers4 = setInterval(() => {
        const now4 = new Date();
        if (time4[0] === ('0' + now4.getHours()).slice(-2) && time4[1] === ('0' + now4.getMinutes()).slice(-2) && time4[1] === ('0' + now4.getSeconds()).slice(-2)  ) {
          // this.audioHoverPlayback.play();
          console.log('here' + task4);
            if (task4 === 'nidarachildrensession') {
              $('#dailyroutinecol').css('display', 'block');
            }
          clearInterval(timers4);
          console.log(time4);
        }
      }, 1000);
  }
  ngOnInit() {

  }

}
