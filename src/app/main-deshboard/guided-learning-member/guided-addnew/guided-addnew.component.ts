import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SharedService } from '../../../service/shared.service';
import {AppService} from '../../../app.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-guided-addnew',
  templateUrl: './guided-addnew.component.html',
  styleUrls: ['./guided-addnew.component.css']
})
export class GuidedAddnewComponent implements OnInit {

  public formData: any = {};
  public addServiceInit = false;
  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  guidedForm: FormGroup;
  grade: any = [];
  coreframwork: any = [];
  subjects: any = [];
  public days;
  gamelist: any = [];
  constructor(private dashboardService: DashboardService, private sharedService: SharedService, private appService: AppService, private formBuilder: FormBuilder) {
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
    this.dashboardService.getDaysInfo().subscribe(response => {
      this.days = response.data;
    });
  }

  private initForm(): void {
    this.guidedForm = this.formBuilder.group({
        grade_id: '',
        day_id: '',
        dayGamaGroup: this.formBuilder.array([
        this.formBuilder.group({
          framework_id: '',
          subject_id: '',
          game_id: ''
        })
      ])
    });
  }
  getGameGroup(): FormArray {
    return this.guidedForm.get('dayGamaGroup') as FormArray;
  }
  addGameGroup(): void {
    this.getGameGroup().push(
      this.formBuilder.group({
        framework_id: '',
        subject_id: '',
        game_id: ''
      })
    );
  }
  ngOnInit() {

  }

  onChange() {
    this.dashboardService.getGuidedGameInfo(this.guidedForm.getRawValue()).subscribe(response => {
        this.gamelist = response.data;
    });
  }

  onSubmit(form): void {
     console.log(this.guidedForm.getRawValue());
     this.dashboardService.guidedLearningScheduleCreat(this.guidedForm.getRawValue()).subscribe(response => {
       console.log(response);
       if (response.status) {
       // form.reset();
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = 'alert alert-success';
       } else {
         this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = 'alert alert-danger';
       }
       setTimeout(() => {location.reload(); }, 500);

     });
   }

}
