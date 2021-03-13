import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-application',
  templateUrl: './core-application.component.html',
  styleUrls: ['./core-application.component.css']
})
export class CoreApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
