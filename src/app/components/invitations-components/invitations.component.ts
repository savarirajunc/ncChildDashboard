import { Component, OnInit } from '@angular/core';
import { Router,Title,AppService,ComponentsService } from './../components.index';
@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
  }

}
