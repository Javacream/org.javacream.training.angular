import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  endpoint = "http://localhost:8080/people"
  constructor(readonly httpClient: HttpClient) { }

  async findAllPeopleAsyncAwait():Promise<Array<Person>>{
    let response = await fetch(this.endpoint)
    let people:Array<Person> = await response.json()
    return people
  }

  findAllPeopleObserver( updateFunction: (result: Array<Person> )=> void){
    this.httpClient.get<Array<Person>>(this.endpoint).subscribe(updateFunction)
  }

}
