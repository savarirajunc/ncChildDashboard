import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './../app.service';
import { POSTURL} from './../app.config';
@Injectable()
export class AuthGuardService implements CanActivate{
  appService;
  constructor(private router: Router,appService: AppService) { 
    this.appService = appService;

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


   // this.appService.tokenchecking({},POSTURL.CHECKTOKEN,localStorage.getItem('token')).subscribe(response=>{
    
     if(localStorage.getItem('token')){  // logged in so return true
      return true;
     }
    // })
   
  
    // not logged in so redirect to login page with the return url
   // this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
   this.router.navigate(['/signin']);
   return false;
}
}
