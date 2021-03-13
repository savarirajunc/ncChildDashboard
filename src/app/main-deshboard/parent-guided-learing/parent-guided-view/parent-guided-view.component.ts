import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-parent-guided-view',
  templateUrl: './parent-guided-view.component.html',
  styleUrls: ['./parent-guided-view.component.css']
})
export class ParentGuidedViewComponent implements OnInit {

  parentGameData:Array<any> =[];
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.dashboardService.getParentGameGuidedlearning().subscribe(response =>{
      this.parentGameData = response.data.games;
      for(let i=0;i<this.parentGameData.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.parentGameData.length;
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
