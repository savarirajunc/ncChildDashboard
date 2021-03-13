import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenService } from '../../service/authen.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-remove-parent',
  templateUrl: './add-remove-parent.component.html',
  styleUrls: ['./add-remove-parent.component.css']
})
export class AddRemoveParentComponent implements OnInit {
  parent: any=[];
  parent_status:any= [];
  public _response: any = { "status": false, "alert":'success', 'message': '' };
 public formData: any = {};
 public formdeleteData: any = {};
 public btndisabled = false;
 currentPage =0;
 limitpageNav =10;
 pageNav =0;
 pageArray:number[] =[];
 pageIdx = 0;

  constructor(private authenService: AuthenService, private router: Router, private dashboardService: DashboardService, private location: Location ) {

    this.authenService.registerUser(this.formData).subscribe(response => {
      console.log(response);
    });
  }
   ngOnInit() {
     this.dashboardService.getParentInfo().subscribe(response => {
       this.parent = response.data.games;
       for (let i = 0; i < this.parent.length; i++) {
         this.pageArray.push(i);
       }
       this.pageNav = this.parent.length;
     });
}
setGameDetailsView(idx: number) {
  this.currentPage = idx;
}
selectPage() {
    this.currentPage += 1;
    if (this.currentPage % 10 === 0) {
      this.pageIdx += 1;
    }
}
selectPageBack() {
  if (this.currentPage % 10 === 0) {
    this.pageIdx -= 1;
  }
  this.currentPage -= 1;

}
signUpFormSubmit(form) {
  this.btndisabled = true;

    this.authenService.registerUser(this.formData).subscribe(response => {

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

      setTimeout(() => {
        this._response['status'] = false;
        this.btndisabled = false;
      }, 5000);
    });
  }
  deleteParent(id) {
    this.authenService.deleteUser({id}).subscribe(response => {
      // this.router.navigate.load(['/Dashboard/addandremove']);
      location.reload();
      console.log(response);
    });
  }
}
