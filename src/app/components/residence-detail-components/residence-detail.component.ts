import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent implements OnInit {
  // alert initilaze
  public _response: any = { "status": false,"alert":"info" ,"message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze
  public countryDetails;
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addCareinfo: boolean = false;

  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        this.getResidenceDetail();


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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.RESIDENCEDETAIL);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getCountryInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }


  residenceFormSubmit(form){
    this.appService.debugConsole({ "createCountryInfoData": this.formData }) // console
    this.componentsService.createCountryInfo(this.formData).subscribe(response=>{
      this.appService.debugConsole({ "createCountryInfo": response }) // console
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";

      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";

      }

      setTimeout(()=> {
        this._response['status'] = false;
      }, 3000);
    });
  }


  getResidenceDetail(){
    this.componentsService.getResidenceDetail({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getResidenceDetail": response }) // console
      if (response.status) {
        this._response['status'] = false;
        this.addCareinfo = true;
        this.formData = response.data;
      } else {
        this.addCareinfo = false;
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";

      }

  });

  }


  getCountryInfo(){
    this.componentsService.getCountryInfo().subscribe(response=>{
      this.appService.debugConsole({ "getCountryInfo": response }) // console
      if(response.status){
        this.countryDetails = response.data;
        this.getResidenceDetail();
      }
    });
  }

}
