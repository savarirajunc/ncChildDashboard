import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';

@Component({
  selector: 'app-tina',
  templateUrl: './tina.component.html',
  styleUrls: ['./tina.component.css']
})
export class TinaComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
      this.title.setTitle(CONSTANTS.PAGETITLE.TINA);
  }

}
