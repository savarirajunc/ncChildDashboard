import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-health-development',
  templateUrl: './health-development.component.html',
  styleUrls: ['./health-development.component.css']
})
export class HealthDevelopmentComponent implements OnInit {

  constructor(private dashboardService:DashboardService) {
    this.dashboardService.getHealthDevelopmentCat().subscribe(response =>{
      console.log(response);
    });
   }

  ngOnInit() {
  }

}
