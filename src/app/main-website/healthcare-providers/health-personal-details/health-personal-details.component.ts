import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { HealthcareProvidersComponent } from 'app/main-website/healthcare-providers/healthcare-providers.component';

@Component({
  selector: 'app-health-personal-details',
  templateUrl: './health-personal-details.component.html',
  styleUrls: ['./health-personal-details.component.css']
})
export class HealthPersonalDetailsComponent implements OnInit {
  public healthForm;
  public contact_valu;
  public Dataval;
   contact;
   errorMsg;
  // hi;
inputData;
  // public next_btnVal = false;

  constructor(private http:Http,private formBuilder: FormBuilder, private router:Router) {
    this.createHealthForm();

}

JobTitle:any =[
  {
    value:'Your Job Title *'
  },
  {
    value:'M.D'
  },
  {
    value:'Ph.D'
  },
  {
    value:'Psy.D'
  },
  {
    value:'Other'
  }
];

  Enquiry:any = [
  {
    value:'Enquiry Type *'
  },
  {
    value:'Nidara for my hospital'
  },
  {
    value:'Nidara for my clinic'
  },
  {
    value:'Other'
  }
]
BestTiming:any = [
  {
    value:'What is the best time to call you *'
  },
  {
    value:'8AM-10AM'
  },
  {
    value:'10AM-12PM'
  },
  {
    value:'12PM-2PM'
  },
  {
    value:'2PM-4PM'
  },
  {
    value:'4PM-6PM'
  }
];

DescisionMaker:any = [
  {
    value: 'Are you a decision maker for your practice/ institution? *'
  },
  {
    value:'Yes'
  },
  {
    value:'No'
  },
  {
    value:'Other'
  }
];
NidaraClient:any = [
  {
    value: 'How soon do you expect to make Nidara-Children available for your clients? *'
  },
  {
    value:'Within 3 months'
  },
  {
    value:'Within 6 months'
  },
  {
    value:'6-12 months'
  },
  {
    value: '1 Year or longer'
  }
];

jobchange(){
    this.errorMsg = ''
  // if(this.contact_valu.job != 'your Job Title *'){
  //     this.errorMsg = 'please fill the required fields'
  // }else{
  //   console.log('else')
  //   this.errorMsg = '';
  // }
}
enquirychange(){
  this.errorMsg = ''
}
best_timechange(){
  this.errorMsg = ''
}
institutechange(){
  this.errorMsg = ''
}
clientchange(){
    this.errorMsg = ''
}

   createHealthForm(): void {

     this.healthForm = this.formBuilder.group({
       firstname:'',
       lastname: '',
       email: '',
       job: '',
       enquiry: '',
       institute: '',
       client: '',
       regNo: '',
       phone_number: '',
       best_time: '',
       issues: '',
       nidara: ''
     });
     // this.healthForm = JSON.parse(localStorage.getItem('this.contact_valu'));
      // console.log(this.healthForm = JSON.parse(localStorage.getItem('this.contact_valu')));
   }


   addhealthform(form) {
     this.contact_valu = this.healthForm.getRawValue();

     this.healthForm.controls['firstname'].markAsTouched();
     this.healthForm.controls['lastname'].markAsTouched();
     this.healthForm.controls['email'].markAsTouched();
     this.healthForm.controls['job'].markAsTouched();
     this.healthForm.controls['enquiry'].markAsTouched();
     this.healthForm.controls['institute'].markAsTouched();
     this.healthForm.controls['client'].markAsTouched();
     this.healthForm.controls['regNo'].markAsTouched();
     this.healthForm.controls['phone_number'].markAsTouched();
     this.healthForm.controls['best_time'].markAsTouched();
     this.healthForm.controls['issues'].markAsTouched();
     this.healthForm.controls['nidara'].markAsTouched();


     if(this.contact_valu.job != 'Your Job Title *' || this.contact_valu.enquiry != 'Enquiry Type *' || this.contact_valu.best_time != 'What is the best time to call you *' || this.contact_valu.institute != 'Are you a decision maker for your practice/ institution? *' ||
     this.contact_valu.client != 'How soon do you expect to make Nidara-Children available for your clients? *'){
       if(this.healthForm.valid){
         this.contact_valu;
         let localPersVal = this.contact_valu;
         localStorage.setItem('localPersVal', JSON.stringify(localPersVal));

         this.router.navigate(['healthcare-providers/Health_InstituteDetails/']);
         console.log(localPersVal)
       }else{
         console.log("report action")
       }

   }else{
     console.log("error fileds")
     this.errorMsg = 'The field is required'
   }
 }

  ngOnInit() { window.scrollTo(0, 0);
      // if(this.contact_valu.job == 'your Job Title *' || this.contact_valu.enquiry == 'Audience Type *') {
      //
      // }


    this.contact = JSON.parse(localStorage.getItem('localPersVal'));
    if(this.contact === null){
      this.healthForm = new FormGroup({
          'firstname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'lastname': new FormControl(null, [Validators.required, Validators.minLength(2),]),
          'job': new FormControl('Your Job Title *', [Validators.required]),
          'enquiry': new FormControl('Enquiry Type *', [Validators.required]),
          'institute': new FormControl('Are you a decision maker for your practice/ institution? *', [Validators.required]),
          'client': new FormControl('How soon do you expect to make Nidara-Children available for your clients? *', [Validators.required]),
          'regNo': new FormControl(null, [Validators.required]),
          'phone_number': new FormControl(null, [Validators.required]),
          'best_time': new FormControl('What is the best time to call you *', [Validators.required]),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'issues': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'nidara': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      });
    }else{
      this.healthForm = new FormGroup({
          'firstname': new FormControl(this.contact.firstname, [Validators.required, Validators.minLength(2)]),
          'lastname': new FormControl(this.contact.lastname, [Validators.required, Validators.minLength(2),]),
          'job': new FormControl(this.contact.job, [Validators.required]),
          'enquiry': new FormControl(this.contact.enquiry, [Validators.required]),
          'institute': new FormControl(this.contact.institute, [Validators.required]),
          'client': new FormControl(this.contact.client, [Validators.required]),
          'regNo': new FormControl(this.contact.regNo, [Validators.required]),
          'phone_number': new FormControl(this.contact.phone_number, [Validators.required]),
          'best_time': new FormControl(this.contact.best_time, [Validators.required]),
          'email': new FormControl(this.contact.email, [Validators.required, Validators.email]),
          'issues': new FormControl(this.contact.issues, [Validators.required, Validators.minLength(2)]),
          'nidara': new FormControl(this.contact.nidara, [Validators.required, Validators.minLength(2)]),
      });
    }
  }

}
