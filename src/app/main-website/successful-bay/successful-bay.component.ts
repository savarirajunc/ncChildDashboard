import { MainWebsiteService } from '../main-website.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {PlatformLocation } from '@angular/common';



@Component({
  selector: 'app-successful-bay',
  templateUrl: './successful-bay.component.html',
  styleUrls: ['./successful-bay.component.css']
})
export class SuccessfulBayComponent implements OnInit {
  order_id;
  constructor(private platformLocation:PlatformLocation,private activatedRoute:ActivatedRoute, private mainWebsiteService:MainWebsiteService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.order_id = this.activatedRoute.snapshot.params.id;

    this.mainWebsiteService.successToken({'order_id':this.order_id}).subscribe(response=>{
      if(response.status){
        let token;
        let baseUrl;
        baseUrl = (this.platformLocation as any).location.origin;
        token = localStorage.getItem('token');
        this.mainWebsiteService.getByType({'order_id':this.order_id,'user_id':response.data.id}).subscribe(dataValu =>{
          let gender;
          let i = 0;
          for(i = 0;i < dataValu.data.length; i++){
          if(dataValu.data[i].gender_type === 'girl'){
            gender = 'female';
          }
          else if(dataValu.data[i].gender_type === 'boy'){
            gender = 'male';
          }
            this.mainWebsiteService.childRegister({'gender':gender,'grade':dataValu.data[i].product_type,'user_id':response.data.id,'order_id':this.order_id}).subscribe(resdata=>{
              console.log(resdata);
          });
        }
        });
        this.mainWebsiteService.sendPosttokenSend({'token':token,'base_url':baseUrl, 'user_first_name':response.data.first_name, 'user_last_name':response.data.last_name, 'email':response.data.email,'order_id':this.order_id}).subscribe(res =>{
          console.log(res);
        });
        this.mainWebsiteService.sendProductDetaile({'user_id':localStorage.getItem('user_id'),'token':token,'base_url':baseUrl, 'user_first_name':response.data.first_name, 'user_last_name':response.data.last_name, 'email':response.data.email,'order_id':this.order_id}).subscribe(res =>{
          console.log(res);
        });
      }
    });
    this.mainWebsiteService.sendInvoiceEmail({'order_id':this.order_id}).subscribe(response=>{
      console.log(response);
    })
  }

}
