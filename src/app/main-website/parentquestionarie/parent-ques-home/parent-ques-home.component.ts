import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parent-ques-home',
  templateUrl: './parent-ques-home.component.html',
  styleUrls: ['./parent-ques-home.component.css']
})
export class ParentQuesHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
  }

  start(){
    this.router.navigate(['parent-question/child-info']);
  }
}
