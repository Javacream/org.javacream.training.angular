import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/model/people';
@Component({
  selector: 'people-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }


}
