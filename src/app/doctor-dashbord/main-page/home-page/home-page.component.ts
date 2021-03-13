import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentDate = new Date();
  constructor(private router:Router) { }

  ngOnInit() { window.scrollTo(0, 0);

  }
  clickEventHandler() {
    this.router.navigate(['/doctor']);
  }
}
