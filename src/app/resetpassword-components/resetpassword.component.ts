import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';
import { CONSTANTS } from './../app.constants';
import { AuthenService } from './../service/authen.service';
import { ParentsService} from './../service/parents.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public _response: any = { "status": false,"alert":"success", "message": "" };
  public formData: any = {};
  public token;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private appService: AppService, private authenService: AuthenService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.RESETPASSWORD);
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];

    });


    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.PARENTS]);
      } else {
        localStorage.clear();

      }
    });


  }


  resetpasswordFormSubmit(form) {
    if (this.token != "") {

      this.authenService.resetPassword(this.formData, this.token).subscribe(response => {

        this.appService.debugConsole(response)// New reset

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

}
