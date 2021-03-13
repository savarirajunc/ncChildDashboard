import { AuthenService } from './../../service/authen.service';
import { MainWebsiteService } from './../main-website.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import {PlatformLocation } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-freetrial-users',
  templateUrl: './freetrial-users.component.html',
  styleUrls: ['./freetrial-users.component.css']
})
export class FreetrialUsersComponent implements OnInit {

  productList: any = [];
  productItem: any = [];
  filterItem: any = [];
  registerForm: FormGroup;
  checkEmail;
  code_value;
  loginIn;
  grade;
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  constructor(private platformLocation:PlatformLocation, private mainWebSiteService: MainWebsiteService,private formBuilder: FormBuilder, private router:Router, private authenService:AuthenService) {
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
      offer_code: 'NIDARA-FREE',
      activate_free: '1',
      nidara_tc: '',
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
      'act_status': new FormControl(),
      'city': new FormControl(null, [Validators.required]),
      'nidara_tc': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'postcode': new FormControl(null, [Validators.required,Validators.minLength(6)]),
    });
    this.getProductList();
    this.tokenChueck();
  }


  tokenChueck(){
    this.mainWebSiteService.checkToken(localStorage.getItem('token')).subscribe(response => {

      if (response.status) {
        this.userChuck();
      } else {
        this.loginIn = 0;
      }
    });
  }

  getProductList(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.mainWebSiteService.productGetById({'session_id': this.productItem}).subscribe(response => {
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
  parentType(){
    this.checkEmail = this.registerForm.getRawValue();
    if(this.checkEmail.parent_type === '-- Please Select --'){
      $('#parentTypeEorr').css('display','block');
    }
    else{
      $('#parentTypeEorr').css('display','none');
    }
  }
  onSubmit(form): void {
    this.checkEmail = this.registerForm.getRawValue();
    this.checkEmail.status = 2;
    this.checkEmail.act_status = 2;
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
    this.registerForm.controls['nidara_tc'].markAsTouched();
    if(this.checkEmail.parent_type === '-- Please Select --'){
      $('#parentTypeEorr').css('display','block')
    }
    else{
      $('#parentTypeEorr').css('display','none')
    }
    let baseUrl;
    baseUrl = (this.platformLocation as any).location.origin;
    if(this.registerForm.valid && this.checkEmail.parent_type !== '-- Please Select --'){
      this.mainWebSiteService.registerUser(this.checkEmail).subscribe(response=>{
        if(response.status){

          setTimeout(() => {
           this.mainWebSiteService.getLogin({'username':this.checkEmail.email,'password':this.checkEmail.password}).subscribe( response=> {
            if (response.status) {
              this.mainWebSiteService.sendUserToken({'token':response.token, 'base_url':baseUrl, 'user_first_name':this.checkEmail.first_name, 'user_last_name':this.checkEmail.last_name, 'email':this.checkEmail.email}).subscribe(response =>{
                console.log(response);
                if(response.status){

                }
                else {
                  this._response['status'] = true;
                  this._response['message'] = response.message;
                  this._response['alert'] = "alert alert-danger";
                }
              });
              // add localStorage to set token
              localStorage.removeItem('tokenStatus');
              localStorage.removeItem('token');
              localStorage.removeItem('token_expiry');
              localStorage.setItem("tokenStatus", "true");
              localStorage.setItem("token", response.token);
              localStorage.setItem("token_expiry", "3600");

              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-success";
              this.getUserToken();

            }
           });
          }, 10);
          }
          else{
            this._response['status'] = true;
            this._response['message'] = response.message;
            this._response['alert'] = "alert alert-danger";
          }
      })
    }
  }
  userStatus(){

  }
  userChuck(){
    this.authenService.getUserInfoByToken().subscribe(response => {
      if (response.status) {
        if(response.user_info.act_status === '2'){
          this.loginIn = 1;
        }
        else {
          let baseUrl;
          baseUrl = (this.platformLocation as any).location.origin;
          localStorage.setItem('user_id',response.user_info.id);
          localStorage.setItem('user_type',response.user_info.user_type);
          this.authenService.deleteUser({'id':localStorage.getItem('user_id')}).subscribe(res=>{
            console.log(res);
          })
          this.mainWebSiteService.sendUserToken({'token':localStorage.getItem('token'), 'base_url':baseUrl, 'user_first_name':response.user_info.first_name, 'user_last_name':response.user_info.last_name, 'email':response.user_info.email}).subscribe(response =>{
            console.log(response);
            if(response.status){

            }
            else {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-danger";
            }
          });
          this.router.navigate(['freetrail-activation-tank']);
          this.loginIn = 0;
        }
      }

    });
  }
  getUserToken() {

    this.authenService.getUserInfoByToken().subscribe(response => {
      localStorage.setItem('user_id', response.user_info.id);
      localStorage.setItem('user_type', response.user_info.user_type);
      let getSesstion;
      getSesstion = localStorage.getItem('sessionId');
      if (response.status) {
        this.mainWebSiteService.addProductOrder({'status':'Free Trial','session_id':getSesstion,'user_id':response.user_info.id,'user_type':response.user_info.user_type}).subscribe(response=>{
          if(response.status){
            localStorage.removeItem('sessionId');
            this.router.navigate(["freetrail-activation-tank"]);
          }
          else {
            this.router.navigate(["/Home"]);
          }
        });
      }

    })
  }

}
