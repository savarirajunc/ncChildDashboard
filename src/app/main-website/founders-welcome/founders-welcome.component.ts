import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

@Component({
  selector: 'app-founders-welcome',
  templateUrl: './founders-welcome.component.html',
  styleUrls: ['./founders-welcome.component.css']
})
export class FoundersWelcomeComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.FOUNDARSWELCOME);
  }

}
