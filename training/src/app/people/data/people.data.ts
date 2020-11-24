import {Person, PersonClass} from '../model/people'
export let profile:Person = new PersonClass(1000, "Mustermann", "Hans", 'm', 199)
setTimeout(() => {
    profile.lastname = "Musterfrau"
    console.log("***** " + profile.lastname)
}, 1000)

export let people:Array<Person> = [new PersonClass(1000, "Sawitzki", "Rainer", 'm', 183), new PersonClass(1000, "Sawitzki", "Klaus", 'm', 181), profile]