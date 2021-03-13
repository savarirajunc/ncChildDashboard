import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-children-register',
  templateUrl: './children-register.component.html',
  styleUrls: ['./children-register.component.css']
})
export class ChildrenRegisterComponent implements OnInit {
  // alert initilaze
  public _response: any = { "status": false, "message": "" };

  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData anys intiliaze
  public selectBoardOfSchool;
  public selectRelationtoChild;
  public selectGrade;
  public selectProgramoption;
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

        //  this.getDailyRoutineByID();
        this.getEduBoardInfo();
        this.getEduGradeInfo();
        this.getEduRelationShip();

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
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENREGISTER);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getEduBoardInfo();
        this.getEduGradeInfo();
        this.getEduRelationShip();
        this.getEduPackageInfo();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }

  getEduBoardInfo(){
    this.componentsService.getEduBoardInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduBoardInfo": response }) // console
      if(response.status){
        this.selectBoardOfSchool = response.data;
      }
    });
  }

  getEduRelationShip(){
    this.componentsService.getEduRelationShipInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduRelationShip": response }) // console
      if(response.status){
        this.selectRelationtoChild = response.data;
      }
    });
  }
  getEduGradeInfo(){

    this.componentsService.getEduGardeInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduGardeInfo": response }) // console
      if(response.status){
        this.selectGrade = response.data;
      }
    });

  }

  getEduPackageInfo(){
    this.componentsService.getEduPackageInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduPackageInfo": response }) // console
      if(response.status){
        this.selectProgramoption = response.data;
      }
    });
  }
  activateLater() {
    this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.PARENTS])
  }

  childRegisterFormSubmit(form) {

    this.formData['age'] = '';
    this.formData['child_photo'] = '';
    this.formData['child_avatar'] = '';
    this.formData['date_of_birth'] = this.formData['year']+"-"+this.formData['month']+"-"+this.formData['day'];


    this.componentsService.createChildrenRegister(this.formData).subscribe(response=>{
      this.appService.debugConsole({ "createChildrenRegister": response }) // console
      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        setTimeout(()=> {
          this.router.navigate(['/',CONSTANTS.PAGEURL.DAILYSESSION])
        }, 2000);
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
      }


    });



  }

}
