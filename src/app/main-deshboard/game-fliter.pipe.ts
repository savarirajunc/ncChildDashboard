import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFliter'
})
export class GameFliterPipe implements PipeTransform {

  transform(gameinformation: any, grade_id: any, framework_id:any,subject_id:any): any {
    let filter=[];
    if( !grade_id && !framework_id && !subject_id) return gameinformation;
    filter = gameinformation.filter(function(gameInfo){
      if(grade_id && gameInfo.grade_id === grade_id){
        if(framework_id && gameInfo.framework_id === framework_id){
          if(subject_id && gameInfo.subject_id === subject_id){
            return gameInfo;
            }
            else if(subject_id && gameInfo.subject_id !== subject_id){
              return false;
            }
            return gameInfo;
          }
        else if(framework_id && gameInfo.framework_id !== framework_id){
          return false;
        }
        return gameInfo;
      }
      else if(framework_id && gameInfo.framework_id === framework_id){
        if(grade_id && gameInfo.grade_id === framework_id){
          return gameInfo;
        }
        else if(grade_id && gameInfo.grade_id !== framework_id){
          return false;
        }
        else if(subject_id && gameInfo.subject_id === subject_id){
          return gameInfo;
        }
        else if(subject_id && gameInfo.subject_id !== subject_id){
          return false;
        }
        return gameInfo;
      }
      else if(subject_id && gameInfo.subject_id === framework_id){
        if(grade_id && gameInfo.grade_id === framework_id){
          return gameInfo;
        }
        else if(grade_id && gameInfo.grade_id !== framework_id){
          return false;
        }
        else if(framework_id && gameInfo.framework_id === subject_id){
          return gameInfo;
        }
        else if(framework_id && gameInfo.framework_id !== subject_id){
          return false;
        }
        return gameInfo;
      }
    });
    return filter;
  }

}
