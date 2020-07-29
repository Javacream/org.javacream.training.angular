import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people';
import {PeopleServerControllerService} from '../../services/people-server-controller.service'
@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  id: number;
  person: Person;
  constructor(private controller: PeopleServerControllerService) { }

  ngOnInit() {
  }

  async loadAsyncAwait() {
    this.person = await this.controller.findByIdPlainFetch(this.id);
  }
  loadSubscription() {
    this.controller.findByIdHttpClient(this.id, (person) => this.person = person);
  }

}
