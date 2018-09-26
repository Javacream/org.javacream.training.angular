import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleModelService {
  private sortAlgorithms = new Map<string, (p1: Person, p2: Person) => number>()
  private people: Array<Person> = []
  save(person: Person) {
    this.people.push(person)
  }
  delete(person: Person) {
    const index = this.people.indexOf(person, 0);
    if (index > -1) {
      this.people.splice(index, 1);
    }
  }
  peopleList() {
    return this.people
  }
  constructor() {
    this.people.push(this.samplePerson)
    this.people.push(new SimplePerson("Mustermann", "Klaus", "m", 171))
    this.people.push(new SimplePerson("Sawitzki", "Klaus", "m", 181))
    this.people.push(new SimplePerson("Metzger", "Hanna", "f", 173))
    this.people.push(new SimplePerson("Pausenkurt", "Pascal", "m", 199))
    this.sortAlgorithms["lastname"] = (p1: Person, p2: Person) => { return p1.lastname.localeCompare(p2.lastname) }
    this.sortAlgorithms["firstname"] = (p1: Person, p2: Person) => { return p1.firstname.localeCompare(p2.firstname) }
    this.sortAlgorithms["height"] = (p1: Person, p2: Person) => { return p1.height - p2.height }
    this.sortAlgorithms["nop"] = (p1: Person, p2: Person) => { return 0 }
  }
  samplePerson = { lastname: "Sawitzki", firstname: "Rainer", gender: "m", height: 183 }
  sort(algorithm: string) {
    this.people.sort(this.sortAlgorithms[algorithm])
  }

}
export interface Person {
  lastname: string
  firstname: string
  gender: string
  height: number
}

export class SimplePerson implements Person {
  constructor(readonly lastname: string, readonly firstname: string, readonly gender: string, readonly height: number) {
  }

}

