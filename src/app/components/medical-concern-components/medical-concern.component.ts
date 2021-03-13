import { Component, OnInit } from '@angular/core';
import { ComponentsService } from './../../service/components.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';
@Component({
  selector: 'app-medical-concern',
  templateUrl: './medical-concern.component.html',
  styleUrls: ['./medical-concern.component.css']
})
export class MedicalConcernComponent implements OnInit {
  public _response: any = { "status": false, "alert":"info","message": "" };
  public formData: any = {};

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;


  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getMedicalConcern();

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

    this.titleService.setTitle('Medical Concern');
    this.titleService.setTitle(CONSTANTS.PAGETITLE.PHYSICALINFO);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getMedicalConcern();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });



  }

  getMedicalConcern() {
    this.componentsService.getIdMedicalConcern({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getMedicalInfo": response }) // console
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


  medicalConcernFormSubmit(form) {
    if (this.addServiceInit) {
      this.formData["nidara_kid_profile_id"] = localStorage.getItem('selectedKid');
      this.createMedicalConcern(this.formData);
    } else {
      this.formData["nidara_kid_profile_id"] = localStorage.getItem('selectedKid');
      this.updateMedicalConcern(this.formData);
    }

  }

  createMedicalConcern(formData) {
    this.componentsService.createMedicalConcern(formData).subscribe(response => {

      this.appService.debugConsole(response)// New Profile Added Successfully : Response
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
  updateMedicalConcern(formData) {
    this.componentsService.updateMedicalConcern(formData).subscribe(response => {

      this.appService.debugConsole(response)// New Profile Added Successfully : Response
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
