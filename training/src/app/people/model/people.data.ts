import {Person} from './people.model'

export let profile:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
export let config = {
appName: "P E O P L E",
company: "Javacream"
}

export let people = new Map<number, Person>()

people.set (1, create(1, "Sawitzki", "Rainer", "m", 183))
people.set (2, create(2, "Meier", "Hanna", "f", 175))
people.set (3, create(3, "Meier", "Franz", "m", 186))
people.set (4, create(4, "Metzger", "Johann", "m", 122))
people.set (5, create(5, "Schneider", "Erna", "f", 199))

function create(id:number, lastname:string, firstname:string, gender:string, height:number){
    return {id, lastname, firstname, gender, height}
}

//setTimeout(() => {profile.firstname = "Klaus"; console.log("Changed firstname: " + profile.firstname)}, 1000)
