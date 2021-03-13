import { Component, OnInit } from '@angular/core';
import { AppService, } from './../../app.service';
import { ChildrenService } from './../../service/children.service'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-child-home-address',
  templateUrl: './child-home-address.component.html',
  styleUrls: ['./child-home-address.component.css']
})
export class ChildHomeAddressComponent implements OnInit {

   private _response: any = { "status": false, "message": "" };

  private formData: any = {}; // ngModel formData Objects intiliaze


  constructor(private router: Router, private titleService: Title, private appService: AppService, private childrenService: ChildrenService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle('Child Home Address');



  }

}
