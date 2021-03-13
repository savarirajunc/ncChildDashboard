import { environment } from './../environments/environment';


export const GAMEJSON = Object.freeze({
  DATA: { error: true, message: 'gameData', data: [] }
});


export const GAMEDASHBOARDAUDIO = Object.freeze({
  VOLUMEDOWN: {
    HOVER: 'assets/games/audio/tina-welcome-message.mp3',
    OUT: '',
    CLICK: 'assets/games/audio/tina-welcome-message-tina-speaking.mp3'
  },
  WELCOMEAUDIO:{
    TINA: 'assets/games/tina/audio/welcomeaudio.mp3',
    RAHUL: 'assets/games/rahul/audio/welcomeaudio.mp3'
  },
  GAMESTART: {
    FIRST: 'assets/games/audio/s1.mp3',
    WAITING: 'assets/games/audio/waiting.mp3',
    LATE: 'assets/games/audio/late.mp3',
    FINAL: 'assets/games/audio/goodbye.mp3',
    SLEEP: 'assets/games/audio/sleep.mp3',
    WAKEUP: 'assets/games/audio/wake_up.mp3',
    HOWYOUFEEL : 'assets/games/audio/howyoufeel.mp3'
  },
  EXITBUTTON: {
    HOVER: 'assets/games/audio/exit.mp3', OUT: '',
    CLICK: 'assets/games/audio/will-see-you-soon-goodbye.mp3'
  },
  VOLUMEPLAYAGAIN: 'assets/games/dashboard/click-audio-again.mp3',
  ONLOAD: 'assets/games/audio/tina-welcome-message.mp3',
  PLAYHOVER: 'assets/games/audio/play-hover.mp3',
  SLIDEHOVER: '/slide_audio.mp3',
  PERVIOUSSCREEN: 'assets/games/dashboard/previous-screen.mp3',
  NEXTSCREEN: 'assets/games/dashboard/next-screen.mp3'


});
// 35.165.218.71
export const POSTURL = Object.freeze({

  FORNTENDURL: environment.FRONTENDURL,
  SERVICEURL:environment.SERVERURL + environment.SERVERPORT,
  CHECKTOKEN: environment.SERVERURL + environment.SERVERPORT + '/login/tokencheck',
  DASHBOARD: {
    coresubject: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/getcoreframeworks',
    schedulartask: environment.SERVERURL + environment.SERVERPORT + '/dailyscheduler/getbykidid',
    parentcoresubject: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/getparentcoreframeworks',
  },
  PHYSICAL_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidphysicalinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidphysicalinfo/getbyid',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidphysicalinfo/update',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidphysicalinfo/viewall'
  },
  NCSCHOOL:{
    viewall: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/viewall',
    getncstimetable: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/getncstimetable',
    getchildinfo: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/getchildinfo',
    getdailyseat: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/getdailyseat',
    checkattendance: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/checkattendance',
    getdailysession: environment.SERVERURL + environment.SERVERPORT + '/schooltimetable/getdailysession',
  },
  RESIDNCEDETAIL: {
    create: environment.SERVERURL + environment.SERVERPORT + '/users/countryupdatebyuserid',
    update: environment.SERVERURL + environment.SERVERPORT + '/users/countryupdatebyuserid',
    getid: environment.SERVERURL + environment.SERVERPORT + '/users/getcountryinfo',
    getall: environment.SERVERURL + environment.SERVERPORT + '/countries/viewall',
    getcountryinfo: environment.SERVERURL + environment.SERVERPORT + '/countries/viewall'
  },
  CHILDREN: {
    DASHBOARD: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/getkidgames',
    PROFILE: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/save',
    PROFILE_UPDATE: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/update',
    childdeactive: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/childdeactive',
    GETID: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/getbyid',
    PROFILE_IMAGE: environment.SERVERURL + environment.SERVERPORT + '/imageupload/imageupload',
    childResgiter: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/childResgiter',
    EDUINFORMTION: {
      create: environment.SERVERURL + environment.SERVERPORT + '/answers/create',
      update: environment.SERVERURL + environment.SERVERPORT + '/answers/create',
      getid: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/getbyid',
      getall: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/getall',
      gradeinfo: environment.SERVERURL + environment.SERVERPORT + '/grade/viewall',
      boardinfo: environment.SERVERURL + environment.SERVERPORT + '/boardofeducation/viewall',
      getquestion: environment.SERVERURL + environment.SERVERPORT + '/questions/getprenidaraquestions',
      updateselect: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/kid_board_of_education',
      getrelationship: environment.SERVERURL + environment.SERVERPORT + '/relationships/viewall',
      getpackage: environment.SERVERURL + environment.SERVERPORT + '/guidedlearning/getguidedlearnings'
    },
    NUTRITION: {
      getquestion: environment.SERVERURL + environment.SERVERPORT + '/questions/getprenidaraquestions',
      create: environment.SERVERURL + environment.SERVERPORT + '/answers/create',
      update: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/update'
    }
  },
  SCHOOLINFO:{
    viewall: environment.SERVERURL + environment.SERVERPORT + '/schools/viewall',
    getbyuserid: environment.SERVERURL + environment.SERVERPORT + '/schools/getbyuserid',
    getschoolinfo: environment.SERVERURL + environment.SERVERPORT + '/schools/getschoolinfo',
    create: environment.SERVERURL + environment.SERVERPORT + '/schools/create',
    timetable: environment.SERVERURL + environment.SERVERPORT + '/schools/timetable',
    activatedschool: environment.SERVERURL + environment.SERVERPORT + '/schools/activatedschool',
    getschoolinfobyid: environment.SERVERURL + environment.SERVERPORT + '/schools/getschoolinfobyid',
    createseat: environment.SERVERURL + environment.SERVERPORT + '/schools/createseat',
    getseatinglist: environment.SERVERURL + environment.SERVERPORT + '/schools/getseatinglist',
    getseatbyschoolid: environment.SERVERURL + environment.SERVERPORT + '/schools/getseatbyschoolid',
    schoolfilter: environment.SERVERURL + environment.SERVERPORT + '/schools/schoolfilter',
    getclasssection: environment.SERVERURL + environment.SERVERPORT + '/schools/getclasssection',
    getclassseatingtable: environment.SERVERURL + environment.SERVERPORT + '/schools/getclassseatingtable',
    getseatingimage: environment.SERVERURL + environment.SERVERPORT + '/schools/getseatingimage',
    getadmissioncount: environment.SERVERURL + environment.SERVERPORT + '/schools/getadmissioncount',
    gethealthquestion: environment.SERVERURL + environment.SERVERPORT + '/schools/gethealthquestion',
    setgamepath: environment.SERVERURL + environment.SERVERPORT + '/schools/setgamepath',
    getgameurlinschool: environment.SERVERURL + environment.SERVERPORT + '/schools/getgameurlinschool',
  },
  PARENTS: {
    create: environment.SERVERURL + environment.SERVERPORT + '/users/save',
    getbyuserid: environment.SERVERURL + environment.SERVERPORT + '/users/getbyid',
    update: environment.SERVERURL + environment.SERVERPORT + '/users/update',
    savedoctorinfo : environment.SERVERURL + environment.SERVERPORT + '/users/seveuserinfo',
    getid: environment.SERVERURL + environment.SERVERPORT + '/users/getmyaccountinfo',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidaraparentsprofile/viewall',
    viewall: environment.SERVERURL + environment.SERVERPORT + '/users/viewall',
    getparentinfo: environment.SERVERURL + environment.SERVERPORT + '/kidparentsmap/kidinfo',
    kidinfo_doctor: environment.SERVERURL + environment.SERVERPORT + '/kidparentsmap/kidinfo_doctor',
    createdailyroutinestatus: environment.SERVERURL + environment.SERVERPORT + '/kidparentsmap/dailyroutine_status',
    updatedailyroutinestatus: environment.SERVERURL + environment.SERVERPORT + '/kidparentsmap/dailyroutine_status_update',
    activatenidara: environment.SERVERURL + environment.SERVERPORT + '/dailyscheduler/activatenidara',
    healthquestion: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbykididdaymap',
    healthanswer: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbyparentquestionday',
    deactive: environment.SERVERURL + environment.SERVERPORT + '/whyareyouleaving/viewall',
    delete: environment.SERVERURL + environment.SERVERPORT + '/users/statusupdate',
    getparentgame: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbyparentgame',
    getparentgamefirst: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbyparentgamefirsteducation',
    chidexpriychack: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/chidexpriychack',
    healthdoctoranswer: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbyhealthkidanswer',
    getbyid: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbykidinfo',
    getParentInfoview: environment.SERVERURL + environment.SERVERPORT + '/users/getparentinfobyfilter',
  },
  KID_INFO: {
    viewall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/viewall',
    getbychidinfo: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/viewchildinfofilter',
    schoolviewall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidschoolinfo/viewall',
  },
  BILLING_ADDRESS: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidaraparentsaddressinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidaraparentsaddressinfo/getaddressinfo',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidaraparentsaddressinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidaraparentsaddressinfo/update'
  },
  SCHOOL_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidschoolinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidschoolinfo/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidschoolinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidschoolinfo/update'
  },
  CAREGIVER_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidcaregiverinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidcaregiverinfo/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidcaregiverinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidcaregiverinfo/update'
  },
  LANGUAGE_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidlanguageinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidlanguageinfo/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidlanguageinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidlanguageinfo/update'
  },
  FIRENDS_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfriendsinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfriendsinfo/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfriendsinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfriendsinfo/update'
  },
  FAMILY_INFO: {
    create: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfamilyinfo/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfamilyinfo/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfamilyinfo/viewall',
    update: environment.SERVERURL + environment.SERVERPORT + '/nidarakidfamilyinfo/update'
  },
  AUTH_INFO: {
    usercreate: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/usercreate',
    productmailsend: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/productmailsend',
    successtokensend: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/successtokensend',
    register: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/register',
    emailverify: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/emailverify',
    address: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/uaseraddress',
    login: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/logincheck',
    posttokenSend: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/posttokenSend',
    sendusertoken: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/tokenSend',
    logout: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/logout',
    getuserinfobytoken: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/getuserinfobytoken',
    changepassword: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/changepassword',
    forgotpassword: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/forgotpassword',
    resetpassword: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/resetpassword',
    getparentvalidation: environment.AUTHSERVERURL + environment.SERVERPORT + '/login/parentvalidate',
  },
  EMAILS: {
    cartabond: environment.WEBAPISERVICE + environment.SERVERPORT + '/email/birthday',
    cartabondthree: environment.WEBAPISERVICE + environment.SERVERPORT + '/email/cartabondthree',
    birthday: environment.WEBAPISERVICE + environment.SERVERPORT + '/email/birthday',
    viewall: environment.WEBAPISERVICE + environment.SERVERPORT + '/email/cartabondtow',
    emailsend: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/attendance',
    parentqus: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/parentqus',
    companyenquiry: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/companydata',
    sendmailinparend: environment.WEBAPISERVICE + environment.SERVERPORT + '/email/sendmailinparend',
    invoceemailsend: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/invoceemailsend',
    custominvoceemailsend: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/custominvoceemailsend',
    sendcontact: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/sendcontact',
    senddoctorinfo: environment.WEBAPISERVICE + environment.SERVERPORT + '/emailnew/senddoctorinfo',
  },
  BETASERVICE: {
    guidded: environment.BETASERVICEURL + environment.SERVERPORT + '/answers/setguidedlearning'
  },
  MEDICAL_CONCERN: {
    create: environment.SERVERURL + environment.SERVERPORT + '/prenidaramedicalconcerns/create',
    update: environment.SERVERURL + environment.SERVERPORT + '/prenidaramedicalconcerns/update',
    getid: environment.SERVERURL + environment.SERVERPORT + '/prenidaramedicalconcerns/getbynidarakidprofileid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/prenidaramedicalconcerns/viewall'
  },
  DAILYSCHEDULER: {
    create: environment.SERVERURL + environment.SERVERPORT + '/dailyscheduler/save',
    update: environment.SERVERURL + environment.SERVERPORT + '/dailyscheduler/save',
    getid: environment.SERVERURL + environment.SERVERPORT + '/dailyscheduler/getbykidid',
    getall: environment.SERVERURL + environment.SERVERPORT + ''
  },
  DAILYROUTINE_INFO: {
    viewall: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/viewall',
    create: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/create',
    update: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/save',
    createdattendance: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/dailyattendance',
    getid: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/getbykidid',
    getroutineid: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/getroutinekidid',
    routinestatus: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/routinestatus',
    getsessionstartend: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/getsessionstartend',
    getsessionstartendbyid: environment.SERVERURL + environment.SERVERPORT + '/dailyroutine/getsessionstartendbyid',
  },
  DAILYROUTINE: {
    create: environment.SERVERURL + environment.SERVERPORT + '/answers/create',
    update: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/update',
    getid: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/getbyid',
    getall: environment.SERVERURL + environment.SERVERPORT + '/prenidaraquestionnaire/viewall'
  },
  INTERESTDEVE: {
    create: environment.SERVERURL + environment.SERVERPORT + '/answers/create',
    update: environment.SERVERURL + environment.SERVERPORT + '',
    getid: environment.SERVERURL + environment.SERVERPORT + '',
    getall: environment.SERVERURL + environment.SERVERPORT + '',
    getquestion: environment.SERVERURL + environment.SERVERPORT + '/questions/getprenidaraquestions'

  },
  PAYMENTINFO: {
    wp: 'http://www.nidarachildren.com/list-orders.php',
    getinfo: environment.SERVERURL + environment.SERVERPORT + '/guidedlearning/paymentinfo',
    cancelSubscription: environment.SERVERURL + environment.SERVERPORT + '/nidarakidprofile/cancel_subscription'
  },

  DEACTIVEACCOUNT: environment.SERVERURL + environment.SERVERPORT + '/accountstatus/deactivate',
  DEACTIVEACCOUNTQUESTION: environment.SERVERURL + environment.SERVERPORT + '/whyareyouleaving/viewall',
  GAME_INFO: {
    viewall: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabasenew/viewall',
    getgameurl: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabasenew/getsignedgameurl',
    getgameinfo: environment.SERVERURL + environment.SERVERPORT + '/gamescoreframmap/viewall',
    getbyid: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabasenew/getbyid',
    gatdaywies: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/getdailygameschool',
    gatdaywiesviewall: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/viewall',
    getgamesanwers: environment.SERVERURL + environment.SERVERPORT + '/gameanswers/viewall',
    getgameresult: environment.SERVERURL + environment.SERVERPORT + '/gameanswers/getgameresult',
    getgamesquestionanswers: environment.SERVERURL + environment.SERVERPORT + '/gamesquestionanswer/viewall',
    getbygameid: environment.SERVERURL + environment.SERVERPORT + '/gamesquestionanswer/getbygameid',
    getgames: 'assets/appData.json',
    sessionid: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabase/getSessionMainId',
    getgameexcelsheet: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabase/getgameexcelsheet',
    getgamefilter: environment.SERVERURL + environment.SERVERPORT + '/gamescoreframmap/getgamefilter',
    // viewall:environment.SERVERURL + environment.SERVERPORT + "/gamesdatabase/viewall",
    gameviewall: environment.SERVERURL + environment.SERVERPORT + '/gamescoremap/viewall',
    gameupdate: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabase/update',
    // getgameinfo:environment.SERVERURL + environment.SERVERPORT + "/gamescoreframmap/viewall",
    getbygrade: environment.SERVERURL + environment.SERVERPORT + '/gamescoreframmap/getbygamegrade',
    getbystandint: environment.SERVERURL + environment.SERVERPORT + '/gamescoreframmap/getbystandared',
    update: environment.SERVERURL + environment.SERVERPORT + '/gamescoremap/update',
    create: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabase/create',
    questionanswer: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabase/questionanswer',
    // getgamesquestionanswers: environment.SERVERURL + environment.SERVERPORT + "/gamesquestionanswer/viewall",
    updategamesquestionanswers: environment.SERVERURL + environment.SERVERPORT + '/gamesquestionanswer/update',
    gethealthmaster: environment.SERVERURL + environment.SERVERPORT + '/gametagginghealthmaster/viewall',
    getfullslidmasters: environment.SERVERURL + environment.SERVERPORT + '/gametagginghealthmaster/excel',
    saveexcelfile: environment.SERVERURL + environment.SERVERPORT + '/gametagginghealthmaster/saveexcelfile',
  },
  // GUIDED_LEARNING: {
  //   getguidedlearning: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/getguidedlearning',
  //   create: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/create',
  //   guidedlist: environment.SERVERURL + environment.SERVERPORT + '/guidedlearning/viewall',
  // },
  GUIDED_LEARNING: {
    getguidedlearning: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/getguidedlearning',
    create: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/create',
    guidedlist: environment.SERVERURL + environment.SERVERPORT + '/guidedlearning/viewall',
    guidedSchedule: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/viewall',
    guidedgamemap: environment.SERVERURL + environment.SERVERPORT + '/guidedlearninggamesmap/create',
    getid: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningschedule/getbyid',
    guidedScheduleday: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/getbygrade',
    getbyid: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/gettaggingmap',
    update: environment.SERVERURL + environment.SERVERPORT + '/guidedlearningdaygamemap/update',
    getgamelist: environment.SERVERURL + environment.SERVERPORT + '/gamescoreframmap/getgamelistcoremap'
  },
  GAMEDATA: {
    alphabetic: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabasenew/getgameinfobygameid',
    answer: environment.SERVERURL + environment.SERVERPORT + '/gamesdatabasenew/savegamesresult'
  },
  HEALTH: {
   create: environment.SERVERURL + environment.SERVERPORT + '/healthparentanswer/create',
    sevechildinfo: environment.SERVERURL + environment.SERVERPORT + '/healthparentanswer/sevechildinfo',
    parentgame: environment.SERVERURL + environment.SERVERPORT + '/parentgameanswer/create',
    sendparentanswer: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/sendparentanswer',
    viewall: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentcat/viewall',
    getschoolresult: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentcat/getschoolresult',
    getschoolresultbystandid : environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentcat/getschoolresultbystandid',
    getschoolresultbyindicator : environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentcat/getschoolresultbyindicator',
    getgameresultbyid : environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentcat/getgameresultbyid',
    creatquestion: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentquestion/create',
    questionviewall: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentquestion/viewall',
    getbyhealthval: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentquestion/getbyhealthval',
    update: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentquestion/update',
    getbycoreframe: environment.SERVERURL + environment.SERVERPORT + '/healthdevelopmentquestion/getbyhealthcore',
    daysquestion: environment.SERVERURL + environment.SERVERPORT + '/healthdevequesview/viewall',
    daymapcreate: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/create',
    daymapviewall: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/viewall',
    daymapquesfilter: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbydaymapques',
    getbygradeid: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/getbygradeidqution',
    daymapupdate: environment.SERVERURL + environment.SERVERPORT + '/healthdevedaysmap/update'
  },
  WEBADMIN: {
    NOTIFYME: environment.SERVERURL + environment.SERVERPORT + '/login/outofindiamail',
     GETCLIENTIP: environment.SERVERURL + environment.SERVERPORT + '/accountstatus/getclientip',
     viewall: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/viewall',
     save: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/save',
     payment: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/payment',
     getbyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/getbyid',
     getproduct: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/getProductInfo',
     getproductlist: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/getProductByTypeId',
     searchproduct: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/searchproduct',
     addproductcart: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/addProductInCart',
     deletebyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/deletebyid',
     deleteCartProduct: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/cartDelete',
     getByTypeId: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/getByTypeId',
     COUPON: {
       viewall: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/viewall',
       save: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/save',
       getbyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/getbyid',
       deletebyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/deletebyid',
       setCouponDiscount: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/setCouponDiscount',
       getbycouponcodetype: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncdiscountcoupon/getbycouponcodetype'
     },
     ORDER: {
       viewall: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncorder/viewall',
       getbyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncorder/getbyid',
       addproductorder: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncorder/addproductorder',
       ordertotalamount: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncorder/ordertotalamount',
       invocie: environment.WEBAPISERVICE + environment.SERVERPORT + '/ncproduct/invoceemailsend',
     }
   },
   DOCTOR: {
      parentlist: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/getparentdata',
      doctorvisiterlist: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/doctorvisiterlist',
      getvisitlist: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/getvisitlist',
      parentcomplete: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/parentcomplete',
      getvisitlistbychildid: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/getvisitlistbychildid',
      getgameresult: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgameresult',
      getgameresulttwo: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgameresulttwo',
      gethealthgamevalue: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/gethealthgamevalue',
      getindicatorbygame: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getindicatorbygame',
      getgameresultbysubject: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgameresultbysubject',
      getgamefilterbysubject: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgamefilterbysubject',
      getgameinfobyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgameinfobyid',
      getgameinfofilterbyid: environment.WEBAPISERVICE + environment.SERVERPORT + '/healthdevedaysmap/getgameinfofilterbyid',
      getdoctorlist: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/getdoctorlist',
      addhospitaladdress: environment.WEBAPISERVICE + environment.SERVERPORT + '/doctorcode/addhospitaladdress',
   },
   CORE_FREAM: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/viewall',
      subjectmapcreate: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/subjectmapcreate'
    },
    SUBJECT_INFO: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/subject/viewall',
      getsubjectdata: environment.SERVERURL + environment.SERVERPORT + '/subject/getsubjectdata',
    },
    CORE_FRAMEWORK: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/viewall',
      subjectmapcreate: environment.SERVERURL + environment.SERVERPORT + '/coreframeworks/subjectmapcreate'
    },
    GRADE: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/grade/viewall'
    },
    COUNTRY_INFO: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/countries/viewall',
      stateviewall: environment.SERVERURL + environment.SERVERPORT + '/state/viewall'
    },
    GRADING_REPORTING: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/gradingreporting/viewall',
      create: environment.SERVERURL + environment.SERVERPORT + '/gradingreporting/create',
      update: environment.SERVERURL + environment.SERVERPORT + '/gradingreporting/update',
      grframeview: environment.SERVERURL + environment.SERVERPORT + '/grframwork/viewall',
      grtypeview: environment.SERVERURL + environment.SERVERPORT + '/grtype/viewall',
      getgradingcore: environment.SERVERURL + environment.SERVERPORT + '/gradingreporting/getbycorewise',
      getgradingsub: environment.SERVERURL + environment.SERVERPORT + '/gradingreporting/getbysubjectwise',
    },
    PARENT_GAMES: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/viewall',
      gameupdate: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/gameupdate',
      standardupdate: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/standardupdate',
      create: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/create',
      getcoremap: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/getbycoremap',
      getcoremapsub: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/getbycoremapsub',
      getcoremapind: environment.SERVERURL + environment.SERVERPORT + '/parentgamesdatabase/getbycoremapind',
      gameviewall: environment.SERVERURL + environment.SERVERPORT + '/parentgameguided/viewall',
      gamedaycreate: environment.SERVERURL + environment.SERVERPORT + '/parentgameguided/create',
      parentguided: environment.SERVERURL + environment.SERVERPORT + '/parentgameguidedlearing/viewall',
    },
    DAYS: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/days/viewall',
      healthviewall: environment.SERVERURL + environment.SERVERPORT + '/dayshealth/viewall'
    },
    INDICATOR: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/indicators/viewall',
      create: environment.SERVERURL + environment.SERVERPORT + '/indicators/create'
    },

    STANDARD: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/standard/viewall',
      create: environment.SERVERURL + environment.SERVERPORT + '/standard/create',
      standardmapview: environment.SERVERURL + environment.SERVERPORT + '/standardindicatorsmap/viewall',
      getstandardmap: environment.SERVERURL + environment.SERVERPORT + '/standardindicatorsmap/getbystandardmap',
      getindicatorsdmap: environment.SERVERURL + environment.SERVERPORT + '/standardindicatorsmap/getbyindicatormap',
      getbystandintmap: environment.SERVERURL + environment.SERVERPORT + '/standardindicatorsmap/getby_grade_coreframe'
    },
    ANNOUNCEMENT: {
      viewall: environment.SERVERURL + environment.SERVERPORT + '/announcement/viewall',
      create: environment.SERVERURL + environment.SERVERPORT + '/announcement/create',
      getdatabyid: environment.SERVERURL + environment.SERVERPORT + '/announcement/getdatabyid',
      getannouncement: environment.SERVERURL + environment.SERVERPORT + '/announcement/getannouncement',
    }

});
export const ROUTER = Object.freeze({
  PATH: []
});
