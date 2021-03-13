import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

declare var $: any;
@Component({
  selector: 'app-interest-exploration',
  templateUrl: './interest-exploration.component.html',
  styleUrls: ['./interest-exploration.component.css']
})
export class InterestExplorationComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.INTERESTEXPLORATION);
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
}
