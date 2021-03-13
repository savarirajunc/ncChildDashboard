import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../../service/authen.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  gameData:Array<any>=[];
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0;
constructor(private dashboardService:DashboardService) {
  this.dashboardService.getDoctorList().subscribe(res=>{
    console.log();
  })
 }

ngOnInit() {

  this.dashboardService.getDoctorList().subscribe(response =>{
    this.gameData = response.data.games;
    for(let i=0;i< this.gameData.length;i++) {
      this.pageArray.push(i);
    }
    this.pageNav = this.gameData.length;
  });
}

setGameDetailsView(idx:number) {
  this.currentPage = idx;
}
selectPage() {
    this.currentPage += 1;
    if (this.currentPage % 10 === 0) {
      this.pageIdx += 1;
    }
}
selectPageBack() {
  if (this.currentPage % 10 === 0) {
    this.pageIdx -= 1;
  }
  this.currentPage -= 1;

}
deactived(event){
  this.dashboardService.userDelete({'id':event.id}).subscribe(res=>{
    console.log(res);
    if(res.status){
      this.dashboardService.getDoctorList().subscribe(response =>{
        this.gameData = response.data.games;

      });
    }
  });
}


}
