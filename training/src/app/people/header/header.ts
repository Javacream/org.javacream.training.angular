import { Component } from '@angular/core';
import { ConfigService } from '../config-service';
import { PeopleService } from '../people-service';
import { PersonComponent } from '../person-component/person-component';

@Component({
  selector: 'app-header',
  imports: [PersonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(readonly config: ConfigService, readonly peopleService: PeopleService){
  }
}
