import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';

@Component({
  selector: 'app-parent-qustion',
  templateUrl: './parent-qustion.component.html',
  styleUrls: ['./parent-qustion.component.css']
})
export class ParentQustionComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "","error":"" };
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
  coreEducationtwo;
  coreHealthtwo;
  coreIntersttwo;
  visitlist;
  public dataValue: any = [];
  public healthmaster: any = [];
  constructor(private activatedRoute: ActivatedRoute, private parentsService: ParentsService, private doctorDashboardService: DoctorDashboardService) {

   }

   getSubject() {
    this.doctorDashboardService.getSubjectdata().subscribe((samplevar)=>{
     this.dataValue = samplevar.data;
    });
  }

  gethealthmaster(){
    this.doctorDashboardService.gethealthMaster().subscribe(response =>{
      this.healthmaster = response.data;
    })
  }

  ngOnInit() {
    this.getSubject();
    this.gethealthmaster();
    this.core_id = '2';
    this.viewType = '1';
    this.kid_id = this.activatedRoute.snapshot.params.id;
    localStorage.setItem('kid_id', this.kid_id );
    this.parentsService.getParentKidAnswerInfo({'nidara_kid_profile_id': this.kid_id, 'core_id': '2'}).subscribe(response => {
        console.log(response);
        this.ques = response.data;
    });
    this.doctorDashboardService.getSchoolresult({'nidara_kid_profile_id': this.kid_id, 'visit_no': localStorage.getItem('visit_no')}).subscribe(res => {
      if(res.status){
        this.coreEducation = res.data.core_education;
        console.log('data', this.coreEducation);
        this.coreHealth = res.data.core_health;
        this.coreInterst = res.data.core_interest_development;
      } else {
        if(!res.message){
          this._response['status'] = true;
          this._response['error'] = res.error;
        } else {
          this._response['status'] = true;
       this._response['message'] = res.message;
       this._response['error'] = res.error;
        this._response['alert'] = 'alert alert-danger';
        }
      }
    })
    this.doctorDashboardService.getChildGameResult({'nidara_kid_profile_id': this.kid_id, 'visit_no': localStorage.getItem('visit_no')}).subscribe(res => {

    });

    this.doctorDashboardService.getChildGameResultTwo({'nidara_kid_profile_id': this.kid_id, 'visit_no': localStorage.getItem('visit_no')}).subscribe(res => {
      if(res.status){
        this.coreEducationtwo = res.data.core_education;
        console.log('data', this.coreEducation);
        this.coreHealthtwo = res.data.core_health;
        this.coreIntersttwo = res.data.core_interest_development;
      } else {
        if(!res.message){
          this._response['status'] = true;
          this._response['error'] = res.error;
        } else {
          this._response['status'] = true;
       this._response['message'] = res.message;
       this._response['error'] = res.error;
        this._response['alert'] = 'alert alert-danger';
        }
      }
    });

    this.parentsService.getParentKidPreInfo({'nidara_kid_profile_id': this.kid_id}).subscribe(response => {
        console.log(response);
        this.childInfo = response.data;
        this.grade_id = response.data[0].grade;
    });
    this.doctorDashboardService.getDoctorVisitListByChildid({'nidara_kid_profile_id': this.kid_id}).subscribe(res=>{
      this.visitlist = res.data;
    })

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

  clickEventHandler(event){
    window.scrollTo(0, 0);
    localStorage.setItem('visit_no',event);
    this.doctorDashboardService.getChildGameResult({'nidara_kid_profile_id': this.kid_id, 'visit_no': event}).subscribe(res => {
      if(res.status){
        this.coreEducation = res.data.core_education;
        this.coreHealth = res.data.core_health;
        this.coreInterst = res.data.core_interest_development;
      } else {
        this._response['status'] = true;
       this._response['message'] = res.message;
       this._response['error'] = res.error;
        this._response['alert'] = "alert alert-danger";
      }
    });
    location.reload();
  }

}
