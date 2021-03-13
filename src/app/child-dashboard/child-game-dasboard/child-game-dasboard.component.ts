  // import { Response } from '@angular/http';
  import { POSTURL } from './../../app.config';
  import { Component, OnInit, ViewChild } from '@angular/core';
  // import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
  import { Inject } from '@angular/core';
  import { DOCUMENT } from '@angular/platform-browser';
  import { Router, Title, AppService } from './../../app.index';
  import { CONSTANTS } from './../../app.constants';
  import { AuthenService } from './../../service/authen.service';
  import { ChildrenService } from './../../service/children.service';
  import { GAMEDASHBOARDAUDIO } from './../../app.config';
  import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
  // import { waitForMap } from '@angular/router/src/utils/collection';
  import { ChangeDetectorRef } from '@angular/core';
  import { SharedService } from './../../service/shared.service';
  declare var $: any;
  @Component({
    selector: 'app-child-game-dasboard',
    templateUrl: './child-game-dasboard.component.html',
    styleUrls: ['./child-game-dasboard.component.css']
  })
  export class ChildGameDasboardComponent implements OnInit {
    loading = true;
    @ViewChild('slider') slider;
    public _dashboardLink: String;
    public currentTime;
    // public set_time;
    public gameSlides;
    public gameThumbs;
    public dailyroutine;
    public kid_profile_id;
    public backroundDayOrder;
    public gifDayOrder;
    public gifDayOrder2;
    public imgDayOrder;
    public audioClickPlayback = new Audio();
    public audioHoverPlayback = new Audio();
    public extaudioClickPlayback = new Audio();
    public extaudioHoverPlayback = new Audio();
    public welcomeAudioPlayback = new Audio();

    public now: Date = new Date();
    // alert initilaze
    public _response: any = { 'status': false, 'alert': 'success', 'message': '' };

    // Two-way Binding Initilaze
    public formData: any = {}; // ngModel formData Objects intiliaze
    public set_time;


    // sharedService Initilaze
    public addServiceInit = false;
    public addService;
    public updateService;
    public addChild = false;
    public addCareinfo = false;
    public reminder;
    public gameListing;
    public guidedlearning;
    public gameCount;
    public gender;
    public childCheck;
    constructor( @Inject(DOCUMENT) private document: any, private titleService: Title, private authenService: AuthenService, private sharedService: SharedService,  private appService: AppService, private router: Router, private _sanitizer: DomSanitizer, private childrenService: ChildrenService, private cd: ChangeDetectorRef) {
      const that = this;
      sharedService.missionConfirmed$.subscribe(
        astronaut => {
          this.addServiceInit = false;
          this.volumeClick();
          this.volumeHover();          // this.getDailyRoutineInfo();
          // this.exitHover();
        });

      sharedService.addmissService$.subscribe(addService => {
        this.exitHover();
        this.formData = {};
        this.addServiceInit = true;
      });

      sharedService.updatemissionService$.subscribe(updateService => {
        this.updateService = updateService;
      });

    }

    /**
   * Volume Hover
   */
  volumeHover() {
      $('#fiximg-1').css('display', 'block');
      $('#fiximg-2').css('display', 'none');
    setTimeout(()=> {
      $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
    }, 8000);
   // this.gifDayOrder2 = localStorage.getItem('gifDayOrder');
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();

      if (localStorage.getItem('kidGender') === 'female') {
        this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
      }
      if (localStorage.getItem('kidGender') === 'male') {
         this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
      }
    this.audioHoverPlayback.load();
    this.audioHoverPlayback.play();
    // this.sharedService.confirmMission(this.mission);

  }



  /**
   * volumeClick
   */
  volumeClick() {
      $('#fiximg-1').css('display', 'block');
      $('#fiximg-2').css('display', 'none');
    setTimeout(()=> {
      $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
    }, 8000);
    // this.gifDayOrder2 = localStorage.getItem('gifDayOrder');
    this.audioHoverPlayback.pause();
    this.audioClickPlayback.pause();

      if (localStorage.getItem('kidGender') === 'female') {
        this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
      }
      if (localStorage.getItem('kidGender') === 'male') {
        this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
      }

    this.audioClickPlayback.load();
    this.audioClickPlayback.play();
    // this.sharedService.confirmMission(this.mission);
    console.log('volume click');
  }


    ngOnInit() { window.scrollTo(0, 0);
      this.childCheck = localStorage.getItem('session');
      window.scrollTo(0, 1);


      this.titleService.setTitle(CONSTANTS.PAGETITLE.DAILYROUTINE);
      this.getGameListFortoDay();
      this.timeintravel();
      this.getDailyRoutineInfo();
    }

    exitHover() {
      this.audioClickPlayback.pause();
      this.audioHoverPlayback.pause();
      this.extaudioHoverPlayback.src = GAMEDASHBOARDAUDIO.EXITBUTTON.HOVER;
      this.extaudioHoverPlayback.load();
      this.extaudioHoverPlayback.play();
      $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
    }

    timeintravel(){
      let url;
      if(this.childCheck == 0){
      const timers5 = setInterval(() => {
        this.childrenService.getGameUrlInSchool({'school_id':localStorage.getItem('school_id'),'grade_id':localStorage.getItem('session_id')}).subscribe(res => {
          if(res.status){
            let ip = localStorage.getItem('ipaddress');
            url = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/game_common_files/index.html?'+res.data[0].game_id+'&'+localStorage.getItem('selectedKid')+'&'+POSTURL.SERVICEURL+'&'+ res.data[0].game_url + 'game.html'+'&'+localStorage.getItem('school_id')+'&'+localStorage.getItem('grade_id')+'&'+localStorage.getItem('session_id')+'&'+this.childCheck;
            localStorage.setItem('game_url',url);
            const main_url = '/children-dashboard/'+localStorage.getItem('schoolId')+ '/' + ip + '/child-game-paly/';
           // this.router.navigate([main_url]);
           window.open(main_url,'_self')
           // window.open(url);
            clearInterval(timers5);
          } else {

          }
      });
      },1000);
    }
    }

    getGameListFortoDay() {
      this.childrenService.getGameDayListInfo({'gender': localStorage.getItem('kidGender'), 'grade_id':localStorage.getItem('grade_id'), 'day_id': localStorage.getItem('days')}).subscribe(response => {
          this.gameSlides = response.games;
            this.gender = 'tina';
            this.gifDayOrder = '<img src="assets/games/tina/gif/' + response.gif + '">';
            this.gifDayOrder2 = '<img src="assets/games/tina/img/' +  response.img +'">';
            this.imgDayOrder = 'assets/games/tina/img/' + response.img;
            this.gameThumbs = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/tina/';
            this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
          if(localStorage.getItem('child-dashboar') == '1'){
            $('#fiximg-1').css('display', 'none');
            $('#fiximg-2').css('display', 'block');
          }
          else {
          // localStorage.setItem('gifDayOrder', this.gifDayOrder);
          setTimeout(() => {
            $('#fiximg-1').css('display', 'block');
            $('#fiximg-2').css('display', 'none');
            this.audioClickPlayback.load();
            this.audioClickPlayback.play();
          }, 100);
          setTimeout(() => {
            $('#fiximg-1').css('display', 'none');
            $('#fiximg-2').css('display', 'block');
            localStorage.setItem('child-dashboar','1');
          }, 8000);
        }
          let i = 0;
          this.gameCount = response.games[0].page.length;
          for (i = 0; i < this.gameSlides.length; i++) {

          }

          $('.carousel-control .icon-prev ').css('display', 'none');
          let slideCount = 1;
          try {
            response.games.forEach(element => {
            console.log('element', element);
            slideCount = slideCount + 1;
        });

        this.backroundDayOrder = 'assets/games/dashboard/background_day_order/' + response.background_image;
        console.log('background', this.backroundDayOrder);
        } catch (error) {
          console.log(error);
        }
      });
    }

    creatAttendance() {
      this.childrenService.saveDailyAttendance({'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'start_time': localStorage.getItem('set_time'), 'task_name': 'nidarachildrensession'}).subscribe(response => {
          if (response.status) {
            localStorage.setItem('gamessesion', 'true');
          } else {
            localStorage.setItem('gamessesion', 'false');
          }
      });
    }

    getDailyRoutineInfo() {
      this.childrenService.getDailySessionTime({ 'school_id': localStorage.getItem('school_id'),'session_id':localStorage.getItem('session_id') }).subscribe(response => {
        this.appService.debugConsole({ 'getDailyRoutineInfo': response });
          const that = this;
          let i = 0;
          const timers: Array<timers_class5> = [];
          this.set_time =  response.data[i].end_time.split(':');
          timers.push(new timers_class5(this.set_time, this.router));
          this._response['status'] = false;
      });
    }

  playClick(game_url, game_id, gender) {
    const key = 'gameId';
    localStorage.setItem(key, game_id);
    let url;
    if (gender === 'tina') {
      url = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/game_common_files/index.html?'+localStorage.getItem('gameId')+'&'+localStorage.getItem('selectedKid')+'&'+POSTURL.SERVICEURL+'&'+CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/tina/' + game_url + 'game.html'+'&'+localStorage.getItem('school_id')+'&'+localStorage.getItem('grade_id');
     // url = game_url + 'index.html';
   } else if (gender === 'rahul') {
      url = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/game_common_files/index.html?'+localStorage.getItem('gameId')+'&'+localStorage.getItem('selectedKid')+'&'+POSTURL.SERVICEURL+'&'+CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/rahul/' + game_url + 'game.html';
    // url = game_url + 'index.html';
   } else {
      url = game_url + 'index.html';
    }

    // this.childrenService.getGameUrl({'game_url': url}).subscribe(response => {
    //  console.log(response);
      localStorage.setItem('game_url',url);
      const main_url = '/children-dashboard/'+localStorage.getItem('schoolId')+'/child-game-paly/';
      this.router.navigate([main_url]);
    //});
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
    $('#fiximg-1').css('display', 'none');
    $('#fiximg-2').css('display', 'block');
    this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.PLAYHOVER;
    this.audioHoverPlayback.load();
    this.audioHoverPlayback.play();
  }
  playHover() {
    $('#fiximg-1').css('display', 'none');
    $('#fiximg-2').css('display', 'block');
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
      this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.PLAYHOVER;
      this.audioHoverPlayback.load();
      this.audioHoverPlayback.play();
    }
    slideClick(folder, gender) {
      console.log(folder);
      this.audioClickPlayback.pause();
      this.audioHoverPlayback.pause();
      $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
       if (gender === 'tina') {
       //url = 'assets/games/tina/' + game_url + 'index.html';
       this.audioHoverPlayback.src = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/tina/' + folder + 'game_audio/audio.mp3';
      // url = game_url + 'index.html';
    } else if (gender === 'rahul') {
      // url = 'assets/games/rahul/' + game_url + 'index.html';
       this.audioHoverPlayback.src = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/rahul/' + folder + 'game_audio/audio.mp3';
     // url = game_url + 'index.html';
    }

      this.audioHoverPlayback.load();
      this.audioHoverPlayback.play();
    }
    slideHover(folder, gender) {
      console.log(folder);
      this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
    $('#fiximg-1').css('display', 'none');
    $('#fiximg-2').css('display', 'block');
      if (gender === 'tina') {
        //url = 'assets/games/tina/' + game_url + 'index.html';
        this.audioHoverPlayback.src = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/tina/' + folder + 'game_audio/audio.mp3';
       // url = game_url + 'index.html';
     } else if (gender === 'rahul') {
       // url = 'assets/games/rahul/' + game_url + 'index.html';
        this.audioHoverPlayback.src = CONSTANTS.PAGEURL_MAIN.GAMEURL+'assets/games/rahul/' + folder + 'game_audio/audio.mp3';
      // url = game_url + 'index.html';
     }
      this.audioHoverPlayback.load();
      this.audioHoverPlayback.play();
    }
    slideOut(folder) {
      console.log(folder);
    }
    playOut() {

    }

    ngDoCheck() {



    }
    test = new Audio();
    mouseOvereffect() {



    }

    mouseOuteffect() {

    }

    ngAfterViewChecked() {


   console.log('AfterViewInit', this.slider.activeSlide);
      // this.childrenService.getGameUrlInSchool({'school_id':localStorage.getItem('schoolId'),'grade_id':localStorage.getItem('grade_id')}).subscribe(res => {
      //   console.log(res)
      // })

  if (this.slider.activeSlide === 0) {
    $('.carousel-control.left').css('display', 'none');
    $('.carousel-control .icon-prev ').css('display', 'none');
  } else if (this.slider.activeSlide === 1) {
    $('.carousel-control .icon-prev ').css('display', 'block');
    $('.carousel-control.left').css('display', 'block');
  }

  if (this.slider.activeSlide === 2) {
    $('.carousel-control.right').css('display', 'block');
    $('.carousel-control .icon-next ').css('display', 'block');
  } else if (this.slider.activeSlide === 1) {
    $('.carousel-control .icon-next ').css('display', 'block');
    $('.carousel-control.right').css('display', 'block');
  }

      $('#parent-login').click(function () {
        $('#parent-account').slideDown('slow').css('display', 'block');
      });
      $('.child-login').click(function () {
        $('#parent-account').css('display', 'none');
      });

      $('.carousel-control .icon-next').unbind().click(() => {

        this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
        $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
        this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.NEXTSCREEN;
        this.audioClickPlayback.load();
        this.audioClickPlayback.play();

      });

      $('.carousel-control .icon-next').unbind().mouseover(() => {

        this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
        $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.NEXTSCREEN;
        this.audioHoverPlayback.load();
        this.audioHoverPlayback.play();

      });

      $('.carousel-control .icon-prev').unbind().click(() => {

        this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
        $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
        this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.PERVIOUSSCREEN;
        this.audioClickPlayback.load();
        this.audioClickPlayback.play();

      });



      $('.carousel-control .icon-prev').unbind().mouseover(() => {

        this.audioClickPlayback.pause();
        this.audioHoverPlayback.pause();
        $('#fiximg-1').css('display', 'none');
      $('#fiximg-2').css('display', 'block');
        this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.PERVIOUSSCREEN;
        this.audioHoverPlayback.load();
        this.audioHoverPlayback.play();

      });


    }
    ngOnDestroy() {
      // this._clockSubscription.unsubscribe();
      this.audioClickPlayback.pause();
      this.audioHoverPlayback.pause();
     // location.reload();
    }

  }

  export class timers_class5 {
    public audioClickPlayback = new Audio();
    public audioHoverPlayback = new Audio();
    constructor(private time5: Array<string>, private router:Router) {
      const timers5 = setInterval(() => {
          const now5 = new Date();

          if ((parseInt(time5[0])) == parseInt(('0' + now5.getHours()).slice(-2))) {
            if (('0' + now5.getMinutes()).slice(-2) >= time5[1]) {
              this.router.navigate(['/nidara-children-school/fill-reporting']);
              clearInterval(timers5);
            } else {

            }
          } else if((parseInt(time5[0])) < parseInt(('0' + now5.getHours()).slice(-2))){
            if (('0' + now5.getMinutes()).slice(-2) <= time5[1]) {
              this.router.navigate(['/nidara-children-school/fill-reporting']);
              clearInterval(timers5);
            } else {

            }
          }
        }, 1000);
  }
  }
