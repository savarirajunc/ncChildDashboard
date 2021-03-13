import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

declare var $: any;
@Component({
  selector: 'app-educators',
  templateUrl: './educators.component.html',
  styleUrls: ['./educators.component.css']
})
export class EducatorsComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.EDUCATORS);
  }

  downSection(){
    let i = 3
    for(i = 3; i <= 8; i++){
      $('html,body').animate({
        scrollTop: $('#part-'+i).offset().top},
        'slow');
    }
  }
  derctive(){
    $('html,body').animate({
      scrollTop: $('#part-2').offset().top},
      'slow');

  }

}
