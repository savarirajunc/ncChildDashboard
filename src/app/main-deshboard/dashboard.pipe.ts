import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'Filter'
})
export class DashboardPipe implements PipeTransform {

  transform(parentinformation:any,Country: any, states: any, usertype_parent:string, usertype_caretaker:string, male:boolean, female:boolean, fromdate:string, todate:string, emoloyed:any, home_maker:any): any {
    let filter=[];
    if( !Country && !usertype_parent && !usertype_caretaker && !male && !female && !fromdate && !todate && !states && !emoloyed && !home_maker) return parentinformation;
    //console.log(this.parentinformation.length);
  filter = parentinformation.filter(function(parentinfo){

    var datePipe = new DatePipe("en-US");
    fromdate= datePipe.transform(fromdate, 'yyyy-MM-dd');
    todate= datePipe.transform(todate, 'yyyy-MM-dd');
     if(Country && parentinfo.country_of_citizenship === Country){
       if( fromdate && todate && parentinfo.created_at === fromdate,todate  ) {
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(usertype_parent && parentinfo.user_type==="parent"){
            return parentinfo;
       }
      else if(usertype_parent && parentinfo.user_type!=="parent"){
            return false;
       }
      else if(usertype_caretaker &&parentinfo.user_type==="caretaker" ){
         return parentinfo;
       }
      else if(usertype_caretaker &&parentinfo.user_type!=="caretaker" ){
         return false;
       }
       else if(male && parentinfo.parent_type==="father"){
         return parentinfo;
       }
      else if(female && parentinfo.parent_type==="mother" ){
         return parentinfo;
       }
       else if(male && parentinfo.parent_type!=="father"){
         return false;
       }
      else if(female && parentinfo.parent_type!=="mother" ){
         return false;
       }
       else if(states && parentinfo.states === states){
          return parentinfo;
       }
       else if(states && parentinfo.states !== states){
          return false;
       }
       else if(emoloyed && parentinfo.occupation === "Emoloyed"){
          return parentinfo;
       }
       else if(emoloyed && parentinfo.occupation !== "Emoloyed"){
          return false;
       }
       else if(home_maker && parentinfo.occupation === "Home_Maker"){
          return parentinfo;
       }
       else if(home_maker && parentinfo.occupation !== "Home_Maker"){
          return false;
       }
       return parentinfo;
     }
    else if(fromdate && todate && parentinfo.created_at === fromdate,todate ){
       if(Country && parentinfo.country_of_citizenship === Country){
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       if(Country && parentinfo.country_of_citizenship !== Country){
         return false;
       }
      else if(usertype_parent && parentinfo.user_type==="parent"){
          return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(usertype_parent && parentinfo.user_type!=="parent"){
            return false;
       }
       else if(usertype_caretaker &&parentinfo.user_type==="caretaker" ){
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(usertype_caretaker &&parentinfo.user_type!=="caretaker" ){
         return false;
       }
       else if(male && parentinfo.parent_type==="father"){
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
      else if(female && parentinfo.parent_type==="mother" ){
        return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(male && parentinfo.parent_type!=="father"){
         return false;
       }
      else if(female && parentinfo.parent_type!=="mother" ){
         return false;
       }
       else if(states && parentinfo.states === states){
          return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(states && parentinfo.states !== states){
          return false;
       }
       else if(emoloyed && parentinfo.occupation === "Emoloyed"){
          return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(emoloyed && parentinfo.occupation !== "Emoloyed"){
          return false;
       }
       else if(home_maker && parentinfo.occupation === "Home_Maker"){
          return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(home_maker && parentinfo.occupation !== "Home_Maker"){
          return false;
       }
       return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
     }
     else if(usertype_parent && parentinfo.user_type==="parent" || usertype_caretaker &&parentinfo.user_type==="caretaker"){
       if(Country && parentinfo.country_of_citizenship === Country){
         return parentinfo;
       }
       else if(Country && parentinfo.country_of_citizenship !== Country){
         return false;
       }
       else if( fromdate && todate && parentinfo.created_at === fromdate,todate  ) {
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(male && parentinfo.parent_type==="father"){
        return parentinfo;
       }
      else if(female && parentinfo.parent_type==="mother" ){
        return parentinfo;
       }
       else if(male && parentinfo.parent_type!=="father"){
         return false;
       }
      else if(female && parentinfo.parent_type!=="mother" ){
         return false;
       }
       else if(states && parentinfo.states === states){
          return parentinfo;
       }
       else if(states && parentinfo.states !== states){
          return false;
       }
       else if(emoloyed && parentinfo.occupation === "Emoloyed"){
          return parentinfo;
       }
       else if(emoloyed && parentinfo.occupation !== "Emoloyed"){
          return false;
       }
       else if(home_maker && parentinfo.occupation === "Home_Maker"){
          return parentinfo;
       }
       else if(home_maker && parentinfo.occupation !== "Home_Maker"){
          return false;
       }
        return parentinfo;
     }
     else if(male && parentinfo.parent_type==="father" || female && parentinfo.parent_type==="mother"){
       if(Country && parentinfo.country_of_citizenship === Country){
         return parentinfo;
       }
       else if(Country && parentinfo.country_of_citizenship !== Country){
         return false;
       }
       else if( fromdate && todate && parentinfo.created_at === fromdate,todate  ) {
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(usertype_parent && parentinfo.user_type==="parent"){
            return parentinfo;
       }
      else if(usertype_parent && parentinfo.user_type!=="parent"){
            return false;
       }
      else if(usertype_caretaker &&parentinfo.user_type==="caretaker" ){
         return parentinfo;
       }
      else if(usertype_caretaker &&parentinfo.user_type!=="caretaker" ){
         return false;
       }
       else if(states && parentinfo.states === states){
          return parentinfo;
       }
       else if(states && parentinfo.states !== states){
          return false;
       }
       else if(emoloyed && parentinfo.occupation === "Emoloyed"){
          return parentinfo;
       }
       else if(emoloyed && parentinfo.occupation !== "Emoloyed"){
          return false;
       }
       else if(home_maker && parentinfo.occupation === "Home_Maker"){
          return parentinfo;
       }
       else if(home_maker && parentinfo.occupation !== "Home_Maker"){
          return false;
       }
        return parentinfo;
     }

     else if(emoloyed && parentinfo.occupation === "Emoloyed" || home_maker && parentinfo.occupation === "Home_Maker"){
       if(Country && parentinfo.country_of_citizenship === Country){
         return parentinfo;
       }
       else if(Country && parentinfo.country_of_citizenship !== Country){
         return false;
       }
       else if( fromdate && todate && parentinfo.created_at === fromdate,todate  ) {
         return parentinfo.created_at >= fromdate &&  parentinfo.created_at <= todate;
       }
       else if(usertype_parent && parentinfo.user_type==="parent"){
            return parentinfo;
       }
      else if(usertype_parent && parentinfo.user_type!=="parent"){
            return false;
       }
      else if(usertype_caretaker &&parentinfo.user_type==="caretaker" ){
         return parentinfo;
       }
      else if(usertype_caretaker &&parentinfo.user_type!=="caretaker" ){
         return false;
       }
       else if(states && parentinfo.states === states){
          return parentinfo;
       }
       else if(states && parentinfo.states !== states){
          return false;
       }
       else if(male && parentinfo.parent_type==="father"){
        return parentinfo;
       }
      else if(female && parentinfo.parent_type==="mother" ){
        return parentinfo;
       }
       else if(male && parentinfo.parent_type!=="father"){
         return false;
       }
      else if(female && parentinfo.parent_type!=="mother" ){
         return false;
       }
        return parentinfo;
     }
   });
   if(filter.length == 0){
     return [-1];
   }
   return filter;
 }

}
