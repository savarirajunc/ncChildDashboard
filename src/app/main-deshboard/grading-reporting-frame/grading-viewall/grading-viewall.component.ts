import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-grading-viewall',
  templateUrl: './grading-viewall.component.html',
  styleUrls: ['./grading-viewall.component.css']
})
export class GradingViewallComponent implements OnInit {

  gradingreportingview:Array<any>=[];
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
  constructor(private dashboardService:DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getgradingReporting().subscribe(response =>{
      this.gradingreportingview = response.data.games;
      for(let i=0;i<this.gradingreportingview.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.gradingreportingview.length;
    });
  }
  setGameDetailsView(idx:number){
    this.currentPage=idx;
  }
  selectPage(){
      this.currentPage += 1;
      if(this.currentPage%10===0){
        this.pageIdx+=1;
      }
  }
  selectPageBack(){
    if(this.currentPage%10===0){
      this.pageIdx-=1;
    }
    this.currentPage -=1

  }

}
