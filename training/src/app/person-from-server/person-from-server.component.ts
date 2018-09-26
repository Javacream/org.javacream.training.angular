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
    let updateLoadPerson = (person: Person) => {
      this.loaded = person
    }
    let errorLoadPerson = (error) => {
      console.log(error)
    }
    this.peopleModelService.loadPersonHttpClient(this.id, updateLoadPerson, errorLoadPerson)
  }

  async loadPersonHttpClientVersion2(){
    this.loaded = await this.peopleModelService.loadPerson(this.id);
  }

}
