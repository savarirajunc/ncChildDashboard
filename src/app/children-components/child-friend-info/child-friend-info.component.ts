import { Component, OnInit } from '@angular/core';

import { ChildrenService } from './../../service/children.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';
@Component({
  selector: 'app-child-friend-info',
  templateUrl: './child-friend-info.component.html',
  styleUrls: ['./child-friend-info.component.css']
})
export class ChildFriendInfoComponent implements OnInit {

  public _response: any = { "status": false,"alert":"info", "message": "" };

  public formData: any = {}; // ngModel formData Objects intiliaze
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;

  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private childrenService: ChildrenService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getFriendsInfo();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });

    sharedService.updateDatamissionService$.subscribe(updateDataService=>{

    })
  }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENFRINEDSINFO);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {
        this.getFriendsInfo();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });



  }

  getFriendsInfo() {
    this.childrenService.getidFriendsInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getFriendsInfo": response }) // console
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

  friendsInfoSubmit(form) {
    if(this.addServiceInit){
    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.createFriendsInfo(this.formData);
    this.addServiceInit = false;
    }else{
      this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
      this.updateFriendsInfo(this.formData);
    }

  }


  createFriendsInfo(formData) {
    this.childrenService.createFriendsInfo(formData).subscribe(response => {

      this.appService.debugConsole({ "createFriendInfo": response })// New Profile Added Successfully
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
  updateFriendsInfo(formData) {
    this.childrenService.updateFriendsInfo(formData).subscribe(response => {

      this.appService.debugConsole({ "updateFriendsInfo": response })// New Profile Added Successfully
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
