import { Component, OnInit } from '@angular/core';
import { CONSTANTS, Router, ActivatedRoute, Title, AppService, AuthenService, ParentsService,ComponentsService } from './../../app.index';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentDate = new Date();
  constructor(private authenService:AuthenService, private router:Router,private parentsService:ParentsService) {

   }

  ngOnInit() { window.scrollTo(0, 0);
    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response=>{
      if(response.status){
        this.userInfo();
      }
      else{
        this.router.navigate(['/signin']);
      }
    })
  }

  userInfo(): void{
    this.parentsService.getUserInfoByToken().subscribe(response=>{
      if(response.status){
        localStorage.setItem('email',response.user_info.email);
        localStorage.setItem('user_id',response.user_info.id);
        if(response.user_info.status === '4' || response.user_info.user_type !== "doctor"){
          localStorage.clear();
          this.router.navigate(['/signin']);
        }
      }
      else{
        this.router.navigate(['/signin']);
      }
    })
  }

}
