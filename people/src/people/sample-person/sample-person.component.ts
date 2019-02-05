import { Component, OnInit } from '@angular/core';
import { Person, PersonImpl } from 'src/model/people';
import { samplePerson } from 'src/model/people-sample-data';

@Component({
  selector: 'people-sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {
  samplePerson: Person;
  constructor() { }

  ngOnInit() {
    this.samplePerson = samplePerson;
    setTimeout(() => {this.samplePerson.lastname = 'Sawitzki'; }, 5000);
  }

}
