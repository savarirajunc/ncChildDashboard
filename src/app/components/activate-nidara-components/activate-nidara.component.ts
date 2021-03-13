import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-activate-nidara',
  templateUrl: './activate-nidara.component.html',
  styleUrls: ['./activate-nidara.component.css']
})
export class ActivateNidaraComponent implements OnInit {
  public _response: any = { "status": false, "message": "" };
  public formData: any = {};
  constructor(private router: Router,private appService: AppService,private sharedService: SharedService,private titleService: Title, private authenService:AuthenService,private componentsService:ComponentsService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.BILLINGADDRESS);

        this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
          this.appService.debugConsole({ "tokenCheckig": response });

          if (response.status) {

            //  this.getBillingAddress();
          } else {
            localStorage.clear();
            this.router.navigate(['/signin']);

          }
        });
  }
  startScheduledTime()
  {
    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.formData['status'] = '1';
    this.componentsService.startScheduledTime(this.formData).subscribe(response => {

            this.appService.debugConsole(response)// New Profile Added Successfully : Response
             if(response.status){
              console.log(response);
            this._response['status'] = true;
            this._response['message'] = response.message;
            this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.PARENTS]);
             }

          });


  }
}
