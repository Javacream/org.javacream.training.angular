import { Component, OnInit } from '@angular/core';
import { Person, PeopleModelService } from '../people-model.service'
@Component({
  selector: 'app-person-from-server',
  templateUrl: './person-from-server.component.html',
  styleUrls: ['./person-from-server.component.css']
})
export class PersonFromServerComponent implements OnInit {

  id: number
  loaded: Person
  constructor(readonly peopleModelService: PeopleModelService) { }

  ngOnInit() {
  }
  loadPersonHttpClient() {
    console.log("loadPersonHttpClient")
    this.peopleModelService.loadPersonHttpClient(this.id, this.updateLoadPerson)
  }

  updateLoadPerson = (person: Person) => {
    console.log("updateLoadPerson: " + person.lastname)
    this.loaded = person
  }
}
