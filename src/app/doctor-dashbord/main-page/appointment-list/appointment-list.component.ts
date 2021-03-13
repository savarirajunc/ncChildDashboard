import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from '../../doctor-dashboard.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  time;
  public visitList: any = [];
  length;
  gettitle;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private doctorDashboardService:DoctorDashboardService) {

   }


  ngOnInit() { window.scrollTo(0, 0);
    this.time = this.activatedRoute.snapshot.params.id;
    let totime = this.time.split(":");
    this.gettitle = this.time.split("-").join(' ');
    this.doctorDashboardService.getDoctorVisitList({'user_id':localStorage.getItem('user_id')}).subscribe(response=>{
      let i = 0;
      for(i = 0; i < response.data.length;i++){
        let timevalue = response.data[i].time.split(":");
        if(timevalue[0] == totime[0]){
          this.visitList.push(response.data[i]);
        }
      }
      this.length = this.visitList.length;
    })
  }

  clickmove(event){
    localStorage.setItem('visit_no',event.visit_no)
    this.router.navigate(['/doctor/view-child-details',event.child_id])
  }

}
