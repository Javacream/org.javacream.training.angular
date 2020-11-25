import {publish} from 'pubsub-js'
import { Injectable } from '@angular/core';

export interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}

export class PersonClass implements Person{
    constructor(readonly id:number, public lastname:string, public firstname:string, readonly gender:string, public height:number){}
}

@Injectable({
  providedIn: 'root'
})
export class PeopleModel {
    counter = 0;
    peopleMap: Map<number, Person>;
    constructor() {
        this.peopleMap = new Map<number, Person>();
    }

    create(lastname: string, firstname: string, gender = "x", height=183) {
        this.counter++;
        const p = new PersonClass(this.counter, lastname, firstname, gender, height);
        this.peopleMap.set(this.counter, p);
        publish('person.create', this.counter)

        return this.counter
 
    }
    findById(id: number): Person | undefined {
        let p =this.peopleMap.get(id)
        publish('person.search', id)
        return p
    }
    findAll(): Array<Person> {
        return Array.from(this.peopleMap.values());
    }

    update(person: Person) {
        publish('person.update', person.id)

        this.peopleMap.set(person.id, person);
    }
    delete(id: number) {
        this.peopleMap.delete(id);
        publish('person.delete', id)

    }

    findByLastname(lastname:string){
        publish('person.search')
        return Array.from(this.peopleMap.values()).filter((person) => person.lastname === lastname)
    }
}

