import { Injectable } from '@angular/core';

import { AppService } from '../app.service';
import { POSTURL } from '../app.config';

@Injectable()
export class MainWebsiteService {

  constructor(private appService: AppService) { }

  checkToken(token) {
    this.appService.debugConsole({ 'info': 'checkToken', 'inputData': token, 'url': POSTURL.CHECKTOKEN });
    return this.appService.tokenchecking({}, POSTURL.CHECKTOKEN, token);
  }


   getNcProduct(inputdata) {
    this.appService.debugConsole({ 'info': 'getNcProduct', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.getproduct });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.getproduct, inputdata);
   }

   getSesstionId(inputdata) {
    this.appService.debugConsole({ 'info': 'getSesstionId', 'inputData': inputdata, 'url': POSTURL.GAME_INFO.sessionid });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.sessionid, inputdata);
   }
   addProductCart(inputdata) {
    this.appService.debugConsole({ 'info': 'getSesstionId', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.addproductcart });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.addproductcart, inputdata);
   }
   productGetById(inputdata) {
    this.appService.debugConsole({ 'info': 'productGetById', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.getproductlist });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.getproductlist, inputdata);
  }


  productSearch(inputdata) {
    this.appService.debugConsole({ 'info': 'productSearch', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.searchproduct });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.searchproduct, inputdata);
  }

  deleteCartPoroduct(inputdata) {
    this.appService.debugConsole({ 'info': 'deleteCartPoroduct', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.deleteCartProduct });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.deleteCartProduct, inputdata);
  }
  registerUser(inputdataObject) {
    this.appService.debugConsole({ 'info': 'registerUser', 'inputData': inputdataObject, 'url': POSTURL.AUTH_INFO.register });
    return this.appService.postAPIData('', POSTURL.AUTH_INFO.register, inputdataObject);
  }

  address(inputdataObject) {
    this.appService.debugConsole({ 'info': 'address', 'inputData': inputdataObject, 'url': POSTURL.AUTH_INFO.address });
    return this.appService.postAPIData('', POSTURL.AUTH_INFO.address, inputdataObject);
  }

  getByCouponValu(inputData) {
    this.appService.debugConsole({ 'info': 'getByCouponValu', 'inputData': inputData, 'url': POSTURL.WEBADMIN.COUPON.setCouponDiscount });
    return this.appService.postAPIData('', POSTURL.WEBADMIN.COUPON.setCouponDiscount, inputData);
  }

  getByCouponCode(inputData) {
    this.appService.debugConsole({ 'info': 'getByCouponCode', 'inputData': inputData, 'url': POSTURL.WEBADMIN.COUPON.getbycouponcodetype });
    return this.appService.postAPIData('', POSTURL.WEBADMIN.COUPON.getbycouponcodetype, inputData);
  }

  /**.
   * @Component: Sign In Component
   * @param: useremail and Password
   * @return: Objects token message
   * @method: POSt
   */
  getLogin(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getLogin', 'inputData': inputdataObject, 'url': POSTURL.AUTH_INFO.login });
    return this.appService.postAPIData('', POSTURL.AUTH_INFO.login, inputdataObject);
  }

  addProductOrder(inputdata) {
    this.appService.debugConsole({ 'info': 'addProductOrder', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.ORDER.addproductorder });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.ORDER.addproductorder, inputdata);
   }

   addPaymentOrder(inputdata) {
    this.appService.debugConsole({ 'info': 'addPaymentOrder', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.payment });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.payment, inputdata);
   }

   sendUserToken(inputdata) {
    this.appService.debugConsole({ 'info': 'sendusertoken', 'inputData': inputdata, 'url': POSTURL.AUTH_INFO.sendusertoken });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.AUTH_INFO.sendusertoken, inputdata);
   }

   sendPosttokenSend(inputdata) {
    this.appService.debugConsole({ 'info': 'sendPosttokenSend', 'inputData': inputdata, 'url': POSTURL.AUTH_INFO.posttokenSend });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.AUTH_INFO.posttokenSend, inputdata);
   }

   sendProductDetaile(inputdata) {
    this.appService.debugConsole({ 'info': 'sendPosttokenSend', 'inputData': inputdata, 'url': POSTURL.AUTH_INFO.productmailsend });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.AUTH_INFO.productmailsend, inputdata);
   }

   successToken(inputdata) {
    this.appService.debugConsole({ 'info': 'successToken', 'inputData': inputdata, 'url': POSTURL.AUTH_INFO.successtokensend });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.AUTH_INFO.successtokensend, inputdata);
   }


   getByType(inputdata) {
    this.appService.debugConsole({ 'info': 'getByType', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.getByTypeId});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.getByTypeId, inputdata);
   }


   childRegister(inputdata) {
    this.appService.debugConsole({ 'info': 'childRegister', 'inputData': inputdata, 'url': POSTURL.CHILDREN.childResgiter});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.childResgiter, inputdata);
   }



   getClientIp() {
    this.appService.debugConsole({'info': 'getClientIp', 'inputdata': '', 'url': POSTURL.WEBADMIN.GETCLIENTIP});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.GETCLIENTIP, {});

  }

  sendNotifyme(inputdata) {
    this.appService.debugConsole({ 'info': 'sendNotifyme', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.NOTIFYME});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.NOTIFYME, inputdata);
   }


   emailSendUsers() {

    this.appService.debugConsole({ 'info': 'emailSendUsers', 'inputData': '', 'url': POSTURL.EMAILS.emailsend});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.EMAILS.emailsend);
   }

   emailSendParendqus(inputdata) {

    this.appService.debugConsole({ 'info': 'emailSendParendqus', 'inputData': inputdata, 'url': POSTURL.EMAILS.sendmailinparend});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.sendmailinparend, inputdata);
   }


   saveOrderTotalAmout(inputdata) {

    this.appService.debugConsole({ 'info': 'saveOrderTotalAmout', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.ORDER.ordertotalamount});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.ORDER.ordertotalamount, inputdata);
   }

   sendInvoiceEmail(inputdata) {
    this.appService.debugConsole({ 'info': 'sendInvoiceEmail', 'inputData': inputdata, 'url': POSTURL.EMAILS.invoceemailsend});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.invoceemailsend, inputdata);
   }


   getParentQusInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'getParentQusInfo', 'inputData': inputdata, 'url': POSTURL.PARENTS.getparentgamefirst});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getparentgamefirst, inputdata);
   }

   sendHealthAnswer(inputdata) {
    this.appService.debugConsole({ 'info': 'sendHealthAnswer', 'inputData': inputdata, 'url': POSTURL.HEALTH.create});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.create, inputdata);
   }

   sendChildinfo(inputdata) {
    this.appService.debugConsole({ 'info': 'sendChildinfo', 'inputData': inputdata, 'url': POSTURL.HEALTH.sevechildinfo});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.sevechildinfo, inputdata);
   }

   sendquestionAnswer(inputdata) {
    this.appService.debugConsole({ 'info': 'sendquestionAnswer', 'inputData': inputdata, 'url': POSTURL.HEALTH.sendparentanswer});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.sendparentanswer, inputdata);
   }



   sendCompanyEnquiry(inputdata) {
    this.appService.debugConsole({ 'info': 'sendCompanyEnquiry', 'inputData': inputdata, 'url': POSTURL.EMAILS.companyenquiry});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.companyenquiry, inputdata);
   }

   sendContactUs(inputdata) {
    this.appService.debugConsole({ 'info': 'sendContactUs', 'inputData': inputdata, 'url': POSTURL.EMAILS.sendcontact});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.sendcontact, inputdata);
   }

   sendDoctonInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'sendDoctonInfo', 'inputData': inputdata, 'url': POSTURL.EMAILS.senddoctorinfo});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.senddoctorinfo, inputdata);
   }

   getCoreFrameworkInfo() {
    this.appService.debugConsole({ 'info': 'getCoreFrameworkInfo', 'inputData': '', 'url': POSTURL.CORE_FREAM.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CORE_FREAM.viewall);
  }
  getGradeInfo(){
    this.appService.debugConsole({ "info": "getGradeInfo", "inputData": localStorage.getItem("token"), "url": POSTURL.GRADE.viewall});
     return this.appService.getAPIData(localStorage.getItem("token"),POSTURL.GRADE.viewall);
  }


}
