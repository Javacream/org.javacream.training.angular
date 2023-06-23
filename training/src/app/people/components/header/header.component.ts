import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Person } from '../../schema/person';
import { WhiteboardService } from '../../services/whiteboard.service';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user?:Person
  constructor(readonly configService: ConfigService, readonly whiteboard: WhiteboardService, readonly peopleService:PeopleService){
    this.whiteboard.user.subscribe((person) => this.user = person)
    this.peopleService.getApplicationUser()
  }
}
