import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { UploadFileService } from '../../../upload-file.service';
@Component({
  selector: 'app-game-data-view',
  templateUrl: './game-data-view.component.html',
  styleUrls: ['./game-data-view.component.css']
})
export class GameDataViewComponent implements OnInit {
  public formData: any = {};
  public gameData: any = {};
  public  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  public  _response2: any = { 'status': false, 'alert': 'info', 'message': '' };
  grade: any = [];
  coreframwork: any = [];
  subjects: any = [];
  indicator: any = [];
  standard: any = [];
  gamelisttaging: any = [];
  gamedetails: any = [];
  gamedetails_vla;
  game_qa;
  game_id;
  gamesQuestionanswer: any = [];
  indicatormap_vla: any = [];
  indicatormap: any = [];
  standardmap: any = [];
  getParentCoreMapVal: any = [];
  getParentCoreMapStn: any = [];
  indicatorlength;
  getSlideMaster;
 // formData:any=[];
  selectedFiles: FileList;
    Url;
    getfilename;
  getExcelSheet;
  constructor(private activatedRoute: ActivatedRoute, private uploadFileService: UploadFileService, private dashboardService: DashboardService) {
    this.dashboardService.getCoreFrameworkInfo().subscribe(response => {
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response => {
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response => {
      this.grade = response.data;
    });
    this.dashboardService.getIndicatorsInfo().subscribe(response => {
      this.indicator = response;
    });
    this.dashboardService.getStandardInfo().subscribe(response => {
      this.standard = response;
    });
    this.dashboardService.getGameExcelSheet().subscribe(response =>{
      this.getExcelSheet = response.data;
    });
   }

   weightage: any = [
    {
      valu: '0.0'
      },
    {
    valu: '0.1'
    },
    {
      valu: '0.2'
    },
    {
      valu: '0.3'
      },
    {
    valu: '0.4'
    },
    {
      valu: '0.5'
    },
    {
      valu: '0.6'
      },
    {
    valu: '0.7'
    },
    {
      valu: '0.8'
    },
    {
      valu: '0.9'
      },
    {
    valu: '1.0'
    },
    {
      valu: '1.1'
    }
];

  ngOnInit() {
    this.game_id = this.activatedRoute.snapshot.params.id;
    const that = this;
    this.dashboardService.getGameCoreGrade({'game_id': this.game_id}).subscribe(response => {
      this.getParentCoreMapVal = response.data;
      this.formData.grade_id = response.data[0].grade_id;
      console.log(response);
    });
    this.dashboardService.getGameCoreStandInti({'game_id': this.game_id}).subscribe(response => {
      this.getParentCoreMapStn = response.data;
      console.log(response);
    });

    this.dashboardService.getGameQuestionMap({'game_id': this.game_id}).subscribe(response => {
      console.log(response);
      this.gamesQuestionanswer = response.data;

    });
    this.dashboardService.getGameTaggingHealth({'game_id': this.game_id}).subscribe(res => {
      this.getSlideMaster = res.data;
      this.formData.files = res.files;
    });
      this.formData.game_id = this.game_id;
  }
  onChange3(tag){
    this.formData.grade_id = tag;
  }
  onChange(framework_id,subject_id) {
    this.formData.framework_id = framework_id;
    this.formData.subject_id = subject_id;
    this.dashboardService.getStandardMap(this.formData).subscribe(response => {
      this.standard = response.data;
    console.log(response);
  });
    this.dashboardService.getIndicatorMap(this.formData).subscribe(response => {
      this.indicator = response.data;
    console.log(response);
  });
  }


  onAddDepartment() {

      // tslint:disable-next-line:max-line-length
      this.getParentCoreMapStn.push({games_id: this.getParentCoreMapStn[0].games_id, grade_id: this.formData.grade_id, gamecoretype: '', framework_id: '', subject_id: '', standard_id: '', Indicators: [{id: '', }]});
      // this.getParentCoreMapStn[0].Indicators.push({indicator_id:''});
  }
  addfunction(index: number) {
    // const i = this.getParentCoreMapStn.length;
      this.getParentCoreMapStn[index].Indicators.push({id: '', indicator_id: ''});
      this.indicatorlength = this.getParentCoreMapStn[index].Indicators.length;
  }

  addfunction2(index1: number, index: number) {
    this.gamesQuestionanswer[index1].question_map[index].indicators.push({id: '', indicator_id: ''});
  }

  onAddQuestionanswer() {
    // tslint:disable-next-line:max-line-length
    this.gamesQuestionanswer.push({game_id: this.game_id, grade_id: this.getParentCoreMapStn[0].grade_id, question_map: [{ question_wight: '', framework_id: '', subject_id: '', standard_id: '', tagging: '1', indicators: [{id: '', }]}]});
  }
  addtagging(index1: number) {
    const length =  this.gamesQuestionanswer[index1].question_map.length;
    // tslint:disable-next-line:max-line-length
    this.gamesQuestionanswer[index1].question_map.push({ question_wight: '', framework_id: '', subject_id: '', standard_id: '', tagging: length + 1, indicators: [{id: '', }]});
  }
  addGameFormSubmit(form) {
    let gamequestion =  this.gamesQuestionanswer.length;
    if(gamequestion > 0){
      this.gamesQuestionanswer[0].game_id = this.game_id;
      this.gamesQuestionanswer[0].grade_id = this.getParentCoreMapStn[0].grade_id;
        this.dashboardService.gamesQuestionanswerUpdate({'gameQuestionanswer': this.gamesQuestionanswer}).subscribe(response => {
          console.log(response);
        });
    }
    this.dashboardService.gamesCoreUpdate({'gameCoreFremVal': this.getParentCoreMapStn}).subscribe(response => {
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
      } else {
        this._response['status'] = false;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }
    });
     this.getParentCoreMapVal[0].file_name = this.formData.files;
    this.dashboardService.gamesUpdate(this.getParentCoreMapVal[0]).subscribe(response => {
      console.log(response);
    });
  }

  selectFile(event) {
    console.log(event);
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.getfilename = file;
    this.uploadFileService.uploadExcalFile(this.getfilename);

  }
  import() {
    this.Url = localStorage.getItem('upload-img');
    this.dashboardService.sendExcalFile({'files': this.Url, 'name': this.formData.files}).subscribe(response => {
      if (response.status) {
        // form.reset();
          this._response2['status'] = true;
          this._response2['message'] = response.message;
          this._response2['alert'] = 'alert alert-success';
        } else {
          this._response2['status'] = true;
          this._response2['message'] = response.message;
          this._response2['alert'] = 'alert alert-danger';
        }
     });
  }


  excalget() {
    this.dashboardService.getGameTaggingHealth({'name': this.formData.files}).subscribe(res => {
      this.getSlideMaster = res.data;
    });
  }
}


