import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nidara-child-footer',
  templateUrl: './child-footer.component.html',
  styleUrls: ['./child-footer.component.css']
})
export class ChildFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
