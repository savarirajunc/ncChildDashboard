import { Component, OnInit } from '@angular/core';
import { AppService, } from './../../app.service';
import { ChildrenService } from './../../service/children.service'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';


import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-child-interest-deve',
  templateUrl: './child-interest-deve.component.html',
  styleUrls: ['./child-interest-deve.component.css']
})
export class ChildInterestDeveComponent implements OnInit {

  public _response: any = { "status": false, "alert":"info","message": "" };
  // Two-way Binding Initilaze
  public formData: any = {}; // ngModel formData Objects intiliaze

    public dailyQuestionaries;
    public questionaries:any = {};
    // sharedService Initilaze
    public addServiceInit: boolean = false;
    public addService;
    public updateService;
    public addChild: boolean = false;
    public addCareinfo: boolean = false;

  constructor(private router: Router, private titleService: Title,private appService: AppService, private sharedService: SharedService, private authenService: AuthenService, private childrenService: ChildrenService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

       this.getInterestDeveQuestion();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
   }

  ngOnInit() { window.scrollTo(0, 0);

    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENINTERESTDEV);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

        this.getInterestDeveQuestion();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
  }

  // getInterestDeveByID() {
  //   this.childrenService.getInterestDeveByID({ "nidara_kid_profile_id": localStorage.getItem('selectedKid'),"category_name":"interest_development" }).subscribe(response => {
  //     this.appService.debugConsole({ "getInterestDeveByID": response }) // console
  //     if (response.status) {
  //       this._response['status'] = false;
  //       this.addCareinfo = true;
  //       this.formData = response.data;
  //     } else {
  //       this.addCareinfo = false;
  //       this.formData = {};
  //       this._response['status'] = true;
  //       this._response['message'] = response.message;
  //     }
  //   });
  // }
  selectOptions(options){

      this.questionaries['questionarie'].forEach(element => {

        if(element.questions_id == options.questions_id){
         element.options_id = options.id;
        }
      });
      console.log("questionarie",this.questionaries,options);

    }

    getInterestDeveQuestion(){

      this.childrenService.getEduSelectQuestion({"nidara_kid_profile_id": localStorage.getItem('selectedKid'),"category_name":"interest_development"}).subscribe(response => {
        this.appService.debugConsole({ "getEduSelectQuestion": response }) // console
        if (response.status) {
          this._response['status'] = false;
          this.addCareinfo = true;
          this.dailyQuestionaries = response.data;
          const questionAnswer = response.data.map(options => {
            return { questions_id: options.answers.question_id, options_id:options.answers.option_id };
          });

          this.questionaries['questionarie'] = questionAnswer;
        } else {
          this.addCareinfo = false;

        }
      });
    }

    interestDeveFormSubmit(form){
      this.questionaries['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
      this.questionaries['session_id'] = "1";
      this.questionaries['is_correct'] = "1";
     this.updateEduInformation(this.questionaries);
    }

    updateEduInformation(formData){
      this.appService.debugConsole({ "updateEduInformation": formData })
      this.childrenService.updateInterestDeveInformation(formData).subscribe(response => {

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
