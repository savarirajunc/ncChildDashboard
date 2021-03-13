import { Component, OnInit } from '@angular/core';
import { DashboardPipe } from '../dashboard.pipe';
import { AddressPipe } from '../address.pipe';
import { DashboardService } from '../dashboard.service';
import { SharedService } from '../shared.service';
import { ViewallparentinformationComponent } from '../viewallparentinformation/viewallparentinformation.component';
import { ViewchildreninformationComponent } from '../viewchildreninformation/viewchildreninformation.component';
import { CompanyWiseComponent } from '../company-wise/company-wise.component';
import { AuthenService } from '../../service/authen.service';
@Component({
  selector: 'app-dasboard-menu',
  templateUrl: './dasboard-menu.component.html',
  styleUrls: ['./dasboard-menu.component.css']
})
export class DasboardMenuComponent implements OnInit {
  public today = new Date();
  public order:any={};
  public stort:any={};
  issTable:boolean=true;
  ischild:boolean=true;
  public countryinfo:any=[];
  public states:any=[];
  // states:any={[
  //   state_id =1,
  //   state_name=ANDHRA PRADESH,
  //   countries_id=1
  // ]};
  parentinformation:any=[];
  parentinformationlength:any=[];
  pages:Array<number>;
  currentPage:number=0;
  limitpageNav:number=10;
  pageNav:number=0;
  pageArray:number[]=[];
  pageIdx=0
  mission;
  menucount;
  constructor( public dashboardService:DashboardService,private sharedService:SharedService, private authenService: AuthenService ) {
    this.dashboardService.getCountryInfo().subscribe(response =>{
      this.countryinfo = response.data;
    });
    this.dashboardService.getstatesInfo().subscribe(response =>{
      this.states = response
    });
    sharedService.updatemissionService$.subscribe(updateService =>{

   //   this.getChildrenInfo();
    this.sharedService.confirmMission(this.mission);
  });
  sharedService.updateDatamissionService$.subscribe(updateDataService=>{

    this.functionmenu();
  });
   }

  ngOnInit() {
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(res=>{
      if(res.status){
        this.getuserinfo();
      }else {

      }
    })
  }
  searchItem($event,key:string,value:any){
    if($event===true || $event.target.checked){
      this.order[""+key]=value;
    }else{
      delete this.order[""+key];
    }

    this.dashboardService.searchItem(this.order);

  }

  searchit($event,keyvalue:string,value:any){
    if($event===true || $event.target.checked){
      this.stort[""+keyvalue]=value;
    }else{
      // delete this.stort[""+keyvalue];
    }

    this.dashboardService.searchit(this.stort);

  }


  toggleview(){
    this.issTable=!this.issTable;
    //this.ischild=!this.ischild
  }
  toggle(){
    //this.issTable=!this.issTable;
    this.ischild=!this.ischild
  }
  toggleviewspan(){
    if(this.issTable == this.issTable){
      this.issTable == this.issTable;
    }
  }
  functionmenu(){
    this.dashboardService.getParentInfoView({"all":"all"}).subscribe(response =>{
      this.parentinformation = response.data.games;

      //this.coreValue = response.data;
      for(let i=0;i<this.parentinformation.length;i++){
        this.pageArray.push(i);
        //this.pageArray = null;
      }
      this.pageNav = this.parentinformation.length;
      this.sharedService.confirmMission(this.mission);
    });
  }

  getuserinfo(){
    this.authenService.getUserInfoByToken().subscribe(response => {
      if(response.status){
        if(response.user_info.user_type === "admin"){
          this.menucount = 1 ;
        } else {
          this.menucount = 0 ;
        }
      }
    });
  }
}
