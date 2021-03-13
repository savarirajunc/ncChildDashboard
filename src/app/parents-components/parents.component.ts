import { Component, OnInit } from '@angular/core';

import { ParentsService } from './../service/parents.service';
import { SharedService } from './../service/shared.service';
import { CONSTANTS } from './../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../app.service';
import { AuthenService } from './../service/authen.service';
@Component({
  styleUrls: ['./parents.component.css'],
  selector: 'app-parents',
  templateUrl: './parents.component.html'
  })
export class ParentsComponent implements OnInit {

  public _response: any = { "status": false, "alert": "success", "message": "" };
  public formData: any = {};

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addParentsinfo: boolean = false;


  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private parentsService: ParentsService) {
    this.formData['father'] = {};
    this.formData['mother'] = {};
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getParentProfileInfo();

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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.PARENTSMYACCOUNT);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getParentProfileInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


  }




  getParentProfileInfo() {

    this.parentsService.getParentProfileInfo({}).subscribe(response => {
      this.appService.debugConsole({ "getParentProfileInfo": response }) // console

      if (response.status) {


        this.formData = response.data;
        this._response['status'] = false;
      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";
      }

    });

  }

  parentsaccountFormSubmit(form) {

    this.parentsService.createParentsProfile(this.formData).subscribe(response => {

      this.appService.debugConsole({ "createparentProfile": response })// New Profile Added Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";

      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }

      setTimeout(() => {
        this._response['status'] = false;
      }, 5000);
    });
  }

}
