import { Component, OnInit } from '@angular/core';
import {JsonPipe} from "@angular/common";
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { KeysObjectPipe } from '../keys-object.pipe';
import {Location} from '@angular/common';

@Component({
  selector: 'app-standeerd-core',
  templateUrl: './standeerd-core.component.html',
  styleUrls: ['./standeerd-core.component.css']
})
export class StandeerdCoreComponent implements OnInit {
  public grade_id_val:any=[];
  public grade_id;
  public subject_id;
  fram_id;
  grade_main_val:any=[];
  standard:any=[];
  indicator:any=[];
  gamelisttaging:any=[];
  gamedetails:any=[];
  standard_id:any=[];
  gamelisttaging_int:any=[];
  gamelist_gmaemap:any=[];
  subjects:any=[];
  grade_val:any=[];
  public gradeData=[];
  public standardMap:any=[];
  constructor(private dashboardService:DashboardService, private activatedRoute:ActivatedRoute, private _location: Location) {
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.gradeData = response.data
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.grade_val = response.data;
      console.log(this.grade_val);
    });
   }

   currentPage:number=0;
   p_currentPage:number=1;
   limitpageNav:number=10;
   pageNav:number=0;
   pageArray:number[]=[];
   pageIdx=0;
   p_stanted:any=[];
   ngOnInit() {
     this.grade_id = this.activatedRoute.snapshot.params.grad_id;
     this.fram_id = this.activatedRoute.snapshot.params.fram_id
     this.subject_id = this.activatedRoute.snapshot.params.id;
     let that = this;
     this.dashboardService.getStandadIndicatorMap({"grade_id":this.grade_id,"framework_id":this.fram_id,"subject_id":this.subject_id}).subscribe(response =>{
       //console.log(response);
       this.standardMap = response.data.games;
       for(let i=0;i<this.standardMap.length;i++){
         this.pageArray.push(i);
         //this.p_stanted.phsh(this.standardMap[i-1].standard_name);
       }
       this.pageNav = this.standardMap.length;
     })

   }
   backClicked() {
        this._location.back();
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
