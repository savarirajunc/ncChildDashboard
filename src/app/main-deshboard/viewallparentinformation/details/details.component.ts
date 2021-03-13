import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  parent_id:any=[];
  parentInfo:any=[];
  country:any=[];
  childreninfo:any=[];
  kidparentsmap:any=[];
  public kidparent_id;
  public kidInfoList;

  constructor(private activatedRoute:ActivatedRoute, private dashboardService:DashboardService) {
    this.dashboardService.getParentInfo().subscribe(response =>{
      this.parentInfo = response.data;
    });
    this.dashboardService.getCountryInfo().subscribe(response =>{
      this.country = response.data;
    });
    this.dashboardService.getChildrenInfo().subscribe(response =>{
      this.childreninfo = response.data;
    });
   }

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params.id)
    this.parent_id = this.activatedRoute.snapshot.params.id;
    console.log(this.parent_id);
    this.dashboardService.getKidParentInfo().subscribe(response =>{
      this.kidparentsmap = response.data;
      let that=this;
      this.kidparent_id = this.kidparentsmap.filter(kidInfo =>{
        return kidInfo.users_id === that.parent_id;
        //console.log(this.kidparent_id);
      });
        this.kidInfoList = this.kidparent_id;
        console.log(this.kidparent_id.users_id);
    });
  }

}
