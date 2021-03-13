import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';

@Component({
  selector: 'app-ind-game-view',
  templateUrl: './ind-game-view.component.html',
  styleUrls: ['./ind-game-view.component.css']
})
export class IndGameViewComponent implements OnInit {

  gameId;
  childInfo;
  grade_id;
  game_info;
  game_name;
  core;
  subject;
  detes;
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
    // tslint:disable-next-line:max-line-length
    this.doctorDashboardService.getgameDetailsById( {'nidara_kid_profile_id': localStorage.getItem('kid_id'), 'visit_no': localStorage.getItem('visit_no'), 'game_id': this.gameId} ).subscribe(res=>{
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
