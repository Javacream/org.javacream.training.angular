import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people';
import {PeopleServerControllerService} from '../../services/people-server-controller.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  ENDPOINT = "http://10.28.6.1:8080/people"

  id: number;
  person: Person;
  constructor(private controller: PeopleServerControllerService,  readonly http:HttpClient) { }

  ngOnInit() {
  }

  async loadAsyncAwait() {
    this.person = await this.controller.findByIdPlainFetch(this.id);
  }
  loadSubscription() {
    this.controller.findByIdHttpClient(this.id, (person) => this.person = person);
  }

  loadSubscriptionDirect(){
    this.http.get<Person>(`${this.ENDPOINT}/${this.id}`).subscribe((person) => this.person = person)
  }

}
