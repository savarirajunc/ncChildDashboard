import {  OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-announcementinsert',
  templateUrl: './announcementinsert.component.html',
  styleUrls: ['./announcementinsert.component.css']
})
export class AnnouncementinsertComponent implements OnInit {

  value: any;
  public  data: Object;
  registerFormpage: FormGroup;
  set_name;
  get_name;
  payLoad: any = [];

  public  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  public  _response2: any = { 'status': false, 'alert': 'info', 'message': '' };
  checkvalues: any;


 constructor(private formBuilder: FormBuilder, private router: Router, private dashboardService:DashboardService) {
    this.createform();
   }

  ngOnInit() {
    this.registerFormpage = new FormGroup(
      {

        'title': new FormControl(null, [Validators.required]),
        'start_date': new FormControl(null, [Validators.required]),
         'end_date': new FormControl(null, [Validators.required]),
         'messages': new FormControl(null, [Validators.required]),
      });
      this.value = this._response2;
     this.data = this.registerFormpage.value;


    }

  createform(): void {this.registerFormpage = this.formBuilder.group(
    {
      title: '',
      start_date: '',
      end_date: '',
      messages: '', });
  }

  onSubmit(form) {
    this.checkvalues = this.registerFormpage.getRawValue();
    this.registerFormpage.controls['title'].markAsTouched();
    this.registerFormpage.controls['start_date'].markAsTouched();
    this.registerFormpage.controls['end_date'].markAsTouched();
    this.registerFormpage.controls['messages'].markAsTouched();
    if (this.registerFormpage.valid) {
      this.dashboardService.createAnnouncement(this.checkvalues).subscribe(response => {
        if (response.status) {
          this._response['status'] = true;
          this._response['message'] = response.messages;
          this._response['alert'] = 'alert alert-success';
        } else {
          this._response['status'] = false;
          this._response['message'] = response.messages;
          this._response['alert'] = 'alert alert-danger';
        }
      });
    }
  }






}
