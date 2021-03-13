 import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class ContactserviceService {

  constructor(private http: Http, private router:Router) { }
  addNew(usercreds) {
    var headers = new Headers();
    var emailid = 'username=' + usercreds.email + '&firstname=' + usercreds.firstname + '&lastname=' + usercreds.lastname
    +'&phone_number=' + usercreds.phone_number + '&audiencetype=' + usercreds.audiencetype + '&inquiry=' + usercreds.inquiry
    + '&message=' + usercreds.message;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        console.log(emailid)
       this.http.post('https://api.nidarachildren.com:3443/sendemail', emailid, {headers: headers}).subscribe((data) => {
           if (data.json().sucess) {
             console.log('mail sent');
             //this.pageRouting();
             }
            else {

             }
        });
     }

     helthCare(healthData){
      var headers = new Headers();
      var emailid = 'username=' + healthData.username + '&firstname=' + healthData.firstname + '&lastname=' + healthData.lastname
      +'&phone_number=' + healthData.phone_number + '&position=' + healthData.position + '&inquiry=' + healthData.inquiry
      + '&organization_name=' + healthData.organization_name + '&message=' + healthData.help;

          headers.append('Content-Type', 'application/X-www-form-urlencoded');

          console.log(emailid)
         this.http.post('https://api.nidarachildren.com:3443/sendemail', emailid, {headers: headers}).subscribe((data) => {
             if (data.json().sucess) {
               console.log('mail sent');
               //this.pageRouting();
               }
              else {

               }
          });
     }

}
