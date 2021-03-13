import { MainWebsiteService } from '../main-website.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router } from '@angular/router';
import { CONSTANTS } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { AuthenService } from './../../service/authen.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-boy',
  templateUrl: './boy.component.html',
  styleUrls: ['./boy.component.css']
})
export class BoyComponent implements OnInit, OnDestroy {
  public productData: any = [];
  gender;
  selectItem;
  emidata;
  maxcast;
  emicost;
  result;
  productFrom:FormGroup;
  productItem:any =[];
  ProductValur:any =[];
  country_code:any =[];
  formData:any={};
  emiBank:any = [];
  emiPlan:any = [];
  freetrialDis;
  freetrialActive;
  freetrialselect;
  getfreamwork;
  constructor(private title: Title, private mainWebsiteService: MainWebsiteService, private formBuilder: FormBuilder, private router:Router,private authenService:AuthenService) {
    this.createForm();
    this.mainWebsiteService.getGradeInfo().subscribe(response =>{
      this.getfreamwork = response.data;
    });
    this.mainWebsiteService.getNcProduct({'gender': 'boy' }).subscribe(response => {
      console.log(response);
      this.productData = response.data;
      this.maxcast = response.data[0].productPriceingQty[0].productPrice;

      let min = this.maxcast;
        console.log(min);

        var jsonData;
        var access_code = CONSTANTS.PAYMENT.ACCESSCODE; // shared by CCAVENUE
         var amount= min ;
           var currency="INR";
           var self = this;
           $.ajax({
                url:'https://secure.ccavenue.com/transaction/transaction.do?command=getJsonData&access_code='+access_code+'&currency='+currency+'&amount='+amount,
                dataType: 'jsonp',
                jsonp: false,
                jsonpCallback: 'processData',
                  success: function (data) {
                        jsonData = data;
                        // processData method for reference
                        processData(data);
                        self.processEmiData(data);
                },
                error: function(xhr, textStatus, errorThrown) {
                    alert('An error occurred! ' + ( errorThrown ? errorThrown :xhr.status ));
                    //console.log("Error occured");
                }
            });


            function processData(data){
              var paymentOptions = [];
              var creditCards = [];
              var debitCards = [];
              var netBanks = [];
              var cashCards = [];
              var mobilePayments=[];
              $.each(data, function() {
                 // this.error shows if any error
                  console.log(this.error);
                   paymentOptions.push(this.payOpt);
                   switch(this.payOpt){
                     case 'OPTCRDC':
                       var jsonData = this.OPTCRDC;
                        var obj = $.parseJSON(jsonData);
                        $.each(obj, function() {
                          creditCards.push(this['cardName']);
                       });
                     break;
                     case 'OPTDBCRD':
                       var jsonData = this.OPTDBCRD;
                        var obj = $.parseJSON(jsonData);
                        $.each(obj, function() {
                          debitCards.push(this['cardName']);
                       });
                     break;
                     case 'OPTNBK':
                       var jsonData = this.OPTNBK;
                       var obj = $.parseJSON(jsonData);
                       $.each(obj, function() {
                          netBanks.push(this['cardName']);
                       });
                     break;

                     case 'OPTCASHC':
                       var jsonData = this.OPTCASHC;
                       var obj =  $.parseJSON(jsonData);
                       $.each(obj, function() {
                         cashCards.push(this['cardName']);
                       });
                      break;

                       case 'OPTMOBP':
                       var jsonData = this.OPTMOBP;
                       var obj =  $.parseJSON(jsonData);
                       $.each(obj, function() {
                         mobilePayments.push(this['cardName']);
                       });
                   }

                 });

           }

    });
  }

  optionsShow(){
    $('#emi-option').css('display','block');
    $('#option-1').css('display','none');
    $('#option-2').css('display','inline-block');
  }
  optionsHid(){
    $('#emi-option').css('display','none');
    $('#option-1').css('display','inline-block');
    $('#option-2').css('display','none');
  }
  collapse(){
    $('html,body').animate({
      scrollTop: $('#demo').offset().top},
      'slow');
    }

