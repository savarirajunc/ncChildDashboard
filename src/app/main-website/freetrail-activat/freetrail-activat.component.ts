import { Component, OnInit } from '@angular/core';
import { MainWebsiteService } from '../main-website.service';

@Component({
  selector: 'app-freetrail-activat',
  templateUrl: './freetrail-activat.component.html',
  styleUrls: ['./freetrail-activat.component.css']
})
export class FreetrailActivatComponent implements OnInit {

  constructor(private mainWebsiteService:MainWebsiteService) { }
  order_id;
  ngOnInit() { window.scrollTo(0, 0);
    this.order_id = '';
    this.mainWebsiteService.getByType({'order_id':this.order_id,'user_id':localStorage.getItem('user_id')}).subscribe(dataValu =>{
      let gender;
      let i = 0;
      for(i = 0;i < dataValu.data.length; i++){
      if(dataValu.data[i].gender_type === 'girl'){
        gender = 'female';
      }
      else if(dataValu.data[i].gender_type === 'boy'){
        gender = 'male';
      }
        this.mainWebsiteService.childRegister({'endday':'1','gender':gender,'grade':dataValu.data[i].product_type,'user_id':localStorage.getItem('user_id'),'order_id':dataValu.data[i].order_id}).subscribe(resdata=>{
          console.log(resdata);
      });
    }
    });
  //   let gender;
  //   gender = localStorage.getItem('gender');
  //   this.mainWebsiteService.childRegister({'gender':gender,'grade':'4','user_id':localStorage.getItem('user_id')}).subscribe(resdata=>{
  //     console.log(resdata);
  // });

  }

}
