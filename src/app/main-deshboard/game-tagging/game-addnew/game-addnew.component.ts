import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { StanderFilterPipe } from '../stander-filter.pipe';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { UploadFileService } from '../../../upload-file.service';
declare var $: any;
@Component({
  selector: 'app-game-addnew',
  templateUrl: './game-addnew.component.html',
  styleUrls: ['./game-addnew.component.css']
})
export class GameAddnewComponent implements OnInit {
  public formData: any = {};
  public  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  public  _response2: any = { 'status': false, 'alert': 'info', 'message': '' };
  contactForm: FormGroup;
  questionForm: FormGroup;
    grade: any = [];
    coreframwork: any = [];
    subjects: any = [];
    indicatormap: any = [];
    standardmap: any = [];
    getSlideMaster: any = [];
    getslidevalue: any = [];
    datacapturevalau: any = [];
    selectedFiles: FileList;
    Url;
    getfilename;
    gamevalue;
    gamequestionvalue;
    game_id;
    grade_id;
    getExcelSheet;
  constructor(private dashboardService: DashboardService, private uploadFileService: UploadFileService, private router: Router, private formBuilder: FormBuilder) {
    this.initForm();
    this.dashboardService.getCoreFrameworkInfo().subscribe(response => {
      this.coreframwork = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response => {
      this.subjects = response.data;
    });
    this.dashboardService.getGradeInfo().subscribe(response => {
      this.grade = response.data;
    });
    this.dashboardService.getGameExcelSheet().subscribe(response =>{
      this.getExcelSheet = response.data;
    });
  }
  newtestform: any = [
    {
      id: '1',
      value: 'One',
      data: [
        {
        id: '',
        value: '',
      }
      ]
    },
    {
      id: '2',
      value: 'Two',
      data: [
        {
        id: '',
        value: '',
      }
      ]
    }
];

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

addrow(i) {
  this.getslidevalue[i].push([{id: this.getSlideMaster[i].id, heath_name: this.getSlideMaster[i].heath_name, heath_definition: this.getSlideMaster[i].heath_definition}]);
}

addonemorerow(event) {
  this.newtestform[event].data.push([{ id: '', value: ''}]);
}


addclumes() {
  const i = this.getslidevalue.length;
  const j = this.getSlideMaster[0].slidcategory.length;
  if (i >= j) {
    for (let n = 0; n <= this.getSlideMaster.length; n++) {
      this.getSlideMaster[n].slidcategory.push({category_name: '', id: ''});
    }
  }
  this.getslidevalue.push([{slide: this.getSlideMaster[0].slidcategory, slidevalue: '', weightag: ''}]);

}

getfullform(i) {
  this.newtestform.push([{
    id: '1',
    value: 'One',
    data: [
      {
      id: '',
      value: '',
    }
    ]
  }]);
}

  ngOnInit() {

  }
  private initForm(): void {
    this.contactForm = this.formBuilder.group({
        grade_id: '',
        games_name: '',
        games_folder: '',
        daily_tips: '',
        files: '',
        gender_girl: true,
        gender_boy: true,
        gameCoreFrame: this.formBuilder.array([
        this.formBuilder.group({
          framework_id: '',
          subject_id: '',
          gamecoretype: '1',
          standard_id: '',
          indicator_id: '',
          indicator_id1: '',
          indicator_id2: '',
          indicator_id3: ''
        })
      ]),
    });

    this.questionForm = this.formBuilder.group({
      gameQuestionanswer: this.formBuilder.array([
        this.formBuilder.group({
          question_id: '',
          question: '',
          answer: '',
          answer_des: '',
          game_type: '',
          game_type_value: '',
          questionCoreFrame: this.formBuilder.array([
            this.formBuilder.group({
              weightage: '',
              quesframework_id: '',
              quessubject_id: '',
              quesstandard_id: '',
              quesindicator_id: '',
              quesindicator_id1: '',
              quesindicator_id2: '',
              quesindicator_id3: ''
            })
          ]),
        })
      ])
    });
  }
  getDepartments(): FormArray {
    return this.contactForm.get('gameCoreFrame') as FormArray;
  }

  getQuestionanswer(): FormArray {
    return this.questionForm.get('gameQuestionanswer') as FormArray;
  }
  getQuestionCoreFram( index: number ): FormArray {
    return this.getQuestionanswer().at(index).get('questionCoreFrame') as FormArray;
  }
  onAddDepartment(): void {
    this.getDepartments().push(
      this.formBuilder.group({
        framework_id: '',
        subject_id: '',
        gamecoretype: '1',
        standard_id: '',
        indicator_id: '',
        indicator_id1: '',
        indicator_id2: '',
        indicator_id3: ''
      })
    );
  }

  onAddQuestionanswer(): void {
    this.getQuestionanswer().push(
      this.formBuilder.group({
        question_id: '',
        question: '',
        answer: '',
        answer_des: '',
        game_type: '',
        game_type_value: '',
        questionCoreFrame: this.formBuilder.array([
          this.formBuilder.group({
            weightage: '',
            quesframework_id: '',
            quessubject_id: '',
            quesstandard_id: '',
            quesindicator_id: '',
            quesindicator_id1: '',
            quesindicator_id2: '',
            quesindicator_id3: ''
          })
        ]),
      })
    );
  }
  addquestagging(index: number): void {
    this.getQuestionCoreFram(index).push(
        this.formBuilder.group({
          weightage: '',
          quesframework_id: '',
          quessubject_id: '',
          quesstandard_id: '',
          quesindicator_id: '',
          quesindicator_id1: '',
          quesindicator_id2: '',
          quesindicator_id3: ''
        })
    );
  }

  getGender() {
    this.gamevalue = this.contactForm.getRawValue();
  }



  onSubmit(form): void {
     console.log(this.contactForm.getRawValue());
     this.gamevalue = this.contactForm.getRawValue();
     if(this.gamevalue.gender_girl == true && this.gamevalue.gender_boy == true){
      this.gamevalue.tina = 1;
      this.gamevalue.rahul = 1;
     }
     else if(this.gamevalue.gender_girl == true){
      this.gamevalue.tina = 1;
      this.gamevalue.rahul = 0;
     }
     else if(this.gamevalue.gender_boy == true){
      this.gamevalue.tina = 0;
      this.gamevalue.rahul = 1;
     }
     else{
      this.gamevalue.tina = 0;
      this.gamevalue.rahul = 0;
     }
     this.gamevalue.file_name = this.gamevalue.files;
     this.dashboardService.gamesCreate(this.gamevalue).subscribe(response => {
       console.log(response);
       if (response.status) {
       // form.reset();
        $('#game-form').css('display', 'none');
        $('#question-form').css('display', 'block');
        this.game_id = response.data[0].game_id;
        this.grade_id = response.data[0].grade_id;
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = 'alert alert-success';
       } else {
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = 'alert alert-danger';
       }
      //  location.reload();
     });
   }

   questionAnswer(form) {
    this.gamequestionvalue = this.questionForm.getRawValue();
    this.gamequestionvalue.game_id = this.game_id;
    this.gamequestionvalue.grade_id = this.grade_id;
    this.dashboardService.gamesQuestionanswerCreate(this.gamequestionvalue).subscribe(response => {
      console.log(response);
      if (response.status) {
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-success';
      // setTimeout(() => {
      //   this.router.navigate(['/signin']);
      // }, 5000);
      } else {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = 'alert alert-danger';
      }
    });
   }
  //  onSubmitValue(form) {
  //   return this.getSlideMaster.get();
  //  }

  onChange() {
    this.dashboardService.getStandardMap(this.contactForm.getRawValue()).subscribe(response => {
        this.standardmap = response.data;
    });
    this.dashboardService.getIndicatorMap(this.contactForm.getRawValue()).subscribe(response => {
      this.indicatormap = response.data;
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
    this.dashboardService.sendExcalFile({'files': this.Url, 'name': this.getfilename.name}).subscribe(response => {
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
    this.gamevalue = this.contactForm.getRawValue();
   // this.getfilename.name = this.gamevalue.files;
    this.dashboardService.getGameTaggingHealth({'name': this.gamevalue.files}).subscribe(res => {
          this.getSlideMaster = res.data;
        });
  }
}
