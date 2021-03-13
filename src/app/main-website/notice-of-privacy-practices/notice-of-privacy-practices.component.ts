import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

@Component({
  selector: 'app-notice-of-privacy-practices',
  templateUrl: './notice-of-privacy-practices.component.html',
  styleUrls: ['./notice-of-privacy-practices.component.css']
})
export class NoticeOfPrivacyPracticesComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.NOTICEOFPRIVACYPRACTICES);
  }

}
