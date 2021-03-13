import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viedo',
  templateUrl: './viedo.component.html',
  styleUrls: ['./viedo.component.css']
})
export class ViedoComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
