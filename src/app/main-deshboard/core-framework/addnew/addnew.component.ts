import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  public formData:any={};
  guidedlist:any=[];
  coreframworklist:any=[];
  subjects:any=[];
  public _response: any = { "status": false,"alert":"info", "message": "" };
  constructor(private dashboardService:DashboardService) {
    this.dashboardService.getguidedListInfo().subscribe(response =>{
      this.guidedlist = response.data
    });
    this.dashboardService.getCoreFrameworkInfo().subscribe(response =>{
      this.coreframworklist = response;
    });
    this.dashboardService.getsubjectInfo().subscribe(response =>{
      this.subjects = response.data;
    });
   }

  ngOnInit() {
    //this.formData.replace(/"/g, ' ');
    //this.formData = val.replace(/"/g, '&quot;');
  }

  coreframeworkSubmit(form){
    this.dashboardService.standardCreate(this.formData).subscribe(response =>{
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
