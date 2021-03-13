import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';

@Component({
  selector: 'app-game-data-view',
  templateUrl: './game-data-view.component.html',
  styleUrls: ['./game-data-view.component.css']
})
export class GameDataViewComponent implements OnInit {

  gameId;
  childInfo;
  grade_id;
  game_info;
  game_name;
  core;
  subject;
  detes;
  getsubjectId;
  formData: any = {};
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private parentsService: ParentsService, private doctorDashboardService: DoctorDashboardService) {
    this.doctorDashboardService.getCoreFream().subscribe(res => {
      this.core = res;
    });
    this.doctorDashboardService.getSubject().subscribe(res => {
      this.subject = res.data;
    });
   }

  ngOnInit() {
    this.gameId = this.activatedRoute.snapshot.params.id;
    this.getsubjectId = this.activatedRoute.snapshot.params.subject;
    // tslint:disable-next-line:max-line-length
    this.doctorDashboardService.getSchoolIndicaterresult( {'subject_id':this.getsubjectId,'nidara_kid_profile_id': localStorage.getItem('kid_id'), 'visit_no': localStorage.getItem('visit_no'), 'standard_ids': this.gameId} ).subscribe(res=>{
      this.game_info = res.data;
      this.detes = res.data;
      this.game_name = res.data[0].game_name;
      this.formData.framework_id = res.data[0].framework_id;
      this.formData.subject_id = res.data[0].subject_id;
    });
  }

  getGameDetails(){
    this.formData.nidara_kid_profile_id = localStorage.getItem('kid_id');
    this.formData.visit_no = localStorage.getItem('visit_no');
    this.formData.game_id =  this.gameId;
    this.doctorDashboardService.getFiltergameDetailsById(this.formData).subscribe(res => {
      this.game_info = res.data;
    } );
  }

}
