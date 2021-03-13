import { Component, OnInit } from '@angular/core';
import { MainWebsiteService } from '../main-website.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.css']
})
export class MainCartComponent implements OnInit {

  productList:any = [];
  productItem:any = [];
  filterItem:any = [];
  butText;
  grade;
  constructor(private mainWebSiteService: MainWebsiteService, private router:Router ) {
    this.mainWebSiteService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.getProductList();

    this.mainWebSiteService.checkToken(localStorage.getItem('token')).subscribe(response => {
      if (response.status) {
        this.butText = 'MAKE PAYMENT';
      } else {
        this.butText = 'ENTER DETAILS';
      }
    });
  }
  userLink(): void{
    this.mainWebSiteService.checkToken(localStorage.getItem('token')).subscribe(response => {
      let user_id;
      let user_type;
      let getSesstion;
      user_id = localStorage.getItem('user_id');
      user_type = localStorage.getItem('user_type');
      getSesstion = localStorage.getItem('sessionId');
      // this.selectItem.status = 'Order New';
      if (response.status) {
        // tslint:disable-next-line:max-line-length
        this.mainWebSiteService.addProductOrder({'status':'Order New', 'session_id':getSesstion, 'user_id': user_id, 'user_type': user_type}).subscribe( response=> {
          console.log(response);
        });
        this.router.navigate(['check-out']);
      } else {
        this.router.navigate(['user-register']);
      }
    });
  }
  getProductList(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.mainWebSiteService.productGetById({'session_id': this.productItem,'user_id':localStorage.getItem('user_id')}).subscribe(response => {
        this.productList = response.data;
        this.filterItem = this.productList.length;
    });
  }

}
