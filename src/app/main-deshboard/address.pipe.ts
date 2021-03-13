import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Address'
})
export class AddressPipe implements PipeTransform {

  transform(address: any,Country: any): any {
      let filter=[];
      if(!Country) return address;
        filter = address.filter(function(addressfilter){
          if(Country && addressfilter.country_id === Country){
            return addressfilter;
          }
        });
    return filter;
  }

}
