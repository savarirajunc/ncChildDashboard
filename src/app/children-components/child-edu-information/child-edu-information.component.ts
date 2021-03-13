import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ChildrenService } from './../../service/children.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-child-edu-information',
  templateUrl: './child-edu-information.component.html',
  styleUrls: ['./child-edu-information.component.css']
})
export class ChildEduInformationComponent implements OnInit {

  public _response: any = { "status": false,"alert":"info", "message": "" };

  //public formData: any = {}; // ngModel formData anys intiliaze


  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addEduinfo: boolean = false;

  public formData: any = {}; // ngModel formData anys intiliaze
  public eduselectQuestions;


  public selectGradeoption;
  public selectBoardoption;

  public questionaries:any = {};

  defaultChoice;
  constructor(private router: Router,private authenService: AuthenService, private titleService: Title,private sharedService:SharedService, private appService: AppService, private childrenService: ChildrenService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

        this.getEduBoardInfo();
        this.getEduGradeInfo();
        this.getEduSelectQuestion();

       this.getGradeandBoardofEducation();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
  }

  selectOptions(options){

    this.questionaries['questionarie'].forEach(element => {

      if(element.questions_id == options.questions_id){
       element.options_id = options.id;
      }
    });
    this.addService.debugConsole({"questionarie":this.questionaries,options});

  }
  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENEDUINFORMATION);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {
        this.getEduSelectQuestion();
        this.getEduBoardInfo();
        this.getEduGradeInfo();

        this.getGradeandBoardofEducation();



      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


  }


  getEduGradeInfo(){
    this.childrenService.getEduGardeInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduGardeInfo": response }) // console
      if(response.status){
        this.selectGradeoption = response.data;
      }


    });
  }
  getEduBoardInfo(){
    this.childrenService.getEduBoardInfo().subscribe(response=>{
      this.appService.debugConsole({ "getEduBoardInfo": response }) // console
      if(response.status){
        this.selectBoardoption = response.data;
      }
    });
  }


  getEduSelectQuestion(){
    this.childrenService.getEduSelectQuestion({"category_name":"personalized_education","nidara_kid_profile_id": localStorage.getItem('selectedKid')}).subscribe(response=>{
      this.appService.debugConsole({ "getEduSelectQuestion": response }) // console
     if(response.status){
         this.eduselectQuestions = response.data;
         const questionAnswer = response.data.map(options => {
          return { questions_id: options.answers.question_id, options_id:options.answers.option_id };
        });

        this.questionaries['questionarie'] = questionAnswer;


      //   this.getEduInformation(); // get Children Info in kid id
       }
    });

  }

  getEduInformation() {
    this.childrenService.getidEduInformation({"category_name":"personalized_education","nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getidEduInformation": response }) // console
      if (response.status) {


        // this._response['status'] = false;
        // this.addEduinfo = true;
        // this.formData = response.data;
      } else {
        // this.addEduinfo = false;
        // this.formData = {};
        // this._response['status'] = true;
        // this._response['message'] = response.message;
      }
    });
  }


  submitIntrestValue(form){

    this.formData['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.updateGradeandBoardofEducation(this.formData);
    this.questionaries['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.questionaries['session_id'] = "1";
    this.questionaries['is_correct'] = "1";
   this.updateEduInformation(this.questionaries);
  }


  createEduInformation(formData){
    this.appService.debugConsole({ "createEduInformation": formData })
    this.childrenService.createEduInformation(formData).subscribe(response => {

      this.appService.debugConsole({"createEduInformation":response})// New Profile Added Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });

  }

  updateEduInformation(formData){
    this.appService.debugConsole({ "updateEduInformation": formData })
    this.childrenService.updateEduInformation(formData).subscribe(response => {

      this.appService.debugConsole({"updateEduInformation":response})// edit Profile Updated Successfully
      if (response.status) {
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
      }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
  }

  getGradeandBoardofEducation(){

    this.childrenService.getChildrenProfileInfo({ "nidara_kid_profile_id": localStorage.getItem('selectedKid') }).subscribe(response => {
      this.appService.debugConsole({ "getGradeandBoardofEducation": response });
      if (response.status) {
        this.formData = response.data;
        this._response['status'] = false;

      } else {
        this.formData = {};
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-info";
      }
    });
  }

  updateGradeandBoardofEducation(formData){
    this.appService.debugConsole({ "updateGradeandBoardofEducation": formData })
    this.childrenService.updateGradeandBoardofEducation(formData).subscribe(response => {

            this.appService.debugConsole({"updateEduInformation":response})// edit Profile Updated Successfully
            if (response.status) {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-success";
            }else{
              this._response['status'] = true;
              this._response['message'] = response.message;
              this._response['alert'] = "alert alert-danger";
            }
          });
  }

}
