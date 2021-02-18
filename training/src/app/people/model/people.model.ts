interface Person{
	id:number
	lastname:string
	firstname:string
	height:number
    gender: string
}

class PeopleModel{

    counter = 1000
    people = new Map<number, Person>()

    constructor(){
        this.create("Sawitzki", "Rainer", "m", 183)
        this.create("Mustermann", "Hans")
        this.create("Schneider", "Hanna", "f")
 
    }
	create(lastname:string, firstname:string, gender="d", height=50):number{
        const id = this.counter++
        const newPerson:Person = {id, lastname, firstname, gender, height}
        this.people.set(id, newPerson)
        return id
    }
	findById(id:number):Person | undefined{
        return this.people.get(id)
    }
	findAll():Array<Person>{
        return Array.from(this.people.values())
    }
	update(person):void{
        this.people.set(person.id, person)

    }
	deleteById(id:number):void{
        this.people.delete(id)
    }

}
