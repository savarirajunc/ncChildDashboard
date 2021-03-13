import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { CONSTANTS } from './../../app.constants';
import { AuthenService } from './../../service/authen.service';
import { ParentsService} from './../../service/parents.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { ChildrenService } from './../../service/children.service'
import { ComponentsService } from './../../service/components.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-first-slide',
  templateUrl: './first-slide.component.html',
  styleUrls: ['./first-slide.component.css']
})
export class FirstSlideComponent implements OnInit {
  public _response: any = { "status": false,"alert":"success", "message": "" };
  public formData: any = {};
  public token;
  childInfo:any=[];
  _kidsInformations:any =[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private appService: AppService, private authenService: AuthenService,private childrenService: ChildrenService, private componentsService:ComponentsService, private parentsService: ParentsService) {


   }

   ngOnInit() { window.scrollTo(0, 0);
     //this.titleService.setTitle(CONSTANTS.PAGETITLE.RESETPASSWORD);
     this.activatedRoute.queryParams.subscribe(params => {
       this.token = params['token'];
       localStorage.setItem("token", this.token);

       //this.router.navigate(['/', CONSTANTS.PAGEURL.CHILDPROFILEREG]);
     });


     this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
       this.appService.debugConsole({ "tokenCheckig": response });

       if (response.status) {
         localStorage.setItem("tokenStatus", "true");
         localStorage.setItem("token_expiry", "3600");
         //localStorage.setItem("token", response.token);
       } else {
         localStorage.clear();
         window.location.href = CONSTANTS.PAGEURL_MAIN.MAINURL;
       }
     });

     this.parentsService.getUserInfoByToken().subscribe(response => {

       this.appService.debugConsole({ "getUserToken": response }) // console
       if (response.status) {
         localStorage.setItem('email',response.user_info.email);
         //this.getSchedulerTask();
       }

     });

   }
   pageload(){
     //location.reload();
   }

   activatlater(){
     window.location.href = CONSTANTS.PAGEURL_MAIN.MAINURL;
   }
}
