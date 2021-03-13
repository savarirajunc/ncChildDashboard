import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'schoolFilter'
})
export class SchoolFilterPipe implements PipeTransform {

  transform(schools: any, trem: any): any {

    if( !trem ) return schools;
      return schools.filter(function(school){
        if(school.school_name){
          return school.school_name.toLowerCase().includes(trem.toLowerCase());
        }
      });
  }
}
