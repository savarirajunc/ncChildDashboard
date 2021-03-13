import { Component, OnInit } from '@angular/core';

import { ComponentsService } from './../../service/components.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';


@Component({
  selector: 'app-physical-info',
  templateUrl: './physical-info.component.html',
  styleUrls: ['./physical-info.component.css']
})
export class PhysicalInfoComponent implements OnInit {
  _response: any = { "status": false,"alert":"", "message": "" };
  public formData: any = {}; // ngModel initalize

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addParentsinfo: boolean = false;
  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getPhysicalInfo();

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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.PHYSICALINFO);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getPhysicalInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });

  }


  getPhysicalInfo(){
    this.componentsService.getIdPhysicalInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({"getPhysicalInfo":response}) // console
      if(response.status){
        this.formData = response.data;
        this._response['status'] = false;
        this.addServiceInit = false;
      }else{
        this.addServiceInit = true;
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";
      }

    });
  }

  physicalInfoSubmit(form) {

   if(this.addServiceInit){
    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.createPhysicalInfo(this.formData);
   }else{
     this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.updatePhysicalInfo(this.formData);
   }
  }


  createPhysicalInfo(formData){
    this.componentsService.createPhysicalInfo(this.formData).subscribe(response => {

            this.appService.debugConsole(response)// New Profile Added Successfully : Response
            if (response.status) {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-success";

            }else{
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-danger";

            }
          });
  }
  updatePhysicalInfo(formData){
    this.componentsService.updatePhysicalInfo(this.formData).subscribe(response => {

            this.appService.debugConsole(response)// New Profile Added Successfully : Response
            if (response.status) {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-success";

            }else{
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-danger";

            }
          });
  }

}
