import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeopleService } from '../people-service';
import { Person } from '../person_class';
import { PersonComponent } from '../person-component/person-component';

@Component({
  selector: 'app-people-list',
  imports: [CommonModule, PersonComponent],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css'
})
export class PeopleList {
  peopleList:Array<Person> = []
  constructor(readonly peopleService: PeopleService){
    this.peopleList = peopleService.findAll()
  }
}
