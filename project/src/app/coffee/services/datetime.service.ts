import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  toCustomDateTimeString(date: Date) {
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = (date.getMonth() < 10 ? '0' : '') + date.getMonth();
    const year = date.getFullYear();
    const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}
