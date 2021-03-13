import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-addmore-question',
  templateUrl: './addmore-question.component.html',
  styleUrls: ['./addmore-question.component.css']
})
export class AddmoreQuestionComponent implements OnInit {
  public formData:any={};
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  gamelisttaging:any=[];
  gamedetails:any=[];
  constructor(private dashboardService:DashboardService) {
    this.dashboardService.getGameViewInfo().subscribe(response =>{
      this.gamelisttaging = response;
    });
    this.dashboardService.getgamesInfo().subscribe(response =>{
      this.gamedetails = response.data;
      console.log(this.gamedetails);
    });
   }

  ngOnInit() {
  }
  addGameFormSubmit(form){
    //this.formData = this.formData_2
    this.dashboardService.gamesQuestionanswerCreate(this.formData).subscribe(response =>{
      console.log(response);
      if(response.status){
      form.reset();
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-success";
      // setTimeout(() => {
      //   this.router.navigate(['/signin']);
      // }, 5000);
      }
      else{
        this._response['status'] = true;
        this._response['message'] = response.message;
        this._response['alert'] = "alert alert-danger";
      }
    });
}

}
