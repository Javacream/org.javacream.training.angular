import {Person} from './people.model'
describe("People Model Tests", () => {
    it("should create a person using an object literal", () => {
        let person:Person = {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
        expect(person.lastname).toBe("Sawitzki")
    })


})