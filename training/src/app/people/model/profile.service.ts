import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Person} from '../model/people.model'
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(readonly httpClient:HttpClient, readonly config:ConfigService) { 
  }

  getProfile(update:(_:Person) => void):void{
    this.httpClient.get<Person>(`${this.config.endpoint}/6`).subscribe((person) => update(person))
  }
}
