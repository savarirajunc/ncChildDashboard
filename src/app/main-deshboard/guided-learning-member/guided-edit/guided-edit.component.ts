import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-guided-edit',
  templateUrl: './guided-edit.component.html',
  styleUrls: ['./guided-edit.component.css']
})
export class GuidedEditComponent implements OnInit {
  guided_id;
  id;
  _response: any = { "status": false,"alert":"info", "message": "" };
  guidedlist:any=[];
  coreframwork:any=[];
  subjects:any=[];
  guidedSchedule:any=[];
  gamelist;
  public days;
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.guidedlist = response.data
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getDaysInfo().subscribe(response =>{
      this.days = response.data;
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.guided_id = this.activatedRoute.snapshot.params.grade_id
    this.dashboardService.getGuidedInfoByid({"day_id":this.id,"grade_id":this.guided_id}).subscribe(response =>{
      this.guidedSchedule = response.data;
      console.log(response);
    });
  }
  addGameForm(){
    let i = this.guidedSchedule.length;
    this.guidedSchedule[i-1].dayGamaGroup.push({
      framework_id:'',
      subject_id:'',
      game_id:''
    })
  }
  onChange(){
    this.dashboardService.getGuidedGameInfo(this.guidedSchedule[0]).subscribe(response =>{
        this.gamelist = response.data;
    });
  }
  guidedSubmit(){
    this.dashboardService.updateGuidedLearning(this.guidedSchedule[0]).subscribe(response => {
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
      }
      else{
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

}
