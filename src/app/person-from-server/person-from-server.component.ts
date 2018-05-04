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
  loadPerson(){
    this.peopleManager.loadPerson(this.id).then((data) => this.loaded = data).catch((error) => console.log(error))
  }

}
