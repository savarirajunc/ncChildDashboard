import { Injectable } from '@angular/core';
import { POSTURL } from './../app.config';
import {Http, Headers} from '@angular/http';

// App Service
import { AppService } from './../app.service';
@Injectable()
export class AuthenService {

  constructor(private http: Http, private appService: AppService) { }
  /**
   * token checking
   * @Component: every component validating the token
   * @param: token and body
   * @return: true or false
   *
   */
checkToken(token){
  this.appService.debugConsole({ "info": "checkToken", "inputData": token, "url": POSTURL.CHECKTOKEN });
  return this.appService.tokenchecking({},POSTURL.CHECKTOKEN,token);
}

  /**
   * @Component: Sign In Component
   * @param: useremail and Password
   * @return: Objects token message
   * @method: POSt
   */
  getLogin(inputdataObject) {
    this.appService.debugConsole({ "info": "getLogin", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.login });
    return this.appService.postAPIData("",POSTURL.AUTH_INFO.login, inputdataObject);
  }

  /**
   * @Component:Session Id
   * @param: useremail and Password
   * @return: Objects token message
   * @method: POSt
   */
  getSesstionId(inputdata) {
    this.appService.debugConsole({ 'info': 'getSesstionId', 'inputData': inputdata, 'url': POSTURL.GAME_INFO.sessionid });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.sessionid, inputdata);
   }

  /**
   * @Component: Header
   * @param: token
   * @return: true ? false
   * @method: POST
   */
  getLogout(token){
     this.appService.debugConsole({ "info": "getLogout", "inputData": token, "url": POSTURL.AUTH_INFO.logout });
    return this.appService.postAPIData(token,POSTURL.AUTH_INFO.logout, token);
  }

  /**
    * @Component: Sign Up Component
    * @param: all user details
    * @return: Objects token message
    * @method: POSt
    */
  registerUser(inputdataObject) {
    this.appService.debugConsole({ "info": "registerUser", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.register });
    return this.appService.postAPIData("",POSTURL.AUTH_INFO.register, inputdataObject);
  }

  /**
    * @Component userdelete
    * @param: all user details
    * @return: Objects token message
    * @method: POSt
    */
  deleteUser(inputdataObject) {
    this.appService.debugConsole({ "info": "deleteUser", "inputData": inputdataObject, "url": POSTURL.PARENTS.delete });
    return this.appService.postAPIData("",POSTURL.PARENTS.delete, inputdataObject);
  }

  // deleteUser(inputdata) {
  //     this.appService.debugConsole({ "info": "deleteUser", "inputData": inputdata, "url": POSTURL.PARENTS.deactive })
  //     return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.PARENTS.deactive, inputdata);
  //   }

  /**
   * @Component: Parent Dashbaord Component
   * @param: token
   * @return: true?false
   * @method: pOST
   */
  getParentPOPUPValidation(inputdataObject){

       this.appService.debugConsole({ "info": "getParentPOPUPValidation", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.getparentvalidation });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.AUTH_INFO.getparentvalidation, inputdataObject);

  }

  /**
   * @Component: ChangePassword
   * @param: Objects
   * @return: Objects
   * @method: POST
   */
  changePassword(inputdataObject){
   this.appService.debugConsole({ "info": "changePassword", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.changepassword });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.AUTH_INFO.changepassword, inputdataObject);
  }

  /**
   * @Component: ForgotPassword Component
   * @param inputdataObject
   * @return: true? false
   * @method:POST
   */
  forgotPassword(inputdataObject){
   this.appService.debugConsole({ "info": "forgotPassword", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.forgotpassword });
    return this.appService.postAPIData("",POSTURL.AUTH_INFO.forgotpassword, inputdataObject);
  }

  /**
   * @Component: Reset password Component
   * @param: token, newpassword, confirmpassword
   * @return: true ? false
   * @method: POST
   */
  resetPassword(inputdataObject,token){
   this.appService.debugConsole({ "info": "resetPassword", "inputData": inputdataObject, "url": POSTURL.AUTH_INFO.resetpassword });
    return this.appService.postAPIData(token,POSTURL.AUTH_INFO.resetpassword, inputdataObject);
  }


  /**
   * @Component: Get Parent Information Component
   * @param: token, newpassword, confirmpassword
   * @return: true ? false
   * @method: POST
   */


  getUserInfoByToken(){
    this.appService.debugConsole({ "info": "getUserInfoByToken", "inputData": localStorage.getItem("token"), "url": POSTURL.AUTH_INFO.getuserinfobytoken });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.AUTH_INFO.getuserinfobytoken,{});
  }

  addProductCart(inputdata){
    this.appService.debugConsole({ "info": "getSesstionId", "inputData":inputdata, "url": POSTURL.WEBADMIN.addproductcart });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.addproductcart,inputdata);
   }

   addProductOrder(inputdata){
    this.appService.debugConsole({ "info": "addProductOrder", "inputData":inputdata, "url": POSTURL.WEBADMIN.ORDER.addproductorder });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.ORDER.addproductorder,inputdata);
   }


   emailVerifySend(inputdata){
    this.appService.debugConsole({ "info": "emailVerifySend", "inputData":inputdata, "url": POSTURL.AUTH_INFO.emailverify });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.AUTH_INFO.emailverify,inputdata);
   }




   sendUserToken(inputdata){
    this.appService.debugConsole({ "info": "sendUserToken", "inputData":inputdata, "url": POSTURL.AUTH_INFO.sendusertoken });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.AUTH_INFO.sendusertoken, inputdata);
   }


   emailSend(formData){
    var headers = new Headers();
    var emailid = 'token='+ formData.token + '&baseUrl='+ formData.baseUrl + '&email='+  formData.email;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        console.log(emailid)
       this.http.post(' http://localhost:3000/tokenSend', emailid, {headers: headers}).subscribe((data) => {
           if (data.json().sucess) {
             console.log('mail sent');
             //this.pageRouting();
             }
            else {

             }
        });
   }


}
