import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

declare var $: any;
@Component({
  selector: 'app-personalized-learning',
  templateUrl: './personalized-learning.component.html',
  styleUrls: ['./personalized-learning.component.css']
})
export class PersonalizedLearningComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
      this.title.setTitle(CONSTANTS.PAGETITLE.PERSONALIZEDLEARNING);
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
