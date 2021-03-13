import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UploadFileService } from 'app/upload-file.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { HealthcareFinalInfoService } from  'app/main-website/healthcare-final-info.service';
import { MainWebsiteService } from '../../main-website.service';

@Component({
  selector: 'app-health-context-details',
  templateUrl: './health-context-details.component.html',
  styleUrls: ['./health-context-details.component.css']
})
export class HealthContextDetailsComponent implements OnInit {
  public health_context_Form;
  public health_Context_valu;
  selectedFiles: FileList;
  Url;
  public healthvalueformlocal;
  public inputData;
  public obj;
  errorMsg;

  constructor(private mainWebsiteComponent: MainWebsiteService, private healthfinal: HealthcareFinalInfoService, private http: Http, private formBuilder: FormBuilder, private uploadFileService: UploadFileService, private location: Location, private router: Router) {
    this.createHealth_contexForm();
       this.healthvalueformlocal = JSON.parse(localStorage.getItem('healthinstlocalVal')); // instutute value
       this.inputData = JSON.parse(localStorage.getItem('localPersVal')); // personal detail value
   }

   createHealth_contexForm(): void {
     this.health_context_Form = this.formBuilder.group({
       services: '',
       practice: '',
       imageUpload: '',
       file: ''
     });
   }
   practices: any = [
     {
       value: 'Number of years in private practice *'
     },
     {
       value: '1 - 3'
     },
     {
       value: '3 - 5'
     },
     {
       value: '5 - 10'
     },
     {
       value: 'Above 10'
     }
   ];

   practicechange() {
       this.errorMsg = '';
   }

   addhealthcontextform(form) {
     // console.log(form)
      // this.health_context_Form.imageUpload = this.Url;
      this.Url = localStorage.getItem('upload-img');
     this.health_Context_valu = this.health_context_Form.getRawValue();
     this.health_Context_valu.imageUpload = this.Url;

     this.health_context_Form.controls['services'].markAsTouched();
     this.health_context_Form.controls['practice'].markAsTouched();

       if (this.health_Context_valu.practice !== 'Number of years in private practice *') {
       console.log('this.health_context_Form.practice');
          if (this.health_context_Form.valid) {
            const obj = Object.assign({},  this.inputData,  this.healthvalueformlocal, this.health_Context_valu);  // concatenate objects on 3form values
              this.mainWebsiteComponent.sendDoctonInfo(obj).subscribe(res => {
                if(res.status){
                  this.router.navigate(['notification-thank']);
                }
              });
           // this.healthfinal.getfinalEmail(obj);
            // go to subscriber thank page.
            localStorage.removeItem('healthinstlocalVal');
            localStorage.removeItem('localPersVal');
            console.log(obj);
          } else {
            console.log('error');
            console.log('report action');
          }
      } else {
      this.errorMsg = 'The field is required';
      }
   }

   // upload() {
   //   console.log(this.selectedFiles)
   //   const file = this.selectedFiles.item(0);
   //   this.uploadFileService.uploadCVfile(file);
   //   this.Url = localStorage.getItem('upload-img');
   // }

   selectFile(event) {
     console.log(event.target);
     this.selectedFiles = event.target.files;
     const file = this.selectedFiles.item(0);
     this.uploadFileService.uploadCVfile(file);
     this.Url = localStorage.getItem('upload-img');
   }


   gobackVal() {
     this.location.back();
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.health_context_Form = new FormGroup({
        'services': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        'practice': new FormControl('Number of years in private practice *', [Validators.required]),
        'file': new FormControl(null, [Validators.required]),

    });

  }

}
