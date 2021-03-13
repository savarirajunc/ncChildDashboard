import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { CONSTANTS } from './../../app.constants';
@Component({
  selector: 'app-final-slide',
  templateUrl: './final-slide.component.html',
  styleUrls: ['./final-slide.component.css']
})
export class FinalSlideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
  }
  dashboardfunction(){
    localStorage.clear();
    window.location.href = CONSTANTS.PAGEURL_MAIN.MAINURL;

  }
  quickstart(){
    this.router.navigate(['/',CONSTANTS.PAGEURL.QUICKSTARTGUIDE]);
  }
}
