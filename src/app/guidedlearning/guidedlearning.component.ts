import { CartPageService } from './../service/cart-page.service';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-guidedlearning',
  templateUrl: './guidedlearning.component.html',
  styleUrls: ['./guidedlearning.component.css']
})
export class GuidedlearningComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
guidedlearn_valu;
guidedForm;
GuideData;
week:any=[{value:1},{value:2},{value:3},{value:4}];
day:any=[{value:1},{value:2},{value:3},{value:4},{value:5}];
month:any=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12}];
  constructor(private http:Http, private formBuilder: FormBuilder,private cartPageService:CartPageService,  private appService: AppService) {
    this.createForm();
   }


   createForm(): void {
     this.guidedForm = this.formBuilder.group({
       id:'',
       day:'',
       week:'',
       month:''
     });
  }
  addlearnform(form){
    this.guidedlearn_valu = this.guidedForm.getRawValue();
    this.guidedForm.controls['id'].markAsTouched();
    this.guidedForm.controls['day'].markAsTouched();
    this.guidedForm.controls['week'].markAsTouched();
    this.guidedForm.controls['month'].markAsTouched();

    if(this.guidedForm.valid){
      console.log("inside if condition ")
      this.cartPageService.setGuiddedId(this.guidedlearn_valu).subscribe( response=>{
        if(response.status){
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-success";
        }
        else{
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
      })

        // this.guidedservice.addguideService(this.guidedlearn_valu);
        // console.log(this.guidedlearn_valu)
    }else{
      console.log("report action")
    }

};





  ngOnInit() { window.scrollTo(0, 0);
  //   addlearnform(form){
  //     this.guidedlearn_valu = this.guidedForm.getRawValue();
  //     this.guidedForm.controls['id'].markAsTouched();
  //     this.guidedForm.controls['day'].markAsTouched();
  //
  //     if(this.guidedForm.valid){
  //       console.log("inside if condition ")
  //       this.guidedservice.addguideService(this.guidedlearn_valu).subscribe((res) => {
  //         console.log(res)
  //          this.GuideData = res;
  //         console.log(this.GuideData)
  //       });
  //         // this.guidedservice.addguideService(this.guidedlearn_valu);
  //         // console.log(this.guidedlearn_valu)
  //     }else{
  //       console.log("report action")
  //     }
  //
  // };


    this.guidedForm = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'day': new FormControl(null, [Validators.required]),
      'week': new FormControl(null, [Validators.required]),
      'month': new FormControl(null, [Validators.required]),
    });
  }


}
