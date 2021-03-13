import { AuthenService } from './../service/authen.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-main-deshboard',
  templateUrl: './main-deshboard.component.html',
  styleUrls: ['./main-deshboard.component.css']
})
export class MainDeshboardComponent implements OnInit {

  constructor(private router:Router,private authenService: AuthenService ) { }

  ngOnInit() {
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(res=>{
      if(res.status){

      }
      else{
        this.router.navigate(['/signin'])
      }
    });
  }
}
