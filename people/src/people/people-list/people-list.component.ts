import { Component, OnInit } from '@angular/core';
import { Person } from 'src/model/people';
import { PeopleControllerService } from 'src/controller/people-controller.service';
@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Array<Person>;
  constructor(readonly controller: PeopleControllerService) { }

  ngOnInit() {
    this.people = this.controller.findAll();
  }

  handleRemovePerson(id: number) {
    this.controller.delete(id);
  }
}
