import { Injectable } from '@angular/core';
import { POSTURL } from './../app.config';

// App Service
import { AppService } from './../app.service';


@Injectable()
export class ComponentsService {

  constructor(private appService: AppService) { }


   /**
   * @Component: nav-child info Component
   * @param: kid id
   * @return: Objects
   * @method: POST
   */
  getKidsInfoDoctor(inputdata){
    this.appService.debugConsole({ "info": "getKidsInfoDoctor", "inputData": inputdata, "url": POSTURL.PARENTS.kidinfo_doctor });
     return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.PARENTS.kidinfo_doctor, inputdata);
   }

   /**
   * @Component: nav-child info Component
   * @param: kid id
   * @return: Objects
   * @method: POST
   */
  getKidsInfo(){
    this.appService.debugConsole({ "info": "getKidsInfo", "inputData": localStorage.getItem("token"), "url": POSTURL.PARENTS.getparentinfo });
     return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.PARENTS.getparentinfo,{});
   }


  /**
   * @Component: School Info Component
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getAllSchoolInfo() {
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.SCHOOL_INFO.getall);
  }

  /**
   * @Component: School Info Component
   * @param: Object ID
   * @return: Objects by ID
   *
   */
  getIdSchoolInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.SCHOOL_INFO.getid, idObject);
  }
  /**
   * @Component: createSchoolInfo
   * @param: Objects
   * @return: Object true ? false
   * @method: POST
   */
  createSchoolInfo(inputdataObject) {
    this.appService.debugConsole({ "info": "createSchoolInfo", "inputData": inputdataObject, "url": POSTURL.SCHOOL_INFO.create })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.SCHOOL_INFO.create, inputdataObject);
  }

    /**
   * @Component: createSchoolInfo
   * @param: Objects
   * @return: Object true ? false
   * @method: POST
   */
  updateSchoolInformation(inputdataObject) {
    this.appService.debugConsole({ "info": "updateSchoolInformation", "inputData": inputdataObject, "url": POSTURL.SCHOOL_INFO.update })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.SCHOOL_INFO.update, inputdataObject);
  }


  /**
   * @Component: getDailyRoutine
   * @param: id
   * @return: Objects
   * @method: POST
   */
  getDailyRoutineByID(inputData){
    this.appService.debugConsole({ "info": "getDailyRoutineByID", "inputData": inputData, "url": POSTURL.DAILYROUTINE_INFO.getid })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.DAILYROUTINE_INFO.getid, inputData);

  }

    /**
   * @Component: getEduGardeInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduGardeInfo(){
    this.appService.debugConsole({"info":"getEduGardeInfo","inputdata":"", "url":POSTURL.CHILDREN.EDUINFORMTION.gradeinfo});
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.EDUINFORMTION.gradeinfo);

  }


  /**
   * getLeavingId
   *
   */
  getLeavingId(){
    this.appService.debugConsole({"info":"getLeavingId","inputdata":"", "url":POSTURL.DEACTIVEACCOUNTQUESTION});
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.DEACTIVEACCOUNTQUESTION);

  }
  /**
   * @Component: getEduBoardInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduBoardInfo(){
    this.appService.debugConsole({"info":"getEduBoardInfo","inputdata":"", "url":POSTURL.CHILDREN.EDUINFORMTION.boardinfo});
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.EDUINFORMTION.boardinfo);

  }

    /**
   * @Component: getEduBoardInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduRelationShipInfo(){
    this.appService.debugConsole({"info":"getEduRelationShipInfo","inputdata":"", "url":POSTURL.CHILDREN.EDUINFORMTION.getrelationship});
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.EDUINFORMTION.getrelationship);

  }

 /**
   * @Component: getEduPackageInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduPackageInfo(){
    this.appService.debugConsole({"info":"getEduPackageInfo","inputdata":"", "url":POSTURL.CHILDREN.EDUINFORMTION.getpackage});
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.EDUINFORMTION.getpackage,{});

  }

  /**
    * @Component: getEduPackageInfo
    * @param: no param
    * @return: Objects
    * @method: GET
    */
   childDeactiveUser(inputdata){
     this.appService.debugConsole({"info":"childDeactiveUser","inputdata":inputdata, "url":POSTURL.CHILDREN.childdeactive});
     return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.childdeactive,inputdata);

   }


  /**
    * @Component: getDailyRoutineView
    * @param: no param
    * @return: Objects
    * @method: GET
    */
   getDailyRoutineView(){
     this.appService.debugConsole({"info":"getDailyRoutineView","inputdata":"", "url":POSTURL.DAILYROUTINE_INFO.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.DAILYROUTINE_INFO.viewall);

   }


  /**
   * @Component: Daily-routine
   * @param: categoryInfo
   * @return: Objects
   * @method: POST
   */
  getEduSelectQuestion(inputData){
    this.appService.debugConsole({"info":"getEduSelectQuestion","inputdata":inputData, "url":POSTURL.CHILDREN.EDUINFORMTION.getquestion});
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.EDUINFORMTION.getquestion,inputData);

  }

    /**
   * Start Scheduled Time
   * @Component: Activate Nidara Component
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  startScheduledTime(inputdata) {
    this.appService.debugConsole({ "info": "startScheduledTime", "inputData": inputdata, "url": POSTURL.PARENTS.activatenidara })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.PARENTS.activatenidara, inputdata);
  }
    /**
   * @Component: updateEduInformation
   * @param:Objects
   * @return: Objects
   * @method: POST
   */
  updateDailyRoutineInformation(inputData){
    this.appService.debugConsole({ "info": "updateDailyRoutineInformation", "inputData": inputData, "url": POSTURL.DAILYROUTINE.create })
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE.create, inputData);

  }

  /**
   * @Component: PaymentInfo
   * @param: Object with token for word press
   * @return: Objects
   * @method: Objects
   *
   */
  getPaymentWPInfo(inputData){
    this.appService.debugConsole({ "info": "getPaymentInfo", "inputData": inputData, "url": POSTURL.PAYMENTINFO.wp })
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PAYMENTINFO.wp, inputData);

  }

   /**
   * @Component: PaymentInfo
   * @param: Object with token for word press
   * @return: Objects
   * @method: Objects
   *
   */
  getPaymentInfo(){
    this.appService.debugConsole({ "info": "getPaymentInfo", "inputData": "inputData", "url": POSTURL.PAYMENTINFO })
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PAYMENTINFO.getinfo, {});

  }

     /**
   * @Component: Cancel Subscription
   * @param: Object with token for word press
   * @return: Objects
   * @method: Objects
   *
   */
  getCancelSubscriptionInfo(inputData){
    this.appService.debugConsole({ "info": "getCancelSubscriptionInfo", "inputData": inputData, "url": POSTURL.PAYMENTINFO.cancelSubscription })
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PAYMENTINFO.cancelSubscription, inputData);

  }


  /**
   * @Component: createChildrenRegister
   * @param: no param
   * @return: Objects
   * @method: POST
   */
  createChildrenRegister(inputData){
    this.appService.debugConsole({ "info": "createChildrenRegister", "inputData": inputData, "url": POSTURL.CHILDREN.PROFILE })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.CHILDREN.PROFILE, inputData);

  }


  /**
   * @Component: updateSchoolInfo
   * @param: Objects
   * @return: Object true ? false
   * @method: POST
   */
  updateSchoolInfo(inputdataObject) {
    this.appService.debugConsole({ "info": "updateSchoolInfo", "inputData": inputdataObject, "url": POSTURL.SCHOOL_INFO.update })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.SCHOOL_INFO.update, inputdataObject);
  }
  /**
   * @Component: Billing Component
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getAllBillingAddress() {
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.BILLING_ADDRESS.getall);
  }

  /**
   * @Component: Billing Component
   * @param: Object ID
   * @return: Objects by ID
   *
   */
  getIdBillingAddress(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.BILLING_ADDRESS.getid, idObject);
  }

  /**
   * @return: Object
   * @param: Objects
   * @Component: Billing Address
   * create - BillingAddress
   */
  createBillingAddress(inputdataObject) {
    this.appService.debugConsole({ "info": "createBillingAddress", "inputData": inputdataObject, "url": POSTURL.BILLING_ADDRESS.create })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.BILLING_ADDRESS.create, inputdataObject);
  }

    /**
   * @return: Object
   * @param: Objects
   * @Component: updateBilling Address
   * update - BillingAddress
   */
  updateBillingAddress(inputdataObject) {
    this.appService.debugConsole({ "info": "updateBillingAddress", "inputData": inputdataObject, "url": POSTURL.BILLING_ADDRESS.update })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.BILLING_ADDRESS.update, inputdataObject);
  }

  /**
  * Physical Info
  * @Component: physical-info
  * @param: Objects
  * @return: JSON Objects true?false
  * @method: POST
  *
  */

  createPhysicalInfo(inputData) {
    this.appService.debugConsole({ "info": "createPhysicalInfo", "inputData": inputData, "url": POSTURL.PHYSICAL_INFO })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.PHYSICAL_INFO.create, inputData);
  }

  /**
   * @COmponent: updatePhysicalInfo
   * @param: id
   * @return: Objects
   * @method: POST
   */
  updatePhysicalInfo(inputData){
    this.appService.debugConsole({ "info": "updatePhysicalInfo", "inputData": inputData, "url": POSTURL.PHYSICAL_INFO.update })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.PHYSICAL_INFO.update, inputData);

  }

  /**
   * Physical Info
   * @Component: Physical info
   * @param: Objects id
   * @return: JSON Objects for id
   * @method: POST
   *
   */
  getIdPhysicalInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.PHYSICAL_INFO.getid, idObject);
  }

  /**
   * Physical Info
   * @Component: Physical Info
   * @param: no Objects
   * @return: JSON Object for view all
   * @method: GET
   */

  getAllPhysicalInfo() {
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.PHYSICAL_INFO.getall);
  }


  /**
   * @Component: getDailySchedulerInfo
   * @param: Object
   * @return: Object
   * @method: POST
   */
  getDailySchedulerInfo(inputData){

    this.appService.debugConsole({ "info": "getDailySchedulerInfo", "inputData": inputData, "url": POSTURL.DAILYSCHEDULER.getid })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYSCHEDULER.getid, inputData);

  }

  /**
   * @Component: getDailyRoutineInfo
   * @param: Object
   * @return: Object
   * @method: POST
   */
  getDailyRoutineInfo(inputData){

    this.appService.debugConsole({ "info": "getDailyRoutineInfo", "inputData": inputData, "url": POSTURL.DAILYROUTINE_INFO.getid })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYROUTINE_INFO.getid, inputData);

  }

  /**
   * @Component: createdailyScheduler
   * @param: Object
   * @return: Object
   * @method: POST
   */
  createdailyScheduler(inputData){
    this.appService.debugConsole({ "info": "createdailyScheduler", "inputData": inputData, "url": POSTURL.DAILYSCHEDULER.create })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYSCHEDULER.create, inputData);

  }


  /**
   * @Component: createdailyRoutine
   * @param: Object
   * @return: Object
   * @method: POST
   */
  createdailyRoutine(inputData){
    this.appService.debugConsole({ "info": "createdailyRoutine", "inputData": inputData, "url": POSTURL.DAILYROUTINE_INFO.create })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYROUTINE_INFO.create, inputData);

  }

  /**
   * @Component: updatedailyScheduler
   * @param: Object
   * @return: Object
   * @method: POST
   */
  updatedailyScheduler(inputData){
    this.appService.debugConsole({ "info": "updatedailyScheduler", "inputData": inputData, "url": POSTURL.DAILYSCHEDULER.update })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYSCHEDULER.update, inputData);

  }


  /**
   * @Component: updatedailyRoutine
   * @param: Object
   * @return: Object
   * @method: POST
   */
  updatedailyRoutine(inputData){
    this.appService.debugConsole({ "info": "updatedailyRoutine", "inputData": inputData, "url": POSTURL.DAILYROUTINE_INFO.update })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.DAILYROUTINE_INFO.update, inputData);

  }


  /**
   * @Component: getResidenceDetail
   * @param: Object
   * @return: Object
   * @method: POST
   */

  getResidenceDetail(inputData){
    this.appService.debugConsole({ "info": "getResidenceDetail", "inputData": inputData, "url": POSTURL.RESIDNCEDETAIL.getid })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.RESIDNCEDETAIL.getid, inputData);

  }


  /**
   * @Component: getCountryInfo
   * @param: Objects
   * @return: Objects
   * @method: POST
   */
  getCountryInfo(){

    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.RESIDNCEDETAIL.getcountryinfo);
  }

  /**
   * @Component: createCountryInfo
   * @param: Objects
   * @return: Objects
   * @method: POST
   */
  createCountryInfo(inputData){
    this.appService.debugConsole({ "info": "createCountryInfo", "inputData": inputData, "url": POSTURL.RESIDNCEDETAIL.create })
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.RESIDNCEDETAIL.create, inputData);

  }
  /**
   * @method:POST
   * @return: Object
   * @param: Object
   * @Component: Medical Concern getID
   */

   getIdMedicalConcern(idObject){
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.MEDICAL_CONCERN.getid, idObject);
   }

  /**
   * Physical Info
   * @Component: Physical Info
   * @param: no Objects
   * @return: JSON Object for view all
   * @method: GET
   */

  getAllMedicalConcern() {
    return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.MEDICAL_CONCERN.getall);
  }

  /**
   * @method:POST
   * @return: Object
   * @param: Object
   * @Component: Medical Concern create
   */

  createMedicalConcern(inputData) {
    this.appService.debugConsole({ "info": "createMedicalConcern", "inputData": inputData, "url": POSTURL.MEDICAL_CONCERN.create })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.MEDICAL_CONCERN.create, inputData);
  }



   /**
   * @method:POST
   * @return: Object
   * @param: Object
   * @Component: Medical Concern update
   */
  updateMedicalConcern(inputData) {
    this.appService.debugConsole({ "info": "updateMedicalConcern", "inputData": inputData, "url": POSTURL.MEDICAL_CONCERN.update })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.MEDICAL_CONCERN.update, inputData);
  }


  /**
   * @Component: createAccountDeactive
   * @param: Object
   * @return:Object
   * @method: POST
   */
  createAccountDeactive(inputData){
    this.appService.debugConsole({ "info": "createAccountDeactive", "inputData": inputData, "url": POSTURL.DEACTIVEACCOUNT })
    return this.appService.postAPIData(localStorage.getItem('token'),POSTURL.DEACTIVEACCOUNT, inputData);

  }
}
