import { Component, OnInit } from '@angular/core';
import { Person } from 'src/model/people';
import { samplePeople } from 'src/model/people-sample-data';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Array<Person>;
  constructor() { }

  ngOnInit() {
    this.people = samplePeople;
    console.log(this.people);
  }

}
