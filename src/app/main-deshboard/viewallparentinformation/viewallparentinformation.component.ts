import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../../app.service';
import {POSTURL} from '../../app.config';
import { DashboardService } from '../dashboard.service';
import { SharedService } from '../shared.service';
import { DashboardPipe } from '../dashboard.pipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewallparentinformation',
  templateUrl: './viewallparentinformation.component.html',
  styleUrls: ['./viewallparentinformation.component.css']
})
export class ViewallparentinformationComponent implements OnInit {
  public order: any = {};
  public status;
  parentinformation: any = [];
  parentinformationlength: any = [];
  pages: Array<number>;
  currentPage = 0;
  limitpageNav = 10;
  pageNav = 0;
  pageArray: number[] = [];
  pageIdx = 0;
  coreValue;
  mission;
  public stort: any = {};
  constructor(private http: HttpClient, private apiService: AppService, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    sharedService.updatemissionService$.subscribe(updateService => {

   //   this.getChildrenInfo();
    this.sharedService.confirmMission(this.mission);
  });
  sharedService.updateDatamissionService$.subscribe(updateDataService => {

    this.functionmenu();
  });
  const that = this;
  this.dashboardService.searcObs$.subscribe(key => {
    this.pageArray = [];
    that.order = key;
    this.dashboardService.getParentInfoView(this.order).subscribe(response => {
      this.parentinformation = response.data.games;

      for (let i = 0; i < this.parentinformation.length; i++) {
        this.pageArray.push(i);
        // this.pageArray = null;
      }
      this.pageNav = this.parentinformation.length;


    });
  });
   }
  ngOnInit(): void {
    this.dashboardService.getParentInfoView({'all': 'all'}).subscribe(response => {
      this.parentinformation = response.data.games;

      // this.coreValue = response.data;
      for (let i = 0; i < this.parentinformation.length; i++) {
        this.pageArray.push(i);
        // this.pageArray = null;
      }
      this.pageNav = this.parentinformation.length;
      // this.sharedService.confirmMission(this.mission);
    });
    this.dashboardService.searcObs2$.subscribe(keyvalue => {
      this.stort = keyvalue;
    });
    const id = +this.activatedRoute.snapshot.params['id'];
  }

  setGameDetailsView(idx: number) {
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
  functionmenu() {
    this.dashboardService.getParentInfoView({'all': 'all'}).subscribe(response => {
      this.parentinformation = response.data.games;

      // this.coreValue = response.data;
      for (let i = 0; i < this.parentinformation.length; i++) {
        this.pageArray.push(i);
        // this.pageArray = null;
      }
      this.pageNav = this.parentinformation.length;
      this.sharedService.confirmMission(this.mission);
    });
  }
}
