import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ChildrenService } from './../../service/children.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-child-caregiver-info',
  templateUrl: './child-caregiver-info.component.html',
  styleUrls: ['./child-caregiver-info.component.css']
})
export class ChildCaregiverInfoComponent implements OnInit {
  // alert initilaze
  public _response: any = { "status": false, "alert":"info","message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addCareinfo: boolean = false;


  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private childrenService: ChildrenService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getCaregiverInfo();

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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CAREGIVERINFO);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getCaregiverInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


  }


  getCaregiverInfo() {
    this.childrenService.getidCaregiverInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getidCareiverInfo": response }) // console
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
  caregiverInfoSubmit(form) {

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');

    if (this.addCareinfo) {

      this.updateCaregiverinfo(this.formData);
    } else {

      this.createCaregiverInfo(this.formData);

    }

  }


  createCaregiverInfo(formData) {
    this.appService.debugConsole({ "createCaregiverInfo": formData })
    this.childrenService.createCaregiverInfo(formData).subscribe(response => {

      this.appService.debugConsole({"createCaregiverInfo":response})// New Profile Added Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

  updateCaregiverinfo(formData) {
    this.appService.debugConsole({ "updateCaregiverinfo": formData })
    this.childrenService.updateCaregiverInfo(formData).subscribe(response => {

      this.appService.debugConsole({"upateCaregiverInfo":response})// New Profile Added Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

}
