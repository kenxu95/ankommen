import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  getTime(date: Date){
     return this.padToString(date.getHours()) + ":" + this.padToString(date.getMinutes());
  }

  private padToString(num: number){
    if (num < 10)
       return "0" + num.toString();
    return num.toString();
  }
}