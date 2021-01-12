import {Person} from './people.model'

export let profile:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
export let config = {
appName: "P E O P L E",
company: "Javacream"
}

//setTimeout(() => {profile.firstname = "Klaus"; console.log("Changed firstname: " + profile.firstname)}, 1000)
