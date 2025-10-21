import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeopleService } from '../people-service';
import { Person } from '../person_class';

@Component({
  selector: 'app-people-list',
  imports: [CommonModule],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css'
})
export class PeopleList {
  peopleList:Array<Person> = []
  constructor(readonly peopleService: PeopleService){
    this.peopleList = peopleService.people
  }
}
