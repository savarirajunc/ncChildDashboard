import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'childFilter'
})
export class ChildFilterPipe implements PipeTransform {

  transform(childInformance: any, child_male:boolean, child_female:boolean, preschool:boolean, prekindergarden:boolean, kindergarden:boolean, child_age:any): any {
    let filter=[];
    if( !child_male && !child_female && !preschool && !prekindergarden && !kindergarden && !child_age) return childInformance;
      filter = childInformance.filter(function(childInfo){
        if(child_male && childInfo.gender === "male" || child_female && childInfo.gender === "female"){
           if(preschool && childInfo.grade === "1"){
            return childInfo;
          }
          else if(prekindergarden && childInfo.grade === "2"){
            return childInfo;
          }
          else if(kindergarden && childInfo.grade === "3"){
            return childInfo;
          }
          else if(preschool && childInfo.grade !== "1"){
            return false;
          }
          else if(prekindergarden && childInfo.grade !== "2"){
            return false;
          }
          else if(kindergarden && childInfo.grade !== "3"){
            return false;
          }
          else if(child_age && childInfo.age === child_age){
            return childInfo;
          }
          return childInfo;
        }
        // else if(child_age && childInfo.age === child_age){
        //     return childInformance.age <= child_age;
        // }
        // else if(child_female && childInfo.gender === "female"){
        //   return childInformance;
        // }
      });
    return filter;
  }

}
