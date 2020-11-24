import {Person, PersonClass} from '../model/people'
export let profile:Person = new PersonClass(1000, "Mustermann", "Hans", 199, 'm')
setTimeout(() => {
    profile.lastname = "Musterfrau"
    console.log("***** " + profile.lastname)
}, 1000)