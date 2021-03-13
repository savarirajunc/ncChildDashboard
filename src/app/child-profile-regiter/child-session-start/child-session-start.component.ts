import { Component, OnInit } from '@angular/core';
//import { FileUploader } from 'ng2-file-upload';
//import { POSTURL } from './../../app.config';
//import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
//import { listLocales } from 'ngx-bootstrap/bs-moment';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
import { AuthenService} from './../../service/authen.service';
import { AppService, } from './../../app.service';
import { ChildrenService } from './../../service/children.service'
import { ComponentsService } from './../../service/components.service'
//import { FormsModule }   from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-child-session-start',
  templateUrl: './child-session-start.component.html',
  styleUrls: ['./child-session-start.component.css']
})
export class ChildSessionStartComponent implements OnInit {
_kidsInformations;
  constructor(private router: Router, private authenService: AuthenService, private componentsService:ComponentsService, private sharedService: SharedService,  private titleService: Title, private appService: AppService, private childrenService: ChildrenService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.componentsService.getKidsInfo().subscribe(response => {
      this.appService.debugConsole({ "kidsInfo": response })
      if (response.status) {
        this._kidsInformations = response.data;
        console.log("_kidsInformations :",this._kidsInformations)

          this.checkChildDefault(response.data);

      }
    });
  }
  checkChildDefault(data) {
    data.forEach(element => {
      if (element.is_default_kid == 1) {
        localStorage.setItem('selectedKid', element.nidara_kid_profile_id);
        localStorage.setItem('kidGender',element.gender)
      } else {
      }
    });
  }

  selectedKidInfo(kidsInfo, tag) {

    this._kidsInformations.forEach(element => {
      if (element.nidara_kid_profile_id == kidsInfo.nidara_kid_profile_id) {
        localStorage.setItem('selectedKid', kidsInfo.nidara_kid_profile_id);
        localStorage.setItem('kidGender',kidsInfo.gender);
        localStorage.setItem('grade', kidsInfo.grade);
        localStorage.setItem('days', kidsInfo.no_days);
      } else {


      }
    });
  }
  startSession(){
    this.router.navigate(['/', CONSTANTS.PAGEURL.CHILDPROFILEREG,'final-silde']);
  }
  gameSession(){
    this.router.navigate(['/',CONSTANTS.PAGEURL.DASHBOARD.CHILDREN,'nidara-demo-game-section'])
  }
  gobackfunction(){
    window.history.back();
  }
}
