import { Component, OnInit } from '@angular/core';
import {CONSTANTS,Router, Title, AppService,AuthenService } from './../app.index';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

 public _response: any = { "status": false, "alert":"info","message": "" };
  public formData: any = {};

  constructor(private router: Router, private titleService: Title, private appService: AppService, private authenService: AuthenService) { }


  ngOnInit() { window.scrollTo(0, 0);

     this.titleService.setTitle(CONSTANTS.PAGETITLE.CHANGEPASSWORD);

     this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {


      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });

  }


  changepasswordFormSubmit(form){

    this.authenService.changePassword(this.formData).subscribe(response=>{


       this.appService.debugConsole(response)// New Profile Added Successfully : Response


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
