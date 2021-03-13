import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../app.service';
import {POSTURL} from '../app.config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardService {

  searchSubject = new Subject<string>();
  searcObs$ = this.searchSubject.asObservable();

  searchSubject2 = new Subject<string>();
  searcObs2$ = this.searchSubject2.asObservable();

  constructor(private appService: AppService, private http: HttpClient) { }

  checkToken(token) {
    this.appService.debugConsole({ 'info': 'checkToken', 'inputData': token, 'url': POSTURL.CHECKTOKEN });
    return this.appService.tokenchecking({}, POSTURL.CHECKTOKEN, token);
  }


  getChidInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'getChidInfo', 'inputData': inputdata, 'url': POSTURL.KID_INFO.getbychidinfo });
    return this.appService.postAPIData('', POSTURL.KID_INFO.getbychidinfo, inputdata);
  }



  getguidedListInfoByid(inputdata) {
    this.appService.debugConsole({ 'info': 'guidedLearningGameCreat', 'inputData': inputdata, 'url': POSTURL.GUIDED_LEARNING.getid });
    return this.appService.postAPIData('', POSTURL.GUIDED_LEARNING.getid, inputdata);
  }


  getGuidedInfoByid(inputdata) {
    this.appService.debugConsole({ 'info': 'getGuidedInfoByid', 'inputData': inputdata, 'url': POSTURL.GUIDED_LEARNING.getbyid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.getbyid, inputdata);
  }

  getGuidedGameInfo(inputdata) {
    this.appService.debugConsole({ 'info': 'getGuidedGameInfo', 'inputData': inputdata, 'url': POSTURL.GUIDED_LEARNING.getgamelist });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.getgamelist, inputdata);
  }

  updateGuidedLearning(inputdata) {
    this.appService.debugConsole({ 'info': 'updateGuidedLearning', 'inputData': inputdata, 'url': POSTURL.GUIDED_LEARNING.update });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.update, inputdata);
  }

  getParentInfo() {
   this.appService.debugConsole({ 'info': 'getParentInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENTS.viewall });
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.PARENTS.viewall);
  }
  getKidParentInfo() {
   this.appService.debugConsole({ 'info': 'getKidParentInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENTS.getparentinfo });
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getparentinfo);
  }


  getParentInfoView(inputdata) {
    this.appService.debugConsole({ 'info': 'getParentInfoView', 'inputData': inputdata, 'url': POSTURL.PARENTS.getParentInfoview });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getParentInfoview, inputdata);
  }


  getChildrenInfo() {
    this.appService.debugConsole({ 'info': 'getChildrenInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.KID_INFO.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.KID_INFO.viewall);
  }
  getSchoolInfo() {
    this.appService.debugConsole({ 'info': 'getSchoolInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.KID_INFO.schoolviewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.KID_INFO.schoolviewall);
  }
  getCountryInfo() {
    this.appService.debugConsole({ 'info': 'getCountryInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.COUNTRY_INFO.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.COUNTRY_INFO.viewall);
  }
  getstatesInfo() {
    this.appService.debugConsole({ 'info': 'getstatesInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.COUNTRY_INFO.stateviewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.COUNTRY_INFO.stateviewall);
  }

  guidedLearningScheduleCreat(inputdataObject) {
    this.appService.debugConsole({ 'info': 'guidedLearningScheduleCreat', 'inputData': inputdataObject, 'url': POSTURL.GUIDED_LEARNING.create });
    return this.appService.postAPIData('', POSTURL.GUIDED_LEARNING.create, inputdataObject);
  }

  guidedLearningGameCreat(inputdataObject) {
    this.appService.debugConsole({ 'info': 'guidedLearningGameCreat', 'inputData': inputdataObject, 'url': POSTURL.GUIDED_LEARNING.guidedgamemap });
    return this.appService.postAPIData('', POSTURL.GUIDED_LEARNING.guidedgamemap, inputdataObject);
  }


  getguidedListInfo() {
    this.appService.debugConsole({ 'info': 'getguidedListInfo', 'inputData': '', 'url': POSTURL.GUIDED_LEARNING.guidedlist });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.guidedlist);
  }

  getCoreFrameworkInfo() {
    this.appService.debugConsole({ 'info': 'getCoreFrameworkInfo', 'inputData': '', 'url': POSTURL.CORE_FRAMEWORK.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CORE_FRAMEWORK.viewall);
  }

  getsubjectInfo() {
    this.appService.debugConsole({ 'info': 'getsubjectInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.SUBJECT_INFO.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.SUBJECT_INFO.viewall);
  }

  getgamesInfo() {
    this.appService.debugConsole({ 'info': 'getgamesInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GAME_INFO.viewall });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.viewall);
  }

  getgamesDataInfo() {
    this.appService.debugConsole({ 'info': 'getgamesDataInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GAME_INFO.getgameinfo});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgameinfo);
  }

  getGameCoreGrade(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameCoreGrade', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.getbygrade});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getbygrade, inputdataObject);
  }
  getGameCoreStandInti(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameCoreStandInti', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.getbystandint});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getbystandint, inputdataObject);
  }


  getGameQuestionMap(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameQuestionMap', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.getbygameid});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getbygameid, inputdataObject);
  }

  getGamesQuestionAnswer() {
    this.appService.debugConsole({ 'info': 'getGamesQuestionAnswer', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GAME_INFO.getgamesquestionanswers });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgamesquestionanswers);
  }



  getguidedSchedulInfo() {
    this.appService.debugConsole({ 'info': 'getguidedSchedulInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GUIDED_LEARNING.guidedSchedule });
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.guidedSchedule);
  }


  getgradingReporting() {
    this.appService.debugConsole({ 'info': 'getgradingReporting', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GRADING_REPORTING.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GRADING_REPORTING.viewall);
  }

  getHealthDevelopmentCat() {
    this.appService.debugConsole({ 'info': 'getHealthDevelopmentCat', 'inputData': localStorage.getItem('token'), 'url': POSTURL.HEALTH.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.HEALTH.viewall);
  }

  getHealthDeveQues() {
    this.appService.debugConsole({ 'info': 'getHealthDeveQues', 'inputData': localStorage.getItem('token'), 'url': POSTURL.HEALTH.daysquestion});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.HEALTH.daysquestion);
  }


  getParentGameGuidedlearning() {
    this.appService.debugConsole({ 'info': 'getParentGameGuidedlearning', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENT_GAMES.parentguided});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.parentguided);
  }

  getHealthDevelopmentQues() {
    this.appService.debugConsole({ 'info': 'getHealthDevelopmentQues', 'inputData': localStorage.getItem('token'), 'url': POSTURL.HEALTH.questionviewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.HEALTH.questionviewall);
  }

  getHealthDevQues(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getHealthDevQues', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.getbyhealthval});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getbyhealthval, inputdataObject);
  }

  getParentQues(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getParentQues', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.getbygradeid});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getbygradeid, inputdataObject);
  }



  getHealthCore(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getHealthCore', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.getbycoreframe});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getbycoreframe, inputdataObject);
  }


  getDayMapQuesVal(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getDayMapQuesVal', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.daymapquesfilter});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.daymapquesfilter, inputdataObject);
  }

  dayMapQuesUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'dayMapQuesUpdate', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.daymapupdate});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.daymapupdate, inputdataObject);
  }


  getHealthDevQuesUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getHealthDevQuesUpdate', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.update});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.update, inputdataObject);
  }


  createHealthDayMap(inputdataObject) {
    this.appService.debugConsole({ 'info': 'createHealthDayMap', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.daymapcreate});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.daymapcreate, inputdataObject);

}

getDaysMapInfo() {
  this.appService.debugConsole({ 'info': 'getDaysMapInfo', 'inputData': '', 'url': POSTURL.HEALTH.daymapviewall});
   return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.HEALTH.daymapviewall);
}


  getgrFramework() {
    this.appService.debugConsole({ 'info': 'getgrFramework', 'inputData': '', 'url': POSTURL.GRADING_REPORTING.grframeview});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GRADING_REPORTING.grframeview);
  }


  getgrType() {
    this.appService.debugConsole({ 'info': 'getgrType', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GRADING_REPORTING.grtypeview});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GRADING_REPORTING.grtypeview);
  }


  gradingReportingCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gradingReportingCreate', 'inputData': inputdataObject, 'url': POSTURL.GRADING_REPORTING.create});
    return this.appService.postAPIData('', POSTURL.GRADING_REPORTING.create, inputdataObject);
  }

  gradingReportingUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gradingReportingCreate', 'inputData': inputdataObject, 'url': POSTURL.GRADING_REPORTING.update});
    return this.appService.postAPIData('', POSTURL.GRADING_REPORTING.update, inputdataObject);
  }


  getGradingCoreWise(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGradingCoreWise', 'inputData': inputdataObject, 'url': POSTURL.GRADING_REPORTING.getgradingcore});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GRADING_REPORTING.getgradingcore, inputdataObject);
  }

  getGradingSubWise(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGradingCoreWise', 'inputData': inputdataObject, 'url': POSTURL.GRADING_REPORTING.getgradingsub});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GRADING_REPORTING.getgradingsub, inputdataObject);
  }

  gamesCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesCreate', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.create});
    return this.appService.postAPIData('', POSTURL.GAME_INFO.create, inputdataObject);
  }

  healthDevQuestionCreat(inputdataObject) {
    this.appService.debugConsole({ 'info': 'healthDevQuestionCreat', 'inputData': inputdataObject, 'url': POSTURL.HEALTH.creatquestion});
    return this.appService.postAPIData('', POSTURL.HEALTH.creatquestion, inputdataObject);
  }


  gamesQuestionanswerCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesQuestionanswerCreate', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.questionanswer});
    return this.appService.postAPIData('', POSTURL.GAME_INFO.questionanswer, inputdataObject);
  }

  gamesQuestionanswerUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesQuestionanswerUpdate', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.updategamesquestionanswers});
    return this.appService.postAPIData('', POSTURL.GAME_INFO.updategamesquestionanswers, inputdataObject);
  }


  gamesCoreUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesCoreUpdate', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.update});
    return this.appService.postAPIData('', POSTURL.GAME_INFO.update, inputdataObject);
  }

  gamesUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesUpdate', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.gameupdate});
    return this.appService.postAPIData('', POSTURL.GAME_INFO.gameupdate, inputdataObject);
  }

  getGradeInfo() {
    this.appService.debugConsole({ 'info': 'getGradeInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GRADE.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GRADE.viewall);
  }


  getGameInfo() {
    this.appService.debugConsole({ 'info': 'getGradeInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GAME_INFO.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.viewall);
  }

  getDaysInfo() {
    this.appService.debugConsole({ 'info': 'getDaysInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.DAYS.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.DAYS.viewall);
  }


  getDaysHealthInfo() {
    this.appService.debugConsole({ 'info': 'getDaysHealthInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.DAYS.healthviewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.DAYS.healthviewall);
  }

  getGameViewInfo() {
    this.appService.debugConsole({ 'info': 'getGradeInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.GAME_INFO.gameviewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.gameviewall);
  }

  getIndicatorsInfo() {
    this.appService.debugConsole({ 'info': 'getIndicatorsInfo', 'inputData': '', 'url': POSTURL.INDICATOR.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.INDICATOR.viewall);
  }

  getStandardInfo() {
    this.appService.debugConsole({ 'info': 'getStandardInfo', 'inputData': '', 'url': POSTURL.STANDARD.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.STANDARD.viewall);
  }

  getGuidedDaySchedule(inputdata) {
    this.appService.debugConsole({ 'info': 'getGuidedDaySchedule', 'inputData': inputdata, 'url': POSTURL.GUIDED_LEARNING.guidedScheduleday});
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GUIDED_LEARNING.guidedScheduleday, inputdata);
  }

  getStandardMapInfo() {
    this.appService.debugConsole({ 'info': 'getStandardMapInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.STANDARD.standardmapview});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.STANDARD.standardmapview);
  }

  getStandardMap(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getStandardMap', 'inputData': inputdataObject, 'url': POSTURL.STANDARD.getstandardmap});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.STANDARD.getstandardmap, inputdataObject);
  }

  getStandadIndicatorMap(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getStandadIndicatorMap', 'inputData': inputdataObject, 'url': POSTURL.STANDARD.getbystandintmap});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.STANDARD.getbystandintmap, inputdataObject);
  }

  getIndicatorMap(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getIndicatorMap', 'inputData': inputdataObject, 'url': POSTURL.STANDARD.getindicatorsdmap});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.STANDARD.getindicatorsdmap, inputdataObject);
  }



  indicatorsCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesCreate', 'inputData': inputdataObject, 'url': POSTURL.INDICATOR.create});
    return this.appService.postAPIData('', POSTURL.INDICATOR.create, inputdataObject);
  }

  standardCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'gamesCreate', 'inputData': inputdataObject, 'url': POSTURL.STANDARD.create});
    return this.appService.postAPIData('', POSTURL.STANDARD.create, inputdataObject);
  }


  subjectMapCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'subjectMapCreate', 'inputData': inputdataObject, 'url': POSTURL.CORE_FRAMEWORK.subjectmapcreate});
    return this.appService.postAPIData('', POSTURL.CORE_FRAMEWORK.subjectmapcreate, inputdataObject);
  }




  // Parent Game Info


  parentGamesCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'parentGamesCreate', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.create});
    return this.appService.postAPIData('', POSTURL.PARENT_GAMES.create, inputdataObject);
  }

  parentGamesDayCreate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'parentGamesDayCreate', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.gamedaycreate});
    return this.appService.postAPIData('', POSTURL.PARENT_GAMES.gamedaycreate, inputdataObject);
  }


  parentGamesUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'parentGamesUpdate', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.gameupdate});
    return this.appService.postAPIData('', POSTURL.PARENT_GAMES.gameupdate, inputdataObject);
  }

  parentStandardUpdate(inputdataObject) {
    this.appService.debugConsole({ 'info': 'parentStandardUpdate', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.standardupdate});
    return this.appService.postAPIData('', POSTURL.PARENT_GAMES.standardupdate, inputdataObject);
  }

  getParentGuidedGameInfo() {
    this.appService.debugConsole({ 'info': 'getParentGuidedGameInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENT_GAMES.gameviewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.gameviewall);
  }


  getGameTaggingHealth(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameTaggingHealth', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.getfullslidmasters});
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getfullslidmasters,inputdataObject);
  }

  sendExcalFile(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameTaggingHealth', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.saveexcelfile});
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.saveexcelfile,inputdataObject);
  }

  getParentGameInfo() {
    this.appService.debugConsole({ 'info': 'getParentGameInfo', 'inputData': localStorage.getItem('token'), 'url': POSTURL.PARENT_GAMES.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.viewall);
  }
  getParentGameCoreMapFirst(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getParentGameCoreMapFirst', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.getcoremap});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.getcoremap, inputdataObject);
  }

  getParentGameCoreMapSub(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getParentGameCoreMapSub', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.getcoremapsub});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.getcoremapsub, inputdataObject);
  }

  getParentGameCoreMapInd(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getParentGameCoreMapInd', 'inputData': inputdataObject, 'url': POSTURL.PARENT_GAMES.getcoremapind});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENT_GAMES.getcoremapind, inputdataObject);
  }

  getGameFilter(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getGameFilter', 'inputData': inputdataObject, 'url': POSTURL.GAME_INFO.getgamefilter});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgamefilter, inputdataObject);
  }


  getAnnouncement() {
    this.appService.debugConsole({ 'info': 'getAnnouncement', 'inputData': localStorage.getItem('token'), 'url': POSTURL.ANNOUNCEMENT.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.ANNOUNCEMENT.viewall);
  }

  getAnnouncementById(inputdataObject) {
    this.appService.debugConsole({ 'info': 'getAnnouncementById', 'inputData': inputdataObject, 'url': POSTURL.ANNOUNCEMENT.getdatabyid});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.ANNOUNCEMENT.getdatabyid, inputdataObject);
  }

  createAnnouncement(inputdataObject) {
    this.appService.debugConsole({ 'info': 'createAnnouncement', 'inputData': inputdataObject, 'url': POSTURL.ANNOUNCEMENT.create});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.ANNOUNCEMENT.create, inputdataObject);
  }


  /**
   * doctor register
   * @Component: to register new doctoer & user
   * @param: token and body
   * @return: true or false
   *
   */


  registerUser(inputdataObject) {
    this.appService.debugConsole({ 'info': 'registerUser', 'inputData': inputdataObject, 'url': POSTURL.AUTH_INFO.register });
    return this.appService.postAPIData('', POSTURL.AUTH_INFO.register, inputdataObject);
  }

   /**
   * doctor list
   * @Component: to get the doctor list
   * @param: token and body
   * @return: true or false
   *
   */


  getDoctorList() {

    this.appService.debugConsole({ 'info': 'emailSendUsers', 'inputData': '', 'url': POSTURL.DOCTOR.getdoctorlist});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getdoctorlist);
   }


   /**
   * game excel sheet list
   * @Component: to get the doctor list
   * @param: token and body
   * @return: true or false
   *
   */


  getGameExcelSheet() {

    this.appService.debugConsole({ 'info': 'getGameExcelSheet', 'inputData': '', 'url': POSTURL.GAME_INFO.getgameexcelsheet});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.getgameexcelsheet);
   }

   /**
   * user deactivate
   * @Component: user deactivate
   * @param: token and body
   * @return: true or false
   *
   */

  userDelete(inputdata) {

    this.appService.debugConsole({ 'info': 'userDelete', 'inputData': inputdata, 'url': POSTURL.PARENTS.delete});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.delete, inputdata);
   }

   /**
   * userUpate
   * @Component: userUpate
   * @param: token and body
   * @return: true or false
   *
   */

  userUpate(inputdata) {

    this.appService.debugConsole({ 'info': 'userUpate', 'inputData': inputdata, 'url': POSTURL.PARENTS.update});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.update, inputdata);
   }

  /**
   * saveDoctorInfo
   * @Component: saveDoctorInfo
   * @param: token and body
   * @return: true or false
   *
   */

  saveDoctorInfo(inputdata) {

    this.appService.debugConsole({ 'info': 'saveDoctorInfo', 'inputData': inputdata, 'url': POSTURL.PARENTS.savedoctorinfo});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.savedoctorinfo, inputdata);
   }


   /**
   * get user info by id
   * @Component:  get user info by id
   * @param: token and body
   * @return: true or false
   *
   */

  getUserInfoById(inputdata) {

    this.appService.debugConsole({ 'info': 'getUserInfoById', 'inputData': inputdata, 'url': POSTURL.PARENTS.getbyuserid});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.PARENTS.getbyuserid, inputdata);
   }

  /**
   * Add hospital & clinic address
   * @Component:  Add hospital & clinic address
   * @param: token and body
   * @return: true or false
   *
   */


   addHospitalAddress(inputdata) {
    this.appService.debugConsole({ 'info': 'sendCompanyEnquiry', 'inputData': inputdata, 'url': POSTURL.DOCTOR.addhospitaladdress});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.addhospitaladdress, inputdata);
   }


  sendInvoiceEmail(inputdata) {
    this.appService.debugConsole({ 'info': 'sendInvoiceEmail', 'inputData': inputdata, 'url': POSTURL.EMAILS.custominvoceemailsend});
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.custominvoceemailsend, inputdata);
   }

  searchItem(searchKey) {
    this.searchSubject.next(searchKey);
    console.log(searchKey);
  }
  searchit(searchItem) {
    this.searchSubject2.next(searchItem);
    console.log(searchItem);
  }
}
