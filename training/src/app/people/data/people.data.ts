import {Person, PersonClass} from '../model/people'
export let profile:Person = new PersonClass(1000, "Mustermann", "Hans", 'm', 199)
setTimeout(() => {
    profile.lastname = "Musterfrau"
    console.log("***** " + profile.lastname)
}, 1000)