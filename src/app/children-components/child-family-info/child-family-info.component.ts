import { Component, OnInit } from '@angular/core';

import { ChildrenService } from './../../service/children.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';
@Component({
  selector: 'app-child-family-info',
  templateUrl: './child-family-info.component.html',
  styleUrls: ['./child-family-info.component.css']
})
export class ChildFamilyInfoComponent implements OnInit {

  public _response: any = { "status": false,"alert":"info", "message": "" };

  public formData: any = {}; // ngModel formData Objects intiliaze
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addParentsinfo: boolean = false;

  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private childrenService: ChildrenService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        this.getFamilyInfo();


      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.addServiceInit = false;
      this.updateService = updateService;
    });

  }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENFAMILYINFO);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getFamilyInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });



  }

  getFamilyInfo() {
    this.childrenService.getidFamilyInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getFamilyInfo": response }) // console
      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;
        this.addServiceInit = false;
      } else {
        this.addServiceInit = true;
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;

        this._response['alert'] = "alert alert-info";
      }

    });
  }

  familyInfoSubmit(form) {
    if(this.addServiceInit){
    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.createFamilyInfo(this.formData);
    this.addServiceInit = false;
    }else{
      this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
      this.updateFamilyInfo(this.formData);
    }
  }


  createFamilyInfo(formData) {
    this.childrenService.createFamilyInfo(this.formData).subscribe(response => {

      this.appService.debugConsole(response)// New Profile Added Successfully : Response
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }
  updateFamilyInfo(formData) {
    this.childrenService.updateFamilyInfo(this.formData).subscribe(response => {

      this.appService.debugConsole(response)// New Profile Added Successfully : Response
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        this.sharedService.updatemissService(this.updateService);
      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

}
