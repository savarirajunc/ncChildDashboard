import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenService } from '../../service/children.service';
declare var $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private schoolId;
  public getChildinfo: any = [];
  public dailyroutine:any=[];
  public audioClickPlayback = new Audio();
  public audioHoverPlayback = new Audio();

  public now: Date = new Date();
  public _response: any = { "status": false, "alert":"success","message": "" };

  public formData: any = {};
  public set_time:any=[];
  public gameSlides;
    public gameThumbs;

    public kid_profile_id;
    public backroundDayOrder;
    public gifDayOrder;
    public imgDayOrder;


  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService:any=[];
  public updateService:any=[];
  public addChild: boolean = false;
  public addCareinfo: boolean = false;
  public reminder:any=[];
  public gameListing:any=[];
  public guidedlearning:any=[];
  public gameCount;
  public gender;
  public childCheck;
  public ip;
  constructor(private activatedRoute:ActivatedRoute, private childrenService:ChildrenService,private router:Router) {
  }
  ngOnInit() { window.scrollTo(0, 0);
    this.schoolId = this.activatedRoute.snapshot.params.id;
    this.ip = this.activatedRoute.snapshot.params.ip;
    this.childrenService.getDailyLabSeat({'access_key': this.schoolId, 'ip_address': this.ip}).subscribe(res => {
      this.getChildinfo = res.data;
      localStorage.setItem('schoolId',this.schoolId);
      localStorage.setItem('school_id',res.school_id);
      localStorage.setItem('kidGender','female');
      localStorage.setItem('grade_id',res.grade_id);
      localStorage.setItem('session_id',res.session_id);
      localStorage.setItem('session',res.session);
      localStorage.setItem('selectedKid',res.data[0].ncs_id);
      this.childrenService.getGameDayListInfo({'gender':res.data[0].gender,'grade_id':res.class_id ,'day_id':1}).subscribe(response => {
        this.gameSlides = response.games;
        if(response.gender === 'male') {
          this.gender = 'rahul';
          this.gifDayOrder = '<img src="assets/games/rahul/main_gif/' + response.gif +'">';
          this.imgDayOrder = '<img src="assets/games/rahul/img/' +  response.img +'">';
        } else if(response.gender === 'female') {
          this.gender = 'tina';
          this.gifDayOrder = '<img src="assets/games/tina/main_gif/' + response.gif +'">';
          this.imgDayOrder = '<img src="assets/games/tine/img/' +  response.img +'">';
        } else {
          this.gender = 'admin';
        }
        let i = 0;
        this.gameCount = response.games[0].page.length;
        for (i = 0; i < this.gameSlides.length; i++) {

        }
        this.backroundDayOrder = 'https://cdnncschoolapplication.azureedge.net/assets/games/dashboard/background_day_order/' + response.background_image;
        localStorage.setItem('today_bg',this.backroundDayOrder);
        $("child-dashbord-layout").css("background-image","url(" + this.backroundDayOrder + ")");
    });
    })
  }

  checkattendance(evnt){
    this.childrenService.checkDailyAttendance({'child_id':evnt}).subscribe(res =>{
      if (res.status) {
        localStorage.setItem('days',res.data[0].day);
        this._response['status'] = true;
        this._response['message'] = res.message;
        this._response['alert'] = 'alert alert-success',
        sessionStorage.setItem('todaysession', 'start');
        localStorage.setItem('session', '0');
        localStorage.setItem('ipaddress',this.ip);
       // this.router.navigate(['/children-dashboard',this.schoolId,this.ip,'child-game-session']);
        window.open('/children-dashboard/' + this.schoolId + '/' + this.ip + '/child-game-session','_self');
        // this.router.navigate([])
      } else {
            this._response['status'] = true;
            this._response['message'] = res.message;
            this._response['alert'] = 'alert alert-danger';
          }
    })
  }
}
