import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';
import {ContactserviceService } from '../contactservice.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NG_VALIDATORS, Validators, ValidationErrors } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-healthcare-providers',
  templateUrl: './healthcare-providers.component.html',
  styleUrls: ['./healthcare-providers.component.css']
})
export class HealthcareProvidersComponent implements OnInit {
  healthForm:FormGroup;
  isOn: true;
  health:any = [];

  constructor(private title:Title, private user:ContactserviceService, private router:Router, private formBuilder: FormBuilder) {
    this.formCreated();
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

}
