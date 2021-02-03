import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config{
    appTitle = "P E O P L E" 
    company = "javacream"
    endpoint ="http://localhost:8080/people" //"http://h2908727.stratoserver.net:8080/people" 

}