  processEmiData(data){
    this.emiBank = JSON.parse(data[6].EmiBanks);
    //  console.log('bank',this.emiBank);
    this.emiPlan = JSON.parse(data[6].EmiPlans);


    let i = 0;
    let max = 0;
    let min = this.maxcast;
    let emilength = this.emiPlan.length;
    if(emilength <= 0){
      this.emidata = 0;
    }
    else{
      this.emidata = 1;
    }
    for (i = 0; i < this.emiPlan.length; i++) {
          max = this.emiPlan[i].emiAmount;
          if(min > max) {
          min = this.emiPlan[i].emiAmount;
        }
     }
     this.emicost = min;
  }

  ngOnInit() { window.scrollTo(0, 0);
    this.freetrialDis = 0;
    this.freetrialselect = 0;
   this.mainWebsiteService.getClientIp().subscribe(response => {
     if (response.status) {
       if (response.data[0].country_code === 'IN') {
        localStorage.setItem('country_code', response.data[0].country_code);
        this.country_code = response.data[0].country_code;
       } else {
        this.country_code = '0';
       }
     } else {
      this.country_code = '0';
     }
    });
    //this.country_code = localStorage.getItem('country_code');
    this.title.setTitle(CONSTANTS.PAGETITLE.BOY);
    this.getProductData();

    this.productFrom = new FormGroup({
      'productItem': new FormControl('-- Please Choose an Option --	', [Validators.required]),
      'freetrial': new FormControl()
    });
    this.emailfunction();
    this.tokenChueck();

  }
  getProductData(): void {

  }

  tokenChueck(){
    this.mainWebsiteService.checkToken(localStorage.getItem('token')).subscribe(response => {

      if (response.status) {
        this.userChuck();
      } else {
        //this.loginIn = 0;
        this.freetrialActive = 0;
      }
    });
  }

  userChuck(){
    this.authenService.getUserInfoByToken().subscribe(response => {
      if (response.status) {
        if(response.user_info.act_status === '2'){
          this.freetrialActive = 1;
        }
        else {
          //this.freetrialDis = 0;
          this.freetrialActive = 0;
        }
      }

    });
  }
  onSubmit(form) {
    this.selectItem = this.productFrom.getRawValue();
    this.selectItem.session_id = localStorage.getItem('sessionId');
    this.selectItem.user_id = localStorage.getItem('user_id');
    this.selectItem.user_type = localStorage.getItem('user_type');
    this.productFrom.controls['productItem'].markAsTouched();
    if( this.selectItem.productItem == '-- Please Choose an Option --	'){
      $('#quantity-error').css('display','block');
    }
    else if(this.selectItem.freetrial == true){

      if(localStorage.getItem('freetrial') == 'selected'){
        this.router.navigateByUrl('freetrial-user-register');
      }
      else{

        this.selectItem.status = 'Free Trial';
        this.mainWebsiteService.addProductCart(this.selectItem).subscribe(response => {
          if(response.status){
            localStorage.setItem('freetrial','selected');
            this.router.navigateByUrl('freetrial-user-register');
          }
          else{

          }
        });
      }
    }
    else {
        this.selectItem.status = 'Order New';
        this.mainWebsiteService.addProductCart(this.selectItem).subscribe(response => {
          if(response.status){
            this.router.navigateByUrl('cart');
          }
          else{

          }
        });
    }
  }
  selectValue(){
    this.selectItem = this.productFrom.getRawValue();
    if( this.selectItem.productItem != '-- Please Choose an Option --	'){
      $('#quantity-error').css('display','none');
      this.freetrialDis = 1;
    }
    else {
      $('#quantity-error').css('display','block');
      this.freetrialDis = 0;
    }
  }
  createForm(): void {
    this.productFrom = this.formBuilder.group({
      productItem: '',
      freetrial:'',
    });
  }
  ngOnDestroy(){

  }

  notifymeSubmit(from){
    this.mainWebsiteService.sendNotifyme(this.formData).subscribe(response=>{
      if(response.status){
        this.router.navigate(['notification-thank']);
      }
    })
  }

  freeTrialActive(){
    let freetrial;
    freetrial = localStorage.getItem('freetrial');
    this.selectItem = this.productFrom.getRawValue();
    if(this.selectItem.freetrial == true){
      if(freetrial == 'selected'){
        this.freetrialselect = 1;
      }
      else{
        this.freetrialselect = 0;
      }
    }
    else{
      this.freetrialselect = 0;
    }
  }


 emailfunction(){

 }
}
