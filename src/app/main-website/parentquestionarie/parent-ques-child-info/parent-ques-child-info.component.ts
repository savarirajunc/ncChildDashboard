import { MainWebsiteService } from './../../main-website.service';
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ParentquestService } from '../../parentquest.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router'; //import router module for subscribeThank page
declare var jquery:any;
declare var $ :any;
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import * as $ from 'jquery/dist/jquery.min.js';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-parent-ques-child-info',
  templateUrl: './parent-ques-child-info.component.html',
  styleUrls: ['./parent-ques-child-info.component.css']
})
export class ParentQuesChildInfoComponent implements OnInit {

  @ViewChild('dp')dp;

  public bsConfig: Partial<BsDatepickerConfig>;
  public goNextpage = false;
  public goNextStart = false;
  public goQuestionVal = false;
  public checkboxValue;
  public redDiv = false;
  public greenDiv = false;
  public formMessage= false;
  public submitted = false;
  public button_2 = false;
  public button_3 = false;
  public button_4 = false;
  public button_6 = false;
  public button_5 = false;
  msg:any = [];
    public years ;
    public month ;
    public date ;
    public error;
    public message;
    public valmsg;
    public gosecndQuest = false;
    questForm;
    contact_valu;
    errorMsg;
    emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    nameControl = new FormControl('', [
      Validators.required
  ]);

      private mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';


  constructor(private mainWebsiteService:MainWebsiteService, private http:HttpClient,private parentQuestservice: ParentquestService, private el: ElementRef,private formBuilder: FormBuilder, private router:Router) {
    this.bsConfig = Object.assign({}, {dateInputFormat: 'DD-MM-YYYY',containerClass: 'theme-default'}); // color theme for DatePciker
    this.createForm();

   }


   createForm(): void {
     this.questForm = this.formBuilder.group({
       firstname: '',
       lastname: '',
       email: '',
       CaregiverType: '',
       childfirstname: '',
       childlastname: '',
       gender: '',
       Grade: '',
       Height: '',
       Weight: '',
       DoctorName: '',
       checkboxValue:'',
       dob_date:'',
       dob_month:'',
       dob_years:''
     });
   }

