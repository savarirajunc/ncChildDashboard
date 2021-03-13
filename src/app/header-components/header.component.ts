import { Component, OnInit } from '@angular/core';
import {  AppService } from './../app.service';
import { AuthenService } from './../service/authen.service'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONSTANTS } from './../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'nidara-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _response: any = { "status": false, "message": "" };
  public formData: any = {};
  public myaccountlink;
  public myaccount;

  constructor(private router: Router, private titleService: Title, private appService: AppService, private authenService: AuthenService) { }


  ngOnInit() { window.scrollTo(0, 0);




  }

  ngDoCheck(){
    if(this.router.url == "/"+ CONSTANTS.PAGEURL.DASHBOARD.PARENTS){
      this.myaccountlink = CONSTANTS.PAGEURL.PARENTSMYACCOUNT;
      this.myaccount = "My Account";

    } if(this.router.url == "/"+ CONSTANTS.PAGEURL.PARENTSMYACCOUNT){
      this.myaccountlink = CONSTANTS.PAGEURL.DASHBOARD.PARENTS;
      this.myaccount = "Dashboard";
    }else{
      this.myaccountlink = CONSTANTS.PAGEURL.PARENTSMYACCOUNT;
      this.myaccount = "My Account";
    }


  }

  signOut(){


        this.authenService.getLogout(localStorage.getItem("token")).subscribe(response => {

      this.appService.debugConsole(response)// New Profile Added Successfully : Response

      this._response['status'] = true;
      this._response['message'] = response.message;


      if (response.status) {
          localStorage.clear();
          this.router.navigate(['/signin']);

      }


    });
  }

}
