import { Injectable } from '@angular/core';
import { PeopleModel, Person } from 'src/model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {

  constructor(readonly peopleModel: PeopleModel) { }


  create(lastname: string, firstname: string, height: number) {
    this.peopleModel.create(lastname, firstname, height);

  }
  findById(id: number): Person {
    return this.peopleModel.findById(id);
  }
  findAll(): Array<Person> {
    return this.peopleModel.peopleList;
  }

  update(person: Person) {
    this.peopleModel.update(person);
  }
  delete(id: number) {
    this.peopleModel.delete(id);
  }
}
