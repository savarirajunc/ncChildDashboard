import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Title, AppService,  ComponentsService } from './components.index';
import { ParentsService } from './../service/parents.service';
import { SharedService } from './../service/shared.service';
import { CONSTANTS } from './../app.constants'

declare var $: any;
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public isNavBar:boolean = true;

  _kidsInformations;
  confirmed = false;
  mission;
  isAddService:boolean = true;
  addService;

  announced = false;
  subscription: Subscription;
  childChueck;
  childepriyday;
  get SchoolInfoLink(){return CONSTANTS}
  constructor(private router: Router, private parentsService:ParentsService, private sharedService: SharedService, private activatedRoute: ActivatedRoute, private appService: AppService, private componentsService: ComponentsService) {
    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService => {
          this.addService = addService;

          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService => {

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      });


      sharedService.updateDatamissionService$.subscribe(updateDataService => {

        this.getChildrenInfo();
      });
  }


 ngDoCheck() {
  if (this.router.url === '/' + CONSTANTS.PAGEURL.PARENTSMYACCOUNT ||
      this.router.url === '/' + CONSTANTS.PAGEURL.QUICKSTARTGUIDE ||
      this.router.url === '/' + CONSTANTS.PAGEURL.CHILDRENREGISTER ||
      this.router.url === '/' + CONSTANTS.PAGEURL.ACTIVATENIDARA ||
      this.router.url === '/' + CONSTANTS.PAGEURL.CHANGEPASSWORD ||
      this.router.url === '/' + CONSTANTS.PAGEURL.RESIDENCEDETAIL ||
      this.router.url === '/' + CONSTANTS.PAGEURL.CAREGIVERGUIDE ||
      this.router.url === '/' + CONSTANTS.PAGEURL.PAYMENTINFO ||
      this.router.url === '/' + CONSTANTS.PAGEURL.DEACTIVEACCOUNT ||
      this.router.url === '/' + CONSTANTS.PAGEURL.SUPPORT ) {
    this.isNavBar = false;
  } else {
    this.isNavBar = true;
  }

  if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.PARENTS) {
    this.isAddService = true;
  } else {
    this.isAddService = true;
  }
 }

  ngOnInit() { window.scrollTo(0, 0);
    this.childepriyday = 2;

    // if(this.router.url == "/"+CONSTANTS.PAGEURL.PARENTSMYACCOUNT){
    //   this.isNavBar = false;
    // }else{
    //   this.isNavBar = true;
    // }

    // if(this.router.url == "/"+CONSTANTS.PAGEURL.DASHBOARD.PARENTS){
    //   this.isAddService = true;
    // } else{
    //   this.isAddService = true;
    // }
    this.getChildrenInfo();
  }


  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  getChildrenInfo() {
    this.componentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ 'kidsInfo': response });
      if (response.status) {
        this._kidsInformations = response.data;

        if (this._kidsInformations.length > 0) {
          this.childChueck = 1;
        } else {
          this.childChueck = 0;
        }

          this.checkChildDefault(response.data);

      }
    });
  }

  checkChildDefault(data) {
    data.forEach(element => {
      if (element.is_default_kid === 1) {
        localStorage.setItem('selectedKid', element.nidara_kid_profile_id);
        localStorage.setItem('kidGender',element.gender);
        localStorage.setItem('grade', element.grade);
        localStorage.setItem('days', element.no_days);
        $('#kids' + element.nidara_kid_profile_id).css('filter', 'none');
        this.parentsService.getChildExpriyDay({'id': element.nidara_kid_profile_id}).subscribe(response => {
          if (response.status) {
            this.childepriyday = 1;
          } else {
            this.childepriyday = 2;
          }
        });
       //  this.sharedService.addmissService(this.mission);
        this.sharedService.confirmMission(this.mission);
      } else {
        $('#kids' + element.nidara_kid_profile_id).css('filter', 'none');
      }
    });
  }


  // add child icon click event
  addChild() {
    this.router.navigate(['/children', CONSTANTS.PAGEURL.CHILDRENPROFILE]);
	  this.sharedService.addmissService('true');

  }


  goChildProfile() {
    console.log('goChildProfile');
    if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.PARENTS) {
   //   this.router.navigate(['/children',CONSTANTS.PAGEURL.CHILDRENPROFILE]);
   setTimeout(() => {
    this.sharedService.updatemissService(this.mission);
   }, 1000);

      } else {
       // this.router.navigate(['/children',CONSTANTS.PAGEURL.CHILDRENPROFILE]);
       setTimeout(() => {
        this.sharedService.updatemissService(this.mission);
       }, 1000);
      }

  }


  // select the kid to initate the get selected kids data
  selectedKidInfo(kidsInfo, tag) {

    this._kidsInformations.forEach(element => {
      if (element.nidara_kid_profile_id === kidsInfo.nidara_kid_profile_id) {
        localStorage.setItem('selectedKid', kidsInfo.nidara_kid_profile_id);
        localStorage.setItem('kidGender',kidsInfo.gender);
        localStorage.setItem('grade', kidsInfo.grade);
        localStorage.setItem('days', kidsInfo.no_days);
        this.parentsService.getChildExpriyDay({'id': kidsInfo.nidara_kid_profile_id}).subscribe(response => {
          if (response.status) {
            this.childepriyday = 1;
          } else {
            this.childepriyday = 2;
          }
        });
        $('#kids' + element.nidara_kid_profile_id).css('filter', 'none');
      this.sharedService.confirmMission(this.mission);
		// this.sharedService.addmissService(this.mission);
      } else {
        $('#kids' + element.nidara_kid_profile_id).css('filter', 'grayscale(100%)');

      }
    });
  }

  goChildGameSession() {
    this.router.navigate(['/children-dashboard']);
  }
  quickstart() {
    this.router.navigate(['/', CONSTANTS.PAGEURL.QUICKSTARTGUIDE]);
  }

  childDeactive() {
    this.componentsService.childDeactiveUser({'nidara_kid_profile_id': localStorage.getItem('selectedKid'), 'user_id': localStorage.getItem('user_id')}).subscribe(response => {
      if (response.status) {
        this.router.navigate(['/signin']);
      } else {

      }
    });
  }

}
