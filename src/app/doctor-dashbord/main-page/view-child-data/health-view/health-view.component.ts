
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';
@Component({
  selector: 'app-health-view',
  templateUrl: './health-view.component.html',
  styleUrls: ['./health-view.component.css']
})
export class HealthViewComponent implements OnInit {
  subject_id;
  health_parameter;
  public getGameValue: any = [];
  constructor(private activatedRoute: ActivatedRoute, private doctorDashboardService: DoctorDashboardService) { }

  ngOnInit() {
    this.subject_id = this.activatedRoute.snapshot.params.sub;
    this.health_parameter = this.activatedRoute.snapshot.params.health;
    this.doctorDashboardService.getHealthGameValue({'nidara_kid_profile_id': localStorage.getItem('kid_id'),'subject_id': this.subject_id,'health_parameter':this.health_parameter, 'visit_no': localStorage.getItem('visit_no')}).subscribe( res =>{
      console.log(res);
      this.getGameValue = res.data;
    });
  }

}
