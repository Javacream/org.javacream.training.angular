import { Injectable } from '@angular/core';
import { PersonIF } from 'src/app/people/model/people.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  title="P E O P L E"
  company="Javacream"
  user:PersonIF = {id:0, lastname:"Tester", firstname:"Maria", gender:"f", height:155}

  constructor() { }
}
