import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router,Title, AppService, AuthenService, ParentsService } from './../../app.index';

@Component({
  selector: 'app-view-game-details',
  templateUrl: './view-game-details.component.html',
  styleUrls: ['./view-game-details.component.css']
})
export class ViewGameDetailsComponent implements OnInit {
 game_id;
  gamesanswers;
  gameans;
  kid_id;
  gameanswersDetails;
  gameCorrect;
  gameCorrectval;
  gameInCorrect;
  gameInCorrectval;
  gamecownt;
  gameCorrectcownt;
  gameInCorrectcownt;
  activeTime;
  gameAllanswar;
  gamefilter;
  gamename;
  gameDetails:any=[];
  constructor(private activatedRoute:ActivatedRoute, private parentsService:ParentsService) {

  }

  ngOnInit() { window.scrollTo(0, 0);
    let that=this;
    this.kid_id = localStorage.getItem('selectedKid');
    this.game_id = this.activatedRoute.snapshot.params.id;
    this.parentsService.getGameResult({"nidara_kid_profile_id":this.kid_id,"game_id":this.game_id}).subscribe(response=>{
      this.gameDetails = response.data;
      this.gamename = response.data[0].game_name;
    });
  }
}
