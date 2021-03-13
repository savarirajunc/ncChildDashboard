import { Injectable } from '@angular/core';
import { POSTURL } from './../app.config';

// App Service
import { AppService } from './../app.service';
@Injectable()
export class ChildrenService {

  constructor(private appService: AppService) { }


  /**
   * Child-Dashboard
   * @Component: Children Dashbaord Compoent
   * @param: Kids ID
   * @return: Children Dashbaord Objects
   */

  getChildrenDashboardInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'getChildrenDashboardObj', 'inputData': inputdata, 'url': POSTURL.CHILDREN.DASHBOARD });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.DASHBOARD, inputdata);
  }



  getDailySessionTime(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getDailySessionTime', 'inputData': inputdata, 'url': POSTURL.NCSCHOOL.getdailysession});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.NCSCHOOL.getdailysession, inputdata);
  }


   /**
   * Child-Dashboard
   * @Component: Children Dashbaord Compoent
   * @param: Kids ID
   * @return: Children Dashbaord Objects
   */

  getGameUrlInSchool(inputdata) {
    this.appService.debugConsole({ 'info': 'getGameUrlInSchool', 'inputData': inputdata, 'url': POSTURL.SCHOOLINFO.getgameurlinschool });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.SCHOOLINFO.getgameurlinschool, inputdata);
  }


  /**
   * Child-Dashboard
   * @Component: Children Dashbaord Compoent
   * @param: Kids ID
   * @return: Children Dashbaord Objects
   */

  getDailyLabSeat(inputdata) {
    this.appService.debugConsole({ 'info': 'getDailyLabSeat', 'inputData': inputdata, 'url': POSTURL.NCSCHOOL.getdailyseat });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.NCSCHOOL.getdailyseat, inputdata);
  }


  /**
   * Child-Dashboard
   * @Component: Children Dashbaord Compoent
   * @param: Kids ID
   * @return: Children Dashbaord Objects
   */

  checkDailyAttendance(inputdata) {
    this.appService.debugConsole({ 'info': 'checkDailyAttendance', 'inputData': inputdata, 'url': POSTURL.NCSCHOOL.checkattendance });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.NCSCHOOL.checkattendance, inputdata);
  }


  /**
   * Children Create Profile
   * @Component: child-profile
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  createChildProfile(inputdata) {
    this.appService.debugConsole({ 'info': 'createChildProfile', 'inputData': inputdata, 'url': POSTURL.CHILDREN.PROFILE });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.PROFILE, inputdata);
  }

  /**
   * Children Update Profile
   * @Component: child-profile
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  updateChildProfile(inputdata) {
    this.appService.debugConsole({ 'info': 'updateChildProfile', 'inputData': inputdata, 'url': POSTURL.CHILDREN.PROFILE });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.PROFILE_UPDATE, inputdata);
  }


  /**
   * getChildrenProfileInfo
   * @Component: Children - Profile
   * @param: child id
   * @return: children profile information
   */
  getChildrenProfileInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'getChildrenProfileInfo', 'inputData': inputdata, 'url': POSTURL.CHILDREN.GETID });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.GETID, inputdata);
  }

  /**
   * Language Info
   */
  createLangugeInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'createLangugeInfo', 'inputData': inputdata, 'url': POSTURL.LANGUAGE_INFO.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.LANGUAGE_INFO.create, inputdata);
  }

  /**
   * @Component: updatelanguageInfo
   * @param: id
   * @return: Objects
   * @method: POST
   *
   */
  updateLanguageInfo(inputData) {
    this.appService.debugConsole({ 'info': 'updateLanguageinfo', 'inputData': inputData, 'url': POSTURL.LANGUAGE_INFO.update });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.LANGUAGE_INFO.update, inputData);

  }

  /**
   * Language Info
   */
  getidLanguageInfo(idObject) {
    this.appService.debugConsole({ 'info': 'getidLanguageInfo', 'inputData': idObject, 'url': POSTURL.LANGUAGE_INFO.getid  });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.LANGUAGE_INFO.getid, idObject);
  }

  /**
   * Language Info
   */
  getAllLanguageInfo() {

    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.LANGUAGE_INFO.getall);
  }



  /**
   * createCaregiverInfo
   @Component: Caregiver Info
   @param: Objects
   @return: Obujects
   @method: POST
   */
  createCaregiverInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'createCaregiverInfo', 'inputData': inputdata, 'url': POSTURL.CAREGIVER_INFO.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CAREGIVER_INFO.create, inputdata);
  }

  /**
   * updateCaregiverInfo
   * @Component: Caregiver Info
   * @param: Objects
   * @return: Obujects
   * @method: POST
   */
  updateCaregiverInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'createCaregiverInfo', 'inputData': inputdata, 'url': POSTURL.CAREGIVER_INFO.update });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CAREGIVER_INFO.update, inputdata);
  }

  /**
   * @Component: CaregiverInfo
   * @param: id
   * @return: Objects
   * @method: POST
   */
  getidCaregiverInfo(idObject) {
    this.appService.debugConsole({ 'info': 'getidCaregiverInfo', 'inputData': idObject, 'url': POSTURL.CAREGIVER_INFO.getid  });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CAREGIVER_INFO.getid, idObject);
  }


   /**
   * @Component: CaregiverInfo
   * @param: id
   * @return: Objects
   * @method: POST
   */
  getidEduInformation(idObject) {
    this.appService.debugConsole({ 'info': 'getidEduInformation', 'inputData': idObject, 'url': POSTURL.CHILDREN.EDUINFORMTION.getid  });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.getid, idObject);
  }

  getdailyRoutineInfo() {
    this.appService.debugConsole({ 'info': 'getdailyRoutineInfo', 'inputData': '', 'url': POSTURL.DAILYROUTINE_INFO.viewall});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.viewall);
  }
  /**
   * @Component: getDailyRoutineInfo
   * @param: Object
   * @return: Object
   * @method: POST
   */
  getDailyRoutineInfo(inputData) {

    this.appService.debugConsole({ 'info': 'getDailyRoutineInfo', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.getroutineid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.getroutineid, inputData);

  }

  saveDailyAttendance(inputData) {
    this.appService.debugConsole({ 'info': 'saveDailyAttendance', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.createdattendance });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.createdattendance, inputData);
  }




  getDailyRoutineByID(inputData) {
    this.appService.debugConsole({ 'info': 'getDailyRoutineByID', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.getid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.getid, inputData);

  }


  /**
   * @Component: createEduInformation
   * @param: Objects
   * @return: Objects
   * @method: POST
   */
  createEduInformation(inputdata) {
    this.appService.debugConsole({ 'info': 'createEduInformation', 'inputData': inputdata, 'url': POSTURL.CHILDREN.EDUINFORMTION.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.create, inputdata);

  }


  /**
   * @Component: updateEduInformation
   * @param:Objects
   * @return: Objects
   * @method: POST
   */
  updateEduInformation(inputData) {
    this.appService.debugConsole({ 'info': 'updateEduInformation', 'inputData': inputData, 'url': POSTURL.CHILDREN.EDUINFORMTION.update });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.update, inputData);

  }



  /**
 * @Component: getEduBoardInfo
 * @param: no param
 * @return: Objects
 * @method: GET
 */
getGameListInfo() {
  this.appService.debugConsole({'info': 'getGameListInfo', 'inputdata': '', 'url': POSTURL.GAME_INFO.viewall});
  return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.viewall);

}


