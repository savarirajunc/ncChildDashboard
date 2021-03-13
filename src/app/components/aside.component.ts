import { Component, OnInit, Input } from '@angular/core';
import { Router } from './components.index';
import { HttpClient } from '@angular/common/http';
import { ParentsService } from '../service/parents.service';
import { ComponentsService } from '../service/components.service';
import { AppService } from '../app.service';
import { SharedService } from '../service/shared.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
    getPostl: any = [];
    img_url: any = [];
    url;
    getAnnouncement;
    childepriyday;
    _kidsInformations;
    mission;
    addService;
    confirmed = false;
    announced = false;
  subscription: Subscription;
  public _loginstatus: String;
  childImages: Object;
  childEducation;
  coreEducation;
  coreInterestDiscovery;
  parentchildEducation;
  parentcoreEducation;
  parentcoreInterestDiscovery;
  gamechildEducation;
  gamecoreEducation;
  gamecoreInterestDiscovery;
  addchildImage = false;
  currentDate;
  from_time;
  to_time; taks;
  scheduleTask;
  isAddService = true;
  childInfo:any =[];
  parentQuestion:any =[];
  parentGame:any =[];
  parentGameAnswer:any =[];
  dailyroutin_status;
  formdisbled;
parent_stuts:any =[];
  childChueck;
  month;
  week;
  errorMassesge;
    constructor( private http: HttpClient, private componentsService: ComponentsService, private appService: AppService, private sharedService:SharedService, private parentsService: ParentsService) {
      sharedService.missionConfirmed$.subscribe(
        response => {

          this.getChildExpriyDay();


        });
        sharedService.addmissService$.subscribe(addService => {

          console.log('addService', addService);
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

         //   this.getChildrenInfo();
         this.sharedService.confirmMission(this.mission);
          });


          sharedService.updateDatamissionService$.subscribe(updateDataService => {

            // this.getChildrenInfo();
          });
    }
    ngOnInit() {
      this.parentsService.getAnnouncement().subscribe(response =>{
        this.getAnnouncement = response.data;
      });
       this.http.get('https://blog.nidarachildren.com/wp-json/wordpress-popular-posts/v1/popular-posts?post_type=post,news&order_by=views&range=last30days&limit=3', {}).subscribe((res) => {
         let i = 0;
         this.getPostl = res;
         // console.log(res.length);
          console.log('getPost:', this.getPostl);
         for (i = 0; i <= 3; i++) {
          this.url = res[i].featured_media;
           this.http.get('https://blog.nidarachildren.com/wp-json/wp/v2/media/' + this.url, {}).subscribe((response) => {

             this.img_url.push(response);
             console.log('Img:', this.img_url);
           });
         }

       });

       this.componentsService.getKidsInfo().subscribe(response => {
        this.appService.debugConsole({ 'kidsInfo': response });
        if (response.status) {
          this.childInfo = response.data;
          if(this.childInfo.length === 0) {
            this.childChueck = 0;

          } else {
            this.childChueck = 1;
          }

          console.log(this.childInfo);
        }
      });
    }

  getChildExpriyDay(){
    this.parentsService.getChildExpriyDay({'id':localStorage.getItem('selectedKid')}).subscribe(response => {
      if (response.status) {
        this.childepriyday = 1;
        this.errorMassesge = response.error;
      } else {
        this.childepriyday = 2;
      }
    });
  }
}
