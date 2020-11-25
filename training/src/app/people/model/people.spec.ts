import {Person, PersonClass} from './people'
describe("people", () => {
    it("person should be generated", () => {
        let person:Person = new PersonClass(101, "Sawitzki", "Klaus", 'm', 181)
        expect(person.lastname).toBe("Sawitzki")
    })

    it("json should be parsed", () => {
        
        let personJson:Person = {id: 100, lastname:"Sawitzki", firstname: "Rainer", height:183, gender: "m"}
        expect(personJson.lastname).toBe("Sawitzki")
    })

})