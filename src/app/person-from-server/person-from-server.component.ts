import { Component, OnInit } from '@angular/core';
import { Person, PeopleManager } from '../people-model.service';

@Component({
  selector: 'app-person-from-server',
  templateUrl: './person-from-server.component.html',
  styleUrls: ['./person-from-server.component.css']
})
export class PersonFromServerComponent implements OnInit {
  id:number
  loaded:Person
  constructor(readonly peopleManager: PeopleManager) { }

  ngOnInit() {
  }
  async loadPerson(){
    this.loaded = await this.peopleManager.loadPerson(this.id)
  }
  loadPersonHttpClient(){
    console.log("loadPersonHttpClient")
    this.peopleManager.loadPersonHttpClient(this.id, this.updateLoadPerson)
  }

  updateLoadPerson = (person:Person) => {
    console.log("updateLoadPerson: " + person.lastname)
    this.loaded = person
  }
}
