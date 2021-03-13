import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    gameData:Array<any>=[];
    currentPage:number=0;
    limitpageNav:number=10;
    pageNav:number=0;
    pageArray:number[]=[];
    pageIdx=0;
    grade:any=[];
    coreframwork:any=[];
    subjects:any=[];
    formData:any={};
  constructor( private dashboardService:DashboardService ) {
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
   }
  ngOnInit() {
    this.pageNav = 0;
    this.formData.grade = '1';
    this.formData.coreframework = '1';
    this.formData.subjects = '1';
    // this.dashboardService.getgamesDataInfo().subscribe(response =>{
    //   this.gameData = response.data.games;
    //
    //   for(let i=0;i<this.gameData.length;i++){
    //     this.pageArray.push(i);
    //   }
    //   this.pageNav = this.gameData.length;
    // });
    this.pageArray = [];
    this.dashboardService.getGameFilter(this.formData).subscribe(response =>{
      this.gameData = response.data.games;
      for(let i=0;i<this.gameData.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.gameData.length;
    })
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

  getfilter(){
    this.pageArray = [];
    this.dashboardService.getGameFilter(this.formData).subscribe(response =>{
      this.gameData = response.data.games;
      for(let i=0;i<this.gameData.length;i++){
        this.pageArray.push(i);
      }
      this.pageNav = this.gameData.length;
    })
  }
}
