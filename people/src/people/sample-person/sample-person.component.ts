import { Component, OnInit } from '@angular/core';
import { Person, PersonImpl } from 'src/model/people';

@Component({
  selector: 'people-sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {
  samplePerson: Person;
  constructor() { }

  ngOnInit() {
    this.samplePerson = new PersonImpl(42, 'Sawi', 'Rainer', 183);
    setTimeout(() => {this.samplePerson.lastname = 'Sawitzki'; }, 5000);
  }

}
