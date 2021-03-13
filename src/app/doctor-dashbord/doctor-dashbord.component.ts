import { CONSTANTS } from './../app.constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-doctor-dashbord',
  templateUrl: './doctor-dashbord.component.html',
  styleUrls: ['./doctor-dashbord.component.css']
})
export class DoctorDashbordComponent implements OnInit {
  linklength;
  constructor(private router:Router,private location:Location) {
    this.router.events.subscribe((res) => {
      this.title =  this.router.url.split('/');
      this.linklength = this.title.length;
      this.sectlink = this.router.url;
   });
   }
  myaccountlink:any=[{

  }];
  title:any = [];
  sectlink;
  ngOnInit() { window.scrollTo(0, 0);
    this.router.events.subscribe((res) => {
     this.title =  this.router.url.split('/');
     this.sectlink = this.router.url;
     this.linklength = this.title.length;
  })

  }

  ngDoCheck(){


  }
  clickEventHandler(){
    this.location.back();
  }



}
