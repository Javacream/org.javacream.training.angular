import { Component, OnInit } from '@angular/core';
import { PeopleControllerService } from 'src/controller/people-controller.service';
import { Person } from 'src/model/people';

@Component({
  selector: 'people-person-loader',
  templateUrl: './person-loader.component.html',
  styleUrls: ['./person-loader.component.css']
})
export class PersonLoaderComponent implements OnInit {
  id: number;
  person: Person;
  constructor(private controller: PeopleControllerService) { }

  ngOnInit() {
  }

  async load() {
    this.person = await this.controller.loadPerson(this.id);
  }

}
