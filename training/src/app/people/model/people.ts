export interface Person{
	id: number
    lastname:string
	firstname: string
	gender: string
    height: number
    address?:string
}

export class PersonClass implements Person{
    constructor(readonly id: number, public lastname: string, readonly  firstname: string, readonly  gender: string, readonly  height:number){
    }
}


export class PeopleModel {
    counter = 0;
    peopleMap: Map<number, Person>;
    peopleList: Array<Person>;
    constructor() {
        this.peopleMap = new Map<number, Person>();
        this.peopleList = new Array<Person>();
    }

    create(lastname: string, firstname: string, gender:string, height: number) {
        this.counter++;
        const p = new PersonClass(this.counter, lastname, firstname, gender, height);
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


