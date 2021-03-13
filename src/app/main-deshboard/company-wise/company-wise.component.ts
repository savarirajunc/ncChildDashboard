import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DashboardPipe } from '../dashboard.pipe';
import { CompanyFilterPipe } from '../company-filter.pipe';

@Component({
  selector: 'app-company-wise',
  templateUrl: './company-wise.component.html',
  styleUrls: ['./company-wise.component.css']
})
export class CompanyWiseComponent implements OnInit {
  public order:any={};
  parentinformation:any=[];
  public trem;
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
  constructor(private dashboardService:DashboardService) {
    let that=this;
    this.dashboardService.searcObs$.subscribe(key=>{
      that.order=key;
    });
   }

  ngOnInit() {
    this.dashboardService.getParentInfo().subscribe(response =>{
      this.parentinformation = response.data.games;
      for(let i=0;i<this.parentinformation.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.parentinformation.length;
      console.log(this.parentinformation.length);
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
