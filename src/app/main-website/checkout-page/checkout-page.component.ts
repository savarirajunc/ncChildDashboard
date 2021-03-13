import { CONSTANTS } from './../../app.constants';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { MainWebsiteService } from './../main-website.service';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from './../../service/shared.service';
declare var $: any;
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  @ViewChild('form') form: ElementRef;
  public checkoutForm: FormGroup;
  encRequest:any={

  };
  fromCouponData:any={

  }
  workingKey;
  accessCode: String;
  productList: any = [];
  productItem: any = [];
  filterItem: any = [];
  fromData:any ={};
  discountPrice:any =[];
  confirmed = false;
  mission;
  addService;
  announced = false;
  checkFormValue;
  subscription: Subscription;
  nc_value = 0;
  couponCheckValue = 0;
  grade;
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  constructor(private mainWebSiteService: MainWebsiteService, private router:Router, private formBuilder: FormBuilder, private sharedService: SharedService) {
    this.createForm();
    this.mainWebSiteService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService =>{
          this.addService = addService;

          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService =>{

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      })


      sharedService.updateDatamissionService$.subscribe(updateDataService=>{

        this.getProductList();
      });
   }
   createForm(): void {
    this.checkoutForm = this.formBuilder.group({
      nidara_tc: '',
    });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.accessCode = CONSTANTS.PAYMENT.ACCESSCODE;
    this.workingKey = CONSTANTS.PAYMENT.WORKINGCODE;
    this.getProductList();
    this.checkoutForm = new FormGroup({
      'nidara_tc': new FormControl(null, [Validators.required])
    })
  }
  ncCheck(){
    this.checkFormValue = this.checkoutForm.getRawValue();
    if(this.checkFormValue.nidara_tc === false){
      this.nc_value = 1;
    }
    else{
      this.nc_value = 0;
    }
  }
  couponCheck(){
    this.couponCheckValue = 1;
  }

  paynew(form){
    this.checkFormValue = this.checkoutForm.getRawValue();
    this.fromCouponData.user_id = localStorage.getItem('user_id');
    this.checkoutForm.controls['nidara_tc'].markAsTouched();
    if(this.couponCheckValue == 1){
      this.couponCheckValue = 2;
    }
    else if(this.checkFormValue.nidara_tc === true && this.couponCheckValue !== 2){
      this.discountPrice[0].user_id = localStorage.getItem('user_id');
      this.mainWebSiteService.saveOrderTotalAmout(this.discountPrice[0]).subscribe(response=>{
        console.log(response);
      })
      this.mainWebSiteService.addPaymentOrder({'user_id':localStorage.getItem('user_id'),'merchant_data':this.encRequest,'working_key':this.workingKey,'access_code':this.accessCode}).subscribe(response=>{
        if(response.status){
          this.router.navigate(['/payment',response.data]);

        }
      })
    }
    else if(this.checkoutForm.valid && this.checkFormValue.nidara_tc === false){
      this.nc_value = 1;
    }

  }

  getProductList(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.mainWebSiteService.productGetById({'session_id': this.productItem,'user_id':localStorage.getItem('user_id')}).subscribe(response => {
        this.productList = response.data;
        this.filterItem = this.productList.length;
       // this.sharedService.confirmMission(this.mission);
    });
    this.mainWebSiteService.getByCouponValu({'user_id':localStorage.getItem('user_id')}).subscribe(response =>{
      if(response.status){
          this.discountPrice = response.data;
          this.encRequest.order_id  = response.data[0].order_id;
          this.encRequest.currency  = "INR";
          this.encRequest.amount  = response.data[0].cart_amount;
          this.encRequest.coupon_code = response.data.coupon_code;
          this.encRequest.merchant_id = CONSTANTS.PAYMENT.MERCHENTID;
          this.encRequest.redirect_url  = CONSTANTS.PAYMENT.REDIRECT_URL;
          this.encRequest.cancel_url  = CONSTANTS.PAYMENT.CANCEL_URL;
        }
        else{

          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
    });
  }
  onSubmit(form){
    this.fromData.user_id = localStorage.getItem('user_id');
    this.mainWebSiteService.getByCouponValu(this.fromData).subscribe(response =>{
      if(response.status){
        form.reset();
        this.couponCheckValue = 0;
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
          this.discountPrice = response.data;
          this.encRequest.order_id  = response.data[0].order_id;
          this.encRequest.currency  = "INR";
          this.encRequest.amount  = response.data[0].cart_amount;
          this.encRequest.coupon_code = response.data.coupon_code;
          this.encRequest.merchant_id = CONSTANTS.PAYMENT.MERCHENTID;
          this.encRequest.redirect_url  = CONSTANTS.PAYMENT.REDIRECT_URL;
          this.encRequest.cancel_url  = CONSTANTS.PAYMENT.CANCEL_URL;
          this.fromCouponData.coupon_code = response.data[0].coupon_code;
        }
        else{
          this.couponCheckValue = 0;
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
    });
  }
}
