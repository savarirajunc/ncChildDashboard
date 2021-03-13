import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../service/shared.service';
import {AppService} from '../../../app.service';
@Component({
  selector: 'app-selectgrate',
  templateUrl: './selectgrate.component.html',
  styleUrls: ['./selectgrate.component.css']
})
export class SelectgrateComponent implements OnInit {

  guidedScheduleDay: any =[];
  currentPage =0;
  limitpageNav = 10;
  pageNav = 0;
  pageArray: number[] = [];
  pageIdx = 0;
  grade_id;
  constructor(private activatedRoute: ActivatedRoute, private dashboardService: DashboardService, private sharedService: SharedService, private appService: AppService) {

  }

  ngOnInit() {
      this.grade_id = this.activatedRoute.snapshot.params.id;
      this.dashboardService.getGuidedDaySchedule({'id': this.grade_id}).subscribe(response => {
        this.guidedScheduleDay = response.data.games;
        for (let i = 0; i < this.guidedScheduleDay.length; i++) {
          this.pageArray.push(i);
        }
        this.pageNav = this.guidedScheduleDay.length;
      });
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

}
