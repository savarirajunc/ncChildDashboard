import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SchoolFilterPipe } from '../school-filter.pipe';
@Component({
  selector: 'app-child-school-wise',
  templateUrl: './child-school-wise.component.html',
  styleUrls: ['./child-school-wise.component.css']
})
export class ChildSchoolWiseComponent implements OnInit {
  trem:any=[];
  schoolviewallchild:any=[];
  childreninfo:any=[];
  constructor( private dashboardService:DashboardService) {
    this.dashboardService.getSchoolInfo().subscribe(response =>{
      this.schoolviewallchild = response.data;
    });
    this.dashboardService.getChildrenInfo().subscribe(response =>{
      this.childreninfo = response.data;
    });
   }

  ngOnInit() {
  }

}
