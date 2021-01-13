import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appName= "P E O P L E"
  company= "Javacream"
  endpoint = "http://localhost:8080/people"

  constructor() { }
}
