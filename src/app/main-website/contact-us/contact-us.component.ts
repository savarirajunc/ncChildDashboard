import { MainWebsiteService } from './../main-website.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';
import {ContactserviceService } from '../contactservice.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NG_VALIDATORS, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    isOn: true;
    newUser: any = {

    };
    contactForm: FormGroup;
    contact_valu;
    inquirymain: any = [
      {
        value: 'What is your inquiry about? *'
      },
      {
        value: 'I want to know more about what is Nidara'
      },
      {
        value: 'I want to get Nidara'
      },
      {
        value: 'Other'
      }
    ];
    audiencetype: any = [
      {
        value: 'Audience Type *'
      },
      {
        value: 'Parent'
      },
      {
        value: 'Educator'
      },
      {
        value: 'Corporates'
      },
      {
        value: 'Nonprofits'
      },
      {
        value: 'Government'
      },
      {
        value: 'Healthcare Professional'
      }
  ];

  // tslint:disable-next-line:max-line-length
  constructor(private mainWebsiteService: MainWebsiteService, private title: Title, private user: ContactserviceService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
   }

  ngOnInit() { window.scrollTo(0, 0);
      this.title.setTitle(CONSTANTS.PAGETITLE.CONTACTUS);
      this.contactForm = new FormGroup({
        'firstname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        'lastname': new FormControl(null, [Validators.required, Validators.minLength(2), ]),
        'phone_number': new FormControl(null, [Validators.required, Validators.minLength(10)]),
        'audiencetype': new FormControl('Audience Type *', [Validators.required]),
        'inquiry': new FormControl('What is your inquiry about? *', [Validators.required]),
        'message': new FormControl(null, [Validators.required]),
        'username': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  createForm(): void {
    this.contactForm = this.formBuilder.group({
      username: '',
      firstname: '',
      lastname: '',
      phone_number: '',
      audiencetype: '',
      inquiry: '',
      message: ''
    });
  }

  addUser(form) {
     this.contact_valu = this.contactForm.getRawValue();
    console.log(this.contactForm.getRawValue());
    this.contactForm.controls['firstname'].markAsTouched();
    this.contactForm.controls['lastname'].markAsTouched();
    this.contactForm.controls['username'].markAsTouched();
    this.contactForm.controls['phone_number'].markAsTouched();
    this.contactForm.controls['audiencetype'].markAsTouched();
    this.contactForm.controls['inquiry'].markAsTouched();
    this.contactForm.controls['message'].markAsTouched();
    if (this.contact_valu.inquiry !== 'What is your inquiry about? *' || this.contact_valu.audiencetype !== 'Audience Type *') {
      if (this.contactForm.valid) {
       this.mainWebsiteService.sendContactUs(this.contact_valu).subscribe(res => {
          if (res.status) {
            setTimeout(() => {
              this.router.navigate(['/notification-thank']);
            }, 1000);
          }
       });
      }
  }

  }


}
