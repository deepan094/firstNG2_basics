import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

transform(items: any[], field : string, value : string): any[] {  
        if (!items || !value) {
      return items;
    }
      if (value !== undefined)        
        value = value.toUpperCase();
        //return items.filter(it => it[field] == value);
        return items.filter(function(item){
          return item[field].toUpperCase().indexOf(value) !== -1 //xx[field] == value;
        })
    }
}
