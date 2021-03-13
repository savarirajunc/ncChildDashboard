import { SharedService } from './../service/shared.service';
import { Response } from '@angular/http';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CONSTANTS } from './../app.constants';
import { Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../app.service';
import { AuthenService } from '../service/authen.service';
import { PlatformLocation } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  public _response: any = { "status": false, "alert": "success", "message": "" };
  public formData: any = {};
  confirmed = false;
  mission;
  addService;
  announced = false;
  subscription: Subscription;

  constructor(private sharedService:SharedService, private platformLocation:PlatformLocation, private router: Router, @Inject(DOCUMENT) private document: Document,private titleService: Title, private appService: AppService, private authenService: AuthenService) {

    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService =>{
          this.addService = addService;

          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService =>{

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      });

      this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
        this.appService.debugConsole({ "tokenCheckig": response });

        if (response.status) {

          this.getUserToken();
        } else {
        localStorage.removeItem('email');
        localStorage.removeItem('freetrial');
        localStorage.removeItem('tokenStatus');
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiry');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_type');
        localStorage.removeItem('parent_stuts');
        }
      });
  }

  ngOnInit() { window.scrollTo(0, 0);

    this.titleService.setTitle(CONSTANTS.PAGETITLE.SIGNIN);


    $("#started").click(function(){
      $("#get-started").css("display", "none");
      $("#get-started2").css("display", "block");
    });
    $("#started2").click(function(){
      $("#get-started2").css("display", "none");
      $("#get-started").css("display", "block");
    });

  }

  signInFormSubmit(form) {


    this.appService.debugConsole({ "getLoginFormData": this.formData })


    this.authenService.getLogin(this.formData).subscribe(response => {

      this.appService.debugConsole({ "getLogin": response })// Login
      this.document.body.scrollTop = 0;
      let baseUrl;
      baseUrl = (this.platformLocation as any).location.origin;
      if (response.status) {
        // add localStorage to set token
        localStorage.removeItem('tokenStatus');
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiry');
        localStorage.setItem("tokenStatus", "true");
        localStorage.setItem("token", response.token);
        localStorage.setItem("token_expiry", "3600");

        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";


        this.getUserToken();
      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";


      }

      setTimeout(()=> {
        this._response['status'] = false;
      }, 4000);
    });


  }

  getUserToken() {
    this.authenService.getUserInfoByToken().subscribe(response => {

      this.appService.debugConsole({ "getUserToken": response }) // console
      let getSesstion;
      console.log((this.platformLocation as any).location);
      console.log((this.platformLocation as any).location.href);
      console.log((this.platformLocation as any).location.origin);
      getSesstion = localStorage.getItem('sessionId');
      localStorage.setItem('user_id',response.user_info.id);
      localStorage.setItem('user_type',response.user_info.user_type);
      if (response.status) {
        localStorage.setItem('email',response.user_info.email);
        if(response.user_info.user_type === "super_admin"){
          setTimeout(() => {
            this.router.navigate(['/', CONSTANTS.PAGEURL.ADMIN]);
          }, 2000);
        }
       else if(response.user_info.user_type === "admin"){
          setTimeout(() => {
            this.router.navigate(['/', CONSTANTS.PAGEURL.ADMIN]);
          }, 2000);
        }
        else if(response.user_info.user_type === "parent"){
          this.authenService.addProductOrder({'status':'Order New', 'session_id':getSesstion,'user_id':response.user_info.id,'user_type':response.user_info.user_type}).subscribe(res=>{
            if(res.status){
              this.router.navigate(["/check-out"]);
            }
            else {
              this.router.navigate(["/dashboard"]);
            }

          });
        }
        else if(response.user_info.user_type === "doctor"){
          this.authenService.addProductOrder({'status':'Order New', 'session_id':getSesstion,'user_id':response.user_info.id,'user_type':response.user_info.user_type}).subscribe(response=>{
            if(response.status){
              this.router.navigate(["/check-out"]);
            }
            else {
              this.router.navigate(["/doctor"]);
            }

          });
          //this.router.navigate(["/"]);
        }
      }

    });
  }

  checkValid(){
    console.log("thi");
  }
  ngOnDestroy(){

  }


}
