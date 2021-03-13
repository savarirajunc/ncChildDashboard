import { MainWebsiteService } from './../main-website.service';
import { SharedService } from '../../service/shared.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';
import { Subscription } from 'rxjs/Subscription';
declare var $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  confirmed = false;
  mission;
  addService;
  announced = false;
  subscription: Subscription;

  constructor(private sharedService:SharedService,  private title: Title, private mainWebsiteService:MainWebsiteService) {
    // this.spinnerService.show();
    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService =>{
          this.addService = addService;

          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService =>{

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      });
  }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.HOME);
    $(window).scroll(function(){
      if($(window).scrollTop() > 2000){
        if(localStorage.getItem('sub_cookis') !== 'true'){
        $('#myModal').modal({
          backdrop: 'static'
        });
      }
      }
    });
    this.mainWebsiteService.getClientIp().subscribe(response=>{
      localStorage.setItem('country_code',response.data[0].country_code)
    });
    // this.mainWebsiteService.emailSendUsers().subscribe(response=>{
    //   console.log(response);
    // });
  }
  descoverNidara() {
    // el.scrollIntoView();
    $('html,body').animate({
      scrollTop: $('#explore').offset().top},
      'slow');
  }
  pageLoardDoen() {
    $('html,body').animate({
      scrollTop: $( '#downsection' ).offset().top},
      'slow');
  }

  ngOnDestroy(){
    //location.reload();
  }
}
