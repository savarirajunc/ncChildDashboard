import { Injectable } from '@angular/core';
import { POSTURL } from './../app.config';

// App Service
import { AppService } from './../app.service';


@Injectable()
export class ParentsService {

  constructor(private appService: AppService) { }


  /**
   * Parents getCoreSubjects
   * @Component: Parents
   * @param: Object Kids
   * @return: Objects
   */
  getCoreSubjects(inputData) {
    this.appService.debugConsole({ 'info': 'getCoreSubjects', 'inputData': inputData, 'url': POSTURL.DASHBOARD.coresubject });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DASHBOARD.coresubject, inputData);
  }



   /**
   * Parents getDailyStartend
   * @Component: Parents
   * @param: Object Kids
   * @return: Objects
   */
  getDailystartend(inputData) {
    this.appService.debugConsole({ 'info': 'getDailystartend', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.getsessionstartend });
    return this.appService.postAPIData(localStorage.getItem('token'),  POSTURL.DAILYROUTINE_INFO.getsessionstartend, inputData);
  }


   /**
   * Parents getDailyStartend
   * @Component: Parents
   * @param: Object Kids
   * @return: Objects
   */
  getDailystartendByid(inputData) {
    this.appService.debugConsole({ 'info': 'getDailystartendByid', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.getsessionstartendbyid });
    return this.appService.postAPIData(localStorage.getItem('token'),  POSTURL.DAILYROUTINE_INFO.getsessionstartendbyid, inputData);
  }





  /**
   * Parents getParentCoreSubjects
   * @Component: Parents
   * @param: Object Kids
   * @return: Objects
   */
  getParentCoreSubjects(inputData) {
    this.appService.debugConsole({ 'info': 'getParentCoreSubjects', 'inputData': inputData, 'url': POSTURL.DASHBOARD.parentcoresubject });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DASHBOARD.parentcoresubject, inputData);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentProfileInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getByIDParentsProfile', 'inputData': inputData, 'url': POSTURL.PARENTS.getid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getid, inputData);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentQuestionInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getParentQuestionInfo', 'inputData': inputData, 'url': POSTURL.PARENTS.healthquestion });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.healthquestion, inputData);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentgameInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getParentgameInfo', 'inputData': inputData, 'url': POSTURL.PARENTS.getparentgame });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getparentgame, inputData);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentAnswerInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getParentAnswerInfo', 'inputData': inputData, 'url': POSTURL.PARENTS.healthanswer });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.healthanswer, inputData);
  }

  /**
   * Parents Create Profile
   * @Component: parents
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  createParentsProfile(inputdata) {
    this.appService.debugConsole({ 'info': 'createParentsProfile', 'inputData': inputdata, 'url': POSTURL.PARENTS.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.create, inputdata);
  }


  /**
   * Parents Create Profile
   * @Component: parents
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  createDailyRoutineStatus(inputdata) {
    this.appService.debugConsole({ 'info': 'createDailyRoutineStatus', 'inputData': inputdata, 'url': POSTURL.PARENTS.createdailyroutinestatus });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.createdailyroutinestatus, inputdata);
  }

  /**
   * Parents Create Profile
   * @Component: parents
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  updateDailyRoutineStatus(inputdata) {
    this.appService.debugConsole({ 'info': 'updateDailyRoutineStatus', 'inputData': inputdata, 'url': POSTURL.PARENTS.updatedailyroutinestatus });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.updatedailyroutinestatus, inputdata);
  }


  /**
   * @Component: getDailyRoutineInfo
   * @param: Object
   * @return: Object
   * @method: POST
   */
  getDailyRoutineInfoData(inputData) {

    this.appService.debugConsole({ 'info': 'getDailyRoutineInfoData', 'inputData': inputData, 'url': POSTURL.DAILYROUTINE_INFO.getroutineid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DAILYROUTINE_INFO.getroutineid, inputData);

  }

  /**
   * @Component: getDailyRoutineInfo
   * @param: Object
   * @return: Object
   * @method: POST
   */
  getGameResult(inputData) {

    this.appService.debugConsole({ 'info': 'getGameResult', 'inputData': inputData, 'url': POSTURL.GAME_INFO.getgameresult });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgameresult, inputData);

  }


  /**
   * Parents Health Answer
   * @Component: parents
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  createParentHealthAnswer(inputdata) {
    this.appService.debugConsole({ 'info': 'createParentHealthAnswer', 'inputData': inputdata, 'url': POSTURL.HEALTH.create });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.create, inputdata);
  }

  /**
   * Parents Game Answer
   * @Component: parents
   * @param: Objects
   * @return: JSON Objects true?false
   *
   */

  createParenGameAnswer(inputdata) {
    this.appService.debugConsole({ 'info': 'createParenGameAnswer', 'inputData': inputdata, 'url': POSTURL.HEALTH.parentgame });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.parentgame, inputdata);
  }


  /**
   * @Component: Parent Dashboard Component
   * @param: token (localStorage)
   * @return: JSON Objects true?false
   * Parent Dashboard Component
   */
  getUserInfoByToken() {
    this.appService.debugConsole({ 'info': 'getUserInfoByToken', 'inputData': localStorage.getItem('token'), 'url': POSTURL.AUTH_INFO.getuserinfobytoken });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.AUTH_INFO.getuserinfobytoken, {});
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

  /**
   * getKidsInfo
   * @Component: Parent Info
   * @param: token
   */
  getKidsInfo() {
   this.appService.debugConsole({ 'info': 'getKidsInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENTS.getparentinfo });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getparentinfo, {});
  }

  /**
 * @Component: getEduBoardInfo
 * @param: no param
 * @return: Objects
 * @method: GET
 */
getGamesAnwers() {
  this.appService.debugConsole({'info': 'getGamesAnwers', 'inputdata': '', 'url': POSTURL.GAME_INFO.getgamesanwers});
  return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgamesanwers);

}


/**
* @Component: getEduBoardInfo
* @param: no param
* @return: Objects
* @method: GET
*/
getGamesQuestionAnswer() {
this.appService.debugConsole({'info': 'getGamesQuestionAnswer', 'inputdata': '', 'url': POSTURL.GAME_INFO.getgamesquestionanswers});
return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgamesquestionanswers);
}


