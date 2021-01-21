export interface Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}
export class PeopleController {

  constructor() { 

    this.people = new Map()
    this.people.set (1, create(1, "Sawitzki", "Rainer", "m", 183))
    this.people.set (2, create(2, "Meier", "Hannelore", "f", 175))
    this.people.set (3, create(3, "Meier", "Franz", "m", 186))
    this.people.set (4, create(4, "Metzger", "Johann", "m", 122))
    this.people.set (5, create(5, "Schneider", "Erna", "f", 199))
    
  }

  people: Map<number, Person>
  
  idCounter = 0
  
  deleteById(id:number){
    this.people.delete(id)
  }
  findById(id:number):Person|undefined{
    return this.people.get(id)
  }
  findAll(){
    return Array.from(this.people.values())
  }

  create(lastname:string, firstname:string, gender:"d", height:50){
    this.idCounter++
    let newPerson = {id:this.idCounter, lastname, firstname, gender, height}
    this.people.set(this.idCounter, newPerson)
  }
}


function create(id:number, lastname:string, firstname:string, gender:string, height:number){
    return {id, lastname, firstname, gender, height}
}
