import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from '../../services/config.service'


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

constructor(readonly http:HttpClient, readonly config: ConfigService) { }

findProfile(update: (person:Person) => void ){
  this.http.get<Person>(this.config.peopleEndpoint + "/6").subscribe(update)
}
}

type Person = {
  id:number
  name:string
  username:string
}
