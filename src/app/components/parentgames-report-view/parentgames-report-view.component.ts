import { Component, OnInit } from '@angular/core';
import { CONSTANTS, Router, ActivatedRoute, Title, AppService, AuthenService, ParentsService,ComponentsService } from './../../app.index';
//import {ComponentsService } from './components.index';
import { NavMenuComponent } from './../../components/nav-menu.component';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-parentgames-report-view',
  templateUrl: './parentgames-report-view.component.html',
  styleUrls: ['./parentgames-report-view.component.css']
})
export class ParentgamesReportViewComponent implements OnInit {
  childName;
  parentAnswerView;
  healthcat;
  parentchildEducation;
  parentcoreEducation;
  parentcoreInterestDiscovery;
  currentDate;
  ques;
  core_id;
  viewType;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private appService: AppService, private parentsService: ParentsService, private authenService: AuthenService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.getParentCoreSubjects();
        this.getParentQusAns();
      });
  }

  ngOnInit() { window.scrollTo(0, 0);
    // tslint:disable-next-line:max-line-length
    this.core_id = '2';
    this.viewType = '1';
    this.getParentQusAns();
  }
  getParentCoreSubjects(){
      // tslint:disable-next-line:max-line-length
      this.parentsService.getParentCoreSubjects({ "nidara_kid_profile_id": localStorage.getItem('selectedKid'),"day_id":localStorage.getItem('days'),"grade_id":localStorage.getItem('grade')}).subscribe(response => {
        console.log(response);
        if(response.status){
          this.parentcoreEducation = response.data.core_education;
          this.parentchildEducation = response.data.core_health;
          this.parentcoreInterestDiscovery = response.data.core_interest_development;
          this.currentDate = response.data.today_date;

          this.childName = "My "+ response.data.kid_name;
        }
      });

  }

  getParentQusAns(){
    this.parentsService.getParentKidAnswerInfo({'nidara_kid_profile_id':localStorage.getItem('selectedKid'), 'core_id': '2'}).subscribe(response => {
      console.log(response);
      this.ques = response.data;
  });
  }

   coreTypeFilter(event) {
    console.log(event);
    this.parentsService.getParentKidAnswerInfo({"nidara_kid_profile_id": localStorage.getItem('selectedKid'), 'core_id': event}).subscribe(response => {
      console.log(response);
      this.ques = response.data;
    });
  }

  viewPageModu(event) {
    this.viewType = event;
  }
}
