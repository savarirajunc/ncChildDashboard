import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
  childInfo_id:any=[];
  childreninfo:any=[];
  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getChildrenInfo().subscribe(response =>{
      this.childreninfo = response.data;
    });
   }

  ngOnInit() {
    this.childInfo_id = this.activatedRoute.snapshot.params.id
  }

}
