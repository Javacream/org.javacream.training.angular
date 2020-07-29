import { Injectable } from '@angular/core';
import {NotificationService} from './notification.service' 
import { Person } from '../model/people';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeopleServerControllerService {
  ENDPOINT = "http://10.28.6.1:8080/people"
  constructor(readonly notificationService: NotificationService, readonly http:HttpClient) { }

  async findByIdPlainFetch(id:number):Promise<Person>{
      try {
        const response: Response = await fetch(`${this.ENDPOINT}/${id}`);
        const person: Person = await response.json();
        this.notificationService.notify("people.search", `searched for person with id ${id}`)
        return person;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

  findByIdHttpClient(id:number, update:(person:Person)=> void):void{
    this.notificationService.notify("people.search", `searched for person with id ${id}`)
    this.http.get(`${this.ENDPOINT}/${id}`).subscribe(update)
  }
}
