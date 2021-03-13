import { Component, OnInit } from '@angular/core';
import {Router, Title, AppService,AuthenService } from './../app.index';
import { CONSTANTS } from './../app.constants';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 public _response: any = { "status": false,"alert":"success", "message": "" };
  public formData: any = {};
 constructor(private router: Router, private titleService: Title, private appService: AppService, private authenService: AuthenService) { }

  ngOnInit() { window.scrollTo(0, 0);
     this.titleService.setTitle(CONSTANTS.PAGEURL.FORGOTPASSWORD);
     this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.router.navigate(['/', CONSTANTS.PAGEURL.DASHBOARD.PARENTS]);
      } else {
        localStorage.clear();

      }
    });
  }


  forgotpasswordFormSubmit(form){

        this.authenService.forgotPassword(this.formData).subscribe(response=>{


       this.appService.debugConsole(response);


      if(response.status){
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
        form.reset();
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }

      setTimeout(()=> {
        this._response['status'] = false;
      }, 5000);
    });
  }

}
