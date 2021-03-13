import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nidara-general-layouts',
  templateUrl: './general-layouts.component.html',
  styleUrls: ['./general-layouts.component.css']
})
export class GeneralLayoutsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    window.scrollTo(0, 0);
  }
}
