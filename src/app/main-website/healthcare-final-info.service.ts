import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { UploadFileService } from 'app/upload-file.service';

@Injectable()
export class HealthcareFinalInfoService {
  public healthvalueformlocal;
  public inputData;
  public health_Context_valu;
  public objData;
  Url;
  // public contextData;
data;
  constructor(private http: Http) { }

   getfinalEmail(formData){
      var headers = new Headers();

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        var DoctInfoData = '&email=' + formData.email + '&Name=' + formData.firstname + "" + formData.lastname + '&RegisterNo=' + formData.regNo
        +'&JobTitle=' + formData.job + '&PhoneNo=' + formData.phone_number + '&EnquiryType=' + formData.enquiry + '&BestTimeCalling=' + formData.best_time
        +'&DecisionAuthority=' + formData.institute + '&HowSoonExpectNidara=' + formData.client +  '&IssuePractice=' + formData.issues + '&HowNidara=' + formData.nidara
//institutedetails
        +'&InstituteName=' + formData.nameInst + '&Address=' + formData.address + '&Address_1=' + formData.address_1 +
         '&city=' + formData.city + '&country=' + formData.country + '&InstitutePhoneNo=' + formData.teleNo +
         '&website=' + formData.website + '&InstituteEmail=' + formData.Instemail + '&Fax=' + formData.fax +
//contextDetails
         '&Services=' + formData.services + '&PrivatePractice=' + formData.practice + '&FileCV=' + formData.imageUpload;

        console.log(DoctInfoData)
        this.http.post('https://api.nidarachildren.com:3443/sendDoctoremail', DoctInfoData, {headers: headers}).subscribe((data) => {
          console.log(data)
            if (data.json().sucess) {
            console.log(data.json)
              console.log('mail sent');
            }else{
              console.log("email dont have a value")
            }
         });


   }

}
