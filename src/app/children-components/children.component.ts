import { Component, OnInit } from '@angular/core';
import { Router,Title,AppService,ChildrenService } from './children.index';
@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
    
  }

}
