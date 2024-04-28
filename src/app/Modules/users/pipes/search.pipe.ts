import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userListArray:any[],searchKey:string): any[] {

    const result:any=[];

  if(!userListArray || searchKey==""){
    return userListArray;
  }
  else{
    userListArray.forEach((item:any)=>{
      //item==searchKey ? result.push(item)
      if(item.name?.toLowerCase().trim().includes(searchKey.toLowerCase().trim())){
        return result.push(item)
      }
    })
  }
    return result;
  }

}