   caregiverType:any =[
     {
       value:'CaregiverType *'
     },
     {
       value:'Father'
     },
     {
       value:'Mother'
     },
     {
       value:'GrandFather'
     },
     {
       value:'GrandMother'
     },
     {
       value:'Others'
     }
 ];

// checkbox value
    newFunction(event){
      this.contact_valu = this.questForm.getRawValue();
      if(event.target.checked == true){
        this.error = '';
        this.valmsg = '';
        this.message = '';
        const params = new HttpParams()
        .set('MERGE1', this.contact_valu.firstname)
        .set('MERGE0', this.contact_valu.email)
          .set('u', 'e2c0982dd8b7d1a16f74d886d') // hidden input name
          .set('id', 'fae67dd82a');
        const mailChimpUrl = this.mailChimpEndpoint + params.toString();
        this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
            if (response.result && response.result !== 'error') {
              this.submitted = true;
              // this.router.navigate(['/thank']);  //go to subscriber thank page.
            } else {
              // this.error = 'This email has already been registered.';
            }
          }, error => {
            // this.error = 'Sorry, an error occurred.';

          });
      }
      else {
        this.msg = '';
        this.error = '';
        this.valmsg = '';
        this.goNextStart = false;
        this.message="please subscribe the Newsletter";
        this.formMessage = true;
      }
    }



    //child information final value
    addchild(form){
    this.contact_valu = this.questForm.getRawValue();
    this.questForm.controls['firstname'].markAsTouched();
    this.questForm.controls['lastname'].markAsTouched();
    this.questForm.controls['email'].markAsTouched();
    this.questForm.controls['CaregiverType'].markAsTouched();
    this.questForm.controls['childfirstname'].markAsTouched();
    this.questForm.controls['childlastname'].markAsTouched();
    this.questForm.controls['gender'].markAsTouched();
    this.questForm.controls['Grade'].markAsTouched();
    this.questForm.controls['Height'].markAsTouched();
    this.questForm.controls['Weight'].markAsTouched();
    this.questForm.controls['DoctorName'].markAsTouched();
    this.questForm.controls['checkboxValue'].markAsTouched();
    this.questForm.controls['dob_date'].markAsTouched();
    this.questForm.controls['dob_month'].markAsTouched();
    this.questForm.controls['dob_years'].markAsTouched();
      // this.parentQuestservice.addNewData(this.questForm);
    this.contact_valu.dob = '' + this.contact_valu.dob_years + '-' + this.contact_valu.dob_month + '-' + this.contact_valu.dob_date + '';
        console.log(this.contact_valu);
        if(this.questForm.valid){
          // console.log("inside if condition ")
          //   this.parentQuestservice.addNewData(this.contact_valu);
          this.mainWebsiteService.sendChildinfo(this.contact_valu).subscribe(res=>{
            if(res.status){
              localStorage.setItem('senderEmail',this.contact_valu.email);
              // localStorage.setItem('parent_email',this.contact_valu.email);
             setTimeout(()=>{
               this.router.navigate(['parent-question/parent-qus/',this.contact_valu.Grade]);
             },1000);
            }
            else{

            }
          })
        }else{
          console.log("report action")
        }

        if(this.questForm.dob_date == null && this.questForm.dob_month == null && this.questForm.dob_years == null ){
          this.errorMsg = "";
        }

        if(this.questForm.checkboxValue == null){
          this.valmsg = "";
          this.message="";
        }
        // console.log(this.questForm)
        if (this.questForm.valid) {
          this.goNextStart = true;
          this.goNextpage = false;

        }else{
          this.goNextStart = false;
          this.goNextpage = true;
            this.msg = 'please fill the required fields';
        }
    }


  ngOnInit() { window.scrollTo(0, 0);

    this.questForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(2),]),
      'CaregiverType': new FormControl(null, [Validators.required]),
      'gender': new FormControl(null, [Validators.required]),
      'Grade': new FormControl(null, [Validators.required]),
      'dob_date': new FormControl('dob_date *', [Validators.required]),
      'dob_month': new FormControl('dob_month *', [Validators.required]),
      'dob_years': new FormControl('dob_years *', [Validators.required]),
      'checkboxValue': new FormControl('checkboxValue', [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'childfirstname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'childlastname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'Height': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'Weight': new FormControl(null, [Validators.required]),
      'DoctorName': new FormControl(null, [Validators.required, Validators.minLength(2)])
  });

    this.month = [{id:'1',name:'Jan'},{id:'2',name:'Feb'},{id:'3',name:'Mar'},{id:'4',name:'Apr'},{id:'5',name:'May'},{id:'6',name:'Jun'},
    {id:'7',name:'Jul'},{id:'8',name:'Aug'},{id:'9',name:'Sep'},{id:'10',name:'Oct'},{id:'11',name:'Nov'},{id:'12',name:'Dec'}]
    this.date =[{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'},{id:'11'},
    {id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},{id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'},
    {id:'24'},{id:'25'},{id:'26'},{id:'27'},{id:'28'},{id:'29'},{id:'30'},{id:'31'}]
    this.years =[{id:'2010'},{id:'2011'},{id:'2012'},{id:'2013'},{id:'2014'},{id:'2015'},{id:'2016'},{id:'2017'},{id:'2018'}]
  }

//Date validation
  datefun(){
      this.contact_valu = this.questForm.getRawValue();
      this.errorMsg = '';
    if(this.contact_valu.dob_date >='30' && this.contact_valu.dob_month == '2' && this.contact_valu.dob_years % 4 == 0){
      this.errorMsg = "Plese Enter valid Date"
    }else{
      // this.errorMsg = '';
    }
    if(this.contact_valu.dob_years % 4 != 0 && this.contact_valu.dob_month == '2' && this.contact_valu.dob_date >='29'){
      this.errorMsg = "Plese Enter valid Date"
    }else{
      // this.errorMsg = '';
    }

    if(this.contact_valu.dob_month == '4' || this.contact_valu.dob_month == '6' || this.contact_valu.dob_month == '9' || this.contact_valu.dob_month == '11' && this.contact_valu.dob_date>30 ) {
        this.errorMsg = "Plese Enter valid Date"
    }else{
      // this.errorMsg = '';
    }
  }

}
