import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from 'app/app.constants';
import {ContactserviceService } from 'app/main-website/contactservice.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NG_VALIDATORS, Validators, ValidationErrors } from '@angular/forms';
import { MainWebsiteService } from '../../main-website.service';
declare var $: any;

@Component({
  selector: 'app-healthcare-providersupport',
  templateUrl: './healthcare-providersupport.component.html',
  styleUrls: ['./healthcare-providersupport.component.css']
})
export class HealthcareProvidersupportComponent implements OnInit {
  healthForm:FormGroup;
  isOn: true;
  health:any = [];
  country_code:any =[];
  formData:any={};
  constructor(private title:Title, private mainWebsiteService: MainWebsiteService, private user:ContactserviceService, private router:Router, private formBuilder: FormBuilder) {
  this.formCreated();
  this.mainWebsiteService.getClientIp().subscribe(response=>{
    localStorage.setItem('country_code',response.data[0].country_code)
  });
 }

 formCreated(): void{
   this.healthForm = this.formBuilder.group({
     username: '',
     firstname: '',
     lastname: '',
     phone_number: '',
     position: '',
     organization_name:'',
     inquiry: '',
     help: ''
   });
 }

  ngOnInit() { window.scrollTo(0, 0);

    this.country_code = localStorage.getItem('country_code');
    this.title.setTitle(CONSTANTS.PAGETITLE.HEALTHCAREPROVIDERS);

    this.healthForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(2),]),
      'phone_number': new FormControl(null, [Validators.required,Validators.minLength(10)]),
      'position': new FormControl('Position *', [Validators.required]),
      'inquiry': new FormControl('Enquiry Type *', [Validators.required]),
      'organization_name': new FormControl(null, [Validators.required]),
      'help': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required, Validators.email]),
  });
  }

  healthuser(form) {
    this.health = this.healthForm.getRawValue();
    this.healthForm.controls['firstname'].markAsTouched();
    this.healthForm.controls['lastname'].markAsTouched();
    this.healthForm.controls['username'].markAsTouched();
    this.healthForm.controls['phone_number'].markAsTouched();
    this.healthForm.controls['position'].markAsTouched();
    this.healthForm.controls['organization_name'].markAsTouched();
    this.healthForm.controls['inquiry'].markAsTouched();
    this.healthForm.controls['help'].markAsTouched();
    if(this.health.inquiry != 'Enquiry Type *' || this.health.position != 'Position *'){
      if(this.healthForm.valid){
        this.user.helthCare(this.healthForm.getRawValue());
        setTimeout(()=>{
          this.router.navigate(['notification-thank']);
        },1000);
      }
    }

  }

  discover(){
    $('html,body').animate({
      scrollTop: $('#firstslide').offset().top},
      'slow');
  }

  notifymeSubmit(from){
    this.mainWebsiteService.sendNotifyme(this.formData).subscribe(response=>{
      if(response.status){
        this.router.navigate(['notification-thank']);
      }
    })
  }
}
