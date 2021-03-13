import { Router, NavigationEnd } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

// const internalIp = require('internal-ip');

// (async () => {
//     console.log(await internalIp.v6());
//     //=> 'fe80::1'

//     console.log(await internalIp.v4());
//     //=> '10.0.0.79'
// })();

// console.log(internalIp.v6.sync());
// //=> 'fe80::1'

// console.log(internalIp.v4.sync());

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  //spinnerService;
  public constructor(private titleService: Title,private router:Router) {
     window.onbeforeunload = function(e) {
      return 'Dialog text here.';
    };
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
       }
      });

    //this.spinnerService.show();


  }
  ngOnInit(){

  }
    public setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }
    template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;

}
