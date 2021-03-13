import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nidara-child-layouts',
  templateUrl: './child-layouts.component.html',
  styleUrls: ['./child-layouts.component.css']
})
export class ChildLayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
