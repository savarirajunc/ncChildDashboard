import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {POSTURL} from '../../app.config';
@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.css']
})
export class ParentDetailsComponent implements OnInit {

  constructor(private apiService: AppService) { }

  ngOnInit() {
    this.apiService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getid, {});
  }

}
