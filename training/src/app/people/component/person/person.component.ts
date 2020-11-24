import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../model/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person:Person
  @Input() detail:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
