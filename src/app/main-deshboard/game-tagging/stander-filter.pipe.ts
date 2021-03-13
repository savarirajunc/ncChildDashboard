import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standerFilter'
})
export class StanderFilterPipe implements PipeTransform {

  transform(standards: any, grade_id:any, framework_id:any, subject_id:any): any {
    // let filter=[];
    // if(!grade_id && !framework_id && !subject_id) return standards;
    // filter = standards.filter(function(standard){
    //   if(grade_id && standard.guided_id === grade_id && framework_id && standard.coreframwor_id === framework_id && subject_id && standard.subject_id === subject_id){
    //     return standard;
    //   }
    // });
    // return filter;
  }

}
