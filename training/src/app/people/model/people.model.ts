import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
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
	findAllWithSubscription(update:(_:Array<Person>) => void):void{
        this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe((people) => update(people))
    }

}
