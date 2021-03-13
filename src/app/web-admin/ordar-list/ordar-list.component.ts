import { Component, OnInit } from '@angular/core';
import { WebAdminService } from '../web-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordar-list',
  templateUrl: './ordar-list.component.html',
  styleUrls: ['./ordar-list.component.css']
})
export class OrdarListComponent implements OnInit {

  public product:Array<any> = [];

  currentPage: number = 0;
  limitpageNav: number = 10;
  pageNav: number = 0;
  pageArray: number [] = [];
  pageIdx = 0;
  productLength;

  constructor(private webAdminService: WebAdminService, private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.webAdminService.getNcOrder().subscribe(response => {
      console.log(response);
      this.product = response.data.order;

      for ( let i = 0; i < this.product.length; i++) {
        this.pageArray.push(i);
        this.productLength = response.data.order[i].order_price.length;
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

}
