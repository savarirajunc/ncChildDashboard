import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nc-breadcreumbs',
  templateUrl: './nc-breadcreumbs.component.html',
  styleUrls: ['./nc-breadcreumbs.component.css']
})
export class NcBreadcreumbsComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
