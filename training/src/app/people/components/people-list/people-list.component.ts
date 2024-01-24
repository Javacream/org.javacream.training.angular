import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';
import { PersonComponent } from '../person/person.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  peopleList:Array<Person>
  constructor(readonly peopleService:PeopleService){
    this.peopleList = peopleService.findAll()
  }
}
