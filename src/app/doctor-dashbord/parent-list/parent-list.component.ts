import { DoctorDashboardService } from './../doctor-dashboard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  parentList:any=[];
  parentListLength;

  constructor(private doctorDashboardService:DoctorDashboardService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.doctorDashboardService.getParentList({'user_id':localStorage.getItem('user_id')}).subscribe(response=>{
      console.log(response);
      if(!response.data[0].mass){
        this.parentListLength = response.data.length;
        this.parentList = response.data;
      }
      else{
        this.parentListLength = 0;
        this.parentList = response.data;
      }
    });
  }

}
