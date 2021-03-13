import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys=[];
      keys= Object.keys(value);
      console.log(keys);
      return keys;
  }

}