getGoameInfoById(inputData) {
this.appService.debugConsole({ 'info': 'getGoameInfoById', 'inputData': inputData, 'url': POSTURL.GAME_INFO.getbyid });
return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getbyid, inputData);
}



/**
* @Component: getEduBoardInfo
* @param: no param
* @return: Objects
* @method: GET
*/
getGameDayViewInfo() {
  this.appService.debugConsole({'info': 'getGameDayViewInfo', 'inputdata': '', 'url': POSTURL.GAME_INFO.gatdaywiesviewall});
  return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.gatdaywiesviewall);

}

/**
* @Component: getEduBoardInfo
* @param: no param
* @return: Objects
* @method: GET
*/
getGameDayInfo(inputData) {
this.appService.debugConsole({ 'info': 'getGameDayInfo', 'inputData': inputData, 'url': POSTURL.GUIDED_LEARNING.getguidedlearning });
return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.getguidedlearning, inputData);
}



getGameDayListInfo(inputData) {
this.appService.debugConsole({ 'info': 'getGameDayListInfo', 'inputData': inputData, 'url': POSTURL.GAME_INFO.gatdaywies });
return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.gatdaywies, inputData);
}
    /**
   * @Component: getEduBoardInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduRelationShipInfo() {
    this.appService.debugConsole({'info': 'getEduRelationShipInfo', 'inputdata': '', 'url': POSTURL.CHILDREN.EDUINFORMTION.getrelationship});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.getrelationship);

  }

 /**
   * @Component: getEduPackageInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduPackageInfo() {
    this.appService.debugConsole({'info': 'getEduPackageInfo', 'inputdata': '', 'url': POSTURL.CHILDREN.EDUINFORMTION.getpackage});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.getpackage, {});

  }

      /**
   * @Component: updateInterestDeveInformation
   * @param:Objects
   * @return: Objects
   * @method: POST
   */
  updateInterestDeveInformation(inputData) {
    this.appService.debugConsole({ 'info': 'updateInterestDeveInformation', 'inputData': inputData, 'url': POSTURL.INTERESTDEVE.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.INTERESTDEVE.create, inputData);

  }

  /**
   * @Component: updateGradeandBoardofEducation
   * @param: Objects
   * @return: Objects
   * @method: POST
   */
  updateGradeandBoardofEducation(inputData) {
    this.appService.debugConsole({ 'info': 'updateGradeandBoardofEducation', 'inputData': inputData, 'url': POSTURL.CHILDREN.EDUINFORMTION.updateselect });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.updateselect, inputData);

  }


  /**
   * @Component: getEduGardeInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduGardeInfo() {
    this.appService.debugConsole({'info': 'getEduGardeInfo', 'inputdata': '', 'url': POSTURL.CHILDREN.EDUINFORMTION.gradeinfo});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.gradeinfo);

  }
  /**
   * @Component: getEduBoardInfo
   * @param: no param
   * @return: Objects
   * @method: GET
   */
  getEduBoardInfo() {
    this.appService.debugConsole({'info': 'getEduBoardInfo', 'inputdata': '', 'url': POSTURL.CHILDREN.EDUINFORMTION.boardinfo});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.boardinfo);

  }


  /**
   * @Component: getEduSelectQuestion
   * @param: categoryInfo
   * @return: Objects
   * @method: POST
   */
  getEduSelectQuestion(inputData) {
    this.appService.debugConsole({'info': 'getEduSelectQuestion', 'inputdata': inputData, 'url': POSTURL.CHILDREN.EDUINFORMTION.getquestion});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.EDUINFORMTION.getquestion, inputData);

  }

  /**
   * @Component: Nutrition
   * @param inputData
   */
  createNutrition(inputData) {
    this.appService.debugConsole({'info': 'createNutrition', 'inputdata': inputData, 'url': POSTURL.CHILDREN.NUTRITION.create});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.NUTRITION.create, inputData);

  }
  /**
   * @Component
   * @param inputData
   */
  updateNutrition(inputData) {
    this.appService.debugConsole({'info': 'updateNutrition', 'inputdata': inputData, 'url': POSTURL.CHILDREN.NUTRITION.update});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.CHILDREN.NUTRITION.update, inputData);

  }

  /**
* @Component: Caregiver Info Component
* @param: no param
* @return: Objects
* @method: GET
*/
  getAllCaregiverInfo() {
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.LANGUAGE_INFO.getall);
  }

  /**
   * Firends Info
   */
  createFriendsInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'createFriendsInfo', 'inputData': inputdata, 'url': POSTURL.FIRENDS_INFO.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FIRENDS_INFO.create, inputdata);
  }

  /**
   *  Friends Info
   * @param idObject
   */
  getidFriendsInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FIRENDS_INFO.getid, idObject);
  }

  /**
   * getAllFriendsInfo
   */
  getAllFriendsInfo() {
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.FIRENDS_INFO.getall);
  }

  /**
   * updateFriendsInfo
   */
  updateFriendsInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FIRENDS_INFO.update, idObject);

  }


  /**
   * createFamilyInfo
   *
   */
  createFamilyInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'createFamilyInfo', 'inputData': inputdata, 'url': POSTURL.FAMILY_INFO.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FAMILY_INFO.create, inputdata);
  }


  /**
   * createFamilyInfo
   *
   */
  getGameUrl(inputdata) {
    this.appService.debugConsole({ 'info': 'getGameUrl', 'inputData': inputdata, 'url': POSTURL.GAME_INFO.getgameurl });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgameurl, inputdata);
  }

    /**
   * createFamilyInfo
   *
   */
  saveRoutinestatus(inputdata) {
    this.appService.debugConsole({ 'info': 'saveRoutinestatus', 'inputData': inputdata, 'url': POSTURL.DAILYROUTINE_INFO.routinestatus });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.routinestatus, inputdata);
  }



  /**
   * getidFamilyInfo
   */

  getidFamilyInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FAMILY_INFO.getid, idObject);
  }

  /**
   * getAllFamilyInfo
   */

  getAllFamilyInfo() {
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.FAMILY_INFO.getall);
  }

  /**
   * updateFamilyInfo
   */
  updateFamilyInfo(idObject) {
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.FAMILY_INFO.update, idObject);
  }

}
