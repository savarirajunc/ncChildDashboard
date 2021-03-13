import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../service/shared.service';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { Router,Title,AppService,ComponentsService } from './../components.index';
@Component({
  selector: 'app-school-information',
  templateUrl: './school-information.component.html',
  styleUrls: ['./school-information.component.css']
})
export class SchoolInformationComponent implements OnInit {
  _response: any = { "status": false,"alert":"info", "message": "" };
  public formData: any = {}; // ngModel initalize
  public addServiceInit:boolean = false;
  addService; updateService;
  constructor(private router: Router, private titleService: Title,private authenService: AuthenService,private sharedService: SharedService, private appService: AppService, private componentsService: ComponentsService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        console.log("astronaut",astronaut);
        this.geteSchoolInfoById(); // get Children Info in kid id

      });

    sharedService.addmissService$.subscribe(addService =>{

      console.log("addService",addService);
      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService =>{
      this.updateService = updateService;
    });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.SCHOOLINFORMATION);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response=>{
      this.appService.debugConsole({"tokenCheckig":response});

      if(response.status){

        this.geteSchoolInfoById();
      }else{
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });



  }


  geteSchoolInfoById(){
    this.componentsService.getIdSchoolInfo({ "nidara_kid_profile_id":  localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({"getIdSchoolInfo":response}) // console

      if(response.status){

        if(response.data){
          // todo: BugId: 3
          this._response['status'] = false;
          this.formData = response.data;
        }

      } else {

         this.formData = {};
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = "alert alert-info";
       }

    });
  }

  schoolInfoFormSubmit(form) {
    if(this.addServiceInit){
      this.createSchoolInfo(this.formData);
    }else{
      this.formData['nidara_kid_profile_id'] =   localStorage.getItem('selectedKid');
      this.updateSchoolInfo(this.formData);
    }


  }

  createSchoolInfo(formData){
    this.appService.debugConsole({"createSchoolInfoformData":formData})
    this.componentsService.createSchoolInfo(formData).subscribe(response => {

      this.appService.debugConsole({"createSchoolInfoformSubmit":response})// New Profile Added Successfully : Response

      if(response.status){
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
  updateSchoolInfo(formData){
    this.appService.debugConsole({"updateSchoolInfoformData":formData})
    this.componentsService.updateSchoolInformation(formData).subscribe(response => {

      this.appService.debugConsole({"updateSchoolInfoformSubmit":response})// New Profile Added Successfully : Response
      if(response.status){
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
