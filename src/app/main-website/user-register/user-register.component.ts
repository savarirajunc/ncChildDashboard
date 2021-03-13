import { AuthenService } from './../../service/authen.service';
import { MainWebsiteService } from './../main-website.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  productList: any = [];
  productItem: any = [];
  filterItem: any = [];
  registerForm: FormGroup;
  checkEmail;
  code_value;
  public error;
  public message;
  public valmsg;
  public doctor_error;
  set_name;
  get_name;
  private mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';

  public  _response: any = { "status": false,"alert":"info", "message": "" };

  public  _response2: any = { "status": false,"alert":"info", "message": "" };
  grade;
  constructor(private mainWebSiteService: MainWebsiteService,private formBuilder: FormBuilder, private router:Router, private authenService:AuthenService) {
    this.createForm();
    this.mainWebSiteService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
   }

   createForm(): void{
     this.registerForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      mobile: '',
      parent_type: '',
      email: '',
      password: '',
      confirmpassword: '',
      doctor_name: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      country: '',
      postcode: '',
      offer_code: '',
      activate_free: '',
     });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'parent_type': new FormControl('-- Please Select --', [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      're_enter_email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmpassword': new FormControl(null, [Validators.required]),
      'doctor_name': new FormControl(),
      'address_1': new FormControl(null, [Validators.required]),
      'address_2': new FormControl(),
      'offer_code': new FormControl(),
      'activate_free': new FormControl(),
      'city': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'postcode': new FormControl(null, [Validators.required,Validators.minLength(6)]),
    })
    this.getProductList();
    this.getUserToken();
  }

  getProductList(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.mainWebSiteService.productGetById({'session_id': this.productItem,'user_id':localStorage.getItem('user_id')}).subscribe(response => {
        this.productList = response.data;
        this.filterItem = this.productList.length;
    });
  }

  emailChack(): void{
    this.checkEmail = this.registerForm.getRawValue();
    if(!this.checkEmail.re_enter_email){
      $('#email-val').css('display','none')
    }
    else{
      if(this.checkEmail.email !== this.checkEmail.re_enter_email){
        $('#email-val').css('display','block')
      }
      else{
        $('#email-val').css('display','none')
      }
    }
  }

  passwordChack(): void{
    this.checkEmail = this.registerForm.getRawValue();
    if(!this.checkEmail.confirmpassword){
      $('#password-val').css('display','none')
    }
    else{
      if(this.checkEmail.password !== this.checkEmail.confirmpassword){
        $('#password-val').css('display','block')
      }
      else{
        $('#password-val').css('display','none')
      }
    }
  }

  onSubmit(form): void {
    this.checkEmail = this.registerForm.getRawValue();
    this.checkEmail.status = 3;
    this.checkEmail.act_status = 1;
    this.registerForm.controls['first_name'].markAsTouched();
    this.registerForm.controls['last_name'].markAsTouched();
    this.registerForm.controls['mobile'].markAsTouched();
    this.registerForm.controls['parent_type'].markAsTouched();
    this.registerForm.controls['email'].markAsTouched();
    this.registerForm.controls['re_enter_email'].markAsTouched();
    this.registerForm.controls['password'].markAsTouched();
    this.registerForm.controls['confirmpassword'].markAsTouched();
    this.registerForm.controls['address_1'].markAsTouched();
    this.registerForm.controls['city'].markAsTouched();
    this.registerForm.controls['state'].markAsTouched();
    this.registerForm.controls['postcode'].markAsTouched();
    if(this.checkEmail.parent_type === '-- Please Select --') {
      $('#parentTypeEorr').css('display','block')
    }
    else {
      $('#parentTypeEorr').css('display','none')
    }
    if (this.registerForm.valid && this.checkEmail.parent_type !== '-- Please Select --') {
      this.mainWebSiteService.registerUser(this.checkEmail).subscribe(response=> {
        if(response.status){


          setTimeout(() => {
           this.mainWebSiteService.getLogin({'username':this.checkEmail.email,'password':this.checkEmail.password}).subscribe( response=> {
            if (response.status) {
              // add localStorage to set token
              localStorage.removeItem('tokenStatus');
              localStorage.removeItem('token');
              localStorage.removeItem('token_expiry');
              localStorage.setItem("tokenStatus", "true");
              localStorage.setItem("token", response.token);
              localStorage.setItem("token_expiry", "3600");
              this.getUserToken();
            } else {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-danger";

            }
           })
          }, 1000);
          }
          else{
            this._response['status'] = true;
            this._response['message'] = response.message;
            this._response['alert'] = "alert alert-danger";
          }
      })
    }
  }
  parentType(){
    this.checkEmail = this.registerForm.getRawValue();
    if(this.checkEmail.parent_type === '-- Please Select --'){
      $('#parentTypeEorr').css('display','block');
    }
    else{
      $('#parentTypeEorr').css('display','none');
    }
  }

  getUserToken() {

    this.authenService.getUserInfoByToken().subscribe(response => {
      localStorage.setItem('user_id',response.user_info.id);
      localStorage.setItem('user_type',response.user_info.user_type);
      let getSesstion;
      getSesstion = localStorage.getItem('sessionId');
      if (response.status) {
        this.mainWebSiteService.addProductOrder({'status':'Order New','session_id':getSesstion,'user_id':response.user_info.id,'user_type':response.user_info.user_type}).subscribe(response=>{
          if(response.status){
            localStorage.removeItem('sessionId');
            this.router.navigate(["/check-out"]);
          }
          else {
            this.router.navigate(["/Home"]);
          }
        });
      }

    })
  }

  codeCheck() {
    this.checkEmail = this.registerForm.getRawValue();
    if(!this.checkEmail.offer_code){

    }
    else{
      this.mainWebSiteService.getByCouponCode({'coupon_code':this.checkEmail.offer_code}).subscribe(response =>{
        console.log(response);
        if(response.status){
          this.set_name = this.checkEmail.doctor_name.toLowerCase();
          this.get_name = response.data[0].first_name.toLowerCase();
          if(this.get_name ===  this.set_name || response.data[0].last_name.toLowerCase() === this.set_name ){
            this.doctor_error = "";
          } else { this.doctor_error = "The doctor name you entered is invalid"; }
          this._response2['status'] = true;
          this._response2['message'] = response.message;
          this._response2['alert'] = "";
        }
        else{
          // this.code_value = 'false';
          this._response2['status'] = true;
          this.doctor_error = "The doctor name you entered is invalid";
          this._response2['message'] = response.message;
          this._response2['alert'] = "alert alert-danger";
        }
      })
    }
  }

}
