import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS, Title, AppService, AuthenService, ParentsService } from './../../../app.index';
import { DoctorDashboardService } from '../../doctor-dashboard.service';


@Component({
  selector: 'app-view-child-data',
  templateUrl: './view-child-data.component.html',
  styleUrls: ['./view-child-data.component.css']
})
export class ViewChildDataComponent implements OnInit {
  kid_id;
  parentAnswerView: any = [];
  childInfo;
  public ques: any = [];
  core_id;
  viewType;
  grade_id;
  coreEducation;
  coreHealth;
  coreInterst;
  brling;
  visit;
  visitlist;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private parentsService: ParentsService, private doctorDashboardService: DoctorDashboardService) { }

  ngOnInit() {
    this.visit = localStorage.getItem('visit_no');
    this.core_id = '2';
    this.viewType = '1';
    this.kid_id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line:max-line-length
    this.brling = '<li>YOU ARE HERE:</li class="active"><li><a routerLink=\'/doctor\'>Docter</a></li><li><a routerLink="">view-child-details/' + this.kid_id + '</a></li>';
    this.parentsService.getParentKidAnswerInfo({'nidara_kid_profile_id': this.kid_id, 'core_id': '2'}).subscribe(response => {
        console.log(response);
        this.ques = response.data;
    });
    this.doctorDashboardService.getChildGameResult({'nidara_kid_profile_id': this.kid_id, 'visit_no': localStorage.getItem('visit_no') }).subscribe(res => {
      this.coreEducation = res.data.core_education;
    this.coreHealth = res.data.core_health;
    this.coreInterst = res.data.core_interest_development;
    });

    this.parentsService.getParentKidPreInfo({'nidara_kid_profile_id': this.kid_id}).subscribe(response => {
        console.log(response);
        this.childInfo = response.data;
        this.grade_id = response.data[0].grade;
    });

  }
  coreTypeFilter(event) {
    console.log(event);
    this.parentsService.getParentKidAnswerInfo({'nidara_kid_profile_id': this.kid_id, 'core_id': event}).subscribe(response => {
      console.log(response);
      this.ques = response.data;
  });
  }

  viewPageModu(event) {
    this.viewType = event;
  }
  goBackToMainChild(){
    this.router.navigate(['/doctor/view-child-details',this.kid_id]);
  }

}
