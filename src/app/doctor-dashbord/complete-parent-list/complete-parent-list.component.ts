import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from './../doctor-dashboard.service';
@Component({
  selector: 'app-complete-parent-list',
  templateUrl: './complete-parent-list.component.html',
  styleUrls: ['./complete-parent-list.component.css']
})
export class CompleteParentListComponent implements OnInit {

  parentList:any=[];
  parentListLength;
  constructor(private doctorDashboardService:DoctorDashboardService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.doctorDashboardService.getParentList({'user_id':localStorage.getItem('user_id')}).subscribe(response=>{
      console.log(response);
      this.parentListLength = response.parent.length;
      this.parentList = response.parent;
    })
  }


}
