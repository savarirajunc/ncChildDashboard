import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
import { AuthenService } from './../../service/authen.service';
import { Router,Title,AppService,ComponentsService } from './../components.index';
@Component({
  selector: 'app-caregiver-guide',
  templateUrl: './caregiver-guide.component.html',
  styleUrls: ['./caregiver-guide.component.css']
})
export class CaregiverGuideComponent implements OnInit {

_response: any = { "status": false, "message": "" };
  public formData: any = {}; // ngModel initalize
  public addServiceInit:boolean = false;
  addService; updateService;
  constructor(private router: Router, private titleService: Title, private sharedService: SharedService,private authenService:AuthenService,private appService: AppService, private componentsService: ComponentsService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CAREGIVERGUIDE);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response=>{
      this.appService.debugConsole({"tokenCheckig":response});

      if(response.status){


      }else{
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  // this.componentsService.getIdSchoolInfo({ "id": "45" }).subscribe(response => {
  //     this.appService.debugConsole(response) // console
  //     this.formData = response;
  //   });
  //   this.componentsService.getAllSchoolInfo().subscribe(response => {
  //     this.appService.debugConsole(response) // console
  //   });
  }

  // schoolInfoFormSubmit(form) {

  //   this.formData['nidara_kid_profile_id'] = "1";

  //   this.componentsService.createSchoolInfo(this.formData).subscribe(response => {

  //     this.appService.debugConsole(response)// New Profile Added Successfully : Response
  //     //  if(response.status == "ok"){
   //  this._response['status'] = true;
  //     this._response['message'] = response.message;
  //   // form.reset();
  //     // }
  //   });
  // }
}
