import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ParentquestService } from '../../../main-website/parentquest.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MainWebsiteService } from '../../../main-website/main-website.service';
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
  selector: 'app-parent-qus-preschool',
  templateUrl: './parent-qus-preschool.component.html',
  styleUrls: ['./parent-qus-preschool.component.css']
})
export class ParentQusPreschoolComponent implements OnInit {

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

  constructor(private http:HttpClient,private mainWebsiteService:MainWebsiteService,  private parentQuestservice: ParentquestService, private el: ElementRef,private formBuilder: FormBuilder, private router:Router) {

   }



    ques  = [{ id:1, quesVal: 'question_1',value:''},
             { id:2, quesVal: 'question_2',value:''},
             { id:3, quesVal: 'question_3',value:''}
           ];

    start (){
      this.goNextpage = true;
    }
    next(){
      this.goNextStart = true;
      this.goNextpage = false;
    }


    noquest(){
       this.gosecndQuest = true;
    }
    but_2(){
      this.goQuestionVal = true;
      this.goNextStart = false;
    }
    but_3(){
        this.button_4=true;
        this.button_3=false;
    }
    but_4(){
      this.goQuestionVal = true;
      this.goNextStart = false;
      this.button_4 = false;
      this.button_3 = false;
    }
    but_5(){
      this.router.navigate(['notification-thank']);
    }
    but_6(){
      this.button_6 = true;
      this.button_5 = false;
    }
    //question value function
    onSubmit(form){
      this.mainWebsiteService.emailSendParendqus({'email':localStorage.getItem('senderEmail'),'input':this.ques}).subscribe(response=>{

          console.log(response);
          this.router.navigate(['Parent-Question']);

      })
    }

  ngOnInit() { window.scrollTo(0, 0);

    this.goNextStart = true;
  }
  addchild(from){
    this.mainWebsiteService.emailSendParendqus({'email':localStorage.getItem('senderEmail'),'input':this.ques}).subscribe(response=>{
      if(response.status){
        this.router.navigate(['parent-question/child-info']);
      }
  })
  }

}
