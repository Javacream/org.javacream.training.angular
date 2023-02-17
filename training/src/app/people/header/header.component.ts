import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(readonly configService: ConfigService, readonly peopleService:PeopleService){
    this.headerText = configService.title
    peopleService.findUser((person) => this.user = person)
  }

  headerText:string
  user?:PersonIF
}
