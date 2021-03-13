import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildrenService } from './../../service/children.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { GAMEDASHBOARDAUDIO } from './../../app.config';
import { CONSTANTS, Router,Title, AppService, AuthenService, ParentsService } from './../../app.index';

declare var $: any;

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  @ViewChild('gameFrame') iframe: ElementRef;
  public game_url:any =[];
  public gameListing:any={};
  public gameUrl:SafeResourceUrl;
  public obj;
  public backroundDayOrder;
  constructor(private activatedRoute:ActivatedRoute, private childrenService:ChildrenService, public domSanitizer:DomSanitizer, private router:Router) {

   }

  ngOnInit() {

    var createHost = require('cross-domain-storage/host');
    var storageHost = createHost([
      {
        origin: CONSTANTS.PAGEURL_MAIN.GAMEURL,
        allowedMethods: ['get','set','remove']
      },
      {
        origin: CONSTANTS.PAGEURL_MAIN.GAMEURL1,
        allowedMethods: ['get','set','remove']
      },      {
        origin: 'http://localhost:5200',
        allowedMethods: ['get','set','remove']
      }
    ]);
    window.scrollTo(0, 0);
    let that=this;
    this.game_url = localStorage.getItem('game_url');
    this.gameUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.game_url);
    // this.gameUrl = 'http://localhost:4200/assets/games/tina/preschool/dinosaurs1/index.html';
    this.obj = { gameId: "12345", nidara_kid_profile_id: '30', city: "New York" };
    this.iframe.nativeElement.contentWindow.postMessage({key:'storage', method:"set", data: this.obj}, '*');
    this.backroundDayOrder = localStorage.getItem('today_bg');
  }

logoClick(){

}

}
