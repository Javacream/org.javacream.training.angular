import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

constructor(readonly http:HttpClient) { }

findProfile(update: (person:Person) => void ){
  this.http.get<Person>("http://h2908727.stratoserver.net:8080/people/6").subscribe(update)
}
}

type Person = {
  id:number
  lastname:string
  firstname:string
  gender:string
  height:number
}
