import { Component, OnInit } from '@angular/core';
import {JsonPipe} from "@angular/common";
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { KeysObjectPipe } from '../keys-object.pipe';
import {Location} from '@angular/common';
import { StandeerdCoreComponent } from '../standeerd-core/standeerd-core.component';
@Component({
  selector: 'app-grade-dedtails',
  templateUrl: './grade-dedtails.component.html',
  styleUrls: ['./grade-dedtails.component.css']
})
export class GradeDedtailsComponent implements OnInit {
  public grade_id_val:any=[];
  public grade_id;
  public gradeData=[];
  public coreframworklist:any=[];
  public subjects:any=[];
  public standardmapview={};
  public frameworkid;
  public coreframe;
  constructor(private dashboardService:DashboardService, private activatedRoute:ActivatedRoute, private _location: Location) {
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.gradeData = response.data
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframworklist = response;
    })
   }

  ngOnInit() {
    this.grade_id = this.activatedRoute.snapshot.params.id;
    let that = this;

    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
    this.dashboardService.getStandardMapInfo().subscribe(response =>{
    let res_obj={};
    let res_sub={};
    let coreframedata = response.filter(coreitem =>{
      return coreitem.guided_id === that.grade_id;
    })
    coreframedata.forEach(row=>{
         if(!res_obj.hasOwnProperty(""+row.guided_id)){
             res_obj[""+row.guided_id]=[{"codeId":row.coreframwor_id,"subjectId":row.subject_id}];
            }
          else{
             //  if(res_obj[""+row.guided_id].indexOf(row.coreframwor_id)===-1)
             // }
             let idx=res_obj[""+row.guided_id].findIndex(ob=>{
               return ob.codeId==row.coreframwor_id && ob.subjectId==row.subject_id;
             });
             if(idx===-1){
               res_obj[""+row.guided_id].push({"codeId":row.coreframwor_id,"subjectId":row.subject_id});
             }
           }
         });


       this.standardmapview = res_obj;
       console.log("Coreframe Work",this.standardmapview);
    });
    console.log(this.grade_id);
  }
  backClicked() {
       this._location.back();
   }
   deleteParent(id){
     this.grade_id_val = id;
     this.dashboardService.searchItem(this.grade_id_val);
   }
}
