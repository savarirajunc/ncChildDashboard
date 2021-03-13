import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SharedService } from '../../../service/shared.service';
import {AppService} from '../../../app.service';
@Component({
  selector: 'app-guided-viewall',
  templateUrl: './guided-viewall.component.html',
  styleUrls: ['./guided-viewall.component.css']
})
export class GuidedViewallComponent implements OnInit {
  guidedlist:any=[];
  constructor(private dashboardService:DashboardService, private sharedService:SharedService,private appService:AppService) {
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.guidedlist = response.data
    });
  }
  ngOnInit() {

  }
}
