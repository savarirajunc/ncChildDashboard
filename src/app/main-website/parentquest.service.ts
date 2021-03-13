
import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp } from '@angular/http';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParentquestService {
  InfoData:any = [];

  constructor(private http: Http, private _jsonp: Jsonp, private httpClient: HttpClient ) { }
  getServer() {

  }


  addNewData(child_Data){
console.log(child_Data)
    var headers = new Headers();

    var InfoData = 'email=' + child_Data.email + '&Name=' + child_Data.firstname + "" + child_Data.lastname
    +'&CaregiverType=' + child_Data.CaregiverType + '&ChildName=' + child_Data.childfirstname + "" + child_Data.childlastname + '&gender=' + child_Data.gender + '&Height=' + child_Data.Height + '&Weight=' + child_Data.Weight + '&DoctorName=' + child_Data.DoctorName +  '&Date_of_birth=' + child_Data.dob_date + "-" +   child_Data.dob_month + "-" +  child_Data.dob_years;

    console.log(InfoData)

    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    console.log(InfoData)
    this.http.post('https://api.nidarachildren.com:3443/sendparentemail', InfoData, {headers: headers}).subscribe((data) => {
      console.log(data)
      // console.log("aaa")
        if (data.json().sucess) {
        console.log(data.json)
          console.log('mail sent');
        }else{
          console.log("email dont have a value")
        }
     });
  }


  addQuesData(que) {
    // var headers = new Headers();
console.log("inside the question")
    var QuesData = 'ques=' + que.ques ;

    console.log(QuesData)

  }
  addQuesData_1(que_1) {
    var questData = 'ques_1='+ que_1.ques_1;

  }
  addQuesData_2(que_2) {
    var questData_2 = 'ques_2='+ que_2.ques_2;
  }






}
