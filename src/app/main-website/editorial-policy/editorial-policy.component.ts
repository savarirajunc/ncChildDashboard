import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

@Component({
  selector: 'app-editorial-policy',
  templateUrl: './editorial-policy.component.html',
  styleUrls: ['./editorial-policy.component.css']
})
export class EditorialPolicyComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.EDITORSPOLICY);
  }

}
