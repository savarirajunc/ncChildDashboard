import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, Title, AppService } from './../../app.index';
import { CONSTANTS } from './../../app.constants';
import { AuthenService } from './../../service/authen.service';
import { ChildrenService } from './../../service/children.service';
import { GAMEDASHBOARDAUDIO } from './../../app.config';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { SharedService } from './../../service/shared.service';
declare var $: any;
@Component({
  selector: 'app-how-you-feel',
  templateUrl: './how-you-feel.component.html',
  styleUrls: ['./how-you-feel.component.css']
})
export class HowYouFeelComponent implements OnInit {
  public audioClickPlayback = new Audio();
  public audioHoverPlayback = new Audio();
  private sessionId;
  private startEnd;
  public getBg;
// tslint:disable-next-line: max-line-length
  constructor( @Inject(DOCUMENT) private document: any, private titleService: Title, private authenService: AuthenService, private sharedService: SharedService,  private appService: AppService, private router: Router, private _sanitizer: DomSanitizer, private childrenService: ChildrenService, private cd: ChangeDetectorRef) {
    this.audioHoverPlayback.pause();
      this.audioClickPlayback.src = GAMEDASHBOARDAUDIO.GAMESTART.HOWYOUFEEL;
      this.audioClickPlayback.load();
      this.audioClickPlayback.play();
      this.sessionId = sessionStorage.getItem('sessionId');
   }

  ngOnInit() {
    this.getBg = localStorage.getItem('today_bg');
    if (sessionStorage.getItem('todaysession') === 'start') {
      this.startEnd = 1;
    } else if (sessionStorage.getItem('todaysession') === 'end') {
      this.startEnd = 2;
    } else {
      this.startEnd = 1;
    }

  }


  happy() {
    $('.rectangle1_sub').css('display', 'block');
    $('.rectangle1').css('display', 'none');
    $('.rectangle2_sub').css('display', 'none');
    $('.rectangle2').css('display', 'block');
    localStorage.setItem('child-dashboar', '0');
// tslint:disable-next-line: max-line-length
    // this.childrenService.saveRoutinestatus({'child_id': localStorage.getItem('selectedKid'), 'start_end': this.startEnd, 'session_id': sessionStorage.getItem('sessionId'), 'status': 1}).subscribe(Response => {
    //   console.log(Response);
    // });
    if (sessionStorage.getItem('todaysession') === 'start') {
        localStorage.setItem('session', 'start');
        this.audioClickPlayback.pause();
        setTimeout(() => {

          this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.CHILDREN,localStorage.getItem('schoolId'),'child-game-session']);
        }, 400);
    } else if (sessionStorage.getItem('todaysession') === 'end') {
      this.router.navigate(['/dashboard']);
    }
  }

  sad() {
    localStorage.setItem('child-dashboar', '0');
    $('.rectangle2_sub').css('display', 'block');
    $('.rectangle2').css('display', 'none');
    $('.rectangle1_sub').css('display', 'none');
    $('.rectangle1').css('display', 'block');
// tslint:disable-next-line: max-line-length
    // this.childrenService.saveRoutinestatus({'child_id': localStorage.getItem('selectedKid'), 'start_end': this.startEnd, 'session_id': sessionStorage.getItem('sessionId'), 'status': 2}).subscribe(Response => {
    //   console.log(Response);
    // });
    if (sessionStorage.getItem('todaysession') === 'start') {
        localStorage.setItem('session', 'start');
        this.audioClickPlayback.pause();
        setTimeout(() => {
          this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.CHILDREN,localStorage.getItem('schoolId'),'child-game-session']);
        }, 400);
    } else if (sessionStorage.getItem('todaysession') === 'end') {
      this.router.navigate(['/dashboard']);
    }
  }

}
