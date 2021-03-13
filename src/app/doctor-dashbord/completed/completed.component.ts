import { DoctorDashboardService } from './../doctor-dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private doctorDashboardService:DoctorDashboardService) {
    this.doctorDashboardService.parendComplete({'user_id':localStorage.getItem('doctor_user_id')}).subscribe(res=>{
      console.log(res);
    })
   }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
