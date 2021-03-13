import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from '../doctor-dashboard.service';


@Component({
  selector: 'app-parent-invocie',
  templateUrl: './parent-invocie.component.html',
  styleUrls: ['./parent-invocie.component.css']
})
export class ParentInvocieComponent implements OnInit {
  user_id;
  getInvoice:any=[];
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private doctorDashboardService: DoctorDashboardService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.doctorDashboardService.getParentInvoice({'user_id':this.user_id}).subscribe(response=>{
      this.getInvoice = response.data;
    })
  }
  continue(){
    this.router.navigate(['/doctor/child-register/', this.user_id] );
  }

}
