import { Component, OnInit } from '@angular/core';

import { WebAdminService } from '../web-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-coupons',
  templateUrl: './edit-coupons.component.html',
  styleUrls: ['./edit-coupons.component.css']
})
export class EditCouponsComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  coupon;
  public coupons: any = [];
  public today = new Date();
  constructor(private activatedRoute:ActivatedRoute, private webAdminService: WebAdminService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.coupon =  this.activatedRoute.snapshot.params.id;
    this.webAdminService.couponGetById({ 'id' : this.coupon}).subscribe(response =>{
      console.log(response);
      this.coupons = response.data;
    });
  }

  onSubmit(form) {
    this.webAdminService.saveNcCoupon(this.coupons[0]).subscribe(response => {
      console.log(response);
      if(response.status){
        //form.reset();
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-success";
        }
        else{
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
        location.reload();
    });
  }

}
