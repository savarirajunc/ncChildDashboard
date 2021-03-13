import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.TERMSOFUSE);
  }

}
