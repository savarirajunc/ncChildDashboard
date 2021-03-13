import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../app.constants';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nidara-parent-layouts',
  templateUrl: './parent-layouts.component.html',
  styleUrls: ['./parent-layouts.component.css']
})
export class ParentLayoutsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() { window.scrollTo(0, 0);
  }
  parantDashboard(){
    this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.PARENTS]);
  }

}
