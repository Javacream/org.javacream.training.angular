import {Person, PersonClass} from './people'
describe("people", () => {
    it("person should be generated", () => {
        let person:Person = new PersonClass(101, "Sawitzki", "Klaus", 181, 'm')
    })

    it("json should be parsed", () => {
        
        let personJson:Person = {id: 100, lastname:"Sawitzki", firstname: "Rainer", height:183, gender: "m"}
    })

})