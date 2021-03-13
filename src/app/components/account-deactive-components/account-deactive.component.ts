import { Component, OnInit } from '@angular/core';


import { ComponentsService } from './../../service/components.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';
@Component({
  selector: 'app-account-deactive',
  templateUrl: './account-deactive.component.html',
  styleUrls: ['./account-deactive.component.css']
})
export class AccountDeactiveComponent implements OnInit {
  _response: any = { 'status': false, 'message': '' };
  public formData: any = {}; // ngModel initalize
  // sharedService Initilaze
  selectleavingid;
  public addServiceInit = false;
  public addService;
  public updateService;
  public addChild = false;
  public addParentsinfo = false;
 // public tokenCheckig:any=[];
  constructor(private router: Router, private titleService: Title, private sharedService: SharedService,
    private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;



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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.DEACTIVEACCOUNT);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {
this.getLeavingID();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }

  accountDeactiveFormSubmit(form){
    console.log(this.formData);
    this.createAccountDeactive(this.formData);
  }

  getLeavingID(){
    this.componentsService.getLeavingId().subscribe(response=>{
      this.appService.debugConsole({ "getLeavingId": response }) // console
      if(response.status){

        this.selectleavingid = response.data;
      }
    });
  }

  createAccountDeactive(formData){
    this.componentsService.createAccountDeactive(this.formData).subscribe(response => {

            this.appService.debugConsole(response)// New Profile Added Successfully : Response
            if (response.status) {
              this._response['status'] = true;
              this._response['message'] = response.message;
              localStorage.clear();
              this.router.navigate(['/signin']);
            }else{
              this._response['status'] = true;
              this._response['message'] = response.message;

            }
          });
  }

}
