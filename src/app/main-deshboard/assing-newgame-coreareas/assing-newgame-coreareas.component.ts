import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-assing-newgame-coreareas',
  templateUrl: './assing-newgame-coreareas.component.html',
  styleUrls: ['./assing-newgame-coreareas.component.css']
})
export class AssingNewgameCoreareasComponent implements OnInit {
  public fliter:any=[];
  grade:any=[];
  coreframwork:any=[];
  subjects:any=[];
  public gamelist:any=[];
  public gameinfo:any=[];
  constructor(private dashboardService:DashboardService) {
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    this.dashboardService.getGameViewInfo().subscribe(response =>{
      this.gamelist = response;
    });
    this.dashboardService.getGameInfo().subscribe(response =>{
      this.gameinfo = response.data;
    });

   }

  ngOnInit() {
  }

}