/**
* @Component: getEduBoardInfo
* @param: no param
* @return: Objects
* @method: GET
*/
getAnnouncement() {
  this.appService.debugConsole({'info': 'getAnnouncement', 'inputdata': '', 'url': POSTURL.ANNOUNCEMENT.getannouncement});
  return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.ANNOUNCEMENT.getannouncement);
  }



// /**
// * @Component: getEduBoardInfo
// * @param: no param
// * @return: Objects
// * @method: GET
// */
// getGamesQuestionAnwers(){
// this.appService.debugConsole({"info":"getGamesQuestionAnwers","inputdata":"", "url":POSTURL.GAME_INFO.getgamesquestionanswers});
// return this.appService.getAPIData(localStorage.getItem('token'),POSTURL.GAME_INFO.getgamesquestionanswers);
//
// }

  /**
   * getSchedularTask
   * @param: profile id
   * @return: Objects
   */
  getSchedularTask(inputdata) {
    this.appService.debugConsole({ 'info': 'getSchedularTask', 'inputData': inputdata, 'url': POSTURL.DASHBOARD.schedulartask });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DASHBOARD.schedulartask, inputdata);
  }



  /**
   * getchildEndday
   * @param: profile id
   * @return: Objects
   */
  getChildExpriyDay(inputdata) {
    this.appService.debugConsole({ 'info': 'getChildExpriyDay', 'inputData': inputdata, 'url': POSTURL.PARENTS.chidexpriychack });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.chidexpriychack, inputdata);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentKidAnswerInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getParentKidAnswerInfo', 'inputData': inputData, 'url': POSTURL.PARENTS.healthdoctoranswer });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.healthdoctoranswer, inputData);
  }


  /**
   * Parents getByID
   * @Component: Parents
   * @param: Object ID
   * @return: JSON OBjects by details
   *
   */
  getParentKidPreInfo(inputData) {
    this.appService.debugConsole({ 'info': 'getParentKidPreInfo', 'inputData': inputData, 'url': POSTURL.PARENTS.getbyid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getbyid, inputData);
  }


}
