import { Component, OnInit } from '@angular/core';
import { WebAdminService } from '../web-admin.service';

@Component({
  selector: 'app-create-new-coupons',
  templateUrl: './create-new-coupons.component.html',
  styleUrls: ['./create-new-coupons.component.css']
})
export class CreateNewCouponsComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
 public formData: any = {};
 public today = new Date();
  constructor(private webAdminService: WebAdminService) { }

  ngOnInit() { window.scrollTo(0, 0);
  }

  onSubmit(form) {
    this.webAdminService.saveNcCoupon(this.formData).subscribe(response => {
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
