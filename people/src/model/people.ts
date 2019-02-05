export interface Person {
    lastname: string;
    firstname: string;
    height: number;
    id: number;
}

export class PersonImpl implements Person {
    constructor(readonly id: number, readonly lastname: string, readonly firstname: string, readonly height: number){}
}

class PeopleModel {
    counter = 0;
    peopleMap: Map<number, Person>;
    peopleList: Array<Person>;
    constructor() {
        this.peopleMap = new Map<number, Person>();
        this.peopleList = new Array<Person>();
    }

    create(lastname: string, firstname: string, height: number) {
        this.counter++;
        const p = new PersonImpl(this.counter, lastname, firstname, height);
        this.peopleMap.set(this.counter, p);
        this.peopleList.push(p);

    }
    findById(id: number): Person {
        return this.peopleMap.get(id);
    }
    findAll(): Array<Person> {
        return this.peopleList;
    }

    update(person: Person) {
        const oldPerson = this.peopleMap.get(person.id);
        const index = this.peopleList.indexOf(oldPerson, 0);
        if (index > -1) {
            this.peopleList[index] = person;
         }
        this.peopleMap.set(person.id, person);
    }
    delete(id: number) {
        const index = this.peopleList.indexOf(this.peopleMap.get(id), 0);
        if (index > -1) {
           this.peopleList.splice(index, 1);
        }
        this.peopleMap.delete(id);
    }
}

export let peopleModel = new PeopleModel();
