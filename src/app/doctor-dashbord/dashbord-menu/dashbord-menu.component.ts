import { CONSTANTS } from './../../app.constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashbord-menu',
  templateUrl: './dashbord-menu.component.html',
  styleUrls: ['./dashbord-menu.component.css']
})
export class DashbordMenuComponent implements OnInit {
  pagenave;
  constructor(private router:Router) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.pagenave = 0;
  }
  ngDoCheck(){
    if(this.router.url == "/"+CONSTANTS.PAGEURL.DASHBOARD.DOCTOR+"/my-account"){
      this.pagenave = 1;
    }
    else{
      this.pagenave = 0;
    }
  }


}
