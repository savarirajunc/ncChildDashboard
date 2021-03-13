import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from './../app.constants';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.HOME);
    //this.spinnerService.show();
  }
  descoverNidara(el){
    el.scrollIntoView();
  }
}
