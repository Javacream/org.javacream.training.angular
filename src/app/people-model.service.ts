import { Injectable } from '@angular/core';
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
@Injectable()
  export class PeopleManager{
  static peopleCounter: number = 0
  people: Array<Person>
  sample_person: Person
  constructor(){
    console.log("*********** Initializing PeopleManager")

    this.people = new Array<Person>()
    this.sample_person = {
      lastname: "Sawitzki",
      firstname: "Rainer",
      height: 183,
      gender: "m",
      id: 1
    }
    let arr = [1,2,3,4,5]
    arr.forEach((element) => {
      let person = {
        lastname: "Lastname" + element,
        firstname: "Firstname" + element,
        height: 180 + element,
        gender: "m",
        id: 100 + element
      }
      this.people.push(person)

    })

}
save(p:any){
  PeopleManager.peopleCounter++
  let newPerson:Person ={...p, id: PeopleManager.peopleCounter}
  this.people.push(newPerson)

}
remove(index:number){
  if (index > -1){
    this.people.splice(index, 1)
  }
}
async loadPerson(id:number){
  try{
    let response = await fetch(`http://localhost:8080/people/${id}`)
    let person = await response.json()
    return person
  }
  catch(error){
    console.log(error)
    return null
  }
}

}
