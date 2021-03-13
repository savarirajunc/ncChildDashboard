import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorDashboardService } from '../doctor-dashboard.service';
import { ComponentsService } from './../../service/components.service';
@Component({
  selector: 'app-parent-invocie-list',
  templateUrl: './parent-invocie-list.component.html',
  styleUrls: ['./parent-invocie-list.component.css']
})
export class ParentInvocieListComponent implements OnInit {

  user_id;
  getInvoice:any=[];
  _kidsInformations;
  constructor(private componentsService:ComponentsService, private activatedRoute: ActivatedRoute,private router:Router, private doctorDashboardService: DoctorDashboardService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response => {
      if (response.status) {
        this._kidsInformations = response.data;

      }
    });
  }
  invocie() {
    this.router.navigate(['/doctor/parent-invoice-complete/', this.user_id] );
  }

  childindo(event){
    localStorage.setItem('visit_no', '1');
    this.router.navigate(['/doctor/view-child-details/', event.nidara_kid_profile_id] );
  }

}
