import { AuthenService } from './../service/authen.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-admin',
  templateUrl: './web-admin.component.html',
  styleUrls: ['./web-admin.component.css']
})
export class WebAdminComponent implements OnInit {

  constructor(private authenService: AuthenService, private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response =>{
      if (response.status) {
        this.getUserinfo();
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }
  getUserinfo() {
    this.authenService.getUserInfoByToken().subscribe(res=>{
      if(res.status){
        if(res.user_info.user_type !== 'admin'){
          this.router.navigate(['/Home']);
        }
      } else {
        this.router.navigate(['/signin']);
      }
    })
  }

}
