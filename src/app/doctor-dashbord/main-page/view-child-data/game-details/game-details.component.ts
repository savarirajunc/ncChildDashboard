// import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameSubject;
  childInfo;
  grade_id;
  game_info;
  core;
  formData: any = {};
  subject;
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
    this.gameSubject = this.activatedRoute.snapshot.params.id;
    this.doctorDashboardService.getSchoolStandardresult({'nidara_kid_profile_id': localStorage.getItem('kid_id'),'subject_id': this.gameSubject, 'visit_no': localStorage.getItem('visit_no')}).subscribe(res => {
      this.game_info = res.data;
      this.formData.framework_id = res.data[0].framework_id;
      this.formData.subject_id = this.gameSubject;
    });
    // this.doctorDashboardService.getChildGameResultBySubject({'nidara_kid_profile_id': localStorage.getItem('kid_id'),'subject_id': this.gameSubject, 'visit_no': localStorage.getItem('visit_no')}).subscribe(res => {
    //   this.game_info = res.data;
    //   this.formData.framework_id = res.data[0].framework_id;
    //   this.formData.subject_id = this.gameSubject;
    // });
    this.parentsService.getParentKidPreInfo({'nidara_kid_profile_id': localStorage.getItem('kid_id'),'visit_no': localStorage.getItem('visit_no')}).subscribe(response => {
      console.log(response);
      this.childInfo = response.data;
      this.grade_id = response.data[0].grade;
      // tslint:disable-next-line:max-line-length

  });
  }

  submitMethod2() {
    this.doctorDashboardService.getSubject().subscribe(res => {
      if(res.data.core_type == this.formData.framework_id){
        this.subject.push(res.data);
      }
    });
  }

  submitMethod() {
    this.formData.nidara_kid_profile_id = localStorage.getItem('kid_id');
    this.formData.visit_no = localStorage.getItem('visit_no');
    // this.formData.grade_id = this.grade_id;
    this.doctorDashboardService.getChildGameFilterBySubject(this.formData).subscribe(res => {
      this.game_info = res.data;
    });
  }

}
