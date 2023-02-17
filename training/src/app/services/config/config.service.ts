import { Injectable } from '@angular/core';
import { PersonIF } from 'src/app/people/model/people.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  title="P E O P L E"
  company="Javacream"
  endpoint="http://javacream.eu:8080/people"

  constructor() { }
}
