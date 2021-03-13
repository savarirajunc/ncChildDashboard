import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
import { Router } from '@angular/router';
import { AuthenService } from '../../service/authen.service';
import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { CartPageService } from '../../service/cart-page.service';
import { Subscription } from 'rxjs/Subscription';
import { ComponentsService } from '../../service/components.service';
import { AppService } from '../../app.service';
import { ParentsService } from '../../service/parents.service';
declare var $: any;

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  producData: any = [];
  productItem;
  filterItem: any = [];
  loginIn: number;
  public isNavBar:boolean = true;
  confirmed = false;
  mission;
  addService;

  announced = false;
  subscription: Subscription;
  formData: any = [];
  qyt;
  myaccountlink;
  _kidsInformations;
  childChueck;
  childepriyday;
  parentlogin;
  constructor(private componentsService: ComponentsService, private appService: AppService, private parentsService: ParentsService, private router: Router, private cartPageComponent: CartPageService, private authenService: AuthenService, private sharedService: SharedService) {

    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.getProductData();
        this.tokenChueck();
      });
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


     this.sharedService.confirmMission(this.mission);
      });


      sharedService.updateDatamissionService$.subscribe(updateDataService => {
        this.getChildrenInfo();
      });
      let token = localStorage.getItem('token');
      if(!token){
        this.loginIn = 0;
      } else {
        this.tokenChueck();
      }
  }

  ngOnInit() { window.scrollTo(0, 0);
   this.tokenChueck();
    this.getProductData();
    this.getChildrenInfo();
    this.loginIn = 0;
  }
  tokenChueck() {
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {

      if (response.status) {
        this.getUserToken();
      } else {
        this.loginIn = 0;
      }
    });
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

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    // this.subscription.unsubscribe();
    location.reload();
  }

  getProductData(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.cartPageComponent.productGetById({'session_id': this.productItem, 'user_id': localStorage.getItem('user_id')}).subscribe(response => {
      this.producData = response.data;
      if (response.status) {
        this.qyt = 1;
        this.filterItem = this.producData.length;
      } else {
        this.qyt = 0;
      }

    });
  }
  sing_Out() {
    this.loginIn = 0;
    localStorage.removeItem('email');
    localStorage.removeItem('freetrial');
    localStorage.removeItem('tokenStatus');
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiry');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_type');
    localStorage.removeItem('parent_stuts');
    localStorage.removeItem('sessionId');
    this.getProductData();
    this.router.navigate(['/Home']);
    setTimeout(function() {
      location.reload();
     }, 1000);

  }
  searchItem(form) {
   // location.reload();
    this.router.navigate(['/search/', this.formData.search]);
    setTimeout(function() {
      location.reload();
     }, 1000);
    // location.reload();
  }

  ngDoCheck() {
    if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.PARENTS) {
      this.loginIn = 3;
      this.myaccountlink = CONSTANTS.PAGEURL.PARENTSMYACCOUNT;
    } else if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.DOCTOR) {
      this.loginIn = 4;
    } else if (this.router.url === '/' + CONSTANTS.PAGEURL.DASHBOARD.DOCTOR + '/my-account') {
      this.loginIn = 5;
    } else if (this.router.url === '/' + CONSTANTS.PAGEURL.SIGNIN) {
      this.loginIn = 0;
    } else {

    }

     if(this.router.url == "/"+CONSTANTS.PAGEURL.PARENTSMYACCOUNT){
      this.isNavBar = false;
    }else{
      this.isNavBar = true;
    }
   }

   getUserToken() {
    this.authenService.getUserInfoByToken().subscribe(response => {
      if (response.status) {
      if (response.user_info.user_type === 'parent' ) {
        this.loginIn = 1;
        this.parentlogin = 1;
      } else if (response.user_info.user_type === 'doctor') {
        this.loginIn = 5;
        this.parentlogin = 0;
      } else if (response.user_info.user_type === 'admin' || response.user_info.user_type === 'super_admin') {
        this.loginIn = 6;
        this.parentlogin = 0;
      } else {
        this.loginIn = 0;
      }
    } else {
      this.loginIn = 0;
    }
    });
  }


  // select the kid to initate the get selected kids data
  selectedKidInfo(kidsInfo) {
    $('.navbar-collapse').collapse('toggle');
    this._kidsInformations.forEach(element => {
      if (element.nidara_kid_profile_id === kidsInfo.nidara_kid_profile_id) {
        localStorage.setItem('selectedKid', kidsInfo.nidara_kid_profile_id);
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
      } else {
        $('#kids' + element.nidara_kid_profile_id).css('filter', 'grayscale(100%)');

      }
    });
  }

  goChildGameSession(){
    $('.navbar-collapse').collapse('toggle');
    this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.CHILDREN]);
  }
  quickstart(){
    $('.navbar-collapse').collapse('toggle');
    this.router.navigate(['/',CONSTANTS.PAGEURL.QUICKSTARTGUIDE]);
  }

  goChildProfile() {

  }
}
