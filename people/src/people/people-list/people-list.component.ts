import { Component, OnInit } from '@angular/core';
import { Person } from 'src/model/people';
import { peopleModel } from 'src/model/people';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Array<Person>;
  constructor() { }

  ngOnInit() {
    this.people = peopleModel.findAll();
  }

  handleRemovePerson(id: number) {
    peopleModel.delete(id);
    this.people = peopleModel.findAll();

  }
}
