import { Component, OnInit } from '@angular/core';
import { Router,Title,AppService,ComponentsService } from './../components.index';
@Component({
  selector: 'app-manage-subscribe',
  templateUrl: './manage-subscribe.component.html',
  styleUrls: ['./manage-subscribe.component.css']
})
export class ManageSubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
