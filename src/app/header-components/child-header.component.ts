import { Component, Inject, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { GAMEDASHBOARDAUDIO } from './../app.config';
import { CONSTANTS } from './../app.constants';
import { Location } from '@angular/common';
import { SharedService } from './../service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { ParentsService } from '../service/parents.service';
declare var $: any;
@Component({
  selector: 'nidara-child-header',
  templateUrl: './child-header.component.html',
  styleUrls: ['./child-header.component.css']
})
export class ChildHeaderComponent implements OnInit {
  private _dashboardLink: String;

  sessionChuck: any = [];

  sessionValue: any = [];

  private audioHoverPlayback = new Audio();
  private audioClickPlayback = new Audio();
  confirmed = false;
  announced = false;
  mission;
  addmiss;
  subscription: Subscription;
  public ipaddress;
  constructor( @Inject(DOCUMENT) private document: any,private parentsService:ParentsService,  private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {

    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });
      this.subscription = sharedService.addmissService$.subscribe(addmiss =>{
        this.addmiss = addmiss;
      });
      sharedService.updatemissionService$.subscribe(updateService =>{

        //   this.getChildrenInfo();
        this.sharedService.confirmMission(this.mission);
        this.sharedService.addmissService(this.addmiss);
         });
         sharedService.updateDatamissionService$.subscribe(updateDataService=>{
            // this.getProductList();
            // this.volumeClick();
            // this.volumeHover();
         });
         sharedService.updateDatamissionService$.subscribe(updateDataService=>{
          // this.getProductList();
          // this.volumeClick();
          // this.volumeHover();
       });

  }

  ngOnDestroy() {
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
     location.reload();
  }


  /**
   * logo Click
   */
  logoClick() {
    console.log();
  }

  /**
   * Exit Hover
   */
  exitHover() {
    this.audioHoverPlayback.pause();
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.EXITBUTTON.HOVER;
    this.audioHoverPlayback.load();
    this.audioHoverPlayback.play();
    this.sharedService.addmissService(this.addmiss);
   // this.audioHoverPlayback.controls;

  }


  /**
   * Exit Out
   */
  exitOut() {
    this.audioHoverPlayback.pause();
  }
 //  localStorage.setItem('schoolId',this.schoolId);

  /**
   * exitClick
   */
  exitClick() {
    this.audioHoverPlayback.pause();
    this.audioClickPlayback.pause();
    this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.EXITBUTTON.CLICK;
    this.audioClickPlayback.load();
    this.audioClickPlayback.play();
    localStorage.removeItem('gamessesion');
    localStorage.removeItem('set_time');
    localStorage.removeItem('session');
    this.sessionChuck = localStorage.getItem('demoSession');
    if(this.sessionChuck === '1'){
      localStorage.clear();
      setTimeout(()=> {
        this.router.navigate(['/children-dashboard',localStorage.getItem('schoolId')]);
      }, 4000);
    }
    else{
    setTimeout(()=> {
      this.audioHoverPlayback.pause();
      this.audioClickPlayback.pause();
      if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.CHILDREN + '/child-game-session') {
        sessionStorage.setItem('todaysession', 'end');
        this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.CHILDREN, localStorage.getItem('schoolId'), 'how-you-feel']);
      } else {
        this.router.navigate(['/children-dashboard',localStorage.getItem('schoolId')]);
      }
    }, 4000);

  }
  }

  /**
   * Volume Hover
   */
  volumeHover() {
    // this.audioClickPlayback.pause();
    // this.audioHoverPlayback.pause();
    // if (this.document.location.pathname === '/children-dashboard/child-game-session') {
    //   if (localStorage.getItem('kidGender') === 'female') {
    //     this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
    //     this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
    //   }
    //   if (localStorage.getItem('kidGender') === 'male') {
    //     this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
    //     this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
    //   }
    // } else {
    //   this.audioClickPlayback.src = '';
    //     this.audioHoverPlayback.src = '';
    // }
    // this.audioHoverPlayback.load();
    // this.audioHoverPlayback.play();
    this.sharedService.confirmMission(this.mission);

  }

  /**
   * Volume Out
   */
  volumeOut() {
 //   this.audioHoverPlayback.pause();
//    this.audioClickPlayback.pause();

    console.log('volume Out');
  }

  /**
   * volumeClick
   */
  volumeClick() {

    // this.audioHoverPlayback.pause();
    // this.audioClickPlayback.pause();
    // if (this.document.location.pathname === '/children-dashboard/child-game-session') {
    //   if (localStorage.getItem('kidGender') === 'female') {
    //     this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
    //     this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.TINA;
    //   }
    //   if (localStorage.getItem('kidGender') === 'male') {
    //     this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
    //     this.audioHoverPlayback.src = GAMEDASHBOARDAUDIO.WELCOMEAUDIO.RAHUL;
    //   }
    // } else {
    //   this.audioClickPlayback.src = '';
    //     this.audioHoverPlayback.src = '';
    // }
    // this.audioClickPlayback.load();
    // this.audioClickPlayback.play();
    this.sharedService.confirmMission(this.mission);
    console.log('volume click');
  }
  ngOnInit() {
    this.ipaddress =  localStorage.getItem('myIP');
  }

}
