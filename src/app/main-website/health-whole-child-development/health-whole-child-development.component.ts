import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

declare var $: any;
@Component({
  selector: 'app-health-whole-child-development',
  templateUrl: './health-whole-child-development.component.html',
  styleUrls: ['./health-whole-child-development.component.css']
})
export class HealthWholeChildDevelopmentComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
      this.title.setTitle(CONSTANTS.PAGETITLE.HEALTHWHOLECHILDDEVELOPMENT);
  }
  downPage(){
    $('html,body').animate({
      scrollTop: $('#downpage').offset().top},
      'slow');
}

  descover(){
    $('html,body').animate({
      scrollTop: $('#explore').offset().top},
      'slow');
  }
}
