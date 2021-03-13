import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assing-newgame-details',
  templateUrl: './assing-newgame-details.component.html',
  styleUrls: ['./assing-newgame-details.component.css']
})
export class AssingNewgameDetailsComponent implements OnInit {
  game_id:any=[];
  public formData:any={};
    _response: Object = { "status": false,"alert":"info", "message": "" };

    indicator:any=[];
    standard:any=[];
    indicatorId:any={};
    gameinfo:any=[];
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getIndicatorsInfo().subscribe(response =>{
      this.indicator = response;
      this.indicatorId = response.id;
    });
    this.dashboardService.getStandardInfo().subscribe(response =>{
      this.standard = response;
    });
    this.dashboardService.getGameInfo().subscribe(response =>{
      this.gameinfo = response.data;
    });
   }

  ngOnInit() {
    this.game_id = this.activatedRoute.snapshot.params.id;
    console.log(this.game_id);
  }
  addGameFormSubmit(form){
    this.dashboardService.gamesCreate(this.formData).subscribe(response =>{
        console.log(response);
        if(response.status){
        form.reset();
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-success";
        // setTimeout(() => {
        //   this.router.navigate(['/signin']);
        // }, 5000);
        }
        else{
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
    });
  }

}
