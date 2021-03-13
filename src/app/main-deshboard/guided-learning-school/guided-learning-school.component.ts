import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-guided-learning-school',
  templateUrl: './guided-learning-school.component.html',
  styleUrls: ['./guided-learning-school.component.css']
})
export class GuidedLearningSchoolComponent implements OnInit {
  public formData:any={};
  parentinformation:any=[];
  parentinformationlength:any=[];
  public _response: any = { "status": false,"alert":"info", "message": "" };
  constructor(private dashboardService:DashboardService,) {
    this.dashboardService.getParentInfo().subscribe(response =>{
      this.parentinformation = response.data;
      console.log(this.parentinformation.length)
      this.parentinformationlength = this.parentinformation.length;
    });
   }

  ngOnInit() {
  }

}
