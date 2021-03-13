import { Component, OnInit } from '@angular/core';
import { MainWebsiteService } from '../main-website.service';

@Component({
  selector: 'app-notificationthankyou',
  templateUrl: './notificationthankyou.component.html',
  styleUrls: ['./notificationthankyou.component.css']
})
export class NotificationthankyouComponent implements OnInit {
  country_code;
  constructor(private mainWebsiteService: MainWebsiteService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.mainWebsiteService.getClientIp().subscribe(response=>{
      localStorage.setItem('country_code',response.data[0].country_code)
    });
    this.country_code = localStorage.getItem('country_code');
  }

}
