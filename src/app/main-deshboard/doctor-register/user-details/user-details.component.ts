import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators ,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';
declare var $: any;
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  productList: any = [];
  productItem: any = [];
  filterItem: any = [];
  registerForm: FormGroup;
  checkEmail;
  emailvalue;
  code_value;
  public error;
  public message;
  public valmsg;
  public doctor_error;
  set_name;
  get_name;
  mobilevalue;

  private mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';

  public  _response: any = { 'status': false, 'alert':'info', 'message': '' };

  public  _response2: any = { 'status': false, 'alert': 'info', 'message': '' };



constructor(private formBuilder: FormBuilder, private router: Router, private dashboardService:DashboardService)
 {
  this.createForm();
  }




createForm(): void {
  this.registerForm = this.formBuilder.group({
   first_name: '',
   last_name: '',
   mobile: '',
   email: '',
   password: '',
   confirmpassword: '',
   registration_number: '',
   qualification: '',
   re_mobile: '',
  });
}




  ngOnInit() {

    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      're_mobile': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      're_enter_email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmpassword': new FormControl(null, [Validators.required]),
      'registration_number': new FormControl(null, [Validators.required]),
      'qualification': new FormControl(null, [Validators.required]),
    });


  }


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

  mobileChack(){
    this.checkEmail = this.registerForm.getRawValue();
    if (!this.checkEmail.re_mobile) {
      $('#email-val').css('display', 'none');
    } else {
      if (this.checkEmail.mobile !== this.checkEmail.re_mobile) {
       this.mobilevalue = 0;
      } else {
        this.mobilevalue = 1;
      }
    }
  }


  passwordChack(): void {
    this.checkEmail = this.registerForm.getRawValue();
    if (!this.checkEmail.confirmpassword) {
      $('#password-val').css('display', 'none');
    } else {
      if (this.checkEmail.password !== this.checkEmail.confirmpassword) {
       this.error = 0;
      } else {
        this.error = 1;
      }
    }
  }


  onSubmit(form): void {
    this.checkEmail = this.registerForm.getRawValue();
    this.checkEmail.status = 1;
    this.checkEmail.act_status = 1;
    this.checkEmail.parent_type = 'doctor';
    this.registerForm.controls['first_name'].markAsTouched();
    this.registerForm.controls['last_name'].markAsTouched();
    this.registerForm.controls['mobile'].markAsTouched();
    this.registerForm.controls['re_mobile'].markAsTouched();
    this.registerForm.controls['email'].markAsTouched();
    this.registerForm.controls['re_enter_email'].markAsTouched();
    this.registerForm.controls['password'].markAsTouched();
    this.registerForm.controls['confirmpassword'].markAsTouched();
    this.registerForm.controls['registration_number'].markAsTouched();
    this.registerForm.controls['qualification'].markAsTouched();
    if (this.registerForm.valid && (this.checkEmail.password == this.checkEmail.confirmpassword) && (this.checkEmail.mobile == this.checkEmail.re_mobile) && (this.checkEmail.email == this.checkEmail.re_enter_email)) {
      this.dashboardService.registerUser(this.checkEmail).subscribe(response => {
        if (response.status) {
          localStorage.setItem('doctor_id', response.user_info.id);
          this.router.navigate(['/admin-dashboard/doctor-registration/primary-hospital-details']);
          } else {
            this._response['status'] = true;
            this._response['message'] = response.message;
            this._response['alert'] = 'alert alert-danger';
          }
      });

      console.log(form.value);
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
  movePage() {
    this.router.navigate(['/admin-dashboard/doctor-registration/primary-hospital-details']);
  }

}
