import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  guidedlist:any=[];
  coreframworklist:any=[];
  subjects:any=[];
  standardmapview:any=[];
  standard:any=[];
  indicator:any=[];
  gamelisttaging:any=[];
  gamedetails:any=[];
  standard_id:any=[];
  constructor(private dashboardService:DashboardService) {
      this.dashboardService.getguidedListInfo().subscribe(response =>{
        this.guidedlist = response.data
      });
      this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
        this.coreframworklist = response;
      });
      this.dashboardService.getsubjectInfo().subscribe(response =>{
        this.subjects = response.data;
      });
      this.dashboardService.getStandardMapInfo().subscribe(response =>{
        this.standardmapview = response;
      });
      this.dashboardService.getIndicatorsInfo().subscribe(response =>{
        this.indicator = response;
      });
      this.dashboardService.getStandardInfo().subscribe(response =>{
        this.standard = response;
      });
      this.dashboardService.getGameViewInfo().subscribe(response =>{
        this.gamelisttaging = response;
      });
      this.dashboardService.getgamesInfo().subscribe(response =>{
        this.gamedetails = response.data;
        console.log(this.gamedetails);
      });
  }

  ngOnInit() {
    this.dashboardService.getGameViewInfo().subscribe(response =>{
      let that = this;
      // this.gamelisttaging = response;
      // this.standard_id = this.gamelisttaging.filter(gamedata =>{
      //   gamedata.subject_id = this.gamelisttaging.filter(standarddata =>{
      //     return gamedata.standard_id
      //   });
      //   return gamedata.subject_id;
      // });
      let res_obj={};
      response.forEach(row=>{
        console.log(row.indicator_id);
  	       if(!res_obj.hasOwnProperty(""+row.standard_id)){
  		         res_obj[""+row.standard_id]=[row.indicator_id];
              }
            else{
  		          res_obj[""+row.standard_id].push(row.indicator_id);
    	         }
             });
             console.log(res_obj);
           });
           this.dashboardService.getgamesInfo().subscribe(response =>{
           this.gamedetails = response.data;
         });
  }


}
