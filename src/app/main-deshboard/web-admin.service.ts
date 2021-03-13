import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../app.service';
import {POSTURL} from '../app.config';
// import { Subject }  from 'rxjs/Subject';

@Injectable()
export class WebAdminService {

  constructor(private appService: AppService, private httpClient: HttpClient) { }

  checkToken(token){
    this.appService.debugConsole({ "info": "checkToken", "inputData": token, "url": POSTURL.CHECKTOKEN });
    return this.appService.tokenchecking({},POSTURL.CHECKTOKEN,token);
  }

  getNcProduct(){
    this.appService.debugConsole({ "info": "getNcProduct", "inputData": localStorage.getItem("token"), "url": POSTURL.WEBADMIN.viewall });
     return this.appService.getAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.viewall);
   }

   deleteByid(inputdata){
    this.appService.debugConsole({ "info": "deleteByid", "inputData": inputdata, "url": POSTURL.WEBADMIN.deletebyid });
     return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.deletebyid, inputdata);
   }

   saveNcProduct(inputdata){
    this.appService.debugConsole({ "info": "saveNcProduct", "inputData": inputdata, "url": POSTURL.WEBADMIN.save });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.save, inputdata);
  }


 productGetById(inputdata){
    this.appService.debugConsole({ "info": "productGetById", "inputData": inputdata, "url": POSTURL.WEBADMIN.getbyid });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.getbyid, inputdata);
  }


  getNcCoupon(){
    this.appService.debugConsole({ "info": "getNcCoupon", "inputData": localStorage.getItem("token"), "url": POSTURL.WEBADMIN.COUPON.viewall });
     return this.appService.getAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.COUPON.viewall);
   }

   saveNcCoupon(inputdata){
    this.appService.debugConsole({ "info": "saveNcCoupon", "inputData": inputdata, "url": POSTURL.WEBADMIN.COUPON.save });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.COUPON.save, inputdata);
  }


 couponGetById(inputdata){
    this.appService.debugConsole({ "info": "couponGetById", "inputData": inputdata, "url": POSTURL.WEBADMIN.COUPON.getbyid });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.COUPON.getbyid, inputdata);
  }

  deleteByidCoupon(inputdata){
    this.appService.debugConsole({ "info": "deleteByidCoupon", "inputData": inputdata, "url": POSTURL.WEBADMIN.COUPON.deletebyid });
     return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.COUPON.deletebyid, inputdata);
   }


  getNcOrder(){
    this.appService.debugConsole({ "info": "getNcOrder", "inputData": localStorage.getItem("token"), "url": POSTURL.WEBADMIN.ORDER.viewall });
     return this.appService.getAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.ORDER.viewall);
   }

   orderGetById(inputdata){
    this.appService.debugConsole({ "info": "orderGetById", "inputData": inputdata, "url": POSTURL.WEBADMIN.ORDER.getbyid });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.ORDER.getbyid, inputdata);
  }

}
