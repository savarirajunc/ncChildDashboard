import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {

  public _response: any = { "status": false, "message": "" };
  public formData: any = {};

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addCareinfo: boolean = false;

  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {
    this.formData['billing_address'] = {};
    this.formData['home_address'] = {};
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        //  this.getCaregiverInfo();

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

    this.titleService.setTitle(CONSTANTS.PAGETITLE.BILLINGADDRESS);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

          this.getBillingAddress();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


    // this.componentsService.getAllBillingAddress().subscribe(response => {
    //   this.appService.debugConsole(response) // console
    // });
  }




  getBillingAddress() {
    this.componentsService.getIdBillingAddress({ "nidara_parents_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getBillingAddress": response }) // console
      if(response.status){
        this.formData = response.data;
        this._response['status'] = false;
        this.addServiceInit = false;
      }else{
        this.addServiceInit = true;
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
      }

    });
  }

  billingAddressFormSubmit(form) {



    if(this.addServiceInit){
      this.formData['nidara_parents_profile_id'] = localStorage.getItem('selectedKid');
      this.createBillingHomeAddress(this.formData);

    }else{
      this.formData['nidara_parents_profile_id'] = localStorage.getItem('selectedKid');
      this.updateBillingHomeAddress(this.formData);
    }

  }

  createBillingHomeAddress(formData){
    this.componentsService.createBillingAddress(this.formData).subscribe(response => {

            this.appService.debugConsole({"createBillingHomeAddress":response})// New Profile Added Successfully
           if(response.status){
            this._response['status'] = true;
            this._response['message'] = response.message;

             }else{
              this._response['status'] = true;
              this._response['message'] = response.message;

             }
          });
  }
  updateBillingHomeAddress(formData){
    this.componentsService.updateBillingAddress(this.formData).subscribe(response => {

            this.appService.debugConsole({"updateBillingHomeAddress":response})// New Profile Added Successfully
           if(response.status){
            this._response['status'] = true;
            this._response['message'] = response.message;

             }else{
              this._response['status'] = true;
              this._response['message'] = response.message;

             }
          });

  }

}
