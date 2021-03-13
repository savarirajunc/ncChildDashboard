import { AppService } from '../app.service';
import { Injectable } from '@angular/core';
import { POSTURL } from '../app.config';

@Injectable()
export class DoctorDashboardService {

  constructor(private appService: AppService) { }

  getParentList(inputdata) {
    this.appService.debugConsole({ 'info': 'getParentList', 'inputData': inputdata, 'url': POSTURL.DOCTOR.parentlist });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.parentlist, inputdata);
   }

   getParentInvoice(inputdata) {
    this.appService.debugConsole({ 'info': 'getParentInvoice', 'inputData': inputdata, 'url': POSTURL.WEBADMIN.ORDER.invocie });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.WEBADMIN.ORDER.invocie, inputdata);
   }


   parendComplete(inputdata) {
    this.appService.debugConsole({ 'info': 'parendComplete', 'inputData': inputdata, 'url': POSTURL.DOCTOR.parentcomplete });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.parentcomplete, inputdata);
   }

   sendEmailParent(inputdata) {
    this.appService.debugConsole({ 'info': 'sendEmailParent', 'inputData': inputdata, 'url': POSTURL.EMAILS.parentqus });
     return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.EMAILS.parentqus, inputdata);
   }

   setDoctorVisitList(inputdata) {
    this.appService.debugConsole({ 'info': 'setDoctorVisitList', 'inputData': inputdata, 'url': POSTURL.DOCTOR.doctorvisiterlist });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.doctorvisiterlist, inputdata);
   }

   getDoctorVisitList(inputdata) {
    this.appService.debugConsole({ 'info': 'getDoctorVisitList', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getvisitlist });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getvisitlist, inputdata);
   }

   getDoctorVisitListByChildid(inputdata) {
    this.appService.debugConsole({ 'info': 'getDoctorVisitListByChildid', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getvisitlistbychildid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getvisitlistbychildid, inputdata);
   }

   getChildGameResult(inputdata) {
    this.appService.debugConsole({ 'info': 'getChildGameResult', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgameresult });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgameresult, inputdata);
   }

   getChildGameResultTwo(inputdata) {
    this.appService.debugConsole({ 'info': 'getChildGameResultTwo', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgameresulttwo });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgameresulttwo, inputdata);
   }

   getHealthGameValue(inputdata) {
    this.appService.debugConsole({ 'info': 'getHealthGameValue', 'inputData': inputdata, 'url': POSTURL.DOCTOR.gethealthgamevalue });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.gethealthgamevalue, inputdata);
   }


   getChildGameResultBySubject(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getChildGameResultBySubject', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgameresultbysubject });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgameresultbysubject, inputdata);
   }

   getChildGameFilterBySubject(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getChildGameFilterBySubject', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgamefilterbysubject });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgamefilterbysubject, inputdata);
   }

   getgameDetailsById(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getgameDetailsById', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgameinfobyid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgameinfobyid, inputdata);
   }

   getFiltergameDetailsById(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getFiltergameDetailsById', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getgameinfofilterbyid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getgameinfofilterbyid, inputdata);
   }

   getCoreFream() {
     this.appService.debugConsole({'info': 'getCoreFream', 'inputData': '', 'url': POSTURL.CORE_FREAM.viewall});
     return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.CORE_FREAM.viewall);
   }

   getSubject() {
    this.appService.debugConsole({'info': 'getSubject', 'inputData': '', 'url': POSTURL.SUBJECT_INFO.viewall});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.SUBJECT_INFO.viewall);
  }

  getSubjectdata() {
    this.appService.debugConsole({'info': 'getSubjectdata', 'inputData': '', 'url': POSTURL.SUBJECT_INFO.getsubjectdata});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.SUBJECT_INFO.getsubjectdata);
  }

  gethealthMaster() {
    this.appService.debugConsole({'info': 'gethealthMaster', 'inputData': '', 'url': POSTURL.GAME_INFO.gethealthmaster});
    return this.appService.getAPIData(localStorage.getItem('token'), POSTURL.GAME_INFO.gethealthmaster);
  }

  getIndicatorbyGame(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getIndicatorbyGame', 'inputData': inputdata, 'url': POSTURL.DOCTOR.getindicatorbygame });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.DOCTOR.getindicatorbygame, inputdata);
   }

   getSchoolresult(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getSchoolresult', 'inputData': inputdata, 'url': POSTURL.HEALTH.getschoolresult });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getschoolresult, inputdata);
   }

   getSchoolStandardresult(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getSchoolStandardresult', 'inputData': inputdata, 'url': POSTURL.HEALTH.getschoolresultbystandid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getschoolresultbystandid, inputdata);
   }


   getSchoolIndicaterresult(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getSchoolIndicaterresult', 'inputData': inputdata, 'url': POSTURL.HEALTH.getschoolresultbyindicator });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getschoolresultbyindicator, inputdata);
   }

   getSchoolgameresult(inputdata) {
    // tslint:disable-next-line:max-line-length
    this.appService.debugConsole({ 'info': 'getSchoolgameresult', 'inputData': inputdata, 'url': POSTURL.HEALTH.getgameresultbyid });
    return this.appService.postAPIData(localStorage.getItem('token'), POSTURL.HEALTH.getgameresultbyid, inputdata);
   }



}
