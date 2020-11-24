import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() people:Array<Person>
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("clicked!")
  }
}
