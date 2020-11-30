import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  profile = {lastname: "Sawitzki", firstname: "Rainer"}
  appName = "Books Application"
  company = "JAVACREAM"
  peopleEndpoint = "http://h2908727.stratoserver.net:8080/people"
}
