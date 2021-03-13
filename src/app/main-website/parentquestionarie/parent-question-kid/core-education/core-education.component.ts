import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ParentquestService } from '../../../parentquest.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MainWebsiteService } from '../../../main-website.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
declare var jquery: any;
declare var $: any;
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import * as $ from 'jquery/dist/jquery.min.js';

interface MailChimpResponse {
  result: string;
  msg: string;
}

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-core-education',
  templateUrl: './core-education.component.html',
  styleUrls: ['./core-education.component.css']
})
export class CoreEducationComponent implements OnInit {

  @ViewChild('dp')dp;
  public  _response: any = { "status": false,"alert":"info", "message": "" };

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
    private kid_id;

    currentPage: number = 0;
    limitpageNav: number = 10;
    pageNav: number = 0;
    pageArray: number [] = [];
    pageIdx = 0;

  constructor(private location:Location, private activatedRoute:ActivatedRoute, private http:HttpClient,private mainWebsiteService:MainWebsiteService,  private parentQuestservice: ParentquestService, private el: ElementRef,private formBuilder: FormBuilder, private router:Router) {

   }



    public ques:any = [];

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

  onSubmit(form){
    let senderemail = localStorage.getItem('senderEmail');
    if(!senderemail){
      this.mainWebsiteService.sendHealthAnswer({'nidara_kid_profile_id':this.kid_id,'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
        if(response.status){
          this.router.navigate(['parent-question/parent-qus/1/core-interest/',this.kid_id])
          this._response['status'] = true;
          this._response['message'] = '';
          this._response['alert'] = '';
        } else {
          this._response['status'] = false;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
      })
    } else{
      this.mainWebsiteService.sendHealthAnswer({'email_id':localStorage.getItem('senderEmail'),'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
        if(response.status){
          this.router.navigate(['parent-question/parent-qus/1/core-interest/',this.kid_id])
          this._response['status'] = true;
          this._response['message'] = '';
          this._response['alert'] = '';
        } else {
          this._response['status'] = false;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
      })
    }


  }

ngOnInit() { window.scrollTo(0, 0);

  this.kid_id = this.activatedRoute.snapshot.params.id;
  let senderemail = localStorage.getItem('senderEmail');
  if(!senderemail){
    this.mainWebsiteService.getParentQusInfo({'nidara_kid_profile_id':this.kid_id,'core_id':1}).subscribe(response =>{
      this.ques = response.data.core_education;
      for ( let i = 0; i < this.ques.length; i++) {
        this.pageArray.push(i);
      }
      this.pageNav = this.ques.length;
      //console.log(response);
    });
  }
  else{
    this.mainWebsiteService.getParentQusInfo({'grade_id':this.kid_id,'core_id':1,'email_id':localStorage.getItem('senderEmail')}).subscribe(response =>{
      this.ques = response.data.core_education;
      for ( let i = 0; i < this.ques.length; i++) {
        this.pageArray.push(i);
      }
      this.pageNav = this.ques.length;
      //console.log(response);
    });
  }

  this.goNextStart = true;
}

setGameDetailsView(idx: number) {
  // this.currentPage = idx;
  // tslint:disable-next-line:max-line-length
  let senderemail = localStorage.getItem('senderEmail');
  if(!senderemail){
    this.mainWebsiteService.sendHealthAnswer({'nidara_kid_profile_id':this.kid_id,'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
      if (response.status) {
        this.currentPage = idx;
        this._response['status'] = true;
        this._response['message'] = '';
        this._response['alert'] = '';
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }
    })
  } else {
    this.mainWebsiteService.sendHealthAnswer({'email_id':localStorage.getItem('senderEmail'),'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
      if (response.status) {
        this.currentPage = idx;
        this._response['status'] = true;
        this._response['message'] = '';
        this._response['alert'] = '';
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }
    })
  }

}
selectPage() {
    this.currentPage += 1;
    if ( this.currentPage % 10 === 0) {
      this.pageIdx += 1;
    }
    let senderemail = localStorage.getItem('senderEmail');
    if(!senderemail){
      this.mainWebsiteService.sendHealthAnswer({'nidara_kid_profile_id':this.kid_id,'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
        // if (response.status) {
        //  //  this.currentPage = idx;
        //   this._response['status'] = true;
        //   this._response['message'] = '';
        //   this._response['alert'] = '';
        // } else {
        //   this._response['status'] = false;
        //   this._response['message'] = response.message;
        //   this._response['alert'] = 'alert alert-danger';
        // }
      })
    } else {
      this.mainWebsiteService.sendHealthAnswer({'email_id':localStorage.getItem('senderEmail'),'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
        // if (response.status) {
        //   // this.currentPage = idx;
        //   this._response['status'] = true;
        //   this._response['message'] = '';
        //   this._response['alert'] = '';
        // } else {
        //   this._response['status'] = false;
        //   this._response['message'] = response.message;
        //   this._response['alert'] = 'alert alert-danger';
        // }
      })
    }
}
selectPageBack() {
  if (this.currentPage % 10 === 0) {
    this.pageIdx -= 1;
  }
  this.currentPage -= 1;
  let senderemail = localStorage.getItem('senderEmail');
  if(!senderemail){
    this.mainWebsiteService.sendHealthAnswer({'nidara_kid_profile_id':this.kid_id,'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
      // if (response.status) {
      //  // this.currentPage = idx;
      //   this._response['status'] = true;
      //   this._response['message'] = '';
      //   this._response['alert'] = '';
      // } else {
      //   this._response['status'] = false;
      //   this._response['message'] = response.message;
      //   this._response['alert'] = 'alert alert-danger';
      // }
    })
  } else {
    this.mainWebsiteService.sendHealthAnswer({'email_id':localStorage.getItem('senderEmail'),'parentQuestionAnswer':this.ques[this.currentPage]}).subscribe(response=>{
      // if (response.status) {
      //   // this.currentPage = idx;
      //   this._response['status'] = true;
      //   this._response['message'] = '';
      //   this._response['alert'] = '';
      // } else {
      //   this._response['status'] = false;
      //   this._response['message'] = response.message;
      //   this._response['alert'] = 'alert alert-danger';
      // }
    })
  }
}


  addchild(from){
    this.mainWebsiteService.emailSendParendqus({'email':localStorage.getItem('senderEmail'),'input':this.ques}).subscribe(response=>{
      if(response.status){
        this.router.navigate(['parent-question/child-info']);
      }
  })
  }

  goback(){
    this.location.back();
  }

}
