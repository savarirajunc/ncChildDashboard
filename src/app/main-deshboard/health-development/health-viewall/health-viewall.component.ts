import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-health-viewall',
  templateUrl: './health-viewall.component.html',
  styleUrls: ['./health-viewall.component.css']
})
export class HealthViewallComponent implements OnInit {
  healthData:Array<any> =[];
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
  constructor(private dashboardService:DashboardService) {

  }

  ngOnInit() {
    this.dashboardService.getHealthDevelopmentQues().subscribe(response =>{
      this.healthData = response.data.games;
      for(let i=0;i<this.healthData.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.healthData.length;
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
