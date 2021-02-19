import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { ConfigService } from "./config.service"

export interface Person{
	id:number
	lastname:string
	firstname:string
	height:number
    gender: string
}
@Injectable({
    providedIn: 'root'
  })
export class PeopleModel{

    counter = 1000
    people = new Map<number, Person>()

    constructor(readonly httpClient:HttpClient, readonly config:ConfigService){
        this.create("Sawitzki", "Rainer", "m", 183)
        this.create("Mustermann", "Hans")
        this.create("Schneider", "Hanna", "f")
 
    }
	create(lastname:string, firstname:string, gender="d", height=50){
        const id = this.counter++
        const newPerson:Person = {id, lastname, firstname, gender, height}
        this.people.set(id, newPerson)
        this.subjectForPersonCreation.next(id)
        this.subjectForLastAction.next("create")

    }
    subjectForPersonCreation = new Subject<number>()
	findById(id:number){
        this.subjectForPersonSearch.next(this.people.get(id))
        this.subjectForLastAction.next("findById")
    }
    subjectForPersonSearch = new Subject<Person | undefined>()


	update(person:Person){
        this.people.set(person.id, person)
        this.subjectForPersonUpdate.next(person)

    }
    subjectForPersonUpdate= new Subject<Person>()
	deleteById(id:number){
        this.people.delete(id)
        this.subjectForPersonDeletion.next(id)
        this.subjectForLastAction.next("deleteById")
    }
    subjectForPersonDeletion = new Subject<number>()
	findAll():void{
        this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe((people) => this.subjectForPeopleList.next(people))
    }

    subjectForPeopleList = new Subject<Array<Person>>()

    subjectForLastAction = new Subject<string>()
}
