import { Component, OnInit } from '@angular/core';
import { ComponentsService } from './../../service/components.service';
import { SharedService } from './../../service/shared.service';
import { CONSTANTS } from './../../app.constants';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AppService } from './../../app.service';
import { AuthenService } from './../../service/authen.service';
@Component({
  selector: 'app-reactive-detail',
  templateUrl: './reactive-detail.component.html',
  styleUrls: ['./reactive-detail.component.css']
})
export class ReactiveDetailComponent implements OnInit {

  public _response: any = { "status": false, "message": "" };
  public formData: any = {};

  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addChild: boolean = false;
  public addParentsinfo: boolean = false;
  constructor(private router: Router, private titleService: Title, private sharedService: SharedService,private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        // this.getParentProfileInfo();

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

    this.titleService.setTitle(CONSTANTS.PAGETITLE.REACTIVEACCOUNT);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenChecking": response });

      if (response.status) {

      //  this.getParentProfileInfo();
      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }


  reactiveAccount(){

  }
}
