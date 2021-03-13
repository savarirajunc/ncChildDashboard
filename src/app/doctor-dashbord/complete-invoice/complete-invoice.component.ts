import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorDashboardService } from '../doctor-dashboard.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-complete-invoice',
  templateUrl: './complete-invoice.component.html',
  styleUrls: ['./complete-invoice.component.css']
})
export class CompleteInvoiceComponent implements OnInit {

  user_id;
  getInvoice:any=[];
  constructor(private location:Location, private activatedRoute: ActivatedRoute,private router:Router, private doctorDashboardService: DoctorDashboardService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.doctorDashboardService.getParentInvoice({'user_id':this.user_id}).subscribe(response=>{
      this.getInvoice = response.data;
    });
  }
  continue(){
    this.location.back();
  }
}
