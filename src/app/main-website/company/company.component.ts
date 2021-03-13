import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from '../../app.constants';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MainWebsiteService } from '../main-website.service';



declare var $: any;
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyForm: FormGroup;
  companyData;
  grade;
  constructor(private title: Title, private router: Router, private formBuilder: FormBuilder, private mainWebsiteService: MainWebsiteService) {
    this.createForm();

  }

  createForm(): void {
    this.companyForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      enquiry_type: '',
      company_name: '',
      position: '',
      help: '',
    });
  }



  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.COMPANY);
    window.scrollTo(0, 0);

    // Company Form //

    this.companyForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(2), ]),
      'phone_number': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'enquiry_type': new FormControl('', [Validators.required]),
      'position': new FormControl('', [Validators.required]),
      'help': new FormControl(null, [Validators.required]),
      'company_name': new FormControl(null, [Validators.required]),
    });

  }
  discver() {
    // el.scrollIntoView();
    $('html,body').animate({
      scrollTop: $('#explore-frist').offset().top},
      'slow');
  }

  descoverNidara() {
    // el.scrollIntoView();
    $('html,body').animate({
      scrollTop: $('#explore').offset().top},
      'slow');
  }
  pageLoardDoen() {
    $('html,body').animate({
      scrollTop: $( '#downsection' ).offset().top},
      'slow');
  }

  onSubmit(form) {
    this.companyForm.controls['first_name'].markAsTouched();
    this.companyForm.controls['last_name'].markAsTouched();
    this.companyForm.controls['phone_number'].markAsTouched();
    this.companyForm.controls['email'].markAsTouched();
    this.companyForm.controls['enquiry_type'].markAsTouched();
    this.companyForm.controls['position'].markAsTouched();
    this.companyForm.controls['company_name'].markAsTouched();
    this.companyForm.controls['help'].markAsTouched();
    this.companyData = this.companyForm.getRawValue();
    if (this.companyForm.valid) {
      this.mainWebsiteService.sendCompanyEnquiry(this.companyData).subscribe(res => {
        if (res.status) {
          setTimeout(() => {
            this.router.navigate(['/notification-thank']);
          }, 1000);
        }
      });
    }
  }



}
