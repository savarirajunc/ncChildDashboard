import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ChildrenService } from './../../service/children.service';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-child-nutrition',
  templateUrl: './child-nutrition.component.html',
  styleUrls: ['./child-nutrition.component.css']
})
export class ChildNutritionComponent implements OnInit {

  public _response: any = { "status": false, "message": "" };

  public formData: any = {}; // ngModel formData Objects intiliaze
  public nutriselectQuestions;
  // sharedService Initilaze
  public addServiceInit: boolean = false;
  public addService;
  public updateService;
  public addNutrinfo: boolean = false;



  constructor(private router: Router, private authenService: AuthenService,private sharedService:SharedService,private titleService: Title, private appService: AppService, private childrenService: ChildrenService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;
        console.log("astronaut", astronaut);
       // this.getEduBoardInfo();
       // this.getEduGradeInfo();
       this.getNutrSelectQuestion();
       // this.getEduInformation(); // get Children Info in kid id
      // this.getGradeandBoardofEducation();

      });

    sharedService.addmissService$.subscribe(addService => {

      console.log("addService", addService);
      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.CHILDRENNUTRITION);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {
        this.getNutrSelectQuestion();
        // this.getEduBoardInfo();
        // this.getEduGradeInfo();

        // this.getGradeandBoardofEducation();



      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });


  }


  selectOptions(options){

    this.nutriselectQuestions.forEach(element => {
      if(element.id == options.id){

       if(options.answers.option_name == "yes"){
         element.answers.option_name = "no";

       }else{
         element.answers.option_name = "yes";
       }
       let res = element.options.filter(items=> items.id != element.answers.option_id );
       element.answers.option_id = res[0].id


      }

    });
    console.log(this.nutriselectQuestions);
  }

  getNutrSelectQuestion(){
    this.childrenService.getEduSelectQuestion({"category_name":"nutrition","nidara_kid_profile_id": localStorage.getItem('selectedKid')}).subscribe(response=>{
      this.appService.debugConsole({ "getNutrSelectQuestion": response }) // console
     if(response.status){
         this.nutriselectQuestions = response.data;
         this._response['status'] = false;
         this._response['message'] = response.message;
       }else{
        this._response['status'] = true;
        this._response['message'] = response.message;
       }
    });

  }

  data:Object = {};
  nutritionFormSubmit(form){

    let formData = this.nutriselectQuestions.map(items =>{
      return { questions_id: items.answers.question_id, options_id: items.answers.option_id }
    })
    this.data['questionarie'] = formData;
    this.data['nidara_kid_profile_id'] = localStorage.getItem('selectedKid');
    this.data['category_name'] = "nutrition";
    this.data['session_id'] = "1";
    this.data['is_correct'] = "1";

    console.log(this.data);
    this.childrenService.createNutrition(this.data).subscribe(response => {

            this.appService.debugConsole(response)// New Profile Added Successfully : Response
            if (response.status) {
              this._response['status'] = true;
              this._response['message'] = response.message;
              this.sharedService.updatemissService(this.updateService);
            } else {
              this._response['status'] = true;
              this._response['message'] = response.message;
            }
          });
  }
}
