import { Component } from '@angular/core';
import { ConfigService } from '../config-service';
import { PeopleService } from '../people-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(readonly config: ConfigService, readonly peopleService: PeopleService){
  }
}
