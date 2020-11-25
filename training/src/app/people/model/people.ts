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
        return this.counter
 
    }
    findById(id: number): Person | undefined {
        let p =this.peopleMap.get(id)
        return p
    }
    findAll(): Array<Person> {
        return Array.from(this.peopleMap.values());
    }

    update(person: Person) {
        this.peopleMap.set(person.id, person);
    }
    delete(id: number) {
        this.peopleMap.delete(id);
    }

    findByLastname(lastname:string){
        return Array.from(this.peopleMap.values()).filter((person) => person.lastname === lastname)
    }
}

export let peopleModel = new PeopleModel()
peopleModel.create("Sawitzki", "Rainer")
