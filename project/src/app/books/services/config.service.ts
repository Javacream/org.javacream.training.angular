import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  profile = {lastname: "Sawitzki", firstname: "Rainer"}
  appName = "Books Application"
  company = "JAVACREAM"
  peopleEndpoint = "https://jsonplaceholder.typicode.com/users"
}
