import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items :any[] ,field : any ,  value: any): any {
    
    if(!value) return items ; 
    return items.filter(it => it[field].search(value) != -1) ; 
  }

}
