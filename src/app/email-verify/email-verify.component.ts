import { ActivatedRoute } from '@angular/router';
import { AuthenService } from './../service/authen.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {
  emailToken;
  tokenCheck;
  constructor(private authenService: AuthenService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() { window.scrollTo(0, 0);
    this.emailToken = this.activatedRoute.snapshot.params.id;
    this.authenService.emailVerifySend({'encrypt_code': this.emailToken}).subscribe(response=>{
      if(response.status){
        if (response.data.status === '2') {
          this.tokenCheck = 2;
        }
        else {
          this.tokenCheck = 0;
        }
      }
      else{
        this.tokenCheck = 1;
      }
    });
  }

}
