import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';
import { ChildFilterPipe } from '../child-filter.pipe';

@Component({
  selector: 'app-viewchildreninformation',
  templateUrl: './viewchildreninformation.component.html',
  styleUrls: ['./viewchildreninformation.component.css']
})
export class ViewchildreninformationComponent implements OnInit {
  public order:any={};
   prop = 'num';
  search:any=[];
  childreninfo:any=[];
  childreninfolength:any=[];
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
  constructor(private dashboardService:DashboardService) {
    // this.dashboardService.getChildrenInfo().subscribe(response =>{
    //   this.childreninfo = response.data;
    //   this.childreninfolength = this.childreninfo.length;
    // });
    let that=this;
    this.dashboardService.searcObs$.subscribe(key=>{
      that.order=key;
      this.dashboardService.getChidInfo(that.order).subscribe(response=>{
        this.childreninfo = response.data.games
      });
    });
   }

  ngOnInit() {
    this.dashboardService.getChidInfo({"all":"all"}).subscribe(response=>{
      this.childreninfo = response.data.games
      for(let i=0;i<this.childreninfo.length;i++){
        this.pageArray.push(i);
        //this.pageArray = null;
      }
      this.pageNav = this.childreninfo.length;
    });
  }
  orderclick(){
    console.log("savari");
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
