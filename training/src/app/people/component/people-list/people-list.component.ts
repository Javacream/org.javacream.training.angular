import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() people:Array<Person>
  detail = true
  buttonCaption = "Detail off"
  constructor() { }

  ngOnInit(): void {
  }

  switchDetail(){
    this.detail = !this.detail;
    this.buttonCaption = this.detail ? "Detail Off" : "Detail On"
  }
}
