import { Component, OnInit } from '@angular/core';
import { AppService, } from './../../app.service';
import { ComponentsService } from './../../service/components.service'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  public _response: any = { "status": false, "message": "" };
  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze
    // sharedService Initilaze
    public addServiceInit: boolean = false;
    public addService;
    public updateService;
    public addChild: boolean = false;
    public addCareinfo: boolean = false;
    public productsInformations;
    public paymentsInformations;
    public kidsInformations;
  constructor(private router: Router, private titleService: Title,private appService: AppService, private sharedService: SharedService, private authenService: AuthenService, private componentsService: ComponentsService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

     //  this.getInterestDeveQuestion();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });

  }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.PAYMENTINFO);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

       this.getPaymentInfo();
       this.getPaymentWPInfo();
       this.getKidsInfo();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }

  getPaymentWPInfo(){
    this.componentsService.getPaymentWPInfo({"api_key":"NIDARA02@cHilD","email":localStorage.getItem('email'),"per_page":10,"page":1}).subscribe(response=>{
      this.appService.debugConsole({"wp-payment-info":response})
      this.productsInformations = response.orders;
    });
  }

  getKidsInfo(){
    this.componentsService.getKidsInfo().subscribe(response=>{
      this.appService.debugConsole({"getKidsInfo":response});
      this.kidsInformations = response.data;
    });
  }

  cancelSub(payments){
    console.log(payments);
    this.cancelSubscription({"nidara_kid_profile_id":payments.nidara_kid_profile_id,"cancel_subscription":"2"})
  }


  getPaymentInfo(){
    this.componentsService.getPaymentInfo().subscribe(response=>{
      this.appService.debugConsole({"getpayment-info":response})
      if(response.status){
        this.paymentsInformations = response.data;
      }

    });
  }


  cancelSubscription(inputObj){
    this.componentsService.getCancelSubscriptionInfo(inputObj).subscribe(response=>{
      this.appService.debugConsole({"cancelSubscription":response})
      if(response.status){
        this._response['status'] = true
        this._response['message'] =response.message;
      }else{
        this._response['status'] = true
        this._response['message'] =response.message;
      }

    });
  }

}
