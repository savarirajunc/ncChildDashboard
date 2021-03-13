import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-announceform',
  templateUrl: './announceform.component.html',
  styleUrls: ['./announceform.component.css']
})
export class AnnounceformComponent implements OnInit {
elements: any = [
  // {title: 'Announcement 1', startDate:'10/1/2019',endDate:'12/1/2019',announcement:'aaaaaa'},
  // {title:'Announcement 2', startDate:'11/1/2019',endDate:'12/1/2019',announcement:'eeeeeeee'},
  // {title: 'Announcement 3', startDate:'14/1/2019',endDate:'15/1/2019',announcement:'wwwwwwwwww'}
];

headElements = ['Title', 'Start Date', 'End Date', 'Announcement',''];
  constructor(private dashboardService:DashboardService) {
    this.dashboardService.getAnnouncement().subscribe(response=>{
      this.elements = response;
    })
  }

  ngOnInit() {

  }

}
