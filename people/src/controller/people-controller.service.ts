import { Injectable } from '@angular/core';
import { Person, PersonImpl } from 'src/model/people';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  ENDPOINT = 'http://localhost:8080/people/';
  counter = 0;

  constructor() { }

  async create(lastname: string, firstname: string, height: number) {
    this.counter++;
    const person = new PersonImpl(this.counter, lastname, firstname, height);
    try {
    await fetch(`${this.ENDPOINT}/${this.counter}`, {method: 'PUT', body: JSON.stringify(person)});
  } catch (error) {
    console.log(error);
  }

  }
  async findById(id: number): Promise<Person> {
    return await this.loadPerson(id);
  }
  async findAll(): Promise<Array<Person>> {
    try {
      const response: Response = await fetch(this.ENDPOINT);
      const people: Array<Person> = await response.json();
      return people;

    } catch (error) {
      console.log(error);
      return null;
    }
  }

  update(person: Person) {
    fetch(`${this.ENDPOINT}/${person.id}`, {method: 'PUT', body: JSON.stringify(person)});
  }
  delete(id: number) {
    fetch(`${this.ENDPOINT}/${id}`, {method: 'DELETE'});
  }


  async loadPerson(id: number): Promise<Person> {

    try {
      const response: Response = await fetch(`${this.ENDPOINT}/${id}`);
      const person: Person = await response.json();
      return person;

    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
