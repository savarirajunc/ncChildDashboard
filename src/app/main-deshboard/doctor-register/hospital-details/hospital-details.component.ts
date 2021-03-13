import { DashboardService } from '../../dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

declare var $: any;

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  productList: any = [];
  productItem: any = [];
  filterItem: any = [];
  registerForm: FormGroup;
  public ismeridian: boolean = false;
  checkEmail;
  emailvalue;
  code_value;
  public error;
  public message;
  public valmsg;
  public doctor_error;
  set_name;
  get_name;
  private mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';

  public _response: any = {'status': false, 'alert': 'info', 'message': ''};
  public _response2: any = {'status': false, 'alert': 'info', 'message': ''};
  constructor(private formBuilder: FormBuilder, private router: Router, private dashboardService:DashboardService) {
    this.createForm();
    this.bsConfig = Object.assign({}, {dateInputFormat: 'DD-MM-YYYY',containerClass: 'theme-default'});
  }


  createForm(): void {
    this.registerForm = this.formBuilder.group({
    first_name: '',
    email: '',
    hospital_name: '',
    practicing_time: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    postcode: '',
    mobile: '',
    software: '',
    practicing_time_to: '',
    });
  }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'address_1': new FormControl(null, [Validators.required]),
      'address_2': new FormControl(),
      'practicing_time': new FormControl(null, [Validators.required]),
      'practicing_time_to': new FormControl(null, [Validators.required]),
      'software': new FormControl(),
      'city': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'postcode': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'hospital_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    }
); }


emailChack(): void {
  this.checkEmail = this.registerForm.getRawValue();
  if (!this.checkEmail.re_enter_email) {
    $('#email-val').css('display', 'none');
  } else {
    if (this.checkEmail.email !== this.checkEmail.re_enter_email) {
      this.emailvalue = 0;
    } else {
      this.emailvalue = 1;
    }
  }
}


passwordChack(): void {
  this.checkEmail = this.registerForm.getRawValue();
  if (!this.checkEmail.confirmpassword) {
    $('#password-val').css('display', 'none');
  } else {
    if (this.checkEmail.password !== this.checkEmail.confirmpassword) {
      $('#password-val').css('display', 'block');
    } else {
      $('#password-val').css('display', 'none');
    }
  }
}

onSubmit(form): void {
  this.checkEmail = this.registerForm.getRawValue();
  this.checkEmail.user_id = localStorage.getItem('doctor_id');
  this.registerForm.controls['first_name'].markAsTouched();
  this.registerForm.controls['email'].markAsTouched();
  this.registerForm.controls['hospital_name'].markAsTouched();
  this.registerForm.controls['practicing_time'].markAsTouched();
  this.registerForm.controls['practicing_time_to'].markAsTouched();
  this.registerForm.controls['address_1'].markAsTouched();
  this.registerForm.controls['city'].markAsTouched();
  this.registerForm.controls['state'].markAsTouched();
  this.registerForm.controls['postcode'].markAsTouched();
  this.registerForm.controls['country'].markAsTouched();
  this.registerForm.controls['mobile'].markAsTouched();
   const fromtimehour =  this.checkEmail.practicing_time.getHours();
   const fromtimeminut =  this.checkEmail.practicing_time.getMinutes();
   const totimehour =  this.checkEmail.practicing_time_to.getHours();
   const totimeminut =  this.checkEmail.practicing_time_to.getMinutes();
   this.checkEmail.fromtime = fromtimehour + ':' + fromtimeminut;
   this.checkEmail.totime = totimehour + ':' + totimeminut;
  if (this.registerForm.valid) {
    this.dashboardService.addHospitalAddress(this.checkEmail).subscribe(response => {
      if (response.status) {
        console.log(response);
        // localStorage.setItem('doctor_id', response.user_info.id);
        this.router.navigate(['/admin-dashboard/doctor-registration/primary-clinic-details']);
        } else {
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = 'alert alert-danger';
        }
    });
  }
}

parentType() {
  this.checkEmail = this.registerForm.getRawValue();
  if (this.checkEmail.parent_type === '-- Please Select --') {
    $('#parentTypeEorr').css('display', 'block');
  } else {
    $('#parentTypeEorr').css('display', 'none');
  }
}

}
