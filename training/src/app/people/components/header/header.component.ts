import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { PersonComponent } from '../person/person.component';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PersonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user:Person
  constructor(readonly configService:ConfigService, readonly peopleService:PeopleService ){
    this.user = peopleService.getUser()
  }

}
