import { Component, OnInit } from '@angular/core';
import {people} from '../../model/people.data'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  peopleList = Array.from(people.values())

  demo(){
    console.log("click!")
  }

}
