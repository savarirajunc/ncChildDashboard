import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { SharedService } from 'app/service/shared.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
// G:\uma\newnidara\src\app\service\shared.service.ts
@Component({
  selector: 'app-health-institute-details',
  templateUrl: './health-institute-details.component.html',
  styleUrls: ['./health-institute-details.component.css']
})
export class HealthInstituteDetailsComponent implements OnInit {
  public healthinstituteForm;
  public health_inst_val;
  public contact_valu;
  public localPersVal;
  inputData;
  public healthInstFormVal;
  // public healthinstlocalVal;


  constructor(private location: Location,private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private sharedservice:SharedService, private http:HttpClient, private router:Router) {
      this.createHealthInstForm();
      const inputData = JSON.parse(localStorage.getItem('localPersVal')); // personal detail value
      // console.log(this.localPersVal)
      // const inputData = JSON.parse(localStorage.getItem('this.contact_valu'));
      // console.log(inputData)
      console.log("contstr");
  }

  createHealthInstForm(): void {
    this.healthinstituteForm = this.formBuilder.group({
      nameInst: '',
      address: '',
      city: '',
      teleNo: '',
      fax: '',
      address_1: '',
      country: '',
      website: '',
      Instemail: ''
    });
  }
  addhealthinstform(form){
      this.health_inst_val = this.healthinstituteForm.getRawValue();

      this.healthinstituteForm.controls['nameInst'].markAsTouched();
      this.healthinstituteForm.controls['address'].markAsTouched();
      this.healthinstituteForm.controls['city'].markAsTouched();
      this.healthinstituteForm.controls['teleNo'].markAsTouched();
      this.healthinstituteForm.controls['fax'].markAsTouched();
      this.healthinstituteForm.controls['address_1'].markAsTouched();
      this.healthinstituteForm.controls['country'].markAsTouched();
      this.healthinstituteForm.controls['website'].markAsTouched();
      this.healthinstituteForm.controls['Instemail'].markAsTouched();
         if(this.healthinstituteForm.valid){
           this.health_inst_val;
           let healthinstlocalVal = this.health_inst_val;
           localStorage.setItem('healthinstlocalVal', JSON.stringify(healthinstlocalVal));

           this.router.navigate(['healthcare-providers/Health_ContextDetails/']);
           console.log(healthinstlocalVal)
             // console.log(this.health_inst_val)
         }else{
           console.log("report action")
         }

  }


  goback(){
     this.location.back();
  }

  ngOnInit() { window.scrollTo(0, 0);
    this.healthInstFormVal = JSON.parse(localStorage.getItem('healthinstlocalVal'));
    console.log(this.healthInstFormVal)
    if(this.healthInstFormVal === null){
      this.healthinstituteForm = new FormGroup({
          'nameInst': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'address': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'city': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'teleNo': new FormControl(null, [Validators.required]),
          'fax': new FormControl(null, [Validators.required]),
          'address_1': new FormControl(),
          'country': new FormControl(null, [Validators.required, Validators.minLength(2)]),
          'website': new FormControl(null, [Validators.required]),
          'Instemail': new FormControl(null, [Validators.required, Validators.email]),
      });
    }else{
      this.healthinstituteForm = new FormGroup({
          'nameInst': new FormControl(this.healthInstFormVal.nameInst, [Validators.required, Validators.minLength(2)]),
          'address': new FormControl(this.healthInstFormVal.address, [Validators.required, Validators.minLength(2)]),
          'city': new FormControl(this.healthInstFormVal.city, [Validators.required, Validators.minLength(2)]),
          'teleNo': new FormControl(this.healthInstFormVal.teleNo, [Validators.required]),
          'fax': new FormControl(this.healthInstFormVal.fax, [Validators.required]),
          'address_1': new FormControl(),
          'country': new FormControl(this.healthInstFormVal.country, [Validators.required, Validators.minLength(2)]),
          'website': new FormControl(this.healthInstFormVal.website, [Validators.required]),
          'Instemail': new FormControl(this.healthInstFormVal.Instemail, [Validators.required, Validators.email]),
      });
    }
  }

}
