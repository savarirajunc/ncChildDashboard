import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

import { WebAdminService } from '../web-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };

  public product:Array<any> = [];

    currentPage: number = 0;
    limitpageNav: number = 10;
    pageNav: number = 0;
    pageArray: number [] = [];
    pageIdx = 0;

  constructor(private webAdminService: WebAdminService, private router: Router) {

  }

  ngOnInit() { window.scrollTo(0, 0);
    this.getdata();
  }

  getdata(){
    this.webAdminService.getNcProduct().subscribe(response => {
      console.log(response);
      this.product = response.data.product;

      for ( let i = 0; i < this.product.length; i++) {
        this.pageArray.push(i);
      }
      this.pageNav = this.product.length;
    });
  }
  setGameDetailsView(idx: number) {
    this.currentPage = idx;
  }
  selectPage() {
      this.currentPage += 1;
      if ( this.currentPage % 10 === 0) {
        this.pageIdx += 1;
      }
  }
  selectPageBack() {
    if (this.currentPage % 10 === 0) {
      this.pageIdx -= 1;
    }
    this.currentPage -= 1;

  }
  deleteProduct(id){
    		this.webAdminService.deleteByid({"id":id})
          .subscribe(response => {
            if(response.status){
              //form.reset();
                this._response['status'] = true;
                this._response['message'] = response.message;
                this._response['alert'] = "alert alert-success";
                //this.getdata();
                this.webAdminService.getNcProduct().subscribe(response => {
                  console.log(response);
                  this.product = response.data.product;
                }); 
              }
              else{
                this._response['status'] = true;
                this._response['message'] = response.message;
                this._response['alert'] = "alert alert-danger";
              }
                        
        });
  }

}
