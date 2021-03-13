import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

  transform(companys: any, trem: any): any {
    if( !trem ) return companys;
      return companys.filter(function(company){
        if(company.company_name){
          return company.company_name.toLowerCase().includes(trem.toLowerCase());
        }
        if(company.length == 0){
          return [-1];
        }
      });
  }


}
