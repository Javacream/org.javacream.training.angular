import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  title="People Application"
  company="Javacream"
  demo= "Hugo";
  constructor() { }
}
