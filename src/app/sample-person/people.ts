export interface Person{
  lastname: string
  firstname:string
  height:number
  gender:string
  id:number
}

class PersonClass implements Person{
  lastname: string
  firstname:string
  height:number
  gender:string
  id:number

  constructor(id: number, lastname: string, firstname:string, gender:string, height: number){
    this.id = id
    this.lastname = lastname
    this.firstname = firstname
    this.height = height
    this.gender = gender
  }
}
export class PeopleManager{
  people: Array<Person>
  sample_person: Person
  constructor(){
    this.people = new Array<Person>()
    this.sample_person = {
      lastname: "Sawitzki",
      firstname: "Rainer",
      height: 183,
      gender: "m",
      id: 1
    }
  }


}
