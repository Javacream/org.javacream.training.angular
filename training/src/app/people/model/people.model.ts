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
export class PeopleController{

    counter = 100

    constructor(readonly httpClient:HttpClient, readonly config:ConfigService){}
	create(lastname:string, firstname:string, gender="d", height=50){
        const id = this.counter++
        const newPerson:Person = {id, lastname, firstname, gender, height}
        this.httpClient.post<number>(this.config.endpoint, newPerson).subscribe((id) => {
            this.subjectForPersonCreation.next(id)
            this.subjectForLastAction.next("create")
    
        }) 

    }
    subjectForPersonCreation = new Subject<number>()
	findById(id:number){
        this.httpClient.get<Person | undefined>(`${this.config.endpoint}/${id}`).subscribe((person) => {
            this.subjectForPersonSearch.next(person)
            this.subjectForLastAction.next("findById")
    
        })
    }
    subjectForPersonSearch = new Subject<Person | undefined>()


	update(person:Person){
        this.httpClient.put<number>(this.config.endpoint, person).subscribe((id) => {
            this.subjectForPersonUpdate.next(person)
        })
    }
    subjectForPersonUpdate= new Subject<Person>()
	deleteById(id:number){
        this.httpClient.delete(`${this.config.endpoint}/${id}`).subscribe(() => {
            this.subjectForPersonDeletion.next(id)
        this.subjectForLastAction.next("deleteById")
    })
}
    subjectForPersonDeletion = new Subject<number>()
	findAll():void{
        this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe((people) => this.subjectForPeopleList.next(people))
    }

    subjectForPeopleList = new Subject<Array<Person>>()

    subjectForLastAction = new Subject<string>()
}
